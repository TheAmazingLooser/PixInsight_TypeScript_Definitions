# PixInsight WebView IPC

A bidirectional RPC bridge between PixInsight's V8/PJSR runtime and JavaScript running in a PixInsight `WebView`.

## Minimal setup

Create the `WebView`, attach the bridge, register host functions, then start polling:

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

## DevTools Window (External Native Window)

Lightweight native DevTools run outside the inspected `WebView` as a sibling panel in the same PixInsight dialog. This avoids nested modal windows while keeping the controls outside the page DOM.

### Enabling DevTools

Pass a `DevToolsConfig` object as the 3rd parameter when instantiating `PixInsightWebViewBridge`:

```typescript
const bridge = new PixInsightWebViewBridge(
  webView,
  { allowLocalOnly: true },
  {
    enabled: true,             // Enables DevTools agent
    hotkeyToggle: true,        // Bind F12 to open window
    allowExpressionEval: true, // Permits REPL evaluation
    allowDomEdits: true        // Permits DOM edits/highlighting
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

- **Native Sibling Panel**: Lives beside the WebView in the same dialog and never starts a nested modal event loop.
- **F12 Hotkey Toggle**: Toggles DevTools on or off when F12 is pressed inside the parent dialog.
- **Console Log Stream**: Intercepts `console.log`, `info`, `warn`, and `error` outputs into a scrollable native `TextBox`.
- **REPL Evaluation**: Enter expressions into the native input field to evaluate JavaScript inside the `WebView` context asynchronously.
- **DOM Tree Inspector**: Renders a hierarchical `TreeBox` representation of DOM elements.
- **Node Highlighting**: Selecting a DOM tree node highlights the corresponding element in the live `WebView`.

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
├── devtoolsUi.ts       External Native PixInsight DevTools Dialog Window
├── host.ts             PixInsight host bridge
├── index.ts            Public exports
├── README.md           Library documentation
└── types.ts            Public protocol and policy types
```
