/**
 * src/lib/webviewIpc/host.ts
 *
 * Production-ready, secure Host IPC Bridge for PixInsight V8 WebView.
 * Implements the Five Pillars: Iron Shield Security, Unbreakable Stability,
 * Structured Documentation, High-Performance Polling, and Modern Best Practices.
 */

import {
  IpcSecurityPolicy,
  IpcRequest,
  IpcResponse,
  IpcEvent,
  IpcMethodHandler
} from "./types";
import { WEBVIEW_CLIENT_JS } from "./clientSource";
import { DevToolsConfig, DevToolsCommand } from "./devtoolsTypes";
import { DEVTOOLS_INJECTED_JS } from "./devtoolsSource";
import { PixInsightDevToolsPanel } from "./devtoolsUi";

/**
 * Denylist of critical high-risk objects and dangerous primitives
 * that are explicitly blocked from automatic exposure unless explicitly requested.
 */
const BLOCKED_SYSTEM_TARGETS = new Set([
  "File",
  "ExternalProcess",
  "NetworkTransfer",
  "FileDownload",
  "FileUpload",
  "Security",
  "Settings",
  "Runtime",
  "CoreApplication",
  "eval",
  "Function"
]);

// PixInsight's automatic script-language detector can misinterpret a literal
// double slash inside a JavaScript string as a source comment. Build URL scheme
// prefixes from individual characters so generated scripts remain parser-safe.
const URL_SCHEME_SEPARATOR = ":" + String.fromCharCode(47, 47);
const FILE_URL_PREFIX = "file" + URL_SCHEME_SEPARATOR;
const HTTP_URL_PREFIX = "http" + URL_SCHEME_SEPARATOR;
const HTTPS_URL_PREFIX = "https" + URL_SCHEME_SEPARATOR;

/**
 * Host IPC Manager running inside PixInsight V8 Scripting Engine.
 * Wraps a PixInsight WebView control and provides secure, strongly-typed
 * bi-directional RPC communication.
 */
export class PixInsightWebViewBridge {
  private webView: WebView;
  private timer: Timer | null = null;
  private sessionToken: string;
  private handlers: Map<string, IpcMethodHandler> = new Map();
  private policy: Required<IpcSecurityPolicy>;
  private devToolsConfig: Required<DevToolsConfig>;
  private devToolsPanel: PixInsightDevToolsPanel | null = null;
  private devToolsPendingCommands: Map<string, {
    command: DevToolsCommand;
    createdAt: number;
    documentGeneration: number;
    resolve: (value: any) => void;
    reject: (error: any) => void;
  }> = new Map();
  private devToolsCommandQueue: string[] = [];
  private devToolsCommandInFlight: string | null = null;
  private devToolsAgentReady: boolean = false;
  private devToolsAgentInjectionPending: boolean = false;
  private devToolsOriginProbePending: boolean = false;
  private clientAgentReady: boolean = false;
  private clientAgentInjectionPending: boolean = false;
  private locationProbePurpose: "poll" | "devtools" | "query" | null = null;
  private ipcQueuePopPending: boolean = false;
  private devToolsDispatchPermit: boolean = false;
  private documentGeneration: number = 0;
  private documentLoaded: boolean = false;
  private queuePollingAnnounced: boolean = false;
  private isDestroyed: boolean = false;
  private lastVerifiedUrl: string = "";
  private pendingLocationCallback: ((url: string) => void) | null = null;
  private hotkeyDialog: Dialog | null = null;
  private previousDialogKeyPress: ((key: number, modifiers: number) => boolean) | null = null;
  private clientReadyHandlers: Array<() => void> = [];

