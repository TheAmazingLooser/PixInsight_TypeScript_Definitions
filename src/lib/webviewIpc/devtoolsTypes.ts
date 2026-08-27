/**
 * src/lib/webviewIpc/devtoolsTypes.ts
 *
 * Types and configuration for PixInsight V8 WebView Native DevTools.
 */

export interface DevToolsConfig {
  /** Enables DevTools capabilities. @default false */
  enabled?: boolean;
  /** Binds F12 key at the dialog level to toggle DevTools window. @default true */
  hotkeyToggle?: boolean;
  /** Requires an origin authorized by IpcSecurityPolicy before running commands. @default true */
  requireTrustedOrigin?: boolean;
  /** Permits console JS expression evaluation from DevTools window. @default true */
  allowExpressionEval?: boolean;
  /** Permits DOM attribute and text editing from DevTools window. @default true */
  allowDomEdits?: boolean;
  /** Maximum snapshot depth for DOM tree inspection. @default 8 */
  maxSnapshotDepth?: number;
  /** Maximum nodes returned per snapshot. @default 1000 */
  maxSnapshotNodes?: number;
  /** Response payload limit in bytes before truncation. @default 262144 (256 KB) */
  maxResponsePayloadBytes?: number;
  /** Rate limit for client console logs forwarded per second. @default 200 */
  consoleForwardRateLimitPerSec?: number;
  /** Command execution timeout in milliseconds. @default 5000 */
  commandTimeoutMs?: number;
}

export type DevToolsCommandKind =
  | "snapshot"
  | "expand"
  | "highlight"
  | "clearHighlight"
  | "setAttribute"
  | "removeAttribute"
  | "setText"
  | "evaluate"
  | "popConsole";

export interface DevToolsCommand {
  id: string;
  kind: DevToolsCommandKind;
  selector?: string;
  path?: string;
  attribute?: string;
  value?: string;
  expression?: string;
  maxDepth?: number;
}

export interface DevToolsResultEnvelope {
  channel: "devtools";
  id: string;
  ok: boolean;
  data?: any;
  error?: string;
  truncated?: boolean;
  approxBytes?: number;
}

export interface DevToolsDomNode {
  tag: string;
  id?: string;
  className?: string;
  path: string;
  attributes?: Record<string, string>;
  textContent?: string;
  childCount: number;
  children?: DevToolsDomNode[];
  expandable?: boolean;
}

export interface DevToolsConsoleEntry {
  level: "log" | "info" | "warn" | "error";
  message: string;
  timestamp: number;
}
