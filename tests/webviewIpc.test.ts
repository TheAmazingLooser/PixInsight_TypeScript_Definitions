// Mock PixInsight Console & UI globals before imports
(global as any).Console = {
    writeln: () => {},
    warningln: () => {},
    criticalln: () => {}
};

(global as any).Control = class Control {
    public parent: any;
    public visible = true;
    public enabled = true;
    public sizer: any;
    constructor(parent?: any) { this.parent = parent; }
    public show() { this.visible = true; }
    public hide() { this.visible = false; }
    public setMinWidth() {}
    public ensureLayoutUpdated() {}
};

(global as any).Dialog = class Dialog extends (global as any).Control {
    public windowTitle = '';
    public userResizable = false;
    public minWidth = 0;
    public minHeight = 0;
    public sizer: any;
    public onKeyPress: ((key: number, modifiers: number) => boolean) | null = null;
    public show() {}
    public hide() {}
    public destroy() {}
};

(global as any).TextBox = class TextBox extends (global as any).Control {
    public readOnly = false;
    public text = '';
    public clear() { this.text = ''; }
    public insert(t: string) { this.text += t; }
    public end() {}
};

(global as any).Edit = class Edit extends (global as any).Control {
    public toolTip = '';
    public text = '';
    public onReturnPressed: (() => void) | null = null;
    public clear() { this.text = ''; }
};

(global as any).PushButton = class PushButton extends (global as any).Control {
    public text = '';
    public onClick: (() => void) | null = null;
};

(global as any).CheckBox = class CheckBox extends (global as any).Control {
    public text = '';
    public checked = false;
    public onCheck: ((c: boolean) => void) | null = null;
};

(global as any).Label = class Label extends (global as any).Control {
    public text = '';
};

(global as any).TreeBox = class TreeBox extends (global as any).Control {
    public numberOfColumns = 0;
    public numberOfChildren = 0;
    public headerVisible = false;
    public rootDecoration = false;
    public nodeExpansion = false;
    public uniformRowHeight = false;
    public contextMenuEvents = false;
    public currentNode: any = null;
    public onCurrentNodeUpdated: ((node: any) => void) | null = null;
    public onNodeEntered: ((node: any) => void) | null = null;
    public onNodeExpanded: ((node: any) => void) | null = null;
    public onContextMenu: ((globalX: number, globalY: number, localX: number, localY: number) => boolean) | null = null;
    public setHeaderText() {}
    public setColumnWidth() {}
    public clear() {}
    public nodeByPosition() { return null; }
    public setNodeIntoViewport() {}
};

(global as any).TreeBoxNode = class TreeBoxNode {
    public parent: any;
    public numberOfChildren = 0;
    public selectable = true;
    public selected = false;
    public expanded = false;
    constructor(parent: any) { this.parent = parent; }
    public setText() {}
    public setToolTip() {}
    public child() { return null; }
    public remove() {}
};

(global as any).TabBox = class TabBox extends (global as any).Control {
    public currentPageIndex = 0;
    public onPageSelected: ((index: number) => void) | null = null;
    public addPage() {}
};

(global as any).Menu = class Menu extends (global as any).Control {
    public addItem() {}
    public addSeparator() {}
    public execute() {}
};

(global as any).MenuItem = class MenuItem {
    public enabled = true;
    public onTrigger: (() => void) | null = null;
    constructor(public text = '') {}
};

(global as any).TextAlignment = { Left: 1, VertCenter: 128 };
(global as any).KeyCode = { F12: 134217740 };
(global as any).KeyboardModifier = { None: 0 };

(global as any).Sizer = class Sizer {
    public margin = 0;
    public spacing = 0;
    public add() {}
    public addStretch() {}
};

(global as any).HorizontalSizer = class HorizontalSizer extends (global as any).Sizer {};
(global as any).VerticalSizer = class VerticalSizer extends (global as any).Sizer {};
(global as any).Timer = class Timer {
    public interval = 0;
    public periodic = false;
    public onTimeout: (() => void) | null = null;
    public start() {}
    public stop() {}
};

import { describe, it, expect, beforeEach } from 'vitest';
import { PixInsightWebViewBridge } from '../src/lib/webviewIpc/host';
import { DEVTOOLS_INJECTED_JS } from '../src/lib/webviewIpc/devtoolsSource';
import { IpcRequest } from '../src/lib/webviewIpc/types';

// Mock PixInsight WebView control
class MockWebView {
    public isNull = false;
    public evaluatedScripts: string[] = [];
    public onScriptResultAvailable: ((val: any) => void) | null = null;
    public onLoadFinished: ((ok: boolean) => void) | null = null;
    public onLoadStarted: (() => void) | null = null;

    public evaluateScript(script: string): MockWebView {
        this.evaluatedScripts.push(script);
        return this;
    }

    public simulateScriptResult(value: any): void {
        if (this.onScriptResultAvailable) {
            this.onScriptResultAvailable(value);
        }
    }
}

