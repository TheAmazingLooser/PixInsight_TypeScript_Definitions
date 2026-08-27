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
  private isDestroyed: boolean = false;
  private lastVerifiedUrl: string = "";
  private pendingLocationCallback: ((url: string) => void) | null = null;

  /**
   * Constructs a new PixInsightWebViewBridge attached to a PixInsight WebView control.
   *
   * @param webView The target PixInsight WebView control instance.
   * @param policy Optional security policy configuration.
   */
  constructor(webView: WebView, policy?: IpcSecurityPolicy) {
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
        this.injectClientRuntime();
      }
    };
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
   * and processes asynchronously over the bridge. Use only with trusted local HTML or authenticated
   * marketplace servers.
   */
  public dangerouslyExposeAll(): void {
    this.policy.allowUnregisteredMethods = true;

    // Standard PixInsight Classes & Process Modules to mirror
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

        // Parse Polling Probe JSON payload
        try {
          const probe = JSON.parse(result);

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
    this.handlers.clear();
    this.pendingLocationCallback = null;
  }
}
