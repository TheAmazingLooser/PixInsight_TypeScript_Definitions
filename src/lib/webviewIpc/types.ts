/**
 * src/lib/webviewIpc/types.ts
 *
 * Type definitions for PixInsight V8 WebView IPC Bridge.
 */

/**
 * Security policy configuration for origin checking and request execution.
 */
export interface IpcSecurityPolicy {
  /**
   * If true, allows execution only when the WebView is located at a local origin
   * ('file://', 'data:', or 'about:blank').
   * @default true
   */
  allowLocalOnly?: boolean;

  /**
   * Explicit array of allowed origin patterns (e.g. ['https://trusted.domain.com', 'file://']).
   * Exact matching is enforced.
   */
  allowedOrigins?: string[];

  /**
   * If true, permits invoking arbitrary exposed global objects.
   * STRICT SECURITY NOTE: Keep false (default) to require explicit function registration.
   * @default false
   */
  allowUnregisteredMethods?: boolean;

  /**
   * Maximum allowed age of an incoming IPC message in milliseconds to prevent replay attacks.
   * @default 30000 (30 seconds)
   */
  maxMessageAgeMs?: number;

  /**
   * Maximum pending request queue size in the web client.
   * @default 100
   */
  maxQueueSize?: number;
}

/**
 * An inbound RPC request from the browser WebView to PixInsight host.
 */
export interface IpcRequest {
  /** Unique correlation ID for the request. */
  id: string;
  /** Cryptographically strong runtime session token matching the host session. */
  token: string;
  /** Registered handler name or exposed method path (e.g., 'ImageWindow.activeWindow'). */
  method: string;
  /** Parameters array or arguments payload for the method call. */
  params?: any;
  /** Timestamp when request was sent from client. */
  timestamp: number;
}

/**
 * An outbound RPC response from PixInsight host to the browser WebView.
 */
export interface IpcResponse {
  /** Correlation ID matching the original IpcRequest. */
  id: string;
  /** Successful return value (JSON-serializable). */
  result?: any;
  /** Error message string if host execution failed. */
  error?: string;
  /** Error classification code. */
  code?: string;
}

/**
 * An event emitted asynchronously from PixInsight host to the browser WebView.
 */
export interface IpcEvent {
  /** Name of the event topic. */
  event: string;
  /** Associated payload data. */
  payload?: any;
  /** Timestamp of host dispatch. */
  timestamp: number;
}

/**
 * Handler function signature for host-registered RPC endpoints.
 */
export type IpcMethodHandler = (params: any, request: IpcRequest) => any;

/**
 * Client log forward message.
 */
export interface IpcLogMessage {
  level: "info" | "warn" | "error" | "debug";
  message: string;
  timestamp: number;
}
