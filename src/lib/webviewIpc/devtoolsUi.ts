/**
 * src/lib/webviewIpc/devtoolsUi.ts
 *
 * Native PixInsight DevTools panel hosted beside the inspected WebView.
 */

import { PixInsightWebViewBridge } from "./host";
import { DevToolsConfig, DevToolsConsoleEntry, DevToolsDomNode } from "./devtoolsTypes";

/**
 * Native DevTools panel that lives in the same PixInsight dialog as the WebView.
 * It is outside the WebView DOM and does not start a nested modal event loop.
 */
export class PixInsightDevToolsPanel {
  public readonly control: Control;

  private bridge: PixInsightWebViewBridge;
  private config: Required<DevToolsConfig>;
  private consoleBox: TextBox;
  private replEdit: Edit;
  private domTree: TreeBox;
  private btnRefreshDom: PushButton;
  private btnClearConsole: PushButton;
  private chkHighlight: CheckBox;
  private selectedNodePath: string | null = null;
  private pollTimer: Timer | null = null;
  private isDisposed: boolean = false;

  /**
   * Creates a native sibling panel under the specified parent control.
   *
   * @param parent Native dialog/control that owns the panel.
   * @param bridge Bridge used for private host-to-page inspector commands.
   * @param config Optional DevTools configuration.
   */
  constructor(parent: Control, bridge: PixInsightWebViewBridge, config?: DevToolsConfig) {
    this.bridge = bridge;
    this.config = {
      enabled: config?.enabled ?? true,
      hotkeyToggle: config?.hotkeyToggle ?? true,
      requireTrustedOrigin: config?.requireTrustedOrigin ?? true,
      allowExpressionEval: config?.allowExpressionEval ?? true,
      allowDomEdits: config?.allowDomEdits ?? true,
      maxSnapshotDepth: config?.maxSnapshotDepth ?? 8,
      maxSnapshotNodes: config?.maxSnapshotNodes ?? 1000,
      maxResponsePayloadBytes: config?.maxResponsePayloadBytes ?? 262144,
      consoleForwardRateLimitPerSec: config?.consoleForwardRateLimitPerSec ?? 200,
      commandTimeoutMs: config?.commandTimeoutMs ?? 5000
    };

    this.control = new Control(parent);
    this.control.visible = false;
    this.control.setMinWidth(420);

    this.consoleBox = new TextBox(this.control);
    this.consoleBox.readOnly = true;

    this.replEdit = new Edit(this.control);
    this.replEdit.toolTip = "Enter JavaScript to evaluate in the WebView context";
    this.replEdit.enabled = this.config.allowExpressionEval;
    this.replEdit.onReturnPressed = () => this.handleEvalSubmit();

    this.btnClearConsole = new PushButton(this.control);
    this.btnClearConsole.text = "Clear Console";
    this.btnClearConsole.onClick = () => {
      this.consoleBox.clear();
    };

    this.btnRefreshDom = new PushButton(this.control);
    this.btnRefreshDom.text = "Refresh DOM Tree";
    this.btnRefreshDom.onClick = () => this.refreshDomTree();

    this.chkHighlight = new CheckBox(this.control);
    this.chkHighlight.text = "Highlight Selected Node";
    this.chkHighlight.checked = true;
    this.chkHighlight.onCheck = (checked: boolean) => {
      if (!checked) {
        this.request({ kind: "clearHighlight" });
      } else if (this.selectedNodePath) {
        this.request({ kind: "highlight", selector: this.selectedNodePath });
      }
    };

    this.domTree = new TreeBox(this.control);
    this.domTree.numberOfColumns = 2;
    this.domTree.headerVisible = true;
    this.domTree.setHeaderText(0, "Element / Tag");
    this.domTree.setHeaderText(1, "Text / Details");
    this.domTree.setColumnWidth(0, 240);
    this.domTree.onCurrentNodeUpdated = (node: any) => {
      if (!node || !node.devToolsPath) return;

      this.selectedNodePath = node.devToolsPath;
      if (this.chkHighlight.checked) {
        this.request({
          kind: "highlight",
          selector: node.devToolsPath
        });
      }
    };

    const consoleSizer = new VerticalSizer();
    consoleSizer.margin = 4;
    consoleSizer.spacing = 4;
    consoleSizer.add(this.consoleBox, 100);

    const replSizer = new HorizontalSizer();
    replSizer.spacing = 4;
    const replLabel = new Label(this.control);
    replLabel.text = ">";
    replSizer.add(replLabel);
    replSizer.add(this.replEdit, 100);
    replSizer.add(this.btnClearConsole);
    consoleSizer.add(replSizer);

    const domHeaderSizer = new HorizontalSizer();
    domHeaderSizer.spacing = 8;
    domHeaderSizer.add(this.btnRefreshDom);
    domHeaderSizer.add(this.chkHighlight);
    domHeaderSizer.addStretch();

    const domSizer = new VerticalSizer();
    domSizer.margin = 4;
    domSizer.spacing = 4;
    domSizer.add(domHeaderSizer);
    domSizer.add(this.domTree as any, 100);

    const panelSizer = new VerticalSizer();
    panelSizer.margin = 4;
    panelSizer.spacing = 8;
    panelSizer.add(consoleSizer, 50);
    panelSizer.add(domSizer, 50);
    this.control.sizer = panelSizer;
  }