  /**
   * Constructs a new PixInsightWebViewBridge attached to a PixInsight WebView control.
   *
   * @param webView The target PixInsight WebView control instance.
   * @param policy Optional security policy configuration.
   * @param devTools Optional native DevTools configuration options.
   */
  constructor(webView: WebView, policy?: IpcSecurityPolicy, devTools?: DevToolsConfig) {
    if (!webView) {
      throw new Error("PixInsightWebViewBridge: Invalid or null WebView provided.");
    }

    this.webView = webView;
    this.sessionToken = this.generateSessionToken();

    // Default Iron Shield Security Policy
    this.policy = {
      allowLocalOnly: policy?.allowLocalOnly ?? true,
      allowedOrigins: policy?.allowedOrigins ?? [FILE_URL_PREFIX, "data:", "about:blank"],
      allowUnregisteredMethods: policy?.allowUnregisteredMethods ?? false,
      maxMessageAgeMs: policy?.maxMessageAgeMs ?? 30000,
      maxQueueSize: policy?.maxQueueSize ?? 100
    };

    this.devToolsConfig = {
      enabled: devTools?.enabled ?? false,
      hotkeyToggle: devTools?.hotkeyToggle ?? true,
      requireTrustedOrigin: devTools?.requireTrustedOrigin ?? true,
      allowExpressionEval: devTools?.allowExpressionEval ?? true,
      allowDomEdits: devTools?.allowDomEdits ?? true,
      maxSnapshotDepth: devTools?.maxSnapshotDepth ?? 8,
      maxSnapshotNodes: devTools?.maxSnapshotNodes ?? 1000,
      maxResponsePayloadBytes: devTools?.maxResponsePayloadBytes ?? 262144,
      consoleForwardRateLimitPerSec: devTools?.consoleForwardRateLimitPerSec ?? 200,
      commandTimeoutMs: devTools?.commandTimeoutMs ?? 5000
    };

    // Register internal logging handler
    this.registerHandler("__client_log__", (params) => {
      try {
        if (params && params.message) {
          if (params.level === "error") {
            Console.criticalln(`[WebView Client Error] ${params.message}`);
          } else if (params.level === "warn") {
            Console.warningln(`[WebView Client Warning] ${params.message}`);
          } else {
            Console.writeln(`[WebView Client] ${params.message}`);
          }
        }
      } catch (e: any) {
        // Suppress console output errors
      }
    });

    // A page can only request this narrow action after normal IPC origin and token validation.
    // This provides F12 behavior when the embedded WebView consumes native dialog key events.
    this.registerHandler("__devtools_toggle__", () => {
      try {
        if (!this.devToolsConfig.enabled || !this.devToolsConfig.hotkeyToggle) {
          throw new Error("DEVTOOLS_HOTKEY_DISABLED");
        }
        this.toggleDevTools();
        return { visible: this.devToolsPanel ? this.devToolsPanel.visible : false };
      } catch (error: any) {
        throw error;
      }
    });

    // Wire WebView script result listener for location probes and responses
    this.webView.onScriptResultAvailable = (value: any) => {
      this.handleScriptResult(value);
    };

    // Navigation invalidates every page-owned handle and pending operation.
    this.webView.onLoadStarted = () => {
      try {
        if (this.isDestroyed) return;
        this.documentGeneration++;
        this.documentLoaded = false;
        this.queuePollingAnnounced = false;
        this.lastVerifiedUrl = "";
        this.locationProbePurpose = null;
        this.ipcQueuePopPending = false;
        this.devToolsDispatchPermit = false;
        this.devToolsOriginProbePending = false;
        this.clientAgentReady = false;
        this.clientAgentInjectionPending = false;
        this.devToolsAgentReady = false;
        this.devToolsAgentInjectionPending = false;
        this.rejectAllDevToolsCommands(new Error("DEVTOOLS_NAVIGATION: The inspected document changed."));
      } catch (error: any) {
        Console.warningln(`PixInsightWebViewBridge: Navigation reset failed: ${error.message || error}`);
      }
    };

    // Inject only the tokenized IPC runtime on load; DevTools waits for origin verification.
    this.webView.onLoadFinished = (ok: boolean) => {
      try {
        if (ok && !this.isDestroyed) {
          this.documentLoaded = true;
          this.devToolsAgentReady = false;
          this.devToolsAgentInjectionPending = false;
          this.devToolsOriginProbePending = false;
          this.lastVerifiedUrl = "";
          Console.writeln(`[WebView IPC] Document loaded (generation ${this.documentGeneration}).`);
          this.injectClientRuntime();
        } else if (!ok && !this.isDestroyed) {
          Console.warningln("[WebView IPC] WebView document load failed.");
        }
      } catch (error: any) {
        Console.warningln(`PixInsightWebViewBridge: Load completion failed: ${error.message || error}`);
      }
    };
  }

  /** Registers a callback invoked after the IPC client is installed in each document. */
  public onClientReady(handler: () => void): void {
    try {
      if (typeof handler !== "function") throw new Error("Client-ready handler must be a function.");
      this.clientReadyHandlers.push(handler);
      if (this.clientAgentReady && this.documentLoaded) handler();
    } catch (error: any) {
      Console.warningln(`[WebView IPC] Client-ready handler registration failed: ${error.message || error}`);
    }
  }

  /** Invokes page bootstrap hooks only for the acknowledged current document. */
  private notifyClientReady(): void {
    try {
      Console.writeln(`[WebView IPC] Invoking ${this.clientReadyHandlers.length} page bootstrap handler(s).`);
      for (const handler of this.clientReadyHandlers) {
        try {
          handler();
        } catch (error: any) {
          Console.criticalln(`[WebView IPC] Page bootstrap handler failed: ${error.message || error}`);
        }
      }
    } catch (error: any) {
      Console.criticalln(`[WebView IPC] Client-ready notification failed: ${error.message || error}`);
    }
  }

  /**
   * Binds an F12 hotkey event handler to a parent Dialog window to toggle DevTools.
   *
   * @param parentDialog The top-level Dialog containing the WebView.
   */
  public bindDevToolsHotkey(parentDialog: Dialog): void {
    try {
      if (!this.devToolsConfig.enabled || !this.devToolsConfig.hotkeyToggle || !parentDialog) return;

      this.attachDevToolsPanel(parentDialog);
      if (this.hotkeyDialog === parentDialog) return;
      if (this.hotkeyDialog && this.hotkeyDialog !== parentDialog) this.restoreDevToolsHotkey();

      this.hotkeyDialog = parentDialog;
      this.previousDialogKeyPress = typeof parentDialog.onKeyPress === "function"
        ? parentDialog.onKeyPress
        : null;

      parentDialog.onKeyPress = (key: number, modifiers: number) => {
        try {
          if (key === KeyCode.F12 && modifiers === KeyboardModifier.None) {
            this.toggleDevTools();
            return true;
          }
          return this.previousDialogKeyPress
            ? this.previousDialogKeyPress.call(parentDialog, key, modifiers)
            : false;
        } catch (error: any) {
          Console.warningln(`PixInsightWebViewBridge: F12 handler failed: ${error.message || error}`);
          return false;
        }
      };
    } catch (error: any) {
      Console.warningln(`PixInsightWebViewBridge: Could not bind F12: ${error.message || error}`);
    }
  }

  /** Restores the dialog key callback that existed before bindDevToolsHotkey(). */
  private restoreDevToolsHotkey(): void {
    try {
      if (this.hotkeyDialog) {
        this.hotkeyDialog.onKeyPress = this.previousDialogKeyPress as any;
      }
    } catch (error: any) {
      // The parent dialog may already have been destroyed by the PixInsight runtime.
    } finally {
      this.hotkeyDialog = null;
      this.previousDialogKeyPress = null;
    }
  }