describe('PixInsightWebViewBridge Unit Tests', () => {
    let mockWebView: MockWebView;
    let bridge: PixInsightWebViewBridge;

    beforeEach(() => {
        mockWebView = new MockWebView();
        bridge = new PixInsightWebViewBridge(
            mockWebView as any,
            {
                allowLocalOnly: true,
                allowedOrigins: ['file://', 'data:', 'about:blank', 'https://trusted.app'],
                allowUnregisteredMethods: false
            },
            {
                enabled: true,
                hotkeyToggle: true,
                requireTrustedOrigin: true
            }
        );
    });

    it('should correctly evaluate allowed origins under Iron Shield policy', () => {
        expect(bridge.isOriginAllowed('file:///C:/local/index.html')).toBe(true);
        expect(bridge.isOriginAllowed('data:text/html,<h1>Test</h1>')).toBe(true);
        expect(bridge.isOriginAllowed('about:blank')).toBe(true);
        expect(bridge.isOriginAllowed('https://trusted.app/index.html')).toBe(true);
        expect(bridge.isOriginAllowed('HTTPS://TRUSTED.APP:443/index.html')).toBe(true);

        expect(bridge.isOriginAllowed('https://malicious-site.com')).toBe(false);
        expect(bridge.isOriginAllowed('http://untrusted.org')).toBe(false);
        expect(bridge.isOriginAllowed('https://trusted.app.evil.example')).toBe(false);
        expect(bridge.isOriginAllowed('https://trusted.app@evil.example')).toBe(false);
        expect(bridge.isOriginAllowed('https://trusted.app:444/index.html')).toBe(false);
        expect(bridge.isOriginAllowed('https://trusted%2eapp/index.html')).toBe(false);
    });

    it('should register and execute registered RPC handlers safely', () => {
        let executed = false;
        bridge.registerHandler('testMethod', (params) => {
            executed = true;
            return { echo: params.val * 2 };
        });

        // Simulate the serialized queue response after a separately verified raw location.
        const token = (bridge as any).sessionToken;
        const validRequest: IpcRequest = {
            id: 'req_123',
            token: token,
            method: 'testMethod',
            params: { val: 21 },
            timestamp: Date.now()
        };

        (bridge as any).lastVerifiedUrl = 'file:///C:/local/index.html';
        (bridge as any).ipcQueuePopPending = true;
        mockWebView.simulateScriptResult(JSON.stringify(validRequest));
        expect(executed).toBe(true);

        // Verify response sent via evaluateScript
        const lastScript = mockWebView.evaluatedScripts[mockWebView.evaluatedScripts.length - 1];
        expect(lastScript).toContain('_receiveResponse');
        expect(lastScript).toContain('"result":{"echo":42}');
    });

    it('should send DevTools commands and process tagged channel responses', async () => {
        const cmdPromise = bridge.sendDevToolsCommand({ kind: 'snapshot' });

        const originScript = mockWebView.evaluatedScripts[mockWebView.evaluatedScripts.length - 1];
        expect(originScript).toBe('window.location.href');

        // DevTools cannot inject or execute until the current page origin is known and trusted.
        mockWebView.simulateScriptResult('file:///C:/local/index.html');

        const injectionScript = mockWebView.evaluatedScripts[mockWebView.evaluatedScripts.length - 1];
        expect(injectionScript).toContain('devtools-agent');

        // The first command waits until the in-page agent explicitly acknowledges readiness.
        mockWebView.simulateScriptResult(JSON.stringify({
            channel: 'devtools-agent',
            ready: true
        }));

        const lastScript = mockWebView.evaluatedScripts[mockWebView.evaluatedScripts.length - 1];
        expect(lastScript).toContain('__PI_DEVTOOLS_EXECUTE__');

        // Extract ID generated in evaluating call
        const match = lastScript.match(/"id":"(dt_[^"]+)"/);
        expect(match).not.toBeNull();
        const cmdId = match![1];

        // Simulate agent response
        mockWebView.simulateScriptResult(JSON.stringify({
            channel: 'devtools',
            id: cmdId,
            ok: true,
            data: { tag: 'html', childCount: 2 }
        }));

        const res = await cmdPromise;
        expect(res.ok).toBe(true);
        expect(res.data.tag).toBe('html');
    });

    it('should reject DevTools commands before injection when origin is untrusted', async () => {
        const cmdPromise = bridge.sendDevToolsCommand({ kind: 'snapshot' });

        mockWebView.simulateScriptResult('https://malicious-site.com/');

        await expect(cmdPromise).rejects.toThrow('Untrusted origin');
        expect(mockWebView.evaluatedScripts.some(script => script.includes('__PI_DEVTOOLS_EXECUTE__'))).toBe(false);
    });

    it('should bind the real F12 code and preserve the previous dialog key handler', () => {
        const dialog: any = new (global as any).Dialog();
        let previousCalled = false;
        const previousHandler = () => {
            previousCalled = true;
            return true;
        };
        dialog.onKeyPress = previousHandler;

        bridge.bindDevToolsHotkey(dialog);
        expect(dialog.onKeyPress).not.toBe(previousHandler);
        const handledF12 = dialog.onKeyPress((global as any).KeyCode.F12, (global as any).KeyboardModifier.None);
        expect(handledF12).toBe(true);
        expect(previousCalled).toBe(false);
        expect((bridge as any).devToolsPanel.visible).toBe(true);

        const handledOther = dialog.onKeyPress(65, (global as any).KeyboardModifier.None);
        expect(handledOther).toBe(true);
        expect(previousCalled).toBe(true);
    });

    it('should emit syntactically valid injected DevTools JavaScript', () => {
        expect(() => new Function(DEVTOOLS_INJECTED_JS)).not.toThrow();
    });

    it('should not eagerly inject DevTools on an untrusted navigation', () => {
        mockWebView.onLoadStarted!();
        mockWebView.onLoadFinished!(true);
        expect(mockWebView.evaluatedScripts.some(script => script.includes('devtools-agent'))).toBe(false);

        mockWebView.simulateScriptResult('https://malicious-site.com/');
        expect(mockWebView.evaluatedScripts.some(script => script.includes('devtools-agent'))).toBe(false);
    });

    it('should invalidate pending DevTools commands when navigation starts', async () => {
        const pending = bridge.sendDevToolsCommand({ kind: 'snapshot' });
        mockWebView.onLoadStarted!();
        await expect(pending).rejects.toThrow('document changed');
    });

    it('should bound the DevTools command queue', async () => {
        (bridge as any).policy.maxQueueSize = 1;
        const first = bridge.sendDevToolsCommand({ kind: 'snapshot' });
        const second = bridge.sendDevToolsCommand({ kind: 'popConsole' });

        await expect(second).rejects.toThrow('QUEUE_FULL');
        mockWebView.onLoadStarted!();
        await expect(first).rejects.toThrow('document changed');
    });

    it('should dispatch DevTools commands after an empty IPC queue result', () => {
        (bridge as any).lastVerifiedUrl = 'file:///C:/local/index.html';
        (bridge as any).devToolsAgentReady = true;
        (bridge as any).ipcQueuePopPending = true;

        let completed = false;
        bridge.requestDevToolsCommand({ kind: 'snapshot' }, () => { completed = true; });
        expect(mockWebView.evaluatedScripts.some(script => script.includes('__PI_DEVTOOLS_EXECUTE__'))).toBe(false);

        // This is the value returned by _popQueue() when no browser RPC is waiting.
        mockWebView.simulateScriptResult(null);

        const commandScript = mockWebView.evaluatedScripts[mockWebView.evaluatedScripts.length - 1];
        expect((bridge as any).ipcQueuePopPending).toBe(false);
        expect(commandScript).toContain('__PI_DEVTOOLS_EXECUTE__');
        expect(completed).toBe(false);
    });

    it('should support exposeAll and dangerouslyExposeAll for bulk method invocation', () => {
        (global as any).MockModule = {
            calc: (x: number) => x * 10
        };

        bridge.exposeAll();

        const token = (bridge as any).sessionToken;
        const req: IpcRequest = {
            id: 'req_expose_all',
            token: token,
            method: 'MockModule.calc',
            params: 5,
            timestamp: Date.now()
        };

        (bridge as any).lastVerifiedUrl = 'file:///C:/local/index.html';
        (bridge as any).ipcQueuePopPending = true;
        mockWebView.simulateScriptResult(JSON.stringify(req));

        const lastScript = mockWebView.evaluatedScripts[mockWebView.evaluatedScripts.length - 1];
        expect(lastScript).toContain('"result":50');
    });

    it('should reject requests with invalid or forged session tokens', () => {
        bridge.registerHandler('secretMethod', () => 'secret');

        const forgedRequest: IpcRequest = {
            id: 'req_forged',
            token: 'FORGED_SESSION_TOKEN',
            method: 'secretMethod',
            params: null,
            timestamp: Date.now()
        };

        (bridge as any).lastVerifiedUrl = 'file:///C:/local/index.html';
        (bridge as any).ipcQueuePopPending = true;
        mockWebView.simulateScriptResult(JSON.stringify(forgedRequest));

        const lastScript = mockWebView.evaluatedScripts[mockWebView.evaluatedScripts.length - 1];
        expect(lastScript).toContain('_receiveResponse');
        expect(lastScript).toContain('SECURITY_ERROR: Invalid or forged session token');
    });

    it('should reject IPC requests originating from untrusted web locations', () => {
        let called = false;
        bridge.registerHandler('sensitiveAction', () => { called = true; });

        const token = (bridge as any).sessionToken;
        const req: IpcRequest = {
            id: 'req_untrusted',
            token: token,
            method: 'sensitiveAction',
            params: null,
            timestamp: Date.now()
        };

        // Untrusted location is rejected before the page queue is read.
        (bridge as any).locationProbePurpose = 'poll';
        mockWebView.simulateScriptResult('https://evil-hacker.com/phishing');
        expect(called).toBe(false);
    });
});
