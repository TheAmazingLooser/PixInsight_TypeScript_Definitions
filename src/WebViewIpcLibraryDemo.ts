// #engine v8
// #feature-id    WebViewIpcLibraryDemo : Development > PixInsight WebView IPC Library Demo
// #feature-info  <b>PixInsight WebView IPC Library Demo</b><br/>Demonstrates secure, local-first bidirectional RPC communication between HTML/JS UI and PixInsight V8.

import { PixInsightWebViewBridge } from "./lib/webviewIpc/index";

/**
 * HTML content loaded into the WebView UI.
 */
const DEMO_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>PixInsight IPC Library Demo</title>
    <style>
        body {
            background-color: #0f172a;
            color: #f8fafc;
            font-family: system-ui, -apple-system, sans-serif;
            padding: 20px;
            margin: 0;
        }
        h2 { color: #818cf8; margin-top: 0; }
        .card {
            background: #1e293b;
            border: 1px solid #334155;
            border-radius: 8px;
            padding: 16px;
            margin-bottom: 16px;
        }
        button {
            background: #4f46e5;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: 600;
            margin-right: 8px;
        }
        button:hover { background: #6366f1; }
        pre {
            background: #090d16;
            padding: 12px;
            border-radius: 6px;
            font-size: 12px;
            overflow-x: auto;
            color: #34d399;
        }
    </style>
</head>
<body>
    <h2>🌌 PixInsight V8 WebView IPC Library</h2>
    <div class="card">
        <h3>Call PixInsight Host RPC Methods</h3>
        <button id="btnGetViews">Get Open Views</button>
        <button id="btnComputeMath">Run Calculation (10 + 32)</button>
        <button id="btnTestSecurity">Test Untrusted Method</button>
    </div>

    <div class="card">
        <h3>Real-time Event Stream from PixInsight Host</h3>
        <div id="eventStatus">Waiting for host events...</div>
    </div>

    <div class="card">
        <h3>Response Log</h3>
        <pre id="logOutput">// Output will appear here...</pre>
    </div>

    <script>
        function log(msg) {
            console.log(msg);
            const pre = document.getElementById('logOutput');
            pre.textContent = "[" + new Date().toLocaleTimeString() + "] " + msg + "\\n" + pre.textContent;
        }

        document.getElementById('btnGetViews').addEventListener('click', async () => {
            try {
                log("Calling host method 'getOpenViews'...");
                const views = await window.PixInsight.call('getOpenViews');
                log("Result: " + JSON.stringify(views, null, 2));
            } catch (err) {
                log("Error: " + err.message);
            }
        });

        document.getElementById('btnComputeMath').addEventListener('click', async () => {
            try {
                log("Calling host method 'calculate' with [10, 32]...");
                const result = await window.PixInsight.call('calculate', { a: 10, b: 32 });
                log("Result: " + JSON.stringify(result));
            } catch (err) {
                log("Error: " + err.message);
            }
        });

        document.getElementById('btnTestSecurity').addEventListener('click', async () => {
            try {
                log("Attempting to call unregistered method 'untrustedMethod'...");
                await window.PixInsight.call('untrustedMethod');
            } catch (err) {
                log("Blocked as expected! Error: " + err.message);
            }
        });

        // Listen for host events
        if (window.PixInsight) {
            window.PixInsight.on('heartbeat', (data) => {
                document.getElementById('eventStatus').textContent = "Received host heartbeat: " + JSON.stringify(data);
            });
        }
    </script>
</body>
</html>`;

/**
 * Main Dialog wrapping the WebView and PixInsightWebViewBridge instance.
 */
class WebViewIpcDemoDialog extends Dialog {
  private webView: WebView;
  private bridge: PixInsightWebViewBridge;
  private eventTimer: Timer;
  private devToolsButton: PushButton;
  private devToolsMenu: Menu;
  private toggleDevToolsItem: MenuItem;

  constructor() {
    super();

    this.windowTitle = "PixInsight V8 WebView IPC Library Demo";
    this.userResizable = true;
    this.width = 700;
    this.height = 500;

    // Create WebView
    this.webView = new WebView(this);
    this.webView.setHTML(DEMO_HTML);

    // Initialize IPC Bridge with strict Iron Shield policy
    this.bridge = new PixInsightWebViewBridge(
      this.webView,
      {
        allowLocalOnly: true,
        allowedOrigins: ["file://", "data:", "about:blank"],
        allowUnregisteredMethods: false
      },
      {
        enabled: true,
        hotkeyToggle: true,
        requireTrustedOrigin: true,
        allowExpressionEval: true,
        allowDomEdits: true
      }
    );

    // F12 opens the native external DevTools window while native controls have focus.
    this.bridge.bindDevToolsHotkey(this);
    const devToolsPanel = this.bridge.attachDevToolsPanel(this);

    // Native developer menu. It is outside the WebView and cannot be invoked through page IPC.
    this.devToolsMenu = new Menu(this);
    this.devToolsMenu.text = "Developer";
    this.toggleDevToolsItem = new MenuItem("Toggle WebView DevTools", undefined as any, "F12");
    this.toggleDevToolsItem.onTrigger = () => {
      this.bridge.toggleDevTools();
    };
    this.devToolsMenu.addItem(this.toggleDevToolsItem);

    this.devToolsButton = new PushButton(this);
    this.devToolsButton.text = "Developer ▾";
    this.devToolsButton.toolTip = "Open the native WebView developer menu (F12 toggles DevTools).";
    this.devToolsButton.onClick = () => {
      this.devToolsMenu.execute();
    };

    const menuSizer = new HorizontalSizer();
    menuSizer.margin = 6;
    menuSizer.addStretch();
    menuSizer.add(this.devToolsButton);

    const sizer = new VerticalSizer();
    sizer.margin = 0;
    sizer.add(menuSizer);
    const contentSizer = new HorizontalSizer();
    contentSizer.spacing = 6;
    contentSizer.add(this.webView, 100);
    if (devToolsPanel) {
      contentSizer.add(devToolsPanel, 55);
    }
    sizer.add(contentSizer, 100);
    this.sizer = sizer;

    // Register safe host RPC endpoints
    this.bridge.registerHandler("getOpenViews", () => {
      const views: string[] = [];
      const windows = ImageWindow.windows;
      for (let i = 0; i < windows.length; i++) {
        if (!windows[i].isNull && !windows[i].mainView.isNull) {
          views.push(windows[i].mainView.id);
        }
      }
      return { total: views.length, views: views };
    });

    this.bridge.registerHandler("calculate", (params: { a: number; b: number }) => {
      if (!params || typeof params.a !== "number" || typeof params.b !== "number") {
        throw new Error("Invalid parameters: 'a' and 'b' must be numbers.");
      }
      return { sum: params.a + params.b, product: params.a * params.b };
    });

    // Start polling loop
    this.bridge.start(40);

    // Periodically emit host events to the web client
    this.eventTimer = new Timer();
    this.eventTimer.interval = 2.0; // Every 2 seconds
    this.eventTimer.periodic = true;
    this.eventTimer.onTimeout = () => {
      this.bridge.emit("heartbeat", { time: new Date().toISOString() });
    };
    this.eventTimer.start();
  }

  /**
   * Stops all timers and releases bridge resources after dialog execution.
   */
  public destroy(): void {
    try {
      this.eventTimer.stop();
    } finally {
      this.bridge.destroy();
    }
  }
}

function main(): void {
  Console.show();
  Console.writeln("✦ Starting PixInsight WebView IPC Library Demo...");
  const dialog = new WebViewIpcDemoDialog();
  try {
    dialog.execute();
  } finally {
    dialog.destroy();
  }
}

main();
