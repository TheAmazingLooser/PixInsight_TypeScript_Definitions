# PixInsight WebView IPC

A bidirectional RPC bridge between PixInsight's V8/PJSR runtime and JavaScript running in a PixInsight `WebView`.

## Minimal setup

Create the `WebView`, attach the bridge, register host functions, then start polling:

```typescript
import { PixInsightWebViewBridge } from "./lib/webviewIpc/index";

const webView = new WebView(dialog);
const bridge = new PixInsightWebViewBridge(webView);

bridge.registerHandler("getOpenViews", () => {
  return ImageWindow.windows.map(window => window.mainView.id);
});

webView.setHTML(`
  <!doctype html>
  <button id="refresh">Refresh views</button>
  <pre id="output"></pre>
  <script>
    document.getElementById("refresh").onclick = async () => {
      const views = await window.PixInsight.call("getOpenViews");
      document.getElementById("output").textContent = JSON.stringify(views);
    };
  </script>
`);

bridge.start();
```

Always clean up after the dialog closes:

```typescript
try {
  dialog.execute();
} finally {
  bridge.destroy();
}
```

A complete executable example is available in `src/WebViewIpcLibraryDemo.ts`.

## Browser API

The bridge injects `window.PixInsight` after the document loads.

### Call PixInsight

```javascript
const result = await window.PixInsight.call("methodName", {
  value: 42
});
```

Calls return promises. Host exceptions reject the promise with an `Error`.

### Receive host events

Host:

```typescript
bridge.emit("previewUpdated", {
  viewId: "M31"
});
```

WebView:

```javascript
window.PixInsight.on("previewUpdated", payload => {
  console.log(payload.viewId);
});
```

Remove a listener with `window.PixInsight.off(eventName, listener)`.

## Exposing functions

### Explicit handlers — recommended

```typescript
bridge.registerHandler("calculate", params => {
  return params.a + params.b;
});
```

```javascript
const sum = await window.PixInsight.call("calculate", {
  a: 10,
  b: 32
});
```

This keeps the page's capabilities easy to audit.

### Expose a service object

```typescript
const processing = {
  getActiveViewId(): string {
    return ImageWindow.activeWindow.mainView.id;
  },
  runPixelMath(expression: string): boolean {
    const process = new PixelMath();
    process.expression = expression;
    return process.executeOn(ImageWindow.activeWindow.mainView);
  }
};

bridge.exposeModule("Processing", processing);
```

```javascript
const id = await window.PixInsight.call("Processing.getActiveViewId");
```

An optional method allowlist can narrow the exposed service:

```typescript
bridge.exposeModule("Processing", processing, ["getActiveViewId"]);
```

### Expose multiple services

```typescript
bridge.exposeModules({
  Processing: processing,
  AstroMath: astroMathService
});
```

## `exposeAll()` — dangerous convenience mode

```typescript
bridge.exposeAll();
// Equivalent warning-oriented name:
bridge.dangerouslyExposeAll();
```

This enables dynamic `Module.method` dispatch against PJSR globals and registers known PixInsight modules available in the current runtime.

```javascript
const views = await window.PixInsight.call("ImageWindow.open", [filePath]);
```

> **Security warning:** `exposeAll()` delegates the signed loader's authority to the loaded page. A compromised page can modify images, close windows, execute installed processes, and reach other capabilities available to the script. The available PJSR surface also changes between PixInsight versions and installations. Use this mode only when that delegation is intentional.

This mode is asynchronous and is not a transparent copy of PJSR JavaScript:

- Native PJSR objects cannot cross JSON directly.
- Constructors, mutable properties, event handlers, native object identity, and large image buffers require a future handle/proxy layer.
- Methods returning JSON-compatible data work most naturally.
- Installed third-party processes differ between systems.

For production tools, prefer high-level handlers or service objects unless full delegation is a deliberate requirement.

## Loading policy

The default policy accepts local documents only:

```typescript
const bridge = new PixInsightWebViewBridge(webView, {
  allowLocalOnly: true
});
```

To permit a remote application, opt in to its origin:

```typescript
const bridge = new PixInsightWebViewBridge(webView, {
  allowLocalOnly: false,
  allowedOrigins: ["https://amazing-astro.com"]
});

webView.loadContent("https://amazing-astro.com/application");
```

The host polls `window.location.href` with each queued request and rejects IPC when the observed location is not allowed. PixInsight's `WebView` API has no native URL getter or pre-navigation cancellation event, so the bridge cannot prevent an untrusted document from loading; it prevents that document's queued RPC requests from being executed.

Do not use wildcard origins. Keep third-party scripts, analytics, advertisements, and unnecessary remote resources out of pages receiving bridge access, because every script executing in an allowed page shares the page's authority.

## Security checklist

- Prefer `setHTML()` or local `file://` content.
- Register only the operations the UI needs.
- Use exact HTTPS origins for remote applications.
- Never use `"*"` as an origin.
- Treat XSS in an allowed page as native PixInsight script execution.
- Validate all handler parameters before using them.
- Avoid transferring full-resolution pixel arrays over JSON IPC.
- Stop timers and call `bridge.destroy()` when closing.
- Treat `exposeAll()` as full delegation, not as a sandbox.

## Files

```text
src/lib/webviewIpc/
├── clientSource.ts  Browser runtime injected into the WebView
├── host.ts          PixInsight host bridge
├── index.ts         Public exports
├── README.md        Library documentation
└── types.ts         Public protocol and policy types
```
