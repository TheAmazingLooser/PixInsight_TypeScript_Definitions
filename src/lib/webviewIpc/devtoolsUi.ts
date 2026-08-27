/**
 * src/lib/webviewIpc/devtoolsUi.ts
 *
 * Native, tabbed PixInsight DevTools panel hosted beside an inspected WebView.
 */

import { PixInsightWebViewBridge } from "./host";
import {
  DevToolsConfig,
  DevToolsConsoleEntry,
  DevToolsConsoleProperty,
  DevToolsDomNode,
  DevToolsInspectorEvent,
  DevToolsValueDescriptor
} from "./devtoolsTypes";

const ELEMENTS_TAB_INDEX = 0;
const CONSOLE_TAB_INDEX = 1;
const MAX_CONSOLE_ROWS = 500;

interface DevToolsTreeMetadata {
  kind: "dom" | "console" | "property" | "placeholder";
  nodeId?: string;
  selector?: string;
  objectId?: string;
  loaded?: boolean;
}

/**
 * Native DevTools panel that lives in the same PixInsight dialog as the WebView.
 * It stays outside the inspected DOM and never starts a nested modal event loop.
 */
export class PixInsightDevToolsPanel {
  public readonly control: Control;

  private readonly bridge: PixInsightWebViewBridge;
  private readonly config: Required<DevToolsConfig>;
  private readonly tabs: TabBox;
  private readonly elementsPage: Control;
  private readonly consolePage: Control;
  private readonly domTree: TreeBox;
  private readonly consoleTree: TreeBox;
  private readonly replEdit: Edit;
  private readonly btnRefreshDom: PushButton;
  private readonly btnInspect: PushButton;
  private readonly btnClearConsole: PushButton;
  private readonly chkHighlight: CheckBox;
  private readonly statusLabel: Label;
  private selectedNodeId: string | null = null;
  private selectedNodePath: string | null = null;
  private pollTimer: Timer | null = null;
  private isDisposed: boolean = false;
  private inspectModeActive: boolean = false;
  private isRefreshingDom: boolean = false;
  private consoleRowCount: number = 0;
  private nodeById: Map<string, any> = new Map();
  private pendingRevealNodeId: string | null = null;
  private requestEpoch: number = 0;
  private pollPending: boolean = false;
  private inspectRequestPending: boolean = false;

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
    this.control.setMinWidth(500);

    this.tabs = new TabBox(this.control);
    this.elementsPage = new Control(this.tabs);
    this.consolePage = new Control(this.tabs);

    this.btnRefreshDom = new PushButton(this.elementsPage);
    this.btnRefreshDom.text = "Refresh";
    this.btnRefreshDom.toolTip = "Refresh the live DOM snapshot.";
    this.btnRefreshDom.onClick = () => this.refreshDomTree();

    this.btnInspect = new PushButton(this.elementsPage);
    this.btnInspect.text = "Select element";
    this.btnInspect.toolTip = "Pick an element in the WebView. Press Escape to cancel.";
    this.btnInspect.onClick = () => this.toggleInspectMode();

    this.chkHighlight = new CheckBox(this.elementsPage);
    this.chkHighlight.text = "Highlight selection";
    this.chkHighlight.checked = true;
    this.chkHighlight.onCheck = (checked: boolean) => this.handleHighlightCheck(checked);

    this.statusLabel = new Label(this.elementsPage);
    this.statusLabel.text = "Ready";
    this.statusLabel.textAlignment = TextAlignment.Left | TextAlignment.VertCenter;

    this.domTree = new TreeBox(this.elementsPage);
    this.configureDomTree();

    this.consoleTree = new TreeBox(this.consolePage);
    this.configureConsoleTree();

    this.replEdit = new Edit(this.consolePage);
    this.replEdit.toolTip = "Evaluate JavaScript in the inspected WebView context.";
    this.replEdit.enabled = this.config.allowExpressionEval;
    this.replEdit.onReturnPressed = () => this.handleEvalSubmit();

    this.btnClearConsole = new PushButton(this.consolePage);
    this.btnClearConsole.text = "Clear";
    this.btnClearConsole.toolTip = "Clear console rows and release retained remote objects.";
    this.btnClearConsole.onClick = () => this.clearConsole();

