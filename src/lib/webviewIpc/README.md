# PixInsight WebView IPC

A bidirectional RPC bridge between PixInsight's V8/PJSR runtime and JavaScript running in a PixInsight `WebView`.

## Minimal setup

Create the `WebView`, attach the bridge, register host functions, register the page bootstrap, load the HTML, then start polling.

> **PixInsight WebView limitation:** Do not put required application logic in a `<script>` element passed to `WebView.setHTML()`. PixInsight can render the markup and CSS without executing that inline script. The resulting page looks loaded, but buttons have no handlers and no browser-to-host RPC calls are queued. Inject page behavior explicitly from `bridge.onClientReady()`.

```typescript
import { PixInsightWebViewBridge } from "./lib/webviewIpc/index";

const webView = new WebView(dialog);
const bridge = new PixInsightWebViewBridge(webView, {
  allowLocalOnly: true
}, {
  enabled: true,       // Opt-in DevTools
  hotkeyToggle: true   // F12 key toggle at parent dialog level
});

// Optionally bind F12 to parent dialog
bridge.bindDevToolsHotkey(dialog);

bridge.registerHandler("getOpenViews", () => {
  return ImageWindow.windows.map(window => window.mainView.id);
});

bridge.onClientReady(() => {
  webView.evaluateScript(`(function() {
    var button = document.getElementById("refresh");
    if (!button || !window.PixInsight) return;
    button.onclick = function() {
      window.PixInsight.call("getOpenViews").then(function(views) {
        document.getElementById("output").textContent = JSON.stringify(views);
      });
    };
  })()`);
});

webView.setHTML(`
  <!doctype html>
  <button id="refresh">Refresh views</button>
  <pre id="output"></pre>
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

## Required WebView bootstrap lifecycle

`PixInsightWebViewBridge` treats each navigation as a new document generation. The client runtime, token, page application, DOM handles, and pending inspector commands all belong to that generation.

Use this order:

1. Construct the `WebView`.
2. Construct `PixInsightWebViewBridge` so it owns the WebView lifecycle callbacks.
3. Register native RPC handlers.
4. Register page behavior with `bridge.onClientReady()`.
5. Call `webView.setHTML()` or `webView.loadContent()`.
6. Call `bridge.start()`.

`onClientReady()` runs only after the current document has finished loading and the tokenized `window.PixInsight` client has acknowledged readiness. The callback runs again after navigation, so injected application code should use an idempotence guard:

```typescript
bridge.onClientReady(() => {
  webView.evaluateScript(`(function() {
    if (window.__MY_APPLICATION_READY__) return;
    window.__MY_APPLICATION_READY__ = true;
    // Bind controls and issue initial RPC calls here.
  })()`);
});
```

Do not call `evaluateScript()` from page bootstrap before `onClientReady()`. Do not regard visible HTML or a populated DevTools DOM tree as proof that inline application JavaScript ran.

### Lifecycle diagnostics

The host prints explicit milestones to the PixInsight Process Console:

```text
[WebView IPC] Document loaded (generation 1).
[WebView IPC] Client runtime ready (generation 1).
[WebView IPC] Invoking 1 page bootstrap handler(s).
[WebView IPC] Current document origin verified.
[WebView IPC] Browser RPC queue polling active.
[WebView IPC] methodName
```

If the first two lines appear but no application-ready output follows, inspect the `onClientReady()` injection result. If queue polling is active but no method line appears after a click, verify that the click handler was bound by the injected bootstrap and that it called `window.PixInsight.call()`.

## Native WebView DevTools

Native DevTools run outside the inspected `WebView` as a sibling panel in the same PixInsight dialog. This avoids nested modal windows while keeping the controls outside the page DOM.

### Enabling DevTools

Pass a `DevToolsConfig` object as the 3rd parameter when instantiating `PixInsightWebViewBridge`:

```typescript
const bridge = new PixInsightWebViewBridge(
  webView,
  { allowLocalOnly: true },
  {
    enabled: true,             // Enables DevTools agent
    hotkeyToggle: true,        // Bind F12 to toggle the panel
    allowExpressionEval: true, // Permits REPL evaluation
    allowDomEdits: true        // Permits attribute and text mutation commands
  }
);

// Bind F12 key handler on parent dialog
bridge.bindDevToolsHotkey(parentDialog);

// Add the panel to the same dialog layout beside the WebView
const devToolsPanel = bridge.attachDevToolsPanel(parentDialog);
contentSizer.add(webView, 100);
if (devToolsPanel) contentSizer.add(devToolsPanel, 55);
```

### DevTools Features

- **Tabbed Native Panel**: Separate Elements and Console pages live beside the WebView and never start a nested modal event loop.
- **Bidirectional Element Locator**: “Select element” highlights hovered page elements and reveals the selected node in the native DOM tree. Native tree selection and hover highlight the live page element in return.
- **Interactive DOM Tree**: Stable per-document node handles, deterministic selectors, bounded snapshots, lazy subtree expansion, and automatic ancestor reveal.
- **Element Context Menu**: Right-click an element to scroll it into view or copy its selector, `innerHTML`, `outerHTML`, or `textContent`.
- **Structured Console**: `console.log`, `info`, `warn`, and `error` retain typed argument previews. Objects, arrays, DOM nodes, and `Error` values can be expanded without invoking getters.
- **Structured REPL**: Expression results use the same expandable remote-object representation as console output.
- **F12 Hotkey Toggle**: Uses PixInsight's actual `KeyCode.F12`. The native dialog handler preserves any previous key handler, while a token- and origin-validated in-page fallback covers WebView focus.
- **Operational Limits**: DOM nodes, response size, console rate, retained objects, and native rows are bounded to keep inspection responsive.

### F12 and WebView Focus

PixInsight does not expose Chromium's built-in DevTools protocol through PJSR. This library therefore provides its own injected inspector. A focused WebView may consume keyboard input before its owner dialog receives it, so F12 uses two paths:

1. `bindDevToolsHotkey()` listens for `KeyCode.F12` on the native dialog.
2. The injected inspector listens for browser `keydown` and calls the private `__devtools_toggle__` bridge method.

The fallback still passes the normal session-token and trusted-origin checks; untrusted pages cannot use it to invoke arbitrary native functionality. Keeping a native menu item with an `F12` shortcut remains a useful platform-level fallback for hosts that reserve browser function keys.

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
├── clientSource.ts     Browser runtime injected into the WebView
├── devtoolsSource.ts   Injected in-page DevTools helper agent
├── devtoolsTypes.ts    DevTools configuration and protocol types
├── devtoolsUi.ts       Tabbed native DevTools sibling panel
├── host.ts             PixInsight host bridge
├── index.ts            Public exports
├── README.md           Library documentation
└── types.ts            Public protocol and policy types
```