  /**
   * Creates the native DevTools sibling panel under the owner dialog.
   * The caller must add the returned control to the dialog's layout.
   *
   * @param parent Native owner dialog or control.
   * @returns Native DevTools panel control.
   */
  public attachDevToolsPanel(parent: Control): Control | null {
    if (!this.devToolsConfig.enabled || this.isDestroyed || !parent) return null;

    if (!this.devToolsPanel) {
      this.devToolsPanel = new PixInsightDevToolsPanel(parent, this, this.devToolsConfig);
    }
    return this.devToolsPanel.control;
  }

  /**
   * Toggles the native external DevTools window open or closed.
   */
  public toggleDevTools(): void {
    if (!this.devToolsConfig.enabled || this.isDestroyed) return;

    if (!this.devToolsPanel) return;

    this.injectDevToolsAgent();
    this.devToolsPanel.toggle();
  }

  /**
   * Injects the browser-side DevTools helper agent into the WebView.
   */
  private injectDevToolsAgent(): void {
    try {
      if (
        this.isDestroyed ||
        !this.devToolsConfig.enabled ||
        !this.documentLoaded ||
        (this.devToolsConfig.requireTrustedOrigin && !this.isOriginAllowed(this.lastVerifiedUrl)) ||
        this.devToolsAgentReady ||
        this.devToolsAgentInjectionPending
      ) {
        return;
      }

      this.devToolsAgentInjectionPending = true;
      const injectedConfig = JSON.stringify({
        maxSnapshotDepth: this.devToolsConfig.maxSnapshotDepth,
        maxSnapshotNodes: this.devToolsConfig.maxSnapshotNodes,
        maxResponsePayloadBytes: this.devToolsConfig.maxResponsePayloadBytes,
        consoleForwardRateLimitPerSec: this.devToolsConfig.consoleForwardRateLimitPerSec,
        hotkeyToggle: this.devToolsConfig.hotkeyToggle && this.devToolsPanel !== null
      }).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
      const generation = this.documentGeneration;
      const script = `(function() {
        try {
          window.__PI_DEVTOOLS_CONFIG__ = ${injectedConfig};
          ${DEVTOOLS_INJECTED_JS}
          return JSON.stringify({
            channel: "devtools-agent",
            generation: ${generation},
            ready: window.__PI_DEVTOOLS_AGENT__ === true &&
              typeof window.__PI_DEVTOOLS_EXECUTE__ === "function"
          });
        } catch (error) {
          return JSON.stringify({
            channel: "devtools-agent",
            generation: ${generation},
            ready: false,
            error: error && error.message ? error.message : String(error)
          });
        }
      })()`;
      this.webView.evaluateScript(script);
    } catch (e: any) {
      this.devToolsAgentInjectionPending = false;
      Console.warningln(`PixInsightWebViewBridge: DevTools agent injection error: ${e.message || e}`);
    }
  }

