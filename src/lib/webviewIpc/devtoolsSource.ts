/**
 * src/lib/webviewIpc/devtoolsSource.ts
 *
 * Injected in-page helper for PixInsight WebView DevTools. The agent keeps all
 * browser objects private and exposes only bounded, serializable descriptors.
 */

export const DEVTOOLS_INJECTED_JS = `(function() {
    'use strict';
    if (window.__PI_DEVTOOLS_AGENT__) return;

    var suppliedConfig = window.__PI_DEVTOOLS_CONFIG__ || {};
    var config = {
        maxSnapshotDepth: Math.min(32, Math.max(1, Number(suppliedConfig.maxSnapshotDepth) || 8)),
        maxSnapshotNodes: Math.min(5000, Math.max(10, Number(suppliedConfig.maxSnapshotNodes) || 1000)),
        maxResponsePayloadBytes: Math.min(1048576, Math.max(4096, Number(suppliedConfig.maxResponsePayloadBytes) || 262144)),
        consoleForwardRateLimitPerSec: Math.min(1000, Math.max(1, Number(suppliedConfig.consoleForwardRateLimitPerSec) || 200)),
        hotkeyToggle: suppliedConfig.hotkeyToggle === true
    };
    var consoleBuffer = [];
    var inspectorEvents = [];
    var maxBufferSize = 500;
    var maxInspectorEvents = 50;
    var nodeSequence = 0;
    var objectSequence = 0;
    var nodeIds = new WeakMap();
    var nodesById = new Map();
    var objectIds = new WeakMap();
    var objectsById = new Map();
    var maxRetainedObjects = 500;
    var overlayNode = null;
    var highlightedElement = null;
    var inspectActive = false;
    var lastHoverNodeId = '';
    var lastHoverTime = 0;
    var rateWindowStartedAt = Date.now();
    var rateWindowCount = 0;
    var droppedConsoleCount = 0;

    /** Returns a stable identifier for an element during the current document lifetime. */
    function retainNode(node) {
        if (!node || node.nodeType !== Node.ELEMENT_NODE) return '';
        var existing = nodeIds.get(node);
        if (existing) return existing;
        var id = 'node_' + (++nodeSequence);
        nodeIds.set(node, id);
        nodesById.set(id, node);
        return id;
    }

    /** Resolves a stable handle, using selectors only for selector-only compatibility calls. */
    function resolveNode(cmd) {
        if (cmd && cmd.nodeId) {
            if (nodesById.has(cmd.nodeId)) {
                var retained = nodesById.get(cmd.nodeId);
                if (retained && retained.isConnected !== false) return retained;
                nodesById.delete(cmd.nodeId);
            }
            return null;
        }
        if (!cmd || !cmd.selector) return null;
        try {
            return document.querySelector(cmd.selector);
        } catch (error) {
            return null;
        }
    }

    /** Escapes an identifier for use in a CSS selector without requiring CSS.escape. */
    function escapeCssIdentifier(value) {
        return String(value).replace(/[^a-zA-Z0-9_-]/g, function(character) {
            return '\\\\' + character.charCodeAt(0).toString(16) + ' ';
        });
    }

    /** Builds a deterministic selector whose sibling segments are unambiguous. */
    function buildNodePath(element) {
        if (!element || !element.tagName) return '';
        var path = [];
        var current = element;
        while (current && current.nodeType === Node.ELEMENT_NODE) {
            var tag = current.tagName.toLowerCase();
            var selector = tag;
            if (current.id && document.querySelectorAll('#' + escapeCssIdentifier(current.id)).length === 1) {
                selector += '#' + escapeCssIdentifier(current.id);
                path.unshift(selector);
                break;
            }
            var sameTagCount = 0;
            var sameTagIndex = 0;
            var sibling = current.parentElement ? current.parentElement.firstElementChild : null;
            while (sibling) {
                if (sibling.tagName === current.tagName) {
                    sameTagCount++;
                    if (sibling === current) sameTagIndex = sameTagCount;
                }
                sibling = sibling.nextElementSibling;
            }
            if (sameTagCount > 1) selector += ':nth-of-type(' + sameTagIndex + ')';
            path.unshift(selector);
            current = current.parentElement;
        }
        return path.join(' > ');
    }

    /** Produces a compact, getter-free preview for console and evaluation values. */
    function describeValue(value) {
        try {
            if (value === null) return { type: 'object', subtype: 'null', preview: 'null', value: null };
            if (value === undefined) return { type: 'undefined', preview: 'undefined' };
            var type = typeof value;
            if (type === 'string') {
                var clipped = value.length > 1000 ? value.substring(0, 1000) + '…' : value;
                return { type: 'string', preview: JSON.stringify(clipped), value: clipped };
            }
            if (type === 'number' || type === 'boolean') {
                return { type: type, preview: String(value), value: value };
            }
            if (type === 'bigint') return { type: type, preview: String(value) + 'n', value: String(value) };
            if (type === 'symbol') return { type: type, preview: String(value) };

            var subtype = 'object';
            var preview = 'Object';
            if (type === 'function') {
                subtype = 'function';
                preview = 'ƒ ' + (value.name || '(anonymous)') + '()';
            } else if (value instanceof Error) {
                subtype = 'error';
                preview = ((value.name || 'Error') + ': ' + (value.message || '')).substring(0, 1000);
            } else if (value instanceof Node) {
                subtype = 'node';
                preview = value.nodeType === Node.ELEMENT_NODE
                    ? '<' + value.nodeName.toLowerCase() + (value.id ? '#' + value.id : '') + '>'
                    : value.nodeName;
            } else if (Array.isArray(value)) {
                subtype = 'array';
                preview = 'Array(' + value.length + ')';
            } else if (value instanceof Date) {
                subtype = 'date';
                preview = isNaN(value.getTime()) ? 'Invalid Date' : value.toISOString();
            } else if (value instanceof RegExp) {
                subtype = 'regexp';
                preview = String(value);
            } else if (typeof Promise !== 'undefined' && value instanceof Promise) {
                subtype = 'promise';
                preview = 'Promise';
            } else if (typeof Map !== 'undefined' && value instanceof Map) {
                subtype = 'map';
                preview = 'Map(' + value.size + ')';
            } else if (typeof Set !== 'undefined' && value instanceof Set) {
                subtype = 'set';
                preview = 'Set(' + value.size + ')';
            } else {
                var constructorName = value && value.constructor && value.constructor.name;
                preview = constructorName || 'Object';
            }

            var objectId = retainObject(value);
            var propertyCount = 0;
            try { propertyCount = Object.getOwnPropertyNames(value).length; } catch (error) {}
            return {
                type: type,
                subtype: subtype,
                preview: preview,
                objectId: objectId,
                expandable: propertyCount > 0 || !!Object.getPrototypeOf(value),
                propertyCount: propertyCount
            };
        } catch (error) {
            return { type: 'unknown', preview: '[Uninspectable value]' };
        }
    }

    /** Retains a bounded remote-object handle for later property expansion. */
    function retainObject(value) {
        if ((typeof value !== 'object' || value === null) && typeof value !== 'function') return '';
        var existing = objectIds.get(value);
        if (existing && objectsById.has(existing)) return existing;
        if (objectsById.size >= maxRetainedObjects) {
            var oldest = objectsById.keys().next();
            if (!oldest.done) objectsById.delete(oldest.value);
        }
        var id = 'object_' + (++objectSequence);
        objectIds.set(value, id);
        objectsById.set(id, value);
        return id;
    }

    /** Returns own property descriptors without invoking untrusted getters. */
    function inspectObject(objectId) {
        var target = objectsById.get(objectId);
        if (!target) return { ok: false, error: 'OBJECT_RELEASED' };
        var properties = [];
        var names = [];
        try { names = Object.getOwnPropertyNames(target); } catch (error) {
            return { ok: false, error: error.message || String(error) };
        }
        var maxProperties = Math.min(names.length, 100);
        for (var i = 0; i < maxProperties; i++) {
            var name = names[i];
            try {
                var descriptor = Object.getOwnPropertyDescriptor(target, name);
                if (!descriptor) continue;
                var isAccessor = typeof descriptor.get === 'function' || typeof descriptor.set === 'function';
                properties.push({
                    name: name,
                    value: isAccessor
                        ? { type: 'accessor', preview: descriptor.get ? '(...)' : '(setter)' }
                        : describeValue(descriptor.value),
                    enumerable: descriptor.enumerable === true,
                    accessor: isAccessor
                });
            } catch (error) {
                properties.push({ name: name, value: { type: 'unknown', preview: '[Thrown while inspecting]' } });
            }
        }
        try {
            var prototype = Object.getPrototypeOf(target);
            if (prototype) properties.push({ name: '[[Prototype]]', value: describeValue(prototype), enumerable: false });
        } catch (error) {}
        return { ok: true, data: properties, truncated: names.length > maxProperties };
    }

    /** Captures one console invocation while enforcing a per-second rate limit. */
    function pushConsole(level, args) {
        try {
            var now = Date.now();
            if (now - rateWindowStartedAt >= 1000) {
                if (droppedConsoleCount > 0) {
                    consoleBuffer.push({
                        level: 'warn',
                        args: [{ type: 'string', preview: droppedConsoleCount + ' console messages were rate-limited.', value: droppedConsoleCount + ' console messages were rate-limited.' }],
                        timestamp: now,
                        source: 'PixInsight DevTools'
                    });
                }
                rateWindowStartedAt = now;
                rateWindowCount = 0;
                droppedConsoleCount = 0;
            }
            if (rateWindowCount >= config.consoleForwardRateLimitPerSec) {
                droppedConsoleCount++;
                return;
            }
            rateWindowCount++;
            var descriptors = [];
            for (var i = 0; i < Math.min(args.length, 20); i++) descriptors.push(describeValue(args[i]));
            if (args.length > 20) descriptors.push({ type: 'truncated', preview: '… ' + (args.length - 20) + ' more argument(s)' });
            if (consoleBuffer.length >= maxBufferSize) consoleBuffer.shift();
            consoleBuffer.push({ level: level, args: descriptors, timestamp: now });
        } catch (error) {}
    }

    /** Wraps a console function while preserving the browser's original implementation. */
    function wrapConsole(level, original) {
        return function() {
            try { original.apply(console, arguments); } finally { pushConsole(level, arguments); }
        };
    }

    var originalConsole = {
        log: console.log,
        info: console.info,
        warn: console.warn,
        error: console.error
    };
    console.log = wrapConsole('log', originalConsole.log);
    console.info = wrapConsole('info', originalConsole.info);
    console.warn = wrapConsole('warn', originalConsole.warn);
    console.error = wrapConsole('error', originalConsole.error);

    /** Builds a bounded DOM snapshot and excludes inspector-owned overlay nodes. */
    function snapshotNode(element, depth, maxDepth, budget) {
        if (!element || element.nodeType !== Node.ELEMENT_NODE || element === overlayNode) return null;
        if (budget.count >= config.maxSnapshotNodes) {
            budget.truncated = true;
            return null;
        }
        budget.count++;
        var attributes = {};
        if (element.attributes) {
            for (var i = 0; i < Math.min(element.attributes.length, 50); i++) {
                var attribute = element.attributes[i];
                attributes[attribute.name.substring(0, 200)] = attribute.value.substring(0, 2000);
            }
        }
        var children = [];
        var childElements = [];
        for (var c = 0; c < element.children.length; c++) {
            if (element.children[c] !== overlayNode) childElements.push(element.children[c]);
        }
        if (depth < maxDepth) {
            for (var j = 0; j < childElements.length; j++) {
                var childSnapshot = snapshotNode(childElements[j], depth + 1, maxDepth, budget);
                if (childSnapshot) children.push(childSnapshot);
                if (budget.count >= config.maxSnapshotNodes) break;
            }
        }
        var text = '';
        if (childElements.length === 0) text = (element.textContent || '').trim().substring(0, 200);
        var className = typeof element.className === 'string' ? element.className : '';
        return {
            nodeId: retainNode(element),
            tag: element.tagName.toLowerCase(),
            id: element.id || undefined,
            className: className || undefined,
            path: buildNodePath(element),
            attributes: attributes,
            textContent: text || undefined,
            childCount: childElements.length,
            children: children.length > 0 ? children : undefined,
            expandable: childElements.length > 0 && (depth >= maxDepth || children.length < childElements.length)
        };
    }

    /** Creates or updates the overlay to follow a live element. */
    function updateOverlay() {
        if (!highlightedElement || highlightedElement.isConnected === false) {
            clearHighlight();
            return;
        }
        var rect = highlightedElement.getBoundingClientRect();
        if (!overlayNode) {
            overlayNode = document.createElement('div');
            overlayNode.setAttribute('data-pi-devtools-highlight', 'true');
            overlayNode.style.position = 'fixed';
            overlayNode.style.backgroundColor = 'rgba(56, 189, 248, 0.24)';
            overlayNode.style.border = '2px solid #0ea5e9';
            overlayNode.style.pointerEvents = 'none';
            overlayNode.style.zIndex = '2147483647';
            overlayNode.style.boxSizing = 'border-box';
            document.documentElement.appendChild(overlayNode);
        }
        overlayNode.style.left = rect.left + 'px';
        overlayNode.style.top = rect.top + 'px';
        overlayNode.style.width = Math.max(0, rect.width) + 'px';
        overlayNode.style.height = Math.max(0, rect.height) + 'px';
    }

    /** Highlights a retained or selector-resolved element. */
    function highlightElement(cmd) {
        var element = resolveNode(cmd);
        if (!element || element === overlayNode) return false;
        highlightedElement = element;
        updateOverlay();
        return true;
    }

    /** Removes the visual overlay and its retained target. */
    function clearHighlight() {
        if (overlayNode && overlayNode.parentNode) overlayNode.parentNode.removeChild(overlayNode);
        overlayNode = null;
        highlightedElement = null;
    }

    /** Queues a coalesced element-locator event for the native panel. */
    function pushInspectorEvent(type, element) {
        if (type === 'hover') {
            for (var i = inspectorEvents.length - 1; i >= 0; i--) {
                if (inspectorEvents[i].type === 'hover') inspectorEvents.splice(i, 1);
            }
        }
        if (inspectorEvents.length >= maxInspectorEvents) inspectorEvents.shift();
        inspectorEvents.push({
            type: type,
            nodeId: element ? retainNode(element) : undefined,
            selector: element ? buildNodePath(element) : undefined,
            tag: element && element.tagName ? element.tagName.toLowerCase() : undefined,
            timestamp: Date.now()
        });
    }

    /** Handles hover targeting while inspect mode is active. */
    function onInspectMouseMove(event) {
        if (!inspectActive) return;
        var element = event.target;
        if (!element || element === overlayNode || element.nodeType !== Node.ELEMENT_NODE) return;
        var nodeId = retainNode(element);
        var now = Date.now();
        highlightElement({ nodeId: nodeId });
        if (nodeId !== lastHoverNodeId || now - lastHoverTime >= 100) {
            lastHoverNodeId = nodeId;
            lastHoverTime = now;
            pushInspectorEvent('hover', element);
        }
    }

    /** Selects an inspected target without activating the page's own click behavior. */
    function onInspectClick(event) {
        if (!inspectActive) return;
        var element = event.target;
        event.preventDefault();
        event.stopPropagation();
        if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
        if (element && element.nodeType === Node.ELEMENT_NODE && element !== overlayNode) {
            highlightElement({ nodeId: retainNode(element) });
            pushInspectorEvent('select', element);
        }
        stopInspect(false, true);
    }

    /** Cancels locator mode on Escape and forwards F12 through the narrow host RPC. */
    function onGlobalKeyDown(event) {
        var isF12 = event.key === 'F12' || event.keyCode === 123;
        if (isF12 && window.PixInsight && typeof window.PixInsight.call === 'function') {
            event.preventDefault();
            event.stopPropagation();
            try {
                var toggleResult = window.PixInsight.call('__devtools_toggle__');
                if (toggleResult && typeof toggleResult.catch === 'function') toggleResult.catch(function() {});
            } catch (error) {}
            return;
        }
        if (inspectActive && (event.key === 'Escape' || event.keyCode === 27)) {
            event.preventDefault();
            event.stopPropagation();
            stopInspect(true, false);
        }
    }

    /** Enables temporary capture-phase locator listeners. */
    function startInspect() {
        if (inspectActive) return;
        inspectActive = true;
        lastHoverNodeId = '';
        document.addEventListener('mousemove', onInspectMouseMove, true);
        document.addEventListener('click', onInspectClick, true);
    }

    /** Disables locator listeners and optionally reports cancellation. */
    function stopInspect(cancelled, keepHighlight) {
        if (!inspectActive) return;
        inspectActive = false;
        document.removeEventListener('mousemove', onInspectMouseMove, true);
        document.removeEventListener('click', onInspectClick, true);
        if (!keepHighlight) clearHighlight();
        if (cancelled) pushInspectorEvent('cancel', null);
    }

    /** Attempts to copy text through the WebView clipboard and always returns a fallback value. */
    function copyText(text) {
        var copied = false;
        var textarea = null;
        try {
            textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', 'readonly');
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.select();
            copied = document.execCommand('copy') === true;
        } catch (error) {
            copied = false;
        } finally {
            if (textarea && textarea.parentNode) textarea.parentNode.removeChild(textarea);
        }
        return { copied: copied, length: text.length };
    }

    window.addEventListener('scroll', updateOverlay, true);
    window.addEventListener('resize', updateOverlay, true);
    if (config.hotkeyToggle) window.addEventListener('keydown', onGlobalKeyDown, true);

    /** Executes one validated inspector command synchronously inside the WebView. */
    function executeDevToolsCommand(cmd) {
        try {
            if (!cmd || !cmd.kind) return { ok: false, error: 'INVALID_COMMAND' };
            if (cmd.nodeId) {
                var retainedCommandNode = nodesById.get(cmd.nodeId);
                if (!retainedCommandNode || retainedCommandNode.isConnected === false) {
                    nodesById.delete(cmd.nodeId);
                    return { ok: false, error: 'ELEMENT_STALE' };
                }
            }
            switch (cmd.kind) {
                case 'popConsole':
                    var logs = consoleBuffer.splice(0, Math.min(consoleBuffer.length, 100));
                    return { ok: true, data: logs };
                case 'clearConsole':
                    consoleBuffer = [];
                    objectsById.clear();
                    return { ok: true, data: { cleared: true } };
                case 'inspectObject':
                    if (!cmd.objectId) return { ok: false, error: 'MISSING_OBJECT_ID' };
                    return inspectObject(cmd.objectId);
                case 'releaseObject':
                    if (cmd.objectId) objectsById.delete(cmd.objectId);
                    return { ok: true, data: { released: true } };
                case 'snapshot':
                    // A new native snapshot supersedes all prior DOM handles and
                    // releases detached subtrees retained by the previous map.
                    nodesById.clear();
                    nodeIds = new WeakMap();
                    var maxDepth = Math.min(config.maxSnapshotDepth, Math.max(1, Number(cmd.maxDepth) || 4));
                    var snapshotBudget = { count: 0, truncated: false };
                    var root = snapshotNode(document.documentElement, 0, maxDepth, snapshotBudget);
                    return { ok: true, data: root, truncated: snapshotBudget.truncated };
                case 'expand':
                    var expandTarget = resolveNode(cmd);
                    if (!expandTarget) return { ok: false, error: 'ELEMENT_NOT_FOUND' };
                    var expandBudget = { count: 0, truncated: false };
                    var expanded = snapshotNode(expandTarget, 0, Math.min(2, Number(cmd.maxDepth) || 1), expandBudget);
                    return { ok: true, data: expanded, truncated: expandBudget.truncated };
                case 'highlight':
                    var highlighted = highlightElement(cmd);
                    return { ok: highlighted, data: { highlighted: highlighted }, error: highlighted ? undefined : 'ELEMENT_NOT_FOUND' };
                case 'clearHighlight':
                    clearHighlight();
                    return { ok: true, data: { cleared: true } };
                case 'startInspect':
                    startInspect();
                    return { ok: true, data: { active: true } };
                case 'stopInspect':
                    stopInspect(false, true);
                    return { ok: true, data: { active: false } };
                case 'popInspectorEvents':
                    var events = inspectorEvents.slice();
                    inspectorEvents = [];
                    return { ok: true, data: events };
                case 'scrollIntoView':
                    var scrollTarget = resolveNode(cmd);
                    if (!scrollTarget) return { ok: false, error: 'ELEMENT_NOT_FOUND' };
                    scrollTarget.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'auto' });
                    highlightElement({ nodeId: retainNode(scrollTarget) });
                    return { ok: true, data: { scrolled: true } };
                case 'copyNodeValue':
                    var copyTarget = resolveNode(cmd);
                    if (!copyTarget) return { ok: false, error: 'ELEMENT_NOT_FOUND' };
                    var copyValue = '';
                    if (cmd.valueKind === 'innerHTML') copyValue = copyTarget.innerHTML;
                    else if (cmd.valueKind === 'outerHTML') copyValue = copyTarget.outerHTML;
                    else if (cmd.valueKind === 'textContent') copyValue = copyTarget.textContent || '';
                    else copyValue = buildNodePath(copyTarget);
                    return { ok: true, data: copyText(copyValue) };
                case 'setAttribute':
                    var attributeTarget = resolveNode(cmd);
                    if (!attributeTarget || !cmd.attribute) return { ok: false, error: 'MISSING_ELEMENT_OR_ATTRIBUTE' };
                    attributeTarget.setAttribute(cmd.attribute, cmd.value || '');
                    return { ok: true, data: { updated: true } };
                case 'removeAttribute':
                    var removeTarget = resolveNode(cmd);
                    if (!removeTarget || !cmd.attribute) return { ok: false, error: 'MISSING_ELEMENT_OR_ATTRIBUTE' };
                    removeTarget.removeAttribute(cmd.attribute);
                    return { ok: true, data: { removed: true } };
                case 'setText':
                    var textTarget = resolveNode(cmd);
                    if (!textTarget) return { ok: false, error: 'ELEMENT_NOT_FOUND' };
                    textTarget.textContent = cmd.value || '';
                    return { ok: true, data: { updated: true } };
                case 'evaluate':
                    if (!cmd.expression) return { ok: false, error: 'MISSING_EXPRESSION' };
                    return { ok: true, data: describeValue((0, eval)(cmd.expression)) };
                default:
                    return { ok: false, error: 'UNKNOWN_COMMAND_KIND: ' + cmd.kind };
            }
        } catch (error) {
            return { ok: false, error: error && error.message ? error.message : String(error) };
        }
    }

    /** Serializes a bounded response for the native tagged-result multiplexer. */
    window.__PI_DEVTOOLS_EXECUTE__ = function(cmdJson) {
        var command = null;
        try {
            command = typeof cmdJson === 'string' ? JSON.parse(cmdJson) : cmdJson;
            var response = executeDevToolsCommand(command);
            response.channel = 'devtools';
            response.id = command.id;
            var serialized = JSON.stringify(response);
            response.approxBytes = serialized.length * 2;
            if (response.approxBytes > config.maxResponsePayloadBytes) {
                return JSON.stringify({
                    channel: 'devtools',
                    id: command.id,
                    ok: false,
                    error: 'DEVTOOLS_RESPONSE_TOO_LARGE',
                    truncated: true,
                    approxBytes: response.approxBytes
                });
            }
            return JSON.stringify(response);
        } catch (error) {
            return JSON.stringify({
                channel: 'devtools',
                id: command && command.id ? command.id : 'unknown',
                ok: false,
                error: 'PARSE_ERROR: ' + (error && error.message ? error.message : String(error))
            });
        }
    };

    window.__PI_DEVTOOLS_AGENT__ = true;
})();`;
