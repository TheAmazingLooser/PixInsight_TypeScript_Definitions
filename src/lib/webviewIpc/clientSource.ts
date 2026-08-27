/**
 * src/lib/webviewIpc/clientSource.ts
 *
 * Embedded Browser-side IPC Client Script for PixInsight WebView.
 * Injected automatically by the PixInsight host into WebViews.
 */

export const WEBVIEW_CLIENT_JS = `(function() {
    'use strict';
    if (window.__PI_IPC_CLIENT__) return;

    var queue = [];
    var pendingCallbacks = {};
    var eventListeners = {};
    var sessionToken = null;

    /**
     * Initializes the client session token.
     * Called automatically by host evaluation.
     */
    function setToken(token) {
        sessionToken = token;
    }

    /**
     * Sends an RPC request to PixInsight V8 host.
     * @param {string} method Handler name registered on host.
     * @param {*} [params] Parameters array or object.
     * @param {number} [timeoutMs=30000] Timeout in milliseconds.
     * @returns {Promise<*>} Result from host.
     */
    function callHost(method, params, timeoutMs) {
        return new Promise(function(resolve, reject) {
            try {
                if (!sessionToken) {
                    reject(new Error("IPC_NOT_INITIALIZED: Session token has not been established by host."));
                    return;
                }

                var reqId = 'req_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
                timeoutMs = timeoutMs || 30000;

                var timer = setTimeout(function() {
                    if (pendingCallbacks[reqId]) {
                        delete pendingCallbacks[reqId];
                        reject(new Error("IPC_TIMEOUT: Host RPC call '" + method + "' timed out after " + timeoutMs + "ms."));
                    }
                }, timeoutMs);

                pendingCallbacks[reqId] = {
                    resolve: resolve,
                    reject: reject,
                    timer: timer
                };

                queue.push({
                    id: reqId,
                    token: sessionToken,
                    method: method,
                    params: params !== undefined ? params : null,
                    timestamp: Date.now()
                });
            } catch (err) {
                reject(err);
            }
        });
    }

    /**
     * Pops pending outbound requests (called by host polling timer).
     */
    function popQueue() {
        try {
            if (queue.length === 0) return null;
            var item = queue.shift();
            return JSON.stringify(item);
        } catch (e) {
            return null;
        }
    }

    /**
     * Receives an RPC response from PixInsight host.
     */
    function receiveResponse(responseJson) {
        try {
            var resp = typeof responseJson === 'string' ? JSON.parse(responseJson) : responseJson;
            if (!resp || !resp.id) return;

            var cb = pendingCallbacks[resp.id];
            if (!cb) return;

            delete pendingCallbacks[resp.id];
            clearTimeout(cb.timer);

            if (resp.error) {
                var err = new Error(resp.error);
                err.code = resp.code || 'HOST_ERROR';
                cb.reject(err);
            } else {
                cb.resolve(resp.result);
            }
        } catch (e) {
            console.error('[PixInsight IPC Client] Failed to parse response:', e);
        }
    }

    /**
     * Receives an async event from PixInsight host.
     */
    function receiveEvent(eventJson) {
        try {
            var ev = typeof eventJson === 'string' ? JSON.parse(eventJson) : eventJson;
            if (!ev || !ev.event) return;

            var listeners = eventListeners[ev.event];
            if (listeners && listeners.length > 0) {
                for (var i = 0; i < listeners.length; i++) {
                    try {
                        listeners[i](ev.payload);
                    } catch (err) {
                        console.error('[PixInsight IPC Client] Event listener error for ' + ev.event + ':', err);
                    }
                }
            }
        } catch (e) {
            console.error('[PixInsight IPC Client] Failed to parse event:', e);
        }
    }

    /**
     * Registers an event listener for host-emitted events.
     */
    function on(eventName, callback) {
        if (!eventListeners[eventName]) {
            eventListeners[eventName] = [];
        }
        eventListeners[eventName].push(callback);
    }

    /**
     * Removes an event listener.
     */
    function off(eventName, callback) {
        if (!eventListeners[eventName]) return;
        eventListeners[eventName] = eventListeners[eventName].filter(function(cb) {
            return cb !== callback;
        });
    }

    // Intercept console logs to forward critical items to PixInsight Console
    var origError = console.error;
    console.error = function() {
        origError.apply(console, arguments);
        try {
            var msg = Array.prototype.slice.call(arguments).join(' ');
            callHost('__client_log__', { level: 'error', message: msg }).catch(function() {});
        } catch (e) {}
    };

    // Public Client API on window.PixInsight
    window.PixInsight = {
        call: callHost,
        on: on,
        off: off,
        _setToken: setToken,
        _popQueue: popQueue,
        _receiveResponse: receiveResponse,
        _receiveEvent: receiveEvent,
        _getLocation: function() { return window.location.href; }
    };

    window.__PI_IPC_CLIENT__ = true;
})();`;