  /**
   * Returns whether the native panel is currently visible.
   */
  public get visible(): boolean {
    return this.control.visible;
  }

  /**
   * Shows the panel and starts console/DOM synchronization.
   */
  public show(): void {
    if (this.isDisposed) return;

    this.control.visible = true;
    this.control.show();
    this.control.parent.ensureLayoutUpdated();
    this.startConsolePolling();
    this.refreshDomTree();
  }

  /**
   * Hides the panel without disabling the inspected WebView.
   */
  public hide(): void {
    if (this.isDisposed) return;

    this.stopConsolePolling();
    this.request({ kind: "clearHighlight" });
    this.control.hide();
    this.control.visible = false;
    this.control.parent.ensureLayoutUpdated();
  }

  /**
   * Toggles panel visibility without creating another Dialog.
   */
  public toggle(): void {
    if (this.visible) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * Releases timers and inspector state.
   */
  public dispose(): void {
    if (this.isDisposed) return;

    this.hide();
    this.isDisposed = true;
  }

  /**
   * Starts bounded console polling.
   */
  private startConsolePolling(): void {
    if (this.pollTimer || this.isDisposed) return;

    this.pollTimer = new Timer();
    this.pollTimer.interval = 0.2;
    this.pollTimer.periodic = true;
    this.pollTimer.onTimeout = () => {
      this.bridge.requestDevToolsCommand({ kind: "popConsole" }, (result: any) => {
        if (!result || !Array.isArray(result.data)) return;

        for (const entry of result.data as DevToolsConsoleEntry[]) {
          this.appendConsoleLog(entry);
        }
      });
    };
    this.pollTimer.start();
  }

  /**
   * Stops console polling.
   */
  private stopConsolePolling(): void {
    if (!this.pollTimer) return;

    try {
      this.pollTimer.stop();
    } catch (e: any) {
      // The native timer may already be stopped during owner teardown.
    }
    this.pollTimer = null;
  }

  /**
   * Appends one browser console entry to the native log view.
   */
  private appendConsoleLog(entry: DevToolsConsoleEntry): void {
    const time = new Date(entry.timestamp).toLocaleTimeString();
    const prefix = `[${time}] [${entry.level.toUpperCase()}] `;
    this.consoleBox.insert(prefix + entry.message + "\n");
    this.consoleBox.end();
  }

  /**
   * Evaluates the current REPL expression in the inspected page.
   */
  private handleEvalSubmit(): void {
    if (!this.config.allowExpressionEval) return;

    const expression = this.replEdit.text.trim();
    if (!expression) return;

    this.replEdit.clear();
    this.consoleBox.insert(`> ${expression}\n`);

    this.bridge.requestDevToolsCommand({ kind: "evaluate", expression }, (result: any) => {
      this.consoleBox.insert(`<= ${result && result.data !== undefined ? result.data : "undefined"}\n`);
      this.consoleBox.end();
    }, (error: any) => {
      this.consoleBox.insert(`!< Error: ${error && error.message ? error.message : String(error)}\n`);
      this.consoleBox.end();
    });
  }

  /**
   * Refreshes the native DOM tree from the inspected page.
   */
  private refreshDomTree(): void {
    this.domTree.clear();
    this.bridge.requestDevToolsCommand({
      kind: "snapshot",
      maxDepth: this.config.maxSnapshotDepth
    }, (result: any) => {
      if (result && result.data) {
        this.buildTreeNodes(result.data, null);
      }
    });
  }

  /**
   * Sends a fire-and-forget inspector command without relying on Promise jobs in PJSR.
   */
  private request(command: any): void {
    this.bridge.requestDevToolsCommand(command, () => {}, () => {});
  }

  /**
   * Recursively translates a DOM snapshot into native TreeBox nodes.
   */
  private buildTreeNodes(nodeData: DevToolsDomNode, parentTreeNode: any): void {
    if (!nodeData) return;

    const treeNode: any = parentTreeNode
      ? new TreeBoxNode(parentTreeNode)
      : new TreeBoxNode(this.domTree as any);

    let tagLabel = `<${nodeData.tag}`;
    if (nodeData.id) tagLabel += ` id="${nodeData.id}"`;
    if (nodeData.className) tagLabel += ` class="${nodeData.className}"`;
    tagLabel += ">";

    treeNode.setText(0, tagLabel);
    treeNode.setText(
      1,
      nodeData.textContent || (nodeData.childCount > 0 ? `(${nodeData.childCount} children)` : "")
    );
    treeNode.devToolsPath = nodeData.path;

    if (!nodeData.children) return;

    for (const child of nodeData.children) {
      this.buildTreeNodes(child, treeNode);
    }
  }
}

/**
 * Backward-compatible type alias retained for early consumers.
 * The implementation is now a same-dialog panel, not a second Dialog.
 */
export { PixInsightDevToolsPanel as PixInsightDevToolsWindow };
