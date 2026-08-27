/**
 * src/lib/webviewIpc/devtoolsSource.ts
 *
 * Injected in-page helper for PixInsight WebView DevTools.
 */

export const DEVTOOLS_INJECTED_JS = `(function() {
    'use strict';
    if (window.__PI_DEVTOOLS_AGENT__) return;

    var consoleBuffer = [];
    var maxBufferSize = 500;
    var overlayNode = null;

    function safeStringify(val, depth, maxDepth, seen) {
        depth = depth || 0;
        maxDepth = maxDepth || 5;
        seen = seen || [];

        if (val === null) return 'null';
        if (val === undefined) return 'undefined';

        var type = typeof val;
        if (type === 'number' || type === 'boolean') return String(val);
        if (type === 'string') return val.length > 500 ? val.substring(0, 500) + '…' : val;
        if (type === 'function') return '[Function ' + (val.name || 'anonymous') + ']';

        if (depth >= maxDepth) return '[Object]';
        if (seen.indexOf(val) !== -1) return '[Circular]';
        seen.push(val);

        if (Array.isArray(val)) {
            var items = [];
            for (var i = 0; i < Math.min(val.length, 50); i++) {
                items.push(safeStringify(val[i], depth + 1, maxDepth, seen));
            }
            if (val.length > 50) items.push('… (' + val.length + ' total)');
            return '[' + items.join(', ') + ']';
        }

        if (type === 'object') {
            if (val instanceof Error) {
                return val.name + ': ' + val.message + (val.stack ? '\\n' + val.stack : '');
            }
            if (val instanceof Node) {
                return '<' + val.nodeName.toLowerCase() + (val.id ? '#' + val.id : '') + '>';
            }

            var keys = Object.keys(val);
            var pairs = [];
            for (var k = 0; k < Math.min(keys.length, 30); k++) {
                var key = keys[k];
                try {
                    pairs.push(key + ': ' + safeStringify(val[key], depth + 1, maxDepth, seen));
                } catch (e) {}
            }
            if (keys.length > 30) pairs.push('… (' + keys.length + ' keys)');
            return '{ ' + pairs.join(', ') + ' }';
        }

        return String(val);
    }

    function pushConsole(level, args) {
        try {
            var msgs = [];
            for (var i = 0; i < args.length; i++) {
                msgs.push(safeStringify(args[i], 0, 4, []));
            }
            if (consoleBuffer.length >= maxBufferSize) {
                consoleBuffer.shift();
            }
            consoleBuffer.push({
                level: level,
                message: msgs.join(' '),
                timestamp: Date.now()
            });
        } catch (e) {}
    }

    // Intercept console
    var origLog = console.log;
    var origInfo = console.info;
    var origWarn = console.warn;
    var origError = console.error;

    console.log = function() { origLog.apply(console, arguments); pushConsole('log', arguments); };
    console.info = function() { origInfo.apply(console, arguments); pushConsole('info', arguments); };
    console.warn = function() { origWarn.apply(console, arguments); pushConsole('warn', arguments); };
    console.error = function() { origError.apply(console, arguments); pushConsole('error', arguments); };

    function buildNodePath(el) {
        if (!el || !el.tagName) return '';
        var path = [];
        while (el && el.nodeType === Node.ELEMENT_NODE) {
            var selector = el.tagName.toLowerCase();
            if (el.id) {
                selector += '#' + el.id;
                path.unshift(selector);
                break;
            } else {
                var sibling = el;
                var nth = 1;
                while (sibling = sibling.previousElementSibling) {
                    if (sibling.tagName.toLowerCase() === selector) nth++;
                }
                if (nth > 1) selector += ':nth-of-type(' + nth + ')';
            }
            path.unshift(selector);
            el = el.parentElement;
        }
        return path.join(' > ');
    }

    function snapshotNode(el, depth, maxDepth, pathPrefix) {
        if (!el || el.nodeType !== Node.ELEMENT_NODE) return null;
        var tag = el.tagName.toLowerCase();
        var currentPath = pathPrefix ? pathPrefix + ' > ' + tag : buildNodePath(el);

        var attrs = {};
        if (el.attributes) {
            for (var i = 0; i < el.attributes.length; i++) {
                var attr = el.attributes[i];
                attrs[attr.name] = attr.value;
            }
        }

        var children = [];
        var childCount = el.children.length;

        if (depth < maxDepth) {
            for (var j = 0; j < childCount; j++) {
                var childSnap = snapshotNode(el.children[j], depth + 1, maxDepth, currentPath);
                if (childSnap) children.push(childSnap);
            }
        }

        var text = '';
        if (childCount === 0) {
            text = (el.textContent || '').trim().substring(0, 100);
        }

        return {
            tag: tag,
            id: el.id || undefined,
            className: el.className || undefined,
            path: currentPath,
            attributes: attrs,
            textContent: text || undefined,
            childCount: childCount,
            children: children.length > 0 ? children : undefined,
            expandable: childCount > 0 && depth >= maxDepth
        };
    }

    function highlightElement(selector) {
        clearHighlight();
        if (!selector) return false;
        var el = document.querySelector(selector);
        if (!el) return false;

        var rect = el.getBoundingClientRect();
        overlayNode = document.createElement('div');
        overlayNode.setAttribute('data-pi-devtools-highlight', 'true');
        overlayNode.style.position = 'fixed';
        overlayNode.style.left = rect.left + 'px';
        overlayNode.style.top = rect.top + 'px';
        overlayNode.style.width = rect.width + 'px';
        overlayNode.style.height = rect.height + 'px';
        overlayNode.style.backgroundColor = 'rgba(99, 102, 241, 0.35)';
        overlayNode.style.border = '2px solid #6366f1';
        overlayNode.style.pointerEvents = 'none';
        overlayNode.style.zIndex = '999999';
        overlayNode.style.boxSizing = 'border-box';

        document.documentElement.appendChild(overlayNode);
        return true;
    }

    function clearHighlight() {
        if (overlayNode && overlayNode.parentNode) {
            overlayNode.parentNode.removeChild(overlayNode);
        }
        overlayNode = null;
    }

    function executeDevToolsCommand(cmd) {
        try {
            if (!cmd || !cmd.kind) return { ok: false, error: 'INVALID_COMMAND' };

            switch (cmd.kind) {
                case 'popConsole':
                    var logs = consoleBuffer.slice();
                    consoleBuffer = [];
                    return { ok: true, data: logs };

                case 'snapshot':
                    var maxDepth = cmd.maxDepth || 4;
                    var root = snapshotNode(document.documentElement, 0, maxDepth, '');
                    return { ok: true, data: root };

                case 'highlight':
                    var ok = highlightElement(cmd.selector);
                    return { ok: ok, data: { highlighted: ok } };

                case 'clearHighlight':
                    clearHighlight();
                    return { ok: true, data: { cleared: true } };

                case 'setAttribute':
                    if (!cmd.selector || !cmd.attribute) return { ok: false, error: 'MISSING_SELECTOR_OR_ATTR' };
                    var targetSet = document.querySelector(cmd.selector);
                    if (!targetSet) return { ok: false, error: 'ELEMENT_NOT_FOUND' };
                    targetSet.setAttribute(cmd.attribute, cmd.value || '');
                    return { ok: true, data: { updated: true } };

                case 'removeAttribute':
                    if (!cmd.selector || !cmd.attribute) return { ok: false, error: 'MISSING_SELECTOR_OR_ATTR' };
                    var targetRem = document.querySelector(cmd.selector);
                    if (!targetRem) return { ok: false, error: 'ELEMENT_NOT_FOUND' };
                    targetRem.removeAttribute(cmd.attribute);
                    return { ok: true, data: { removed: true } };

                case 'setText':
                    if (!cmd.selector) return { ok: false, error: 'MISSING_SELECTOR' };
                    var targetTxt = document.querySelector(cmd.selector);
                    if (!targetTxt) return { ok: false, error: 'ELEMENT_NOT_FOUND' };
                    targetTxt.textContent = cmd.value || '';
                    return { ok: true, data: { updated: true } };

                case 'evaluate':
                    if (!cmd.expression) return { ok: false, error: 'MISSING_EXPRESSION' };
                    var result = window.eval(cmd.expression);
                    return { ok: true, data: safeStringify(result, 0, 5, []) };

                default:
                    return { ok: false, error: 'UNKNOWN_COMMAND_KIND: ' + cmd.kind };
            }
        } catch (err) {
            return { ok: false, error: err.message || String(err) };
        }
    }

    window.__PI_DEVTOOLS_EXECUTE__ = function(cmdJson) {
        try {
            var cmd = typeof cmdJson === 'string' ? JSON.parse(cmdJson) : cmdJson;
            var res = executeDevToolsCommand(cmd);
            res.channel = 'devtools';
            res.id = cmd.id;
            return JSON.stringify(res);
        } catch (e) {
            return JSON.stringify({
                channel: 'devtools',
                id: cmdJson && cmdJson.id ? cmdJson.id : 'unknown',
                ok: false,
                error: 'PARSE_ERROR: ' + e.message
            });
        }
    };

    window.__PI_DEVTOOLS_AGENT__ = true;
})();`;
