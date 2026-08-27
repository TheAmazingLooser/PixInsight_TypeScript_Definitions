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
  | "startInspect"
  | "stopInspect"
  | "popInspectorEvents"
  | "scrollIntoView"
  | "copyNodeValue"
  | "setAttribute"
  | "removeAttribute"
  | "setText"
  | "evaluate"
  | "popConsole"
  | "clearConsole"
  | "inspectObject"
  | "releaseObject";

export interface DevToolsCommand {
  id: string;
  kind: DevToolsCommandKind;
  nodeId?: string;
  objectId?: string;
  selector?: string;
  path?: string;
  attribute?: string;
  value?: string;
  valueKind?: "selector" | "innerHTML" | "outerHTML" | "textContent";
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
  /** Stable identifier for the current document lifetime. */
  nodeId: string;
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
  args: DevToolsValueDescriptor[];
  timestamp: number;
  source?: string;
}

/** Serializable preview of a value retained by the in-page inspector. */
export interface DevToolsValueDescriptor {
  type: string;
  subtype?: string;
  preview: string;
  value?: string | number | boolean | null;
  objectId?: string;
  expandable?: boolean;
  propertyCount?: number;
}

/** One own property returned when a console object is expanded. */
export interface DevToolsConsoleProperty {
  name: string;
  value: DevToolsValueDescriptor;
  enumerable?: boolean;
  accessor?: boolean;
}

/** Browser-to-native event generated while element locator mode is active. */
export interface DevToolsInspectorEvent {
  type: "hover" | "select" | "cancel";
  nodeId?: string;
  selector?: string;
  tag?: string;
  timestamp: number;
}
