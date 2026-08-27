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
    resolve: (value: any) => void;
    reject: (error: any) => void;
  }> = new Map();
  private devToolsCommandQueue: string[] = [];
  private devToolsCommandInFlight: string | null = null;
  private devToolsAgentReady: boolean = false;
  private devToolsAgentInjectionPending: boolean = false;
  private isDestroyed: boolean = false;
  private lastVerifiedUrl: string = "";
  private pendingLocationCallback: ((url: string) => void) | null = null;

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
      allowedOrigins: policy?.allowedOrigins ?? ["file://", "data:", "about:blank"],
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

    // Wire WebView script result listener for location probes and responses
    this.webView.onScriptResultAvailable = (value: any) => {
      this.handleScriptResult(value);
    };

    // Auto-inject client runtime upon load completion
    this.webView.onLoadFinished = (ok: boolean) => {
      if (ok && !this.isDestroyed) {
        this.devToolsAgentReady = false;
        this.devToolsAgentInjectionPending = false;
        this.injectClientRuntime();
        if (this.devToolsConfig.enabled) {
          this.injectDevToolsAgent();
        }
      }
    };
  }

  /**
   * Binds an F12 hotkey event handler to a parent Dialog window to toggle DevTools.
   *
   * @param parentDialog The top-level Dialog containing the WebView.
   */
  public bindDevToolsHotkey(parentDialog: Dialog): void {
    if (!this.devToolsConfig.enabled || !this.devToolsConfig.hotkeyToggle || !parentDialog) return;

    this.attachDevToolsPanel(parentDialog);

    parentDialog.onKeyPress = (key: number) => {
      if (key === 0x0100003b || key === 123) { // Qt Key_F12 = 0x0100003b / 123
        this.toggleDevTools();
        return true;
      }
      return false;
    };
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
        this.devToolsAgentReady ||
        this.devToolsAgentInjectionPending
      ) {
        return;
      }

      this.devToolsAgentInjectionPending = true;
      const script = `(function() {
        try {
          ${DEVTOOLS_INJECTED_JS}
          return JSON.stringify({
            channel: "devtools-agent",
            ready: window.__PI_DEVTOOLS_AGENT__ === true &&
              typeof window.__PI_DEVTOOLS_EXECUTE__ === "function"
          });
        } catch (error) {
          return JSON.stringify({
            channel: "devtools-agent",
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

    if (this.isDestroyed) {
      reject(new Error("PixInsightWebViewBridge: Bridge is destroyed."));
      return;
    }
    if (!this.devToolsConfig.enabled) {
      reject(new Error("DEVTOOLS_DISABLED: Enable DevTools in bridge configuration."));
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
      resolve: onSuccess,
      reject
    });
    this.devToolsCommandQueue.push(id);
    this.dispatchNextDevToolsCommand();
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
    if (this.isDestroyed || this.devToolsCommandInFlight) return;

    this.expireDevToolsCommands();
    if (this.devToolsCommandQueue.length === 0) return;

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

    try {
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

      this.devToolsCommandInFlight = id;
      this.webView.evaluateScript(script);
    } catch (error: any) {
      this.devToolsPendingCommands.delete(id);
      pending.reject(error);
      this.dispatchNextDevToolsCommand();
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
      const p1 = Math.random().toString(36).substring(2, 15);
      const p2 = Math.random().toString(36).substring(2, 15);
      const p3 = Date.now().toString(36);
      return `pi_token_${p1}_${p2}_${p3}`;
    } catch (e: any) {
      return `pi_token_${Date.now()}_fallback`;
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
    if (this.isDestroyed) {
      throw new Error("PixInsightWebViewBridge: Cannot start a destroyed bridge instance.");
    }

    if (this.timer) {
      this.timer.stop();
    }

    this.timer = new Timer();
    this.timer.interval = intervalMs / 1000.0; // PJSR Timer interval is in seconds
    this.timer.periodic = true;
    this.timer.onTimeout = () => {
      this.pollNextMessage();
    };

    this.injectClientRuntime();
    this.timer.start();
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
      if (this.isDestroyed) return;

      // 1. Inject client library definition
      this.webView.evaluateScript(WEBVIEW_CLIENT_JS);

      // 2. Set cryptographically generated session token
      const tokenScript = `if (window.PixInsight) { window.PixInsight._setToken("${this.sessionToken}"); }`;
      this.webView.evaluateScript(tokenScript);
    } catch (e: any) {
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
    if (this.isDestroyed) {
      callback("");
      return;
    }

    try {
      this.pendingLocationCallback = callback;
      this.webView.evaluateScript("window.location.href");
    } catch (e: any) {
      callback("");
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
      const lowerUrl = url.toLowerCase().trim();

      // Check Local-Only constraints
      const isLocal =
        lowerUrl.startsWith("file://") ||
        lowerUrl.startsWith("data:") ||
        lowerUrl.startsWith("about:blank") ||
        lowerUrl === "about:blank";

      if (this.policy.allowLocalOnly && isLocal) {
        return true;
      }

      // Check Whitelisted Domains
      for (const pattern of this.policy.allowedOrigins) {
        const lowerPattern = pattern.toLowerCase().trim();
        if (lowerPattern === "*" || lowerUrl === lowerPattern || lowerUrl.startsWith(lowerPattern)) {
          return true;
        }
      }

      return false;
    } catch (e: any) {
      return false;
    }
  }

  /**
   * Executes a polling tick to fetch the next queued IPC request from WebView.
   */
  private pollNextMessage(): void {
    if (this.isDestroyed) return;

    try {
      this.expireDevToolsCommands();
      this.dispatchNextDevToolsCommand();
      // First probe location to ensure site is trusted before popping queue
      this.webView.evaluateScript(
        `JSON.stringify({ location: window.location.href, msg: window.PixInsight ? window.PixInsight._popQueue() : null })`
      );
    } catch (e: any) {
      // Ignore evaluation drop during navigation transitions
    }
  }

  /**
   * Handles raw JS results returned via webView.onScriptResultAvailable.
   */
  private handleScriptResult(result: any): void {
    if (this.isDestroyed || result === null || result === undefined) return;

    try {
      if (typeof result === "string") {
        // Direct URL evaluation response for queryCurrentUrl
        if (
          this.pendingLocationCallback &&
          (result.startsWith("http") ||
            result.startsWith("file:") ||
            result.startsWith("data:") ||
            result.startsWith("about:"))
        ) {
          const cb = this.pendingLocationCallback;
          this.pendingLocationCallback = null;
          cb(result);
          return;
        }

        // Parse Polling Probe JSON payload or DevTools result
        try {
          const probe = JSON.parse(result);

          if (probe && probe.channel === "devtools-agent") {
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
            this.dispatchNextDevToolsCommand();
            return;
          }

          // Update location and verify origin
          if (probe && typeof probe.location === "string") {
            this.lastVerifiedUrl = probe.location;

            if (!this.isOriginAllowed(this.lastVerifiedUrl)) {
              Console.warningln(
                `[Iron Shield Security] Blocked IPC request from untrusted origin: '${this.lastVerifiedUrl}'`
              );
              return; // REJECT IPC execution from untrusted site!
            }
          }

          // Process queued message if origin is verified
          if (probe && probe.msg) {
            const req: IpcRequest = JSON.parse(probe.msg);
            this.processRequest(req);
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
    this.isDestroyed = true;
    this.stop();
    if (this.devToolsPanel) {
      try {
        this.devToolsPanel.dispose();
      } catch (e: any) {}
      this.devToolsPanel = null;
    }
    this.handlers.clear();
    for (const pending of this.devToolsPendingCommands.values()) {
      pending.reject(new Error("DEVTOOLS_DISPOSED: Bridge has been destroyed."));
    }
    this.devToolsPendingCommands.clear();
    this.devToolsCommandQueue = [];
    this.devToolsCommandInFlight = null;
    this.devToolsAgentReady = false;
    this.devToolsAgentInjectionPending = false;
    this.pendingLocationCallback = null;
  }
}
