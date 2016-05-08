/*!
 * jQuery JavaScript Library v1.8.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: Thu Aug 30 2012 17:17:22 GMT-0400 (Eastern Daylight Time)
 */
! function(e, t) {
    function n(e) {
        var t = ft[e] = {};
        return K.each(e.split(tt), function(e, n) {
            t[n] = !0
        }), t
    }

    function r(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(gt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : mt.test(r) ? K.parseJSON(r) : r
                } catch (o) {}
                K.data(e, n, r)
            } else r = t
        }
        return r
    }

    function i(e) {
        var t;
        for (t in e)
            if (("data" !== t || !K.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0
    }

    function o() {
        return !1
    }

    function s() {
        return !0
    }

    function a(e) {
        return !e || !e.parentNode || 11 === e.parentNode.nodeType
    }

    function u(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function l(e, t, n) {
        if (t = t || 0, K.isFunction(t)) return K.grep(e, function(e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType) return K.grep(e, function(e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = K.grep(e, function(e) {
                return 1 === e.nodeType
            });
            if (Mt.test(t)) return K.filter(t, r, !n);
            t = K.filter(t, r)
        }
        return K.grep(e, function(e) {
            return K.inArray(e, t) >= 0 === n
        })
    }

    function c(e) {
        var t = Ot.split("|"),
            n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length;) n.createElement(t.pop());
        return n
    }

    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e, t) {
        if (1 === t.nodeType && K.hasData(e)) {
            var n, r, i, o = K._data(e),
                s = K._data(t, o),
                a = o.events;
            if (a) {
                delete s.handle, s.events = {};
                for (n in a)
                    for (r = 0, i = a[n].length; i > r; r++) K.event.add(t, n, a[n][r])
            }
            s.data && (s.data = K.extend({}, s.data))
        }
    }

    function p(e, t) {
        var n;
        1 === t.nodeType && (t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), K.support.html5Clone && e.innerHTML && !K.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Qt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.selected = e.defaultSelected : "input" === n || "textarea" === n ? t.defaultValue = e.defaultValue : "script" === n && t.text !== e.text && (t.text = e.text), t.removeAttribute(K.expando))
    }

    function f(e) {
        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName("*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll("*") : []
    }

    function m(e) {
        Qt.test(e.type) && (e.defaultChecked = e.checked)
    }

    function g(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = yn.length; i--;)
            if (t = yn[i] + n, t in e) return t;
        return r
    }

    function v(e, t) {
        return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e)
    }

    function y(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; s > o; o++) n = e[o], n.style && (i[o] = K._data(n, "olddisplay"), t ? (i[o] || "none" !== n.style.display || (n.style.display = ""), "" === n.style.display && v(n) && (i[o] = K._data(n, "olddisplay", _(n.nodeName)))) : (r = nn(n, "display"), i[o] || "none" === r || K._data(n, "olddisplay", r)));
        for (o = 0; s > o; o++) n = e[o], n.style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? i[o] || "" : "none"));
        return e
    }

    function b(e, t, n) {
        var r = dn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function w(e, t, n, r) {
        for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > i; i += 2) "margin" === n && (o += K.css(e, n + vn[i], !0)), r ? ("content" === n && (o -= parseFloat(nn(e, "padding" + vn[i])) || 0), "margin" !== n && (o -= parseFloat(nn(e, "border" + vn[i] + "Width")) || 0)) : (o += parseFloat(nn(e, "padding" + vn[i])) || 0, "padding" !== n && (o += parseFloat(nn(e, "border" + vn[i] + "Width")) || 0));
        return o
    }

    function x(e, t, n) {
        var r = "width" === t ? e.offsetWidth : e.offsetHeight,
            i = !0,
            o = K.support.boxSizing && "border-box" === K.css(e, "boxSizing");
        if (0 >= r || null == r) {
            if (r = nn(e, t), (0 > r || null == r) && (r = e.style[t]), hn.test(r)) return r;
            i = o && (K.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0
        }
        return r + w(e, t, n || (o ? "border" : "content"), i) + "px"
    }

    function _(e) {
        if (fn[e]) return fn[e];
        var t = K("<" + e + ">").appendTo(I.body),
            n = t.css("display");
        return t.remove(), ("none" === n || "" === n) && (rn = I.body.appendChild(rn || K.extend(I.createElement("iframe"), {
            frameBorder: 0,
            width: 0,
            height: 0
        })), on && rn.createElement || (on = (rn.contentWindow || rn.contentDocument).document, on.write("<!doctype html><html><body>"), on.close()), t = on.body.appendChild(on.createElement(e)), n = nn(t, "display"), I.body.removeChild(rn)), fn[e] = n, n
    }

    function k(e, t, n, r) {
        var i;
        if (K.isArray(t)) K.each(t, function(t, i) {
            n || xn.test(e) ? r(e, i) : k(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== K.type(t)) r(e, t);
        else
            for (i in t) k(e + "[" + i + "]", t[i], n, r)
    }

    function $(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i, o, s = t.toLowerCase().split(tt),
                a = 0,
                u = s.length;
            if (K.isFunction(n))
                for (; u > a; a++) r = s[a], o = /^\+/.test(r), o && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[o ? "unshift" : "push"](n)
        }
    }

    function C(e, n, r, i, o, s) {
        o = o || n.dataTypes[0], s = s || {}, s[o] = !0;
        for (var a, u = e[o], l = 0, c = u ? u.length : 0, d = e === Hn; c > l && (d || !a); l++) a = u[l](n, r, i), "string" == typeof a && (!d || s[a] ? a = t : (n.dataTypes.unshift(a), a = C(e, n, r, i, a, s)));
        return !d && a || s["*"] || (a = C(e, n, r, i, "*", s)), a
    }

    function S(e, n) {
        var r, i, o = K.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e : i || (i = {}))[r] = n[r]);
        i && K.extend(!0, e, i)
    }

    function E(e, n, r) {
        var i, o, s, a, u = e.contents,
            l = e.dataTypes,
            c = e.responseFields;
        for (o in c) o in r && (n[c[o]] = r[o]);
        for (;
            "*" === l[0];) l.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
        if (i)
            for (o in u)
                if (u[o] && u[o].test(i)) {
                    l.unshift(o);
                    break
                }
        if (l[0] in r) s = l[0];
        else {
            for (o in r) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    s = o;
                    break
                }
                a || (a = o)
            }
            s = s || a
        }
        return s ? (s !== l[0] && l.unshift(s), r[s]) : void 0
    }

    function T(e, t) {
        var n, r, i, o, s = e.dataTypes.slice(),
            a = s[0],
            u = {},
            l = 0;
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), s[1])
            for (n in e.converters) u[n.toLowerCase()] = e.converters[n];
        for (; i = s[++l];)
            if ("*" !== i) {
                if ("*" !== a && a !== i) {
                    if (n = u[a + " " + i] || u["* " + i], !n)
                        for (r in u)
                            if (o = r.split(" "), o[1] === i && (n = u[a + " " + o[0]] || u["* " + o[0]])) {
                                n === !0 ? n = u[r] : u[r] !== !0 && (i = o[0], s.splice(l--, 0, i));
                                break
                            }
                    if (n !== !0)
                        if (n && e["throws"]) t = n(t);
                        else try {
                            t = n(t)
                        } catch (c) {
                            return {
                                state: "parsererror",
                                error: n ? c : "No conversion from " + a + " to " + i
                            }
                        }
                }
                a = i
            }
        return {
            state: "success",
            data: t
        }
    }

    function F() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function N() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }

    function j() {
        return setTimeout(function() {
            Xn = t
        }, 0), Xn = K.now()
    }

    function D(e, t) {
        K.each(t, function(t, n) {
            for (var r = (er[t] || []).concat(er["*"]), i = 0, o = r.length; o > i; i++)
                if (r[i].call(e, t, n)) return
        })
    }

    function A(e, t, n) {
        var r, i = 0,
            o = Zn.length,
            s = K.Deferred().always(function() {
                delete a.elem
            }),
            a = function() {
                for (var t = Xn || j(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, o = u.tweens.length; o > i; i++) u.tweens[i].run(r);
                return s.notifyWith(e, [u, r, n]), 1 > r && o ? n : (s.resolveWith(e, [u]), !1)
            },
            u = s.promise({
                elem: e,
                props: K.extend({}, t),
                opts: K.extend(!0, {
                    specialEasing: {}
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: Xn || j(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var r = K.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(r), r
                },
                stop: function(t) {
                    for (var n = 0, r = t ? u.tweens.length : 0; r > n; n++) u.tweens[n].run(1);
                    return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
                }
            }),
            l = u.props;
        for (L(l, u.opts.specialEasing); o > i; i++)
            if (r = Zn[i].call(u, e, l, u.opts)) return r;
        return D(u, l), K.isFunction(u.opts.start) && u.opts.start.call(e, u), K.fx.timer(K.extend(a, {
            anim: u,
            queue: u.opts.queue,
            elem: e
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function L(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = K.camelCase(n), i = t[r], o = e[n], K.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), s = K.cssHooks[r], s && "expand" in s) {
                o = s.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i)
            } else t[r] = i
    }

    function q(e, t, n) {
        var r, i, o, s, a, u, l, c, d = this,
            h = e.style,
            p = {},
            f = [],
            m = e.nodeType && v(e);
        n.queue || (l = K._queueHooks(e, "fx"), null == l.unqueued && (l.unqueued = 0, c = l.empty.fire, l.empty.fire = function() {
            l.unqueued || c()
        }), l.unqueued++, d.always(function() {
            d.always(function() {
                l.unqueued--, K.queue(e, "fx").length || l.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === K.css(e, "display") && "none" === K.css(e, "float") && (K.support.inlineBlockNeedsLayout && "inline" !== _(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", K.support.shrinkWrapBlocks || d.done(function() {
            h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (o = t[r], Yn.exec(o)) {
                if (delete t[r], o === (m ? "hide" : "show")) continue;
                f.push(r)
            }
        if (s = f.length)
            for (a = K._data(e, "fxshow") || K._data(e, "fxshow", {}), m ? K(e).show() : d.done(function() {
                    K(e).hide()
                }), d.done(function() {
                    var t;
                    K.removeData(e, "fxshow", !0);
                    for (t in p) K.style(e, t, p[t])
                }), r = 0; s > r; r++) i = f[r], u = d.createTween(i, m ? a[i] : 0), p[i] = a[i] || K.style(e, i), i in a || (a[i] = u.start, m && (u.end = u.start, u.start = "width" === i || "height" === i ? 1 : 0))
    }

    function M(e, t, n, r, i) {
        return new M.prototype.init(e, t, n, r, i)
    }

    function H(e, t) {
        var n, r = {
                height: e
            },
            i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = vn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function P(e) {
        return K.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var O, R, I = e.document,
        z = e.location,
        B = e.navigator,
        W = e.jQuery,
        G = e.$,
        U = Array.prototype.push,
        V = Array.prototype.slice,
        X = Array.prototype.indexOf,
        Q = Object.prototype.toString,
        Y = Object.prototype.hasOwnProperty,
        J = String.prototype.trim,
        K = function(e, t) {
            return new K.fn.init(e, t, O)
        },
        Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        et = /\S/,
        tt = /\s+/,
        nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ot = /^[\],:{}\s]*$/,
        st = /(?:^|:|,)(?:\s*\[)+/g,
        at = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        ut = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        lt = /^-ms-/,
        ct = /-([\da-z])/gi,
        dt = function(e, t) {
            return (t + "").toUpperCase()
        },
        ht = function() {
            I.addEventListener ? (I.removeEventListener("DOMContentLoaded", ht, !1), K.ready()) : "complete" === I.readyState && (I.detachEvent("onreadystatechange", ht), K.ready())
        },
        pt = {};
    K.fn = K.prototype = {
        constructor: K,
        init: function(e, n, r) {
            var i, o, s;
            if (!e) return this;
            if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : rt.exec(e), !i || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) return n = n instanceof K ? n[0] : n, s = n && n.nodeType ? n.ownerDocument || n : I, e = K.parseHTML(i[1], s, !0), it.test(i[1]) && K.isPlainObject(n) && this.attr.call(e, n, !0), K.merge(this, e);
                if (o = I.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2]) return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = I, this.selector = e, this
            }
            return K.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this))
        },
        selector: "",
        jquery: "1.8.1",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return V.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e, t, n) {
            var r = K.merge(this.constructor(), e);
            return r.prevObject = this, r.context = this.context, "find" === t ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r
        },
        each: function(e, t) {
            return K.each(this, e, t)
        },
        ready: function(e) {
            return K.ready.promise().done(e), this
        },
        eq: function(e) {
            return e = +e, -1 === e ? this.slice(e) : this.slice(e, e + 1)
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        slice: function() {
            return this.pushStack(V.apply(this, arguments), "slice", V.call(arguments).join(","))
        },
        map: function(e) {
            return this.pushStack(K.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: U,
        sort: [].sort,
        splice: [].splice
    }, K.fn.init.prototype = K.fn, K.extend = K.fn.extend = function() {
        var e, n, r, i, o, s, a = arguments[0] || {},
            u = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, u = 2), "object" == typeof a || K.isFunction(a) || (a = {}), l === u && (a = this, --u); l > u; u++)
            if (null != (e = arguments[u]))
                for (n in e) r = a[n], i = e[n], a !== i && (c && i && (K.isPlainObject(i) || (o = K.isArray(i))) ? (o ? (o = !1, s = r && K.isArray(r) ? r : []) : s = r && K.isPlainObject(r) ? r : {}, a[n] = K.extend(c, s, i)) : i !== t && (a[n] = i));
        return a
    }, K.extend({
        noConflict: function(t) {
            return e.$ === K && (e.$ = G), t && e.jQuery === K && (e.jQuery = W), K
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? K.readyWait++ : K.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--K.readyWait : !K.isReady) {
                if (!I.body) return setTimeout(K.ready, 1);
                K.isReady = !0, e !== !0 && --K.readyWait > 0 || (R.resolveWith(I, [K]), K.fn.trigger && K(I).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === K.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === K.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : pt[Q.call(e)] || "object"
        },
        isPlainObject: function(e) {
            if (!e || "object" !== K.type(e) || e.nodeType || K.isWindow(e)) return !1;
            try {
                if (e.constructor && !Y.call(e, "constructor") && !Y.call(e.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || Y.call(e, r)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            var r;
            return e && "string" == typeof e ? ("boolean" == typeof t && (n = t, t = 0), t = t || I, (r = it.exec(e)) ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, n ? null : []), K.merge([], (r.cacheable ? K.clone(r.fragment) : r.fragment).childNodes))) : null
        },
        parseJSON: function(t) {
            return t && "string" == typeof t ? (t = K.trim(t), e.JSON && e.JSON.parse ? e.JSON.parse(t) : ot.test(t.replace(at, "@").replace(ut, "]").replace(st, "")) ? new Function("return " + t)() : (K.error("Invalid JSON: " + t), void 0)) : null
        },
        parseXML: function(n) {
            var r, i;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + n), r
        },
        noop: function() {},
        globalEval: function(t) {
            t && et.test(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(lt, "ms-").replace(ct, dt)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toUpperCase() === t.toUpperCase()
        },
        each: function(e, n, r) {
            var i, o = 0,
                s = e.length,
                a = s === t || K.isFunction(e);
            if (r)
                if (a) {
                    for (i in e)
                        if (n.apply(e[i], r) === !1) break
                } else
                    for (; s > o && n.apply(e[o++], r) !== !1;);
            else if (a) {
                for (i in e)
                    if (n.call(e[i], i, e[i]) === !1) break
            } else
                for (; s > o && n.call(e[o], o, e[o++]) !== !1;);
            return e
        },
        trim: J && !J.call("﻿ ") ? function(e) {
            return null == e ? "" : J.call(e)
        } : function(e) {
            return null == e ? "" : e.toString().replace(nt, "")
        },
        makeArray: function(e, t) {
            var n, r = t || [];
            return null != e && (n = K.type(e), null == e.length || "string" === n || "function" === n || "regexp" === n || K.isWindow(e) ? U.call(r, e) : K.merge(r, e)), r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (X) return X.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e) return n
            }
            return -1
        },
        merge: function(e, n) {
            var r = n.length,
                i = e.length,
                o = 0;
            if ("number" == typeof r)
                for (; r > o; o++) e[i++] = n[o];
            else
                for (; n[o] !== t;) e[i++] = n[o++];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            var r, i = [],
                o = 0,
                s = e.length;
            for (n = !!n; s > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        },
        map: function(e, n, r) {
            var i, o, s = [],
                a = 0,
                u = e.length,
                l = e instanceof K || u !== t && "number" == typeof u && (u > 0 && e[0] && e[u - 1] || 0 === u || K.isArray(e));
            if (l)
                for (; u > a; a++) i = n(e[a], a, r), null != i && (s[s.length] = i);
            else
                for (o in e) i = n(e[o], o, r), null != i && (s[s.length] = i);
            return s.concat.apply([], s)
        },
        guid: 1,
        proxy: function(e, n) {
            var r, i, o;
            return "string" == typeof n && (r = e[n], n = e, e = r), K.isFunction(e) ? (i = V.call(arguments, 2), o = function() {
                return e.apply(n, i.concat(V.call(arguments)))
            }, o.guid = e.guid = e.guid || o.guid || K.guid++, o) : t
        },
        access: function(e, n, r, i, o, s, a) {
            var u, l = null == r,
                c = 0,
                d = e.length;
            if (r && "object" == typeof r) {
                for (c in r) K.access(e, n, c, r[c], 1, s, i);
                o = 1
            } else if (i !== t) {
                if (u = a === t && K.isFunction(i), l && (u ? (u = n, n = function(e, t, n) {
                        return u.call(K(e), n)
                    }) : (n.call(e, i), n = null)), n)
                    for (; d > c; c++) n(e[c], r, u ? i.call(e[c], c, n(e[c], r)) : i, a);
                o = 1
            }
            return o ? e : l ? n.call(e) : d ? n(e[0], r) : s
        },
        now: function() {
            return (new Date).getTime()
        }
    }), K.ready.promise = function(t) {
        if (!R)
            if (R = K.Deferred(), "complete" === I.readyState) setTimeout(K.ready, 1);
            else if (I.addEventListener) I.addEventListener("DOMContentLoaded", ht, !1), e.addEventListener("load", K.ready, !1);
        else {
            I.attachEvent("onreadystatechange", ht), e.attachEvent("onload", K.ready);
            var n = !1;
            try {
                n = null == e.frameElement && I.documentElement
            } catch (r) {}
            n && n.doScroll && ! function i() {
                if (!K.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    K.ready()
                }
            }()
        }
        return R.promise(t)
    }, K.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
        pt["[object " + t + "]"] = t.toLowerCase()
    }), O = K(I);
    var ft = {};
    K.Callbacks = function(e) {
        e = "string" == typeof e ? ft[e] || n(e) : K.extend({}, e);
        var r, i, o, s, a, u, l = [],
            c = !e.once && [],
            d = function(t) {
                for (r = e.memory && t, i = !0, u = s || 0, s = 0, a = l.length, o = !0; l && a > u; u++)
                    if (l[u].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                        r = !1;
                        break
                    }
                o = !1, l && (c ? c.length && d(c.shift()) : r ? l = [] : h.disable())
            },
            h = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        ! function n(t) {
                            K.each(t, function(t, r) {
                                var i = K.type(r);
                                "function" !== i || e.unique && h.has(r) ? r && r.length && "string" !== i && n(r) : l.push(r)
                            })
                        }(arguments), o ? a = l.length : r && (s = t, d(r))
                    }
                    return this
                },
                remove: function() {
                    return l && K.each(arguments, function(e, t) {
                        for (var n;
                            (n = K.inArray(t, l, n)) > -1;) l.splice(n, 1), o && (a >= n && a--, u >= n && u--)
                    }), this
                },
                has: function(e) {
                    return K.inArray(e, l) > -1
                },
                empty: function() {
                    return l = [], this
                },
                disable: function() {
                    return l = c = r = t, this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return c = t, r || h.disable(), this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    return t = t || [], t = [e, t.slice ? t.slice() : t], !l || i && !c || (o ? c.push(t) : d(t)), this
                },
                fire: function() {
                    return h.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!i
                }
            };
        return h
    }, K.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", K.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", K.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", K.Callbacks("memory")]
                ],
                n = "pending",
                r = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return i.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var e = arguments;
                        return K.Deferred(function(n) {
                            K.each(t, function(t, r) {
                                var o = r[0],
                                    s = e[t];
                                i[r[1]](K.isFunction(s) ? function() {
                                    var e = s.apply(this, arguments);
                                    e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o + "With"](this === i ? n : this, [e])
                                } : n[o])
                            }), e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return "object" == typeof e ? K.extend(e, r) : r
                    }
                },
                i = {};
            return r.pipe = r.then, K.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                r[o[1]] = s.add, a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = s.fire, i[o[0] + "With"] = s.fireWith
            }), r.promise(i), e && e.call(i, i), i
        },
        when: function(e) {
            var t, n, r, i = 0,
                o = V.call(arguments),
                s = o.length,
                a = 1 !== s || e && K.isFunction(e.promise) ? s : 0,
                u = 1 === a ? e : K.Deferred(),
                l = function(e, n, r) {
                    return function(i) {
                        n[e] = this, r[e] = arguments.length > 1 ? V.call(arguments) : i, r === t ? u.notifyWith(n, r) : --a || u.resolveWith(n, r)
                    }
                };
            if (s > 1)
                for (t = new Array(s), n = new Array(s), r = new Array(s); s > i; i++) o[i] && K.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --a;
            return a || u.resolveWith(r, o), u.promise()
        }
    }), K.support = function() {
        var t, n, r, i, o, s, a, u, l, c, d, h = I.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), r = h.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5", !n || !n.length || !r) return {};
        i = I.createElement("select"), o = i.appendChild(I.createElement("option")), s = h.getElementsByTagName("input")[0], t = {
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: "on" === s.value,
            optSelected: o.selected,
            getSetAttribute: "t" !== h.className,
            enctype: !!I.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== I.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === I.compatMode,
            submitBubbles: !0,
            changeBubbles: !0,
            focusinBubbles: !1,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, s.checked = !0, t.noCloneChecked = s.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !o.disabled;
        try {
            delete h.test
        } catch (p) {
            t.deleteExpando = !1
        }
        if (!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", d = function() {
                t.noCloneEvent = !1
            }), h.cloneNode(!0).fireEvent("onclick"), h.detachEvent("onclick", d)), s = I.createElement("input"), s.value = "t", s.setAttribute("type", "radio"), t.radioValue = "t" === s.value, s.setAttribute("checked", "checked"), s.setAttribute("name", "t"), h.appendChild(s), a = I.createDocumentFragment(), a.appendChild(h.lastChild), t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = s.checked, a.removeChild(s), a.appendChild(h), h.attachEvent)
            for (l in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) u = "on" + l, c = u in h, c || (h.setAttribute(u, "return;"), c = "function" == typeof h[u]), t[l + "Bubbles"] = c;
        return K(function() {
            var n, r, i, o, s = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                a = I.getElementsByTagName("body")[0];
            a && (n = I.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", a.insertBefore(n, a.firstChild), r = I.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === i[0].offsetHeight, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === r.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(r, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(r, null) || {
                width: "4px"
            }).width, o = I.createElement("div"), o.style.cssText = r.style.cssText = s, o.style.marginRight = o.style.width = "0", r.style.width = "1px", r.appendChild(o), t.reliableMarginRight = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight)), "undefined" != typeof r.style.zoom && (r.innerHTML = "", r.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === r.offsetWidth, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== r.offsetWidth, n.style.zoom = 1), a.removeChild(n), n = r = i = o = null)
        }), a.removeChild(h), n = r = i = o = s = a = h = null, t
    }();
    var mt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        gt = /([A-Z])/g;
    K.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (K.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(e) {
            return e = e.nodeType ? K.cache[e[K.expando]] : e[K.expando], !!e && !i(e)
        },
        data: function(e, n, r, i) {
            if (K.acceptData(e)) {
                var o, s, a = K.expando,
                    u = "string" == typeof n,
                    l = e.nodeType,
                    c = l ? K.cache : e,
                    d = l ? e[a] : e[a] && a;
                if (d && c[d] && (i || c[d].data) || !u || r !== t) return d || (l ? e[a] = d = K.deletedIds.pop() || ++K.uuid : d = a), c[d] || (c[d] = {}, l || (c[d].toJSON = K.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[d] = K.extend(c[d], n) : c[d].data = K.extend(c[d].data, n)), o = c[d], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[K.camelCase(n)] = r), u ? (s = o[n], null == s && (s = o[K.camelCase(n)])) : s = o, s
            }
        },
        removeData: function(e, t, n) {
            if (K.acceptData(e)) {
                var r, o, s, a = e.nodeType,
                    u = a ? K.cache : e,
                    l = a ? e[K.expando] : K.expando;
                if (u[l]) {
                    if (t && (r = n ? u[l] : u[l].data)) {
                        K.isArray(t) || (t in r ? t = [t] : (t = K.camelCase(t), t = t in r ? [t] : t.split(" ")));
                        for (o = 0, s = t.length; s > o; o++) delete r[t[o]];
                        if (!(n ? i : K.isEmptyObject)(r)) return
                    }(n || (delete u[l].data, i(u[l]))) && (a ? K.cleanData([e], !0) : K.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
                }
            }
        },
        _data: function(e, t, n) {
            return K.data(e, t, n, !0)
        },
        acceptData: function(e) {
            var t = e.nodeName && K.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), K.fn.extend({
        data: function(e, n) {
            var i, o, s, a, u, l = this[0],
                c = 0,
                d = null;
            if (e === t) {
                if (this.length && (d = K.data(l), 1 === l.nodeType && !K._data(l, "parsedAttrs"))) {
                    for (s = l.attributes, u = s.length; u > c; c++) a = s[c].name, 0 === a.indexOf("data-") && (a = K.camelCase(a.substring(5)), r(l, a, d[a]));
                    K._data(l, "parsedAttrs", !0)
                }
                return d
            }
            return "object" == typeof e ? this.each(function() {
                K.data(this, e)
            }) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", o = i[1] + "!", K.access(this, function(n) {
                return n === t ? (d = this.triggerHandler("getData" + o, [i[0]]), d === t && l && (d = K.data(l, e), d = r(l, e, d)), d === t && i[1] ? this.data(i[0]) : d) : (i[1] = n, this.each(function() {
                    var t = K(this);
                    t.triggerHandler("setData" + o, i), K.data(this, e, n), t.triggerHandler("changeData" + o, i)
                }), void 0)
            }, null, n, arguments.length > 1, null, !1))
        },
        removeData: function(e) {
            return this.each(function() {
                K.removeData(this, e)
            })
        }
    }), K.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = K._data(e, t), n && (!r || K.isArray(n) ? r = K._data(e, t, K.makeArray(n)) : r.push(n)), r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = K.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = K._queueHooks(e, t),
                s = function() {
                    K.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, s, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return K._data(e, n) || K._data(e, n, {
                empty: K.Callbacks("once memory").add(function() {
                    K.removeData(e, t + "queue", !0), K.removeData(e, n, !0)
                })
            })
        }
    }), K.fn.extend({
        queue: function(e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? K.queue(this[0], e) : n === t ? this : this.each(function() {
                var t = K.queue(this, e, n);
                K._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && K.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                K.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                var r = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(r)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var r, i = 1,
                o = K.Deferred(),
                s = this,
                a = this.length,
                u = function() {
                    --i || o.resolveWith(s, [s])
                };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) r = K._data(s[a], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var vt, yt, bt, wt = /[\t\r\n]/g,
        xt = /\r/g,
        _t = /^(?:button|input)$/i,
        kt = /^(?:button|input|object|select|textarea)$/i,
        $t = /^a(?:rea|)$/i,
        Ct = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        St = K.support.getSetAttribute;
    K.fn.extend({
        attr: function(e, t) {
            return K.access(this, K.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                K.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return K.access(this, K.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = K.propFix[e] || e, this.each(function() {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {}
            })
        },
        addClass: function(e) {
            var t, n, r, i, o, s, a;
            if (K.isFunction(e)) return this.each(function(t) {
                K(this).addClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e)
                for (t = e.split(tt), n = 0, r = this.length; r > n; n++)
                    if (i = this[n], 1 === i.nodeType)
                        if (i.className || 1 !== t.length) {
                            for (o = " " + i.className + " ", s = 0, a = t.length; a > s; s++) ~o.indexOf(" " + t[s] + " ") || (o += t[s] + " ");
                            i.className = K.trim(o)
                        } else i.className = e;
            return this
        },
        removeClass: function(e) {
            var n, r, i, o, s, a, u;
            if (K.isFunction(e)) return this.each(function(t) {
                K(this).removeClass(e.call(this, t, this.className))
            });
            if (e && "string" == typeof e || e === t)
                for (n = (e || "").split(tt), a = 0, u = this.length; u > a; a++)
                    if (i = this[a], 1 === i.nodeType && i.className) {
                        for (r = (" " + i.className + " ").replace(wt, " "), o = 0, s = n.length; s > o; o++)
                            for (; r.indexOf(" " + n[o] + " ") > -1;) r = r.replace(" " + n[o] + " ", " ");
                        i.className = e ? K.trim(r) : ""
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e,
                r = "boolean" == typeof t;
            return K.isFunction(e) ? this.each(function(n) {
                K(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var i, o = 0, s = K(this), a = t, u = e.split(tt); i = u[o++];) a = r ? a : !s.hasClass(i), s[a ? "addClass" : "removeClass"](i);
                else("undefined" === n || "boolean" === n) && (this.className && K._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : K._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) > -1) return !0;
            return !1
        },
        val: function(e) {
            var n, r, i, o = this[0]; {
                if (arguments.length) return i = K.isFunction(e), this.each(function(r) {
                    var o, s = K(this);
                    1 === this.nodeType && (o = i ? e.call(this, r, s.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), n = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return n = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()], n && "get" in n && (r = n.get(o, "value")) !== t ? r : (r = o.value, "string" == typeof r ? r.replace(xt, "") : null == r ? "" : r)
            }
        }
    }), K.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i, o = e.selectedIndex,
                        s = [],
                        a = e.options,
                        u = "select-one" === e.type;
                    if (0 > o) return null;
                    for (n = u ? o : 0, r = u ? o + 1 : a.length; r > n; n++)
                        if (i = a[n], !(!i.selected || (K.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && K.nodeName(i.parentNode, "optgroup"))) {
                            if (t = K(i).val(), u) return t;
                            s.push(t)
                        }
                    return u && !s.length && a.length ? K(a[o]).val() : s
                },
                set: function(e, t) {
                    var n = K.makeArray(t);
                    return K(e).find("option").each(function() {
                        this.selected = K.inArray(K(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attrFn: {},
        attr: function(e, n, r, i) {
            var o, s, a, u = e.nodeType;
            if (e && 3 !== u && 8 !== u && 2 !== u) return i && K.isFunction(K.fn[n]) ? K(e)[n](r) : "undefined" == typeof e.getAttribute ? K.prop(e, n, r) : (a = 1 !== u || !K.isXMLDoc(e), a && (n = n.toLowerCase(), s = K.attrHooks[n] || (Ct.test(n) ? yt : vt)), r !== t ? null === r ? (K.removeAttr(e, n), void 0) : s && "set" in s && a && (o = s.set(e, r, n)) !== t ? o : (e.setAttribute(n, "" + r), r) : s && "get" in s && a && null !== (o = s.get(e, n)) ? o : (o = e.getAttribute(n), null === o ? t : o))
        },
        removeAttr: function(e, t) {
            var n, r, i, o, s = 0;
            if (t && 1 === e.nodeType)
                for (r = t.split(tt); s < r.length; s++) i = r[s], i && (n = K.propFix[i] || i, o = Ct.test(i), o || K.attr(e, i, ""), e.removeAttribute(St ? i : n), o && n in e && (e[n] = !1))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (_t.test(e.nodeName) && e.parentNode) K.error("type property can't be changed");
                    else if (!K.support.radioValue && "radio" === t && K.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            },
            value: {
                get: function(e, t) {
                    return vt && K.nodeName(e, "button") ? vt.get(e, t) : t in e ? e.value : null
                },
                set: function(e, t, n) {
                    return vt && K.nodeName(e, "button") ? vt.set(e, t, n) : (e.value = t, void 0)
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(e, n, r) {
            var i, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !K.isXMLDoc(e), s && (n = K.propFix[n] || n, o = K.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : kt.test(e.nodeName) || $t.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), yt = {
        get: function(e, n) {
            var r, i = K.prop(e, n);
            return i === !0 || "boolean" != typeof i && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t
        },
        set: function(e, t, n) {
            var r;
            return t === !1 ? K.removeAttr(e, n) : (r = K.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n
        }
    }, St || (bt = {
        name: !0,
        id: !0,
        coords: !0
    }, vt = K.valHooks.button = {
        get: function(e, n) {
            var r;
            return r = e.getAttributeNode(n), r && (bt[n] ? "" !== r.value : r.specified) ? r.value : t
        },
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || (r = I.createAttribute(n), e.setAttributeNode(r)), r.value = t + ""
        }
    }, K.each(["width", "height"], function(e, t) {
        K.attrHooks[t] = K.extend(K.attrHooks[t], {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    }), K.attrHooks.contenteditable = {
        get: vt.get,
        set: function(e, t, n) {
            "" === t && (t = "false"), vt.set(e, t, n)
        }
    }), K.support.hrefNormalized || K.each(["href", "src", "width", "height"], function(e, n) {
        K.attrHooks[n] = K.extend(K.attrHooks[n], {
            get: function(e) {
                var r = e.getAttribute(n, 2);
                return null === r ? t : r
            }
        })
    }), K.support.style || (K.attrHooks.style = {
        get: function(e) {
            return e.style.cssText.toLowerCase() || t
        },
        set: function(e, t) {
            return e.style.cssText = "" + t
        }
    }), K.support.optSelected || (K.propHooks.selected = K.extend(K.propHooks.selected, {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), K.support.enctype || (K.propFix.enctype = "encoding"), K.support.checkOn || K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = {
            get: function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), K.each(["radio", "checkbox"], function() {
        K.valHooks[this] = K.extend(K.valHooks[this], {
            set: function(e, t) {
                return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Et = /^(?:textarea|input|select)$/i,
        Tt = /^([^\.]*|)(?:\.(.+)|)$/,
        Ft = /(?:^|\s)hover(\.\S+|)\b/,
        Nt = /^key/,
        jt = /^(?:mouse|contextmenu)|click/,
        Dt = /^(?:focusinfocus|focusoutblur)$/,
        At = function(e) {
            return K.event.special.hover ? e : e.replace(Ft, "mouseenter$1 mouseleave$1")
        };
    K.event = {
            add: function(e, n, r, i, o) {
                var s, a, u, l, c, d, h, p, f, m, g;
                if (3 !== e.nodeType && 8 !== e.nodeType && n && r && (s = K._data(e))) {
                    for (r.handler && (f = r, r = f.handler, o = f.selector), r.guid || (r.guid = K.guid++), u = s.events, u || (s.events = u = {}), a = s.handle, a || (s.handle = a = function(e) {
                            return "undefined" == typeof K || e && K.event.triggered === e.type ? t : K.event.dispatch.apply(a.elem, arguments)
                        }, a.elem = e), n = K.trim(At(n)).split(" "), l = 0; l < n.length; l++) c = Tt.exec(n[l]) || [], d = c[1], h = (c[2] || "").split(".").sort(), g = K.event.special[d] || {}, d = (o ? g.delegateType : g.bindType) || d, g = K.event.special[d] || {}, p = K.extend({
                        type: d,
                        origType: c[1],
                        data: i,
                        handler: r,
                        guid: r.guid,
                        selector: o,
                        namespace: h.join(".")
                    }, f), m = u[d], m || (m = u[d] = [], m.delegateCount = 0, g.setup && g.setup.call(e, i, h, a) !== !1 || (e.addEventListener ? e.addEventListener(d, a, !1) : e.attachEvent && e.attachEvent("on" + d, a))), g.add && (g.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? m.splice(m.delegateCount++, 0, p) : m.push(p), K.event.global[d] = !0;
                    e = null
                }
            },
            global: {},
            remove: function(e, t, n, r, i) {
                var o, s, a, u, l, c, d, h, p, f, m, g = K.hasData(e) && K._data(e);
                if (g && (h = g.events)) {
                    for (t = K.trim(At(t || "")).split(" "), o = 0; o < t.length; o++)
                        if (s = Tt.exec(t[o]) || [], a = u = s[1], l = s[2], a) {
                            for (p = K.event.special[a] || {}, a = (r ? p.delegateType : p.bindType) || a, f = h[a] || [], c = f.length, l = l ? new RegExp("(^|\\.)" + l.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = 0; d < f.length; d++) m = f[d], !i && u !== m.origType || n && n.guid !== m.guid || l && !l.test(m.namespace) || r && r !== m.selector && ("**" !== r || !m.selector) || (f.splice(d--, 1), m.selector && f.delegateCount--, p.remove && p.remove.call(e, m));
                            0 === f.length && c !== f.length && (p.teardown && p.teardown.call(e, l, g.handle) !== !1 || K.removeEvent(e, a, g.handle), delete h[a])
                        } else
                            for (a in h) K.event.remove(e, a + t[o], n, r, !0);
                    K.isEmptyObject(h) && (delete g.handle, K.removeData(e, "events", !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(n, r, i, o) {
                if (!i || 3 !== i.nodeType && 8 !== i.nodeType) {
                    var s, a, u, l, c, d, h, p, f, m, g = n.type || n,
                        v = [];
                    if (!Dt.test(g + K.event.triggered) && (g.indexOf("!") >= 0 && (g = g.slice(0, -1), a = !0), g.indexOf(".") >= 0 && (v = g.split("."), g = v.shift(), v.sort()), i && !K.event.customEvent[g] || K.event.global[g]))
                        if (n = "object" == typeof n ? n[K.expando] ? n : new K.Event(g, n) : new K.Event(g), n.type = g, n.isTrigger = !0, n.exclusive = a, n.namespace = v.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, d = g.indexOf(":") < 0 ? "on" + g : "", i) {
                            if (n.result = t, n.target || (n.target = i), r = null != r ? K.makeArray(r) : [], r.unshift(n), h = K.event.special[g] || {}, !h.trigger || h.trigger.apply(i, r) !== !1) {
                                if (f = [
                                        [i, h.bindType || g]
                                    ], !o && !h.noBubble && !K.isWindow(i)) {
                                    for (m = h.delegateType || g, l = Dt.test(m + g) ? i : i.parentNode, c = i; l; l = l.parentNode) f.push([l, m]), c = l;
                                    c === (i.ownerDocument || I) && f.push([c.defaultView || c.parentWindow || e, m])
                                }
                                for (u = 0; u < f.length && !n.isPropagationStopped(); u++) l = f[u][0], n.type = f[u][1], p = (K._data(l, "events") || {})[n.type] && K._data(l, "handle"), p && p.apply(l, r), p = d && l[d], p && K.acceptData(l) && p.apply(l, r) === !1 && n.preventDefault();
                                return n.type = g, o || n.isDefaultPrevented() || h._default && h._default.apply(i.ownerDocument, r) !== !1 || "click" === g && K.nodeName(i, "a") || !K.acceptData(i) || d && i[g] && ("focus" !== g && "blur" !== g || 0 !== n.target.offsetWidth) && !K.isWindow(i) && (c = i[d], c && (i[d] = null), K.event.triggered = g, i[g](), K.event.triggered = t, c && (i[d] = c)), n.result
                            }
                        } else {
                            s = K.cache;
                            for (u in s) s[u].events && s[u].events[g] && K.event.trigger(n, r, s[u].handle.elem, !0)
                        }
                }
            },
            dispatch: function(n) {
                n = K.event.fix(n || e.event);
                var r, i, o, s, a, u, l, c, d, h = (K._data(this, "events") || {})[n.type] || [],
                    p = h.delegateCount,
                    f = [].slice.call(arguments),
                    m = !n.exclusive && !n.namespace,
                    g = K.event.special[n.type] || {},
                    v = [];
                if (f[0] = n, n.delegateTarget = this, !g.preDispatch || g.preDispatch.call(this, n) !== !1) {
                    if (p && (!n.button || "click" !== n.type))
                        for (o = n.target; o != this; o = o.parentNode || this)
                            if (o.disabled !== !0 || "click" !== n.type) {
                                for (a = {}, l = [], r = 0; p > r; r++) c = h[r], d = c.selector, a[d] === t && (a[d] = K(d, this).index(o) >= 0), a[d] && l.push(c);
                                l.length && v.push({
                                    elem: o,
                                    matches: l
                                })
                            }
                    for (h.length > p && v.push({
                            elem: this,
                            matches: h.slice(p)
                        }), r = 0; r < v.length && !n.isPropagationStopped(); r++)
                        for (u = v[r], n.currentTarget = u.elem, i = 0; i < u.matches.length && !n.isImmediatePropagationStopped(); i++) c = u.matches[i], (m || !n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace)) && (n.data = c.data, n.handleObj = c, s = ((K.event.special[c.origType] || {}).handle || c.handler).apply(u.elem, f), s !== t && (n.result = s, s === !1 && (n.preventDefault(), n.stopPropagation())));
                    return g.postDispatch && g.postDispatch.call(this, n), n.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, n) {
                    var r, i, o, s = n.button,
                        a = n.fromElement;
                    return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || I, i = r.documentElement, o = r.body, e.pageX = n.clientX + (i && i.scrollLeft || o && o.scrollLeft || 0) - (i && i.clientLeft || o && o.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || o && o.scrollTop || 0) - (i && i.clientTop || o && o.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement : a), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
                }
            },
            fix: function(e) {
                if (e[K.expando]) return e;
                var t, n, r = e,
                    i = K.event.fixHooks[e.type] || {},
                    o = i.props ? this.props.concat(i.props) : this.props;
                for (e = K.Event(r), t = o.length; t;) n = o[--t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || I), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(e, t, n) {
                        K.isWindow(this) && (this.onbeforeunload = n)
                    },
                    teardown: function(e, t) {
                        this.onbeforeunload === t && (this.onbeforeunload = null)
                    }
                }
            },
            simulate: function(e, t, n, r) {
                var i = K.extend(new K.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                r ? K.event.trigger(i, null, t) : K.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
            }
        }, K.event.handle = K.event.dispatch, K.removeEvent = I.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var r = "on" + t;
            e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null), e.detachEvent(r, n))
        }, K.Event = function(e, t) {
            return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? s : o) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), this[K.expando] = !0, void 0) : new K.Event(e, t)
        }, K.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = s;
                var e = this.originalEvent;
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = s;
                var e = this.originalEvent;
                e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = s, this.stopPropagation()
            },
            isDefaultPrevented: o,
            isPropagationStopped: o,
            isImmediatePropagationStopped: o
        }, K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            K.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, r = this,
                        i = e.relatedTarget,
                        o = e.handleObj;
                    return o.selector, (!i || i !== r && !K.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), K.support.submitBubbles || (K.event.special.submit = {
            setup: function() {
                return K.nodeName(this, "form") ? !1 : (K.event.add(this, "click._submit keypress._submit", function(e) {
                    var n = e.target,
                        r = K.nodeName(n, "input") || K.nodeName(n, "button") ? n.form : t;
                    r && !K._data(r, "_submit_attached") && (K.event.add(r, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), K._data(r, "_submit_attached", !0))
                }), void 0)
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && K.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return K.nodeName(this, "form") ? !1 : (K.event.remove(this, "._submit"), void 0)
            }
        }), K.support.changeBubbles || (K.event.special.change = {
            setup: function() {
                return Et.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (K.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), K.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), K.event.simulate("change", this, e, !0)
                })), !1) : (K.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    Et.test(t.nodeName) && !K._data(t, "_change_attached") && (K.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || K.event.simulate("change", this.parentNode, e, !0)
                    }), K._data(t, "_change_attached", !0))
                }), void 0)
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return K.event.remove(this, "._change"), !Et.test(this.nodeName)
            }
        }), K.support.focusinBubbles || K.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = 0,
                r = function(e) {
                    K.event.simulate(t, e.target, K.event.fix(e), !0)
                };
            K.event.special[t] = {
                setup: function() {
                    0 === n++ && I.addEventListener(e, r, !0)
                },
                teardown: function() {
                    0 === --n && I.removeEventListener(e, r, !0)
                }
            }
        }), K.fn.extend({
            on: function(e, n, r, i, s) {
                var a, u;
                if ("object" == typeof e) {
                    "string" != typeof n && (r = r || n, n = t);
                    for (u in e) this.on(u, n, r, e[u], s);
                    return this
                }
                if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1) i = o;
                else if (!i) return this;
                return 1 === s && (a = i, i = function(e) {
                    return K().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = K.guid++)), this.each(function() {
                    K.event.add(this, e, i, r, n)
                })
            },
            one: function(e, t, n, r) {
                return this.on(e, t, n, r, 1)
            },
            off: function(e, n, r) {
                var i, s;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, K(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (s in e) this.off(s, n, e[s]);
                    return this
                }
                return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = o), this.each(function() {
                    K.event.remove(this, e, r, n)
                })
            },
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            live: function(e, t, n) {
                return K(this.context).on(e, this.selector, t, n), this
            },
            die: function(e, t) {
                return K(this.context).off(e, this.selector || "**", t), this
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 == arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            trigger: function(e, t) {
                return this.each(function() {
                    K.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                return this[0] ? K.event.trigger(e, t, this[0], !0) : void 0
            },
            toggle: function(e) {
                var t = arguments,
                    n = e.guid || K.guid++,
                    r = 0,
                    i = function(n) {
                        var i = (K._data(this, "lastToggle" + e.guid) || 0) % r;
                        return K._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1
                    };
                for (i.guid = n; r < t.length;) t[r++].guid = n;
                return this.click(i)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            K.fn[t] = function(e, n) {
                return null == n && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }, Nt.test(t) && (K.event.fixHooks[t] = K.event.keyHooks), jt.test(t) && (K.event.fixHooks[t] = K.event.mouseHooks)
        }),
        /*!
         * Sizzle CSS Selector Engine
         *  Copyright 2012 jQuery Foundation and other contributors
         *  Released under the MIT license
         *  http://sizzlejs.com/
         */
        function(e, t) {
            function n(e, t, n, r) {
                n = n || [], t = t || T;
                var i, o, s, a, u = t.nodeType;
                if (1 !== u && 9 !== u) return [];
                if (!e || "string" != typeof e) return n;
                if (s = w(t), !s && !r && (i = Q.exec(e)))
                    if (a = i[1]) {
                        if (9 === u) {
                            if (o = t.getElementById(a), !o || !o.parentNode) return n;
                            if (o.id === a) return n.push(o), n
                        } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && x(t, o) && o.id === a) return n.push(o), n
                    } else {
                        if (i[2]) return D.apply(n, j.call(t.getElementsByTagName(e), 0)), n;
                        if ((a = i[3]) && at && t.getElementsByClassName) return D.apply(n, j.call(t.getElementsByClassName(a), 0)), n
                    }
                return f(e, t, n, r, s)
            }

            function r(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return "input" === n && t.type === e
                }
            }

            function i(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }

            function o(e, t, n) {
                if (e === t) return n;
                for (var r = e.nextSibling; r;) {
                    if (r === t) return -1;
                    r = r.nextSibling
                }
                return 1
            }

            function s(e, t, r, i) {
                var o, s, a, u, l, c, d, h, p, f, m = !r && t !== T,
                    g = (m ? "<s>" : "") + e.replace(G, "$1<s>"),
                    v = M[E][g];
                if (v) return i ? 0 : j.call(v, 0);
                for (l = e, c = [], h = 0, p = y.preFilter, f = y.filter; l;) {
                    (!o || (s = U.exec(l))) && (s && (l = l.slice(s[0].length), a.selector = d), c.push(a = []), d = "", m && (l = " " + l)), o = !1, (s = V.exec(l)) && (d += s[0], l = l.slice(s[0].length), o = a.push({
                        part: s.pop().replace(G, " "),
                        string: s[0],
                        captures: s
                    }));
                    for (u in f) !(s = nt[u].exec(l)) || p[u] && !(s = p[u](s, t, r)) || (d += s[0], l = l.slice(s[0].length), o = a.push({
                        part: u,
                        string: s.shift(),
                        captures: s
                    }));
                    if (!o) break
                }
                return d && (a.selector = d), i ? l.length : l ? n.error(e) : j.call(M(g, c), 0)
            }

            function a(e, t, n, r) {
                var i = t.dir,
                    o = N++;
                return e || (e = function(e) {
                    return e === n
                }), t.first ? function(t) {
                    for (; t = t[i];)
                        if (1 === t.nodeType) return e(t) && t
                } : r ? function(t) {
                    for (; t = t[i];)
                        if (1 === t.nodeType && e(t)) return t
                } : function(t) {
                    for (var n, r = o + "." + m, s = r + "." + g; t = t[i];)
                        if (1 === t.nodeType) {
                            if ((n = t[E]) === s) return t.sizset;
                            if ("string" == typeof n && 0 === n.indexOf(r)) {
                                if (t.sizset) return t
                            } else {
                                if (t[E] = s, e(t)) return t.sizset = !0, t;
                                t.sizset = !1
                            }
                        }
                }
            }

            function u(e, t) {
                return e ? function(n) {
                    var r = t(n);
                    return r && e(r === !0 ? n : r)
                } : t
            }

            function l(e, t, n) {
                for (var r, i, o = 0; r = e[o]; o++) i = y.relative[r.part] ? a(i, y.relative[r.part], t, n) : u(i, y.filter[r.part].apply(null, r.captures.concat(t, n)));
                return i
            }

            function c(e) {
                return function(t) {
                    for (var n, r = 0; n = e[r]; r++)
                        if (n(t)) return !0;
                    return !1
                }
            }

            function d(e, t, r, i) {
                for (var o = 0, s = t.length; s > o; o++) n(e, t[o], r, i)
            }

            function h(e, t, r, i, o, s) {
                var a, u = y.setFilters[t.toLowerCase()];
                return u || n.error(t), (e || !(a = o)) && d(e || "*", i, a = [], o), a.length > 0 ? u(a, r, s) : []
            }

            function p(e, r, i, o) {
                for (var s, a, u, l, c, p, f, m, g, v, y, b, w, x = 0, _ = e.length, k = nt.POS, $ = new RegExp("^" + k.source + "(?!" + P + ")", "i"), C = function() {
                        for (var e = 1, n = arguments.length - 2; n > e; e++) arguments[e] === t && (g[e] = t)
                    }; _ > x; x++) {
                    for (s = e[x], a = "", m = o, u = 0, l = s.length; l > u; u++) {
                        if (c = s[u], p = c.string, "PSEUDO" === c.part)
                            for (k.exec(""), f = 0; g = k.exec(p);) v = !0, y = k.lastIndex = g.index + g[0].length, y > f && (a += p.slice(f, g.index), f = y, b = [r], V.test(a) && (m && (b = m), m = o), (w = J.test(a)) && (a = a.slice(0, -5).replace(V, "$&*"), f++), g.length > 1 && g[0].replace($, C), m = h(a, g[1], g[2], b, m, w)), a = "";
                        v || (a += p), v = !1
                    }
                    a ? V.test(a) ? d(a, m || [r], i, o) : n(a, r, i, o ? o.concat(m) : m) : D.apply(i, m)
                }
                return 1 === _ ? i : n.uniqueSort(i)
            }

            function f(e, t, n, r, i) {
                e = e.replace(G, "$1");
                var o, a, u, l, c, d, h, f, v, b = s(e, t, i),
                    w = t.nodeType;
                if (nt.POS.test(e)) return p(b, t, n, r);
                if (r) o = j.call(r, 0);
                else if (1 === b.length) {
                    if ((c = j.call(b[0], 0)).length > 2 && "ID" === (d = c[0]).part && 9 === w && !i && y.relative[c[1].part]) {
                        if (t = y.find.ID(d.captures[0].replace(tt, ""), t, i)[0], !t) return n;
                        e = e.slice(c.shift().string.length)
                    }
                    for (f = (b = Y.exec(c[0].string)) && !b.index && t.parentNode || t, h = "", l = c.length - 1; l >= 0 && (d = c[l], v = d.part, h = d.string + h, !y.relative[v]); l--)
                        if (y.order.test(v)) {
                            if (o = y.find[v](d.captures[0].replace(tt, ""), f, i), null == o) continue;
                            e = e.slice(0, e.length - h.length) + h.replace(nt[v], ""), e || D.apply(n, j.call(o, 0));
                            break
                        }
                }
                if (e)
                    for (a = _(e, t, i), m = a.dirruns++, null == o && (o = y.find.TAG("*", Y.test(e) && t.parentNode || t)), l = 0; u = o[l]; l++) g = a.runs++, a(u) && n.push(u);
                return n
            }
            var m, g, v, y, b, w, x, _, k, $, C = !0,
                S = "undefined",
                E = ("sizcache" + Math.random()).replace(".", ""),
                T = e.document,
                F = T.documentElement,
                N = 0,
                j = [].slice,
                D = [].push,
                A = function(e, t) {
                    return e[E] = t || !0, e
                },
                L = function() {
                    var e = {},
                        t = [];
                    return A(function(n, r) {
                        return t.push(n) > y.cacheLength && delete e[t.shift()], e[n] = r
                    }, e)
                },
                q = L(),
                M = L(),
                H = L(),
                P = "[\\x20\\t\\r\\n\\f]",
                O = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                R = O.replace("w", "w#"),
                I = "([*^$|!~]?=)",
                z = "\\[" + P + "*(" + O + ")" + P + "*(?:" + I + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + R + ")|)|)" + P + "*\\]",
                B = ":(" + O + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + z + ")|[^:]|\\\\.)*|.*))\\)|)",
                W = ":(nth|eq|gt|lt|first|last|even|odd)(?:\\(((?:-\\d)?\\d*)\\)|)(?=[^-]|$)",
                G = new RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"),
                U = new RegExp("^" + P + "*," + P + "*"),
                V = new RegExp("^" + P + "*([\\x20\\t\\r\\n\\f>+~])" + P + "*"),
                X = new RegExp(B),
                Q = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                Y = /[\x20\t\r\n\f]*[+~]/,
                J = /:not\($/,
                Z = /h\d/i,
                et = /input|select|textarea|button/i,
                tt = /\\(?!\\)/g,
                nt = {
                    ID: new RegExp("^#(" + O + ")"),
                    CLASS: new RegExp("^\\.(" + O + ")"),
                    NAME: new RegExp("^\\[name=['\"]?(" + O + ")['\"]?\\]"),
                    TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + z),
                    PSEUDO: new RegExp("^" + B),
                    CHILD: new RegExp("^:(only|nth|last|first)-child(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"),
                    POS: new RegExp(W, "ig"),
                    needsContext: new RegExp("^" + P + "*[>+~]|" + W, "i")
                },
                rt = function(e) {
                    var t = T.createElement("div");
                    try {
                        return e(t)
                    } catch (n) {
                        return !1
                    } finally {
                        t = null
                    }
                },
                it = rt(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }),
                ot = rt(function(e) {
                    return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== S && "#" === e.firstChild.getAttribute("href")
                }),
                st = rt(function(e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t
                }),
                at = rt(function(e) {
                    return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
                }),
                ut = rt(function(e) {
                    e.id = E + 0, e.innerHTML = "<a name='" + E + "'></a><div name='" + E + "'></div>", F.insertBefore(e, F.firstChild);
                    var t = T.getElementsByName && T.getElementsByName(E).length === 2 + T.getElementsByName(E + 0).length;
                    return v = !T.getElementById(E), F.removeChild(e), t
                });
            try {
                j.call(F.childNodes, 0)[0].nodeType
            } catch (lt) {
                j = function(e) {
                    for (var t, n = []; t = this[e]; e++) n.push(t);
                    return n
                }
            }
            n.matches = function(e, t) {
                return n(e, null, null, t)
            }, n.matchesSelector = function(e, t) {
                return n(t, null, null, [e]).length > 0
            }, b = n.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += b(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    for (; t = e[r]; r++) n += b(t);
                return n
            }, w = n.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }, x = n.contains = F.contains ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !!(r && 1 === r.nodeType && n.contains && n.contains(r))
            } : F.compareDocumentPosition ? function(e, t) {
                return t && !!(16 & e.compareDocumentPosition(t))
            } : function(e, t) {
                for (; t = t.parentNode;)
                    if (t === e) return !0;
                return !1
            }, n.attr = function(e, t) {
                var n, r = w(e);
                return r || (t = t.toLowerCase()), y.attrHandle[t] ? y.attrHandle[t](e) : st || r ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? "boolean" == typeof e[t] ? e[t] ? t : null : n.specified ? n.value : null : null)
            }, y = n.selectors = {
                cacheLength: 50,
                createPseudo: A,
                match: nt,
                order: new RegExp("ID|TAG" + (ut ? "|NAME" : "") + (at ? "|CLASS" : "")),
                attrHandle: ot ? {} : {
                    href: function(e) {
                        return e.getAttribute("href", 2)
                    },
                    type: function(e) {
                        return e.getAttribute("type")
                    }
                },
                find: {
                    ID: v ? function(e, t, n) {
                        if (typeof t.getElementById !== S && !n) {
                            var r = t.getElementById(e);
                            return r && r.parentNode ? [r] : []
                        }
                    } : function(e, n, r) {
                        if (typeof n.getElementById !== S && !r) {
                            var i = n.getElementById(e);
                            return i ? i.id === e || typeof i.getAttributeNode !== S && i.getAttributeNode("id").value === e ? [i] : t : []
                        }
                    },
                    TAG: it ? function(e, t) {
                        return typeof t.getElementsByTagName !== S ? t.getElementsByTagName(e) : void 0
                    } : function(e, t) {
                        var n = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (var r, i = [], o = 0; r = n[o]; o++) 1 === r.nodeType && i.push(r);
                            return i
                        }
                        return n
                    },
                    NAME: function(e, t) {
                        return typeof t.getElementsByName !== S ? t.getElementsByName(name) : void 0
                    },
                    CLASS: function(e, t, n) {
                        return typeof t.getElementsByClassName === S || n ? void 0 : t.getElementsByClassName(e)
                    }
                },
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(tt, ""), e[3] = (e[4] || e[5] || "").replace(tt, ""), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1] ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * ("even" === e[2] || "odd" === e[2])), e[4] = +(e[6] + e[7] || "odd" === e[2])) : e[2] && n.error(e[0]), e
                    },
                    PSEUDO: function(e, t, n) {
                        var r, i;
                        return nt.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[3] : (r = e[4]) && (X.test(r) && (i = s(r, t, n, !0)) && (i = r.indexOf(")", r.length - i) - r.length) && (r = r.slice(0, i), e[0] = e[0].slice(0, i)), e[2] = r), e.slice(0, 3))
                    }
                },
                filter: {
                    ID: v ? function(e) {
                        return e = e.replace(tt, ""),
                            function(t) {
                                return t.getAttribute("id") === e
                            }
                    } : function(e) {
                        return e = e.replace(tt, ""),
                            function(t) {
                                var n = typeof t.getAttributeNode !== S && t.getAttributeNode("id");
                                return n && n.value === e
                            }
                    },
                    TAG: function(e) {
                        return "*" === e ? function() {
                            return !0
                        } : (e = e.replace(tt, "").toLowerCase(), function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        })
                    },
                    CLASS: function(e) {
                        var t = q[E][e];
                        return t || (t = q(e, new RegExp("(^|" + P + ")" + e + "(" + P + "|$)"))),
                            function(e) {
                                return t.test(e.className || typeof e.getAttribute !== S && e.getAttribute("class") || "")
                            }
                    },
                    ATTR: function(e, t, r) {
                        return t ? function(i) {
                            var o = n.attr(i, e),
                                s = o + "";
                            if (null == o) return "!=" === t;
                            switch (t) {
                                case "=":
                                    return s === r;
                                case "!=":
                                    return s !== r;
                                case "^=":
                                    return r && 0 === s.indexOf(r);
                                case "*=":
                                    return r && s.indexOf(r) > -1;
                                case "$=":
                                    return r && s.substr(s.length - r.length) === r;
                                case "~=":
                                    return (" " + s + " ").indexOf(r) > -1;
                                case "|=":
                                    return s === r || s.substr(0, r.length + 1) === r + "-"
                            }
                        } : function(t) {
                            return null != n.attr(t, e)
                        }
                    },
                    CHILD: function(e, t, n, r) {
                        if ("nth" === e) {
                            var i = N++;
                            return function(e) {
                                var t, o, s = 0,
                                    a = e;
                                if (1 === n && 0 === r) return !0;
                                if (t = e.parentNode, t && (t[E] !== i || !e.sizset)) {
                                    for (a = t.firstChild; a && (1 !== a.nodeType || (a.sizset = ++s, a !== e)); a = a.nextSibling);
                                    t[E] = i
                                }
                                return o = e.sizset - r, 0 === n ? 0 === o : 0 === o % n && o / n >= 0
                            }
                        }
                        return function(t) {
                            var n = t;
                            switch (e) {
                                case "only":
                                case "first":
                                    for (; n = n.previousSibling;)
                                        if (1 === n.nodeType) return !1;
                                    if ("first" === e) return !0;
                                    n = t;
                                case "last":
                                    for (; n = n.nextSibling;)
                                        if (1 === n.nodeType) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(e, t, r, i) {
                        var o, s = y.pseudos[e] || y.pseudos[e.toLowerCase()];
                        return s || n.error("unsupported pseudo: " + e), s[E] ? s(t, r, i) : s.length > 1 ? (o = [e, e, "", t], function(e) {
                            return s(e, 0, o)
                        }) : s
                    }
                },
                pseudos: {
                    not: A(function(e, t, n) {
                        var r = _(e.replace(G, "$1"), t, n);
                        return function(e) {
                            return !r(e)
                        }
                    }),
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                    },
                    parent: function(e) {
                        return !y.pseudos.empty(e)
                    },
                    empty: function(e) {
                        var t;
                        for (e = e.firstChild; e;) {
                            if (e.nodeName > "@" || 3 === (t = e.nodeType) || 4 === t) return !1;
                            e = e.nextSibling
                        }
                        return !0
                    },
                    contains: A(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || b(t)).indexOf(e) > -1
                        }
                    }),
                    has: A(function(e) {
                        return function(t) {
                            return n(e, t).length > 0
                        }
                    }),
                    header: function(e) {
                        return Z.test(e.nodeName)
                    },
                    text: function(e) {
                        var t, n;
                        return "input" === e.nodeName.toLowerCase() && "text" === (t = e.type) && (null == (n = e.getAttribute("type")) || n.toLowerCase() === t)
                    },
                    radio: r("radio"),
                    checkbox: r("checkbox"),
                    file: r("file"),
                    password: r("password"),
                    image: r("image"),
                    submit: i("submit"),
                    reset: i("reset"),
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    input: function(e) {
                        return et.test(e.nodeName)
                    },
                    focus: function(e) {
                        var t = e.ownerDocument;
                        return !(e !== t.activeElement || t.hasFocus && !t.hasFocus() || !e.type && !e.href)
                    },
                    active: function(e) {
                        return e === e.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function(e, t, n) {
                        return n ? e.slice(1) : [e[0]]
                    },
                    last: function(e, t, n) {
                        var r = e.pop();
                        return n ? e : [r]
                    },
                    even: function(e, t, n) {
                        for (var r = [], i = n ? 1 : 0, o = e.length; o > i; i += 2) r.push(e[i]);
                        return r
                    },
                    odd: function(e, t, n) {
                        for (var r = [], i = n ? 0 : 1, o = e.length; o > i; i += 2) r.push(e[i]);
                        return r
                    },
                    lt: function(e, t, n) {
                        return n ? e.slice(+t) : e.slice(0, +t)
                    },
                    gt: function(e, t, n) {
                        return n ? e.slice(0, +t + 1) : e.slice(+t + 1)
                    },
                    eq: function(e, t, n) {
                        var r = e.splice(+t, 1);
                        return n ? e : r
                    }
                }
            }, k = F.compareDocumentPosition ? function(e, t) {
                return e === t ? ($ = !0, 0) : (e.compareDocumentPosition && t.compareDocumentPosition ? 4 & e.compareDocumentPosition(t) : e.compareDocumentPosition) ? -1 : 1
            } : function(e, t) {
                if (e === t) return $ = !0, 0;
                if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
                var n, r, i = [],
                    s = [],
                    a = e.parentNode,
                    u = t.parentNode,
                    l = a;
                if (a === u) return o(e, t);
                if (!a) return -1;
                if (!u) return 1;
                for (; l;) i.unshift(l), l = l.parentNode;
                for (l = u; l;) s.unshift(l), l = l.parentNode;
                n = i.length, r = s.length;
                for (var c = 0; n > c && r > c; c++)
                    if (i[c] !== s[c]) return o(i[c], s[c]);
                return c === n ? o(e, s[c], -1) : o(i[c], t, 1)
            }, [0, 0].sort(k), C = !$, n.uniqueSort = function(e) {
                var t, n = 1;
                if ($ = C, e.sort(k), $)
                    for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
                return e
            }, n.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, _ = n.compile = function(e, t, n) {
                var r, i, o, a = H[E][e];
                if (a && a.context === t) return a;
                for (r = s(e, t, n), i = 0, o = r.length; o > i; i++) r[i] = l(r[i], t, n);
                return a = H(e, c(r)), a.context = t, a.runs = a.dirruns = 0, a
            }, T.querySelectorAll && ! function() {
                var e, t = f,
                    r = /'|\\/g,
                    i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    o = [],
                    a = [":active"],
                    u = F.matchesSelector || F.mozMatchesSelector || F.webkitMatchesSelector || F.oMatchesSelector || F.msMatchesSelector;
                rt(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || o.push("\\[" + P + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || o.push(":checked")
                }), rt(function(e) {
                    e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && o.push("[*^$]=" + P + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled")
                }), o = o.length && new RegExp(o.join("|")), f = function(e, n, i, a, u) {
                    if (!(a || u || o && o.test(e)))
                        if (9 === n.nodeType) try {
                            return D.apply(i, j.call(n.querySelectorAll(e), 0)), i
                        } catch (l) {} else if (1 === n.nodeType && "object" !== n.nodeName.toLowerCase()) {
                            var c, d, h, p = n.getAttribute("id"),
                                f = p || E,
                                m = Y.test(e) && n.parentNode || n;
                            for (p ? f = f.replace(r, "\\$&") : n.setAttribute("id", f), c = s(e, n, u), f = "[id='" + f + "']", d = 0, h = c.length; h > d; d++) c[d] = f + c[d].selector;
                            try {
                                return D.apply(i, j.call(m.querySelectorAll(c.join(",")), 0)), i
                            } catch (l) {} finally {
                                p || n.removeAttribute("id")
                            }
                        }
                    return t(e, n, i, a, u)
                }, u && (rt(function(t) {
                    e = u.call(t, "div");
                    try {
                        u.call(t, "[test!='']:sizzle"), a.push(nt.PSEUDO.source, nt.POS.source, "!=")
                    } catch (n) {}
                }), a = new RegExp(a.join("|")), n.matchesSelector = function(t, r) {
                    if (r = r.replace(i, "='$1']"), !(w(t) || a.test(r) || o && o.test(r))) try {
                        var s = u.call(t, r);
                        if (s || e || t.document && 11 !== t.document.nodeType) return s
                    } catch (l) {}
                    return n(r, null, null, [t]).length > 0
                })
            }(), y.setFilters.nth = y.setFilters.eq, y.filters = y.pseudos, n.attr = K.attr, K.find = n, K.expr = n.selectors, K.expr[":"] = K.expr.pseudos, K.unique = n.uniqueSort, K.text = n.getText, K.isXMLDoc = n.isXML, K.contains = n.contains
        }(e);
    var Lt = /Until$/,
        qt = /^(?:parents|prev(?:Until|All))/,
        Mt = /^.[^:#\[\.,]*$/,
        Ht = K.expr.match.needsContext,
        Pt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    K.fn.extend({
        find: function(e) {
            var t, n, r, i, o, s, a = this;
            if ("string" != typeof e) return K(e).filter(function() {
                for (t = 0, n = a.length; n > t; t++)
                    if (K.contains(a[t], this)) return !0
            });
            for (s = this.pushStack("", "find", e), t = 0, n = this.length; n > t; t++)
                if (r = s.length, K.find(e, this[t], s), t > 0)
                    for (i = r; i < s.length; i++)
                        for (o = 0; r > o; o++)
                            if (s[o] === s[i]) {
                                s.splice(i--, 1);
                                break
                            }
            return s
        },
        has: function(e) {
            var t, n = K(e, this),
                r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (K.contains(this, n[t])) return !0
            })
        },
        not: function(e) {
            return this.pushStack(l(this, e, !1), "not", e)
        },
        filter: function(e) {
            return this.pushStack(l(this, e, !0), "filter", e)
        },
        is: function(e) {
            return !!e && ("string" == typeof e ? Ht.test(e) ? K(e, this.context).index(this[0]) >= 0 : K.filter(e, this).length > 0 : this.filter(e).length > 0)
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = Ht.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                    if (s ? s.index(n) > -1 : K.find.matchesSelector(n, e)) {
                        o.push(n);
                        break
                    }
                    n = n.parentNode
                }
            return o = o.length > 1 ? K.unique(o) : o, this.pushStack(o, "closest", e)
        },
        index: function(e) {
            return e ? "string" == typeof e ? K.inArray(this[0], K(e)) : K.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? K(e, t) : K.makeArray(e && e.nodeType ? [e] : e),
                r = K.merge(this.get(), n);
            return this.pushStack(a(n[0]) || a(r[0]) ? r : K.unique(r))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), K.fn.andSelf = K.fn.addBack, K.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return K.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return K.dir(e, "parentNode", n)
        },
        next: function(e) {
            return u(e, "nextSibling")
        },
        prev: function(e) {
            return u(e, "previousSibling")
        },
        nextAll: function(e) {
            return K.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return K.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return K.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return K.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return K.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return K.sibling(e.firstChild)
        },
        contents: function(e) {
            return K.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : K.merge([], e.childNodes)
        }
    }, function(e, t) {
        K.fn[e] = function(n, r) {
            var i = K.map(this, t, n);
            return Lt.test(e) || (r = n), r && "string" == typeof r && (i = K.filter(r, i)), i = this.length > 1 && !Pt[e] ? K.unique(i) : i, this.length > 1 && qt.test(e) && (i = i.reverse()), this.pushStack(i, e, V.call(arguments).join(","))
        }
    }), K.extend({
        filter: function(e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? K.find.matchesSelector(t[0], e) ? [t[0]] : [] : K.find.matches(e, t)
        },
        dir: function(e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !K(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ot = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        Rt = / jQuery\d+="(?:null|\d+)"/g,
        It = /^\s+/,
        zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Bt = /<([\w:]+)/,
        Wt = /<tbody/i,
        Gt = /<|&#?\w+;/,
        Ut = /<(?:script|style|link)/i,
        Vt = /<(?:script|object|embed|option|style)/i,
        Xt = new RegExp("<(?:" + Ot + ")[\\s/>]", "i"),
        Qt = /^(?:checkbox|radio)$/,
        Yt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Jt = /\/(java|ecma)script/i,
        Kt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Zt = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        en = c(I),
        tn = en.appendChild(I.createElement("div"));
    Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, K.support.htmlSerialize || (Zt._default = [1, "X<div>", "</div>"]), K.fn.extend({
            text: function(e) {
                return K.access(this, function(e) {
                    return e === t ? K.text(this) : this.empty().append((this[0] && this[0].ownerDocument || I).createTextNode(e))
                }, null, e, arguments.length)
            },
            wrapAll: function(e) {
                if (K.isFunction(e)) return this.each(function(t) {
                    K(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = K(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return K.isFunction(e) ? this.each(function(t) {
                    K(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = K(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = K.isFunction(e);
                return this.each(function(n) {
                    K(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.appendChild(e)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(e) {
                    (1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(e, this.firstChild)
                })
            },
            before: function() {
                if (!a(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this)
                });
                if (arguments.length) {
                    var e = K.clean(arguments);
                    return this.pushStack(K.merge(e, this), "before", this.selector)
                }
            },
            after: function() {
                if (!a(this[0])) return this.domManip(arguments, !1, function(e) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                });
                if (arguments.length) {
                    var e = K.clean(arguments);
                    return this.pushStack(K.merge(this, e), "after", this.selector)
                }
            },
            remove: function(e, t) {
                for (var n, r = 0; null != (n = this[r]); r++)(!e || K.filter(e, [n]).length) && (t || 1 !== n.nodeType || (K.cleanData(n.getElementsByTagName("*")), K.cleanData([n])), n.parentNode && n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    for (1 === e.nodeType && K.cleanData(e.getElementsByTagName("*")); e.firstChild;) e.removeChild(e.firstChild);
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function() {
                    return K.clone(this, e, t)
                })
            },
            html: function(e) {
                return K.access(this, function(e) {
                    var n = this[0] || {},
                        r = 0,
                        i = this.length;
                    if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Rt, "") : t;
                    if (!("string" != typeof e || Ut.test(e) || !K.support.htmlSerialize && Xt.test(e) || !K.support.leadingWhitespace && It.test(e) || Zt[(Bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(zt, "<$1></$2>");
                        try {
                            for (; i > r; r++) n = this[r] || {}, 1 === n.nodeType && (K.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
                            n = 0
                        } catch (o) {}
                    }
                    n && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function(e) {
                return a(this[0]) ? this.length ? this.pushStack(K(K.isFunction(e) ? e() : e), "replaceWith", e) : this : K.isFunction(e) ? this.each(function(t) {
                    var n = K(this),
                        r = n.html();
                    n.replaceWith(e.call(this, t, r))
                }) : ("string" != typeof e && (e = K(e).detach()), this.each(function() {
                    var t = this.nextSibling,
                        n = this.parentNode;
                    K(this).remove(), t ? K(t).before(e) : K(n).append(e)
                }))
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, n, r) {
                e = [].concat.apply([], e);
                var i, o, s, a, u = 0,
                    l = e[0],
                    c = [],
                    h = this.length;
                if (!K.support.checkClone && h > 1 && "string" == typeof l && Yt.test(l)) return this.each(function() {
                    K(this).domManip(e, n, r)
                });
                if (K.isFunction(l)) return this.each(function(i) {
                    var o = K(this);
                    e[0] = l.call(this, i, n ? o.html() : t), o.domManip(e, n, r)
                });
                if (this[0]) {
                    if (i = K.buildFragment(e, this, c), s = i.fragment, o = s.firstChild, 1 === s.childNodes.length && (s = o), o)
                        for (n = n && K.nodeName(o, "tr"), a = i.cacheable || h - 1; h > u; u++) r.call(n && K.nodeName(this[u], "table") ? d(this[u], "tbody") : this[u], u === a ? s : K.clone(s, !0, !0));
                    s = o = null, c.length && K.each(c, function(e, t) {
                        t.src ? K.ajax ? K.ajax({
                            url: t.src,
                            type: "GET",
                            dataType: "script",
                            async: !1,
                            global: !1,
                            "throws": !0
                        }) : K.error("no ajax") : K.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Kt, "")), t.parentNode && t.parentNode.removeChild(t)
                    })
                }
                return this
            }
        }), K.buildFragment = function(e, n, r) {
            var i, o, s, a = e[0];
            return n = n || I, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, !(1 === e.length && "string" == typeof a && a.length < 512 && n === I && "<" === a.charAt(0)) || Vt.test(a) || !K.support.checkClone && Yt.test(a) || !K.support.html5Clone && Xt.test(a) || (o = !0, i = K.fragments[a], s = i !== t), i || (i = n.createDocumentFragment(), K.clean(e, n, i, r), o && (K.fragments[a] = s && i)), {
                fragment: i,
                cacheable: o
            }
        }, K.fragments = {}, K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            K.fn[e] = function(n) {
                var r, i = 0,
                    o = [],
                    s = K(n),
                    a = s.length,
                    u = 1 === this.length && this[0].parentNode;
                if ((null == u || u && 11 === u.nodeType && 1 === u.childNodes.length) && 1 === a) return s[t](this[0]), this;
                for (; a > i; i++) r = (i > 0 ? this.clone(!0) : this).get(), K(s[i])[t](r), o = o.concat(r);
                return this.pushStack(o, e, s.selector)
            }
        }), K.extend({
            clone: function(e, t, n) {
                var r, i, o, s;
                if (K.support.html5Clone || K.isXMLDoc(e) || !Xt.test("<" + e.nodeName + ">") ? s = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(s = tn.firstChild)), !(K.support.noCloneEvent && K.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e)))
                    for (p(e, s), r = f(e), i = f(s), o = 0; r[o]; ++o) i[o] && p(r[o], i[o]);
                if (t && (h(e, s), n))
                    for (r = f(e), i = f(s), o = 0; r[o]; ++o) h(r[o], i[o]);
                return r = i = null, s
            },
            clean: function(e, t, n, r) {
                var i, o, s, a, u, l, d, h, p, f, g, v = t === I && en,
                    y = [];
                for (t && "undefined" != typeof t.createDocumentFragment || (t = I), i = 0; null != (s = e[i]); i++)
                    if ("number" == typeof s && (s += ""), s) {
                        if ("string" == typeof s)
                            if (Gt.test(s)) {
                                for (v = v || c(t), d = t.createElement("div"), v.appendChild(d), s = s.replace(zt, "<$1></$2>"), a = (Bt.exec(s) || ["", ""])[1].toLowerCase(), u = Zt[a] || Zt._default, l = u[0], d.innerHTML = u[1] + s + u[2]; l--;) d = d.lastChild;
                                if (!K.support.tbody)
                                    for (h = Wt.test(s), p = "table" !== a || h ? "<table>" !== u[1] || h ? [] : d.childNodes : d.firstChild && d.firstChild.childNodes, o = p.length - 1; o >= 0; --o) K.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                                !K.support.leadingWhitespace && It.test(s) && d.insertBefore(t.createTextNode(It.exec(s)[0]), d.firstChild), s = d.childNodes, d.parentNode.removeChild(d)
                            } else s = t.createTextNode(s);
                        s.nodeType ? y.push(s) : K.merge(y, s)
                    }
                if (d && (s = d = v = null), !K.support.appendChecked)
                    for (i = 0; null != (s = y[i]); i++) K.nodeName(s, "input") ? m(s) : "undefined" != typeof s.getElementsByTagName && K.grep(s.getElementsByTagName("input"), m);
                if (n)
                    for (f = function(e) {
                            return !e.type || Jt.test(e.type) ? r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e) : void 0
                        }, i = 0; null != (s = y[i]); i++) K.nodeName(s, "script") && f(s) || (n.appendChild(s), "undefined" != typeof s.getElementsByTagName && (g = K.grep(K.merge([], s.getElementsByTagName("script")), f), y.splice.apply(y, [i + 1, 0].concat(g)), i += g.length));
                return y
            },
            cleanData: function(e, t) {
                for (var n, r, i, o, s = 0, a = K.expando, u = K.cache, l = K.support.deleteExpando, c = K.event.special; null != (i = e[s]); s++)
                    if ((t || K.acceptData(i)) && (r = i[a], n = r && u[r])) {
                        if (n.events)
                            for (o in n.events) c[o] ? K.event.remove(i, o) : K.removeEvent(i, o, n.handle);
                        u[r] && (delete u[r], l ? delete i[a] : i.removeAttribute ? i.removeAttribute(a) : i[a] = null, K.deletedIds.push(r))
                    }
            }
        }),
        function() {
            var e, t;
            K.uaMatch = function(e) {
                e = e.toLowerCase();
                var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
                return {
                    browser: t[1] || "",
                    version: t[2] || "0"
                }
            }, e = K.uaMatch(B.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), K.browser = t, K.sub = function() {
                function e(t, n) {
                    return new e.fn.init(t, n)
                }
                K.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function(n, r) {
                    return r && r instanceof K && !(r instanceof e) && (r = e(r)), K.fn.init.call(this, n, r, t)
                }, e.fn.init.prototype = e.fn;
                var t = e(I);
                return e
            }
        }();
    var nn, rn, on, sn = /alpha\([^)]*\)/i,
        an = /opacity=([^)]*)/,
        un = /^(top|right|bottom|left)$/,
        ln = /^(none|table(?!-c[ea]).+)/,
        cn = /^margin/,
        dn = new RegExp("^(" + Z + ")(.*)$", "i"),
        hn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"),
        pn = new RegExp("^([-+])=(" + Z + ")", "i"),
        fn = {},
        mn = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        gn = {
            letterSpacing: 0,
            fontWeight: 400
        },
        vn = ["Top", "Right", "Bottom", "Left"],
        yn = ["Webkit", "O", "Moz", "ms"],
        bn = K.fn.toggle;
    K.fn.extend({
        css: function(e, n) {
            return K.access(this, function(e, n, r) {
                return r !== t ? K.style(e, n, r) : K.css(e, n)
            }, e, n, arguments.length > 1)
        },
        show: function() {
            return y(this, !0)
        },
        hide: function() {
            return y(this)
        },
        toggle: function(e, t) {
            var n = "boolean" == typeof e;
            return K.isFunction(e) && K.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
                (n ? e : v(this)) ? K(this).show(): K(this).hide()
            })
        }
    }), K.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = nn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": K.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, u = K.camelCase(n),
                    l = e.style;
                if (n = K.cssProps[u] || (K.cssProps[u] = g(l, u)), a = K.cssHooks[n] || K.cssHooks[u], r === t) return a && "get" in a && (o = a.get(e, !1, i)) !== t ? o : l[n];
                if (s = typeof r, "string" === s && (o = pn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(K.css(e, n)), s = "number"), !(null == r || "number" === s && isNaN(r) || ("number" !== s || K.cssNumber[u] || (r += "px"), a && "set" in a && (r = a.set(e, r, i)) === t))) try {
                    l[n] = r
                } catch (c) {}
            }
        },
        css: function(e, n, r, i) {
            var o, s, a, u = K.camelCase(n);
            return n = K.cssProps[u] || (K.cssProps[u] = g(e.style, u)), a = K.cssHooks[n] || K.cssHooks[u], a && "get" in a && (o = a.get(e, !0, i)), o === t && (o = nn(e, n)), "normal" === o && n in gn && (o = gn[n]), r || i !== t ? (s = parseFloat(o), r || K.isNumeric(s) ? s || 0 : o) : o
        },
        swap: function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            r = n.call(e);
            for (i in t) e.style[i] = o[i];
            return r
        }
    }), e.getComputedStyle ? nn = function(t, n) {
        var r, i, o, s, a = e.getComputedStyle(t, null),
            u = t.style;
        return a && (r = a[n], "" !== r || K.contains(t.ownerDocument, t) || (r = K.style(t, n)), hn.test(r) && cn.test(n) && (i = u.width, o = u.minWidth, s = u.maxWidth, u.minWidth = u.maxWidth = u.width = r, r = a.width, u.width = i, u.minWidth = o, u.maxWidth = s)), r
    } : I.documentElement.currentStyle && (nn = function(e, t) {
        var n, r, i = e.currentStyle && e.currentStyle[t],
            o = e.style;
        return null == i && o && o[t] && (i = o[t]), hn.test(i) && !un.test(t) && (n = o.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), o.left = "fontSize" === t ? "1em" : i, i = o.pixelLeft + "px", o.left = n, r && (e.runtimeStyle.left = r)), "" === i ? "auto" : i
    }), K.each(["height", "width"], function(e, t) {
        K.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? 0 === e.offsetWidth && ln.test(nn(e, "display")) ? K.swap(e, mn, function() {
                    return x(e, t, r)
                }) : x(e, t, r) : void 0
            },
            set: function(e, n, r) {
                return b(e, n, r ? w(e, t, r, K.support.boxSizing && "border-box" === K.css(e, "boxSizing")) : 0)
            }
        }
    }), K.support.opacity || (K.cssHooks.opacity = {
        get: function(e, t) {
            return an.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style,
                r = e.currentStyle,
                i = K.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = r && r.filter || n.filter || "";
            n.zoom = 1, t >= 1 && "" === K.trim(o.replace(sn, "")) && n.removeAttribute && (n.removeAttribute("filter"), r && !r.filter) || (n.filter = sn.test(o) ? o.replace(sn, i) : o + " " + i)
        }
    }), K(function() {
        K.support.reliableMarginRight || (K.cssHooks.marginRight = {
            get: function(e, t) {
                return K.swap(e, {
                    display: "inline-block"
                }, function() {
                    return t ? nn(e, "marginRight") : void 0
                })
            }
        }), !K.support.pixelPosition && K.fn.position && K.each(["top", "left"], function(e, t) {
            K.cssHooks[t] = {
                get: function(e, n) {
                    if (n) {
                        var r = nn(e, t);
                        return hn.test(r) ? K(e).position()[t] + "px" : r
                    }
                }
            }
        })
    }), K.expr && K.expr.filters && (K.expr.filters.hidden = function(e) {
        return 0 === e.offsetWidth && 0 === e.offsetHeight || !K.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || nn(e, "display"))
    }, K.expr.filters.visible = function(e) {
        return !K.expr.filters.hidden(e)
    }), K.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        K.cssHooks[e + t] = {
            expand: function(n) {
                var r, i = "string" == typeof n ? n.split(" ") : [n],
                    o = {};
                for (r = 0; 4 > r; r++) o[e + vn[r] + t] = i[r] || i[r - 2] || i[0];
                return o
            }
        }, cn.test(e) || (K.cssHooks[e + t].set = b)
    });
    var wn = /%20/g,
        xn = /\[\]$/,
        _n = /\r?\n/g,
        kn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        $n = /^(?:select|textarea)/i;
    K.fn.extend({
        serialize: function() {
            return K.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? K.makeArray(this.elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (this.checked || $n.test(this.nodeName) || kn.test(this.type))
            }).map(function(e, t) {
                var n = K(this).val();
                return null == n ? null : K.isArray(n) ? K.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(_n, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(_n, "\r\n")
                }
            }).get()
        }
    }), K.param = function(e, n) {
        var r, i = [],
            o = function(e, t) {
                t = K.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (n === t && (n = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function() {
            o(this.name, this.value)
        });
        else
            for (r in e) k(r, e[r], n, o);
        return i.join("&").replace(wn, "+")
    };
    var Cn, Sn, En = /#.*$/,
        Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Fn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Nn = /^(?:GET|HEAD)$/,
        jn = /^\/\//,
        Dn = /\?/,
        An = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ln = /([?&])_=[^&]*/,
        qn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Mn = K.fn.load,
        Hn = {},
        Pn = {},
        On = ["*/"] + ["*"];
    try {
        Cn = z.href
    } catch (Rn) {
        Cn = I.createElement("a"), Cn.href = "", Cn = Cn.href
    }
    Sn = qn.exec(Cn.toLowerCase()) || [], K.fn.load = function(e, n, r) {
        if ("string" != typeof e && Mn) return Mn.apply(this, arguments);
        if (!this.length) return this;
        var i, o, s, a = this,
            u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), K.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (o = "POST"), K.ajax({
            url: e,
            type: o,
            dataType: "html",
            data: n,
            complete: function(e, t) {
                r && a.each(r, s || [e.responseText, t, e])
            }
        }).done(function(e) {
            s = arguments, a.html(i ? K("<div>").append(e.replace(An, "")).find(i) : e)
        }), this
    }, K.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
        K.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), K.each(["get", "post"], function(e, n) {
        K[n] = function(e, r, i, o) {
            return K.isFunction(r) && (o = o || i, i = r, r = t), K.ajax({
                type: n,
                url: e,
                data: r,
                success: i,
                dataType: o
            })
        }
    }), K.extend({
        getScript: function(e, n) {
            return K.get(e, t, n, "script")
        },
        getJSON: function(e, t, n) {
            return K.get(e, t, n, "json")
        },
        ajaxSetup: function(e, t) {
            return t ? S(e, K.ajaxSettings) : (t = e, e = K.ajaxSettings), S(e, t), e
        },
        ajaxSettings: {
            url: Cn,
            isLocal: Fn.test(Sn[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": On
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": e.String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: $(Hn),
        ajaxTransport: $(Pn),
        ajax: function(e, n) {
            function r(e, n, r, s) {
                var l, d, y, b, x, k = n;
                2 !== w && (w = 2, u && clearTimeout(u), a = t, o = s || "", _.readyState = e > 0 ? 4 : 0, r && (b = E(h, _, r)), e >= 200 && 300 > e || 304 === e ? (h.ifModified && (x = _.getResponseHeader("Last-Modified"), x && (K.lastModified[i] = x), x = _.getResponseHeader("Etag"), x && (K.etag[i] = x)), 304 === e ? (k = "notmodified", l = !0) : (l = T(h, b), k = l.state, d = l.data, y = l.error, l = !y)) : (y = k, (!k || e) && (k = "error", 0 > e && (e = 0))), _.status = e, _.statusText = "" + (n || k), l ? m.resolveWith(p, [d, k, _]) : m.rejectWith(p, [_, k, y]), _.statusCode(v), v = t, c && f.trigger("ajax" + (l ? "Success" : "Error"), [_, h, l ? d : y]), g.fireWith(p, [_, k]), c && (f.trigger("ajaxComplete", [_, h]), --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, s, a, u, l, c, d, h = K.ajaxSetup({}, n),
                p = h.context || h,
                f = p !== h && (p.nodeType || p instanceof K) ? K(p) : K.event,
                m = K.Deferred(),
                g = K.Callbacks("once memory"),
                v = h.statusCode || {},
                y = {},
                b = {},
                w = 0,
                x = "canceled",
                _ = {
                    readyState: 0,
                    setRequestHeader: function(e, t) {
                        if (!w) {
                            var n = e.toLowerCase();
                            e = b[n] = b[n] || e, y[e] = t
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? o : null
                    },
                    getResponseHeader: function(e) {
                        var n;
                        if (2 === w) {
                            if (!s)
                                for (s = {}; n = Tn.exec(o);) s[n[1].toLowerCase()] = n[2];
                            n = s[e.toLowerCase()]
                        }
                        return n === t ? null : n
                    },
                    overrideMimeType: function(e) {
                        return w || (h.mimeType = e), this
                    },
                    abort: function(e) {
                        return e = e || x, a && a.abort(e), r(0, e), this
                    }
                };
            if (m.promise(_), _.success = _.done, _.error = _.fail, _.complete = g.add, _.statusCode = function(e) {
                    if (e) {
                        var t;
                        if (2 > w)
                            for (t in e) v[t] = [v[t], e[t]];
                        else t = e[_.status], _.always(t)
                    }
                    return this
                }, h.url = ((e || h.url) + "").replace(En, "").replace(jn, Sn[1] + "//"), h.dataTypes = K.trim(h.dataType || "*").toLowerCase().split(tt), null == h.crossDomain && (l = qn.exec(h.url.toLowerCase()), h.crossDomain = !(!l || l[1] == Sn[1] && l[2] == Sn[2] && (l[3] || ("http:" === l[1] ? 80 : 443)) == (Sn[3] || ("http:" === Sn[1] ? 80 : 443)))), h.data && h.processData && "string" != typeof h.data && (h.data = K.param(h.data, h.traditional)), C(Hn, h, n, _), 2 === w) return _;
            if (c = h.global, h.type = h.type.toUpperCase(), h.hasContent = !Nn.test(h.type), c && 0 === K.active++ && K.event.trigger("ajaxStart"), !h.hasContent && (h.data && (h.url += (Dn.test(h.url) ? "&" : "?") + h.data, delete h.data), i = h.url, h.cache === !1)) {
                var k = K.now(),
                    $ = h.url.replace(Ln, "$1_=" + k);
                h.url = $ + ($ === h.url ? (Dn.test(h.url) ? "&" : "?") + "_=" + k : "")
            }(h.data && h.hasContent && h.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", h.contentType), h.ifModified && (i = i || h.url, K.lastModified[i] && _.setRequestHeader("If-Modified-Since", K.lastModified[i]), K.etag[i] && _.setRequestHeader("If-None-Match", K.etag[i])), _.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + On + "; q=0.01" : "") : h.accepts["*"]);
            for (d in h.headers) _.setRequestHeader(d, h.headers[d]);
            if (h.beforeSend && (h.beforeSend.call(p, _, h) === !1 || 2 === w)) return _.abort();
            x = "abort";
            for (d in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) _[d](h[d]);
            if (a = C(Pn, h, n, _)) {
                _.readyState = 1, c && f.trigger("ajaxSend", [_, h]), h.async && h.timeout > 0 && (u = setTimeout(function() {
                    _.abort("timeout")
                }, h.timeout));
                try {
                    w = 1, a.send(y, r)
                } catch (S) {
                    if (!(2 > w)) throw S;
                    r(-1, S)
                }
            } else r(-1, "No Transport");
            return _
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var In = [],
        zn = /\?/,
        Bn = /(=)\?(?=&|$)|\?\?/,
        Wn = K.now();
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = In.pop() || K.expando + "_" + Wn++;
            return this[e] = !0, e
        }
    }), K.ajaxPrefilter("json jsonp", function(n, r, i) {
        var o, s, a, u = n.data,
            l = n.url,
            c = n.jsonp !== !1,
            d = c && Bn.test(l),
            h = c && !d && "string" == typeof u && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(u);
        return "jsonp" === n.dataTypes[0] || d || h ? (o = n.jsonpCallback = K.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, s = e[o], d ? n.url = l.replace(Bn, "$1" + o) : h ? n.data = u.replace(Bn, "$1" + o) : c && (n.url += (zn.test(l) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return a || K.error(o + " was not called"), a[0]
        }, n.dataTypes[0] = "json", e[o] = function() {
            a = arguments
        }, i.always(function() {
            e[o] = s, n[o] && (n.jsonpCallback = r.jsonpCallback, In.push(o)), a && K.isFunction(s) && s(a[0]), a = s = t
        }), "script") : void 0
    }), K.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(e) {
                return K.globalEval(e), e
            }
        }
    }), K.ajaxPrefilter("script", function(e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), K.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, r = I.head || I.getElementsByTagName("head")[0] || I.documentElement;
            return {
                send: function(i, o) {
                    n = I.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
                        (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || o(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                },
                abort: function() {
                    n && n.onload(0, 1)
                }
            }
        }
    });
    var Gn, Un = e.ActiveXObject ? function() {
            for (var e in Gn) Gn[e](0, 1)
        } : !1,
        Vn = 0;
    K.ajaxSettings.xhr = e.ActiveXObject ? function() {
            return !this.isLocal && F() || N()
        } : F,
        function(e) {
            K.extend(K.support, {
                ajax: !!e,
                cors: !!e && "withCredentials" in e
            })
        }(K.ajaxSettings.xhr()), K.support.ajax && K.ajaxTransport(function(n) {
            if (!n.crossDomain || K.support.cors) {
                var r;
                return {
                    send: function(i, o) {
                        var s, a, u = n.xhr();
                        if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)
                            for (a in n.xhrFields) u[a] = n.xhrFields[a];
                        n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in i) u.setRequestHeader(a, i[a])
                        } catch (l) {}
                        u.send(n.hasContent && n.data || null), r = function(e, i) {
                            var a, l, c, d, h;
                            try {
                                if (r && (i || 4 === u.readyState))
                                    if (r = t, s && (u.onreadystatechange = K.noop, Un && delete Gn[s]), i) 4 !== u.readyState && u.abort();
                                    else {
                                        a = u.status, c = u.getAllResponseHeaders(), d = {}, h = u.responseXML, h && h.documentElement && (d.xml = h);
                                        try {
                                            d.text = u.responseText
                                        } catch (e) {}
                                        try {
                                            l = u.statusText
                                        } catch (p) {
                                            l = ""
                                        }
                                        a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                                    }
                            } catch (f) {
                                i || o(-1, f)
                            }
                            d && o(a, l, d, c)
                        }, n.async ? 4 === u.readyState ? setTimeout(r, 0) : (s = ++Vn, Un && (Gn || (Gn = {}, K(e).unload(Un)), Gn[s] = r), u.onreadystatechange = r) : r()
                    },
                    abort: function() {
                        r && r(0, 1)
                    }
                }
            }
        });
    var Xn, Qn, Yn = /^(?:toggle|show|hide)$/,
        Jn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"),
        Kn = /queueHooks$/,
        Zn = [q],
        er = {
            "*": [function(e, t) {
                var n, r, i, o = this.createTween(e, t),
                    s = Jn.exec(t),
                    a = o.cur(),
                    u = +a || 0,
                    l = 1;
                if (s) {
                    if (n = +s[2], r = s[3] || (K.cssNumber[e] ? "" : "px"), "px" !== r && u) {
                        u = K.css(o.elem, e, !0) || n || 1;
                        do i = l = l || ".5", u /= l, K.style(o.elem, e, u + r), l = o.cur() / a; while (1 !== l && l !== i)
                    }
                    o.unit = r, o.start = u, o.end = s[1] ? u + (s[1] + 1) * n : n
                }
                return o
            }]
        };
    K.Animation = K.extend(A, {
        tweener: function(e, t) {
            K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], er[n] = er[n] || [], er[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? Zn.unshift(e) : Zn.push(e)
        }
    }), K.Tween = M, M.prototype = {
        constructor: M,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (K.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : M.propHooks._default.set(this), this
        }
    }, M.prototype.init.prototype = M.prototype, M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, !1, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            },
            set: function(e) {
                K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, M.propHooks.scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, K.each(["toggle", "show", "hide"], function(e, t) {
        var n = K.fn[t];
        K.fn[t] = function(r, i, o) {
            return null == r || "boolean" == typeof r || !e && K.isFunction(r) && K.isFunction(i) ? n.apply(this, arguments) : this.animate(H(t, !0), r, i, o)
        }
    }), K.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(v).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = K.isEmptyObject(e),
                o = K.speed(t, n, r),
                s = function() {
                    var t = A(this, K.extend({}, e), o);
                    i && t.stop(!0)
                };
            return i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, n, r) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
                var t = !0,
                    n = null != e && e + "queueHooks",
                    o = K.timers,
                    s = K._data(this);
                if (n) s[n] && s[n].stop && i(s[n]);
                else
                    for (n in s) s[n] && s[n].stop && Kn.test(n) && i(s[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && K.dequeue(this, e)
            })
        }
    }), K.each({
        slideDown: H("show"),
        slideUp: H("hide"),
        slideToggle: H("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        K.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), K.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? K.extend({}, e) : {
            complete: n || !n && t || K.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !K.isFunction(t) && t
        };
        return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue)
        }, r
    }, K.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, K.timers = [], K.fx = M.prototype.init, K.fx.tick = function() {
        for (var e, t = K.timers, n = 0; n < t.length; n++) e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || K.fx.stop()
    }, K.fx.timer = function(e) {
        e() && K.timers.push(e) && !Qn && (Qn = setInterval(K.fx.tick, K.fx.interval))
    }, K.fx.interval = 13, K.fx.stop = function() {
        clearInterval(Qn), Qn = null
    }, K.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, K.fx.step = {}, K.expr && K.expr.filters && (K.expr.filters.animated = function(e) {
        return K.grep(K.timers, function(t) {
            return e === t.elem
        }).length
    });
    var tr = /^(?:body|html)$/i;
    K.fn.offset = function(e) {
        if (arguments.length) return e === t ? this : this.each(function(t) {
            K.offset.setOffset(this, e, t)
        });
        var n, r, i, o, s, a, u, l, c, d, h = this[0],
            p = h && h.ownerDocument;
        if (p) return (i = p.body) === h ? K.offset.bodyOffset(h) : (r = p.documentElement, K.contains(r, h) ? (n = h.getBoundingClientRect(), o = P(p), s = r.clientTop || i.clientTop || 0, a = r.clientLeft || i.clientLeft || 0, u = o.pageYOffset || r.scrollTop, l = o.pageXOffset || r.scrollLeft, c = n.top + u - s, d = n.left + l - a, {
            top: c,
            left: d
        }) : {
            top: 0,
            left: 0
        })
    }, K.offset = {
        bodyOffset: function(e) {
            var t = e.offsetTop,
                n = e.offsetLeft;
            return K.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(K.css(e, "marginTop")) || 0, n += parseFloat(K.css(e, "marginLeft")) || 0), {
                top: t,
                left: n
            }
        },
        setOffset: function(e, t, n) {
            var r = K.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, s = K(e),
                a = s.offset(),
                u = K.css(e, "top"),
                l = K.css(e, "left"),
                c = ("absolute" === r || "fixed" === r) && K.inArray("auto", [u, l]) > -1,
                d = {},
                h = {};
            c ? (h = s.position(), i = h.top, o = h.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, a)), null != t.top && (d.top = t.top - a.top + i), null != t.left && (d.left = t.left - a.left + o), "using" in t ? t.using.call(e, d) : s.css(d)
        }
    }, K.fn.extend({
        position: function() {
            if (this[0]) {
                var e = this[0],
                    t = this.offsetParent(),
                    n = this.offset(),
                    r = tr.test(t[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : t.offset();
                return n.top -= parseFloat(K.css(e, "marginTop")) || 0, n.left -= parseFloat(K.css(e, "marginLeft")) || 0, r.top += parseFloat(K.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(K.css(t[0], "borderLeftWidth")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || I.body; e && !tr.test(e.nodeName) && "static" === K.css(e, "position");) e = e.offsetParent;
                return e || I.body
            })
        }
    }), K.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, n) {
        var r = /Y/.test(n);
        K.fn[e] = function(i) {
            return K.access(this, function(e, i, o) {
                var s = P(e);
                return o === t ? s ? n in s ? s[n] : s.document.documentElement[i] : e[i] : (s ? s.scrollTo(r ? K(s).scrollLeft() : o, r ? o : K(s).scrollTop()) : e[i] = o, void 0)
            }, e, i, arguments.length, null)
        }
    }), K.each({
        Height: "height",
        Width: "width"
    }, function(e, n) {
        K.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        }, function(r, i) {
            K.fn[i] = function(i, o) {
                var s = arguments.length && (r || "boolean" != typeof i),
                    a = r || (i === !0 || o === !0 ? "margin" : "border");
                return K.access(this, function(n, r, i) {
                    var o;
                    return K.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? K.css(n, r, i, a) : K.style(n, r, i, a)
                }, n, s ? i : t, s, null)
            }
        })
    }), e.jQuery = e.$ = K, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return K
    })
}(window),
function(e, t) {
    var n = function() {
        var t = e._data(document, "events");
        return t && t.click && e.grep(t.click, function(e) {
            return "rails" === e.namespace
        }).length
    };
    n() && e.error("jquery-ujs has already been loaded!");
    var r;
    e.rails = r = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input:file",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(t, n, r) {
            var i = e.Event(n);
            return t.trigger(i, r), i.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(n) {
            var i, o, s, a, u, l, c, d;
            if (r.fire(n, "ajax:before")) {
                if (a = n.data("cross-domain"), u = a === t ? null : a, l = n.data("with-credentials") || null, c = n.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, n.is("form")) {
                    i = n.attr("method"), o = n.attr("action"), s = n.serializeArray();
                    var h = n.data("ujs:submit-button");
                    h && (s.push(h), n.data("ujs:submit-button", null))
                } else n.is(r.inputChangeSelector) ? (i = n.data("method"), o = n.data("url"), s = n.serialize(), n.data("params") && (s = s + "&" + n.data("params"))) : (i = n.data("method"), o = r.href(n), s = n.data("params") || null);
                d = {
                    type: i || "GET",
                    data: s,
                    dataType: c,
                    beforeSend: function(e, i) {
                        return i.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + i.accepts.script), r.fire(n, "ajax:beforeSend", [e, i])
                    },
                    success: function(e, t, r) {
                        n.trigger("ajax:success", [e, t, r])
                    },
                    complete: function(e, t) {
                        n.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, r) {
                        n.trigger("ajax:error", [e, t, r])
                    },
                    xhrFields: {
                        withCredentials: l
                    },
                    crossDomain: u
                }, o && (d.url = o);
                var p = r.ajax(d);
                return n.trigger("ajax:send", p), p
            }
            return !1
        },
        handleMethod: function(n) {
            var i = r.href(n),
                o = n.data("method"),
                s = n.attr("target"),
                a = e("meta[name=csrf-token]").attr("content"),
                u = e("meta[name=csrf-param]").attr("content"),
                l = e('<form method="post" action="' + i + '"></form>'),
                c = '<input name="_method" value="' + o + '" type="hidden" />';
            u !== t && a !== t && (c += '<input name="' + u + '" value="' + a + '" type="hidden" />'), s && l.attr("target", s), l.hide().append(c).appendTo("body"), l.submit()
        },
        disableFormElements: function(t) {
            t.find(r.disableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with", t[n]()), t[n](t.data("disable-with")), t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(r.enableSelector).each(function() {
                var t = e(this),
                    n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")), t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t, n = e.data("confirm"),
                i = !1;
            return n ? (r.fire(e, "confirm") && (i = r.confirm(n), t = r.fire(e, "confirm:complete", [i])), i && t) : !0
        },
        blankInputs: function(t, n, r) {
            var i, o, s = e(),
                a = n || "input,textarea",
                u = t.find(a);
            return u.each(function() {
                if (i = e(this), o = i.is(":checkbox,:radio") ? i.is(":checked") : i.val(), !o == !r) {
                    if (i.is(":radio") && u.filter('input:radio:checked[name="' + i.attr("name") + '"]').length) return !0;
                    s = s.add(i)
                }
            }), s.length ? s : !1
        },
        nonBlankInputs: function(e, t) {
            return r.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"), t.stopImmediatePropagation(), !1
        },
        callFormSubmitBindings: function(n, r) {
            var i = n.data("events"),
                o = !0;
            return i !== t && i.submit !== t && e.each(i.submit, function(e, t) {
                return "function" == typeof t.handler ? o = t.handler(r) : void 0
            }), o
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()), e.html(e.data("disable-with")), e.bind("click.railsDisable", function(e) {
                return r.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.data("ujs:enable-with", !1)), e.unbind("click.railsDisable")
        }
    }, r.fire(e(document), "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, n) {
        e.crossDomain || r.CSRFProtection(n)
    }), e(document).delegate(r.linkDisableSelector, "ajax:complete", function() {
        r.enableElement(e(this))
    }), e(document).delegate(r.linkClickSelector, "click.rails", function(n) {
        var i = e(this),
            o = i.data("method"),
            s = i.data("params");
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (i.is(r.linkDisableSelector) && r.disableElement(i), i.data("remote") !== t) {
            if (!(!n.metaKey && !n.ctrlKey || o && "GET" !== o || s)) return !0;
            var a = r.handleRemote(i);
            return a === !1 ? r.enableElement(i) : a.error(function() {
                r.enableElement(i)
            }), !1
        }
        return i.data("method") ? (r.handleMethod(i), !1) : void 0
    }), e(document).delegate(r.inputChangeSelector, "change.rails", function(t) {
        var n = e(this);
        return r.allowAction(n) ? (r.handleRemote(n), !1) : r.stopEverything(t)
    }), e(document).delegate(r.formSubmitSelector, "submit.rails", function(n) {
        var i = e(this),
            o = i.data("remote") !== t,
            s = r.blankInputs(i, r.requiredInputSelector),
            a = r.nonBlankInputs(i, r.fileInputSelector);
        if (!r.allowAction(i)) return r.stopEverything(n);
        if (s && i.attr("novalidate") == t && r.fire(i, "ajax:aborted:required", [s])) return r.stopEverything(n);
        if (o) {
            if (a) {
                setTimeout(function() {
                    r.disableFormElements(i)
                }, 13);
                var u = r.fire(i, "ajax:aborted:file", [a]);
                return u || setTimeout(function() {
                    r.enableFormElements(i)
                }, 13), u
            }
            return !e.support.submitBubbles && e().jquery < "1.7" && r.callFormSubmitBindings(i, n) === !1 ? r.stopEverything(n) : (r.handleRemote(i), !1)
        }
        setTimeout(function() {
            r.disableFormElements(i)
        }, 13)
    }), e(document).delegate(r.formInputClickSelector, "click.rails", function(t) {
        var n = e(this);
        if (!r.allowAction(n)) return r.stopEverything(t);
        var i = n.attr("name"),
            o = i ? {
                name: i,
                value: n.val()
            } : null;
        n.closest("form").data("ujs:submit-button", o)
    }), e(document).delegate(r.formSubmitSelector, "ajax:beforeSend.rails", function(t) {
        this == t.target && r.disableFormElements(e(this))
    }), e(document).delegate(r.formSubmitSelector, "ajax:complete.rails", function(t) {
        this == t.target && r.enableFormElements(e(this))
    }), e(function() {
        csrf_token = e("meta[name=csrf-token]").attr("content"), csrf_param = e("meta[name=csrf-param]").attr("content"), e('form input[name="' + csrf_param + '"]').val(csrf_token)
    }))
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    var t = Array.prototype.slice,
        n = Array.prototype.splice,
        r = {
            topSpacing: 0,
            bottomSpacing: 0,
            className: "is-sticky",
            wrapperClassName: "sticky-wrapper",
            center: !1,
            getWidthFrom: "",
            widthFromWrapper: !0,
            responsiveWidth: !1,
            zIndex: "auto"
        },
        i = e(window),
        o = e(document),
        s = [],
        a = i.height(),
        u = function() {
            for (var t = i.scrollTop(), n = o.height(), r = n - a, u = t > r ? r - t : 0, l = 0, c = s.length; c > l; l++) {
                var d = s[l],
                    h = d.stickyWrapper.offset().top,
                    p = h - d.topSpacing - u;
                if (d.stickyWrapper.css("height", d.stickyElement.outerHeight()), p >= t) null !== d.currentTop && (d.stickyElement.css({
                    width: "",
                    position: "",
                    top: "",
                    "z-index": ""
                }), d.stickyElement.parent().removeClass(d.className), d.stickyElement.trigger("sticky-end", [d]), d.currentTop = null);
                else {
                    var f = n - d.stickyElement.outerHeight() - d.topSpacing - d.bottomSpacing - t - u;
                    if (0 > f ? f += d.topSpacing : f = d.topSpacing, d.currentTop !== f) {
                        var m;
                        d.getWidthFrom ? m = e(d.getWidthFrom).width() || null : d.widthFromWrapper && (m = d.stickyWrapper.width()), null == m && (m = d.stickyElement.width()), d.stickyElement.css("width", m).css("position", "fixed").css("top", f).css("z-index", d.zIndex), d.stickyElement.parent().addClass(d.className), null === d.currentTop ? d.stickyElement.trigger("sticky-start", [d]) : d.stickyElement.trigger("sticky-update", [d]), d.currentTop === d.topSpacing && d.currentTop > f || null === d.currentTop && f < d.topSpacing ? d.stickyElement.trigger("sticky-bottom-reached", [d]) : null !== d.currentTop && f === d.topSpacing && d.currentTop < f && d.stickyElement.trigger("sticky-bottom-unreached", [d]), d.currentTop = f
                    }
                    var g = d.stickyWrapper.parent(),
                        v = d.stickyElement.offset().top + d.stickyElement.outerHeight() >= g.offset().top + g.outerHeight() && d.stickyElement.offset().top <= d.topSpacing;
                    v ? d.stickyElement.css("position", "absolute").css("top", "").css("bottom", 0).css("z-index", "") : d.stickyElement.css("position", "fixed").css("top", f).css("bottom", "").css("z-index", d.zIndex)
                }
            }
        },
        l = function() {
            a = i.height();
            for (var t = 0, n = s.length; n > t; t++) {
                var r = s[t],
                    o = null;
                r.getWidthFrom ? r.responsiveWidth && (o = e(r.getWidthFrom).width()) : r.widthFromWrapper && (o = r.stickyWrapper.width()), null != o && r.stickyElement.css("width", o)
            }
        },
        c = {
            init: function(t) {
                var n = e.extend({}, r, t);
                return this.each(function() {
                    var t = e(this),
                        i = t.attr("id"),
                        o = i ? i + "-" + r.wrapperClassName : r.wrapperClassName,
                        a = e("<div></div>").attr("id", o).addClass(n.wrapperClassName);
                    t.wrapAll(a);
                    var u = t.parent();
                    n.center && u.css({
                        width: t.outerWidth(),
                        marginLeft: "auto",
                        marginRight: "auto"
                    }), "right" === t.css("float") && t.css({
                        "float": "none"
                    }).parent().css({
                        "float": "right"
                    }), n.stickyElement = t, n.stickyWrapper = u, n.currentTop = null, s.push(n), c.setWrapperHeight(this), c.setupChangeListeners(this)
                })
            },
            setWrapperHeight: function(t) {
                var n = e(t),
                    r = n.parent();
                r && r.css("height", n.outerHeight())
            },
            setupChangeListeners: function(e) {
                if (window.MutationObserver) {
                    var t = new window.MutationObserver(function(t) {
                        (t[0].addedNodes.length || t[0].removedNodes.length) && c.setWrapperHeight(e)
                    });
                    t.observe(e, {
                        subtree: !0,
                        childList: !0
                    })
                } else e.addEventListener("DOMNodeInserted", function() {
                    c.setWrapperHeight(e)
                }, !1), e.addEventListener("DOMNodeRemoved", function() {
                    c.setWrapperHeight(e)
                }, !1)
            },
            update: u,
            unstick: function() {
                return this.each(function() {
                    for (var t = this, r = e(t), i = -1, o = s.length; o-- > 0;) s[o].stickyElement.get(0) === t && (n.call(s, o, 1), i = o); - 1 !== i && (r.unwrap(), r.css({
                        width: "",
                        position: "",
                        top: "",
                        "float": "",
                        "z-index": ""
                    }))
                })
            }
        };
    window.addEventListener ? (window.addEventListener("scroll", u, !1), window.addEventListener("resize", l, !1)) : window.attachEvent && (window.attachEvent("onscroll", u), window.attachEvent("onresize", l)), e.fn.sticky = function(n) {
        return c[n] ? c[n].apply(this, t.call(arguments, 1)) : "object" != typeof n && n ? (e.error("Method " + n + " does not exist on jQuery.sticky"), void 0) : c.init.apply(this, arguments)
    }, e.fn.unstick = function(n) {
        return c[n] ? c[n].apply(this, t.call(arguments, 1)) : "object" != typeof n && n ? (e.error("Method " + n + " does not exist on jQuery.sticky"), void 0) : c.unstick.apply(this, arguments)
    }, e(function() {
        setTimeout(u, 0)
    })
}),
/**
 * jGestures: a jQuery plugin for gesture events
 * Copyright 2010-2011 Neue Digitale / Razorfish GmbH
 * Copyright 2011-2012, Razorfish GmbH
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * @copyright Razorfish GmbH
 * @author martin.krause@razorfish.de
 * @version 0.90-shake
 * @requires jQuery JavaScript Library v1.4.2 - http://jquery.com/- Copyright 2010, John Resig- Dual licensed under the MIT or GPL Version 2 licenses. http://jquery.org/license
 */
function(e) {
    function t(e) {
        e.startMove = e.startMove ? e.startMove : {
            startX: null,
            startY: null,
            timestamp: null
        };
        var t, n, r = (new Date).getTime();
        return e.touches && (n = [{
            lastX: e.deltaX,
            lastY: e.deltaY,
            moved: null,
            startX: e.screenX - e.startMove.screenX,
            startY: e.screenY - e.startMove.screenY
        }], t = {
            vector: e.vector || null,
            orientation: window.orientation || null,
            lastX: n[0].lastX > 0 ? 1 : n[0].lastX < 0 ? -1 : 0,
            lastY: n[0].lastY > 0 ? 1 : n[0].lastY < 0 ? -1 : 0,
            startX: n[0].startX > 0 ? 1 : n[0].startX < 0 ? -1 : 0,
            startY: n[0].startY > 0 ? 1 : n[0].startY < 0 ? -1 : 0
        }, n[0].moved = Math.sqrt(Math.pow(Math.abs(n[0].startX), 2) + Math.pow(Math.abs(n[0].startY), 2))), {
            type: e.type || null,
            originalEvent: e.event || null,
            delta: n || null,
            direction: t || {
                orientation: window.orientation || null,
                vector: e.vector || null
            },
            duration: e.duration ? e.duration : e.startMove.timestamp ? r - e.timestamp : null,
            rotation: e.rotation || null,
            scale: e.scale || null,
            description: e.description || [e.type, ":", e.touches, ":", 0 != n[0].lastX ? n[0].lastX > 0 ? "right" : "left" : "steady", ":", 0 != n[0].lastY ? n[0].lastY > 0 ? "down" : "up" : "steady"].join("")
        }
    }

    function n() {
        var t = ["landscape:clockwise:", "portrait:default:", "landscape:counterclockwise:", "portrait:upsidedown:"];
        e(window).triggerHandler("orientationchange", {
            direction: {
                orientation: window.orientation
            },
            description: ["orientationchange:", t[window.orientation / 90 + 1], window.orientation].join("")
        })
    }

    function r(n) {
        var r, i, o, s, a = jQuery(window),
            u = a.data("ojQueryGestures"),
            l = e.jGestures.defaults.thresholdShake,
            c = u.oDeviceMotionLastDevicePosition || {
                accelerationIncludingGravity: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                shake: {
                    eventCount: 0,
                    intervalsPassed: 0,
                    intervalsFreeze: 0
                },
                shakeleftright: {
                    eventCount: 0,
                    intervalsPassed: 0,
                    intervalsFreeze: 0
                },
                shakefrontback: {
                    eventCount: 0,
                    intervalsPassed: 0,
                    intervalsFreeze: 0
                },
                shakeupdown: {
                    eventCount: 0,
                    intervalsPassed: 0,
                    intervalsFreeze: 0
                }
            },
            d = {
                accelerationIncludingGravity: {
                    x: n.accelerationIncludingGravity.x,
                    y: n.accelerationIncludingGravity.y,
                    z: n.accelerationIncludingGravity.z
                },
                shake: {
                    eventCount: c.shake.eventCount,
                    intervalsPassed: c.shake.intervalsPassed,
                    intervalsFreeze: c.shake.intervalsFreeze
                },
                shakeleftright: {
                    eventCount: c.shakeleftright.eventCount,
                    intervalsPassed: c.shakeleftright.intervalsPassed,
                    intervalsFreeze: c.shakeleftright.intervalsFreeze
                },
                shakefrontback: {
                    eventCount: c.shakefrontback.eventCount,
                    intervalsPassed: c.shakefrontback.intervalsPassed,
                    intervalsFreeze: c.shakefrontback.intervalsFreeze
                },
                shakeupdown: {
                    eventCount: c.shakeupdown.eventCount,
                    intervalsPassed: c.shakeupdown.intervalsPassed,
                    intervalsFreeze: c.shakeupdown.intervalsFreeze
                }
            };
        for (r in u) {
            switch (r) {
                case "shake":
                case "shakeleftright":
                case "shakefrontback":
                case "shakeupdown":
                    if (i = [], o = [], i.push(r), ++d[r].intervalsFreeze > l.freezeShakes && d[r].intervalsFreeze < 2 * l.freezeShakes) break;
                    d[r].intervalsFreeze = 0, d[r].intervalsPassed++, "shake" !== r && "shakeleftright" !== r || !(d.accelerationIncludingGravity.x > l.leftright.sensitivity || d.accelerationIncludingGravity.x < -1 * l.leftright.sensitivity) || (i.push("leftright"), i.push("x-axis")), "shake" !== r && "shakefrontback" !== r || !(d.accelerationIncludingGravity.y > l.frontback.sensitivity || d.accelerationIncludingGravity.y < -1 * l.frontback.sensitivity) || (i.push("frontback"), i.push("y-axis")), "shake" !== r && "shakeupdown" !== r || !(d.accelerationIncludingGravity.z + 9.81 > l.updown.sensitivity || d.accelerationIncludingGravity.z + 9.81 < -1 * l.updown.sensitivity) || (i.push("updown"), i.push("z-axis")), i.length > 1 && (++d[r].eventCount == l.requiredShakes && d[r].intervalsPassed < l.freezeShakes ? (a.triggerHandler(r, t({
                        type: r,
                        description: i.join(":"),
                        event: n,
                        duration: 5 * d[r].intervalsPassed
                    })), d[r].eventCount = 0, d[r].intervalsPassed = 0, d[r].intervalsFreeze = l.freezeShakes + 1) : d[r].eventCount == l.requiredShakes && d[r].intervalsPassed > l.freezeShakes && (d[r].eventCount = 0, d[r].intervalsPassed = 0))
            }
            s = {}, s.oDeviceMotionLastDevicePosition = d, a.data("ojQueryGestures", e.extend(!0, u, s))
        }
    }

    function i(t) {
        var n = jQuery(t.currentTarget);
        n.triggerHandler(e.jGestures.events.touchstart, t), e.hasGestures ? (t.currentTarget.addEventListener("touchmove", o, !1), t.currentTarget.addEventListener("touchend", s, !1)) : (n.bind("mousemove", o), n.bind("mouseup", s));
        var r = n.data("ojQueryGestures"),
            i = t.touches ? t.touches[0] : t,
            a = {};
        a.oLastSwipemove = {
            screenX: i.screenX,
            screenY: i.screenY,
            timestamp: (new Date).getTime()
        }, a.oStartTouch = {
            screenX: i.screenX,
            screenY: i.screenY,
            timestamp: (new Date).getTime()
        }, n.data("ojQueryGestures", e.extend(!0, r, a))
    }

    function o(n) {
        var r, i = jQuery(n.currentTarget),
            o = i.data("ojQueryGestures"),
            s = !!n.touches,
            a = s ? n.changedTouches[0].screenX : n.screenX,
            u = s ? n.changedTouches[0].screenY : n.screenY,
            l = o.oLastSwipemove,
            c = a - l.screenX,
            d = u - l.screenY;
        o.oLastSwipemove && (r = t({
            type: "swipemove",
            touches: s ? n.touches.length : "1",
            screenY: u,
            screenX: a,
            deltaY: d,
            deltaX: c,
            startMove: l,
            event: n,
            timestamp: l.timestamp
        }), i.triggerHandler(r.type, r));
        var h = {},
            p = n.touches ? n.touches[0] : n;
        h.oLastSwipemove = {
            screenX: p.screenX,
            screenY: p.screenY,
            timestamp: (new Date).getTime()
        }, i.data("ojQueryGestures", e.extend(!0, o, h))
    }

    function s(n) {
        var r = jQuery(n.currentTarget),
            i = !!n.changedTouches,
            a = i ? n.changedTouches.length : "1",
            u = i ? n.changedTouches[0].screenX : n.screenX,
            l = i ? n.changedTouches[0].screenY : n.screenY;
        r.triggerHandler(e.jGestures.events.touchendStart, n), e.hasGestures ? (n.currentTarget.removeEventListener("touchmove", o, !1), n.currentTarget.removeEventListener("touchend", s, !1)) : (r.unbind("mousemove", o), r.unbind("mouseup", s));
        var c, d, h, p, f, m, g, v = r.data("ojQueryGestures"),
            y = Math.abs(v.oStartTouch.screenX - u) > e.jGestures.defaults.thresholdMove || Math.abs(v.oStartTouch.screenY - l) > e.jGestures.defaults.thresholdMove ? !0 : !1,
            b = Math.abs(v.oStartTouch.screenX - u) > e.jGestures.defaults.thresholdSwipe || Math.abs(v.oStartTouch.screenY - l) > e.jGestures.defaults.thresholdSwipe ? !0 : !1,
            w = ["zero", "one", "two", "three", "four"];
        for (c in v) {
            switch (d = v.oStartTouch, h = {}, u = i ? n.changedTouches[0].screenX : n.screenX, l = i ? n.changedTouches[0].screenY : n.screenY, p = u - d.screenX, f = l - d.screenY, m = t({
                type: "swipe",
                touches: a,
                screenY: l,
                screenX: u,
                deltaY: f,
                deltaX: p,
                startMove: d,
                event: n,
                timestamp: d.timestamp
            }), g = !1, c) {
                case "swipeone":
                    if (i === !1 && 1 == a && y === !1) break;
                    (i === !1 || 1 == a && y === !0 && b === !0) && (g = !0, m.type = ["swipe", w[a]].join(""), r.triggerHandler(m.type, m));
                    break;
                case "swipetwo":
                    i && 2 == a && y === !0 && b === !0 && (g = !0, m.type = ["swipe", w[a]].join(""), r.triggerHandler(m.type, m));
                    break;
                case "swipethree":
                    i && 3 == a && y === !0 && b === !0 && (g = !0, m.type = ["swipe", w[a]].join(""), r.triggerHandler(m.type, m));
                    break;
                case "swipefour":
                    i && 4 == a && y === !0 && b === !0 && (g = !0, m.type = ["swipe", w[a]].join(""), r.triggerHandler(m.type, m));
                    break;
                case "swipeup":
                case "swiperightup":
                case "swiperight":
                case "swiperightdown":
                case "swipedown":
                case "swipeleftdown":
                case "swipeleft":
                case "swipeleftup":
                    i && y === !0 && b === !0 && (g = !0, m.type = ["swipe", 0 != m.delta[0].lastX ? m.delta[0].lastX > 0 ? "right" : "left" : "", 0 != m.delta[0].lastY ? m.delta[0].lastY > 0 ? "down" : "up" : ""].join(""), r.triggerHandler(m.type, m));
                    break;
                case "tapone":
                case "taptwo":
                case "tapthree":
                case "tapfour":
                    y !== !0 && g !== !0 && w[a] == c.slice(3) && (m.description = ["tap", w[a]].join(""), m.type = ["tap", w[a]].join(""), r.triggerHandler(m.type, m))
            }
            var x = {};
            r.data("ojQueryGestures", e.extend(!0, v, x)), r.data("ojQueryGestures", e.extend(!0, v, x))
        }
        r.triggerHandler(e.jGestures.events.touchendProcessed, n)
    }

    function a(t) {
        var n = jQuery(t.currentTarget);
        n.triggerHandler(e.jGestures.events.gesturestart, t);
        var r = n.data("ojQueryGestures"),
            i = {};
        i.oStartTouch = {
            timestamp: (new Date).getTime()
        }, n.data("ojQueryGestures", e.extend(!0, r, i))
    }

    function u(n) {
        var r, i, o, s, a = jQuery(n.currentTarget),
            u = a.data("ojQueryGestures");
        for (s in u) switch (s) {
            case "pinch":
                r = n.scale, (1 > r && r % 1 < 1 - e.jGestures.defaults.thresholdPinchclose || r > 1 && r % 1 > e.jGestures.defaults.thresholdPinchopen) && (i = 1 > r ? -1 : 1, o = t({
                    type: "pinch",
                    scale: r,
                    touches: null,
                    startMove: u.oStartTouch,
                    event: n,
                    timestamp: u.oStartTouch.timestamp,
                    vector: i,
                    description: ["pinch:", i, ":", 1 > r ? "close" : "open"].join("")
                }), a.triggerHandler(o.type, o));
                break;
            case "rotate":
                r = n.rotation, (1 > r && -1 * r > e.jGestures.defaults.thresholdRotateccw || r > 1 && r > e.jGestures.defaults.thresholdRotatecw) && (i = 1 > r ? -1 : 1, o = t({
                    type: "rotate",
                    rotation: r,
                    touches: null,
                    startMove: u.oStartTouch,
                    event: n,
                    timestamp: u.oStartTouch.timestamp,
                    vector: i,
                    description: ["rotate:", i, ":", 1 > r ? "counterclockwise" : "clockwise"].join("")
                }), a.triggerHandler(o.type, o))
        }
    }

    function l(n) {
        var r = jQuery(n.currentTarget);
        r.triggerHandler(e.jGestures.events.gestureendStart, n);
        var i, o, s = r.data("ojQueryGestures");
        for (o in s) switch (o) {
            case "pinchclose":
                i = n.scale, 1 > i && i % 1 < 1 - e.jGestures.defaults.thresholdPinchclose && r.triggerHandler("pinchclose", t({
                    type: "pinchclose",
                    scale: i,
                    vector: -1,
                    touches: null,
                    startMove: s.oStartTouch,
                    event: n,
                    timestamp: s.oStartTouch.timestamp,
                    description: "pinch:-1:close"
                }));
                break;
            case "pinchopen":
                i = n.scale, i > 1 && i % 1 > e.jGestures.defaults.thresholdPinchopen && r.triggerHandler("pinchopen", t({
                    type: "pinchopen",
                    scale: i,
                    vector: 1,
                    touches: null,
                    startMove: s.oStartTouch,
                    event: n,
                    timestamp: s.oStartTouch.timestamp,
                    description: "pinch:+1:open"
                }));
                break;
            case "rotatecw":
                i = n.rotation, i > 1 && i > e.jGestures.defaults.thresholdRotatecw && r.triggerHandler("rotatecw", t({
                    type: "rotatecw",
                    rotation: i,
                    vector: 1,
                    touches: null,
                    startMove: s.oStartTouch,
                    event: n,
                    timestamp: s.oStartTouch.timestamp,
                    description: "rotate:+1:clockwise"
                }));
                break;
            case "rotateccw":
                i = n.rotation, 1 > i && -1 * i > e.jGestures.defaults.thresholdRotateccw && r.triggerHandler("rotateccw", t({
                    type: "rotateccw",
                    rotation: i,
                    vector: -1,
                    touches: null,
                    startMove: s.oStartTouch,
                    event: n,
                    timestamp: s.oStartTouch.timestamp,
                    description: "rotate:-1:counterclockwise"
                }))
        }
        r.triggerHandler(e.jGestures.events.gestureendProcessed, n)
    }
    e.jGestures = {}, e.jGestures.defaults = {}, e.jGestures.defaults.thresholdShake = {
        requiredShakes: 10,
        freezeShakes: 100,
        frontback: {
            sensitivity: 10
        },
        leftright: {
            sensitivity: 10
        },
        updown: {
            sensitivity: 10
        }
    }, e.jGestures.defaults.thresholdPinchopen = .05, e.jGestures.defaults.thresholdPinchmove = .05, e.jGestures.defaults.thresholdPinch = .05, e.jGestures.defaults.thresholdPinchclose = .05, e.jGestures.defaults.thresholdRotatecw = 5, e.jGestures.defaults.thresholdRotateccw = 5, e.jGestures.defaults.thresholdMove = 20, e.jGestures.defaults.thresholdSwipe = 100, e.jGestures.data = {}, e.jGestures.data.capableDevicesInUserAgentString = ["iPad", "iPhone", "iPod", "Mobile Safari"], e.jGestures.data.hasGestures = function() {
        var t;
        for (t = 0; t < e.jGestures.data.capableDevicesInUserAgentString.length; t++)
            if (-1 !== navigator.userAgent.indexOf(e.jGestures.data.capableDevicesInUserAgentString[t])) return !0;
        return !1
    }(), e.hasGestures = e.jGestures.data.hasGestures, e.jGestures.events = {
        touchstart: "jGestures.touchstart",
        touchendStart: "jGestures.touchend;start",
        touchendProcessed: "jGestures.touchend;processed",
        gesturestart: "jGestures.gesturestart",
        gestureendStart: "jGestures.gestureend;start",
        gestureendProcessed: "jGestures.gestureend;processed"
    }, jQuery.each({
        orientationchange_orientationchange01: "orientationchange",
        gestureend_pinchopen01: "pinchopen",
        gestureend_pinchclose01: "pinchclose",
        gestureend_rotatecw01: "rotatecw",
        gestureend_rotateccw01: "rotateccw",
        gesturechange_pinch01: "pinch",
        gesturechange_rotate01: "rotate",
        touchstart_swipe13: "swipemove",
        touchstart_swipe01: "swipeone",
        touchstart_swipe02: "swipetwo",
        touchstart_swipe03: "swipethree",
        touchstart_swipe04: "swipefour",
        touchstart_swipe05: "swipeup",
        touchstart_swipe06: "swiperightup",
        touchstart_swipe07: "swiperight",
        touchstart_swipe08: "swiperightdown",
        touchstart_swipe09: "swipedown",
        touchstart_swipe10: "swipeleftdown",
        touchstart_swipe11: "swipeleft",
        touchstart_swipe12: "swipeleftup",
        touchstart_tap01: "tapone",
        touchstart_tap02: "taptwo",
        touchstart_tap03: "tapthree",
        touchstart_tap04: "tapfour",
        devicemotion_shake01: "shake",
        devicemotion_shake02: "shakefrontback",
        devicemotion_shake03: "shakeleftright",
        devicemotion_shake04: "shakeupdown"
    }, function(t, c) {
        jQuery.event.special[c] = {
            setup: function() {
                var o, s, c = t.split("_"),
                    d = c[0],
                    h = c[1].slice(0, c[1].length - 2),
                    p = jQuery(this);
                if (!p.data("ojQueryGestures") || !p.data("ojQueryGestures")[d])
                    if (o = p.data("ojQueryGestures") || {}, s = {}, s[d] = !0, e.extend(!0, o, s), p.data("ojQueryGestures", o), e.hasGestures) switch (h) {
                        case "orientationchange":
                            p.get(0).addEventListener("orientationchange", n, !1);
                            break;
                        case "shake":
                        case "shakefrontback":
                        case "shakeleftright":
                        case "shakeupdown":
                        case "tilt":
                            p.get(0).addEventListener("devicemotion", r, !1);
                            break;
                        case "tap":
                        case "swipe":
                        case "swipeup":
                        case "swiperightup":
                        case "swiperight":
                        case "swiperightdown":
                        case "swipedown":
                        case "swipeleftdown":
                        case "swipeleft":
                            p.get(0).addEventListener("touchstart", i, !1);
                            break;
                        case "pinchopen":
                        case "pinchclose":
                        case "rotatecw":
                        case "rotateccw":
                            p.get(0).addEventListener("gesturestart", a, !1), p.get(0).addEventListener("gestureend", l, !1);
                            break;
                        case "pinch":
                        case "rotate":
                            p.get(0).addEventListener("gesturestart", a, !1), p.get(0).addEventListener("gesturechange", u, !1)
                    } else switch (h) {
                        case "tap":
                        case "swipe":
                            p.bind("mousedown", i);
                            break;
                        case "orientationchange":
                        case "pinchopen":
                        case "pinchclose":
                        case "rotatecw":
                        case "rotateccw":
                        case "pinch":
                        case "rotate":
                        case "shake":
                        case "tilt":
                    }
                    return !1
            },
            add: function(e) {
                var t = jQuery(this),
                    n = t.data("ojQueryGestures");
                return n[e.type] = {
                    originalType: e.type
                }, !1
            },
            remove: function(e) {
                var t = jQuery(this),
                    n = t.data("ojQueryGestures");
                return n[e.type] = !1, t.data("ojQueryGestures", n), !1
            },
            teardown: function() {
                var c, d, h = t.split("_"),
                    p = h[0],
                    f = h[1].slice(0, h[1].length - 2),
                    m = jQuery(this);
                if (!m.data("ojQueryGestures") || !m.data("ojQueryGestures")[p])
                    if (c = m.data("ojQueryGestures") || {}, d = {}, d[p] = !1, e.extend(!0, c, d), m.data("ojQueryGestures", c), e.hasGestures) switch (f) {
                        case "orientationchange":
                            m.get(0).removeEventListener("orientationchange", n, !1);
                            break;
                        case "shake":
                        case "shakefrontback":
                        case "shakeleftright":
                        case "shakeupdown":
                        case "tilt":
                            m.get(0).removeEventListener("devicemotion", r, !1);
                            break;
                        case "tap":
                        case "swipe":
                        case "swipeup":
                        case "swiperightup":
                        case "swiperight":
                        case "swiperightdown":
                        case "swipedown":
                        case "swipeleftdown":
                        case "swipeleft":
                        case "swipeleftup":
                            m.get(0).removeEventListener("touchstart", i, !1), m.get(0).removeEventListener("touchmove", o, !1), m.get(0).removeEventListener("touchend", s, !1);
                            break;
                        case "pinchopen":
                        case "pinchclose":
                        case "rotatecw":
                        case "rotateccw":
                            m.get(0).removeEventListener("gesturestart", a, !1), m.get(0).removeEventListener("gestureend", l, !1);
                            break;
                        case "pinch":
                        case "rotate":
                            m.get(0).removeEventListener("gesturestart", a, !1), m.get(0).removeEventListener("gesturechange", u, !1)
                    } else switch (f) {
                        case "tap":
                        case "swipe":
                            m.unbind("mousedown", i), m.unbind("mousemove", o), m.unbind("mouseup", s);
                            break;
                        case "orientationchange":
                        case "pinchopen":
                        case "pinchclose":
                        case "rotatecw":
                        case "rotateccw":
                        case "pinch":
                        case "rotate":
                        case "shake":
                        case "tilt":
                    }
                    return !1
            }
        }
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: affix.js v3.1.1
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = function(n, r) {
        this.options = e.extend({}, t.DEFAULTS, r), this.$window = e(window).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    t.RESET = "affix affix-top affix-bottom", t.DEFAULTS = {
        offset: 0
    }, t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var e = this.$window.scrollTop(),
            n = this.$element.offset();
        return this.pinnedOffset = n.top - e
    }, t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var n = e(document).height(),
                r = this.$window.scrollTop(),
                i = this.$element.offset(),
                o = this.options.offset,
                s = o.top,
                a = o.bottom;
            "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof a && (a = o.bottom(this.$element));
            var u = null != this.unpin && r + this.unpin <= i.top ? !1 : null != a && i.top + this.$element.height() >= n - a ? "bottom" : null != s && s >= r ? "top" : !1;
            if (this.affixed !== u) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (u ? "-" + u : ""),
                    c = e.Event(l + ".bs.affix");
                this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = u, this.unpin = "bottom" == u ? this.getPinnedOffset() : null, this.$element.removeClass(t.RESET).addClass(l).trigger(e.Event(l.replace("affix", "affixed"))), "bottom" == u && this.$element.offset({
                    top: i.top
                }))
            }
        }
    };
    var n = e.fn.affix;
    e.fn.affix = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.affix"),
                o = "object" == typeof n && n;
            i || r.data("bs.affix", i = new t(this, o)), "string" == typeof n && i[n]()
        })
    }, e.fn.affix.Constructor = t, e.fn.affix.noConflict = function() {
        return e.fn.affix = n, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this),
                n = t.data();
            n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), t.affix(n)
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: alert.js v3.1.1
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]',
        n = function(n) {
            e(n).on("click", t, this.close)
        };
    n.prototype.close = function(t) {
        function n() {
            o.trigger("closed.bs.alert").remove()
        }
        var r = e(this),
            i = r.attr("data-target");
        i || (i = r.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, ""));
        var o = e(i);
        t && t.preventDefault(), o.length || (o = r.hasClass("alert") ? r : r.parent()), o.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (o.removeClass("in"), e.support.transition && o.hasClass("fade") ? o.one(e.support.transition.end, n).emulateTransitionEnd(150) : n())
    };
    var r = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.alert");
            i || r.data("bs.alert", i = new n(this)), "string" == typeof t && i[t].call(r)
        })
    }, e.fn.alert.Constructor = n, e.fn.alert.noConflict = function() {
        return e.fn.alert = r, this
    }, e(document).on("click.bs.alert.data-api", t, n.prototype.close)
}(jQuery),
/* ========================================================================
 * Bootstrap: button.js v3.1.1
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.isLoading = !1
    };
    t.DEFAULTS = {
        loadingText: "loading..."
    }, t.prototype.setState = function(t) {
        var n = "disabled",
            r = this.$element,
            i = r.is("input") ? "val" : "html",
            o = r.data();
        t += "Text", o.resetText || r.data("resetText", r[i]()), r[i](o[t] || this.options[t]), setTimeout(e.proxy(function() {
            "loadingText" == t ? (this.isLoading = !0, r.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n))
        }, this), 0)
    }, t.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? e = !1 : t.find(".active").removeClass("active")), e && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        e && this.$element.toggleClass("active")
    };
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.button"),
                o = "object" == typeof n && n;
            i || r.data("bs.button", i = new t(this, o)), "toggle" == n ? i.toggle() : n && i.setState(n)
        })
    }, e.fn.button.Constructor = t, e.fn.button.noConflict = function() {
        return e.fn.button = n, this
    }, e(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), t.preventDefault()
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: carousel.js v3.1.1
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, t.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(".item"), this.$items.index(this.$active)
    }, t.prototype.to = function(t) {
        var n = this,
            r = this.getActiveIndex();
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            n.to(t)
        }) : r == t ? this.pause().cycle() : this.slide(t > r ? "next" : "prev", e(this.$items[t]))
    }, t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, t.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, t.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, t.prototype.slide = function(t, n) {
        var r = this.$element.find(".item.active"),
            i = n || r[t](),
            o = this.interval,
            s = "next" == t ? "left" : "right",
            a = "next" == t ? "first" : "last",
            u = this;
        if (!i.length) {
            if (!this.options.wrap) return;
            i = this.$element.find(".item")[a]()
        }
        if (i.hasClass("active")) return this.sliding = !1;
        var l = e.Event("slide.bs.carousel", {
            relatedTarget: i[0],
            direction: s
        });
        return this.$element.trigger(l), l.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var t = e(u.$indicators.children()[u.getActiveIndex()]);
            t && t.addClass("active")
        })), e.support.transition && this.$element.hasClass("slide") ? (i.addClass(t), i[0].offsetWidth, r.addClass(s), i.addClass(s), r.one(e.support.transition.end, function() {
            i.removeClass([t, s].join(" ")).addClass("active"), r.removeClass(["active", s].join(" ")), u.sliding = !1, setTimeout(function() {
                u.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * r.css("transition-duration").slice(0, -1))) : (r.removeClass("active"), i.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
    };
    var n = e.fn.carousel;
    e.fn.carousel = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.carousel"),
                o = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n),
                s = "string" == typeof n ? n : o.slide;
            i || r.data("bs.carousel", i = new t(this, o)), "number" == typeof n ? i.to(n) : s ? i[s]() : o.interval && i.pause().cycle()
        })
    }, e.fn.carousel.Constructor = t, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = n, this
    }, e(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var n, r = e(this),
            i = e(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
            o = e.extend({}, i.data(), r.data()),
            s = r.attr("data-slide-to");
        s && (o.interval = !1), i.carousel(o), (s = r.attr("data-slide-to")) && i.data("bs.carousel").to(s), t.preventDefault()
    }), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var t = e(this);
            t.carousel(t.data())
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: collapse.js v3.1.1
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = function(n, r) {
        this.$element = e(n), this.options = e.extend({}, t.DEFAULTS, r), this.transitioning = null, this.options.parent && (this.$parent = e(this.options.parent)), this.options.toggle && this.toggle()
    };
    t.DEFAULTS = {
        toggle: !0
    }, t.prototype.dimension = function() {
        var e = this.$element.hasClass("width");
        return e ? "width" : "height"
    }, t.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t = e.Event("show.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.$parent && this.$parent.find("> .panel > .in");
                if (n && n.length) {
                    var r = n.data("bs.collapse");
                    if (r && r.transitioning) return;
                    n.collapse("hide"), r || n.data("bs.collapse", null)
                }
                var i = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[i](0), this.transitioning = 1;
                var o = function(t) {
                    return t && t.target != this.$element[0] ? (this.$element.one(e.support.transition.end, e.proxy(o, this)), void 0) : (this.$element.removeClass("collapsing").addClass("collapse in")[i]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse"), void 0)
                };
                if (!e.support.transition) return o.call(this);
                var s = e.camelCase(["scroll", i].join("-"));
                this.$element.one(e.support.transition.end, e.proxy(o, this)).emulateTransitionEnd(350)[i](this.$element[0][s])
            }
        }
    }, t.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var r = function(t) {
                    return t && t.target != this.$element[0] ? (this.$element.one(e.support.transition.end, e.proxy(r, this)), void 0) : (this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"), void 0)
                };
                return e.support.transition ? (this.$element[n](0).one(e.support.transition.end, e.proxy(r, this)).emulateTransitionEnd(350), void 0) : r.call(this)
            }
        }
    }, t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var n = e.fn.collapse;
    e.fn.collapse = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.collapse"),
                o = e.extend({}, t.DEFAULTS, r.data(), "object" == typeof n && n);
            !i && o.toggle && "show" == n && (n = !n), i || r.data("bs.collapse", i = new t(this, o)), "string" == typeof n && i[n]()
        })
    }, e.fn.collapse.Constructor = t, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = n, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var n, r = e(this),
            i = r.attr("data-target") || t.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
            o = e(i),
            s = o.data("bs.collapse"),
            a = s ? "toggle" : r.data(),
            u = r.attr("data-parent"),
            l = u && e(u);
        s && s.transitioning || (l && l.find('[data-toggle="collapse"][data-parent="' + u + '"]').not(r).addClass("collapsed"), r[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(a)
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: dropdown.js v3.1.1
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(t) {
        e(r).remove(), e(i).each(function() {
            var r = n(e(this)),
                i = {
                    relatedTarget: this
                };
            r.hasClass("open") && (r.trigger(t = e.Event("hide.bs.dropdown", i)), t.isDefaultPrevented() || r.removeClass("open").trigger("hidden.bs.dropdown", i))
        })
    }

    function n(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var r = n && e(n);
        return r && r.length ? r : t.parent()
    }
    var r = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        o = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    o.prototype.toggle = function(r) {
        var i = e(this);
        if (!i.is(".disabled, :disabled")) {
            var o = n(i),
                s = o.hasClass("open");
            if (t(), !s) {
                "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && e('<div class="dropdown-backdrop"/>').insertAfter(e(this)).on("click", t);
                var a = {
                    relatedTarget: this
                };
                if (o.trigger(r = e.Event("show.bs.dropdown", a)), r.isDefaultPrevented()) return;
                i.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, o.prototype.keydown = function(t) {
        if (/(38|40|27)/.test(t.keyCode)) {
            var r = e(this);
            if (t.preventDefault(), t.stopPropagation(), !r.is(".disabled, :disabled")) {
                var o = n(r),
                    s = o.hasClass("open");
                if (!s || s && 27 == t.keyCode) return 27 == t.which && o.find(i).trigger("focus"), r.trigger("click");
                var a = " li:not(.divider):visible a",
                    u = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                if (u.length) {
                    var l = u.index(u.filter(":focus"));
                    38 == t.keyCode && l > 0 && l--, 40 == t.keyCode && l < u.length - 1 && l++, ~l || (l = 0), u.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this),
                r = n.data("bs.dropdown");
            r || n.data("bs.dropdown", r = new o(this)), "string" == typeof t && r[t].call(n)
        })
    }, e.fn.dropdown.Constructor = o, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", t).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, o.prototype.toggle).on("keydown.bs.dropdown.data-api", i + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
}(jQuery),
/* ========================================================================
 * Bootstrap: tab.js v3.1.1
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            r = t.data("target");
        if (r || (r = t.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var i = n.find(".active:last a")[0],
                o = e.Event("show.bs.tab", {
                    relatedTarget: i
                });
            if (t.trigger(o), !o.isDefaultPrevented()) {
                var s = e(r);
                this.activate(t.parent("li"), n), this.activate(s, s.parent(), function() {
                    t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: i
                    })
                })
            }
        }
    }, t.prototype.activate = function(t, n, r) {
        function i() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), t.addClass("active"), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"), r && r()
        }
        var o = n.find("> .active"),
            s = r && e.support.transition && o.hasClass("fade");
        s ? o.one(e.support.transition.end, i).emulateTransitionEnd(150) : i(), o.removeClass("in")
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tab");
            i || r.data("bs.tab", i = new t(this)), "string" == typeof n && i[n]()
        })
    }, e.fn.tab.Constructor = t, e.fn.tab.noConflict = function() {
        return e.fn.tab = n, this
    }, e(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(), e(this).tab("show")
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: transition.js v3.1.1
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            r = this;
        e(this).one(e.support.transition.end, function() {
            n = !0
        });
        var i = function() {
            n || e(r).trigger(e.support.transition.end)
        };
        return setTimeout(i, t), this
    }, e(function() {
        e.support.transition = t()
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: scrollspy.js v3.1.1
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";

    function t(n, r) {
        var i, o = e.proxy(this.process, this);
        this.$element = e(n).is("body") ? e(window) : e(n), this.$body = e("body"), this.$scrollElement = this.$element.on("scroll.bs.scrollspy", o), this.options = e.extend({}, t.DEFAULTS, r), this.selector = (this.options.target || (i = e(n).attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = e([]), this.targets = e([]), this.activeTarget = null, this.refresh(), this.process()
    }
    t.DEFAULTS = {
        offset: 10
    }, t.prototype.refresh = function() {
        var t = this.$element[0] == window ? "offset" : "position";
        this.offsets = e([]), this.targets = e([]);
        var n = this;
        this.$body.find(this.selector).map(function() {
            var r = e(this),
                i = r.data("target") || r.attr("href"),
                o = /^#./.test(i) && e(i);
            return o && o.length && o.is(":visible") && [
                [o[t]().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), i]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            n.offsets.push(this[0]), n.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight),
            r = n - this.$scrollElement.height(),
            i = this.offsets,
            o = this.targets,
            s = this.activeTarget;
        if (t >= r) return s != (e = o.last()[0]) && this.activate(e);
        if (s && t <= i[0]) return s != (e = o[0]) && this.activate(e);
        for (e = i.length; e--;) s != o[e] && t >= i[e] && (!i[e + 1] || t <= i[e + 1]) && this.activate(o[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            r = e(n).parents("li").addClass("active");
        r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.scrollspy"),
                o = "object" == typeof n && n;
            i || r.data("bs.scrollspy", i = new t(this, o)), "string" == typeof n && i[n]()
        })
    }, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = n, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: modal.js v3.1.1
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, t.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, t.prototype.show = function(t) {
        var n = this,
            r = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.backdrop(function() {
            var r = e.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), r && n.$element[0].offsetWidth, n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
            var i = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            r ? n.$element.find(".modal-dialog").one(e.support.transition.end, function() {
                n.$element.trigger("focus").trigger(i)
            }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(i)
        }))
    }, t.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one(e.support.transition.end, e.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, t.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, t.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, t.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.removeBackdrop(), e.$element.trigger("hidden.bs.modal")
        })
    }, t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, t.prototype.backdrop = function(t) {
        var n = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && n;
            if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t).emulateTransitionEnd(150) : t()) : t && t()
    }, t.prototype.checkScrollbar = function() {
        document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
    }, t.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0);
        this.scrollbarWidth && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", "")
    }, t.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var n = e.fn.modal;
    e.fn.modal = function(n, r) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.modal"),
                s = e.extend({}, t.DEFAULTS, i.data(), "object" == typeof n && n);
            o || i.data("bs.modal", o = new t(this, s)), "string" == typeof n ? o[n](r) : s.show && o.show(r)
        })
    }, e.fn.modal.Constructor = t, e.fn.modal.noConflict = function() {
        return e.fn.modal = n, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this),
            r = n.attr("href"),
            i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = i.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(r) && r
            }, i.data(), n.data());
        n.is("a") && t.preventDefault(), i.modal(o, this).one("hide", function() {
            n.is(":visible") && n.trigger("focus")
        })
    })
}(jQuery),
/* ========================================================================
 * Bootstrap: tooltip.js v3.1.1
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = function(e, t) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", e, t)
    };
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, t.prototype.init = function(t, n, r) {
        this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && e(this.options.viewport.selector || this.options.viewport);
        for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
            var s = i[o];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    u = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, t.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, r) {
            n[e] != r && (t[e] = r)
        }), t
    }, t.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? (n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show), void 0) : n.show()
    }, t.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? (n.timeout = setTimeout(function() {
            "out" == n.hoverState && n.hide()
        }, n.options.delay.hide), void 0) : n.hide()
    }, t.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(t), t.isDefaultPrevented()) return;
            var n = this,
                r = this.tip();
            this.setContent(), this.options.animation && r.addClass("fade");
            var i = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                o = /\s?auto?\s?/i,
                s = o.test(i);
            s && (i = i.replace(o, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            var a = this.getPosition(),
                u = r[0].offsetWidth,
                l = r[0].offsetHeight;
            if (s) {
                var c = i,
                    d = this.$element.parent(),
                    h = this.getPosition(d);
                i = "bottom" == i && a.top + a.height + l - h.scroll > h.height ? "top" : "top" == i && a.top - h.scroll - l < 0 ? "bottom" : "right" == i && a.right + u > h.width ? "left" : "left" == i && a.left - u < h.left ? "right" : i, r.removeClass(c).addClass(i)
            }
            var p = this.getCalculatedOffset(i, a, u, l);
            this.applyPlacement(p, i), this.hoverState = null;
            var f = function() {
                n.$element.trigger("shown.bs." + n.type)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, f).emulateTransitionEnd(150) : f()
        }
    }, t.prototype.applyPlacement = function(t, n) {
        var r = this.tip(),
            i = r[0].offsetWidth,
            o = r[0].offsetHeight,
            s = parseInt(r.css("margin-top"), 10),
            a = parseInt(r.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), t.top = t.top + s, t.left = t.left + a, e.offset.setOffset(r[0], e.extend({
            using: function(e) {
                r.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), r.addClass("in");
        var u = r[0].offsetWidth,
            l = r[0].offsetHeight;
        "top" == n && l != o && (t.top = t.top + o - l);
        var c = this.getViewportAdjustedDelta(n, t, u, l);
        c.left ? t.left += c.left : t.top += c.top;
        var d = c.left ? 2 * c.left - i + u : 2 * c.top - o + l,
            h = c.left ? "left" : "top",
            p = c.left ? "offsetWidth" : "offsetHeight";
        r.offset(t), this.replaceArrow(d, r[0][p], h)
    }, t.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, t.prototype.hide = function() {
        function t() {
            "in" != n.hoverState && r.detach(), n.$element.trigger("hidden.bs." + n.type)
        }
        var n = this,
            r = this.tip(),
            i = e.Event("hide.bs." + this.type);
        return this.$element.trigger(i), i.isDefaultPrevented() ? void 0 : (r.removeClass("in"), e.support.transition && this.$tip.hasClass("fade") ? r.one(e.support.transition.end, t).emulateTransitionEnd(150) : t(), this.hoverState = null, this)
    }, t.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, t.prototype.hasContent = function() {
        return this.getTitle()
    }, t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            r = "BODY" == n.tagName;
        return e.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
            scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop(),
            width: r ? e(window).width() : t.outerWidth(),
            height: r ? e(window).height() : t.outerHeight()
        }, r ? {
            top: 0,
            left: 0
        } : t.offset())
    }, t.prototype.getCalculatedOffset = function(e, t, n, r) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - r,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    }, t.prototype.getViewportAdjustedDelta = function(e, t, n, r) {
        var i = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return i;
        var o = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var a = t.top - o - s.scroll,
                u = t.top + o - s.scroll + r;
            a < s.top ? i.top = s.top - a : u > s.top + s.height && (i.top = s.top + s.height - u)
        } else {
            var l = t.left - o,
                c = t.left + o + n;
            l < s.left ? i.left = s.left - l : c > s.width && (i.left = s.left + s.width - c)
        }
        return i
    }, t.prototype.getTitle = function() {
        var e, t = this.$element,
            n = this.options;
        return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
    }, t.prototype.tip = function() {
        return this.$tip = this.$tip || e(this.options.template)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, t.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, t.prototype.enable = function() {
        this.enabled = !0
    }, t.prototype.disable = function() {
        this.enabled = !1
    }, t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, t.prototype.toggle = function(t) {
        var n = t ? e(t.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, t.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.tooltip"),
                o = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.tooltip", i = new t(this, o)), "string" == typeof n && i[n]())
        })
    }, e.fn.tooltip.Constructor = t, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n, this
    }
}(jQuery),
/* ========================================================================
 * Bootstrap: popover.js v3.1.1
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+ function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), t.prototype.constructor = t, t.prototype.getDefaults = function() {
        return t.DEFAULTS
    }, t.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, t.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, t.prototype.tip = function() {
        return this.$tip || (this.$tip = e(this.options.template)), this.$tip
    };
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var r = e(this),
                i = r.data("bs.popover"),
                o = "object" == typeof n && n;
            (i || "destroy" != n) && (i || r.data("bs.popover", i = new t(this, o)), "string" == typeof n && i[n]())
        })
    }, e.fn.popover.Constructor = t, e.fn.popover.noConflict = function() {
        return e.fn.popover = n, this
    }
}(jQuery),
function(e) {
    "use strict";
    var t = '[data-toggle="context"]',
        n = function(t, n) {
            this.$element = e(t), this.before = n.before || this.before, this.onItem = n.onItem || this.onItem, this.scopes = n.scopes || null, n.target && this.$element.data("target", n.target), n.no_automatic ? this.listen(!1) : this.listen(!0)
        };
    n.prototype = {
        constructor: n,
        show: function(t) {
            var n, r, i, o, s = {
                relatedTarget: this
            };
            if (!this.isDisabled() && (this.closemenu(), this.before.call(this, t, e(t.currentTarget)))) return n = this.getMenu(), n.trigger(r = e.Event("show.bs.context", s)), i = this.getPosition(t, n), o = "li:not(.divider)", n.attr("style", "").css(i).addClass("open").on("click.context.data-api", o, e.proxy(this.onItem, this, e(t.currentTarget))).trigger("shown.bs.context", s), e("html").on("click.context.data-api", n.selector, e.proxy(this.closemenu, this)), !1
        },
        closemenu: function() {
            var t, n, r, i;
            return t = this.getMenu(), t.hasClass("open") ? (i = {
                relatedTarget: this
            }, t.trigger(n = e.Event("hide.bs.context", i)), r = "li:not(.divider)", t.removeClass("open").off("click.context.data-api", r).trigger("hidden.bs.context", i), e("html").off("click.context.data-api", t.selector), !1) : void 0
        },
        before: function() {
            return !0
        },
        onItem: function() {
            return !0
        },
        listen: function(t) {
            "undefined" == typeof t && (t = !0), e("html").on("click.context.data-api", e.proxy(this.closemenu, this)), t && this.$element.on("contextmenu.context.data-api", this.scopes, e.proxy(this.show, this))
        },
        destroy: function() {
            this.$element.off(".context.data-api").removeData("context"), e("html").off(".context.data-api")
        },
        isDisabled: function() {
            return this.$element.hasClass(".disabled") || this.$element.attr("disabled")
        },
        getMenu: function() {
            var t, n = this.$element.data("target");
            return n || (n = this.$element.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), t = e(n), t && t.length ? t : this.$element.find(n)
        },
        getPosition: function(t, n) {
            var r, i, o, s = t.clientX,
                a = t.clientY,
                u = e(window).width(),
                l = e(window).height(),
                c = n.find(".bootstrap-dropdown-menu").outerWidth(),
                d = n.find(".bootstrap-dropdown-menu").outerHeight(),
                h = {
                    position: "absolute",
                    "z-index": 9999
                };
            return r = a + d > l ? {
                top: a - d + e(window).scrollTop()
            } : {
                top: a + e(window).scrollTop()
            }, i = s + c > u && s - c > 0 ? {
                left: s - c + e(window).scrollLeft()
            } : {
                left: s + e(window).scrollLeft()
            }, o = n.offsetParent().offset(), i.left = i.left - o.left, r.top = r.top - o.top, e.extend(h, r, i)
        }
    }, e.fn.contextmenu = function(t, r) {
        return this.each(function() {
            var i = e(this),
                o = i.data("context"),
                s = "object" == typeof t && t;
            o || i.data("context", o = new n(i, s)), "string" == typeof t && o[t].call(o, r)
        })
    }, e.fn.contextmenu.Constructor = n, e(document).on("contextmenu.context.data-api", t, function(t) {
        e(this).contextmenu("show", t), t.preventDefault()
    })
}(jQuery),
function() {
    function e(t, n, r) {
        if (t === n) return 0 !== t || 1 / t == 1 / n;
        if (null == t || null == n) return t === n;
        if (t._chain && (t = t._wrapped), n._chain && (n = n._wrapped), t.isEqual && x.isFunction(t.isEqual)) return t.isEqual(n);
        if (n.isEqual && x.isFunction(n.isEqual)) return n.isEqual(t);
        var i = u.call(t);
        if (i != u.call(n)) return !1;
        switch (i) {
            case "[object String]":
                return t == String(n);
            case "[object Number]":
                return t != +t ? n != +n : 0 == t ? 1 / t == 1 / n : t == +n;
            case "[object Date]":
            case "[object Boolean]":
                return +t == +n;
            case "[object RegExp]":
                return t.source == n.source && t.global == n.global && t.multiline == n.multiline && t.ignoreCase == n.ignoreCase
        }
        if ("object" != typeof t || "object" != typeof n) return !1;
        for (var o = r.length; o--;)
            if (r[o] == t) return !0;
        r.push(t);
        var o = 0,
            s = !0;
        if ("[object Array]" == i) {
            if (o = t.length, s = o == n.length)
                for (; o-- && (s = o in t == o in n && e(t[o], n[o], r)););
        } else {
            if ("constructor" in t != "constructor" in n || t.constructor != n.constructor) return !1;
            for (var a in t)
                if (x.has(t, a) && (o++, !(s = x.has(n, a) && e(t[a], n[a], r)))) break;
            if (s) {
                for (a in n)
                    if (x.has(n, a) && !o--) break;
                s = !o
            }
        }
        return r.pop(), s
    }
    var t = this,
        n = t._,
        r = {},
        i = Array.prototype,
        o = Object.prototype,
        s = i.slice,
        a = i.unshift,
        u = o.toString,
        l = o.hasOwnProperty,
        c = i.forEach,
        d = i.map,
        h = i.reduce,
        p = i.reduceRight,
        f = i.filter,
        m = i.every,
        g = i.some,
        v = i.indexOf,
        y = i.lastIndexOf,
        o = Array.isArray,
        b = Object.keys,
        w = Function.prototype.bind,
        x = function(e) {
            return new T(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : t._ = x, x.VERSION = "1.3.1";
    var _ = x.each = x.forEach = function(e, t, n) {
        if (null != e)
            if (c && e.forEach === c) e.forEach(t, n);
            else if (e.length === +e.length)
            for (var i = 0, o = e.length; o > i && !(i in e && t.call(n, e[i], i, e) === r); i++);
        else
            for (i in e)
                if (x.has(e, i) && t.call(n, e[i], i, e) === r) break
    };
    x.map = x.collect = function(e, t, n) {
        var r = [];
        return null == e ? r : d && e.map === d ? e.map(t, n) : (_(e, function(e, i, o) {
            r[r.length] = t.call(n, e, i, o)
        }), e.length === +e.length && (r.length = e.length), r)
    }, x.reduce = x.foldl = x.inject = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), h && e.reduce === h) return r && (t = x.bind(t, r)), i ? e.reduce(t, n) : e.reduce(t);
        if (_(e, function(e, o, s) {
                i ? n = t.call(r, n, e, o, s) : (n = e, i = !0)
            }), !i) throw new TypeError("Reduce of empty array with no initial value");
        return n
    }, x.reduceRight = x.foldr = function(e, t, n, r) {
        var i = arguments.length > 2;
        if (null == e && (e = []), p && e.reduceRight === p) return r && (t = x.bind(t, r)), i ? e.reduceRight(t, n) : e.reduceRight(t);
        var o = x.toArray(e).reverse();
        return r && !i && (t = x.bind(t, r)), i ? x.reduce(o, t, n, r) : x.reduce(o, t)
    }, x.find = x.detect = function(e, t, n) {
        var r;
        return k(e, function(e, i, o) {
            return t.call(n, e, i, o) ? (r = e, !0) : void 0
        }), r
    }, x.filter = x.select = function(e, t, n) {
        var r = [];
        return null == e ? r : f && e.filter === f ? e.filter(t, n) : (_(e, function(e, i, o) {
            t.call(n, e, i, o) && (r[r.length] = e)
        }), r)
    }, x.reject = function(e, t, n) {
        var r = [];
        return null == e ? r : (_(e, function(e, i, o) {
            t.call(n, e, i, o) || (r[r.length] = e)
        }), r)
    }, x.every = x.all = function(e, t, n) {
        var i = !0;
        return null == e ? i : m && e.every === m ? e.every(t, n) : (_(e, function(e, o, s) {
            return (i = i && t.call(n, e, o, s)) ? void 0 : r
        }), i)
    };
    var k = x.some = x.any = function(e, t, n) {
        t || (t = x.identity);
        var i = !1;
        return null == e ? i : g && e.some === g ? e.some(t, n) : (_(e, function(e, o, s) {
            return i || (i = t.call(n, e, o, s)) ? r : void 0
        }), !!i)
    };
    x.include = x.contains = function(e, t) {
        var n = !1;
        return null == e ? n : v && e.indexOf === v ? -1 != e.indexOf(t) : n = k(e, function(e) {
            return e === t
        })
    }, x.invoke = function(e, t) {
        var n = s.call(arguments, 2);
        return x.map(e, function(e) {
            return (x.isFunction(t) ? t || e : e[t]).apply(e, n)
        })
    }, x.pluck = function(e, t) {
        return x.map(e, function(e) {
            return e[t]
        })
    }, x.max = function(e, t, n) {
        if (!t && x.isArray(e)) return Math.max.apply(Math, e);
        if (!t && x.isEmpty(e)) return -1 / 0;
        var r = {
            computed: -1 / 0
        };
        return _(e, function(e, i, o) {
            i = t ? t.call(n, e, i, o) : e, i >= r.computed && (r = {
                value: e,
                computed: i
            })
        }), r.value
    }, x.min = function(e, t, n) {
        if (!t && x.isArray(e)) return Math.min.apply(Math, e);
        if (!t && x.isEmpty(e)) return 1 / 0;
        var r = {
            computed: 1 / 0
        };
        return _(e, function(e, i, o) {
            i = t ? t.call(n, e, i, o) : e, i < r.computed && (r = {
                value: e,
                computed: i
            })
        }), r.value
    }, x.shuffle = function(e) {
        var t, n = [];
        return _(e, function(e, r) {
            0 == r ? n[0] = e : (t = Math.floor(Math.random() * (r + 1)), n[r] = n[t], n[t] = e)
        }), n
    }, x.sortBy = function(e, t, n) {
        return x.pluck(x.map(e, function(e, r, i) {
            return {
                value: e,
                criteria: t.call(n, e, r, i)
            }
        }).sort(function(e, t) {
            var n = e.criteria,
                r = t.criteria;
            return r > n ? -1 : n > r ? 1 : 0
        }), "value")
    }, x.groupBy = function(e, t) {
        var n = {},
            r = x.isFunction(t) ? t : function(e) {
                return e[t]
            };
        return _(e, function(e, t) {
            var i = r(e, t);
            (n[i] || (n[i] = [])).push(e)
        }), n
    }, x.sortedIndex = function(e, t, n) {
        n || (n = x.identity);
        for (var r = 0, i = e.length; i > r;) {
            var o = r + i >> 1;
            n(e[o]) < n(t) ? r = o + 1 : i = o
        }
        return r
    }, x.toArray = function(e) {
        return e ? e.toArray ? e.toArray() : x.isArray(e) ? s.call(e) : x.isArguments(e) ? s.call(e) : x.values(e) : []
    }, x.size = function(e) {
        return x.toArray(e).length
    }, x.first = x.head = function(e, t, n) {
        return null == t || n ? e[0] : s.call(e, 0, t)
    }, x.initial = function(e, t, n) {
        return s.call(e, 0, e.length - (null == t || n ? 1 : t))
    }, x.last = function(e, t, n) {
        return null == t || n ? e[e.length - 1] : s.call(e, Math.max(e.length - t, 0))
    }, x.rest = x.tail = function(e, t, n) {
        return s.call(e, null == t || n ? 1 : t)
    }, x.compact = function(e) {
        return x.filter(e, function(e) {
            return !!e
        })
    }, x.flatten = function(e, t) {
        return x.reduce(e, function(e, n) {
            return x.isArray(n) ? e.concat(t ? n : x.flatten(n)) : (e[e.length] = n, e)
        }, [])
    }, x.without = function(e) {
        return x.difference(e, s.call(arguments, 1))
    }, x.uniq = x.unique = function(e, t, n) {
        var n = n ? x.map(e, n) : e,
            r = [];
        return x.reduce(n, function(n, i, o) {
            return 0 != o && (t === !0 ? x.last(n) == i : x.include(n, i)) || (n[n.length] = i, r[r.length] = e[o]), n
        }, []), r
    }, x.union = function() {
        return x.uniq(x.flatten(arguments, !0))
    }, x.intersection = x.intersect = function(e) {
        var t = s.call(arguments, 1);
        return x.filter(x.uniq(e), function(e) {
            return x.every(t, function(t) {
                return x.indexOf(t, e) >= 0
            })
        })
    }, x.difference = function(e) {
        var t = x.flatten(s.call(arguments, 1));
        return x.filter(e, function(e) {
            return !x.include(t, e)
        })
    }, x.zip = function() {
        for (var e = s.call(arguments), t = x.max(x.pluck(e, "length")), n = Array(t), r = 0; t > r; r++) n[r] = x.pluck(e, "" + r);
        return n
    }, x.indexOf = function(e, t, n) {
        if (null == e) return -1;
        var r;
        if (n) return n = x.sortedIndex(e, t), e[n] === t ? n : -1;
        if (v && e.indexOf === v) return e.indexOf(t);
        for (n = 0, r = e.length; r > n; n++)
            if (n in e && e[n] === t) return n;
        return -1
    }, x.lastIndexOf = function(e, t) {
        if (null == e) return -1;
        if (y && e.lastIndexOf === y) return e.lastIndexOf(t);
        for (var n = e.length; n--;)
            if (n in e && e[n] === t) return n;
        return -1
    }, x.range = function(e, t, n) {
        arguments.length <= 1 && (t = e || 0, e = 0);
        for (var n = arguments[2] || 1, r = Math.max(Math.ceil((t - e) / n), 0), i = 0, o = Array(r); r > i;) o[i++] = e, e += n;
        return o
    };
    var $ = function() {};
    x.bind = function(e, t) {
        var n, r;
        if (e.bind === w && w) return w.apply(e, s.call(arguments, 1));
        if (!x.isFunction(e)) throw new TypeError;
        return r = s.call(arguments, 2), n = function() {
            if (!(this instanceof n)) return e.apply(t, r.concat(s.call(arguments)));
            $.prototype = e.prototype;
            var i = new $,
                o = e.apply(i, r.concat(s.call(arguments)));
            return Object(o) === o ? o : i
        }
    }, x.bindAll = function(e) {
        var t = s.call(arguments, 1);
        return 0 == t.length && (t = x.functions(e)), _(t, function(t) {
            e[t] = x.bind(e[t], e)
        }), e
    }, x.memoize = function(e, t) {
        var n = {};
        return t || (t = x.identity),
            function() {
                var r = t.apply(this, arguments);
                return x.has(n, r) ? n[r] : n[r] = e.apply(this, arguments)
            }
    }, x.delay = function(e, t) {
        var n = s.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(e, n)
        }, t)
    }, x.defer = function(e) {
        return x.delay.apply(x, [e, 1].concat(s.call(arguments, 1)))
    }, x.throttle = function(e, t) {
        var n, r, i, o, s, a = x.debounce(function() {
            s = o = !1
        }, t);
        return function() {
            n = this, r = arguments, i || (i = setTimeout(function() {
                i = null, s && e.apply(n, r), a()
            }, t)), o ? s = !0 : e.apply(n, r), a(), o = !0
        }
    }, x.debounce = function(e, t) {
        var n;
        return function() {
            var r = this,
                i = arguments;
            clearTimeout(n), n = setTimeout(function() {
                n = null, e.apply(r, i)
            }, t)
        }
    }, x.once = function(e) {
        var t, n = !1;
        return function() {
            return n ? t : (n = !0, t = e.apply(this, arguments))
        }
    }, x.wrap = function(e, t) {
        return function() {
            var n = [e].concat(s.call(arguments, 0));
            return t.apply(this, n)
        }
    }, x.compose = function() {
        var e = arguments;
        return function() {
            for (var t = arguments, n = e.length - 1; n >= 0; n--) t = [e[n].apply(this, t)];
            return t[0]
        }
    }, x.after = function(e, t) {
        return 0 >= e ? t() : function() {
            return --e < 1 ? t.apply(this, arguments) : void 0
        }
    }, x.keys = b || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t, n = [];
        for (t in e) x.has(e, t) && (n[n.length] = t);
        return n
    }, x.values = function(e) {
        return x.map(e, x.identity)
    }, x.functions = x.methods = function(e) {
        var t, n = [];
        for (t in e) x.isFunction(e[t]) && n.push(t);
        return n.sort()
    }, x.extend = function(e) {
        return _(s.call(arguments, 1), function(t) {
            for (var n in t) e[n] = t[n]
        }), e
    }, x.defaults = function(e) {
        return _(s.call(arguments, 1), function(t) {
            for (var n in t) null == e[n] && (e[n] = t[n])
        }), e
    }, x.clone = function(e) {
        return x.isObject(e) ? x.isArray(e) ? e.slice() : x.extend({}, e) : e
    }, x.tap = function(e, t) {
        return t(e), e
    }, x.isEqual = function(t, n) {
        return e(t, n, [])
    }, x.isEmpty = function(e) {
        if (x.isArray(e) || x.isString(e)) return 0 === e.length;
        for (var t in e)
            if (x.has(e, t)) return !1;
        return !0
    }, x.isElement = function(e) {
        return !(!e || 1 != e.nodeType)
    }, x.isArray = o || function(e) {
        return "[object Array]" == u.call(e)
    }, x.isObject = function(e) {
        return e === Object(e)
    }, x.isArguments = function(e) {
        return "[object Arguments]" == u.call(e)
    }, x.isArguments(arguments) || (x.isArguments = function(e) {
        return !(!e || !x.has(e, "callee"))
    }), x.isFunction = function(e) {
        return "[object Function]" == u.call(e)
    }, x.isString = function(e) {
        return "[object String]" == u.call(e)
    }, x.isNumber = function(e) {
        return "[object Number]" == u.call(e)
    }, x.isNaN = function(e) {
        return e !== e
    }, x.isBoolean = function(e) {
        return e === !0 || e === !1 || "[object Boolean]" == u.call(e)
    }, x.isDate = function(e) {
        return "[object Date]" == u.call(e)
    }, x.isRegExp = function(e) {
        return "[object RegExp]" == u.call(e)
    }, x.isNull = function(e) {
        return null === e
    }, x.isUndefined = function(e) {
        return void 0 === e
    }, x.has = function(e, t) {
        return l.call(e, t)
    }, x.noConflict = function() {
        return t._ = n, this
    }, x.identity = function(e) {
        return e
    }, x.times = function(e, t, n) {
        for (var r = 0; e > r; r++) t.call(n, r)
    }, x.escape = function(e) {
        return ("" + e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2F;")
    }, x.mixin = function(e) {
        _(x.functions(e), function(t) {
            N(t, x[t] = e[t])
        })
    };
    var C = 0;
    x.uniqueId = function(e) {
        var t = C++;
        return e ? e + t : t
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var S = /.^/,
        E = function(e) {
            return e.replace(/\\\\/g, "\\").replace(/\\'/g, "'")
        };
    x.template = function(e, t) {
        var n = x.templateSettings,
            n = "var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('" + e.replace(/\\/g, "\\\\").replace(/'/g, "\\'").replace(n.escape || S, function(e, t) {
                return "',_.escape(" + E(t) + "),'"
            }).replace(n.interpolate || S, function(e, t) {
                return "'," + E(t) + ",'"
            }).replace(n.evaluate || S, function(e, t) {
                return "');" + E(t).replace(/[\r\n\t]/g, " ") + ";__p.push('"
            }).replace(/\r/g, "\\r").replace(/\n/g, "\\n").replace(/\t/g, "\\t") + "');}return __p.join('');",
            r = new Function("obj", "_", n);
        return t ? r(t, x) : function(e) {
            return r.call(this, e, x)
        }
    }, x.chain = function(e) {
        return x(e).chain()
    };
    var T = function(e) {
        this._wrapped = e
    };
    x.prototype = T.prototype;
    var F = function(e, t) {
            return t ? x(e).chain() : e
        },
        N = function(e, t) {
            T.prototype[e] = function() {
                var e = s.call(arguments);
                return a.call(e, this._wrapped), F(t.apply(x, e), this._chain)
            }
        };
    x.mixin(x), _("pop,push,reverse,shift,sort,splice,unshift".split(","), function(e) {
        var t = i[e];
        T.prototype[e] = function() {
            var n = this._wrapped;
            t.apply(n, arguments);
            var r = n.length;
            return ("shift" == e || "splice" == e) && 0 === r && delete n[0], F(n, this._chain)
        }
    }), _(["concat", "join", "slice"], function(e) {
        var t = i[e];
        T.prototype[e] = function() {
            return F(t.apply(this._wrapped, arguments), this._chain)
        }
    }), T.prototype.chain = function() {
        return this._chain = !0, this
    }, T.prototype.value = function() {
        return this._wrapped
    }
}.call(this),
    function(e) {
        var t = String.prototype.trim,
            n = function(e, t) {
                for (var n = []; t > 0; n[--t] = e);
                return n.join("")
            },
            r = function(e) {
                return function() {
                    for (var t = Array.prototype.slice.call(arguments), n = 0; n < t.length; n++) t[n] = null == t[n] ? "" : "" + t[n];
                    return e.apply(null, t)
                }
            },
            i = function() {
                function e(e) {
                    return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
                }
                var t = function() {
                    return t.cache.hasOwnProperty(arguments[0]) || (t.cache[arguments[0]] = t.parse(arguments[0])), t.format.call(null, t.cache[arguments[0]], arguments)
                };
                return t.format = function(t, r) {
                    var o, s, a, u, l = 1,
                        c = t.length,
                        d = "",
                        h = [];
                    for (o = 0; c > o; o++)
                        if (d = e(t[o]), "string" === d) h.push(t[o]);
                        else if ("array" === d) {
                        if (a = t[o], a[2])
                            for (d = r[l], s = 0; s < a[2].length; s++) {
                                if (!d.hasOwnProperty(a[2][s])) throw i('[_.sprintf] property "%s" does not exist', a[2][s]);
                                d = d[a[2][s]]
                            } else d = a[1] ? r[a[1]] : r[l++];
                        if (/[^s]/.test(a[8]) && "number" != e(d)) throw i("[_.sprintf] expecting number but found %s", e(d));
                        switch (a[8]) {
                            case "b":
                                d = d.toString(2);
                                break;
                            case "c":
                                d = String.fromCharCode(d);
                                break;
                            case "d":
                                d = parseInt(d, 10);
                                break;
                            case "e":
                                d = a[7] ? d.toExponential(a[7]) : d.toExponential();
                                break;
                            case "f":
                                d = a[7] ? parseFloat(d).toFixed(a[7]) : parseFloat(d);
                                break;
                            case "o":
                                d = d.toString(8);
                                break;
                            case "s":
                                d = (d = String(d)) && a[7] ? d.substring(0, a[7]) : d;
                                break;
                            case "u":
                                d = Math.abs(d);
                                break;
                            case "x":
                                d = d.toString(16);
                                break;
                            case "X":
                                d = d.toString(16).toUpperCase()
                        }
                        d = /[def]/.test(a[8]) && a[3] && d >= 0 ? "+" + d : d, s = a[4] ? "0" == a[4] ? "0" : a[4].charAt(1) : " ", u = a[6] - String(d).length, s = a[6] ? n(s, u) : "", h.push(a[5] ? d + s : s + d)
                    }
                    return h.join("")
                }, t.cache = {}, t.parse = function(e) {
                    for (var t = [], n = [], r = 0; e;) {
                        if (null !== (t = /^[^\x25]+/.exec(e))) n.push(t[0]);
                        else if (null !== (t = /^\x25{2}/.exec(e))) n.push("%");
                        else {
                            if (null === (t = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(e))) throw "[_.sprintf] huh?";
                            if (t[2]) {
                                r |= 1;
                                var i = [],
                                    o = t[2],
                                    s = [];
                                if (null === (s = /^([a-z_][a-z_\d]*)/i.exec(o))) throw "[_.sprintf] huh?";
                                for (i.push(s[1]);
                                    "" !== (o = o.substring(s[0].length));)
                                    if (null !== (s = /^\.([a-z_][a-z_\d]*)/i.exec(o))) i.push(s[1]);
                                    else {
                                        if (null === (s = /^\[(\d+)\]/.exec(o))) throw "[_.sprintf] huh?";
                                        i.push(s[1])
                                    }
                                t[2] = i
                            } else r |= 2;
                            if (3 === r) throw "[_.sprintf] mixing positional and named placeholders is not (yet) supported";
                            n.push(t)
                        }
                        e = e.substring(t[0].length)
                    }
                    return n
                }, t
            }(),
            o = {
                VERSION: "1.2.0",
                isBlank: r(function(e) {
                    return /^\s*$/.test(e)
                }),
                stripTags: r(function(e) {
                    return e.replace(/<\/?[^>]+>/gi, "")
                }),
                capitalize: r(function(e) {
                    return e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()
                }),
                chop: r(function(e, t) {
                    for (var t = 1 * t || 0 || e.length, n = [], r = 0; r < e.length;) n.push(e.slice(r, r + t)), r += t;
                    return n
                }),
                clean: r(function(e) {
                    return o.strip(e.replace(/\s+/g, " "))
                }),
                count: r(function(e, t) {
                    for (var n, r = 0, i = 0; i < e.length;) n = e.indexOf(t, i), n >= 0 && r++, i = i + (n >= 0 ? n : 0) + t.length;
                    return r
                }),
                chars: r(function(e) {
                    return e.split("")
                }),
                escapeHTML: r(function(e) {
                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
                }),
                unescapeHTML: r(function(e) {
                    return e.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&")
                }),
                escapeRegExp: r(function(e) {
                    return e.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1")
                }),
                insert: r(function(e, t, n) {
                    return e = e.split(""), e.splice(1 * t || 0, 0, n), e.join("")
                }),
                include: r(function(e, t) {
                    return -1 !== e.indexOf(t)
                }),
                join: r(function() {
                    var e = Array.prototype.slice.call(arguments);
                    return e.join(e.shift())
                }),
                lines: r(function(e) {
                    return e.split("\n")
                }),
                reverse: r(function(e) {
                    return Array.prototype.reverse.apply(String(e).split("")).join("")
                }),
                splice: r(function(e, t, n, r) {
                    return e = e.split(""), e.splice(1 * t || 0, 1 * n || 0, r), e.join("")
                }),
                startsWith: r(function(e, t) {
                    return e.length >= t.length && e.substring(0, t.length) === t
                }),
                endsWith: r(function(e, t) {
                    return e.length >= t.length && e.substring(e.length - t.length) === t
                }),
                succ: r(function(e) {
                    var t = e.split("");
                    return t.splice(e.length - 1, 1, String.fromCharCode(e.charCodeAt(e.length - 1) + 1)), t.join("")
                }),
                titleize: r(function(e) {
                    for (var t, e = e.split(" "), n = 0; n < e.length; n++) t = e[n].split(""), "undefined" != typeof t[0] && (t[0] = t[0].toUpperCase()), e[n] = n + 1 === e.length ? t.join("") : t.join("") + " ";
                    return e.join("")
                }),
                camelize: r(function(e) {
                    return o.trim(e).replace(/(\-|_|\s)+(.)?/g, function(e, t, n) {
                        return n ? n.toUpperCase() : ""
                    })
                }),
                underscored: function(e) {
                    return o.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1_$2").replace(/\-|\s+/g, "_").toLowerCase()
                },
                dasherize: function(e) {
                    return o.trim(e).replace(/([a-z\d])([A-Z]+)/g, "$1-$2").replace(/^([A-Z]+)/, "-$1").replace(/\_|\s+/g, "-").toLowerCase()
                },
                humanize: function(e) {
                    return o.capitalize(this.underscored(e).replace(/_id$/, "").replace(/_/g, " "))
                },
                trim: r(function(e, n) {
                    return !n && t ? t.call(e) : (n = n ? o.escapeRegExp(n) : "\\s", e.replace(RegExp("^[" + n + "]+|[" + n + "]+$", "g"), ""))
                }),
                ltrim: r(function(e, t) {
                    return t = t ? o.escapeRegExp(t) : "\\s", e.replace(RegExp("^[" + t + "]+", "g"), "")
                }),
                rtrim: r(function(e, t) {
                    return t = t ? o.escapeRegExp(t) : "\\s", e.replace(RegExp("[" + t + "]+$", "g"), "")
                }),
                truncate: r(function(e, t, n) {
                    return t = 1 * t || 0, e.length > t ? e.slice(0, t) + (n || "...") : e
                }),
                prune: r(function(e, t, n) {
                    var n = n || "...",
                        t = 1 * t || 0,
                        r = "",
                        r = 0 === e.substring(t - 1, t + 1).search(/^\w\w$/) ? o.rtrim(e.slice(0, t).replace(/([\W][\w]*)$/, "")) : o.rtrim(e.slice(0, t)),
                        r = r.replace(/\W+$/, "");
                    return r.length + n.length > e.length ? e : r + n
                }),
                words: function(e, t) {
                    return String(e).split(t || " ")
                },
                pad: r(function(e, t, r, i) {
                    var o = "",
                        o = 0,
                        t = 1 * t || 0;
                    switch (r ? r.length > 1 && (r = r.charAt(0)) : r = " ", i) {
                        case "right":
                            o = t - e.length, o = n(r, o), e += o;
                            break;
                        case "both":
                            o = t - e.length, o = {
                                left: n(r, Math.ceil(o / 2)),
                                right: n(r, Math.floor(o / 2))
                            }, e = o.left + e + o.right;
                            break;
                        default:
                            o = t - e.length, o = n(r, o), e = o + e
                    }
                    return e
                }),
                lpad: function(e, t, n) {
                    return o.pad(e, t, n)
                },
                rpad: function(e, t, n) {
                    return o.pad(e, t, n, "right")
                },
                lrpad: function(e, t, n) {
                    return o.pad(e, t, n, "both")
                },
                sprintf: i,
                vsprintf: function(e, t) {
                    return t.unshift(e), i.apply(null, t)
                },
                toNumber: function(e, t) {
                    var n;
                    return n = 1 * (1 * e || 0).toFixed(1 * t || 0) || 0, 0 !== n || "0" === e || 0 === e ? n : Number.NaN
                },
                strRight: r(function(e, t) {
                    var n = t ? e.indexOf(t) : -1;
                    return -1 != n ? e.slice(n + t.length, e.length) : e
                }),
                strRightBack: r(function(e, t) {
                    var n = t ? e.lastIndexOf(t) : -1;
                    return -1 != n ? e.slice(n + t.length, e.length) : e
                }),
                strLeft: r(function(e, t) {
                    var n = t ? e.indexOf(t) : -1;
                    return -1 != n ? e.slice(0, n) : e
                }),
                strLeftBack: r(function(e, t) {
                    var n = e.lastIndexOf(t);
                    return -1 != n ? e.slice(0, n) : e
                }),
                exports: function() {
                    var e, t = {};
                    for (e in this) this.hasOwnProperty(e) && "include" != e && "contains" != e && "reverse" != e && (t[e] = this[e]);
                    return t
                }
            };
        o.strip = o.trim, o.lstrip = o.ltrim, o.rstrip = o.rtrim, o.center = o.lrpad, o.ljust = o.lpad, o.rjust = o.rpad, o.contains = o.include, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (module.exports = o), exports._s = o) : "undefined" != typeof e._ ? (e._.string = o, e._.str = e._.string) : e._ = {
            string: o,
            str: o
        }
    }(this || window);
var Handlebars = {};
Handlebars.VERSION = "1.0.beta.6", Handlebars.helpers = {}, Handlebars.partials = {}, Handlebars.registerHelper = function(e, t, n) {
    n && (t.not = n), this.helpers[e] = t
}, Handlebars.registerPartial = function(e, t) {
    this.partials[e] = t
}, Handlebars.registerHelper("helperMissing", function(e) {
    if (2 === arguments.length) return void 0;
    throw new Error("Could not find property '" + e + "'")
});
var toString = Object.prototype.toString,
    functionType = "[object Function]";
Handlebars.registerHelper("blockHelperMissing", function(e, t) {
    var n = t.inverse || function() {},
        r = t.fn,
        i = "",
        o = toString.call(e);
    if (o === functionType && (e = e.call(this)), e === !0) return r(this);
    if (e === !1 || null == e) return n(this);
    if ("[object Array]" === o) {
        if (e.length > 0)
            for (var s = 0, a = e.length; a > s; s++) i += r(e[s]);
        else i = n(this);
        return i
    }
    return r(e)
}), Handlebars.registerHelper("each", function(e, t) {
    var n = t.fn,
        r = t.inverse,
        i = "";
    if (e && e.length > 0)
        for (var o = 0, s = e.length; s > o; o++) i += n(e[o]);
    else i = r(this);
    return i
}), Handlebars.registerHelper("if", function(e, t) {
    var n = toString.call(e);
    return n === functionType && (e = e.call(this)), !e || Handlebars.Utils.isEmpty(e) ? t.inverse(this) : t.fn(this)
}), Handlebars.registerHelper("unless", function(e, t) {
    var n = t.fn,
        r = t.inverse;
    return t.fn = r, t.inverse = n, Handlebars.helpers["if"].call(this, e, t)
}), Handlebars.registerHelper("with", function(e, t) {
    return t.fn(e)
}), Handlebars.registerHelper("log", function(e) {
    Handlebars.log(e)
});
var handlebars = function() {
    var e = {
            trace: function() {},
            yy: {},
            symbols_: {
                error: 2,
                root: 3,
                program: 4,
                EOF: 5,
                statements: 6,
                simpleInverse: 7,
                statement: 8,
                openInverse: 9,
                closeBlock: 10,
                openBlock: 11,
                mustache: 12,
                partial: 13,
                CONTENT: 14,
                COMMENT: 15,
                OPEN_BLOCK: 16,
                inMustache: 17,
                CLOSE: 18,
                OPEN_INVERSE: 19,
                OPEN_ENDBLOCK: 20,
                path: 21,
                OPEN: 22,
                OPEN_UNESCAPED: 23,
                OPEN_PARTIAL: 24,
                params: 25,
                hash: 26,
                param: 27,
                STRING: 28,
                INTEGER: 29,
                BOOLEAN: 30,
                hashSegments: 31,
                hashSegment: 32,
                ID: 33,
                EQUALS: 34,
                pathSegments: 35,
                SEP: 36,
                $accept: 0,
                $end: 1
            },
            terminals_: {
                2: "error",
                5: "EOF",
                14: "CONTENT",
                15: "COMMENT",
                16: "OPEN_BLOCK",
                18: "CLOSE",
                19: "OPEN_INVERSE",
                20: "OPEN_ENDBLOCK",
                22: "OPEN",
                23: "OPEN_UNESCAPED",
                24: "OPEN_PARTIAL",
                28: "STRING",
                29: "INTEGER",
                30: "BOOLEAN",
                33: "ID",
                34: "EQUALS",
                36: "SEP"
            },
            productions_: [0, [3, 2],
                [4, 3],
                [4, 1],
                [4, 0],
                [6, 1],
                [6, 2],
                [8, 3],
                [8, 3],
                [8, 1],
                [8, 1],
                [8, 1],
                [8, 1],
                [11, 3],
                [9, 3],
                [10, 3],
                [12, 3],
                [12, 3],
                [13, 3],
                [13, 4],
                [7, 2],
                [17, 3],
                [17, 2],
                [17, 2],
                [17, 1],
                [25, 2],
                [25, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [27, 1],
                [26, 1],
                [31, 2],
                [31, 1],
                [32, 3],
                [32, 3],
                [32, 3],
                [32, 3],
                [21, 1],
                [35, 3],
                [35, 1]
            ],
            performAction: function(e, t, n, r, i, o) {
                var s = o.length - 1;
                switch (i) {
                    case 1:
                        return o[s - 1];
                    case 2:
                        this.$ = new r.ProgramNode(o[s - 2], o[s]);
                        break;
                    case 3:
                        this.$ = new r.ProgramNode(o[s]);
                        break;
                    case 4:
                        this.$ = new r.ProgramNode([]);
                        break;
                    case 5:
                        this.$ = [o[s]];
                        break;
                    case 6:
                        o[s - 1].push(o[s]), this.$ = o[s - 1];
                        break;
                    case 7:
                        this.$ = new r.InverseNode(o[s - 2], o[s - 1], o[s]);
                        break;
                    case 8:
                        this.$ = new r.BlockNode(o[s - 2], o[s - 1], o[s]);
                        break;
                    case 9:
                        this.$ = o[s];
                        break;
                    case 10:
                        this.$ = o[s];
                        break;
                    case 11:
                        this.$ = new r.ContentNode(o[s]);
                        break;
                    case 12:
                        this.$ = new r.CommentNode(o[s]);
                        break;
                    case 13:
                        this.$ = new r.MustacheNode(o[s - 1][0], o[s - 1][1]);
                        break;
                    case 14:
                        this.$ = new r.MustacheNode(o[s - 1][0], o[s - 1][1]);
                        break;
                    case 15:
                        this.$ = o[s - 1];
                        break;
                    case 16:
                        this.$ = new r.MustacheNode(o[s - 1][0], o[s - 1][1]);
                        break;
                    case 17:
                        this.$ = new r.MustacheNode(o[s - 1][0], o[s - 1][1], !0);
                        break;
                    case 18:
                        this.$ = new r.PartialNode(o[s - 1]);
                        break;
                    case 19:
                        this.$ = new r.PartialNode(o[s - 2], o[s - 1]);
                        break;
                    case 20:
                        break;
                    case 21:
                        this.$ = [
                            [o[s - 2]].concat(o[s - 1]), o[s]
                        ];
                        break;
                    case 22:
                        this.$ = [
                            [o[s - 1]].concat(o[s]), null
                        ];
                        break;
                    case 23:
                        this.$ = [
                            [o[s - 1]], o[s]
                        ];
                        break;
                    case 24:
                        this.$ = [
                            [o[s]], null
                        ];
                        break;
                    case 25:
                        o[s - 1].push(o[s]), this.$ = o[s - 1];
                        break;
                    case 26:
                        this.$ = [o[s]];
                        break;
                    case 27:
                        this.$ = o[s];
                        break;
                    case 28:
                        this.$ = new r.StringNode(o[s]);
                        break;
                    case 29:
                        this.$ = new r.IntegerNode(o[s]);
                        break;
                    case 30:
                        this.$ = new r.BooleanNode(o[s]);
                        break;
                    case 31:
                        this.$ = new r.HashNode(o[s]);
                        break;
                    case 32:
                        o[s - 1].push(o[s]), this.$ = o[s - 1];
                        break;
                    case 33:
                        this.$ = [o[s]];
                        break;
                    case 34:
                        this.$ = [o[s - 2], o[s]];
                        break;
                    case 35:
                        this.$ = [o[s - 2], new r.StringNode(o[s])];
                        break;
                    case 36:
                        this.$ = [o[s - 2], new r.IntegerNode(o[s])];
                        break;
                    case 37:
                        this.$ = [o[s - 2], new r.BooleanNode(o[s])];
                        break;
                    case 38:
                        this.$ = new r.IdNode(o[s]);
                        break;
                    case 39:
                        o[s - 2].push(o[s]), this.$ = o[s - 2];
                        break;
                    case 40:
                        this.$ = [o[s]]
                }
            },
            table: [{
                3: 1,
                4: 2,
                5: [2, 4],
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                1: [3]
            }, {
                5: [1, 16]
            }, {
                5: [2, 3],
                7: 17,
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 19],
                20: [2, 3],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 5],
                14: [2, 5],
                15: [2, 5],
                16: [2, 5],
                19: [2, 5],
                20: [2, 5],
                22: [2, 5],
                23: [2, 5],
                24: [2, 5]
            }, {
                4: 20,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                4: 21,
                6: 3,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 4],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 9],
                14: [2, 9],
                15: [2, 9],
                16: [2, 9],
                19: [2, 9],
                20: [2, 9],
                22: [2, 9],
                23: [2, 9],
                24: [2, 9]
            }, {
                5: [2, 10],
                14: [2, 10],
                15: [2, 10],
                16: [2, 10],
                19: [2, 10],
                20: [2, 10],
                22: [2, 10],
                23: [2, 10],
                24: [2, 10]
            }, {
                5: [2, 11],
                14: [2, 11],
                15: [2, 11],
                16: [2, 11],
                19: [2, 11],
                20: [2, 11],
                22: [2, 11],
                23: [2, 11],
                24: [2, 11]
            }, {
                5: [2, 12],
                14: [2, 12],
                15: [2, 12],
                16: [2, 12],
                19: [2, 12],
                20: [2, 12],
                22: [2, 12],
                23: [2, 12],
                24: [2, 12]
            }, {
                17: 22,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 26,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 27,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                17: 28,
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                21: 29,
                33: [1, 25],
                35: 24
            }, {
                1: [2, 1]
            }, {
                6: 30,
                8: 4,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                5: [2, 6],
                14: [2, 6],
                15: [2, 6],
                16: [2, 6],
                19: [2, 6],
                20: [2, 6],
                22: [2, 6],
                23: [2, 6],
                24: [2, 6]
            }, {
                17: 22,
                18: [1, 31],
                21: 23,
                33: [1, 25],
                35: 24
            }, {
                10: 32,
                20: [1, 33]
            }, {
                10: 34,
                20: [1, 33]
            }, {
                18: [1, 35]
            }, {
                18: [2, 24],
                21: 40,
                25: 36,
                26: 37,
                27: 38,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 38],
                28: [2, 38],
                29: [2, 38],
                30: [2, 38],
                33: [2, 38],
                36: [1, 46]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                36: [2, 40]
            }, {
                18: [1, 47]
            }, {
                18: [1, 48]
            }, {
                18: [1, 49]
            }, {
                18: [1, 50],
                21: 51,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 2],
                8: 18,
                9: 5,
                11: 6,
                12: 7,
                13: 8,
                14: [1, 9],
                15: [1, 10],
                16: [1, 12],
                19: [1, 11],
                20: [2, 2],
                22: [1, 13],
                23: [1, 14],
                24: [1, 15]
            }, {
                14: [2, 20],
                15: [2, 20],
                16: [2, 20],
                19: [2, 20],
                22: [2, 20],
                23: [2, 20],
                24: [2, 20]
            }, {
                5: [2, 7],
                14: [2, 7],
                15: [2, 7],
                16: [2, 7],
                19: [2, 7],
                20: [2, 7],
                22: [2, 7],
                23: [2, 7],
                24: [2, 7]
            }, {
                21: 52,
                33: [1, 25],
                35: 24
            }, {
                5: [2, 8],
                14: [2, 8],
                15: [2, 8],
                16: [2, 8],
                19: [2, 8],
                20: [2, 8],
                22: [2, 8],
                23: [2, 8],
                24: [2, 8]
            }, {
                14: [2, 14],
                15: [2, 14],
                16: [2, 14],
                19: [2, 14],
                20: [2, 14],
                22: [2, 14],
                23: [2, 14],
                24: [2, 14]
            }, {
                18: [2, 22],
                21: 40,
                26: 53,
                27: 54,
                28: [1, 41],
                29: [1, 42],
                30: [1, 43],
                31: 39,
                32: 44,
                33: [1, 45],
                35: 24
            }, {
                18: [2, 23]
            }, {
                18: [2, 26],
                28: [2, 26],
                29: [2, 26],
                30: [2, 26],
                33: [2, 26]
            }, {
                18: [2, 31],
                32: 55,
                33: [1, 56]
            }, {
                18: [2, 27],
                28: [2, 27],
                29: [2, 27],
                30: [2, 27],
                33: [2, 27]
            }, {
                18: [2, 28],
                28: [2, 28],
                29: [2, 28],
                30: [2, 28],
                33: [2, 28]
            }, {
                18: [2, 29],
                28: [2, 29],
                29: [2, 29],
                30: [2, 29],
                33: [2, 29]
            }, {
                18: [2, 30],
                28: [2, 30],
                29: [2, 30],
                30: [2, 30],
                33: [2, 30]
            }, {
                18: [2, 33],
                33: [2, 33]
            }, {
                18: [2, 40],
                28: [2, 40],
                29: [2, 40],
                30: [2, 40],
                33: [2, 40],
                34: [1, 57],
                36: [2, 40]
            }, {
                33: [1, 58]
            }, {
                14: [2, 13],
                15: [2, 13],
                16: [2, 13],
                19: [2, 13],
                20: [2, 13],
                22: [2, 13],
                23: [2, 13],
                24: [2, 13]
            }, {
                5: [2, 16],
                14: [2, 16],
                15: [2, 16],
                16: [2, 16],
                19: [2, 16],
                20: [2, 16],
                22: [2, 16],
                23: [2, 16],
                24: [2, 16]
            }, {
                5: [2, 17],
                14: [2, 17],
                15: [2, 17],
                16: [2, 17],
                19: [2, 17],
                20: [2, 17],
                22: [2, 17],
                23: [2, 17],
                24: [2, 17]
            }, {
                5: [2, 18],
                14: [2, 18],
                15: [2, 18],
                16: [2, 18],
                19: [2, 18],
                20: [2, 18],
                22: [2, 18],
                23: [2, 18],
                24: [2, 18]
            }, {
                18: [1, 59]
            }, {
                18: [1, 60]
            }, {
                18: [2, 21]
            }, {
                18: [2, 25],
                28: [2, 25],
                29: [2, 25],
                30: [2, 25],
                33: [2, 25]
            }, {
                18: [2, 32],
                33: [2, 32]
            }, {
                34: [1, 57]
            }, {
                21: 61,
                28: [1, 62],
                29: [1, 63],
                30: [1, 64],
                33: [1, 25],
                35: 24
            }, {
                18: [2, 39],
                28: [2, 39],
                29: [2, 39],
                30: [2, 39],
                33: [2, 39],
                36: [2, 39]
            }, {
                5: [2, 19],
                14: [2, 19],
                15: [2, 19],
                16: [2, 19],
                19: [2, 19],
                20: [2, 19],
                22: [2, 19],
                23: [2, 19],
                24: [2, 19]
            }, {
                5: [2, 15],
                14: [2, 15],
                15: [2, 15],
                16: [2, 15],
                19: [2, 15],
                20: [2, 15],
                22: [2, 15],
                23: [2, 15],
                24: [2, 15]
            }, {
                18: [2, 34],
                33: [2, 34]
            }, {
                18: [2, 35],
                33: [2, 35]
            }, {
                18: [2, 36],
                33: [2, 36]
            }, {
                18: [2, 37],
                33: [2, 37]
            }],
            defaultActions: {
                16: [2, 1],
                37: [2, 23],
                53: [2, 21]
            },
            parseError: function(e) {
                throw new Error(e)
            },
            parse: function(e) {
                function t() {
                    var e;
                    return e = n.lexer.lex() || 1, "number" != typeof e && (e = n.symbols_[e] || e), e
                }
                var n = this,
                    r = [0],
                    i = [null],
                    o = [],
                    s = this.table,
                    a = "",
                    u = 0,
                    l = 0,
                    c = 0;
                this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                var d = this.lexer.yylloc;
                o.push(d), "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                for (var h, p, f, m, g, v, y, b, w, x = {};;) {
                    if (f = r[r.length - 1], this.defaultActions[f] ? m = this.defaultActions[f] : (null == h && (h = t()), m = s[f] && s[f][h]), !("undefined" != typeof m && m.length && m[0] || c)) {
                        w = [];
                        for (v in s[f]) this.terminals_[v] && v > 2 && w.push("'" + this.terminals_[v] + "'");
                        var _ = "";
                        _ = this.lexer.showPosition ? "Parse error on line " + (u + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + this.terminals_[h] + "'" : "Parse error on line " + (u + 1) + ": Unexpected " + (1 == h ? "end of input" : "'" + (this.terminals_[h] || h) + "'"), this.parseError(_, {
                            text: this.lexer.match,
                            token: this.terminals_[h] || h,
                            line: this.lexer.yylineno,
                            loc: d,
                            expected: w
                        })
                    }
                    if (m[0] instanceof Array && m.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + f + ", token: " + h);
                    switch (m[0]) {
                        case 1:
                            r.push(h), i.push(this.lexer.yytext), o.push(this.lexer.yylloc), r.push(m[1]), h = null, p ? (h = p, p = null) : (l = this.lexer.yyleng, a = this.lexer.yytext, u = this.lexer.yylineno, d = this.lexer.yylloc, c > 0 && c--);
                            break;
                        case 2:
                            if (y = this.productions_[m[1]][1], x.$ = i[i.length - y], x._$ = {
                                    first_line: o[o.length - (y || 1)].first_line,
                                    last_line: o[o.length - 1].last_line,
                                    first_column: o[o.length - (y || 1)].first_column,
                                    last_column: o[o.length - 1].last_column
                                }, g = this.performAction.call(x, a, l, u, this.yy, m[1], i, o), "undefined" != typeof g) return g;
                            y && (r = r.slice(0, 2 * -1 * y), i = i.slice(0, -1 * y), o = o.slice(0, -1 * y)), r.push(this.productions_[m[1]][0]), i.push(x.$), o.push(x._$), b = s[r[r.length - 2]][r[r.length - 1]], r.push(b);
                            break;
                        case 3:
                            return !0
                    }
                }
                return !0
            }
        },
        t = function() {
            var e = {
                EOF: 1,
                parseError: function(e, t) {
                    if (!this.yy.parseError) throw new Error(e);
                    this.yy.parseError(e, t)
                },
                setInput: function(e) {
                    return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0
                    }, this
                },
                input: function() {
                    var e = this._input[0];
                    this.yytext += e, this.yyleng++, this.match += e, this.matched += e;
                    var t = e.match(/\n/);
                    return t && this.yylineno++, this._input = this._input.slice(1), e
                },
                unput: function(e) {
                    return this._input = e + this._input, this
                },
                more: function() {
                    return this._more = !0, this
                },
                pastInput: function() {
                    var e = this.matched.substr(0, this.matched.length - this.match.length);
                    return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                },
                upcomingInput: function() {
                    var e = this.match;
                    return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                },
                showPosition: function() {
                    var e = this.pastInput(),
                        t = new Array(e.length + 1).join("-");
                    return e + this.upcomingInput() + "\n" + t + "^"
                },
                next: function() {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var e, t, n;
                    this._more || (this.yytext = "", this.match = "");
                    for (var r = this._currentRules(), i = 0; i < r.length; i++)
                        if (t = this._input.match(this.rules[r[i]])) return n = t[0].match(/\n.*/g), n && (this.yylineno += n.length), this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: n ? n[n.length - 1].length - 1 : this.yylloc.last_column + t[0].length
                        }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, r[i], this.conditionStack[this.conditionStack.length - 1]), e ? e : void 0;
                    return "" === this._input ? this.EOF : (this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                        text: "",
                        token: null,
                        line: this.yylineno
                    }), void 0)
                },
                lex: function() {
                    var e = this.next();
                    return "undefined" != typeof e ? e : this.lex()
                },
                begin: function(e) {
                    this.conditionStack.push(e)
                },
                popState: function() {
                    return this.conditionStack.pop()
                },
                _currentRules: function() {
                    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                },
                topState: function() {
                    return this.conditionStack[this.conditionStack.length - 2]
                },
                pushState: function(e) {
                    this.begin(e)
                }
            };
            return e.performAction = function(e, t, n, r) {
                switch (n) {
                    case 0:
                        if ("\\" !== t.yytext.slice(-1) && this.begin("mu"), "\\" === t.yytext.slice(-1) && (t.yytext = t.yytext.substr(0, t.yyleng - 1), this.begin("emu")), t.yytext) return 14;
                        break;
                    case 1:
                        return 14;
                    case 2:
                        return this.popState(), 14;
                    case 3:
                        return 24;
                    case 4:
                        return 16;
                    case 5:
                        return 20;
                    case 6:
                        return 19;
                    case 7:
                        return 19;
                    case 8:
                        return 23;
                    case 9:
                        return 23;
                    case 10:
                        return t.yytext = t.yytext.substr(3, t.yyleng - 5), this.popState(), 15;
                    case 11:
                        return 22;
                    case 12:
                        return 34;
                    case 13:
                        return 33;
                    case 14:
                        return 33;
                    case 15:
                        return 36;
                    case 16:
                        break;
                    case 17:
                        return this.popState(), 18;
                    case 18:
                        return this.popState(), 18;
                    case 19:
                        return t.yytext = t.yytext.substr(1, t.yyleng - 2).replace(/\\"/g, '"'), 28;
                    case 20:
                        return 30;
                    case 21:
                        return 30;
                    case 22:
                        return 29;
                    case 23:
                        return 33;
                    case 24:
                        return t.yytext = t.yytext.substr(1, t.yyleng - 2), 33;
                    case 25:
                        return "INVALID";
                    case 26:
                        return 5
                }
            }, e.rules = [/^[^\x00]*?(?=(\{\{))/, /^[^\x00]+/, /^[^\x00]{2,}?(?=(\{\{))/, /^\{\{>/, /^\{\{#/, /^\{\{\//, /^\{\{\^/, /^\{\{\s*else\b/, /^\{\{\{/, /^\{\{&/, /^\{\{![\s\S]*?\}\}/, /^\{\{/, /^=/, /^\.(?=[} ])/, /^\.\./, /^[\/.]/, /^\s+/, /^\}\}\}/, /^\}\}/, /^"(\\["]|[^"])*"/, /^true(?=[}\s])/, /^false(?=[}\s])/, /^[0-9]+(?=[}\s])/, /^[a-zA-Z0-9_$-]+(?=[=}\s\/.])/, /^\[[^\]]*\]/, /^./, /^$/], e.conditions = {
                mu: {
                    rules: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26],
                    inclusive: !1
                },
                emu: {
                    rules: [2],
                    inclusive: !1
                },
                INITIAL: {
                    rules: [0, 1, 26],
                    inclusive: !0
                }
            }, e
        }();
    return e.lexer = t, e
}();
"undefined" != typeof require && "undefined" != typeof exports && (exports.parser = handlebars, exports.parse = function() {
        return handlebars.parse.apply(handlebars, arguments)
    }, exports.main = function(e) {
        if (!e[1]) throw new Error("Usage: " + e[0] + " FILE");
        if ("undefined" != typeof process) var t = require("fs").readFileSync(require("path").join(process.cwd(), e[1]), "utf8");
        else var n = require("file").path(require("file").cwd()),
            t = n.join(e[1]).read({
                charset: "utf-8"
            });
        return exports.parser.parse(t)
    }, "undefined" != typeof module && require.main === module && exports.main("undefined" != typeof process ? process.argv.slice(1) : require("system").args)), Handlebars.Parser = handlebars, Handlebars.parse = function(e) {
        return Handlebars.Parser.yy = Handlebars.AST, Handlebars.Parser.parse(e)
    }, Handlebars.print = function(e) {
        return (new Handlebars.PrintVisitor).accept(e)
    }, Handlebars.logger = {
        DEBUG: 0,
        INFO: 1,
        WARN: 2,
        ERROR: 3,
        level: 3,
        log: function() {}
    }, Handlebars.log = function(e, t) {
        Handlebars.logger.log(e, t)
    },
    function() {
        Handlebars.AST = {}, Handlebars.AST.ProgramNode = function(e, t) {
            this.type = "program", this.statements = e, t && (this.inverse = new Handlebars.AST.ProgramNode(t))
        }, Handlebars.AST.MustacheNode = function(e, t, n) {
            this.type = "mustache", this.id = e[0], this.params = e.slice(1), this.hash = t, this.escaped = !n
        }, Handlebars.AST.PartialNode = function(e, t) {
            this.type = "partial", this.id = e, this.context = t
        };
        var e = function(e, t) {
            if (e.original !== t.original) throw new Handlebars.Exception(e.original + " doesn't match " + t.original)
        };
        Handlebars.AST.BlockNode = function(t, n, r) {
            e(t.id, r), this.type = "block", this.mustache = t, this.program = n
        }, Handlebars.AST.InverseNode = function(t, n, r) {
            e(t.id, r), this.type = "inverse", this.mustache = t, this.program = n
        }, Handlebars.AST.ContentNode = function(e) {
            this.type = "content", this.string = e
        }, Handlebars.AST.HashNode = function(e) {
            this.type = "hash", this.pairs = e
        }, Handlebars.AST.IdNode = function(e) {
            this.type = "ID", this.original = e.join(".");
            for (var t = [], n = 0, r = 0, i = e.length; i > r; r++) {
                var o = e[r];
                ".." === o ? n++ : "." === o || "this" === o ? this.isScoped = !0 : t.push(o)
            }
            this.parts = t, this.string = t.join("."), this.depth = n, this.isSimple = 1 === t.length && 0 === n
        }, Handlebars.AST.StringNode = function(e) {
            this.type = "STRING", this.string = e
        }, Handlebars.AST.IntegerNode = function(e) {
            this.type = "INTEGER", this.integer = e
        }, Handlebars.AST.BooleanNode = function(e) {
            this.type = "BOOLEAN", this.bool = e
        }, Handlebars.AST.CommentNode = function(e) {
            this.type = "comment", this.comment = e
        }
    }(), Handlebars.Exception = function() {
        var e = Error.prototype.constructor.apply(this, arguments);
        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
        this.message = e.message
    }, Handlebars.Exception.prototype = new Error, Handlebars.SafeString = function(e) {
        this.string = e
    }, Handlebars.SafeString.prototype.toString = function() {
        return this.string.toString()
    },
    function() {
        var e = {
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#x27;",
                "`": "&#x60;"
            },
            t = /&(?!\w+;)|[<>"'`]/g,
            n = /[&<>"'`]/,
            r = function(t) {
                return e[t] || "&amp;"
            };
        Handlebars.Utils = {
            escapeExpression: function(e) {
                return e instanceof Handlebars.SafeString ? e.toString() : null == e || e === !1 ? "" : n.test(e) ? e.replace(t, r) : e
            },
            isEmpty: function(e) {
                return "undefined" == typeof e ? !0 : null === e ? !0 : e === !1 ? !0 : "[object Array]" === Object.prototype.toString.call(e) && 0 === e.length ? !0 : !1
            }
        }
    }(), Handlebars.Compiler = function() {}, Handlebars.JavaScriptCompiler = function() {},
    function(e, t) {
        e.OPCODE_MAP = {
            appendContent: 1,
            getContext: 2,
            lookupWithHelpers: 3,
            lookup: 4,
            append: 5,
            invokeMustache: 6,
            appendEscaped: 7,
            pushString: 8,
            truthyOrFallback: 9,
            functionOrFallback: 10,
            invokeProgram: 11,
            invokePartial: 12,
            push: 13,
            assignToHash: 15,
            pushStringParam: 16
        }, e.MULTI_PARAM_OPCODES = {
            appendContent: 1,
            getContext: 1,
            lookupWithHelpers: 2,
            lookup: 1,
            invokeMustache: 3,
            pushString: 1,
            truthyOrFallback: 1,
            functionOrFallback: 1,
            invokeProgram: 3,
            invokePartial: 1,
            push: 1,
            assignToHash: 1,
            pushStringParam: 1
        }, e.DISASSEMBLE_MAP = {};
        for (var n in e.OPCODE_MAP) {
            var r = e.OPCODE_MAP[n];
            e.DISASSEMBLE_MAP[r] = n
        }
        e.multiParamSize = function(t) {
            return e.MULTI_PARAM_OPCODES[e.DISASSEMBLE_MAP[t]]
        }, e.prototype = {
            compiler: e,
            disassemble: function() {
                for (var t, n, r, i, o, s = this.opcodes, a = [], u = 0, l = s.length; l > u; u++)
                    if (t = s[u], "DECLARE" === t) i = s[++u], o = s[++u], a.push("DECLARE " + i + " = " + o);
                    else {
                        r = e.DISASSEMBLE_MAP[t];
                        for (var c = e.multiParamSize(t), d = [], h = 0; c > h; h++) n = s[++u], "string" == typeof n && (n = '"' + n.replace("\n", "\\n") + '"'), d.push(n);
                        r = r + " " + d.join(" "), a.push(r)
                    }
                return a.join("\n")
            },
            guid: 0,
            compile: function(e, t) {
                this.children = [], this.depths = {
                    list: []
                }, this.options = t;
                var n = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                        helperMissing: !0,
                        blockHelperMissing: !0,
                        each: !0,
                        "if": !0,
                        unless: !0,
                        "with": !0,
                        log: !0
                    }, n)
                    for (var r in n) this.options.knownHelpers[r] = n[r];
                return this.program(e)
            },
            accept: function(e) {
                return this[e.type](e)
            },
            program: function(e) {
                var t, n = e.statements;
                this.opcodes = [];
                for (var r = 0, i = n.length; i > r; r++) t = n[r], this[t.type](t);
                return this.isSimple = 1 === i, this.depths.list = this.depths.list.sort(function(e, t) {
                    return e - t
                }), this
            },
            compileProgram: function(e) {
                var t = (new this.compiler).compile(e, this.options),
                    n = this.guid++;
                this.usePartial = this.usePartial || t.usePartial, this.children[n] = t;
                for (var r = 0, i = t.depths.list.length; i > r; r++) depth = t.depths.list[r], 2 > depth || this.addDepth(depth - 1);
                return n
            },
            block: function(e) {
                var t, n = e.mustache,
                    r = this.setupStackForMustache(n),
                    i = this.compileProgram(e.program);
                e.program.inverse && (t = this.compileProgram(e.program.inverse), this.declare("inverse", t)), this.opcode("invokeProgram", i, r.length, !!n.hash), this.declare("inverse", null), this.opcode("append")
            },
            inverse: function(e) {
                var t = this.setupStackForMustache(e.mustache),
                    n = this.compileProgram(e.program);
                this.declare("inverse", n), this.opcode("invokeProgram", null, t.length, !!e.mustache.hash), this.declare("inverse", null), this.opcode("append")
            },
            hash: function(e) {
                var t, n, r = e.pairs;
                this.opcode("push", "{}");
                for (var i = 0, o = r.length; o > i; i++) t = r[i], n = t[1], this.accept(n), this.opcode("assignToHash", t[0])
            },
            partial: function(e) {
                var t = e.id;
                this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.original), this.opcode("append")
            },
            content: function(e) {
                this.opcode("appendContent", e.string)
            },
            mustache: function(e) {
                var t = this.setupStackForMustache(e);
                this.opcode("invokeMustache", t.length, e.id.original, !!e.hash), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            ID: function(e) {
                this.addDepth(e.depth), this.opcode("getContext", e.depth), this.opcode("lookupWithHelpers", e.parts[0] || null, e.isScoped || !1);
                for (var t = 1, n = e.parts.length; n > t; t++) this.opcode("lookup", e.parts[t])
            },
            STRING: function(e) {
                this.opcode("pushString", e.string)
            },
            INTEGER: function(e) {
                this.opcode("push", e.integer)
            },
            BOOLEAN: function(e) {
                this.opcode("push", e.bool)
            },
            comment: function() {},
            pushParams: function(e) {
                for (var t, n = e.length; n--;) t = e[n], this.options.stringParams ? (t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", t.string)) : this[t.type](t)
            },
            opcode: function(t, n, r, i) {
                this.opcodes.push(e.OPCODE_MAP[t]), void 0 !== n && this.opcodes.push(n), void 0 !== r && this.opcodes.push(r), void 0 !== i && this.opcodes.push(i)
            },
            declare: function(e, t) {
                this.opcodes.push("DECLARE"), this.opcodes.push(e), this.opcodes.push(t)
            },
            addDepth: function(e) {
                0 !== e && (this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e)))
            },
            setupStackForMustache: function(e) {
                var t = e.params;
                return this.pushParams(t), e.hash && this.hash(e.hash), this.ID(e.id), t
            }
        }, t.prototype = {
            nameLookup: function(e, n) {
                return /^[0-9]+$/.test(n) ? e + "[" + n + "]" : t.isValidJavaScriptVariableName(n) ? e + "." + n : e + "['" + n + "']"
            },
            appendToBuffer: function(e) {
                return this.environment.isSimple ? "return " + e + ";" : "buffer += " + e + ";"
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(e, t, n, r) {
                this.environment = e, this.options = t || {}, this.name = this.environment.name, this.isChild = !!n, this.context = n || {
                    programs: [],
                    aliases: {
                        self: "this"
                    },
                    registers: {
                        list: []
                    }
                }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.compileChildren(e, t);
                var i, o = e.opcodes;
                for (this.i = 0, a = o.length; this.i < a; this.i++) i = this.nextOpcode(0), "DECLARE" === i[0] ? (this.i = this.i + 2, this[i[1]] = i[2]) : (this.i = this.i + i[1].length, this[i[0]].apply(this, i[1]));
                return this.createFunctionContext(r)
            },
            nextOpcode: function(t) {
                var n, r, i, o, s = this.environment.opcodes,
                    a = s[this.i + t];
                if ("DECLARE" === a) return n = s[this.i + 1], r = s[this.i + 2], ["DECLARE", n, r];
                n = e.DISASSEMBLE_MAP[a], i = e.multiParamSize(a), o = [];
                for (var u = 0; i > u; u++) o.push(s[this.i + u + 1 + t]);
                return [n, o]
            },
            eat: function(e) {
                this.i = this.i + e.length
            },
            preamble: function() {
                var e = [];
                if (this.useRegister("foundHelper"), this.isChild) e.push("");
                else {
                    var t = this.namespace,
                        n = "helpers = helpers || " + t + ".helpers;";
                    this.environment.usePartial && (n = n + " partials = partials || " + t + ".partials;"), e.push(n)
                }
                this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
            },
            createFunctionContext: function(e) {
                var t = this.stackVars;
                if (this.isChild || (t = t.concat(this.context.registers.list)), t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", ")), !this.isChild)
                    for (var n in this.context.aliases) this.source[1] = this.source[1] + ", " + n + "=" + this.context.aliases[n];
                this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.source.push("return buffer;");
                for (var r = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], i = 0, o = this.environment.depths.list.length; o > i; i++) r.push("depth" + this.environment.depths.list[i]);
                if (e) return r.push(this.source.join("\n  ")), Function.apply(this, r);
                var s = "function " + (this.name || "") + "(" + r.join(",") + ") {\n  " + this.source.join("\n  ") + "}";
                return Handlebars.log(Handlebars.logger.DEBUG, s + "\n\n"), s
            },
            appendContent: function(e) {
                this.source.push(this.appendToBuffer(this.quotedString(e)))
            },
            append: function() {
                var e = this.popStack();
                this.source.push("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.source.push("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                var e = this.nextOpcode(1),
                    t = "";
                this.context.aliases.escapeExpression = "this.escapeExpression", "appendContent" === e[0] && (t = " + " + this.quotedString(e[1][0]), this.eat(e)), this.source.push(this.appendToBuffer("escapeExpression(" + this.popStack() + ")" + t))
            },
            getContext: function(e) {
                this.lastContext !== e && (this.lastContext = e)
            },
            lookupWithHelpers: function(e, t) {
                if (e) {
                    var n = this.nextStack();
                    this.usingKnownHelper = !1;
                    var r;
                    !t && this.options.knownHelpers[e] ? (r = n + " = " + this.nameLookup("helpers", e, "helper"), this.usingKnownHelper = !0) : t || this.options.knownHelpersOnly ? r = n + " = " + this.nameLookup("depth" + this.lastContext, e, "context") : (this.register("foundHelper", this.nameLookup("helpers", e, "helper")), r = n + " = foundHelper || " + this.nameLookup("depth" + this.lastContext, e, "context")), r += ";", this.source.push(r)
                } else this.pushStack("depth" + this.lastContext)
            },
            lookup: function(e) {
                var t = this.topStack();
                this.source.push(t + " = (" + t + " === null || " + t + " === undefined || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context") + ");")
            },
            pushStringParam: function(e) {
                this.pushStack("depth" + this.lastContext), this.pushString(e)
            },
            pushString: function(e) {
                this.pushStack(this.quotedString(e))
            },
            push: function(e) {
                this.pushStack(e)
            },
            invokeMustache: function(e, t, n) {
                this.populateParams(e, this.quotedString(t), "{}", null, n, function(e, t, n) {
                    this.usingKnownHelper || (this.context.aliases.helperMissing = "helpers.helperMissing", this.context.aliases.undef = "void 0", this.source.push("else if(" + n + "=== undef) { " + e + " = helperMissing.call(" + t + "); }"), e !== n && this.source.push("else { " + e + " = " + n + "; }"))
                })
            },
            invokeProgram: function(e, t, n) {
                var r = this.programExpression(this.inverse),
                    i = this.programExpression(e);
                this.populateParams(t, null, i, r, n, function(e, t) {
                    this.usingKnownHelper || (this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing", this.source.push("else { " + e + " = blockHelperMissing.call(" + t + "); }"))
                })
            },
            populateParams: function(e, t, n, r, i, o) {
                var s, a, u = i || this.options.stringParams || r || this.options.data,
                    l = this.popStack(),
                    c = [];
                if (u ? (this.register("tmp1", n), a = "tmp1") : a = "{ hash: {} }", u) {
                    var d = i ? this.popStack() : "{}";
                    this.source.push("tmp1.hash = " + d + ";")
                }
                this.options.stringParams && this.source.push("tmp1.contexts = [];");
                for (var h = 0; e > h; h++) s = this.popStack(), c.push(s), this.options.stringParams && this.source.push("tmp1.contexts.push(" + this.popStack() + ");");
                r && (this.source.push("tmp1.fn = tmp1;"), this.source.push("tmp1.inverse = " + r + ";")), this.options.data && this.source.push("tmp1.data = data;"), c.push(a), this.populateCall(c, l, t || l, o, "{}" !== n)
            },
            populateCall: function(e, t, n, r, i) {
                var o = ["depth0"].concat(e).join(", "),
                    s = ["depth0"].concat(n).concat(e).join(", "),
                    a = this.nextStack();
                if (this.usingKnownHelper) this.source.push(a + " = " + t + ".call(" + o + ");");
                else {
                    this.context.aliases.functionType = '"function"';
                    var u = i ? "foundHelper && " : "";
                    this.source.push("if(" + u + "typeof " + t + " === functionType) { " + a + " = " + t + ".call(" + o + "); }")
                }
                r.call(this, a, s, t), this.usingKnownHelper = !1
            },
            invokePartial: function(e) {
                params = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"], this.options.data && params.push("data"), this.pushStack("self.invokePartial(" + params.join(", ") + ");")
            },
            assignToHash: function(e) {
                var t = this.popStack(),
                    n = this.topStack();
                this.source.push(n + "['" + e + "'] = " + t + ";")
            },
            compiler: t,
            compileChildren: function(e, t) {
                for (var n, r, i = e.children, o = 0, s = i.length; s > o; o++) {
                    n = i[o], r = new this.compiler, this.context.programs.push("");
                    var a = this.context.programs.length;
                    n.index = a, n.name = "program" + a, this.context.programs[a] = r.compile(n, t, this.context)
                }
            },
            programExpression: function(e) {
                if (null == e) return "self.noop";
                for (var t = this.environment.children[e], n = t.depths.list, r = [t.index, t.name, "data"], i = 0, o = n.length; o > i; i++) depth = n[i], 1 === depth ? r.push("depth0") : r.push("depth" + (depth - 1));
                return 0 === n.length ? "self.program(" + r.join(", ") + ")" : (r.shift(), "self.programWithDepth(" + r.join(", ") + ")")
            },
            register: function(e, t) {
                this.useRegister(e), this.source.push(e + " = " + t + ";")
            },
            useRegister: function(e) {
                this.context.registers[e] || (this.context.registers[e] = !0, this.context.registers.list.push(e))
            },
            pushStack: function(e) {
                return this.source.push(this.nextStack() + " = " + e + ";"), "stack" + this.stackSlot
            },
            nextStack: function() {
                return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), "stack" + this.stackSlot
            },
            popStack: function() {
                return "stack" + this.stackSlot--
            },
            topStack: function() {
                return "stack" + this.stackSlot
            },
            quotedString: function(e) {
                return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r") + '"'
            }
        };
        for (var i = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), o = t.RESERVED_WORDS = {}, s = 0, a = i.length; a > s; s++) o[i[s]] = !0;
        t.isValidJavaScriptVariableName = function(e) {
            return !t.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(e) ? !0 : !1
        }
    }(Handlebars.Compiler, Handlebars.JavaScriptCompiler), Handlebars.precompile = function(e, t) {
        t = t || {};
        var n = Handlebars.parse(e),
            r = (new Handlebars.Compiler).compile(n, t);
        return (new Handlebars.JavaScriptCompiler).compile(r, t)
    }, Handlebars.compile = function(e, t) {
        function n() {
            var n = Handlebars.parse(e),
                r = (new Handlebars.Compiler).compile(n, t),
                i = (new Handlebars.JavaScriptCompiler).compile(r, t, void 0, !0);
            return Handlebars.template(i)
        }
        t = t || {};
        var r;
        return function(e, t) {
            return r || (r = n()), r.call(this, e, t)
        }
    }, Handlebars.VM = {
        template: function(e) {
            var t = {
                escapeExpression: Handlebars.Utils.escapeExpression,
                invokePartial: Handlebars.VM.invokePartial,
                programs: [],
                program: function(e, t, n) {
                    var r = this.programs[e];
                    return n ? Handlebars.VM.program(t, n) : r ? r : r = this.programs[e] = Handlebars.VM.program(t)
                },
                programWithDepth: Handlebars.VM.programWithDepth,
                noop: Handlebars.VM.noop
            };
            return function(n, r) {
                return r = r || {}, e.call(t, Handlebars, n, r.helpers, r.partials, r.data)
            }
        },
        programWithDepth: function(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function(r, i) {
                return i = i || {}, e.apply(this, [r, i.data || t].concat(n))
            }
        },
        program: function(e, t) {
            return function(n, r) {
                return r = r || {}, e(n, r.data || t)
            }
        },
        noop: function() {
            return ""
        },
        invokePartial: function(e, t, n, r, i, o) {
            if (options = {
                    helpers: r,
                    partials: i,
                    data: o
                }, void 0 === e) throw new Handlebars.Exception("The partial " + t + " could not be found");
            if (e instanceof Function) return e(n, options);
            if (Handlebars.compile) return i[t] = Handlebars.compile(e), i[t](n, options);
            throw new Handlebars.Exception("The partial " + t + " could not be compiled when running in runtime-only mode")
        }
    }, Handlebars.template = Handlebars.VM.template,
    function(e, t) {
        "use strict";
        var n = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
        e.fn.imagesLoaded = function(r) {
            function i() {
                var t = e(d),
                    n = e(h);
                a && (h.length ? a.reject(l, t, n) : a.resolve(l)), e.isFunction(r) && r.call(s, l, t, n)
            }

            function o(t, r) {
                t.src !== n && -1 === e.inArray(t, c) && (c.push(t), r ? h.push(t) : d.push(t), e.data(t, "imagesLoaded", {
                    isBroken: r,
                    src: t.src
                }), u && a.notifyWith(e(t), [r, l, e(d), e(h)]), l.length === c.length && (setTimeout(i), l.unbind(".imagesLoaded")))
            }
            var s = this,
                a = e.isFunction(e.Deferred) ? e.Deferred() : 0,
                u = e.isFunction(a.notify),
                l = s.find("img").add(s.filter("img")),
                c = [],
                d = [],
                h = [];
            return l.length ? l.bind("load.imagesLoaded error.imagesLoaded", function(e) {
                o(e.target, "error" === e.type)
            }).each(function(r, i) {
                var s = i.src,
                    a = e.data(i, "imagesLoaded");
                return a && a.src === s ? (o(i, a.isBroken), void 0) : i.complete && i.naturalWidth !== t ? (o(i, 0 === i.naturalWidth || 0 === i.naturalHeight), void 0) : ((i.readyState || i.complete) && (i.src = n, i.src = s), void 0)
            }) : i(), a ? a.promise(s) : s
        }
    }(jQuery),
    /*! jQuery Validation Plugin - v1.10.0 - 9/7/2012
     * https://github.com/jzaefferer/jquery-validation
     * Copyright (c) 2012 Jörn Zaefferer; Licensed MIT, GPL */
    function(e) {
        e.extend(e.fn, {
            validate: function(t) {
                if (!this.length) return t && t.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"), void 0;
                var n = e.data(this[0], "validator");
                return n ? n : (this.attr("novalidate", "novalidate"), n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                    n.settings.submitHandler && (n.submitButton = t.target), e(t.target).hasClass("cancel") && (n.cancelSubmit = !0)
                }), this.submit(function(t) {
                    function r() {
                        var r;
                        return n.settings.submitHandler ? (n.submitButton && (r = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(n.submitButton.value).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, t), n.submitButton && r.remove(), !1) : !0
                    }
                    return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1)
                })), n)
            },
            valid: function() {
                if (e(this[0]).is("form")) return this.validate().form();
                var t = !0,
                    n = e(this[0].form).validate();
                return this.each(function() {
                    t &= n.element(this)
                }), t
            },
            removeAttrs: function(t) {
                var n = {},
                    r = this;
                return e.each(t.split(/\s/), function(e, t) {
                    n[t] = r.attr(t), r.removeAttr(t)
                }), n
            },
            rules: function(t, n) {
                var r = this[0];
                if (t) {
                    var i = e.data(r.form, "validator").settings,
                        o = i.rules,
                        s = e.validator.staticRules(r);
                    switch (t) {
                        case "add":
                            e.extend(s, e.validator.normalizeRule(n)), o[r.name] = s, n.messages && (i.messages[r.name] = e.extend(i.messages[r.name], n.messages));
                            break;
                        case "remove":
                            if (!n) return delete o[r.name], s;
                            var a = {};
                            return e.each(n.split(/\s/), function(e, t) {
                                a[t] = s[t], delete s[t]
                            }), a
                    }
                }
                var u = e.validator.normalizeRules(e.extend({}, e.validator.metadataRules(r), e.validator.classRules(r), e.validator.attributeRules(r), e.validator.staticRules(r)), r);
                if (u.required) {
                    var l = u.required;
                    delete u.required, u = e.extend({
                        required: l
                    }, u)
                }
                return u
            }
        }), e.extend(e.expr[":"], {
            blank: function(t) {
                return !e.trim("" + t.value)
            },
            filled: function(t) {
                return !!e.trim("" + t.value)
            },
            unchecked: function(e) {
                return !e.checked
            }
        }), e.validator = function(t, n) {
            this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init()
        }, e.validator.format = function(t, n) {
            return 1 === arguments.length ? function() {
                var n = e.makeArray(arguments);
                return n.unshift(t), e.validator.format.apply(this, n)
            } : (arguments.length > 2 && n.constructor !== Array && (n = e.makeArray(arguments).slice(1)), n.constructor !== Array && (n = [n]), e.each(n, function(e, n) {
                t = t.replace(new RegExp("\\{" + e + "\\}", "g"), n)
            }), t)
        }, e.extend(e.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: e([]),
                errorLabelContainer: e([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(e) {
                    this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(e)).hide())
                },
                onfocusout: function(e) {
                    this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
                },
                onkeyup: function(e, t) {
                    (9 !== t.which || "" !== this.elementValue(e)) && (e.name in this.submitted || e === this.lastActive) && this.element(e)
                },
                onclick: function(e) {
                    e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
                },
                highlight: function(t, n, r) {
                    "radio" === t.type ? this.findByName(t.name).addClass(n).removeClass(r) : e(t).addClass(n).removeClass(r)
                },
                unhighlight: function(t, n, r) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(n).addClass(r) : e(t).removeClass(n).addClass(r)
                }
            },
            setDefaults: function(t) {
                e.extend(e.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: e.validator.format("Please enter no more than {0} characters."),
                minlength: e.validator.format("Please enter at least {0} characters."),
                rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
                range: e.validator.format("Please enter a value between {0} and {1}."),
                max: e.validator.format("Please enter a value less than or equal to {0}."),
                min: e.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function t(t) {
                        var n = e.data(this[0].form, "validator"),
                            r = "on" + t.type.replace(/^validate/, "");
                        n.settings[r] && n.settings[r].call(n, this[0], t)
                    }
                    this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var n = this.groups = {};
                    e.each(this.settings.groups, function(t, r) {
                        e.each(r.split(/\s/), function(e, r) {
                            n[r] = t
                        })
                    });
                    var r = this.settings.rules;
                    e.each(r, function(t, n) {
                        r[t] = e.validator.normalizeRule(n)
                    }), e(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                    return this.valid()
                },
                element: function(t) {
                    t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);
                    var n = this.check(t) !== !1;
                    return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n
                },
                showErrors: function(t) {
                    if (t) {
                        e.extend(this.errorMap, t), this.errorList = [];
                        for (var n in t) this.errorList.push({
                            message: t[n],
                            element: this.findByName(n)[0]
                        });
                        this.successList = e.grep(this.successList, function(e) {
                            return !(e.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(e) {
                    var t = 0;
                    for (var n in e) t++;
                    return t
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && 1 === e.grep(this.errorList, function(e) {
                        return e.element.name === t.name
                    }).length && t
                },
                elements: function() {
                    var t = this,
                        n = {};
                    return e(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in n || !t.objectLength(e(this).rules()) ? !1 : (n[this.name] = !0, !0)
                    })
                },
                clean: function(t) {
                    return e(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return e(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(e) {
                    this.reset(), this.toHide = this.errorsFor(e)
                },
                elementValue: function(t) {
                    var n = e(t).attr("type"),
                        r = e(t).val();
                    return "radio" === n || "checkbox" === n ? e('input[name="' + e(t).attr("name") + '"]:checked').val() : "string" == typeof r ? r.replace(/\r/g, "") : r
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var n, r = e(t).rules(),
                        i = !1,
                        o = this.elementValue(t);
                    for (var s in r) {
                        var a = {
                            method: s,
                            parameters: r[s]
                        };
                        try {
                            if (n = e.validator.methods[s].call(this, o, t, a.parameters), "dependency-mismatch" === n) {
                                i = !0;
                                continue
                            }
                            if (i = !1, "pending" === n) return this.toHide = this.toHide.not(this.errorsFor(t)), void 0;
                            if (!n) return this.formatAndAdd(t, a), !1
                        } catch (u) {
                            throw this.settings.debug && window.console && console.log("exception occured when checking element " + t.id + ", check the '" + a.method + "' method", u), u
                        }
                    }
                    return i ? void 0 : (this.objectLength(r) && this.successList.push(t), !0)
                },
                customMetaMessage: function(t, n) {
                    if (e.metadata) {
                        var r = this.settings.meta ? e(t).metadata()[this.settings.meta] : e(t).metadata();
                        return r && r.messages && r.messages[n]
                    }
                },
                customDataMessage: function(t, n) {
                    return e(t).data("msg-" + n.toLowerCase()) || t.attributes && e(t).attr("data-msg-" + n.toLowerCase())
                },
                customMessage: function(e, t) {
                    var n = this.settings.messages[e];
                    return n && (n.constructor === String ? n : n[t])
                },
                findDefined: function() {
                    for (var e = 0; e < arguments.length; e++)
                        if (void 0 !== arguments[e]) return arguments[e];
                    return void 0
                },
                defaultMessage: function(t, n) {
                    return this.findDefined(this.customMessage(t.name, n), this.customDataMessage(t, n), this.customMetaMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function(t, n) {
                    var r = this.defaultMessage(t, n.method),
                        i = /\$?\{(\d+)\}/g;
                    "function" == typeof r ? r = r.call(this, n.parameters, t) : i.test(r) && (r = e.validator.format(r.replace(i, "{$1}"), n.parameters)), this.errorList.push({
                        message: r,
                        element: t
                    }), this.errorMap[t.name] = r, this.submitted[t.name] = r
                },
                addWrapper: function(e) {
                    return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
                },
                defaultShowErrors: function() {
                    var e, t;
                    for (e = 0; this.errorList[e]; e++) {
                        var n = this.errorList[e];
                        this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                    if (this.settings.unhighlight)
                        for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return e(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, n) {
                    var r = this.errorsFor(t);
                    r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.attr("generated") && r.html(n)) : (r = e("<" + this.settings.errorElement + "/>").attr({
                        "for": this.idOrName(t),
                        generated: !0
                    }).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t))), !n && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
                },
                errorsFor: function(t) {
                    var n = this.idOrName(t);
                    return this.errors().filter(function() {
                        return e(this).attr("for") === n
                    })
                },
                idOrName: function(e) {
                    return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
                },
                validationTargetFor: function(e) {
                    return this.checkable(e) && (e = this.findByName(e.name).not(this.settings.ignore)[0]), e
                },
                checkable: function(e) {
                    return /radio|checkbox/i.test(e.type)
                },
                findByName: function(t) {
                    return e(this.currentForm).find('[name="' + t + '"]')
                },
                getLength: function(t, n) {
                    switch (n.nodeName.toLowerCase()) {
                        case "select":
                            return e("option:selected", n).length;
                        case "input":
                            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(e, t) {
                    return this.dependTypes[typeof e] ? this.dependTypes[typeof e](e, t) : !0
                },
                dependTypes: {
                    "boolean": function(e) {
                        return e
                    },
                    string: function(t, n) {
                        return !!e(t, n.form).length
                    },
                    "function": function(e, t) {
                        return e(t)
                    }
                },
                optional: function(t) {
                    var n = this.elementValue(t);
                    return !e.validator.methods.required.call(this, n, t) && "dependency-mismatch"
                },
                startRequest: function(e) {
                    this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0)
                },
                stopRequest: function(t, n) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t) {
                    return e.data(t, "previousValue") || e.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, n) {
                t.constructor === String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var n = {},
                    r = e(t).attr("class");
                return r && e.each(r.split(" "), function() {
                    this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this])
                }), n
            },
            attributeRules: function(t) {
                var n = {},
                    r = e(t);
                for (var i in e.validator.methods) {
                    var o;
                    "required" === i ? (o = r.get(0).getAttribute(i), "" === o && (o = !0), o = !!o) : o = r.attr(i), o ? n[i] = o : r[0].getAttribute("type") === i && (n[i] = !0)
                }
                return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
            },
            metadataRules: function(t) {
                if (!e.metadata) return {};
                var n = e.data(t.form, "validator").settings.meta;
                return n ? e(t).metadata()[n] : e(t).metadata()
            },
            staticRules: function(t) {
                var n = {},
                    r = e.data(t.form, "validator");
                return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n
            },
            normalizeRules: function(t, n) {
                return e.each(t, function(r, i) {
                    if (i === !1) return delete t[r], void 0;
                    if (i.param || i.depends) {
                        var o = !0;
                        switch (typeof i.depends) {
                            case "string":
                                o = !!e(i.depends, n.form).length;
                                break;
                            case "function":
                                o = i.depends.call(n, n)
                        }
                        o ? t[r] = void 0 !== i.param ? i.param : !0 : delete t[r]
                    }
                }), e.each(t, function(r, i) {
                    t[r] = e.isFunction(i) ? i(n) : i
                }), e.each(["minlength", "maxlength", "min", "max"], function() {
                    t[this] && (t[this] = Number(t[this]))
                }), e.each(["rangelength", "range"], function() {
                    t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])])
                }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t.messages && delete t.messages, t
            },
            normalizeRule: function(t) {
                if ("string" == typeof t) {
                    var n = {};
                    e.each(t.split(/\s/), function() {
                        n[this] = !0
                    }), t = n
                }
                return t
            },
            addMethod: function(t, n, r) {
                e.validator.methods[t] = n, e.validator.messages[t] = void 0 !== r ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, n, r) {
                    if (!this.depend(r, n)) return "dependency-mismatch";
                    if ("select" === n.nodeName.toLowerCase()) {
                        var i = e(n).val();
                        return i && i.length > 0
                    }
                    return this.checkable(n) ? this.getLength(t, n) > 0 : e.trim(t).length > 0
                },
                remote: function(t, n, r) {
                    if (this.optional(n)) return "dependency-mismatch";
                    var i = this.previousValue(n);
                    if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), i.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = i.message, r = "string" == typeof r && {
                            url: r
                        } || r, this.pending[n.name]) return "pending";
                    if (i.old === t) return i.valid;
                    i.old = t;
                    var o = this;
                    this.startRequest(n);
                    var s = {};
                    return s[n.name] = t, e.ajax(e.extend(!0, {
                        url: r,
                        mode: "abort",
                        port: "validate" + n.name,
                        dataType: "json",
                        data: s,
                        success: function(r) {
                            o.settings.messages[n.name].remote = i.originalMessage;
                            var s = r === !0 || "true" === r;
                            if (s) {
                                var a = o.formSubmitted;
                                o.prepareElement(n), o.formSubmitted = a, o.successList.push(n), delete o.invalid[n.name], o.showErrors()
                            } else {
                                var u = {},
                                    l = r || o.defaultMessage(n, "remote");
                                u[n.name] = i.message = e.isFunction(l) ? l(t) : l, o.invalid[n.name] = !0, o.showErrors(u)
                            }
                            i.valid = s, o.stopRequest(n, s)
                        }
                    }, r)), "pending"
                },
                minlength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i >= r
                },
                maxlength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || r >= i
                },
                rangelength: function(t, n, r) {
                    var i = e.isArray(t) ? t.length : this.getLength(e.trim(t), n);
                    return this.optional(n) || i >= r[0] && i <= r[1]
                },
                min: function(e, t, n) {
                    return this.optional(t) || e >= n
                },
                max: function(e, t, n) {
                    return this.optional(t) || n >= e
                },
                range: function(e, t, n) {
                    return this.optional(t) || e >= n[0] && e <= n[1]
                },
                email: function(e, t) {
                    return this.optional(t) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(e)
                },
                url: function(e, t) {
                    return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e)
                },
                date: function(e, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(e))
                },
                dateISO: function(e, t) {
                    return this.optional(t) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(e)
                },
                number: function(e, t) {
                    return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
                },
                digits: function(e, t) {
                    return this.optional(t) || /^\d+$/.test(e)
                },
                creditcard: function(e, t) {
                    if (this.optional(t)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(e)) return !1;
                    var n = 0,
                        r = 0,
                        i = !1;
                    e = e.replace(/\D/g, "");
                    for (var o = e.length - 1; o >= 0; o--) {
                        var s = e.charAt(o);
                        r = parseInt(s, 10), i && (r *= 2) > 9 && (r -= 9), n += r, i = !i
                    }
                    return 0 === n % 10
                },
                equalTo: function(t, n, r) {
                    var i = e(r);
                    return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        e(n).valid()
                    }), t === i.val()
                }
            }
        }), e.format = e.validator.format
    }(jQuery),
    function(e) {
        var t = {};
        if (e.ajaxPrefilter) e.ajaxPrefilter(function(e, n, r) {
            var i = e.port;
            "abort" === e.mode && (t[i] && t[i].abort(), t[i] = r)
        });
        else {
            var n = e.ajax;
            e.ajax = function(r) {
                var i = ("mode" in r ? r : e.ajaxSettings).mode,
                    o = ("port" in r ? r : e.ajaxSettings).port;
                return "abort" === i ? (t[o] && t[o].abort(), t[o] = n.apply(this, arguments)) : n.apply(this, arguments)
            }
        }
    }(jQuery),
    function(e) {
        jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || e.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, n) {
            function r(t) {
                return t = e.event.fix(t), t.type = n, e.event.handle.call(this, t)
            }
            e.event.special[n] = {
                setup: function() {
                    this.addEventListener(t, r, !0)
                },
                teardown: function() {
                    this.removeEventListener(t, r, !0)
                },
                handler: function(t) {
                    var r = arguments;
                    return r[0] = e.event.fix(t), r[0].type = n, e.event.handle.apply(this, r)
                }
            }
        }), e.extend(e.fn, {
            validateDelegate: function(t, n, r) {
                return this.bind(n, function(n) {
                    var i = e(n.target);
                    return i.is(t) ? r.apply(i, arguments) : void 0
                })
            }
        })
    }(jQuery);
var q = null;
window.PR_SHOULD_USE_CONTINUATION = !0,
    function() {
        function e(e) {
            function t(e) {
                var t = e.charCodeAt(0);
                if (92 !== t) return t;
                var n = e.charAt(1);
                return (t = d[n]) ? t : n >= "0" && "7" >= n ? parseInt(e.substring(1), 8) : "u" === n || "x" === n ? parseInt(e.substring(2), 16) : e.charCodeAt(1)
            }

            function n(e) {
                return 32 > e ? (16 > e ? "\\x0" : "\\x") + e.toString(16) : (e = String.fromCharCode(e), ("\\" === e || "-" === e || "[" === e || "]" === e) && (e = "\\" + e), e)
            }

            function r(e) {
                for (var r = e.substring(1, e.length - 1).match(/\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\[0-3][0-7]{0,2}|\\[0-7]{1,2}|\\[\S\s]|[^\\]/g), e = [], i = [], o = "^" === r[0], s = o ? 1 : 0, a = r.length; a > s; ++s) {
                    var u = r[s];
                    if (/\\[bdsw]/i.test(u)) e.push(u);
                    else {
                        var l, u = t(u);
                        a > s + 2 && "-" === r[s + 1] ? (l = t(r[s + 2]), s += 2) : l = u, i.push([u, l]), 65 > l || u > 122 || (65 > l || u > 90 || i.push([32 | Math.max(65, u), 32 | Math.min(l, 90)]), 97 > l || u > 122 || i.push([-33 & Math.max(97, u), -33 & Math.min(l, 122)]))
                    }
                }
                for (i.sort(function(e, t) {
                        return e[0] - t[0] || t[1] - e[1]
                    }), r = [], u = [0 / 0, 0 / 0], s = 0; s < i.length; ++s) a = i[s], a[0] <= u[1] + 1 ? u[1] = Math.max(u[1], a[1]) : r.push(u = a);
                for (i = ["["], o && i.push("^"), i.push.apply(i, e), s = 0; s < r.length; ++s) a = r[s], i.push(n(a[0])), a[1] > a[0] && (a[1] + 1 > a[0] && i.push("-"), i.push(n(a[1])));
                return i.push("]"), i.join("")
            }

            function i(e) {
                for (var t = e.source.match(/\[(?:[^\\\]]|\\[\S\s])*]|\\u[\dA-Fa-f]{4}|\\x[\dA-Fa-f]{2}|\\\d+|\\[^\dux]|\(\?[!:=]|[()^]|[^()[\\^]+/g), n = t.length, i = [], a = 0, u = 0; n > a; ++a) {
                    var l = t[a];
                    "(" === l ? ++u : "\\" === l.charAt(0) && (l = +l.substring(1)) && u >= l && (i[l] = -1)
                }
                for (a = 1; a < i.length; ++a) - 1 === i[a] && (i[a] = ++o);
                for (u = a = 0; n > a; ++a) l = t[a], "(" === l ? (++u, void 0 === i[u] && (t[a] = "(?:")) : "\\" === l.charAt(0) && (l = +l.substring(1)) && u >= l && (t[a] = "\\" + i[u]);
                for (u = a = 0; n > a; ++a) "^" === t[a] && "^" !== t[a + 1] && (t[a] = "");
                if (e.ignoreCase && s)
                    for (a = 0; n > a; ++a) l = t[a], e = l.charAt(0), l.length >= 2 && "[" === e ? t[a] = r(l) : "\\" !== e && (t[a] = l.replace(/[A-Za-z]/g, function(e) {
                        return e = e.charCodeAt(0), "[" + String.fromCharCode(-33 & e, 32 | e) + "]"
                    }));
                return t.join("")
            }
            for (var o = 0, s = !1, a = !1, u = 0, l = e.length; l > u; ++u) {
                var c = e[u];
                if (c.ignoreCase) a = !0;
                else if (/[a-z]/i.test(c.source.replace(/\\u[\da-f]{4}|\\x[\da-f]{2}|\\[^UXux]/gi, ""))) {
                    s = !0, a = !1;
                    break
                }
            }
            for (var d = {
                    b: 8,
                    t: 9,
                    n: 10,
                    v: 11,
                    f: 12,
                    r: 13
                }, h = [], u = 0, l = e.length; l > u; ++u) {
                if (c = e[u], c.global || c.multiline) throw Error("" + c);
                h.push("(?:" + i(c) + ")")
            }
            return RegExp(h.join("|"), a ? "gi" : "g")
        }

        function t(e) {
            function t(e) {
                switch (e.nodeType) {
                    case 1:
                        if (r.test(e.className)) break;
                        for (var n = e.firstChild; n; n = n.nextSibling) t(n);
                        n = e.nodeName, ("BR" === n || "LI" === n) && (i[a] = "\n", s[a << 1] = o++, s[1 | a++ << 1] = e);
                        break;
                    case 3:
                    case 4:
                        n = e.nodeValue, n.length && (n = u ? n.replace(/\r\n?/g, "\n") : n.replace(/[\t\n\r ]+/g, " "), i[a] = n, s[a << 1] = o, o += n.length, s[1 | a++ << 1] = e)
                }
            }
            var n, r = /(?:^|\s)nocode(?:\s|$)/,
                i = [],
                o = 0,
                s = [],
                a = 0;
            e.currentStyle ? n = e.currentStyle.whiteSpace : window.getComputedStyle && (n = document.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"));
            var u = n && "pre" === n.substring(0, 3);
            return t(e), {
                a: i.join("").replace(/\n$/, ""),
                c: s
            }
        }

        function n(e, t, n, r) {
            t && (e = {
                a: t,
                d: e
            }, n(e), r.push.apply(r, e.e))
        }

        function r(t, r) {
            function i(e) {
                for (var t = e.d, l = [t, "pln"], c = 0, d = e.a.match(o) || [], h = {}, p = 0, f = d.length; f > p; ++p) {
                    var m, g = d[p],
                        v = h[g],
                        y = void 0;
                    if ("string" == typeof v) m = !1;
                    else {
                        var b = s[g.charAt(0)];
                        if (b) y = g.match(b[1]), v = b[0];
                        else {
                            for (m = 0; u > m; ++m)
                                if (b = r[m], y = g.match(b[1])) {
                                    v = b[0];
                                    break
                                }
                            y || (v = "pln")
                        }!(m = v.length >= 5 && "lang-" === v.substring(0, 5)) || y && "string" == typeof y[1] || (m = !1, v = "src"), m || (h[g] = v)
                    }
                    if (b = c, c += g.length, m) {
                        m = y[1];
                        var w = g.indexOf(m),
                            x = w + m.length;
                        y[2] && (x = g.length - y[2].length, w = x - m.length), v = v.substring(5), n(t + b, g.substring(0, w), i, l), n(t + b + w, m, a(v, m), l), n(t + b + x, g.substring(x), i, l)
                    } else l.push(t + b, v)
                }
                e.e = l
            }
            var o, s = {};
            ! function() {
                for (var n = t.concat(r), i = [], a = {}, u = 0, l = n.length; l > u; ++u) {
                    var c = n[u],
                        d = c[3];
                    if (d)
                        for (var h = d.length; --h >= 0;) s[d.charAt(h)] = c;
                    c = c[1], d = "" + c, a.hasOwnProperty(d) || (i.push(c), a[d] = q)
                }
                i.push(/[\S\s]/), o = e(i)
            }();
            var u = r.length;
            return i
        }

        function i(e) {
            var t = [],
                n = [];
            e.tripleQuotedStrings ? t.push(["str", /^(?:'''(?:[^'\\]|\\[\S\s]|''?(?=[^']))*(?:'''|$)|"""(?:[^"\\]|\\[\S\s]|""?(?=[^"]))*(?:"""|$)|'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$))/, q, "'\""]) : e.multiLineStrings ? t.push(["str", /^(?:'(?:[^'\\]|\\[\S\s])*(?:'|$)|"(?:[^"\\]|\\[\S\s])*(?:"|$)|`(?:[^\\`]|\\[\S\s])*(?:`|$))/, q, "'\"`"]) : t.push(["str", /^(?:'(?:[^\n\r'\\]|\\.)*(?:'|$)|"(?:[^\n\r"\\]|\\.)*(?:"|$))/, q, "\"'"]), e.verbatimStrings && n.push(["str", /^@"(?:[^"]|"")*(?:"|$)/, q]);
            var i = e.hashComments;
            return i && (e.cStyleComments ? (i > 1 ? t.push(["com", /^#(?:##(?:[^#]|#(?!##))*(?:###|$)|.*)/, q, "#"]) : t.push(["com", /^#(?:(?:define|elif|else|endif|error|ifdef|include|ifndef|line|pragma|undef|warning)\b|[^\n\r]*)/, q, "#"]), n.push(["str", /^<(?:(?:(?:\.\.\/)*|\/?)(?:[\w-]+(?:\/[\w-]+)+)?[\w-]+\.h|[a-z]\w*)>/, q])) : t.push(["com", /^#[^\n\r]*/, q, "#"])), e.cStyleComments && (n.push(["com", /^\/\/[^\n\r]*/, q]), n.push(["com", /^\/\*[\S\s]*?(?:\*\/|$)/, q])), e.regexLiterals && n.push(["lang-regex", /^(?:^^\.?|[!+-]|!=|!==|#|%|%=|&|&&|&&=|&=|\(|\*|\*=|\+=|,|-=|->|\/|\/=|:|::|;|<|<<|<<=|<=|=|==|===|>|>=|>>|>>=|>>>|>>>=|[?@[^]|\^=|\^\^|\^\^=|{|\||\|=|\|\||\|\|=|~|break|case|continue|delete|do|else|finally|instanceof|return|throw|try|typeof)\s*(\/(?=[^*/])(?:[^/[\\]|\\[\S\s]|\[(?:[^\\\]]|\\[\S\s])*(?:]|$))+\/)/]), (i = e.types) && n.push(["typ", i]), e = ("" + e.keywords).replace(/^ | $/g, ""), e.length && n.push(["kwd", RegExp("^(?:" + e.replace(/[\s,]+/g, "|") + ")\\b"), q]), t.push(["pln", /^\s+/, q, " \r\n	 "]), n.push(["lit", /^@[$_a-z][\w$@]*/i, q], ["typ", /^(?:[@_]?[A-Z]+[a-z][\w$@]*|\w+_t\b)/, q], ["pln", /^[$_a-z][\w$@]*/i, q], ["lit", /^(?:0x[\da-f]+|(?:\d(?:_\d+)*\d*(?:\.\d*)?|\.\d\+)(?:e[+-]?\d+)?)[a-z]*/i, q, "0123456789"], ["pln", /^\\[\S\s]?/, q], ["pun", /^.[^\s\w"-$'./@\\`]*/, q]), r(t, n)
        }

        function o(e, t) {
            function n(e) {
                switch (e.nodeType) {
                    case 1:
                        if (o.test(e.className)) break;
                        if ("BR" === e.nodeName) r(e), e.parentNode && e.parentNode.removeChild(e);
                        else
                            for (e = e.firstChild; e; e = e.nextSibling) n(e);
                        break;
                    case 3:
                    case 4:
                        if (u) {
                            var t = e.nodeValue,
                                i = t.match(s);
                            if (i) {
                                var l = t.substring(0, i.index);
                                e.nodeValue = l, (t = t.substring(i.index + i[0].length)) && e.parentNode.insertBefore(a.createTextNode(t), e.nextSibling), r(e), l || e.parentNode.removeChild(e)
                            }
                        }
                }
            }

            function r(e) {
                function t(e, n) {
                    var r = n ? e.cloneNode(!1) : e,
                        i = e.parentNode;
                    if (i) {
                        var i = t(i, 1),
                            o = e.nextSibling;
                        i.appendChild(r);
                        for (var s = o; s; s = o) o = s.nextSibling, i.appendChild(s)
                    }
                    return r
                }
                for (; !e.nextSibling;)
                    if (e = e.parentNode, !e) return;
                for (var n, e = t(e.nextSibling, 0);
                    (n = e.parentNode) && 1 === n.nodeType;) e = n;
                l.push(e)
            }
            var i, o = /(?:^|\s)nocode(?:\s|$)/,
                s = /\r\n?|\n/,
                a = e.ownerDocument;
            e.currentStyle ? i = e.currentStyle.whiteSpace : window.getComputedStyle && (i = a.defaultView.getComputedStyle(e, q).getPropertyValue("white-space"));
            var u = i && "pre" === i.substring(0, 3);
            for (i = a.createElement("LI"); e.firstChild;) i.appendChild(e.firstChild);
            for (var l = [i], c = 0; c < l.length; ++c) n(l[c]);
            t === (0 | t) && l[0].setAttribute("value", t);
            var d = a.createElement("OL");
            d.className = "linenums";
            for (var h = Math.max(0, 0 | t - 1) || 0, c = 0, p = l.length; p > c; ++c) i = l[c], i.className = "L" + (c + h) % 10, i.firstChild || i.appendChild(a.createTextNode(" ")), d.appendChild(i);
            e.appendChild(d)
        }

        function s(e, t) {
            for (var n = t.length; --n >= 0;) {
                var r = t[n];
                b.hasOwnProperty(r) ? window.console && console.warn("cannot override language handler %s", r) : b[r] = e
            }
        }

        function a(e, t) {
            return e && b.hasOwnProperty(e) || (e = /^\s*</.test(t) ? "default-markup" : "default-code"), b[e]
        }

        function u(e) {
            var n = e.g;
            try {
                var r = t(e.h),
                    i = r.a;
                e.a = i, e.c = r.c, e.d = 0, a(n, i)(e);
                var o = /\bMSIE\b/.test(navigator.userAgent),
                    n = /\n/g,
                    s = e.a,
                    u = s.length,
                    r = 0,
                    l = e.c,
                    c = l.length,
                    i = 0,
                    d = e.e,
                    h = d.length,
                    e = 0;
                d[h] = u;
                var p, f;
                for (f = p = 0; h > f;) d[f] !== d[f + 2] ? (d[p++] = d[f++], d[p++] = d[f++]) : f += 2;
                for (h = p, f = p = 0; h > f;) {
                    for (var m = d[f], g = d[f + 1], v = f + 2; h >= v + 2 && d[v + 1] === g;) v += 2;
                    d[p++] = m, d[p++] = g, f = v
                }
                for (d.length = p; c > i;) {
                    var y, b = l[i + 2] || u,
                        w = d[e + 2] || u,
                        v = Math.min(b, w),
                        x = l[i + 1];
                    if (1 !== x.nodeType && (y = s.substring(r, v))) {
                        o && (y = y.replace(n, "\r")), x.nodeValue = y;
                        var _ = x.ownerDocument,
                            k = _.createElement("SPAN");
                        k.className = d[e + 1];
                        var $ = x.parentNode;
                        $.replaceChild(k, x), k.appendChild(x), b > r && (l[i + 1] = x = _.createTextNode(s.substring(v, b)), $.insertBefore(x, k.nextSibling))
                    }
                    r = v, r >= b && (i += 2), r >= w && (e += 2)
                }
            } catch (C) {
                "console" in window && console.log(C && C.stack ? C.stack : C)
            }
        }
        var l = ["break,continue,do,else,for,if,return,while"],
            c = [
                [l, "auto,case,char,const,default,double,enum,extern,float,goto,int,long,register,short,signed,sizeof,static,struct,switch,typedef,union,unsigned,void,volatile"], "catch,class,delete,false,import,new,operator,private,protected,public,this,throw,true,try,typeof"
            ],
            d = [c, "alignof,align_union,asm,axiom,bool,concept,concept_map,const_cast,constexpr,decltype,dynamic_cast,explicit,export,friend,inline,late_check,mutable,namespace,nullptr,reinterpret_cast,static_assert,static_cast,template,typeid,typename,using,virtual,where"],
            h = [c, "abstract,boolean,byte,extends,final,finally,implements,import,instanceof,null,native,package,strictfp,super,synchronized,throws,transient"],
            p = [h, "as,base,by,checked,decimal,delegate,descending,dynamic,event,fixed,foreach,from,group,implicit,in,interface,internal,into,is,lock,object,out,override,orderby,params,partial,readonly,ref,sbyte,sealed,stackalloc,string,select,uint,ulong,unchecked,unsafe,ushort,var"],
            c = [c, "debugger,eval,export,function,get,null,set,undefined,var,with,Infinity,NaN"],
            f = [l, "and,as,assert,class,def,del,elif,except,exec,finally,from,global,import,in,is,lambda,nonlocal,not,or,pass,print,raise,try,with,yield,False,True,None"],
            m = [l, "alias,and,begin,case,class,def,defined,elsif,end,ensure,false,in,module,next,nil,not,or,redo,rescue,retry,self,super,then,true,undef,unless,until,when,yield,BEGIN,END"],
            l = [l, "case,done,elif,esac,eval,fi,function,in,local,set,then,until"],
            g = /^(DIR|FILE|vector|(de|priority_)?queue|list|stack|(const_)?iterator|(multi)?(set|map)|bitset|u?(int|float)\d*)/,
            v = /\S/,
            y = i({
                keywords: [d, p, c, "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END" + f, m, l],
                hashComments: !0,
                cStyleComments: !0,
                multiLineStrings: !0,
                regexLiterals: !0
            }),
            b = {};
        s(y, ["default-code"]), s(r([], [
            ["pln", /^[^<?]+/],
            ["dec", /^<!\w[^>]*(?:>|$)/],
            ["com", /^<\!--[\S\s]*?(?:--\>|$)/],
            ["lang-", /^<\?([\S\s]+?)(?:\?>|$)/],
            ["lang-", /^<%([\S\s]+?)(?:%>|$)/],
            ["pun", /^(?:<[%?]|[%?]>)/],
            ["lang-", /^<xmp\b[^>]*>([\S\s]+?)<\/xmp\b[^>]*>/i],
            ["lang-js", /^<script\b[^>]*>([\S\s]*?)(<\/script\b[^>]*>)/i],
            ["lang-css", /^<style\b[^>]*>([\S\s]*?)(<\/style\b[^>]*>)/i],
            ["lang-in.tag", /^(<\/?[a-z][^<>]*>)/i]
        ]), ["default-markup", "htm", "html", "mxml", "xhtml", "xml", "xsl"]), s(r([
            ["pln", /^\s+/, q, " 	\r\n"],
            ["atv", /^(?:"[^"]*"?|'[^']*'?)/, q, "\"'"]
        ], [
            ["tag", /^^<\/?[a-z](?:[\w-.:]*\w)?|\/?>$/i],
            ["atn", /^(?!style[\s=]|on)[a-z](?:[\w:-]*\w)?/i],
            ["lang-uq.val", /^=\s*([^\s"'>]*(?:[^\s"'/>]|\/(?=\s)))/],
            ["pun", /^[/<->]+/],
            ["lang-js", /^on\w+\s*=\s*"([^"]+)"/i],
            ["lang-js", /^on\w+\s*=\s*'([^']+)'/i],
            ["lang-js", /^on\w+\s*=\s*([^\s"'>]+)/i],
            ["lang-css", /^style\s*=\s*"([^"]+)"/i],
            ["lang-css", /^style\s*=\s*'([^']+)'/i],
            ["lang-css", /^style\s*=\s*([^\s"'>]+)/i]
        ]), ["in.tag"]), s(r([], [
            ["atv", /^[\S\s]+/]
        ]), ["uq.val"]), s(i({
            keywords: d,
            hashComments: !0,
            cStyleComments: !0,
            types: g
        }), ["c", "cc", "cpp", "cxx", "cyc", "m"]), s(i({
            keywords: "null,true,false"
        }), ["json"]), s(i({
            keywords: p,
            hashComments: !0,
            cStyleComments: !0,
            verbatimStrings: !0,
            types: g
        }), ["cs"]), s(i({
            keywords: h,
            cStyleComments: !0
        }), ["java"]), s(i({
            keywords: l,
            hashComments: !0,
            multiLineStrings: !0
        }), ["bsh", "csh", "sh"]), s(i({
            keywords: f,
            hashComments: !0,
            multiLineStrings: !0,
            tripleQuotedStrings: !0
        }), ["cv", "py"]), s(i({
            keywords: "caller,delete,die,do,dump,elsif,eval,exit,foreach,for,goto,if,import,last,local,my,next,no,our,print,package,redo,require,sub,undef,unless,until,use,wantarray,while,BEGIN,END",
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["perl", "pl", "pm"]), s(i({
            keywords: m,
            hashComments: !0,
            multiLineStrings: !0,
            regexLiterals: !0
        }), ["rb"]), s(i({
            keywords: c,
            cStyleComments: !0,
            regexLiterals: !0
        }), ["js"]), s(i({
            keywords: "all,and,by,catch,class,else,extends,false,finally,for,if,in,is,isnt,loop,new,no,not,null,of,off,on,or,return,super,then,true,try,unless,until,when,while,yes",
            hashComments: 3,
            cStyleComments: !0,
            multilineStrings: !0,
            tripleQuotedStrings: !0,
            regexLiterals: !0
        }), ["coffee"]), s(r([], [
            ["str", /^[\S\s]+/]
        ]), ["regex"]), window.prettyPrintOne = function(e, t, n) {
            var r = document.createElement("PRE");
            return r.innerHTML = e, n && o(r, n), u({
                g: t,
                i: n,
                h: r
            }), r.innerHTML
        }, window.prettyPrint = function(e) {
            function t() {
                for (var n = window.PR_SHOULD_USE_CONTINUATION ? l.now() + 250 : 1 / 0; d < r.length && l.now() < n; d++) {
                    var i = r[d],
                        s = i.className;
                    if (s.indexOf("prettyprint") >= 0) {
                        var a, p, s = s.match(h);
                        if (p = !s) {
                            p = i;
                            for (var f = void 0, m = p.firstChild; m; m = m.nextSibling) var g = m.nodeType,
                                f = 1 === g ? f ? p : m : 3 === g ? v.test(m.nodeValue) ? p : f : f;
                            p = (a = f === p ? void 0 : f) && "CODE" === a.tagName
                        }
                        for (p && (s = a.className.match(h)), s && (s = s[1]), p = !1, f = i.parentNode; f; f = f.parentNode)
                            if (("pre" === f.tagName || "code" === f.tagName || "xmp" === f.tagName) && f.className && f.className.indexOf("prettyprint") >= 0) {
                                p = !0;
                                break
                            }
                        p || ((p = (p = i.className.match(/\blinenums\b(?::(\d+))?/)) ? p[1] && p[1].length ? +p[1] : !0 : !1) && o(i, p), c = {
                            g: s,
                            h: i,
                            i: p
                        }, u(c))
                    }
                }
                d < r.length ? setTimeout(t, 250) : e && e()
            }
            for (var n = [document.getElementsByTagName("pre"), document.getElementsByTagName("code"), document.getElementsByTagName("xmp")], r = [], i = 0; i < n.length; ++i)
                for (var s = 0, a = n[i].length; a > s; ++s) r.push(n[i][s]);
            var n = q,
                l = Date;
            l.now || (l = {
                now: function() {
                    return +new Date
                }
            });
            var c, d = 0,
                h = /\blang(?:uage)?-([\w.]+)(?!\S)/;
            t()
        }, window.PR = {
            createSimpleLexer: r,
            registerLangHandler: s,
            sourceDecorator: i,
            PR_ATTRIB_NAME: "atn",
            PR_ATTRIB_VALUE: "atv",
            PR_COMMENT: "com",
            PR_DECLARATION: "dec",
            PR_KEYWORD: "kwd",
            PR_LITERAL: "lit",
            PR_NOCODE: "nocode",
            PR_PLAIN: "pln",
            PR_PUNCTUATION: "pun",
            PR_SOURCE: "src",
            PR_STRING: "str",
            PR_TAG: "tag",
            PR_TYPE: "typ"
        }
    }(),
    /*
     * jQuery Hotkeys Plugin
     * Copyright 2010, John Resig
     * Dual licensed under the MIT or GPL Version 2 licenses.
     *
     * Based upon the plugin by Tzury Bar Yochay:
     * http://github.com/tzuryby/hotkeys
     *
     * Original idea by:
     * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
     */
    function(e) {
        function t(t) {
            if ("string" == typeof t.data) {
                var n = t.handler,
                    r = t.data.toLowerCase().split(" ");
                t.handler = function(t) {
                    if (this === t.target || !/textarea|select/i.test(t.target.nodeName) && "text" !== t.target.type) {
                        var i = "keypress" !== t.type && e.hotkeys.specialKeys[t.which],
                            o = String.fromCharCode(t.which).toLowerCase(),
                            s = "",
                            a = {};
                        t.altKey && "alt" !== i && (s += "alt+"), t.ctrlKey && "ctrl" !== i && (s += "ctrl+"), t.metaKey && !t.ctrlKey && "meta" !== i && (s += "meta+"), t.shiftKey && "shift" !== i && (s += "shift+"), i ? a[s + i] = !0 : (a[s + o] = !0, a[s + e.hotkeys.shiftNums[o]] = !0, "shift+" === s && (a[e.hotkeys.shiftNums[o]] = !0));
                        for (var u = 0, l = r.length; l > u; u++)
                            if (a[r[u]]) return n.apply(this, arguments)
                    }
                }
            }
        }
        e.hotkeys = {
            version: "0.8",
            specialKeys: {
                8: "backspace",
                9: "tab",
                13: "return",
                16: "shift",
                17: "ctrl",
                18: "alt",
                19: "pause",
                20: "capslock",
                27: "esc",
                32: "space",
                33: "pageup",
                34: "pagedown",
                35: "end",
                36: "home",
                37: "left",
                38: "up",
                39: "right",
                40: "down",
                45: "insert",
                46: "del",
                96: "0",
                97: "1",
                98: "2",
                99: "3",
                100: "4",
                101: "5",
                102: "6",
                103: "7",
                104: "8",
                105: "9",
                106: "*",
                107: "+",
                109: "-",
                110: ".",
                111: "/",
                112: "f1",
                113: "f2",
                114: "f3",
                115: "f4",
                116: "f5",
                117: "f6",
                118: "f7",
                119: "f8",
                120: "f9",
                121: "f10",
                122: "f11",
                123: "f12",
                144: "numlock",
                145: "scroll",
                191: "/",
                224: "meta"
            },
            shiftNums: {
                "`": "~",
                1: "!",
                2: "@",
                3: "#",
                4: "$",
                5: "%",
                6: "^",
                7: "&",
                8: "*",
                9: "(",
                0: ")",
                "-": "_",
                "=": "+",
                ";": ": ",
                "'": '"',
                ",": "<",
                ".": ">",
                "/": "?",
                "\\": "|"
            }
        }, e.each(["keydown", "keyup", "keypress"], function() {
            e.event.special[this] = {
                add: t
            }
        })
    }(jQuery),
    /*
     * jQuery scrollintoview() plugin and :scrollable selector filter
     *
     * Version 1.8 (14 Jul 2011)
     * Requires jQuery 1.4 or newer
     *
     * Copyright (c) 2011 Robert Koritnik
     * Licensed under the terms of the MIT license
     * http://www.opensource.org/licenses/mit-license.php
     */
    function(e) {
        var t = {
                vertical: {
                    x: !1,
                    y: !0
                },
                horizontal: {
                    x: !0,
                    y: !1
                },
                both: {
                    x: !0,
                    y: !0
                },
                x: {
                    x: !0,
                    y: !1
                },
                y: {
                    x: !1,
                    y: !0
                }
            },
            n = {
                duration: "fast",
                direction: "both"
            },
            r = /^(?:html)$/i,
            i = function(t, n) {
                n = n || (document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(t, null) : t.currentStyle);
                var r = document.defaultView && document.defaultView.getComputedStyle ? !0 : !1,
                    i = {
                        top: parseFloat(r ? n.borderTopWidth : e.css(t, "borderTopWidth")) || 0,
                        left: parseFloat(r ? n.borderLeftWidth : e.css(t, "borderLeftWidth")) || 0,
                        bottom: parseFloat(r ? n.borderBottomWidth : e.css(t, "borderBottomWidth")) || 0,
                        right: parseFloat(r ? n.borderRightWidth : e.css(t, "borderRightWidth")) || 0
                    };
                return {
                    top: i.top,
                    left: i.left,
                    bottom: i.bottom,
                    right: i.right,
                    vertical: i.top + i.bottom,
                    horizontal: i.left + i.right
                }
            },
            o = function(t) {
                var n = e(window),
                    o = r.test(t[0].nodeName);
                return {
                    border: o ? {
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0
                    } : i(t[0]),
                    scroll: {
                        top: (o ? n : t).scrollTop(),
                        left: (o ? n : t).scrollLeft()
                    },
                    scrollbar: {
                        right: o ? 0 : t.innerWidth() - t[0].clientWidth,
                        bottom: o ? 0 : t.innerHeight() - t[0].clientHeight
                    },
                    rect: function() {
                        var e = t[0].getBoundingClientRect();
                        return {
                            top: o ? 0 : e.top,
                            left: o ? 0 : e.left,
                            bottom: o ? t[0].clientHeight : e.bottom,
                            right: o ? t[0].clientWidth : e.right
                        }
                    }()
                }
            };
        e.fn.extend({
            scrollintoview: function(i) {
                i = e.extend({}, n, i), i.direction = t["string" == typeof i.direction && i.direction.toLowerCase()] || t.both;
                var s = "";
                i.direction.x === !0 && (s = "horizontal"), i.direction.y === !0 && (s = s ? "both" : "vertical");
                var a = this.eq(0),
                    u = a.closest(":scrollable(" + s + ")");
                if (u.length > 0) {
                    u = u.eq(0);
                    var l = {
                            e: o(a),
                            s: o(u)
                        },
                        c = {
                            top: l.e.rect.top - (l.s.rect.top + l.s.border.top),
                            bottom: l.s.rect.bottom - l.s.border.bottom - l.s.scrollbar.bottom - l.e.rect.bottom,
                            left: l.e.rect.left - (l.s.rect.left + l.s.border.left),
                            right: l.s.rect.right - l.s.border.right - l.s.scrollbar.right - l.e.rect.right
                        },
                        d = {};
                    i.direction.y === !0 && (c.top < 0 ? d.scrollTop = l.s.scroll.top + c.top : c.top > 0 && c.bottom < 0 && (d.scrollTop = l.s.scroll.top + Math.min(c.top, -c.bottom))), i.direction.x === !0 && (c.left < 0 ? d.scrollLeft = l.s.scroll.left + c.left : c.left > 0 && c.right < 0 && (d.scrollLeft = l.s.scroll.left + Math.min(c.left, -c.right))), e.isEmptyObject(d) ? e.isFunction(i.complete) && i.complete.call(u[0]) : (r.test(u[0].nodeName) && (u = e("html,body")), u.animate(d, i.duration).eq(0).queue(function(t) {
                        e.isFunction(i.complete) && i.complete.call(u[0]), t()
                    }))
                }
                return this
            }
        });
        var s = {
            auto: !0,
            scroll: !0,
            visible: !1,
            hidden: !1
        };
        e.extend(e.expr[":"], {
            scrollable: function(e, n, i) {
                var o = t["string" == typeof i[3] && i[3].toLowerCase()] || t.both,
                    a = document.defaultView && document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    u = {
                        x: s[a.overflowX.toLowerCase()] || !1,
                        y: s[a.overflowY.toLowerCase()] || !1,
                        isRoot: r.test(e.nodeName)
                    };
                if (!u.x && !u.y && !u.isRoot) return !1;
                var l = {
                    height: {
                        scroll: e.scrollHeight,
                        client: e.clientHeight
                    },
                    width: {
                        scroll: e.scrollWidth,
                        client: e.clientWidth
                    },
                    scrollableX: function() {
                        return (u.x || u.isRoot) && this.width.scroll > this.width.client
                    },
                    scrollableY: function() {
                        return (u.y || u.isRoot) && this.height.scroll > this.height.client
                    }
                };
                return o.y && l.scrollableY() || o.x && l.scrollableX()
            }
        })
    }(jQuery),
    /*!
     * jQuery Cookie Plugin v1.2
     * https://github.com/carhartl/jquery-cookie
     *
     * Copyright 2011, Klaus Hartl
     * Dual licensed under the MIT or GPL Version 2 licenses.
     * http://www.opensource.org/licenses/mit-license.php
     * http://www.opensource.org/licenses/GPL-2.0
     */
    function(e, t, n) {
        function r(e) {
            return e
        }

        function i(e) {
            return decodeURIComponent(e.replace(o, " "))
        }
        var o = /\+/g;
        e.cookie = function(o, s, a) {
            if (s !== n && !/Object/.test(Object.prototype.toString.call(s))) {
                if (a = e.extend({}, e.cookie.defaults, a), null === s && (a.expires = -1), "number" == typeof a.expires) {
                    var u = a.expires,
                        l = a.expires = new Date;
                    l.setDate(l.getDate() + u)
                }
                return s = String(s), t.cookie = [encodeURIComponent(o), "=", a.raw ? s : encodeURIComponent(s), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
            }
            a = s || e.cookie.defaults || {};
            for (var c, d = a.raw ? r : i, h = t.cookie.split("; "), p = 0; c = h[p] && h[p].split("="); p++)
                if (d(c.shift()) === o) return d(c.join("="));
            return null
        }, e.cookie.defaults = {}, e.removeCookie = function(t, n) {
            return null !== e.cookie(t, n) ? (e.cookie(t, null, n), !0) : !1
        }
    }(jQuery, document);
var session_fetch = function(e, t, n) {
    var r = .4,
        i = {
            use_html5_location: !1,
            ipinfodb_key: !1,
            gapi_location: !0,
            location_cookie: "location",
            location_cookie_timeout: 5,
            session_timeout: 32,
            session_cookie: "first_session"
        },
        o = function() {
            if (e.session = e.session || {}, e.session.contains = function(e) {
                    if ("string" == typeof e) return -1 !== this.indexOf(e);
                    for (var t = 0; t < e.length; t++)
                        if (-1 !== this.indexOf(e[t])) return !0;
                    return !1
                }, e.session && e.session.options)
                for (option in e.session.options) i[option] = e.session.options[option];
            var t = {
                api_version: r,
                locale: a.locale(),
                current_session: a.session(),
                original_session: a.session(i.session_cookie, 1e3 * 60 * 60 * 24 * i.session_timeout),
                browser: a.browser(),
                plugins: a.plugins(),
                time: a.time(),
                device: a.device()
            };
            if (i.use_html5_location ? t.location = a.html5_location() : i.ipinfodb_key ? t.location = a.ipinfodb_location(i.ipinfodb_key) : i.gapi_location && (t.location = a.gapi_location()), e.session && e.session.start) var n = e.session.start;
            var o, s = 0,
                u = function(t) {
                    t && s--, 0 === s && n && n(e.session)
                };
            e.session = {};
            for (var l in t)
                if (o = t[l], "function" == typeof o) try {
                    o(function(t) {
                        e.session[l] = t, u(!0)
                    }), s++
                } catch (c) {
                    e.console && "function" == typeof console.log && u(!0)
                } else e.session[l] = o;
            u()
        },
        s = {
            detect: function() {
                return {
                    browser: this.search(this.data.browser),
                    version: this.search(n.userAgent) || this.search(n.appVersion),
                    os: this.search(this.data.os)
                }
            },
            search: function(e) {
                if ("object" != typeof e) {
                    var t = e.indexOf(this.version_string);
                    if (-1 == t) return;
                    return parseFloat(e.substr(t + this.version_string.length + 1))
                }
                for (var n = 0; n < e.length; n++) {
                    var r = e[n].string,
                        i = e[n].prop;
                    if (this.version_string = e[n].versionSearch || e[n].identity, r) {
                        if (-1 != r.indexOf(e[n].subString)) return e[n].identity
                    } else if (i) return e[n].identity
                }
            },
            data: {
                browser: [{
                    string: n.userAgent,
                    subString: "Chrome",
                    identity: "Chrome"
                }, {
                    string: n.userAgent,
                    subString: "OmniWeb",
                    versionSearch: "OmniWeb/",
                    identity: "OmniWeb"
                }, {
                    string: n.vendor,
                    subString: "Apple",
                    identity: "Safari",
                    versionSearch: "Version"
                }, {
                    prop: e.opera,
                    identity: "Opera",
                    versionSearch: "Version"
                }, {
                    string: n.vendor,
                    subString: "iCab",
                    identity: "iCab"
                }, {
                    string: n.vendor,
                    subString: "KDE",
                    identity: "Konqueror"
                }, {
                    string: n.userAgent,
                    subString: "Firefox",
                    identity: "Firefox"
                }, {
                    string: n.vendor,
                    subString: "Camino",
                    identity: "Camino"
                }, {
                    string: n.userAgent,
                    subString: "Netscape",
                    identity: "Netscape"
                }, {
                    string: n.userAgent,
                    subString: "MSIE",
                    identity: "Explorer",
                    versionSearch: "MSIE"
                }, {
                    string: n.userAgent,
                    subString: "Gecko",
                    identity: "Mozilla",
                    versionSearch: "rv"
                }, {
                    string: n.userAgent,
                    subString: "Mozilla",
                    identity: "Netscape",
                    versionSearch: "Mozilla"
                }],
                os: [{
                    string: n.platform,
                    subString: "Win",
                    identity: "Windows"
                }, {
                    string: n.platform,
                    subString: "Mac",
                    identity: "Mac"
                }, {
                    string: n.userAgent,
                    subString: "iPhone",
                    identity: "iPhone/iPod"
                }, {
                    string: n.userAgent,
                    subString: "iPad",
                    identity: "iPad"
                }, {
                    string: n.userAgent,
                    subString: "Android",
                    identity: "Android"
                }, {
                    string: n.platform,
                    subString: "Linux",
                    identity: "Linux"
                }]
            }
        },
        a = {
            browser: function() {
                return s.detect()
            },
            time: function() {
                var e = new Date,
                    t = new Date;
                return e.setMonth(0), e.setDate(1), t.setMonth(6), t.setDate(1), {
                    tz_offset: -(new Date).getTimezoneOffset() / 60,
                    observes_dst: e.getTimezoneOffset() !== t.getTimezoneOffset()
                }
            },
            locale: function() {
                var e = (n.language || n.browserLanguage || n.systemLanguage || n.userLanguage || "").split("-");
                return 2 == e.length ? {
                    country: e[1].toLowerCase(),
                    lang: e[0].toLowerCase()
                } : e ? {
                    lang: e[0].toLowerCase(),
                    country: null
                } : {
                    lang: null,
                    country: null
                }
            },
            device: function() {
                var r = {
                    screen: {
                        width: e.screen.width,
                        height: e.screen.height
                    }
                };
                return r.viewport = {
                    width: e.innerWidth || t.documentElement.clientWidth || t.body.clientWidth,
                    height: e.innerHeight || t.documentElement.clientHeight || t.body.clientHeight
                }, r.is_tablet = !!n.userAgent.match(/(iPad|SCH-I800|xoom|kindle)/i), r.is_phone = !r.is_tablet && !!n.userAgent.match(/(iPhone|iPod|blackberry|android 0.5|htc|lg|midp|mmp|mobile|nokia|opera mini|palm|pocket|psp|sgh|smartphone|symbian|treo mini|Playstation Portable|SonyEricsson|Samsung|MobileExplorer|PalmSource|Benq|Windows Phone|Windows Mobile|IEMobile|Windows CE|Nintendo Wii)/i), r.is_mobile = r.is_tablet || r.is_phone, r
            },
            plugins: function() {
                var e = function(e) {
                    if (n.plugins) {
                        for (var t, r = 0, i = n.plugins.length; i > r; r++)
                            if (t = n.plugins[r], t && t.name && -1 !== t.name.toLowerCase().indexOf(e)) return !0;
                        return !1
                    }
                    return !1
                };
                return {
                    flash: e("flash"),
                    silverlight: e("silverlight"),
                    java: e("java"),
                    quicktime: e("quicktime")
                }
            },
            session: function(n, r) {
                var i = u.get_obj(n);
                if (null == i) {
                    i = {
                        visits: 1,
                        start: (new Date).getTime(),
                        last_visit: (new Date).getTime(),
                        url: e.location.href,
                        path: e.location.pathname,
                        referrer: t.referrer,
                        referrer_info: u.parse_url(t.referrer),
                        search: {
                            engine: null,
                            query: null
                        }
                    };
                    var o, s = [{
                            name: "Google",
                            host: "google",
                            query: "q"
                        }, {
                            name: "Bing",
                            host: "bing.com",
                            query: "q"
                        }, {
                            name: "Yahoo",
                            host: "search.yahoo",
                            query: "p"
                        }, {
                            name: "AOL",
                            host: "search.aol",
                            query: "q"
                        }, {
                            name: "Ask",
                            host: "ask.com",
                            query: "q"
                        }, {
                            name: "Baidu",
                            host: "baidu.com",
                            query: "wd"
                        }],
                        a = s.length,
                        l = 0,
                        c = "q query term p wd query text".split(" ");
                    for (l = 0; a > l; l++)
                        if (o = s[l], -1 !== i.referrer_info.host.indexOf(o.host)) {
                            i.search.engine = o.name, i.search.query = i.referrer_info.query[o.query], i.search.terms = i.search.query ? i.search.query.split(" ") : null;
                            break
                        }
                    if (null === i.search.engine && i.referrer_info.search.length > 1)
                        for (l = 0; l < c.length; l++) {
                            var d = i.referrer_info.query[c[l]];
                            if (d) {
                                i.search.engine = "Unknown", i.search.query = d, i.search.terms = d.split(" ");
                                break
                            }
                        }
                } else i.prev_visit = i.last_visit, i.last_visit = (new Date).getTime(), i.visits++, i.time_since_last_visit = i.last_visit - i.prev_visit;
                return u.set_cookie(n, u.package_obj(i), r), i
            },
            html5_location: function() {
                return function(e) {
                    n.geolocation.getCurrentPosition(function(t) {
                        t.source = "html5", e(t)
                    }, function() {
                        i.gapi_location ? a.gapi_location()(e) : e({
                            error: !0,
                            source: "html5"
                        })
                    })
                }
            },
            gapi_location: function() {
                return function(t) {
                    var n = u.get_obj(i.location_cookie);
                    n && "google" === n.source ? t(n) : (e.gloader_ready = function() {
                        "google" in e && (e.google.loader.ClientLocation ? (e.google.loader.ClientLocation.source = "google", t(e.google.loader.ClientLocation)) : t({
                            error: !0,
                            source: "google"
                        }), u.set_cookie(i.location_cookie, u.package_obj(e.google.loader.ClientLocation), 1e3 * 60 * 60 * i.location_cookie_timeout))
                    }, u.embed_script("https://www.google.com/jsapi?callback=gloader_ready"))
                }
            },
            ipinfodb_location: function(t) {
                return function(n) {
                    var r = u.get_obj(i.location_cookie);
                    r && "ipinfodb" === r.source && n(r), e.ipinfocb = function(e) {
                        if ("OK" === e.statusCode) e.source = "ipinfodb", u.set_cookie(i.location_cookie, u.package_obj(e), 1e3 * 60 * 60 * i.location_cookie), n(e);
                        else {
                            if (i.gapi_location) return a.gapi_location()(n);
                            n({
                                error: !0,
                                source: "ipinfodb",
                                message: e.statusMessage
                            })
                        }
                    }, u.embed_script("http://api.ipinfodb.com/v3/ip-city/?key=" + t + "&format=json&callback=ipinfocb")
                }
            }
        },
        u = {
            parse_url: function(e) {
                var n = t.createElement("a"),
                    r = {};
                if (n.href = e, query_str = n.search.substr(1), "" != query_str)
                    for (var i, o = query_str.split("&"), s = 0, a = o.length; a > s; s++) i = o[s].split("="), 2 === i.length && (r[i[0]] = decodeURI(i[1]));
                return {
                    host: n.host,
                    path: n.pathname,
                    protocol: n.protocol,
                    port: "" === n.port ? 80 : n.port,
                    search: n.search,
                    query: r
                }
            },
            set_cookie: function(n, r, i, o) {
                if (!n) return null;
                if (!o) var o = {};
                return (null === r || void 0 === r) && (i = -1), i && (o.expires = (new Date).getTime() + i), t.cookie = [encodeURIComponent(n), "=", encodeURIComponent(String(r)), o.expires ? "; expires=" + new Date(o.expires).toUTCString() : "", "; path=" + (o.path ? o.path : "/"), o.domain ? "; domain=" + o.domain : "", e.location && "https:" === e.location.protocol ? "; secure" : ""].join("")
            },
            get_cookie: function(e, n) {
                return (n = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(t.cookie)) ? decodeURIComponent(n[1]) : null
            },
            embed_script: function(e) {
                var n = t.createElement("script");
                n.type = "text/javascript", n.src = e, t.getElementsByTagName("body")[0].appendChild(n)
            },
            package_obj: function(e) {
                if (e) {
                    e.version = r;
                    var t = l.stringify(e);
                    return delete e.version, t
                }
            },
            get_obj: function(e) {
                var t;
                try {
                    t = l.parse(u.get_cookie(e))
                } catch (n) {}
                return t && t.version == r ? (delete t.version, t) : void 0
            }
        },
        l = {
            parse: e.JSON && e.JSON.parse || function(e) {
                return "string" == typeof e && e ? new Function("return " + e)() : null
            },
            stringify: e.JSON && e.JSON.stringify || function(e) {
                var t = typeof e;
                if ("object" === t && null !== e) {
                    var n, r, i = [],
                        o = e && e.constructor === Array;
                    for (n in e) r = e[n], t = typeof r, "string" === t ? r = '"' + r + '"' : "object" === t && null !== r && (r = this.stringify(r)), i.push((o ? "" : '"' + n + '":') + r);
                    return (o ? "[" : "{") + i.join(",") + (o ? "]" : "}")
                }
                return "string" === t ? '"' + e + '"' : void 0
            }
        };
    o()
};
"undefined" == typeof window.exports ? session_fetch(window, document, navigator) : window.exports.session = session_fetch,
    function(e) {
        e.fn.iframeAutoHeight = function(t) {
            function n(e) {
                window.console && t.debug && 1 == t.debug && console.log(e)
            }
            var t = e.extend({
                heightOffset: 0,
                callback: function() {},
                debug: !1
            }, t);
            n(t), e(this).each(function() {
                function r(e) {
                    return e.contentWindow.document.compatMode && "ActiveXObject" in window && "function" == typeof window.ActiveXObject ? (n("IE Quirks mode"), !0) : !1
                }

                function i(e) {
                    var i;
                    i = r(e) ? e.contentWindow.document.body.scrollHeight + t.heightOffset : e.contentWindow.document.body.offsetHeight + t.heightOffset, n("New Height: " + i), e.style.height = i + "px", t.callback({
                        newFrameHeight: i
                    })
                }
                if (n(this), e.browser.safari || e.browser.opera) {
                    n("browser is webkit or opera"), e(this).load(function() {
                        var e = this;
                        e.style.height = "0px";
                        var t = function() {
                            i(e)
                        };
                        setTimeout(t, 0)
                    });
                    var o = e(this).attr("src");
                    e(this).attr("src", ""), e(this).attr("src", o)
                } else e(this).load(function() {
                    i(this)
                })
            })
        }
    }(jQuery), window.Modernizr = function(e, t, n) {
        function r(e) {
            f.cssText = e
        }

        function i(e, t) {
            return typeof e === t
        }
        var o, s, a, u = "2.8.3",
            l = {},
            c = !0,
            d = t.documentElement,
            h = "modernizr",
            p = t.createElement(h),
            f = p.style,
            m = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
            g = {},
            v = [],
            y = v.slice,
            b = {}.hasOwnProperty;
        a = i(b, "undefined") || i(b.call, "undefined") ? function(e, t) {
            return t in e && i(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return b.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(e) {
            var t = this;
            if ("function" != typeof t) throw new TypeError;
            var n = y.call(arguments, 1),
                r = function() {
                    if (this instanceof r) {
                        var i = function() {};
                        i.prototype = t.prototype;
                        var o = new i,
                            s = t.apply(o, n.concat(y.call(arguments)));
                        return Object(s) === s ? s : o
                    }
                    return t.apply(e, n.concat(y.call(arguments)))
                };
            return r
        });
        for (var w in g) a(g, w) && (s = w.toLowerCase(), l[s] = g[w](), v.push((l[s] ? "" : "no-") + s));
        return l.addTest = function(e, t) {
                if ("object" == typeof e)
                    for (var r in e) a(e, r) && l.addTest(r, e[r]);
                else {
                    if (e = e.toLowerCase(), l[e] !== n) return l;
                    t = "function" == typeof t ? t() : t, "undefined" != typeof c && c && (d.className += " " + (t ? "" : "no-") + e), l[e] = t
                }
                return l
            }, r(""), p = o = null,
            function(e, t) {
                function n(e, t) {
                    var n = e.createElement("p"),
                        r = e.getElementsByTagName("head")[0] || e.documentElement;
                    return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
                }

                function r() {
                    var e = y.elements;
                    return "string" == typeof e ? e.split(" ") : e
                }

                function i(e) {
                    var t = v[e[m]];
                    return t || (t = {}, g++, e[m] = g, v[g] = t), t
                }

                function o(e, n, r) {
                    if (n || (n = t), c) return n.createElement(e);
                    r || (r = i(n));
                    var o;
                    return o = r.cache[e] ? r.cache[e].cloneNode() : f.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || p.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
                }

                function s(e, n) {
                    if (e || (e = t), c) return e.createDocumentFragment();
                    n = n || i(e);
                    for (var o = n.frag.cloneNode(), s = 0, a = r(), u = a.length; u > s; s++) o.createElement(a[s]);
                    return o
                }

                function a(e, t) {
                    t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                        return y.shivMethods ? o(n, e, t) : t.createElem(n)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-]+/g, function(e) {
                        return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                    }) + ");return n}")(y, t.frag)
                }

                function u(e) {
                    e || (e = t);
                    var r = i(e);
                    return y.shivCSS && !l && !r.hasCSS && (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), c || a(e, r), e
                }
                var l, c, d = "3.7.0",
                    h = e.html5 || {},
                    p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    m = "_html5shiv",
                    g = 0,
                    v = {};
                ! function() {
                    try {
                        var e = t.createElement("a");
                        e.innerHTML = "<xyz></xyz>", l = "hidden" in e, c = 1 == e.childNodes.length || function() {
                            t.createElement("a");
                            var e = t.createDocumentFragment();
                            return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                        }()
                    } catch (n) {
                        l = !0, c = !0
                    }
                }();
                var y = {
                    elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: d,
                    shivCSS: h.shivCSS !== !1,
                    supportsUnknownElements: c,
                    shivMethods: h.shivMethods !== !1,
                    type: "default",
                    shivDocument: u,
                    createElement: o,
                    createDocumentFragment: s
                };
                e.html5 = y, u(t)
            }(this, t), l._version = u, l._prefixes = m, d.className = d.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (c ? " js " + v.join(" ") : ""), l
    }(this, this.document),
    function(e, t, n) {
        function r(e) {
            return "[object Function]" == g.call(e)
        }

        function i(e) {
            return "string" == typeof e
        }

        function o() {}

        function s(e) {
            return !e || "loaded" == e || "complete" == e || "uninitialized" == e
        }

        function a() {
            var e = v.shift();
            y = 1, e ? e.t ? f(function() {
                ("c" == e.t ? h.injectCss : h.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
            }, 0) : (e(), a()) : y = 0
        }

        function u(e, n, r, i, o, u, l) {
            function c(t) {
                if (!p && s(d.readyState) && (b.r = p = 1, !y && a(), d.onload = d.onreadystatechange = null, t)) {
                    "img" != e && f(function() {
                        x.removeChild(d)
                    }, 50);
                    for (var r in S[n]) S[n].hasOwnProperty(r) && S[n][r].onload()
                }
            }
            var l = l || h.errorTimeout,
                d = t.createElement(e),
                p = 0,
                g = 0,
                b = {
                    t: r,
                    s: n,
                    e: o,
                    a: u,
                    x: l
                };
            1 === S[n] && (g = 1, S[n] = []), "object" == e ? d.data = n : (d.src = n, d.type = e), d.width = d.height = "0", d.onerror = d.onload = d.onreadystatechange = function() {
                c.call(this, g)
            }, v.splice(i, 0, b), "img" != e && (g || 2 === S[n] ? (x.insertBefore(d, w ? null : m), f(c, l)) : S[n].push(d))
        }

        function l(e, t, n, r, o) {
            return y = 0, t = t || "j", i(e) ? u("c" == t ? k : _, e, t, this.i++, n, r, o) : (v.splice(this.i++, 0, e), 1 == v.length && a()), this
        }

        function c() {
            var e = h;
            return e.loader = {
                load: l,
                i: 0
            }, e
        }
        var d, h, p = t.documentElement,
            f = e.setTimeout,
            m = t.getElementsByTagName("script")[0],
            g = {}.toString,
            v = [],
            y = 0,
            b = "MozAppearance" in p.style,
            w = b && !!t.createRange().compareNode,
            x = w ? p : m.parentNode,
            p = e.opera && "[object Opera]" == g.call(e.opera),
            p = !!t.attachEvent && !p,
            _ = b ? "object" : p ? "script" : "img",
            k = p ? "script" : _,
            $ = Array.isArray || function(e) {
                return "[object Array]" == g.call(e)
            },
            C = [],
            S = {},
            E = {
                timeout: function(e, t) {
                    return t.length && (e.timeout = t[0]), e
                }
            };
        h = function(e) {
            function t(e) {
                var t, n, r, e = e.split("!"),
                    i = C.length,
                    o = e.pop(),
                    s = e.length,
                    o = {
                        url: o,
                        origUrl: o,
                        prefixes: e
                    };
                for (n = 0; s > n; n++) r = e[n].split("="), (t = E[r.shift()]) && (o = t(o, r));
                for (n = 0; i > n; n++) o = C[n](o);
                return o
            }

            function s(e, i, o, s, a) {
                var u = t(e),
                    l = u.autoCallback;
                u.url.split(".").pop().split("?").shift(), u.bypass || (i && (i = r(i) ? i : i[e] || i[s] || i[e.split("/").pop().split("?")[0]]), u.instead ? u.instead(e, i, o, s, a) : (S[u.url] ? u.noexec = !0 : S[u.url] = 1, o.load(u.url, u.forceCSS || !u.forceJS && "css" == u.url.split(".").pop().split("?").shift() ? "c" : n, u.noexec, u.attrs, u.timeout), (r(i) || r(l)) && o.load(function() {
                    c(), i && i(u.origUrl, a, s), l && l(u.origUrl, a, s), S[u.url] = 2
                })))
            }

            function a(e, t) {
                function n(e, n) {
                    if (e) {
                        if (i(e)) n || (d = function() {
                            var e = [].slice.call(arguments);
                            h.apply(this, e), p()
                        }), s(e, d, t, 0, l);
                        else if (Object(e) === e)
                            for (u in a = function() {
                                    var t, n = 0;
                                    for (t in e) e.hasOwnProperty(t) && n++;
                                    return n
                                }(), e) e.hasOwnProperty(u) && (!n && !--a && (r(d) ? d = function() {
                                var e = [].slice.call(arguments);
                                h.apply(this, e), p()
                            } : d[u] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), p()
                                }
                            }(h[u])), s(e[u], d, t, u, l))
                    } else !n && p()
                }
                var a, u, l = !!e.test,
                    c = e.load || e.both,
                    d = e.callback || o,
                    h = d,
                    p = e.complete || o;
                n(l ? e.yep : e.nope, !!c), c && n(c)
            }
            var u, l, d = this.yepnope.loader;
            if (i(e)) s(e, 0, d, 0);
            else if ($(e))
                for (u = 0; u < e.length; u++) l = e[u], i(l) ? s(l, 0, d, 0) : $(l) ? h(l) : Object(l) === l && a(l, d);
            else Object(e) === e && a(e, d)
        }, h.addPrefix = function(e, t) {
            E[e] = t
        }, h.addFilter = function(e) {
            C.push(e)
        }, h.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", d = function() {
            t.removeEventListener("DOMContentLoaded", d, 0), t.readyState = "complete"
        }, 0)), e.yepnope = c(), e.yepnope.executeStack = a, e.yepnope.injectJs = function(e, n, r, i, u, l) {
            var c, d, p = t.createElement("script"),
                i = i || h.errorTimeout;
            p.src = e;
            for (d in r) p.setAttribute(d, r[d]);
            n = l ? a : n || o, p.onreadystatechange = p.onload = function() {
                !c && s(p.readyState) && (c = 1, n(), p.onload = p.onreadystatechange = null)
            }, f(function() {
                c || (c = 1, n(1))
            }, i), u ? p.onload() : m.parentNode.insertBefore(p, m)
        }, e.yepnope.injectCss = function(e, n, r, i, s, u) {
            var l, i = t.createElement("link"),
                n = u ? a : n || o;
            i.href = e, i.rel = "stylesheet", i.type = "text/css";
            for (l in r) i.setAttribute(l, r[l]);
            s || (m.parentNode.insertBefore(i, m), f(n, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    }, Modernizr.addTest("cssfilters", function() {
        var e = document.createElement("div");
        return e.style.cssText = Modernizr._prefixes.join("filter:blur(2px); "), !!e.style.length && (void 0 === document.documentMode || document.documentMode > 9)
    }),
    function() {
        var e, t, n, r, i, o, s, a, u, l, c, d, h, p, f, m, g, v, y, b, w, x = [].slice,
            _ = [].indexOf || function(e) {
                for (var t = 0, n = this.length; n > t; t++)
                    if (t in this && this[t] === e) return t;
                return -1
            };
        $.payment = {}, $.payment.fn = {}, $.fn.payment = function() {
            var e, t;
            return t = arguments[0], e = 2 <= arguments.length ? x.call(arguments, 1) : [], $.payment.fn[t].apply(this, e)
        }, r = /(\d{1,4})/g, $.payment.cards = n = [{
            type: "visaelectron",
            pattern: /^4(026|17500|405|508|844|91[37])/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "maestro",
            pattern: /^(5(018|0[23]|[68])|6(39|7))/,
            format: r,
            length: [12, 13, 14, 15, 16, 17, 18, 19],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "forbrugsforeningen",
            pattern: /^600/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "dankort",
            pattern: /^5019/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "visa",
            pattern: /^4/,
            format: r,
            length: [13, 16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "mastercard",
            pattern: /^5[0-5]/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "amex",
            pattern: /^3[47]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,5})?/,
            length: [15],
            cvcLength: [3, 4],
            luhn: !0
        }, {
            type: "dinersclub",
            pattern: /^3[0689]/,
            format: /(\d{1,4})(\d{1,6})?(\d{1,4})?/,
            length: [14],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "discover",
            pattern: /^6([045]|22)/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }, {
            type: "unionpay",
            pattern: /^(62|88)/,
            format: r,
            length: [16, 17, 18, 19],
            cvcLength: [3],
            luhn: !1
        }, {
            type: "jcb",
            pattern: /^35/,
            format: r,
            length: [16],
            cvcLength: [3],
            luhn: !0
        }], e = function(e) {
            var t, r, i;
            for (e = (e + "").replace(/\D/g, ""), r = 0, i = n.length; i > r; r++)
                if (t = n[r], t.pattern.test(e)) return t
        }, t = function(e) {
            var t, r, i;
            for (r = 0, i = n.length; i > r; r++)
                if (t = n[r], t.type === e) return t
        }, d = function(e) {
            var t, n, r, i, o, s;
            for (r = !0, i = 0, n = (e + "").split("").reverse(), o = 0, s = n.length; s > o; o++) t = n[o], t = parseInt(t, 10), (r = !r) && (t *= 2), t > 9 && (t -= 9), i += t;
            return 0 === i % 10
        }, c = function(e) {
            var t;
            return null != e.prop("selectionStart") && e.prop("selectionStart") !== e.prop("selectionEnd") ? !0 : null != ("undefined" != typeof document && null !== document ? null != (t = document.selection) ? t.createRange : void 0 : void 0) && document.selection.createRange().text ? !0 : !1
        }, m = function(e) {
            return setTimeout(function() {
                var t, n;
                return t = $(e.currentTarget), n = t.val(), n = n.replace(/\D/g, ""), t.val(n)
            })
        }, p = function(e) {
            return setTimeout(function() {
                var t, n;
                return t = $(e.currentTarget), n = t.val(), n = $.payment.formatCardNumber(n), t.val(n)
            })
        }, s = function(t) {
            var n, r, i, o, s, a, u;
            return i = String.fromCharCode(t.which), !/^\d+$/.test(i) || (n = $(t.currentTarget), u = n.val(), r = e(u + i), o = (u.replace(/\D/g, "") + i).length, a = 16, r && (a = r.length[r.length.length - 1]), o >= a || null != n.prop("selectionStart") && n.prop("selectionStart") !== u.length) ? void 0 : (s = r && "amex" === r.type ? /^(\d{4}|\d{4}\s\d{6})$/ : /(?:^|\s)(\d{4})$/, s.test(u) ? (t.preventDefault(), setTimeout(function() {
                return n.val(u + " " + i)
            })) : s.test(u + i) ? (t.preventDefault(), setTimeout(function() {
                return n.val(u + i + " ")
            })) : void 0)
        }, i = function(e) {
            var t, n;
            return t = $(e.currentTarget), n = t.val(), 8 !== e.which || null != t.prop("selectionStart") && t.prop("selectionStart") !== n.length ? void 0 : /\d\s$/.test(n) ? (e.preventDefault(), setTimeout(function() {
                return t.val(n.replace(/\d\s$/, ""))
            })) : /\s\d?$/.test(n) ? (e.preventDefault(), setTimeout(function() {
                return t.val(n.replace(/\d$/, ""))
            })) : void 0
        }, f = function(e) {
            return setTimeout(function() {
                var t, n;
                return t = $(e.currentTarget), n = t.val(), n = $.payment.formatExpiry(n), t.val(n)
            })
        }, a = function(e) {
            var t, n, r;
            return n = String.fromCharCode(e.which), /^\d+$/.test(n) ? (t = $(e.currentTarget), r = t.val() + n, /^\d$/.test(r) && "0" !== r && "1" !== r ? (e.preventDefault(), setTimeout(function() {
                return t.val("0" + r + " / ")
            })) : /^\d\d$/.test(r) ? (e.preventDefault(), setTimeout(function() {
                return t.val("" + r + " / ")
            })) : void 0) : void 0
        }, u = function(e) {
            var t, n, r;
            return n = String.fromCharCode(e.which), /^\d+$/.test(n) ? (t = $(e.currentTarget), r = t.val(), /^\d\d$/.test(r) ? t.val("" + r + " / ") : void 0) : void 0
        }, l = function(e) {
            var t, n, r;
            return r = String.fromCharCode(e.which), "/" === r || " " === r ? (t = $(e.currentTarget), n = t.val(), /^\d$/.test(n) && "0" !== n ? t.val("0" + n + " / ") : void 0) : void 0
        }, o = function(e) {
            var t, n;
            return t = $(e.currentTarget), n = t.val(), 8 !== e.which || null != t.prop("selectionStart") && t.prop("selectionStart") !== n.length ? void 0 : /\d\s\/\s$/.test(n) ? (e.preventDefault(), setTimeout(function() {
                return t.val(n.replace(/\d\s\/\s$/, ""))
            })) : void 0
        }, h = function(e) {
            return setTimeout(function() {
                var t, n;
                return t = $(e.currentTarget), n = t.val(), n = n.replace(/\D/g, "").slice(0, 4), t.val(n)
            })
        }, b = function(e) {
            var t;
            return e.metaKey || e.ctrlKey ? !0 : 32 === e.which ? !1 : 0 === e.which ? !0 : e.which < 33 ? !0 : (t = String.fromCharCode(e.which), !!/[\d\s]/.test(t))
        }, v = function(t) {
            var n, r, i, o;
            return n = $(t.currentTarget), i = String.fromCharCode(t.which), /^\d+$/.test(i) && !c(n) ? (o = (n.val() + i).replace(/\D/g, ""), r = e(o), r ? o.length <= r.length[r.length.length - 1] : o.length <= 16) : void 0
        }, y = function(e) {
            var t, n, r;
            return t = $(e.currentTarget), n = String.fromCharCode(e.which), /^\d+$/.test(n) && !c(t) ? (r = t.val() + n, r = r.replace(/\D/g, ""), r.length > 6 ? !1 : void 0) : void 0
        }, g = function(e) {
            var t, n, r;
            return t = $(e.currentTarget), n = String.fromCharCode(e.which), /^\d+$/.test(n) && !c(t) ? (r = t.val() + n, r.length <= 4) : void 0
        }, w = function(e) {
            var t, r, i, o, s;
            return t = $(e.currentTarget), s = t.val(), o = $.payment.cardType(s) || "unknown", t.hasClass(o) ? void 0 : (r = function() {
                var e, t, r;
                for (r = [], e = 0, t = n.length; t > e; e++) i = n[e], r.push(i.type);
                return r
            }(), t.removeClass("unknown"), t.removeClass(r.join(" ")), t.addClass(o), t.toggleClass("identified", "unknown" !== o), t.trigger("payment.cardType", o))
        }, $.payment.fn.formatCardCVC = function() {
            return this.on("keypress", b), this.on("keypress", g), this.on("paste", h), this.on("change", h), this.on("input", h), this
        }, $.payment.fn.formatCardExpiry = function() {
            return this.on("keypress", b), this.on("keypress", y), this.on("keypress", a), this.on("keypress", l), this.on("keypress", u), this.on("keydown", o), this.on("change", f), this.on("input", f), this
        }, $.payment.fn.formatCardNumber = function() {
            return this.on("keypress", b), this.on("keypress", v), this.on("keypress", s), this.on("keydown", i), this.on("keyup", w), this.on("paste", p), this.on("change", p), this.on("input", p), this.on("input", w), this
        }, $.payment.fn.restrictNumeric = function() {
            return this.on("keypress", b), this.on("paste", m), this.on("change", m), this.on("input", m), this
        }, $.payment.fn.cardExpiryVal = function() {
            return $.payment.cardExpiryVal($(this).val())
        }, $.payment.cardExpiryVal = function(e) {
            var t, n, r, i;
            return e = e.replace(/\s/g, ""), i = e.split("/", 2), t = i[0], r = i[1], 2 === (null != r ? r.length : void 0) && /^\d+$/.test(r) && (n = (new Date).getFullYear(), n = n.toString().slice(0, 2), r = n + r), t = parseInt(t, 10), r = parseInt(r, 10), {
                month: t,
                year: r
            }
        }, $.payment.validateCardNumber = function(t) {
            var n, r;
            return t = (t + "").replace(/\s+|-/g, ""), /^\d+$/.test(t) ? (n = e(t), n ? (r = t.length, _.call(n.length, r) >= 0 && (n.luhn === !1 || d(t))) : !1) : !1
        }, $.payment.validateCardExpiry = function(e, t) {
            var n, r, i;
            return "object" == typeof e && "month" in e && (i = e, e = i.month, t = i.year), e && t ? (e = $.trim(e), t = $.trim(t), /^\d+$/.test(e) ? /^\d+$/.test(t) ? e >= 1 && 12 >= e ? (2 === t.length && (t = 70 > t ? "20" + t : "19" + t), 4 !== t.length ? !1 : (r = new Date(t, e), n = new Date, r.setMonth(r.getMonth() - 1), r.setMonth(r.getMonth() + 1, 1), r > n)) : !1 : !1 : !1) : !1
        }, $.payment.validateCardCVC = function(e, n) {
            var r, i;
            return e = $.trim(e), /^\d+$/.test(e) ? (r = t(n), null != r ? (i = e.length, _.call(r.cvcLength, i) >= 0) : e.length >= 3 && e.length <= 4) : !1
        }, $.payment.cardType = function(t) {
            var n;
            return t ? (null != (n = e(t)) ? n.type : void 0) || null : null
        }, $.payment.formatCardNumber = function(t) {
            var n, r, i, o;
            return t = t.replace(/\D/g, ""), (n = e(t)) ? (i = n.length[n.length.length - 1], t = t.slice(0, i), n.format.global ? null != (o = t.match(n.format)) ? o.join(" ") : void 0 : (r = n.format.exec(t), null != r ? (r.shift(), r = $.grep(r, function(e) {
                return e
            }), r.join(" ")) : void 0)) : t
        }, $.payment.formatExpiry = function(e) {
            var t, n, r, i;
            return (n = e.match(/^\D*(\d{1,2})(\D+)?(\d{1,4})?/)) ? (t = n[1] || "", r = n[2] || "", i = n[3] || "", i.length > 0 ? r = " / " : " /" === r ? (t = t.substring(0, 1), r = "") : 2 === t.length || r.length > 0 ? r = " / " : 1 === t.length && "0" !== t && "1" !== t && (t = "0" + t, r = " / "), t + r + i) : ""
        }
    }.call(this),
    function() {
        var e, t, n = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        window.quanto = {
            instances: {},
            log_levels: {
                1: "DEBUG",
                2: "INFO",
                4: "WARN",
                5: "ERROR",
                10: "DEBUG",
                11: "INFO",
                13: "WARN",
                14: "ERROR"
            },
            is_real_user: function() {
                return function() {
                    return null != quanto.user_id && !quanto.is_anonymous()
                }
            }(this),
            is_mac: function() {
                return function() {
                    return "true" === $("#is_mac").val()
                }
            }(this),
            set_csrf_token: function() {
                return function(e, t) {
                    return null != e && $('meta[name="csrf-param"]').attr("content", e), null != t ? $('meta[name="csrf-token"]').attr("content", t) : void 0
                }
            }(this),
            is_anonymous: function() {
                return function() {
                    return $("#current_user_type").length > 0 && "1" === $("#current_user_type").val()
                }
            }(this),
            is_employee_or_admin: function(e) {
                return function() {
                    return $("#employee_status").length > 0 ? "true" === $("#employee_status").val() : null != e.is_employee ? e.is_employee : !1
                }
            }(this),
            linkify: function(e) {
                var t, n, r, i;
                return t = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim, i = e.replace(t, '<a href="$1" target="_blank">$1</a>'), n = /(^|[^\/])(www\.[\S]+(\b|$))/gim, i = i.replace(n, '$1<a href="http://$2" target="_blank">$2</a>'), r = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim, i = i.replace(r, '<a href="mailto:$1">$1</a>')
            },
            is_mobile_screen: function() {
                return function() {
                    var e;
                    try {
                        return window.matchMedia("(max-width: 767px)").matches
                    } catch (t) {
                        return e = t, !1
                    }
                }
            }(this),
            set_benchmark: function() {
                return function(e, t) {
                    var n, r;
                    return r = $(".legend-item[data-key=Benchmark]").find("" + t).not(".square"), n = [e], 8554 === e ? r.html("Benchmark (SPY)") : $.post("/securities/find_by_sid_post", {
                        sids: n
                    }, function(e) {
                        var t, n, i, o, s;
                        if (n = new quanto.JsonResponse(e), n.ok() && null != n.data() && !_.isEmpty(n.data())) {
                            t = n.data(), s = [];
                            for (i in t) o = t[i], s.push(r.html("Benchmark (" + o[0] + ") "));
                            return s
                        }
                    })
                }
            }(this),
            validate_ib_account: function() {
                return function(e, t) {
                    var n, r;
                    return r = /^(D|U|F)/, !r.test(e) || e.length < 6 || e.length > 8 ? (n = t ? "This does not appear to be a valid IB account. Quantopian expects IB account numbers to start with U and to be between 6 and 8 characters long. If you believe you have a valid account, contact feedback." : "<b>" + e + "</b> does not appear to be a valid IB account. <br><br>Quantopian expects IB account numbers to start with D or U and to be between 6 and 8 characters long. If you believe you have a valid account, contact <a class='open-feedback-link'>feedback.</a>", {
                        is_valid: !1,
                        msg: n
                    }) : 0 === e.indexOf("DF") ? (n = t ? "This appears to be a Demo Financial Advisory account (prefix DF), which aren't supported at this time. Instead, you should enter a real money account (prefix U)." : "<b>" + e + "</b> appears to be a Demo Financial Advisory account (prefix DF). <br><br>DF accounts aren't supported at this time. Instead, you should enter one of your sub-accounts (prefix DU).", {
                        is_valid: !1,
                        msg: n
                    }) : 0 === e.indexOf("F") ? (n = t ? "This appears to be a Financial Advisory account (prefix F), which aren't supported at this time. Instead, you should enter a real money account (prefix U)." : "<b>" + e + "</b> appears to be a Financial Advisory account (prefix F). <br><br>F accounts aren't supported at this time. Instead, you should enter one of your sub-accounts (prefix U).", {
                        is_valid: !1,
                        msg: n
                    }) : 0 === e.indexOf("D") ? t ? (n = "This appears to be a Demo account (prefix D). Instead, you should enter a real money account (prefix U).", {
                        is_valid: !1,
                        msg: n
                    }) : {
                        is_valid: !0
                    } : {
                        is_valid: !0
                    }
                }
            }(this),
            set_is_employee: function(e) {
                return function(t) {
                    return e.is_employee = null != t && "true" === t.toString()
                }
            }(this),
            is_not_logged_in_error: function() {
                return function(e) {
                    var t;
                    return null == e ? !1 : (t = new quanto.JsonResponse(e), t.error() && null != t.data() && null != t.data().error && "not_logged_in" === t.data().error ? !0 : !1)
                }
            }(this),
            is_ie: function() {
                return function() {
                    var e, t, n;
                    try {
                        return "undefined" != typeof navigator && null !== navigator && (-1 !== (null != (t = navigator.userAgent) ? t.indexOf("MSIE") : void 0) || (null != (n = navigator.appVersion) ? n.indexOf("Trident/") : void 0) > 0)
                    } catch (r) {
                        return e = r, !1
                    }
                }
            }(this),
            hide_footer: function() {
                return function() {
                    return $(".footer").hide(), $(".content").addClass("padding_b0")
                }
            }(this),
            show_footer: function() {
                return function() {
                    return $(".footer").show(), $(".content").removeClass("padding_b0")
                }
            }(this),
            on_click: function() {
                return function(e, t) {
                    var n;
                    return e instanceof jQuery && (e = e.selector), n = navigator.userAgent.toLowerCase(), n.match(/(iPhone|iPod|iPad)/i) ? $(e).bind("tapone", t) : $(document).on("click", e, t)
                }
            }(this),
            get_query_variable: function() {
                return function(e) {
                    var t, n, r, i, o, s;
                    for (n = window.location.search.substring(1), i = n.split("&"), o = 0, s = i.length; s > o; o++)
                        if (r = i[o], t = r.split("="), decodeURIComponent(t[0]) === e) return decodeURIComponent(t[1]);
                    return null
                }
            }(this),
            debug_on: function() {
                return function() {
                    return "1" === quanto.get_query_variable("debug")
                }
            }(this),
            safeParseInt: function() {
                return function(e) {
                    var t;
                    try {
                        return parseInt(e)
                    } catch (n) {
                        return t = n, 0 / 0
                    }
                }
            }(this),
            escapeHTML: function() {
                return function(e) {
                    var t;
                    return t = document.createElement("div"), t.appendChild(document.createTextNode(e)), t.innerHTML
                }
            }(this),
            get_safe_window_hash: function() {
                return function() {
                    return quanto.escapeHTML(window.location.hash)
                }
            }(this),
            get_server: function() {
                return function(e) {
                    var n, r, i, o;
                    return o = e.success_callback, i = e.failure_callback, r = {
                        task_id: e.task_id,
                        is_public: e.anonymous
                    }, n = (new Date).getTime(), $.post("/get_server?t=" + n, r, function(e) {
                        var n, r, s, a;
                        if (n = new t(e), n.ok())
                            if (r = n.data().server_ip, s = n.data().server_port, a = n.data().ws_open_msg, null != r && null != o) {
                                if (null != o) return o(r, s, a)
                            } else if (null != i) return i()
                    })
                }
            }(this),
            show_error_popup: function() {
                return function(e, t) {
                    return e || (e = "Error"), t || (t = "Sorry, something went wrong.  Try again or contact us by <a class='open-feedback-link'>sending feedback</a>."), $("#error-modal").find(".modal-title").html(e), $("#error-modal").find(".body-content").html(t), $("#error-modal").modal("show")
                }
            }(this),
            show_confirmation_popup: function() {
                return function(e, t, n, r) {
                    return $("#confirmation-modal").find(".modal-title").html(e), $("#confirmation-modal").find(".body-content").html(t), $("#confirmation-modal").off("click", ".action-button"), $("#confirmation-modal").find(".action-button").html(n), $("#confirmation-modal").on("click", ".action-button", function() {
                        return r()
                    }), $("#confirmation-modal").modal("show")
                }
            }(this),
            show_join_popup: function() {
                return function() {
                    return $("#join-modal").modal("show")
                }
            }(this),
            get_src_element: function() {
                return function(e) {
                    return e.srcElement || e.target
                }
            }(this),
            turn_on_busy: function(e) {
                var t;
                return e.addClass("disabled").attr("disabled", "disabled"), e.find("img.loading").show(), t = e.data("busytext"), null != t ? e.find("span.button-label").html(t) : (e.find(".active-text").hide(), e.find(".busy-text").show())
            },
            turn_off_busy: function(e) {
                var t;
                return e.removeClass("disabled").attr("disabled", !1), e.find("img.loading").hide(), t = e.data("normaltext"), null != t ? e.find("span.button-label").html(t) : (e.find(".busy-text").hide(), e.find(".active-text").show())
            },
            show_message_popup: function(e, t) {
                var n;
                return n = $("#message-modal"), n.find(".modal-title").html(e), n.find(".modal-body").html(t), n.modal("show")
            },
            show_scrollable_modal: function() {
                return function(e) {
                    var t, n;
                    return n = function(t) {
                        return t.target === e[0] ? $("body").addClass("prevent-background-scroll") : void 0
                    }, t = function(r) {
                        return r.target === e[0] ? ($("body").removeClass("prevent-background-scroll"), e.off("shown", n), e.off("hidden", t)) : void 0
                    }, e.on("shown", n), e.on("hidden", t), e.modal({
                        backdrop: "static"
                    })
                }
            }(this),
            show_validation_tooltip: function(e) {
                return function(t, n, r) {
                    var i;
                    return null == r && (r = "keydown"), quanto.clear_validation_tooltip(), e.$tooltip_change_event = r, e.$tooltip_target_elem = t, e.$tooltip_target_elem.focus(), i = "left", $(window).width() < 990 && (i = "top"), e.$tooltip = e.$tooltip_target_elem.tooltip({
                        placement: i,
                        title: n,
                        trigger: "manual"
                    }).tooltip("show"), t[r](quanto.clear_validation_tooltip)
                }
            }(this),
            clear_validation_tooltip: function(e) {
                return function() {
                    return null != e.$tooltip ? (e.$tooltip.tooltip("destroy"), e.$tooltip_target_elem.off(e.$tooltip_change_event, quanto.clear_validation_tooltip), e.$tooltip = null) : void 0
                }
            }(this),
            show_unknown_error_popup: function() {
                return this.show_message_popup("Something went wrong", "Sorry, something went wrong.  Try again or contact us at feedback@quantopian.com.")
            },
            safe_to_number: function() {
                return function(e, t) {
                    return null == e ? "" : new Number(e).toMoney(t, ".", ",", !0)
                }
            }(this),
            safe_to_money: function(e) {
                return null == e ? "" : new Number(e).toMoney()
            },
            safe_to_money_ui: function(e) {
                var t;
                return t = quanto.safe_to_money(e), e > 0 ? "<span class='money-green'>" + t + "</span>" : 0 > e ? "<span class='money-red'>" + t + "</span>" : t
            },
            set_community_home_page_cookie: function() {
                return function(e) {
                    return "interesting" === e ? $.cookie("community_home", "/posts", {
                        path: "/"
                    }) : "newest" === e ? $.cookie("community_home", "/posts/newest", {
                        path: "/"
                    }) : void 0
                }
            }(this),
            go_to_community_home: function() {
                return function() {
                    var e;
                    return e = $.cookie("community_home"), null === e ? (location.href = "/posts", void 0) : location.href = e
                }
            }(this),
            register_remote_event: function(e, t) {
                return "undefined" != typeof TogetherJS && null !== TogetherJS && null != TogetherJS.hub ? TogetherJS.hub.on(e, function() {
                    return function(e) {
                        return t(e)
                    }
                }(this)) : void 0
            },
            trigger_remote_event: function(e) {
                return "string" == typeof e && (e = {
                    type: e
                }), "undefined" != typeof TogetherJS && null !== TogetherJS && TogetherJS.running ? TogetherJS.send(e) : void 0
            },
            show_tooltip: function(e) {
                return function(t, n, r, i) {
                    var o;
                    return null == r && (r = "keydown"), null == i && (i = {}), t.focus(), null == i.placement && (i.placement = $(window).width() < 767 ? "top" : "left"), e.$tooltip = t.tooltip({
                        placement: i.placement,
                        title: n,
                        trigger: "manual"
                    }).tooltip("show"), null != r ? (o = function() {
                        return e.$tooltip.tooltip("destroy"), t.off(r, o)
                    }, t[r](o)) : void 0
                }
            }(this),
            generate_UUID: function() {
                return function() {
                    var e, t;
                    return e = ("undefined" != typeof performance && null !== performance ? performance.now() : void 0) || (new Date).getTime(), t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                        var n;
                        return n = 0 | (e + 16 * Math.random()) % 16, e = Math.floor(e / 16), "x" === t ? n.toString(16) : (8 | 7 & n).toString(16)
                    })
                }
            }(this),
            track_mixpanel: function(e, t) {
                return quanto.is_employee_or_admin() ? void 0 : "undefined" != typeof mixpanel && null !== mixpanel ? null != t ? mixpanel.track(e, t) : mixpanel.track(e) : void 0
            },
            Environment: e = function() {
                function e() {
                    this.test = n(this.test, this), this.production = n(this.production, this), this.staging = n(this.staging, this), this.development = n(this.development, this), this.env = $("#quanto-env").val().toLowerCase()
                }
                return e.prototype.development = function() {
                    return "development" === this.env
                }, e.prototype.staging = function() {
                    return "staging" === this.env
                }, e.prototype.production = function() {
                    return "production" === this.env
                }, e.prototype.test = function() {
                    return "test" === this.env
                }, e
            }(),
            JsonResponse: t = function() {
                function e(e) {
                    var t, r, i;
                    if (this.server_response = e, this.html = n(this.html, this), this.data = n(this.data, this), this.error = n(this.error, this), this.ok = n(this.ok, this), this.redirect = n(this.redirect, this), i = "quantopian_streaming_response_header", "string" == typeof this.server_response) try {
                        this.server_response = $.trim(this.server_response), 0 === this.server_response.indexOf(i) && (this.server_response = this.server_response.substr(i.length)), this.server_response = JSON.parse($.trim(this.server_response))
                    } catch (o) {
                        t = o
                    }
                    this.redirect() && null != this.server_response.to && (r = this.server_response.to, _.str.endsWith(window.location, r) ? window.location.reload(!0) : window.location = r)
                }
                return e.prototype.redirect = function() {
                    return "redirect" === this.server_response.status
                }, e.prototype.ok = function() {
                    return "ok" === this.server_response.status
                }, e.prototype.error = function() {
                    return "error" === this.server_response.status || 400 === this.server_response.status
                }, e.prototype.data = function() {
                    var e;
                    if (this.error()) try {
                        return $.parseJSON(this.server_response.responseText).data
                    } catch (t) {
                        e = t
                    }
                    return this.server_response.data
                }, e.prototype.html = function() {
                    return this.error() ? $.parseJSON(this.server_response.responseText).html : this.server_response.html
                }, e
            }(),
            custom_chart_colors: ["#89A54E", "#80699B", "#18a5ca", "#DB843D", "#A47D7C"],
            global_plotOptions: {
                series: {
                    marker: {
                        states: {
                            hover: {
                                enabled: !0,
                                radius: 4
                            }
                        },
                        symbol: "circle"
                    },
                    animation: !1
                }
            },
            global_grouping_options: {
                enabled: !0,
                approximation: "average",
                units: [
                    ["week", [1]],
                    ["month", [1, 2, 3, 4, 6]]
                ],
                groupPixelWidth: 1
            },
            global_grouping_column_options: {
                enabled: !0,
                approximation: "sum",
                units: [
                    ["week", [1]],
                    ["month", [1, 2, 3, 4, 6]]
                ],
                groupPixelWidth: 1
            },
            risk_window_sizes: {
                m1: "one_month",
                m3: "three_month",
                m6: "six_month",
                m12: "twelve_month"
            },
            pick_property: function(e, t, n) {
                return e.hasOwnProperty(t) ? e[t] : e[n]
            },
            get_selected_rows: function() {
                return function(e) {
                    return $.map(e.find(".quanto-checkbox.icon-check"), function(e) {
                        return $(e).closest("tr")
                    })
                }
            }(this),
            enable_checkbox_tables: function() {
                return function() {
                    var e, t, n, r, i, o, s;
                    if (null != quanto.TableCheckboxManager) {
                        for ((n = quanto.instances).tcms || (n.tcms = []), o = $("table.checkbox-table").not(".checkbox-done"), s = [], r = 0, i = o.length; i > r; r++) t = o[r], e = $(t), quanto.instances.tcms.push(new quanto.TableCheckboxManager(e)), s.push(e.addClass("checkbox-done"));
                        return s
                    }
                }
            }(this),
            translate_order_status: function() {
                return function(e) {
                    var t;
                    try {
                        t = parseInt(e)
                    } catch (n) {
                        return "Unknown"
                    }
                    if (isNaN(t)) return "Unknown";
                    switch (t) {
                        case 0:
                            return "Open";
                        case 1:
                            return "Filled";
                        case 2:
                            return "Cancelled";
                        case 3:
                            return "Rejected";
                        case 4:
                            return "Held";
                        default:
                            return "Unknown"
                    }
                }
            }(this)
        }, Number.prototype.toMoney = function(e, t, n, r) {
            var i, o, s, a, u, l, c, d, h, p;
            return null == r && (r = !1), u = this, i = isNaN(e) ? 2 : Math.abs(e), o = t || ".", d = n || ",", l = 0 > u, s = parseInt(u = Math.abs(u).toFixed(i)) + "", a = (a = s.length) > 3 ? a % 3 : 0, h = a ? s.substr(0, a) + d : "", p = i ? o + Math.abs(u - s).toFixed(i).slice(2) : "", c = h + s.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + d) + p, r ? l ? "-" + c : c : l ? "($" + c + ")" : "$" + c
        }, Handlebars.registerHelper("capitalize", function(e) {
            return _.str.capitalize(e)
        }), $(document).ready(function(e) {
            return function() {
                return quanto.env = new quanto.Environment, quanto.user_id = $("#current_user_id").val(), quanto.enable_checkbox_tables(), quanto.instances || (quanto.instances = {}), Stripe.setPublishableKey($('meta[name="stripe-key"]').attr("content")), quanto.on_click(".modal-x-out", function(e) {
                    return $(quanto.get_src_element(e)).closest(".modal").modal("hide")
                }), $(document).ajaxError(function(e, t, n) {
                    return null == n.error ? quanto.is_not_logged_in_error(t) ? alert("You must be logged in.") : void 0 : void 0
                }), $(".date-field").each(function(e, t) {
                    var n;
                    return n = $(t), n.html(quanto.date.format_date(n.data("format"), new Date(n.data("value"))))
                }), $("[data-toggle='tooltip']").tooltip({
                    delay: {
                        show: 200,
                        hide: 100
                    }
                }), $("*[rel='tooltip']").tooltip(), $("*[rel='popover']").popover(), $(".modal a[rel='tooltip']").length > 0 && $('.modal a[rel="tooltip"]').tooltip().data("tooltip").tip().css("z-index", 2080), $("#error_explanation li").addClass("alert alert-error"), $("a.dropdown-checked").next(".dropdown-menu").find("li").bind("click", function() {
                    var e;
                    if (!$(this).hasClass("nocheck")) return e = $(this).closest(".check-group"), e.find(".checked").removeClass("checked"), $(this).addClass("checked")
                }), quanto.on_click(".reload-link", function() {
                    return window.location.reload(!0)
                }), quanto.on_click(".toggle_error", function(e) {
                    var t;
                    return t = $(quanto.get_src_element(e)), t.closest(".error-details").find(".toggle_payload").toggle()
                }), quanto.on_click(".mixpanel-button", function(e) {
                    var t, n, r, i, o;
                    return t = $(quanto.get_src_element(e)), r = null != (i = t.data("event")) ? i : t.html(), n = null != (o = t.data("mixpanel")) ? o : t.html(), mixpanel.track(r, {
                        link: n
                    })
                }), $(".auth-required").tooltip({
                    placement: "left",
                    title: "Log in to use this feature."
                }).addClass("disabled with-events"), quanto.on_click(".open-feedback-link", function() {
                    return quanto.instances.fm.show(), !1
                }), $('*[data-toggle="modal"]').on("click", function() {
                    var t, n;
                    return n = $(e).data("href"), t = $(n), t.modal("show")
                }), $(".disabled").on("click", function(e) {
                    var t;
                    return $(e).hasClass("disabled") ? (t = $(e.target).attr("login-redirect"), null != t && t.length > 0 && (window.location = t), e.stopImmediatePropagation(), !1) : !0
                }), $(".dropdown-menu.no-close-on-click").click(function() {
                    return event.stopPropagation()
                }), $("#join-modal").on("show", function() {
                    return mixpanel.track("Join modal shown")
                }), quanto.on_click(".clone-sample-algo-link", function(e) {
                    var t, n;
                    return quanto.is_mobile_screen() ? quanto.is_real_user() ? quanto.show_error_popup("Sorry", "Writing algorithms in the IDE is only supported on desktop and laptop computers. Please try again from one of these devices.") : window.location.href = "/users/sign_up" : (t = $(quanto.get_src_element(e)), n = t.data("sampletype") || "default_samples", t.addClass("disabled"), $.post("/algorithms/clone_sample", {
                        sample_algo_type: n
                    }, function(e) {
                        var t;
                        return t = new quanto.JsonResponse(e), t.redirect() ? void 0 : alert("There was a problem cloning the sample algorithm.")
                    }))
                }), quanto.on_click(".notif-clone-algo-link", function(e) {
                    var t, n, r;
                    return t = $(quanto.get_src_element(e)), n = {
                        id: t.data("algo-id")
                    }, r = function() {
                        return alert("There was an error cloning this algorithm.")
                    }, $.post("/algorithms/collab_clone", n, function(e) {
                        var t;
                        return mixpanel.track("new algo", {
                            type: "collab clone"
                        }), t = new quanto.JsonResponse(e), t.redirect() || t.ok() ? void 0 : r()
                    }).fail(function() {
                        return r()
                    })
                }), $("iframe.fullheight").iframeAutoHeight({
                    heightOffset: 100
                }), $(window).resize(function() {
                    return $("iframe.fullheight").iframeAutoHeight({
                        heightOffset: 100
                    })
                }), quanto.on_click(".mobile-nav-category-title", function(e) {
                    var t;
                    return t = $(quanto.get_src_element(e)).closest(".mobile-nav-category"), t.hasClass("open") ? t.find(".mobile-nav-rows").slideUp(200, function() {
                        return t.removeClass("open")
                    }) : (t.find(".mobile-nav-rows").slideDown(200), t.addClass("open"))
                }), quanto.on_click("#navbar-menu-anchor", function() {
                    var e;
                    return e = $("#mobile-navbar-menu"), e.hasClass("open") ? ($("#navbar-menu-anchor").removeClass("open"), e.slideUp(200, function() {
                        return e.removeClass("open")
                    })) : ($("#navbar-menu-anchor").addClass("open"), e.slideDown(200), e.addClass("open"))
                })
            }
        }(this)), jQuery.browser.msie && window.XDomainRequest && (jQuery.support.cors = !0, $.ajaxTransport("+*", function() {
            return function(e) {
                var t;
                return e.crossDomain ? (t = null, {
                    send: function(n, r) {
                        return t = new XDomainRequest, t.onload = function() {
                            var e;
                            return t.contentType.match(/\/xml/) ? (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = !1, e.loadXML(t.responseText), r(200, "success", [e])) : r(200, "success", [t.responseText])
                        }, t.open(e.type, e.url), t.onprogress = function() {}, t.ontimeout = function() {}, t.onerror = function() {}, setTimeout(function() {
                            return t.send()
                        }, 500)
                    },
                    abort: function() {
                        return null != t ? t.abort() : void 0
                    }
                }) : void 0
            }
        }(this))), $.fn.hide = function() {
            return $(this).addClass("hidden")
        }, $.fn.show = function() {
            return $(this).removeClass("hidden").removeClass("hide")
        }, $.fn.textWidth = function(e, t) {
            return null == $.fn.textWidth.fakeEl && ($.fn.textWidth.fakeEl = $("<span>").hide().appendTo(document.body)), $.fn.textWidth.fakeEl.text(e), null != t && $.fn.textWidth.fakeEl.css("font", t.css("font")), $.fn.textWidth.fakeEl.width()
        }, String.prototype.escapeHTML = function() {
            var e;
            return e = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;"
            }, this.replace(/[&<>]/g, function(t) {
                return e[t] || t
            })
        }, "undefined" != typeof Handlebars && null !== Handlebars && Handlebars.registerHelper("escapeHTML", function(e) {
            return e.escapeHTML()
        }), jQuery.Event.prototype.consume = function() {
            return this.stopImmediatePropagation(), this.preventDefault(), this.handled = !0
        }
    }.call(this),
    function() {
        quanto.date = {
            is_date: function(e) {
                return "[object Date]" !== Object.prototype.toString.call(e) || isNaN(e.getTime()) ? !1 : !0
            },
            is_weekend: function() {
                return function(e) {
                    var t;
                    return t = e.getDay(), 0 === t || 6 === t
                }
            }(this),
            get_diff_info: function() {
                return function(e, t) {
                    var n, r, i;
                    return null == t && (t = new Date), i = (t.getTime() - e.getTime()) / 1e3, r = Math.floor(i / 86400), n = new Date(t.getFullYear(), t.getMonth(), t.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()), n.getTime() > t.getTime() && (r += 1), {
                        seconds_diff: i,
                        day_diff: r
                    }
                }
            }(this),
            pretty_date: function(e, t) {
                var n, r, i;
                if (null == t && (t = !1), r = this.get_diff_info(e), n = r.day_diff, i = r.seconds_diff, !(isNaN(n) || 0 > n)) {
                    if (n >= 31) return this.format_date("%b %e, %Y", e);
                    if (0 === n) {
                        if (60 > i) return "just now";
                        if (120 > i) return "1 minute ago";
                        if (3600 > i) return "" + Math.floor(i / 60) + " minutes ago";
                        if (7200 > i) return "1 hour ago";
                        if (86400 > i) return "" + Math.floor(i / 3600) + " hours ago"
                    }
                    return 1 === n ? t ? "yesterday" : "Yesterday" : 7 > n ? "" + n + " days ago" : 14 > n ? "1 week ago" : 31 > n ? "" + Math.ceil(n / 7) + " weeks ago" : void 0
                }
            },
            weekday_list: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            months_list: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            month_abbr_list: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            chat_date: function(e) {
                var t, n;
                return n = this.get_diff_info(e), t = n.day_diff, 0 === t ? this.format_date("%l:%M %p", e) : this.format_date("%b %e %l:%M %p", e)
            },
            format_date: function(e, t) {
                var n, r, i, o, s, a, u, l, c;
                if (u = function(e, t) {
                        return e = e.toString().replace(/^([0-9])$/, "0$1"), 3 === t && (e = e.toString().replace(/^([0-9]{2})$/, "0$1")), e
                    }, !t) return "invalid date";
                null !== t.toFixed && (t = new Date(t)), e || (e = "%Y-%m-%d %H:%M:%S"), o = t.getHours(), n = t.getDay(), r = t.getDate(), a = t.getMonth(), i = t.getFullYear(), l = {
                    a: quanto.date.weekday_list[n].substr(0, 3),
                    A: quanto.date.weekday_list[n],
                    d: u(r),
                    e: r,
                    b: quanto.date.month_abbr_list[a],
                    B: quanto.date.months_list[a],
                    m: u(a + 1),
                    y: i.toString().substr(2, 2),
                    Y: i,
                    H: u(o),
                    I: u(o % 12 || 12),
                    l: o % 12 || 12,
                    M: u(t.getMinutes()),
                    p: 12 > o ? "AM" : "PM",
                    P: 12 > o ? "am" : "pm",
                    S: u(t.getSeconds()),
                    L: u(t.getTime() % 1e3, 3)
                };
                for (s in l) c = l[s], e = e.replace("%" + s, c);
                return e
            },
            adjust_date_for_UTC: function(e) {
                var t;
                return t = e.getTimezoneOffset(), new Date(e.getTime() + 60 * 1e3 * t)
            },
            adjust_date_for_UTC_reverse: function(e) {
                var t;
                return t = e.getTimezoneOffset(), new Date(e.getTime() - 60 * 1e3 * t)
            },
            render_date_value: function(e) {
                var t, n, r, i, o, s, a, u, l, c;
                for (c = [], u = 0, l = e.length; l > u; u++) o = e[u], t = $(o), i = parseInt(t.attr("utcms")), a = "1" === t.data("lowercase"), s = t.data("format") || t.attr("format"), null != i && !isNaN(i) && i > 0 ? ("locale_string" === s ? r = new Date(i).toLocaleString() : "fixed" === s ? r = this.format_date("%Y-%m-%d %H:%M:%S", new Date(i)) : "fixedshort" === s ? r = this.format_date("%Y-%m-%d", new Date(i)) : "minute" === s ? r = this.format_date("%Y-%m-%d %H:%M", new Date(i)) : "noyear" === s ? r = this.format_date("%m-%d %H:%M", new Date(i)) : "contest" === s ? r = this.format_date("%B %e, %Y %l:%M %p", new Date(i)) : "chat" === s ? r = this.chat_date(new Date(i)) : (n = new Date(i), r = this.pretty_date(n, a), t.tooltip({
                    animation: !1,
                    title: this.format_date("%b %e %l:%M %p", n),
                    trigger: "hover",
                    delay: {
                        show: 500,
                        hide: 100
                    },
                    placement: "bottom"
                })), c.push(t.html(r))) : c.push(void 0);
                return c
            },
            get_backtest_min_date: function() {
                return new Date(2002, 0, 3)
            },
            get_backtest_max_date: function() {
                var e, t, n;
                return e = parseInt($("#last_end_day").val()), t = parseInt($("#last_end_month").val()), n = parseInt($("#last_end_year").val()), new Date(n, t - 1, e)
            },
            get_datepicker_daynames: function() {
                return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
            },
            render_all_date_values: function() {
                return $(".quanto-date").each(function(e) {
                    return function(t, n) {
                        return e.render_date_value($(n))
                    }
                }(this))
            },
            are_same_date: function(e, t) {
                return e.getYear() === t.getYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate()
            }
        }, $(document).ready(function() {
            return function() {
                return quanto.date.render_all_date_values()
            }
        }(this))
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.headerManager = e = function() {
            function e() {
                this.handle_resend_confirmation_message = t(this.handle_resend_confirmation_message, this), $("#resend-confirmation-email-button").click(this.handle_resend_confirmation_message), $(document).bind("username_changed", function() {
                    return function(e, t) {
                        var n, r, i;
                        return n = t.firstname, r = t.lastname, i = n, null != r && (i += " " + r), $(".username-display").html(i)
                    }
                }(this)), $(".start_guided_tour").bind("click", function(e) {
                    return quanto.tour.start_current_tour(), e.stopImmediatePropagation(), !1
                })
            }
            return e.prototype.handle_resend_confirmation_message = function() {
                var e;
                return e = quanto.user_id, null != e ? ($("#resend-confirmation-email-button").addClass("disabled").html("Sending email..."), $.post("/users/resend_confirmation", {}, function() {
                    return function(e) {
                        var t;
                        return t = new quanto.JsonResponse(e), t.ok() ? $("#resend-confirmation-email-button").parent().html("<span class='sent'><i class='icon icon-ok'></i>Successfully sent email.</span>") : void 0
                    }
                }(this))) : void 0
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.FeedbackManager = e = function() {
            function e() {
                this.show_modal = t(this.show_modal, this), this.$popup = $("#feedback-modal"), this.$email_box = $("#feedback-email-box"), this.$send_button = $("#send-feedback-button"), this.initialize_events()
            }
            return e.prototype.show = function() {
                var e;
                return e = $(".modal.in"), e.length > 0 ? (e.on("hidden.bs.modal", function(t) {
                    return function() {
                        return setTimeout(t.show_modal, 10), e.off("hidden.bs.modal")
                    }
                }(this)), e.modal("hide")) : this.show_modal()
            }, e.prototype.show_modal = function() {
                return $("#feedback-modal").modal({
                    show: !0,
                    backdrop: "static"
                })
            }, e.prototype.initialize_events = function() {
                return this.$popup.on("show show.bs.modal", function(e) {
                    return function() {
                        return e.show_popup(), e.update_send_button()
                    }
                }(this)), this.$popup.on("click", "#anonymous-feedback-checkbox", function(e) {
                    return function() {
                        return e.update_send_button()
                    }
                }(this)), this.$popup.on("change", "#feedback-email-box", function(e) {
                    return function() {
                        return e.update_send_button()
                    }
                }(this)), this.$popup.on("click", "#send-feedback-button", function(e) {
                    return function() {
                        return e.send_feedback()
                    }
                }(this))
            }, e.prototype.show_popup = function() {
                return this.$popup.find(".controls").show(), this.$popup.find(".success").hide(), $("#feedback-box").val(""), $("#feedback-name-box").val(""), this.$email_box.val(""), $("#approve-support-checkbox").prop("checked", !1), $("#anonymous-feedback-checkbox").prop("checked", !1), this.$send_button.addClass("disabled")
            }, e.prototype.update_send_button = function() {
                var e;
                return e = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, !this.$popup.find(".feedback-inputs").length > 0 ? this.$send_button.removeClass("disabled") : $("#anonymous-feedback-checkbox").attr("checked") ? this.$send_button.removeClass("disabled") : this.$email_box.val().length > 0 && e.test(this.$email_box.val()) ? this.$send_button.removeClass("disabled") : this.$send_button.addClass("disabled")
            }, e.prototype.send_feedback = function() {
                var e, t;
                return e = {
                    os: session.browser.os,
                    browser: session.browser.browser,
                    version: session.browser.version,
                    viewport_width: session.device.viewport.width,
                    viewport_height: session.device.viewport.height,
                    screen_width: session.device.screen.width,
                    screen_height: session.device.screen.height,
                    locale_country: session.locale.country,
                    locale_lang: session.locale.lang
                }, t = {
                    url: window.location.href,
                    tour_id: quanto.current_tour_id,
                    feedback_text: $("#feedback-box").val(),
                    info: e,
                    pre_approved: "checked" === this.$popup.find("#approve-support-checkbox").attr("checked")
                }, !(this.$popup.find(".feedback-inputs").length > 0) || (t.user_email = this.$email_box.val(), t.user_name = $("#feedback-name-box").val(), null == t.user_email.blank && 0 !== t.user_email.length || confirm("No email address provided! We won't be able to respond to you unless you provide an email address. Send anonymously?")) ? $.post("/feedback/submit", t, function(e) {
                    return function() {
                        return e.$popup.find(".controls").slideUp(), e.$popup.find(".success").fadeIn()
                    }
                }(this)) : void 0
            }, e
        }()
    }.call(this),
    function() {
        $.fn.old_modal = $.fn.modal, $.fn.modal = function(e, t) {
            var n;
            return $(this).old_modal(e, t), $(".content-area").hasClass("new-style") && (n = $(this).data("bs.modal"), null != n && (n.options.show || "show" === e)) ? ($("body").addClass("quanto-modal-open"), $(this).css("display", "block"), $(this).on("hide.bs.modal", function(e) {
                return function() {
                    var t;
                    return t = $("body").css("padding-right"), $("body").css("margin-right", t), $("body").css("right", t), $(e).off("hide.bs.modal")
                }
            }(this)), $(this).on("hidden.bs.modal", function(e) {
                return function() {
                    return $("body").removeClass("quanto-modal-open"), $("body").css("margin-right", ""), $("body").css("right", ""), $(e).css("display", "none"), $(e).off("hidden.bs.modal")
                }
            }(this))) : void 0
        }
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.Disable2faManagerBase = e = function() {
            function e() {
                this.updated_event_name = t(this.updated_event_name, this), this.try_disconnect = t(this.try_disconnect, this), this.show_step_2 = t(this.show_step_2, this), this.show_step_1 = t(this.show_step_1, this), this.transition_to = t(this.transition_to, this), this.$next_button = this.$modal.find(".next-button"), this.$cancel_button = this.$modal.find(".cancel-button"), this.$token_box = this.$modal.find(".token-box"), this.$error_msg = this.$modal.find(".verification-failed-message"), this.user_id = $("#current_user_id").val(), this.$modal.on("show", function(e) {
                    return function() {
                        return e.transition_to("step1"), e.$modal.find("input").val("")
                    }
                }(this)), this.$next_button.on("click", function(e) {
                    return function() {
                        switch (e.current_step) {
                            case "step1":
                                return e.try_disconnect();
                            case "step2":
                                return e.$modal.modal("hide")
                        }
                    }
                }(this)), this.$token_box.on("keydown", function(e) {
                    return function(t) {
                        return "step1" === e.current_step && 13 === t.keyCode ? (e.$next_button.trigger("click"), t.preventDefault(), t.stopPropagation(), !1) : void 0
                    }
                }(this)), $(document).on("keydown", function(e) {
                    return function(t) {
                        return 13 === t.keyCode && "step2" === e.current_step && e.$modal.hasClass("in") ? e.$next_button.trigger("click") : void 0
                    }
                }(this))
            }
            return e.prototype.transition_to = function(e) {
                switch (this.$modal.find(".step").addClass("hidden"), this.$next_button.html("Verify").removeClass("disabled"), this.$cancel_button.removeClass("hidden"), e) {
                    case "step1":
                        return this.show_step_1();
                    case "step2":
                        return this.show_step_2(), $(document).trigger(this.updated_event_name())
                }
            }, e.prototype.show_step_1 = function() {
                return this.current_step = "step1", this.$modal.find(".step1").removeClass("hidden"), setTimeout(function(e) {
                    return function() {
                        return e.$token_box.focus()
                    }
                }(this), 20)
            }, e.prototype.show_step_2 = function() {
                return this.current_step = "step2", this.$modal.find(".step2").removeClass("hidden"), this.$next_button.html("Close"), this.$cancel_button.addClass("hidden")
            }, e.prototype.try_disconnect = function() {
                throw new Error("not implemented!")
            }, e.prototype.updated_event_name = function() {
                throw new Error("not implemented!")
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.BackupLoginCodeModalManager = e = function() {
            function e() {
                this.populate_backup_code = t(this.populate_backup_code, this), this.show_backup_code = t(this.show_backup_code, this), this.transition_to = t(this.transition_to, this), this.app_enabled = t(this.app_enabled, this), this.sms_enabled = t(this.sms_enabled, this), this.$modal = $("#backup-code-modal"), this.$next_button = this.$modal.find(".next-button"), this.$cancel_button = this.$modal.find(".cancel-button"), this.$token_box = this.$modal.find(".token-box"), this.$error_msg = this.$modal.find(".verification-failed-message"), this.$sms_button_container = this.$modal.find("#sms-button-container"), this.$send_sms_button = this.$modal.find(".send-sms-button"), this.user_id = quanto.user_id, this.$modal.on("show", function(e) {
                    return function() {
                        return e.transition_to("step1"), e.$modal.find("input").val("")
                    }
                }(this)), this.$modal.on("hide", function(e) {
                    return function() {
                        return e.$modal.find(".both-methods").addClass("hidden"), e.$modal.find(".app-only").addClass("hidden"), e.$modal.find(".phone-only").addClass("hidden"), e.$sms_button_container.addClass("hidden"), e.populate_backup_code("")
                    }
                }(this)), this.$next_button.on("click", function(e) {
                    return function() {
                        switch (e.current_step) {
                            case "step1":
                                return e.show_backup_code();
                            case "step2":
                                return e.$modal.modal("hide")
                        }
                    }
                }(this)), $(document).on("click", ".view-backup-login-code-button", function(e) {
                    return function() {
                        return e.$modal.modal("show")
                    }
                }(this)), this.$send_sms_button.on("click", function(e) {
                    return function() {
                        return e.$send_sms_button.addClass("disabled").html("Sending token..."), $.post("/users/send_sms_token", {}, function(t) {
                            var n;
                            return e.$send_sms_button.removeClass("disabled").html("Send token via SMS"), n = new quanto.JsonResponse(t), n.ok() ? void 0 : alert("Something went wrong.")
                        }).error(function() {
                            return e.$send_sms_button.removeClass("disabled").html("Send token via SMS"), alert("Something weng wrong.")
                        })
                    }
                }(this)), this.$token_box.on("keydown", function(e) {
                    return function(t) {
                        return "step1" === e.current_step && 13 === t.keyCode ? (e.$next_button.trigger("click"), t.preventDefault(), t.stopPropagation(), !1) : void 0
                    }
                }(this)), $(document).on("keydown", function(e) {
                    return function(t) {
                        return 13 === t.keyCode && e.$modal.hasClass("in") && "step2" === e.current_step ? e.$next_button.trigger("click") : void 0
                    }
                }(this))
            }
            return e.prototype.sms_enabled = function() {
                return $("#user-2fa-phone-enabled").length > 0 && "true" === $("#user-2fa-phone-enabled").val()
            }, e.prototype.app_enabled = function() {
                return $("#user-2fa-app-enabled").length > 0 && "true" === $("#user-2fa-app-enabled").val()
            }, e.prototype.transition_to = function(e) {
                switch (this.$modal.find(".step").addClass("hidden"), this.$next_button.html("Verify").removeClass("disabled"), this.$cancel_button.removeClass("hidden"), this.$error_msg.addClass("hidden"), e) {
                    case "step1":
                        if (this.current_step = "step1", this.$modal.find(".step1").removeClass("hidden"), setTimeout(function(e) {
                                return function() {
                                    return e.$token_box.focus()
                                }
                            }(this), 20), this.sms_enabled() && this.app_enabled() ? (this.$modal.find(".both-methods").removeClass("hidden"), this.$sms_button_container.removeClass("hidden")) : this.sms_enabled() ? this.$modal.find(".phone-only").removeClass("hidden") : this.$modal.find(".app-only").removeClass("hidden"), this.sms_enabled() && !this.app_enabled()) return $.post("/users/send_sms_token", {}, function() {
                            return function(e) {
                                var t;
                                return t = new quanto.JsonResponse(e), t.ok() ? void 0 : alert("Something went wrong.")
                            }
                        }(this));
                        break;
                    case "step2":
                        return this.current_step = "step2", this.$modal.find(".step2").removeClass("hidden"), this.$next_button.html("Close"), this.$cancel_button.addClass("hidden"), $("document").trigger("backup-code-viewed")
                }
            }, e.prototype.show_backup_code = function() {
                var e;
                return e = this.$token_box.val(), this.$next_button.html("Verifying...").addClass("disabled"), $.post("/users/get_backup_code", {
                    token: e
                }, function(e) {
                    return function(t) {
                        var n, r;
                        return r = new quanto.JsonResponse(t), r.ok() ? (n = r.data(), e.populate_backup_code(n), e.transition_to("step2")) : (e.$next_button.html("Verify").removeClass("disabled"), e.$error_msg.removeClass("hidden"))
                    }
                }(this)).error(function(e) {
                    return function() {
                        return e.$next_button.html("Verify").removeClass("disabled"), e.$error_msg.removeClass("hidden")
                    }
                }(this))
            }, e.prototype.populate_backup_code = function(e) {
                return $("#backup-code-container").html(e), $(document).trigger("backup-code-viewed")
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.BackupCodeSucceededManager = e = function() {
            function e() {
                this.disable_2fa = t(this.disable_2fa, this), this.view_new_code = t(this.view_new_code, this), this.$disable_2fa_button = $("#disable-2fa-button"), this.$disable_2fa_button.on("click", function(e) {
                    return function() {
                        return e.disable_2fa()
                    }
                }(this)), this.$new_code_link = $("#view-new-backup-code"), this.$new_code_link.on("click", function(e) {
                    return function() {
                        return e.view_new_code()
                    }
                }(this)), this.digest = $("#digest-field").val()
            }
            return e.prototype.view_new_code = function() {
                return $("#backup-code-modal").modal("show"), $.post("/twofactor/backup_code_viewed")
            }, e.prototype.disable_2fa = function() {
                var e;
                return this.$disable_2fa_button.addClass("disabled").html("Disabling..."), e = function() {
                    return function() {
                        return quanto.show_error_popup("Unexpected error", "There was an unexpected error disabling two-factor authentication.  Try again or contact us.")
                    }
                }(this), $.post("/twofactor/disable_2fa", {
                    digest: this.digest
                }, function(t) {
                    return function(n) {
                        var r;
                        return t.$disable_2fa_button.removeClass("disabled").html("Disable two-factor authentication"), r = new quanto.JsonResponse(n), r.ok() ? ($(".disable-2fa-container").html("Two-factor authentication disabled.  To re-enable it, view your <a href='/account'>account page</a>."), $(".new-backup-code-paragraph").addClass("hidden")) : e()
                    }
                }(this)).error(function() {
                    return function() {
                        return e()
                    }
                }(this))
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.BackupLoginManager = e = function() {
            function e() {
                this.initialize_validation_rules = t(this.initialize_validation_rules, this), this.verify_backup_code = t(this.verify_backup_code, this), this.$form = $("#backup-login-form"), this.$verify_button = $("#verify-token-button"), this.$token_box = this.$form.find("#token-box"), this.initialize_validation_rules(), quanto.on_click(this.$verify_button, function(e) {
                    return function() {
                        return e.verify_backup_code()
                    }
                }(this)), this.$token_box.on("keydown", function(e) {
                    return function(t) {
                        return 13 === t.keyCode ? (e.$verify_button.trigger("click"), t.preventDefault(), t.stopPropagation(), !1) : void 0
                    }
                }(this)), setTimeout(function(e) {
                    return function() {
                        return e.$token_box.focus()
                    }
                }(this), 20)
            }
            return e.prototype.verify_backup_code = function() {
                var e, t, n;
                return n = this.$form.validate(), this.$form.valid() ? (e = $("#token-box").val(), this.$verify_button.addClass("disabled").html("Verifying..."), t = {
                    backup_code: e
                }, $.post("/twofactor/verify_backup_login_code", t, function(e) {
                    return function(t) {
                        var r;
                        return r = new quanto.JsonResponse(t), r.redirect() ? void 0 : (n.showErrors({
                            backup_code: "Invalid backup login code"
                        }), e.$verify_button.removeClass("disabled").html("Verify"))
                    }
                }(this)).error(function(e) {
                    return function() {
                        return n.showErrors({
                            backup_code: "Invalid backup login code"
                        }), e.$verify_button.removeClass("disabled").html("Verify")
                    }
                }(this))) : (n.showErrors(), !1)
            }, e.prototype.initialize_validation_rules = function() {
                return this.validator = this.$form.validate({
                    onkeyup: !1,
                    onfocusout: !1,
                    rules: {
                        backup_code: {
                            required: !0
                        }
                    },
                    messages: {
                        backup_code: {
                            required: "Enter your backup code"
                        }
                    }
                })
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.ConfigureAuthAppManager = e = function() {
            function e() {
                this.verify_code = t(this.verify_code, this), this.transition_to = t(this.transition_to, this), this.$modal = $("#configure-google-authenticator-modal"), this.$next_button = this.$modal.find(".next-button"), this.$cancel_button = this.$modal.find(".cancel-button"), this.$verification_code_box = this.$modal.find(".google-auth-verification-code-box"), this.$error_msg = this.$modal.find(".verification-failed-message"), this.user_id = $("#current_user_id").val(), this.$modal.on("show", function(e) {
                    return function() {
                        return e.transition_to("step1"), e.$modal.find("input").val("")
                    }
                }(this)), this.$next_button.on("click", function(e) {
                    return function() {
                        switch (e.current_step) {
                            case "step1":
                                return e.verify_code();
                            case "step2":
                                return e.$modal.modal("hide")
                        }
                    }
                }(this)), $(document).on("click", "#configure-app-2fa-button", function(e) {
                    return function() {
                        return e.$modal.modal("show")
                    }
                }(this)), this.$verification_code_box.on("keydown", function(e) {
                    return function(t) {
                        return "step1" === e.current_step && 13 === t.keyCode ? (e.$next_button.trigger("click"), t.preventDefault(), t.stopPropagation(), !1) : void 0
                    }
                }(this)), $(document).on("keydown", function(e) {
                    return function(t) {
                        return 13 === t.keyCode && e.$modal.hasClass("in") && "step2" === e.current_step ? e.$next_button.trigger("click") : void 0
                    }
                }(this))
            }
            return e.prototype.transition_to = function(e) {
                switch (this.$modal.find(".step").addClass("hidden"), this.$next_button.html("Verify").removeClass("disabled"), this.$cancel_button.removeClass("hidden"), this.$error_msg.addClass("hidden"), e) {
                    case "step1":
                        return this.current_step = "step1", this.$modal.find(".step1").removeClass("hidden"), setTimeout(function(e) {
                            return function() {
                                return e.$verification_code_box.focus()
                            }
                        }(this), 20);
                    case "step2":
                        return this.current_step = "step2", this.$modal.find(".step2").removeClass("hidden"), this.$next_button.html("Close"), this.$cancel_button.addClass("hidden"), $(document).trigger("twofactor_app_updated")
                }
            }, e.prototype.verify_code = function() {
                var e;
                return e = this.$verification_code_box.val(), this.$next_button.addClass("disabled").html("Verifying..."), this.$error_msg.addClass("hidden"), $.post("/users/add_auth_app", {
                    token: e
                }, function(e) {
                    return function(t) {
                        var n;
                        return n = new quanto.JsonResponse(t), n.ok() ? e.transition_to("step2") : (e.$error_msg.removeClass("hidden"), e.$next_button.removeClass("disabled").html("Verify"))
                    }
                }(this)).error(function(e) {
                    return function() {
                        return e.$error_msg.removeClass("hidden"), e.$next_button.removeClass("disabled").html("Verify")
                    }
                }(this))
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            n = {}.hasOwnProperty,
            r = function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var i in t) n.call(t, i) && (e[i] = t[i]);
                return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
            };
        quanto.DisconnectAuthAppManager = e = function(e) {
            function n() {
                this.updated_event_name = t(this.updated_event_name, this), this.try_disconnect = t(this.try_disconnect, this), this.$modal = $("#disconnect-auth-app-modal"), $(document).on("click", "#disconnect-auth-app-button", function(e) {
                    return function() {
                        return e.$modal.modal("show")
                    }
                }(this)), n.__super__.constructor.call(this)
            }
            return r(n, e), n.prototype.try_disconnect = function() {
                var e;
                return e = this.$token_box.val(), this.$next_button.html("Verifying...").addClass("disabled"), this.$error_msg.addClass("hidden"), $.post("/users/disconnect_auth_app", {
                    token: e
                }, function(e) {
                    return function(t) {
                        var n;
                        return n = new quanto.JsonResponse(t), n.ok() ? e.transition_to("step2") : (e.$next_button.html("Verify").removeClass("disabled"), e.$error_msg.removeClass("hidden"))
                    }
                }(this)).error(function(e) {
                    return function() {
                        return e.$next_button.html("Verify").removeClass("disabled"), e.$error_msg.removeClass("hidden")
                    }
                }(this))
            }, n.prototype.updated_event_name = function() {
                return "twofactor_app_updated"
            }, n
        }(quanto.Disable2faManagerBase)
    }.call(this),
    function() {
        var e, t = function(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            },
            n = {}.hasOwnProperty,
            r = function(e, t) {
                function r() {
                    this.constructor = e
                }
                for (var i in t) n.call(t, i) && (e[i] = t[i]);
                return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
            };
        quanto.DisconnectSMSManager = e = function(e) {
            function n() {
                this.updated_event_name = t(this.updated_event_name, this), this.try_disconnect = t(this.try_disconnect, this), this.show_step_1 = t(this.show_step_1, this), this.$modal = $("#remove-phone-number-modal"), $(document).on("click", "#disconnect-sms-button", function(e) {
                    return function() {
                        return e.$modal.modal("show")
                    }
                }(this)), n.__super__.constructor.call(this, this.$modal)
            }
            return r(n, e), n.prototype.show_step_1 = function() {
                return n.__super__.show_step_1.call(this), $.post("/users/send_sms_token", {}, function() {
                    return function(e) {
                        var t;
                        return t = new quanto.JsonResponse(e), t.ok() ? void 0 : alert("Something went wrong.")
                    }
                }(this))
            }, n.prototype.try_disconnect = function() {
                var e;
                return e = this.$token_box.val(), this.$next_button.html("Verifying...").addClass("disabled"), $.post("/users/disconnect_phone_number", {
                    token: e
                }, function(e) {
                    return function(t) {
                        var n;
                        return n = new quanto.JsonResponse(t), n.ok() ? e.transition_to("step2") : (e.$next_button.html("Verify").removeClass("disabled"), e.$error_msg.removeClass("hidden"))
                    }
                }(this)).error(function(e) {
                    return function() {
                        return e.$next_button.html("Verify").removeClass("disabled"), e.$error_msg.removeClass("hidden")
                    }
                }(this))
            }, n.prototype.updated_event_name = function() {
                return "twofactor_phone_updated"
            }, n
        }(quanto.Disable2faManagerBase)
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.LoginManager = e = function() {
            function e() {
                this.initialize_validation_rules = t(this.initialize_validation_rules, this), this.$form = $("#new_user"), this.initialize_validation_rules()
            }
            return e.prototype.initialize_validation_rules = function() {
                return this.validator = this.$form.validate({
                    onkeyup: !1,
                    rules: {
                        "user[email]": {
                            required: !0,
                            email: !0
                        },
                        "user[password]": {
                            required: !0
                        }
                    },
                    messages: {
                        "user[email]": "Doesn't look like a valid email address."
                    }
                })
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.RegistrationFormManager = e = function() {
            function e(e) {
                this.display_server_errors = t(this.display_server_errors, this), this.initialize_validation_rules = t(this.initialize_validation_rules, this), this.$form = e, this.initialize_validation_rules(), this.display_server_errors(), $("#sign-up-button").bind("click", function() {
                    var t;
                    return $(".eula").removeClass("shake"), $("#eula-checkbox").is(":checked") ? ($(".error-message").addClass("hidden"), $(".javascript-alert").addClass("hidden"), $(".quanto-checkbox").removeClass("error"), t = {
                        email: $("#user_email").val()
                    }, $("#user_invitation_token").length > 0 ? (e.submit(), !1) : e.valid() ? ($.post("/users/validate_registration", t, function() {
                        return function(t) {
                            var n;
                            return n = new quanto.JsonResponse(t), n.ok() ? e.submit() : void 0
                        }
                    }(this)).error(function() {
                        return function(e) {
                            var t, n;
                            if (null != e && null != e.responseText) {
                                try {
                                    n = JSON.parse(e.responseText)
                                } catch (r) {
                                    t = r
                                }
                                if (null == n) return alert(n.data), void 0;
                                if ("email in use" === n.data) return $(".error-message").find(".message").text("That email address is already in use."), $("#user_email").closest(".form-control").addClass("error"), $(".error-message").removeClass("hidden"), void 0
                            }
                        }
                    }(this)), !1) : !1) : ($(".eula").addClass("shake").delay(500).queue(function() {
                        return $(this).removeClass("shake"), $(this).dequeue()
                    }), $(".quanto-checkbox").addClass("error"), $(".eula").find("label").addClass("error"), !1)
                })
            }
            return e.prototype.initialize_validation_rules = function() {
                return this.validator = this.$form.validate({
                    onkeyup: !1,
                    rules: {
                        "user[firstname]": {
                            required: !0,
                            minlength: 2,
                            maxlength: 20
                        },
                        "user[lastname]": {
                            required: !0
                        },
                        "user[password]": {
                            minlength: 8
                        },
                        "user[email]": {
                            required: !0,
                            email: !0
                        },
                        "user[checkbox]": {
                            required: !0
                        }
                    },
                    messages: {
                        "user[firstname]": {
                            required: "First name is required.",
                            minlength: "First name must be at least 2 characters."
                        },
                        "user[lastname]": {
                            required: "Last name is required."
                        },
                        "user[password]": "Minimum 8 characters.",
                        "user[email]": "Doesn't look like a valid email address.",
                        "user[checkbox]": "Please accept the End User License Agreement."
                    }
                })
            }, e.prototype.display_server_errors = function() {
                var e, t, n, r, i, o, s, a, u, l, c;
                for (l = $("input[type='hidden'].validation_error"), c = [], a = 0, u = l.length; u > a; a++) n = l[a], e = $(n), i = e.data("field"), s = e.val(), t = "user[" + i + "]", "can't be blank" === s && "current_password" === i ? s = "Enter your password to save these changes." : (_.str.endsWith(s, ".") || (s += "."), o = _.str.capitalize(i).replace(/_/g, " "), s = "" + _.str.capitalize(o) + " " + s), r = {}, r[t] = s, c.push(this.validator.showErrors(r));
                return c
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.TwoFactorAuthManager = e = function() {
            function e() {
                this.initialize_validation_rules = t(this.initialize_validation_rules, this), this.send_sms = t(this.send_sms, this), this.verify_token = t(this.verify_token, this), this.$form = $("#two-factor-form"), this.$verify_button = $("#verify-token-button"), this.$send_sms_button = $("#send-sms-button"), this.$token_box = this.$form.find("#token-box"), quanto.on_click(this.$verify_button, function(e) {
                    return function() {
                        return e.verify_token()
                    }
                }(this)), quanto.on_click(this.$send_sms_button, function(e) {
                    return function() {
                        return e.send_sms()
                    }
                }(this)), this.$token_box.on("keydown", function(e) {
                    return function(t) {
                        return 13 === t.keyCode ? (e.$verify_button.trigger("click"), t.preventDefault(), t.stopPropagation(), !1) : void 0
                    }
                }(this)), this.initialize_validation_rules(), setTimeout(function(e) {
                    return function() {
                        return e.$token_box.focus()
                    }
                }(this), 20)
            }
            return e.prototype.verify_token = function() {
                var e, t, n;
                return n = this.$form.validate(), this.$form.valid() ? (t = $("#token-box").val(), this.$verify_button.addClass("disabled").html("Verifying..."), e = {
                    token: t
                }, $.post("/twofactor/verify_token", e, function(e) {
                    return function(t) {
                        var r;
                        return r = new quanto.JsonResponse(t), r.redirect() ? void 0 : (n.showErrors({
                            twofactor_token: "Invalid security token"
                        }), e.$verify_button.removeClass("disabled").html("Verify"))
                    }
                }(this)).error(function(e) {
                    return function() {
                        return n.showErrors({
                            twofactor_token: "Invalid security token"
                        }), e.$verify_button.removeClass("disabled").html("Verify")
                    }
                }(this))) : (n.showErrors(), !1)
            }, e.prototype.send_sms = function() {
                return this.$send_sms_button.addClass("disabled").html("Sending token..."), $.post("/twofactor/send_sms_token", {}, function(e) {
                    return function(t) {
                        var n;
                        return n = new quanto.JsonResponse(t), e.$send_sms_button.removeClass("disabled").html("Sending token via SMS"), n.ok() ? quanto.show_message_popup("Security token sent", "We just sent you the security token via SMS.") : quanto.show_error_popup("Error sending token", "Sorry, something went wrong sending the security token. Try again or contact us at feedback@quantopian.com")
                    }
                }(this)).error(function(e) {
                    return function() {
                        return e.$send_sms_button.removeClass("disabled").html("Send token via SMS"), quanto.show_error_popup("Error sending token", "Sorry, something went wrong sending the security token. Try again or contact us at feedback@quantopian.com")
                    }
                }(this))
            }, e.prototype.initialize_validation_rules = function() {
                return this.validator = this.$form.validate({
                    onkeyup: !1,
                    onfocusout: !1,
                    rules: {
                        twofactor_token: {
                            required: !0
                        }
                    },
                    messages: {
                        twofactor_token: {
                            required: "Enter your security token"
                        }
                    }
                })
            }, e
        }()
    }.call(this),
    function() {
        var e, t = function(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        };
        quanto.VerifyPhoneNumberManager = e = function() {
            function e() {
                this.verify_code = t(this.verify_code, this), this.send_sms = t(this.send_sms, this), this.set_focus = t(this.set_focus, this), this.transition_to = t(this.transition_to, this), this.$modal = $("#verify-phone-number-modal"), this.$next_button = this.$modal.find(".next-button"), this.$cancel_button = this.$modal.find(".cancel-button"), this.$phone_number_box = this.$modal.find(".phone-number-box"), this.$verification_box = this.$modal.find(".verification-code-box"), this.$error_msg = this.$modal.find(".verification-failed-message"), this.user_id = $("#current_user_id").val(), this.$modal.on("show", function(e) {
                    return function() {
                        return e.transition_to("step1"), e.$modal.find("input").val("")
                    }
                }(this)), this.$next_button.on("click", function(e) {
                    return function() {
                        switch (e.current_step) {
                            case "step1":
                                return e.send_sms();
                            case "step2":
                                return e.verify_code();
                            case "step3":
                                return $(document).trigger("twofactor_phone_updated"), e.$modal.modal("hide")
                        }
                    }
                }(this)), $(document).on("click", "#configure-sms-2fa-button", function(e) {
                    return function() {
                        return e.$modal.modal("show")
                    }
                }(this)), this.$phone_number_box.on("keydown", function(e) {
                    return function(t) {
                        return "step1" === e.current_step && 13 === t.keyCode ? (e.$next_button.trigger("click"), t.preventDefault(), t.stopPropagation(), !1) : void 0
                    }
                }(this)), this.$verification_box.on("keydown", function(e) {
                    return function(t) {
                        return "step2" === e.current_step && 13 === t.keyCode ? (e.$next_button.trigger("click"), t.preventDefault(), t.stopPropagation(), !1) : void 0
                    }
                }(this)), $(document).on("keydown", function(e) {
                    return function(t) {
                        return 13 === t.keyCode && e.$modal.hasClass("in") && "step3" === e.current_step ? e.$next_button.trigger("click") : void 0
                    }
                }(this))
            }
            return e.prototype.transition_to = function(e) {
                switch (this.$modal.find(".step").addClass("hidden"), this.$next_button.html("Next").removeClass("disabled"), this.$cancel_button.removeClass("hidden"), this.$error_msg.addClass("hidden"), e) {
                    case "step1":
                        return this.current_step = "step1", this.$modal.find(".step1").removeClass("hidden"), this.set_focus($(".step1 input"));
                    case "step2":
                        return this.current_step = "step2", this.$modal.find(".step2").removeClass("hidden"), this.set_focus($(".step2 input")), this.$next_button.html("Verify");
                    case "step3":
                        return this.current_step = "step3", this.$modal.find(".step3").removeClass("hidden"), this.$next_button.html("Close"), this.$cancel_button.addClass("hidden")
                }
            }, e.prototype.set_focus = function(e) {
                return setTimeout(function() {
                    return function() {
                        return $(e).focus()
                    }
                }(this), 10)
            }, e.prototype.send_sms = function() {
                var e;
                return e = this.$modal.find(".phone-number-box").val(), this.$next_button.addClass("disabled").html("Verifying"), $.post("/users/add_phone_number", {
                    phone_number: e
                }, function(e) {
                    return function(t) {
                        var n;
                        return n = new quanto.JsonResponse(t), n.ok() ? e.transition_to("step2") : (e.$next_button.removeClass("disabled").html("Next"), alert("Invalid phone number, or other error."))
                    }
                }(this)).error(function(e) {
                    return function(t) {
                        var n;
                        return e.$next_button.removeClass("disabled").html("Next"), n = new quanto.JsonResponse(t), "invalid" === n.data() ? quanto.show_error_popup("Invalid phone number", "That looks like an invalid phone number.  Only US-based phone numbers can be used for now.") : quanto.show_error_popup("Unexpected error", "Sorry, we were not able to send you an SMS message.  Try again or contact us.")
                    }
                }(this))
            }, e.prototype.verify_code = function() {
                var e;
                return e = this.$modal.find(".verification-code-box").val(), this.$next_button.html("Verifying...").addClass("disabled"), this.$error_msg.addClass("hidden"), $.post("/users/verify_token_for_sms_setup", {
                    token: e
                }, function(e) {
                    return function(t) {
                        var n;
                        return n = new quanto.JsonResponse(t), n.ok() ? e.transition_to("step3") : (e.$next_button.html("Verify").removeClass("disabled"), e.$error_msg.removeClass("hidden"))
                    }
                }(this)).error(function(e) {
                    return function() {
                        return e.$next_button.html("Verify").removeClass("disabled"), e.$error_msg.removeClass("hidden")
                    }
                }(this))
            }, e
        }()
    }.call(this);