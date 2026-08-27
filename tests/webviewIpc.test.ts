import { describe, it, expect, beforeEach } from 'vitest';
import { PixInsightWebViewBridge } from '../src/lib/webviewIpc/host';
import { IpcRequest } from '../src/lib/webviewIpc/types';

// Mock PixInsight Console global
(global as any).Console = {
    writeln: () => {},
    warningln: () => {},
    criticalln: () => {}
};

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
        bridge = new PixInsightWebViewBridge(mockWebView as any, {
            allowLocalOnly: true,
            allowedOrigins: ['file://', 'data:', 'about:blank', 'https://trusted.app'],
            allowUnregisteredMethods: false
        });
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