  /**
   * Queues a DevTools command using callbacks suitable for the PJSR event model.
   *
   * @param cmd DevTools command details.
   * @param onSuccess Called with the tagged DevTools response.
   * @param onError Called when validation or page execution fails.
   */
  public requestDevToolsCommand(
    cmd: Omit<DevToolsCommand, "id">,
    onSuccess: (value: any) => void,
    onError?: (error: any) => void
  ): void {
    const reject = onError ?? (() => {});

    try {
      if (this.isDestroyed) {
        reject(new Error("PixInsightWebViewBridge: Bridge is destroyed."));
        return;
      }
      if (!this.devToolsConfig.enabled) {
        reject(new Error("DEVTOOLS_DISABLED: Enable DevTools in bridge configuration."));
        return;
      }
      if (this.devToolsPendingCommands.size >= this.policy.maxQueueSize) {
        reject(new Error("DEVTOOLS_QUEUE_FULL: Too many inspector operations are pending."));
        return;
      }
      if (cmd.kind === "evaluate" && !this.devToolsConfig.allowExpressionEval) {
        reject(new Error("DEVTOOLS_EVAL_DISABLED: Expression evaluation is disabled."));
        return;
      }
      if (
        (cmd.kind === "setAttribute" || cmd.kind === "removeAttribute" || cmd.kind === "setText") &&
        !this.devToolsConfig.allowDomEdits
      ) {
        reject(new Error("DEVTOOLS_DOM_EDITS_DISABLED: DOM editing is disabled."));
        return;
      }
      if (
        this.devToolsConfig.requireTrustedOrigin &&
        this.lastVerifiedUrl &&
        !this.isOriginAllowed(this.lastVerifiedUrl)
      ) {
        reject(new Error("DEVTOOLS_SECURITY_ERROR: Untrusted origin blocked from DevTools execution."));
        return;
      }

      const id = `dt_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
      const command: DevToolsCommand = { id, ...cmd };
      this.devToolsPendingCommands.set(id, {
        command,
        createdAt: Date.now(),
        documentGeneration: this.documentGeneration,
        resolve: onSuccess,
        reject
      });
      this.devToolsCommandQueue.push(id);
      this.dispatchNextDevToolsCommand();
    } catch (error: any) {
      reject(error);
    }
  }

  /**
   * Sends a one-shot DevTools command to the in-page DevTools agent.
   *
   * @param cmd DevTools command details.
   * @returns Promise resolving to the command output.
   */
  public sendDevToolsCommand(cmd: Omit<DevToolsCommand, "id">): Promise<any> {
    return new Promise((resolve, reject) => {
      this.requestDevToolsCommand(cmd, resolve, reject);
    });
  }

  /**
   * Dispatches one queued command after the page agent has acknowledged readiness.
   */
  private dispatchNextDevToolsCommand(): void {
    try {
      if (this.isDestroyed || this.devToolsCommandInFlight) return;

      this.expireDevToolsCommands();
      if (this.devToolsCommandQueue.length === 0) return;
      // At most one inspector command may run per completed browser-RPC queue
      // read. This prevents the continuously polling DevTools panel from
      // starving normal page-to-host calls.
      if (!this.devToolsDispatchPermit) return;
      // Raw location and IPC queue results are intentionally untagged. Keep all
      // DevTools evaluations serialized behind them so result channels cannot race.
      if (
        this.ipcQueuePopPending ||
        (this.locationProbePurpose !== null && this.locationProbePurpose !== "devtools")
      ) return;

      if (this.devToolsConfig.requireTrustedOrigin && !this.lastVerifiedUrl) {
        this.requestRawLocationProbe("devtools");
        return;
      }

      if (
        this.devToolsConfig.requireTrustedOrigin &&
        !this.isOriginAllowed(this.lastVerifiedUrl)
      ) {
        this.rejectQueuedDevToolsCommands(
          new Error("DEVTOOLS_SECURITY_ERROR: Untrusted origin blocked from DevTools execution.")
        );
        return;
      }

      if (!this.devToolsAgentReady) {
        this.injectDevToolsAgent();
        return;
      }

      const id = this.devToolsCommandQueue.shift();
      if (!id) return;

      const pending = this.devToolsPendingCommands.get(id);
      if (!pending) {
        this.dispatchNextDevToolsCommand();
        return;
      }
      if (pending.documentGeneration !== this.documentGeneration) {
        this.devToolsPendingCommands.delete(id);
        pending.reject(new Error("DEVTOOLS_NAVIGATION: The inspected document changed."));
        this.dispatchNextDevToolsCommand();
        return;
      }

      const safeJson = JSON.stringify(pending.command)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
      const script = `(function() {
        if (typeof window.__PI_DEVTOOLS_EXECUTE__ !== "function") {
          return JSON.stringify({
            channel: "devtools",
            id: ${JSON.stringify(id)},
            ok: false,
            error: "DEVTOOLS_AGENT_NOT_READY"
          });
        }
        return window.__PI_DEVTOOLS_EXECUTE__(${safeJson});
      })()`;

      this.devToolsDispatchPermit = false;
      this.devToolsCommandInFlight = id;
      this.webView.evaluateScript(script);
    } catch (error: any) {
      this.devToolsOriginProbePending = false;
      if (this.locationProbePurpose === "devtools") this.locationProbePurpose = null;
      const inFlightId = this.devToolsCommandInFlight;
      if (inFlightId) {
        const inFlight = this.devToolsPendingCommands.get(inFlightId);
        this.devToolsPendingCommands.delete(inFlightId);
        this.devToolsCommandInFlight = null;
        if (inFlight) inFlight.reject(error);
      }
      this.dispatchNextDevToolsCommand();
    }
  }

  /** Rejects every queued DevTools operation after a shared security failure. */
  private rejectQueuedDevToolsCommands(error: Error): void {
    try {
      const queuedIds = this.devToolsCommandQueue.slice();
      this.devToolsCommandQueue = [];
      for (const id of queuedIds) {
        const pending = this.devToolsPendingCommands.get(id);
        if (!pending) continue;
        this.devToolsPendingCommands.delete(id);
        pending.reject(error);
      }
    } catch (caught: any) {
      Console.warningln(`PixInsightWebViewBridge: Queue rejection failed: ${caught.message || caught}`);
    }
  }

  /** Rejects queued and in-flight DevTools operations during navigation or teardown. */
  private rejectAllDevToolsCommands(error: Error): void {
    try {
      for (const pending of this.devToolsPendingCommands.values()) pending.reject(error);
      this.devToolsPendingCommands.clear();
      this.devToolsCommandQueue = [];
      this.devToolsCommandInFlight = null;
    } catch (caught: any) {
      Console.warningln(`PixInsightWebViewBridge: Command invalidation failed: ${caught.message || caught}`);
    }
  }

  /**
   * Rejects commands that exceeded the configured PJSR-side deadline.
   */
  private expireDevToolsCommands(): void {
    const now = Date.now();
    const expired: string[] = [];

    for (const [id, pending] of this.devToolsPendingCommands) {
      if (now - pending.createdAt > this.devToolsConfig.commandTimeoutMs) {
        expired.push(id);
      }
    }

    for (const id of expired) {
      const pending = this.devToolsPendingCommands.get(id);
      if (!pending) continue;

      this.devToolsPendingCommands.delete(id);
      this.devToolsCommandQueue = this.devToolsCommandQueue.filter(queuedId => queuedId !== id);
      if (this.devToolsCommandInFlight === id) {
        this.devToolsCommandInFlight = null;
      }
      pending.reject(new Error(`DEVTOOLS_TIMEOUT: Command '${pending.command.kind}' timed out.`));
    }
  }

  /**
   * Generates a cryptographically strong runtime session token.
   */
  private generateSessionToken(): string {
    try {
      // String.UUID() is provided by the PixInsight V8 runtime and uses the
      // platform UUID generator, unlike predictable Math.random() output.
      const runtimeUuid = ("" as any).UUID();
      if (runtimeUuid && typeof runtimeUuid === "string") {
        return `pi_token_${runtimeUuid.replace(/[^a-zA-Z0-9]/g, "")}`;
      }
      throw new Error("UUID_UNAVAILABLE");
    } catch (e: any) {
      // Node-based unit tests do not expose PJSR's UUID extension. This value is
      // only a compatibility fallback; production PixInsight uses the branch above.
      const entropy = `${Date.now()}_${Math.random()}_${Math.random()}`;
      return `pi_token_${entropy.replace(/[^a-zA-Z0-9]/g, "")}`;
    }
  }

  /**
   * Registers an explicit RPC method handler.
   *
   * @param method Method name exposed to the WebView page.
   * @param handler Function to execute when called by WebView.
   */
  public registerHandler(method: string, handler: IpcMethodHandler): void {
    if (!method || typeof method !== "string") {
      throw new Error("PixInsightWebViewBridge: Method name must be a non-empty string.");
    }
    if (typeof handler !== "function") {
      throw new Error("PixInsightWebViewBridge: Handler must be a function.");
    }
    this.handlers.set(method, handler);
  }

  /**
   * Exposes an entire module object or class instance by registering its methods under a prefix.
   *
   * @param prefix Module name prefix (e.g. 'ImageWindow').
   * @param target Object whose methods will be exposed.
   * @param allowedMethods Optional allowlist of method names to expose.
   */
  public exposeModule(prefix: string, target: any, allowedMethods?: string[]): void {
    try {
      if (!prefix || (BLOCKED_SYSTEM_TARGETS.has(prefix) && !this.policy.allowUnregisteredMethods)) {
        Console.warningln(`[Iron Shield Security] Blocked exposure of high-risk module target: '${prefix}'`);
        return;
      }

      if (!target || (typeof target !== "object" && typeof target !== "function")) {
        return;
      }

      const keys = Object.getOwnPropertyNames(target);
      for (const key of keys) {
        if (key.startsWith("_") || key === "constructor") continue;
        if (allowedMethods && !allowedMethods.includes(key)) continue;

        try {
          const prop = target[key];
          if (typeof prop === "function") {
            const fullMethod = `${prefix}.${key}`;
            this.registerHandler(fullMethod, (params) => {
              const args = params === null || params === undefined ? [] : Array.isArray(params) ? params : [params];
              return prop.apply(target, args);
            });
          }
        } catch (e: any) {
          // Skip inaccessible properties
        }
      }
    } catch (e: any) {
      Console.warningln(`PixInsightWebViewBridge: Module exposure error: ${e.message || e}`);
    }
  }

  /**
   * Bulk-exposes multiple target modules/classes under explicit prefixes.
   *
   * @param modules Map or Record of prefix names to target instances/classes.
   * @param allowlist Optional map of prefix to explicit allowed method names.
   */
  public exposeModules(
    modules: Record<string, any>,
    allowlist?: Record<string, string[]>
  ): void {
    if (!modules || typeof modules !== "object") return;

    for (const prefix of Object.keys(modules)) {
      if (BLOCKED_SYSTEM_TARGETS.has(prefix) && !this.policy.allowUnregisteredMethods) {
        Console.warningln(`[Iron Shield Security] Blocked bulk exposure of dangerous target: '${prefix}'`);
        continue;
      }
      const allowed = allowlist ? allowlist[prefix] : undefined;
      this.exposeModule(prefix, modules[prefix], allowed);
    }
  }

  /**
   * DANGEROUS / CONVENIENCE FUNCTION: Exposes known standard PixInsight classes/namespaces
   * to the WebView client.
   *
   * SECURITY WARNING: This method allows the loaded web page to execute native PixInsight logic
   * and processes asynchronously over the bridge.
   */
  public dangerouslyExposeAll(): void {
    this.policy.allowUnregisteredMethods = true;

    const globalContext = typeof globalThis !== "undefined" ? globalThis : (typeof (this as any) !== "undefined" ? (this as any) : {});
    if (!globalContext) return;

    const exposeTargets: string[] = [
      "ImageWindow",
      "View",
      "Image",
      "Matrix",
      "Vector",
      "Point",
      "Rect",
      "StarDetector",
      "StarXTerminator",
      "NoiseXTerminator",
      "BlurXTerminator",
      "PixelMath",
      "ArcsinhStretch",
      "HistogramTransformation",
      "CurvesTransformation",
      "MultiscaleLinearTransform",
      "MultiscaleMedianTransform",
      "ColorCalibration",
      "Console"
    ];

    for (const name of exposeTargets) {
      try {
        if (globalContext[name]) {
          this.exposeModule(name, globalContext[name]);
        }
      } catch (e: any) {}
    }
  }

  /**
   * Convenience alias for dangerouslyExposeAll().
   */
  public exposeAll(): void {
    this.dangerouslyExposeAll();
  }

  /**
   * Starts the IPC polling loop and verifies WebView security state.
   *
   * @param intervalMs Polling interval in milliseconds (default: 40ms).
   */
  public start(intervalMs: number = 40): void {
    try {
      if (this.isDestroyed) {
        throw new Error("PixInsightWebViewBridge: Cannot start a destroyed bridge instance.");
      }

      if (this.timer) this.timer.stop();
      this.timer = new Timer();
      this.timer.interval = intervalMs / 1000.0; // PJSR Timer interval is in seconds
      this.timer.periodic = true;
      this.timer.onTimeout = () => this.pollNextMessage();

      this.timer.start();
    } catch (error: any) {
      throw error;
    }
  }

  /**
   * Stops the IPC polling timer.
   */
  public stop(): void {
    if (this.timer) {
      try {
        this.timer.stop();
      } catch (e: any) {}
      this.timer = null;
    }
  }

  /**
   * Injects the browser-side client bridge runtime into the WebView.
   */
  public injectClientRuntime(): void {
    try {
      if (this.isDestroyed || this.clientAgentReady || this.clientAgentInjectionPending) return;
      if (!this.documentLoaded) return;
      this.clientAgentInjectionPending = true;
      const safeToken = JSON.stringify(this.sessionToken);
      const generation = this.documentGeneration;
      // One serialized evaluation prevents the location/queue poller from racing
      // ahead of the runtime definition or its session-token initialization.
      const script = `(function() {
        try {
          ${WEBVIEW_CLIENT_JS}
          if (!window.PixInsight || typeof window.PixInsight._setToken !== "function") {
            throw new Error("IPC_CLIENT_RUNTIME_UNAVAILABLE");
          }
          window.PixInsight._setToken(${safeToken});
          return JSON.stringify({ channel: "ipc-client-agent", ready: true, generation: ${generation} });
        } catch (error) {
          return JSON.stringify({
            channel: "ipc-client-agent",
            ready: false,
            generation: ${generation},
            error: error && error.message ? error.message : String(error)
          });
        }
      })()`;
      this.webView.evaluateScript(script);
    } catch (e: any) {
      this.clientAgentInjectionPending = false;
      Console.warningln(`PixInsightWebViewBridge: Injection error: ${e.message || e}`);
    }
  }

  /**
   * Sends an asynchronous event to the WebView client.
   *
   * @param event Event topic name.
   * @param payload Event payload object or primitive.
   */
  public emit(event: string, payload?: any): void {
    if (this.isDestroyed) return;

    try {
      const eventData: IpcEvent = {
        event: event,
        payload: payload !== undefined ? payload : null,
        timestamp: Date.now()
      };

      const safeJson = JSON.stringify(eventData)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");

      const script = `if (window.PixInsight) { window.PixInsight._receiveEvent(${safeJson}); }`;
      this.webView.evaluateScript(script);
    } catch (e: any) {
      Console.warningln(`PixInsightWebViewBridge: Failed to emit event '${event}': ${e.message || e}`);
    }
  }

  /**
   * Queries and verifies the current location/URL of the WebView asynchronously.
   *
   * @param callback Callback function receiving the current URL.
   */
  public queryCurrentUrl(callback: (url: string) => void): void {
    try {
      if (this.isDestroyed || this.locationProbePurpose !== null || this.ipcQueuePopPending) {
        callback("");
        return;
      }
      this.pendingLocationCallback = callback;
      this.requestRawLocationProbe("query");
    } catch (e: any) {
      this.pendingLocationCallback = null;
      callback("");
    }
  }

  /**
   * Requests the current location as a raw WebView result. No page-defined
   * serializer participates in this security decision.
   */
  private requestRawLocationProbe(purpose: "poll" | "devtools" | "query"): void {
    try {
      if (this.isDestroyed || this.locationProbePurpose !== null || this.ipcQueuePopPending) return;
      if (purpose === "devtools") this.devToolsOriginProbePending = true;
      this.locationProbePurpose = purpose;
      this.webView.evaluateScript("window.location.href");
    } catch (error: any) {
      this.locationProbePurpose = null;
      if (purpose === "devtools") {
        this.devToolsOriginProbePending = false;
        this.rejectQueuedDevToolsCommands(new Error("DEVTOOLS_ORIGIN_PROBE_FAILED"));
      }
      if (purpose === "query" && this.pendingLocationCallback) {
        const callback = this.pendingLocationCallback;
        this.pendingLocationCallback = null;
        callback("");
      }
    }
  }

  /**
   * Evaluates if a given URL origin is permitted under the Iron Shield policy.
   *
   * @param url Location URL string from the WebView.
   * @returns true if origin is authorized; false otherwise.
   */
  public isOriginAllowed(url: string): boolean {
    if (!url || typeof url !== "string") return false;

    try {
      const normalizedUrl = url.trim();
      const lowerUrl = normalizedUrl.toLowerCase();

      // Check Local-Only constraints
      const isLocal =
        lowerUrl.startsWith(FILE_URL_PREFIX) ||
        lowerUrl.startsWith("data:") ||
        lowerUrl === "about:blank";

      if (this.policy.allowLocalOnly && isLocal) {
        return true;
      }

      // HTTP(S) entries are exact origins. This prevents trusted.app.evil and
      // alternate-port confusion caused by textual prefix comparisons.
      for (const pattern of this.policy.allowedOrigins) {
        const lowerPattern = pattern.toLowerCase().trim();
        if (lowerPattern === "*") return true;
        if (lowerPattern === FILE_URL_PREFIX && lowerUrl.startsWith(FILE_URL_PREFIX)) return true;
        if (lowerPattern === "data:" && lowerUrl.startsWith("data:")) return true;
        if (lowerPattern === "about:blank" && lowerUrl === "about:blank") return true;

        if (lowerPattern.startsWith(HTTP_URL_PREFIX) || lowerPattern.startsWith(HTTPS_URL_PREFIX)) {
          const candidateOrigin = this.canonicalizeHttpOrigin(normalizedUrl);
          const allowedOrigin = this.canonicalizeHttpOrigin(pattern.trim());
          if (candidateOrigin && allowedOrigin && candidateOrigin === allowedOrigin) return true;
          continue;
        }

        if (lowerUrl === lowerPattern) return true;
      }

      return false;
    } catch (e: any) {
      return false;
    }
  }

  /** Canonicalizes an HTTP(S) URL to scheme, host, and effective port. */
  private canonicalizeHttpOrigin(value: string): string | null {
    try {
      const match = /^(https?):\/\/([^\/?#]+)(?:[\/?#]|$)/i.exec(value.trim());
      if (!match) return null;
      const scheme = match[1].toLowerCase();
      const authority = match[2].toLowerCase();
      if (!authority || authority.includes("@") || authority.includes("%") || /\s/.test(authority)) return null;

      let host = authority;
      let port = scheme === "https" ? "443" : "80";
      if (authority.startsWith("[")) {
        const closingBracket = authority.indexOf("]");
        if (closingBracket < 0) return null;
        host = authority.substring(0, closingBracket + 1);
        const suffix = authority.substring(closingBracket + 1);
        if (suffix) {
          if (!/^:\d+$/.test(suffix)) return null;
          port = suffix.substring(1);
        }
      } else {
        const colon = authority.lastIndexOf(":");
        if (colon >= 0) {
          host = authority.substring(0, colon);
          port = authority.substring(colon + 1);
        }
      }
      if (!host || !/^\d+$/.test(port)) return null;
      const portNumber = Number(port);
      if (portNumber < 1 || portNumber > 65535) return null;
      return scheme + URL_SCHEME_SEPARATOR + host + ":" + portNumber;
    } catch (error: any) {
      return null;
    }
  }

  /**
   * Executes a polling tick to fetch the next queued IPC request from WebView.
   */
  private pollNextMessage(): void {
    if (this.isDestroyed) return;

    try {
      if (!this.documentLoaded) return;
      if (!this.clientAgentReady) {
        this.injectClientRuntime();
        return;
      }
      this.expireDevToolsCommands();
      if (
        this.devToolsCommandInFlight ||
        this.devToolsAgentInjectionPending ||
        this.locationProbePurpose !== null ||
        this.ipcQueuePopPending
      ) return;
      if (this.devToolsCommandQueue.length > 0 && this.devToolsDispatchPermit) {
        this.dispatchNextDevToolsCommand();
        return;
      }
      // Verify the document once per navigation, then poll the RPC queue directly.
      // Re-reading a large data: URL before every queue pop doubled traffic and
      // could prevent WebView calls from ever reaching the native handler.
      if (!this.lastVerifiedUrl) {
        this.requestRawLocationProbe("poll");
        return;
      }
      if (!this.isOriginAllowed(this.lastVerifiedUrl)) return;

      this.ipcQueuePopPending = true;
      if (!this.queuePollingAnnounced) {
        this.queuePollingAnnounced = true;
        Console.writeln("[WebView IPC] Browser RPC queue polling active.");
      }
      try {
        this.webView.evaluateScript("window.PixInsight ? window.PixInsight._popQueue() : null");
      } catch (error: any) {
        this.ipcQueuePopPending = false;
        Console.warningln(`[WebView IPC] Queue poll failed: ${error.message || error}`);
      }
    } catch (e: any) {
      // Ignore evaluation drop during navigation transitions
    }
  }

  /**
   * Handles raw JS results returned via webView.onScriptResultAvailable.
   */
  private handleScriptResult(result: any): void {
    if (this.isDestroyed) return;

    try {
      // WebView returns a native null/undefined value when the page IPC queue is
      // empty. Clear the serialized queue-read state before returning; otherwise
      // every DevTools command remains blocked behind ipcQueuePopPending forever.
      if (result === null || result === undefined) {
        if (this.ipcQueuePopPending) {
          this.ipcQueuePopPending = false;
          this.devToolsDispatchPermit = true;
          this.dispatchNextDevToolsCommand();
        } else if (this.locationProbePurpose !== null) {
          const failedPurpose = this.locationProbePurpose;
          this.locationProbePurpose = null;
          if (failedPurpose === "devtools") {
            this.devToolsOriginProbePending = false;
            this.rejectQueuedDevToolsCommands(new Error("DEVTOOLS_ORIGIN_PROBE_FAILED"));
          } else if (failedPurpose === "query" && this.pendingLocationCallback) {
            const callback = this.pendingLocationCallback;
            this.pendingLocationCallback = null;
            callback("");
          }
        }
        return;
      }

      if (typeof result === "string") {
        if (this.locationProbePurpose !== null) {
          const purpose = this.locationProbePurpose;
          this.locationProbePurpose = null;
          if (purpose === "devtools") this.devToolsOriginProbePending = false;
          this.lastVerifiedUrl = result;

          if (purpose === "query") {
            const callback = this.pendingLocationCallback;
            this.pendingLocationCallback = null;
            if (callback) callback(result);
            return;
          }

          if (!this.isOriginAllowed(result)) {
            if (purpose === "devtools") {
              this.rejectQueuedDevToolsCommands(
                new Error("DEVTOOLS_SECURITY_ERROR: Untrusted origin blocked from DevTools execution.")
              );
            } else {
              Console.warningln(`[Iron Shield Security] Blocked WebView origin: '${result}'`);
            }
            return;
          }

          if (purpose === "devtools") {
            this.dispatchNextDevToolsCommand();
          } else {
            Console.writeln("[WebView IPC] Current document origin verified.");
          }
          return;
        }

        if (this.ipcQueuePopPending) {
          this.ipcQueuePopPending = false;
          this.devToolsDispatchPermit = true;
          try {
            const request = JSON.parse(result) as IpcRequest;
            this.processRequest(request);
          } catch (error: any) {
            // An empty queue or malformed page message is ignored safely.
          } finally {
            this.dispatchNextDevToolsCommand();
          }
          return;
        }

        // Parse Polling Probe JSON payload or DevTools result
        try {
          const probe = JSON.parse(result);

          if (probe && probe.channel === "ipc-client-agent") {
            if (probe.generation !== this.documentGeneration || !this.documentLoaded) return;
            this.clientAgentInjectionPending = false;
            this.clientAgentReady = probe.ready === true;
            if (!this.clientAgentReady) {
              Console.warningln(`PixInsightWebViewBridge: IPC client rejected: ${probe.error || "unknown error"}`);
            } else {
              Console.writeln(`[WebView IPC] Client runtime ready (generation ${this.documentGeneration}).`);
              this.notifyClientReady();
            }
            return;
          }

          if (probe && probe.channel === "workspace-app") {
            if (probe.ready) {
              Console.writeln(`[Workspace Debug] Browser application ready (${probe.stepCount || 0} workflow steps).`);
            } else {
              Console.criticalln(`[Workspace Debug] Browser application failed: ${probe.error || "unknown error"}`);
            }
            return;
          }

          if (probe && probe.channel === "devtools-agent") {
            if (probe.generation !== this.documentGeneration || !this.documentLoaded) return;
            this.devToolsAgentInjectionPending = false;
            this.devToolsAgentReady = probe.ready === true;
            if (!this.devToolsAgentReady && probe.error) {
              Console.warningln(`PixInsightWebViewBridge: DevTools agent rejected: ${probe.error}`);
            }
            this.dispatchNextDevToolsCommand();
            return;
          }

          // Handle DevTools result channel
          if (probe && probe.channel === "devtools" && probe.id) {
            const pending = this.devToolsPendingCommands.get(probe.id);
            if (pending) {
              this.devToolsPendingCommands.delete(probe.id);
              if (this.devToolsCommandInFlight === probe.id) {
                this.devToolsCommandInFlight = null;
              }
              if (probe.ok) {
                pending.resolve(probe);
              } else {
                pending.reject(new Error(probe.error || "DEVTOOLS_ERROR"));
              }
            }
            return;
          }

        } catch (e: any) {
          // Non-probe string output
        }
      }
    } catch (e: any) {
      Console.warningln(`PixInsightWebViewBridge: Script result handling exception: ${e.message || e}`);
    }
  }

  /**
   * Validates and executes an inbound RPC request.
   */
  private processRequest(req: IpcRequest): void {
    if (!req || !req.id) return;

    // Security Check 1: Session Token Validation
    if (!req.token || req.token !== this.sessionToken) {
      this.sendResponse(req.id, null, "SECURITY_ERROR: Invalid or forged session token.", "FORGED_TOKEN");
      return;
    }

    // Security Check 2: Message Replay Attack Protection
    if (req.timestamp) {
      const age = Date.now() - req.timestamp;
      if (age > this.policy.maxMessageAgeMs) {
        this.sendResponse(
          req.id,
          null,
          "SECURITY_ERROR: Message timestamp expired (Replay Attack Prevention).",
          "EXPIRED_MESSAGE"
        );
        return;
      }
    }

    // Security Check 3: Method Existence & Handler Exposure
    let handler = this.handlers.get(req.method);
    if (!handler && this.policy.allowUnregisteredMethods) {
      // Dynamic method lookup for exposed modules (e.g. 'ImageWindow.windows')
      const parts = req.method.split(".");
      if (parts.length === 2) {
        const [modName, methodName] = parts;
        const globalContext = typeof globalThis !== "undefined" ? globalThis : (typeof (this as any) !== "undefined" ? (this as any) : {});
        if (globalContext && globalContext[modName]) {
          const targetMod = globalContext[modName];
          if (typeof targetMod[methodName] === "function") {
            handler = (params) => {
              const args = params === null || params === undefined ? [] : Array.isArray(params) ? params : [params];
              return targetMod[methodName].apply(targetMod, args);
            };
          }
        }
      }
    }

    if (!handler) {
      this.sendResponse(
        req.id,
        null,
        `METHOD_NOT_FOUND: RPC method '${req.method}' is not registered on host.`,
        "UNKNOWN_METHOD"
      );
      return;
    }

    // Execution with Stability Pillar try/catch
    try {
      if (!req.method.startsWith("__")) {
        Console.writeln(`[WebView IPC] ${req.method}`);
      }
      const result = handler(req.params, req);
      this.sendResponse(req.id, result, null);
    } catch (err: any) {
      const errMsg = err && err.message ? err.message : String(err);
      this.sendResponse(req.id, null, `HOST_EXECUTION_ERROR: ${errMsg}`, "RUNTIME_ERROR");
    }
  }

  /**
   * Formats and returns an RPC response back to the WebView client.
   */
  private sendResponse(id: string, result: any, error: string | null, code?: string): void {
    if (this.isDestroyed) return;

    try {
      const resp: IpcResponse = {
        id: id,
        result: result !== undefined ? result : null,
        error: error || undefined,
        code: code
      };

      const safeJson = JSON.stringify(resp)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");

      const script = `if (window.PixInsight) { window.PixInsight._receiveResponse(${safeJson}); }`;
      this.webView.evaluateScript(script);
    } catch (e: any) {
      Console.warningln(`PixInsightWebViewBridge: Failed to send response for '${id}': ${e.message || e}`);
    }
  }

  /**
   * Destroys and cleans up resources used by the bridge.
   */
  public destroy(): void {
    try {
      if (this.isDestroyed) return;
      this.stop();
      this.restoreDevToolsHotkey();
      if (this.devToolsPanel) {
        try {
          this.devToolsPanel.dispose();
        } catch (error: any) {}
        this.devToolsPanel = null;
      }
      this.isDestroyed = true;
      this.handlers.clear();
      for (const pending of this.devToolsPendingCommands.values()) {
        pending.reject(new Error("DEVTOOLS_DISPOSED: Bridge has been destroyed."));
      }
      this.devToolsPendingCommands.clear();
      this.devToolsCommandQueue = [];
      this.devToolsCommandInFlight = null;
      this.devToolsAgentReady = false;
      this.devToolsAgentInjectionPending = false;
      this.devToolsOriginProbePending = false;
      this.clientAgentReady = false;
      this.clientAgentInjectionPending = false;
      this.devToolsDispatchPermit = false;
      this.documentLoaded = false;
      this.queuePollingAnnounced = false;
      this.pendingLocationCallback = null;
    } catch (error: any) {
      this.isDestroyed = true;
      Console.warningln(`PixInsightWebViewBridge: Destroy failed: ${error.message || error}`);
    }
  }
}