    this.buildElementsLayout();
    this.buildConsoleLayout();
    this.tabs.addPage(this.elementsPage, "Elements");
    this.tabs.addPage(this.consolePage, "Console");
    this.tabs.currentPageIndex = ELEMENTS_TAB_INDEX;
    this.tabs.onPageSelected = (pageIndex: number) => this.handlePageSelected(pageIndex);

    const panelSizer = new VerticalSizer();
    panelSizer.margin = 2;
    panelSizer.add(this.tabs, 100);
    this.control.sizer = panelSizer;
  }

  /** Returns whether the native panel is currently visible. */
  public get visible(): boolean {
    try {
      return this.control.visible;
    } catch (error: any) {
      return false;
    }
  }

  /** Shows the panel and starts browser-state synchronization. */
  public show(): void {
    try {
      if (this.isDisposed) return;
      this.requestEpoch++;
      this.control.visible = true;
      this.control.show();
      this.control.parent.ensureLayoutUpdated();
      this.startPolling();
      this.refreshDomTree();
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Failed to show panel: ${error.message || error}`);
    }
  }

  /** Hides the panel and removes temporary inspected-page state. */
  public hide(): void {
    try {
      if (this.isDisposed) return;
      this.requestEpoch++;
      this.stopPolling();
      this.stopInspectMode();
      this.request({ kind: "clearHighlight" });
      this.control.hide();
      this.control.visible = false;
      this.control.parent.ensureLayoutUpdated();
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Failed to hide panel: ${error.message || error}`);
    }
  }

  /** Toggles panel visibility without creating another Dialog. */
  public toggle(): void {
    try {
      if (this.visible) this.hide();
      else this.show();
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Toggle failed: ${error.message || error}`);
    }
  }

  /** Releases timers, retained console objects, and inspector state. */
  public dispose(): void {
    try {
      if (this.isDisposed) return;
      this.requestEpoch++;
      this.hide();
      this.nodeById.clear();
      this.isDisposed = true;
    } catch (error: any) {
      this.isDisposed = true;
    }
  }

  /** Applies native TreeBox behavior for the Elements panel. */
  private configureDomTree(): void {
    try {
      this.domTree.numberOfColumns = 1;
      this.domTree.headerVisible = false;
      this.domTree.rootDecoration = true;
      this.domTree.nodeExpansion = true;
      this.domTree.uniformRowHeight = true;
      this.domTree.contextMenuEvents = true;
      this.domTree.onCurrentNodeUpdated = (node: any) => this.handleDomSelection(node);
      this.domTree.onNodeEntered = (node: any) => this.handleDomHover(node);
      this.domTree.onNodeExpanded = (node: any) => this.handleDomNodeExpanded(node);
      this.domTree.onContextMenu = (
        globalX: number,
        globalY: number,
        localX: number,
        localY: number
      ) => this.openDomContextMenu(globalX, globalY, localX, localY);
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: DOM tree setup failed: ${error.message || error}`);
    }
  }

  /** Applies expandable structured-value behavior for the Console panel. */
  private configureConsoleTree(): void {
    try {
      this.consoleTree.numberOfColumns = 3;
      this.consoleTree.headerVisible = true;
      this.consoleTree.rootDecoration = true;
      this.consoleTree.nodeExpansion = true;
      this.consoleTree.uniformRowHeight = true;
      this.consoleTree.setHeaderText(0, "Level");
      this.consoleTree.setHeaderText(1, "Value");
      this.consoleTree.setHeaderText(2, "Time");
      this.consoleTree.setColumnWidth(0, 70);
      this.consoleTree.setColumnWidth(1, 330);
      this.consoleTree.setColumnWidth(2, 90);
      this.consoleTree.onNodeExpanded = (node: any) => this.handleConsoleNodeExpanded(node);
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Console tree setup failed: ${error.message || error}`);
    }
  }

  /** Composes the compact toolbar and element tree. */
  private buildElementsLayout(): void {
    try {
      const toolbar = new HorizontalSizer();
      toolbar.spacing = 6;
      toolbar.add(this.btnInspect);
      toolbar.add(this.btnRefreshDom);
      toolbar.add(this.chkHighlight);
      toolbar.addStretch();
      toolbar.add(this.statusLabel);

      const layout = new VerticalSizer();
      layout.margin = 5;
      layout.spacing = 5;
      layout.add(toolbar);
      // TreeBox's PJSR declaration overloads move(), which makes it structurally
      // incompatible with Control even though it is a native Control subclass.
      layout.add(this.domTree as any, 100);
      this.elementsPage.sizer = layout;
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Elements layout failed: ${error.message || error}`);
    }
  }

  /** Composes the structured console and REPL input. */
  private buildConsoleLayout(): void {
    try {
      const replLabel = new Label(this.consolePage);
      replLabel.text = ">";
      replLabel.toolTip = "JavaScript expression";

      const replSizer = new HorizontalSizer();
      replSizer.spacing = 5;
      replSizer.add(replLabel);
      replSizer.add(this.replEdit, 100);
      replSizer.add(this.btnClearConsole);

      const layout = new VerticalSizer();
      layout.margin = 5;
      layout.spacing = 5;
      layout.add(this.consoleTree as any, 100);
      layout.add(replSizer);
      this.consolePage.sizer = layout;
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Console layout failed: ${error.message || error}`);
    }
  }

  /** Handles tab changes without discarding buffered browser console messages. */
  private handlePageSelected(pageIndex: number): void {
    try {
      if (pageIndex === ELEMENTS_TAB_INDEX && this.domTree.numberOfChildren === 0) {
        this.refreshDomTree();
      }
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Tab selection failed: ${error.message || error}`);
    }
  }

  /** Starts bounded console and locator-event polling. */
  private startPolling(): void {
    try {
      if (this.pollTimer || this.isDisposed) return;
      this.pollTimer = new Timer();
      this.pollTimer.interval = 0.15;
      this.pollTimer.periodic = true;
      this.pollTimer.onTimeout = () => this.pollBrowserState();
      this.pollTimer.start();
    } catch (error: any) {
      this.pollTimer = null;
      Console.warningln(`PixInsightDevToolsPanel: Polling could not start: ${error.message || error}`);
    }
  }

  /** Stops the panel polling timer safely during owner teardown. */
  private stopPolling(): void {
    try {
      if (!this.pollTimer) return;
      this.pollTimer.stop();
    } catch (error: any) {
      // PixInsight can destroy an owning control before its script-side timer wrapper.
    } finally {
      this.pollTimer = null;
    }
  }

  /** Drains console records and inspector events through the serialized command queue. */
  private pollBrowserState(): void {
    try {
      if (this.isDisposed || !this.visible) return;
      if (this.pollPending) return;
      this.pollPending = true;
      const epoch = this.requestEpoch;
      this.bridge.requestDevToolsCommand({ kind: "popConsole" }, (result: any) => {
        try {
          if (!this.isCallbackCurrent(epoch, true)) return;
          if (result && Array.isArray(result.data)) {
            for (const entry of result.data as DevToolsConsoleEntry[]) this.appendConsoleEntry(entry);
          }
        } catch (error: any) {
          Console.warningln(`PixInsightDevToolsPanel: Console response failed: ${error.message || error}`);
        } finally {
          if (!this.isCallbackCurrent(epoch, true)) {
            this.pollPending = false;
            return;
          }
          this.bridge.requestDevToolsCommand({ kind: "popInspectorEvents" }, (eventResult: any) => {
            try {
              if (!this.isCallbackCurrent(epoch, true)) return;
              if (eventResult && Array.isArray(eventResult.data)) {
                for (const event of eventResult.data as DevToolsInspectorEvent[]) this.handleInspectorEvent(event);
              }
            } catch (error: any) {
              Console.warningln(`PixInsightDevToolsPanel: Inspector response failed: ${error.message || error}`);
            } finally {
              this.pollPending = false;
            }
          }, () => { this.pollPending = false; });
        }
      }, () => { this.pollPending = false; });
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Polling tick failed: ${error.message || error}`);
    }
  }

  /** Toggles capture-phase element picking inside the inspected page. */
  private toggleInspectMode(): void {
    try {
      if (this.inspectModeActive) this.stopInspectMode();
      else this.startInspectMode();
    } catch (error: any) {
      this.setStatus("Locator failed");
    }
  }

  /** Enables element locator mode and exposes its state visibly. */
  private startInspectMode(): void {
    try {
      if (this.inspectRequestPending || !this.visible) return;
      this.inspectRequestPending = true;
      const epoch = this.requestEpoch;
      this.bridge.requestDevToolsCommand({ kind: "startInspect" }, () => {
        this.inspectRequestPending = false;
        if (!this.isCallbackCurrent(epoch, true)) {
          this.request({ kind: "stopInspect" });
          return;
        }
        this.inspectModeActive = true;
        this.btnInspect.text = "Cancel picker";
        this.setStatus("Pick an element (Esc cancels)");
      }, (error: any) => {
        this.inspectRequestPending = false;
        if (this.isCallbackCurrent(epoch, true)) this.setStatus(error.message || String(error));
      });
    } catch (error: any) {
      this.setStatus(error.message || String(error));
    }
  }

  /** Disables element locator mode without clearing the selected element. */
  private stopInspectMode(): void {
    try {
      if (this.inspectModeActive) this.request({ kind: "stopInspect" });
      this.inspectRequestPending = false;
      this.inspectModeActive = false;
      this.btnInspect.text = "Select element";
      this.setStatus("Ready");
    } catch (error: any) {
      this.inspectModeActive = false;
    }
  }

  /** Processes hover, select, and cancel events generated by locator mode. */
  private handleInspectorEvent(event: DevToolsInspectorEvent): void {
    try {
      if (!event) return;
      if (event.type === "cancel") {
        this.stopInspectMode();
        return;
      }
      if (event.nodeId) {
        const existingNode = this.nodeById.get(event.nodeId);
        if (existingNode) this.revealTreeNode(existingNode, event.type === "select");
        else if (event.type === "select") this.revealInspectedElement(event.nodeId, event.selector);
      }
      if (event.type === "select") {
        this.stopInspectMode();
        this.tabs.currentPageIndex = ELEMENTS_TAB_INDEX;
      }
    } catch (error: any) {
      this.setStatus("Locator synchronization failed");
    }
  }

  /**
   * Reveals an inspected element, expanding ancestor snapshots on demand when the
   * selected node was beyond the configured initial snapshot depth.
   */
  private revealInspectedElement(nodeId: string, selector?: string): void {
    try {
      this.pendingRevealNodeId = nodeId;
      this.expandTreeTowardSelector(selector, 0);
    } catch (error: any) {
      this.pendingRevealNodeId = null;
      this.setStatus("Could not reveal inspected element");
    }
  }

  /** Expands the deepest known selector ancestor until the selected handle appears. */
  private expandTreeTowardSelector(selector: string | undefined, attempts: number): void {
    try {
      if (!this.pendingRevealNodeId) return;
      const exact = this.nodeById.get(this.pendingRevealNodeId);
      if (exact) {
        this.revealTreeNode(exact, true);
        this.pendingRevealNodeId = null;
        return;
      }
      if (!selector || attempts >= this.config.maxSnapshotDepth + 2) {
        const pendingId = this.pendingRevealNodeId;
        this.pendingRevealNodeId = null;
        this.refreshDomTree(pendingId);
        return;
      }

      let candidate: { node: any; metadata: DevToolsTreeMetadata } | null = null;
      for (const node of this.nodeById.values()) {
        const metadata = this.getMetadata(node);
        if (!metadata || metadata.kind !== "dom" || !metadata.selector || metadata.loaded) continue;
        if (selector === metadata.selector || selector.indexOf(metadata.selector + " > ") === 0) {
          if (!candidate || metadata.selector.length > (candidate.metadata.selector || "").length) {
            candidate = { node, metadata };
          }
        }
      }

      if (!candidate || !candidate.metadata.nodeId) {
        const pendingId = this.pendingRevealNodeId;
        this.pendingRevealNodeId = null;
        this.refreshDomTree(pendingId);
        return;
      }

      candidate.metadata.loaded = true;
      this.bridge.requestDevToolsCommand({
        kind: "expand",
        nodeId: candidate.metadata.nodeId,
        selector: candidate.metadata.selector,
        maxDepth: 1
      }, (result: any) => {
        try {
          if (this.isDisposed) return;
          this.removePlaceholderChildren(candidate!.node);
          const expanded = result && result.data ? result.data as DevToolsDomNode : null;
          if (expanded && expanded.children) {
            for (const child of expanded.children) this.buildDomTreeNodes(child, candidate!.node);
          }
          candidate!.node.expanded = true;
          this.expandTreeTowardSelector(selector, attempts + 1);
        } catch (error: any) {
          candidate!.metadata.loaded = false;
          this.pendingRevealNodeId = null;
          this.setStatus("Could not expand inspected path");
        }
      }, () => {
        candidate!.metadata.loaded = false;
        this.pendingRevealNodeId = null;
        this.setStatus("Could not expand inspected path");
      });
    } catch (error: any) {
      this.pendingRevealNodeId = null;
      this.setStatus("Could not reveal inspected element");
    }
  }

  /** Updates the selected handle and highlights the matching live page element. */
  private handleDomSelection(node: any): void {
    try {
      const metadata = this.getMetadata(node);
      if (!metadata || metadata.kind !== "dom" || !metadata.nodeId) return;
      this.selectedNodeId = metadata.nodeId;
      this.selectedNodePath = metadata.selector || null;
      if (this.chkHighlight.checked) {
        this.request({ kind: "highlight", nodeId: metadata.nodeId, selector: metadata.selector });
      }
      this.setStatus(metadata.selector || metadata.nodeId);
    } catch (error: any) {
      this.setStatus("Selection failed");
    }
  }

  /** Mirrors native tree hover into the WebView when highlighting is enabled. */
  private handleDomHover(node: any): void {
    try {
      if (!this.chkHighlight.checked) return;
      const metadata = this.getMetadata(node);
      if (metadata && metadata.kind === "dom" && metadata.nodeId) {
        this.request({ kind: "highlight", nodeId: metadata.nodeId, selector: metadata.selector });
      }
    } catch (error: any) {
      // Hover feedback is intentionally best-effort.
    }
  }

  /** Clears or restores visual node highlighting. */
  private handleHighlightCheck(checked: boolean): void {
    try {
      if (!checked) this.request({ kind: "clearHighlight" });
      else if (this.selectedNodeId) {
        this.request({ kind: "highlight", nodeId: this.selectedNodeId, selector: this.selectedNodePath || undefined });
      }
    } catch (error: any) {
      this.setStatus("Highlight update failed");
    }
  }

  /** Requests a shallow subtree when an expandable snapshot node is opened. */
  private handleDomNodeExpanded(node: any): void {
    try {
      const metadata = this.getMetadata(node);
      if (!metadata || metadata.kind !== "dom" || !metadata.nodeId || metadata.loaded) return;
      metadata.loaded = true;
      this.bridge.requestDevToolsCommand({
        kind: "expand",
        nodeId: metadata.nodeId,
        selector: metadata.selector,
        maxDepth: 1
      }, (result: any) => {
        try {
          if (this.isDisposed) return;
          if (!result || !result.data) return;
          this.removePlaceholderChildren(node);
          const expanded = result.data as DevToolsDomNode;
          if (expanded.children) {
            for (const child of expanded.children) this.buildDomTreeNodes(child, node);
          }
        } catch (error: any) {
          metadata.loaded = false;
        }
      }, () => { metadata.loaded = false; });
    } catch (error: any) {
      this.setStatus("Could not expand node");
    }
  }

  /** Opens Chrome-like element actions for the node under the context-menu point. */
  private openDomContextMenu(
    globalX: number,
    globalY: number,
    localX: number,
    localY: number
  ): boolean {
    try {
      const node: any = this.domTree.nodeByPosition(localX, localY);
      const metadata = this.getMetadata(node);
      if (!node || !metadata || metadata.kind !== "dom" || !metadata.nodeId) return false;
      this.domTree.currentNode = node;

      const menu = new Menu(this.domTree as any);
      const scrollItem = new MenuItem("Scroll into view");
      scrollItem.onTrigger = () => this.request({
        kind: "scrollIntoView",
        nodeId: metadata.nodeId,
        selector: metadata.selector
      });
      menu.addItem(scrollItem);
      menu.addSeparator();
      menu.addItem(this.createCopyMenuItem("Copy selector", "selector", metadata));
      menu.addItem(this.createCopyMenuItem("Copy innerHTML", "innerHTML", metadata));
      menu.addItem(this.createCopyMenuItem("Copy outerHTML", "outerHTML", metadata));
      menu.addItem(this.createCopyMenuItem("Copy textContent", "textContent", metadata));
      menu.execute(globalX, globalY);
      return true;
    } catch (error: any) {
      this.setStatus("Context menu failed");
      return false;
    }
  }

  /** Builds one copy action that reports WebView clipboard fallback status. */
  private createCopyMenuItem(
    label: string,
    valueKind: "selector" | "innerHTML" | "outerHTML" | "textContent",
    metadata: DevToolsTreeMetadata
  ): MenuItem {
    try {
      const item = new MenuItem(label);
      item.onTrigger = () => {
        this.bridge.requestDevToolsCommand({
          kind: "copyNodeValue",
          nodeId: metadata.nodeId,
          selector: metadata.selector,
          valueKind
        }, (result: any) => {
          const copied = !!(result && result.data && result.data.copied);
          this.setStatus(copied ? `${label.replace("Copy ", "")} copied` : "Clipboard blocked by WebView");
        }, (error: any) => this.setStatus(error.message || String(error)));
      };
      return item;
    } catch (error: any) {
      const fallback = new MenuItem(label);
      fallback.enabled = false;
      return fallback;
    }
  }

  /** Refreshes a bounded DOM snapshot and optionally reveals a selected browser node. */
  private refreshDomTree(revealNodeId?: string): void {
    try {
      if (this.isRefreshingDom || this.isDisposed) return;
      this.isRefreshingDom = true;
      this.btnRefreshDom.enabled = false;
      this.setStatus("Refreshing DOM…");
      this.bridge.requestDevToolsCommand({
        kind: "snapshot",
        maxDepth: this.config.maxSnapshotDepth
      }, (result: any) => {
        try {
          if (this.isDisposed) return;
          this.domTree.clear();
          this.nodeById.clear();
          if (result && result.data) this.buildDomTreeNodes(result.data as DevToolsDomNode, null);
          const nodeToReveal = revealNodeId || this.selectedNodeId;
          if (nodeToReveal && this.nodeById.has(nodeToReveal)) {
            this.revealTreeNode(this.nodeById.get(nodeToReveal), true);
          }
          this.setStatus(result && result.truncated ? "DOM truncated at configured node limit" : "DOM synchronized");
        } catch (error: any) {
          this.setStatus("DOM render failed");
        } finally {
          this.isRefreshingDom = false;
          this.btnRefreshDom.enabled = true;
        }
      }, (error: any) => {
        this.isRefreshingDom = false;
        this.btnRefreshDom.enabled = true;
        this.setStatus(error.message || String(error));
      });
    } catch (error: any) {
      this.isRefreshingDom = false;
      this.btnRefreshDom.enabled = true;
      this.setStatus("DOM refresh failed");
    }
  }

  /** Recursively translates one DOM snapshot branch into interactive native nodes. */
  private buildDomTreeNodes(nodeData: DevToolsDomNode, parentTreeNode: any): any {
    try {
      if (!nodeData || !nodeData.nodeId) return null;
      const treeNode: any = parentTreeNode
        ? new TreeBoxNode(parentTreeNode)
        : new TreeBoxNode(this.domTree);
      treeNode.setText(0, this.formatDomNode(nodeData));
      treeNode.setToolTip(0, nodeData.path);
      treeNode.devToolsMetadata = {
        kind: "dom",
        nodeId: nodeData.nodeId,
        selector: nodeData.path,
        loaded: !nodeData.expandable
      } as DevToolsTreeMetadata;
      this.nodeById.set(nodeData.nodeId, treeNode);
      if (nodeData.children) {
        for (const child of nodeData.children) this.buildDomTreeNodes(child, treeNode);
      }
      if (nodeData.expandable && (!nodeData.children || nodeData.children.length < nodeData.childCount)) {
        this.addPlaceholderNode(treeNode, `… ${nodeData.childCount} child element(s)`);
      }
      return treeNode;
    } catch (error: any) {
      return null;
    }
  }

  /** Formats a DOM element as readable, non-tabular markup. */
  private formatDomNode(nodeData: DevToolsDomNode): string {
    try {
      let label = `<${nodeData.tag}`;
      if (nodeData.id) label += ` id="${this.clipText(nodeData.id, 80)}"`;
      if (nodeData.className) label += ` class="${this.clipText(nodeData.className, 120)}"`;
      label += ">";
      if (nodeData.textContent) label += `  ${this.clipText(nodeData.textContent, 140)}`;
      return label;
    } catch (error: any) {
      return `<${nodeData.tag || "element"}>`;
    }
  }

  /** Adds a non-selectable child so a lazy branch displays an expansion affordance. */
  private addPlaceholderNode(parent: any, text: string): void {
    try {
      const placeholder: any = new TreeBoxNode(parent);
      placeholder.setText(0, text);
      placeholder.selectable = false;
      placeholder.devToolsMetadata = { kind: "placeholder" } as DevToolsTreeMetadata;
    } catch (error: any) {
      // Missing placeholders only affect the expansion affordance, not inspection correctness.
    }
  }

  /** Removes lazy placeholder children before actual subtree insertion. */
  private removePlaceholderChildren(parent: any): void {
    try {
      for (let index = parent.numberOfChildren - 1; index >= 0; index--) {
        const child = parent.child(index);
        const metadata = this.getMetadata(child);
        if (metadata && metadata.kind === "placeholder") parent.remove(index);
      }
    } catch (error: any) {
      // The snapshot may already contain all children; no placeholder removal is required.
    }
  }

  /** Expands all ancestors and optionally selects a synchronized browser target. */
  private revealTreeNode(node: any, select: boolean): void {
    try {
      if (!node) return;
      let ancestor = node.parent;
      while (ancestor) {
        ancestor.expanded = true;
        ancestor = ancestor.parent;
      }
      if (select) {
        node.selected = true;
        this.domTree.currentNode = node;
      }
      this.domTree.setNodeIntoViewport(node);
    } catch (error: any) {
      this.setStatus("Could not reveal element");
    }
  }

  /** Appends one browser console record with expandable argument descriptors. */
  private appendConsoleEntry(entry: DevToolsConsoleEntry): void {
    try {
      if (!entry || !Array.isArray(entry.args)) return;
      if (this.consoleRowCount >= MAX_CONSOLE_ROWS) this.removeOldestConsoleRow();
      const root: any = new TreeBoxNode(this.consoleTree);
      root.setText(0, entry.level.toUpperCase());
      root.setText(1, entry.args.map(argument => argument.preview).join(" "));
      root.setText(2, new Date(entry.timestamp).toLocaleTimeString());
      root.setToolTip(1, entry.source || "WebView console");
      root.devToolsMetadata = { kind: "console", loaded: true } as DevToolsTreeMetadata;
      for (let index = 0; index < entry.args.length; index++) {
        const argument = entry.args[index];
        if (entry.args.length > 1 || argument.expandable) {
          this.addConsoleValueNode(root, `[${index}]`, argument);
        }
      }
      this.consoleRowCount++;
      this.consoleTree.setNodeIntoViewport(root);
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Console row failed: ${error.message || error}`);
    }
  }

  /** Removes one oldest native row so high-volume logging remains memory-bounded. */
  private removeOldestConsoleRow(): void {
    try {
      if (this.consoleTree.numberOfChildren > 0) {
        this.consoleTree.remove(0);
        this.consoleRowCount = Math.max(0, this.consoleRowCount - 1);
      }
    } catch (error: any) {
      // If a runtime cannot remove a row, reset only the native view as a safe fallback.
      this.consoleTree.clear();
      this.consoleRowCount = 0;
    }
  }

  /** Appends a console or object-property descriptor node. */
  private addConsoleValueNode(parent: any, name: string, descriptor: DevToolsValueDescriptor): any {
    try {
      const node: any = new TreeBoxNode(parent);
      node.setText(0, name);
      node.setText(1, descriptor.preview);
      node.setText(2, descriptor.subtype || descriptor.type);
      node.devToolsMetadata = {
        kind: "property",
        objectId: descriptor.objectId,
        loaded: !descriptor.expandable
      } as DevToolsTreeMetadata;
      if (descriptor.expandable && descriptor.objectId) this.addPlaceholderNode(node, "… expand properties");
      return node;
    } catch (error: any) {
      return null;
    }
  }

  /** Loads retained object properties without invoking browser-side getters. */
  private handleConsoleNodeExpanded(node: any): void {
    try {
      const metadata = this.getMetadata(node);
      if (!metadata || metadata.kind !== "property" || !metadata.objectId || metadata.loaded) return;
      metadata.loaded = true;
      this.bridge.requestDevToolsCommand({ kind: "inspectObject", objectId: metadata.objectId }, (result: any) => {
        try {
          if (this.isDisposed) return;
          this.removePlaceholderChildren(node);
          if (!result || !Array.isArray(result.data)) return;
          for (const property of result.data as DevToolsConsoleProperty[]) {
            this.addConsoleValueNode(node, property.name, property.value);
          }
        } catch (error: any) {
          metadata.loaded = false;
        }
      }, () => { metadata.loaded = false; });
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Object expansion failed: ${error.message || error}`);
    }
  }

  /** Evaluates the current REPL expression and renders its structured result. */
  private handleEvalSubmit(): void {
    try {
      if (!this.config.allowExpressionEval) return;
      const expression = this.replEdit.text.trim();
      if (!expression) return;
      this.replEdit.clear();
      this.tabs.currentPageIndex = CONSOLE_TAB_INDEX;
      this.appendConsoleEntry({
        level: "info",
        args: [{ type: "command", preview: `> ${expression}` }],
        timestamp: Date.now(),
        source: "DevTools REPL"
      });
      this.bridge.requestDevToolsCommand({ kind: "evaluate", expression }, (result: any) => {
        if (this.isDisposed) return;
        this.appendConsoleEntry({
          level: "log",
          args: [result && result.data ? result.data as DevToolsValueDescriptor : { type: "undefined", preview: "undefined" }],
          timestamp: Date.now(),
          source: "Evaluation result"
        });
      }, (error: any) => {
        if (this.isDisposed) return;
        this.appendConsoleEntry({
          level: "error",
          args: [{ type: "error", subtype: "error", preview: error.message || String(error) }],
          timestamp: Date.now(),
          source: "Evaluation error"
        });
      });
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Evaluation failed: ${error.message || error}`);
    }
  }

  /** Clears native console rows and optionally releases browser-side objects. */
  private clearConsole(clearRemote: boolean = true): void {
    try {
      this.consoleTree.clear();
      this.consoleRowCount = 0;
      if (clearRemote) this.request({ kind: "clearConsole" });
    } catch (error: any) {
      Console.warningln(`PixInsightDevToolsPanel: Console clear failed: ${error.message || error}`);
    }
  }

  /** Retrieves metadata stored on a native TreeBox node safely. */
  private getMetadata(node: any): DevToolsTreeMetadata | null {
    try {
      return node && node.devToolsMetadata ? node.devToolsMetadata as DevToolsTreeMetadata : null;
    } catch (error: any) {
      return null;
    }
  }

  /** Verifies that an asynchronous result still targets the active native panel state. */
  private isCallbackCurrent(epoch: number, requireVisible: boolean): boolean {
    try {
      return !this.isDisposed && epoch === this.requestEpoch && (!requireVisible || this.visible);
    } catch (error: any) {
      return false;
    }
  }

  /** Sets a compact, clipped status message in the Elements toolbar. */
  private setStatus(message: string): void {
    try {
      this.statusLabel.text = this.clipText(message || "Ready", 90);
      this.statusLabel.toolTip = message || "Ready";
    } catch (error: any) {
      // Status output must never interrupt inspector operation.
    }
  }

  /** Clips text to prevent huge DOM values from destabilizing native controls. */
  private clipText(value: string, maxLength: number): string {
    try {
      const normalized = String(value).replace(/\s+/g, " ").trim();
      return normalized.length > maxLength ? normalized.substring(0, maxLength) + "…" : normalized;
    } catch (error: any) {
      return "";
    }
  }

  /** Sends a best-effort inspector command without relying on Promise jobs in PJSR. */
  private request(command: any): void {
    try {
      this.bridge.requestDevToolsCommand(command, () => {}, () => {});
    } catch (error: any) {
      // Fire-and-forget UI feedback must not destabilize the native event loop.
    }
  }
}

/**
 * Backward-compatible type alias retained for early consumers.
 * The implementation is a same-dialog panel, not a second Dialog.
 */
export { PixInsightDevToolsPanel as PixInsightDevToolsWindow };
