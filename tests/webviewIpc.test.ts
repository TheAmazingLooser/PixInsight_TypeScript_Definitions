// Mock PixInsight Console & UI globals before imports
(global as any).Console = {
    writeln: () => {},
    warningln: () => {},
    criticalln: () => {}
};

(global as any).Control = class Control {
    public parent: any;
    constructor(parent?: any) { this.parent = parent; }
};

(global as any).Dialog = class Dialog extends (global as any).Control {
    public windowTitle = '';
    public userResizable = false;
    public minWidth = 0;
    public minHeight = 0;
    public sizer: any;
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
    public onCurrentNodeUpdated: ((node: any) => void) | null = null;
    public setHeaderText() {}
    public setColumnWidth() {}
    public clear() {}
};

(global as any).TreeBoxNode = class TreeBoxNode {
    public parent: any;
    constructor(parent: any) { this.parent = parent; }
    public setText() {}
};

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
import { IpcRequest } from '../src/lib/webviewIpc/types';

// Mock PixInsight WebView control
class MockWebView {
    public isNull = false;
    public evaluatedScripts: string[] = [];
    public onScriptResultAvailable: ((val: any) => void) | null = null;
    public onLoadFinished: ((ok: boolean) => void) | null = null;

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

        expect(bridge.isOriginAllowed('https://malicious-site.com')).toBe(false);
        expect(bridge.isOriginAllowed('http://untrusted.org')).toBe(false);
    });

    it('should register and execute registered RPC handlers safely', () => {
        let executed = false;
        bridge.registerHandler('testMethod', (params) => {
            executed = true;
            return { echo: params.val * 2 };
        });

        // Simulate probe response with valid request
        const token = (bridge as any).sessionToken;
        const validRequest: IpcRequest = {
            id: 'req_123',
            token: token,
            method: 'testMethod',
            params: { val: 21 },
            timestamp: Date.now()
        };

        const probeResult = JSON.stringify({
            location: 'file:///C:/local/index.html',
            msg: JSON.stringify(validRequest)
        });

        mockWebView.simulateScriptResult(probeResult);
        expect(executed).toBe(true);

        // Verify response sent via evaluateScript
        const lastScript = mockWebView.evaluatedScripts[mockWebView.evaluatedScripts.length - 1];
        expect(lastScript).toContain('_receiveResponse');
        expect(lastScript).toContain('"result":{"echo":42}');
    });

    it('should send DevTools commands and process tagged channel responses', async () => {
        const cmdPromise = bridge.sendDevToolsCommand({ kind: 'snapshot' });

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

        mockWebView.simulateScriptResult(JSON.stringify({
            location: 'file:///C:/local/index.html',
            msg: JSON.stringify(req)
        }));

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

        const probeResult = JSON.stringify({
            location: 'file:///C:/local/index.html',
            msg: JSON.stringify(forgedRequest)
        });

        mockWebView.simulateScriptResult(probeResult);

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

        // Probe comes from untrusted domain
        const probeResult = JSON.stringify({
            location: 'https://evil-hacker.com/phishing',
            msg: JSON.stringify(req)
        });

        mockWebView.simulateScriptResult(probeResult);
        expect(called).toBe(false);
    });
});
