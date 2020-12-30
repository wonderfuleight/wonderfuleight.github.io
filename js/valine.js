/*!
 * Valine v1.4.14
 * (c) 2017-2020 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2020/4/26 下午8:39:08
 */
!function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Valine = t() : e.Valine = t()
}(this, function() {
    return function(e) {
        function t(r) {
            if (n[r])
                return n[r].exports;
            var o = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, t),
            o.l = !0,
            o.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.i = function(e) {
            return e
        }
        ,
        t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }
        ,
        t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return t.d(n, "a", n),
            n
        }
        ,
        t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        t.p = "",
        t(t.s = 63)
    }([function(e, t, n) {
        "use strict";
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        t.__esModule = !0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
          , i = n(38)
          , a = r(i)
          , s = n(28)
          , l = r(s)
          , c = n(27)
          , u = r(c)
          , d = n(42)
          , p = r(d)
          , f = document
          , h = navigator
          , v = /[&<>"'`\\]/g
          , g = RegExp(v.source)
          , m = /&(?:amp|lt|gt|quot|#39|#x60|#x5c);/g
          , y = RegExp(m.source)
          , b = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "`": "&#x60;",
            "\\": "&#x5c;"
        }
          , w = {};
        for (var x in b)
            w[b[x]] = x;
        var k = null;
        Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
            var n, r;
            if (null == this)
                throw new TypeError(" this is null or not defined");
            var o = Object(this)
              , i = o.length >>> 0;
            if ("function" != typeof e)
                throw new TypeError(e + " is not a function");
            for (arguments.length > 1 && (n = t),
            r = 0; r < i; ) {
                var a;
                r in o && (a = o[r],
                e.call(n, a, r, o)),
                r++
            }
        }
        ),
        window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach),
        String.prototype.trim || (String.prototype.trim = function() {
            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
        }
        ),
        (0,
        a.default)(l.default.fn, {
            prepend: function(e) {
                return e instanceof HTMLElement || (e = e[0]),
                this.forEach(function(t) {
                    t.insertAdjacentElement("afterBegin", e)
                }),
                this
            },
            append: function(e) {
                return e instanceof HTMLElement || (e = e[0]),
                this.forEach(function(t) {
                    t.insertAdjacentElement("beforeEnd", e)
                }),
                this
            },
            remove: function() {
                return this.forEach(function(e) {
                    try {
                        e.parentNode.removeChild(e)
                    } catch (e) {}
                }),
                this
            },
            find: function(e) {
                return (0,
                l.default)(e, this)
            },
            show: function() {
                return this.forEach(function(e) {
                    e.style.display = "block"
                }),
                this
            },
            hide: function() {
                return this.forEach(function(e) {
                    e.style.display = "none"
                }),
                this
            },
            on: function(e, t, n) {
                return l.default.fn.off(e, t, n),
                this.forEach(function(r) {
                    e.split(" ").forEach(function(e) {
                        r.addEventListener ? r.addEventListener(e, t, n || !1) : r.attachEvent ? r.attachEvent("on" + e, t) : r["on" + e] = t
                    })
                }),
                this
            },
            off: function(e, t, n) {
                return this.forEach(function(r) {
                    e.split(" ").forEach(function(e) {
                        r.removeEventListener ? r.removeEventListener(e, t, n || !1) : r.detachEvent ? r.detachEvent("on" + e, t) : r["on" + e] = null
                    })
                }),
                this
            },
            html: function(e) {
                return void 0 !== e ? (this.forEach(function(t) {
                    t.innerHTML = e
                }),
                this) : this[0].innerHTML
            },
            text: function(e) {
                return void 0 !== e ? (this.forEach(function(t) {
                    t.innerText = e
                }),
                this) : this[0].innerText
            },
            empty: function(e) {
                return e = e || 0,
                this.forEach(function(t) {
                    setTimeout(function(e) {
                        t.innerText = ""
                    }, e)
                }),
                this
            },
            val: function(e) {
                return void 0 !== e ? (this.forEach(function(t) {
                    t.value = e
                }),
                this) : this[0].value || ""
            },
            attr: function() {
                var e = arguments;
                if ("object" == o(arguments[0])) {
                    var t = arguments[0]
                      , n = this;
                    return Object.keys(t).forEach(function(e) {
                        n.forEach(function(n) {
                            n.setAttribute(e, t[e])
                        })
                    }),
                    this
                }
                return "string" == typeof arguments[0] && arguments.length < 2 ? this[0].getAttribute(arguments[0]) || "" : (this.forEach(function(t) {
                    t.setAttribute(e[0], e[1])
                }),
                this)
            },
            removeAttr: function(e) {
                return this.forEach(function(t) {
                    var n, r = 0, o = e && e.match(/[^\x20\t\r\n\f\*\/\\]+/g);
                    if (o && 1 === t.nodeType)
                        for (; n = o[r++]; )
                            t.removeAttribute(n)
                }),
                this
            },
            hasClass: function(e) {
                return !!this[0] && new RegExp("(\\s|^)" + e + "(\\s|$)").test(this[0].getAttribute("class"))
            },
            addClass: function(e) {
                return this.forEach(function(t) {
                    var n = (0,
                    l.default)(t)
                      , r = n.attr("class");
                    n.hasClass(e) || n.attr("class", r += " " + e)
                }),
                this
            },
            removeClass: function(e) {
                return this.forEach(function(t) {
                    var n = (0,
                    l.default)(t)
                      , r = n.attr("class");
                    if (n.hasClass(e)) {
                        var o = new RegExp("(\\s|^)" + e + "(\\s|$)");
                        n.attr("class", r.replace(o, ""))
                    }
                }),
                this
            }
        }),
        (0,
        a.default)(l.default, {
            extend: a.default,
            noop: function() {},
            navi: h,
            ua: h.userAgent,
            lang: h.language || h.languages[0],
            detect: u.default,
            store: p.default,
            escape: function(e) {
                return e && g.test(e) ? e.replace(v, function(e) {
                    return b[e]
                }) : e
            },
            unescape: function(e) {
                return e && y.test(e) ? e.replace(m, function(e) {
                    return w[e]
                }) : e
            },
            dynamicLoadSource: function(e, t) {
                if ((0,
                l.default)('script[src="' + e + '"]').length)
                    t && t();
                else {
                    var n = f.createElement("script");
                    n.onload = n.onreadystatechange = function() {
                        var e = this;
                        e.onload = e.onreadystatechange = null,
                        t && t(),
                        (0,
                        l.default)(n).remove()
                    }
                    ,
                    n.async = !0,
                    n.setAttribute("referrerPolicy", "no-referrer");
                    (0,
                    l.default)("head")[0].appendChild(n),
                    n.src = e
                }
            },
            sdkLoader: function(e, t, n) {
                t in window && window[t] ? (k && clearTimeout(k),
                n && n()) : l.default.dynamicLoadSource(e, function() {
                    k = setTimeout(l.default.sdkLoader(e, t, n), 100)
                })
            },
            deleteInWin: function(e, t) {
                var n = function(t) {
                    if (e in window)
                        try {
                            delete window[e]
                        } catch (t) {
                            window[e] = null
                        }
                };
                0 === t ? n() : setTimeout(n, t || 500)
            },
            ajax: function(e) {
                e = e || {},
                e.type = (e.type || "GET").toUpperCase(),
                e.dataType = e.dataType || "json",
                e.async = e.async || !0,
                e.timeout = e.timeout || 8e3;
                var t = "[object FormData]" == {}.toString.call(e.data) ? e.data : function(e) {
                    var t = [];
                    for (var n in e)
                        t.push(encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
                    return t.push("t=" + Date.now()),
                    t.join("&")
                }(e.data)
                  , n = null
                  , r = "XMLHttpRequest"in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                r.onreadystatechange = function(t) {
                    if (4 == r.readyState) {
                        clearTimeout(n);
                        var o = r.status;
                        o >= 200 && o < 300 ? e.success && e.success(JSON.parse(r.responseText)) : e.fail && e.fail(o)
                    }
                }
                ,
                "GET" == e.type ? (r.open("GET", e.url + "?" + t, e.async),
                r.send(null)) : "POST" == e.type && (r.open("POST", e.url, e.async),
                void 0 == e.contentType || null == e.contentType ? r.send(t) : (r.setRequestHeader("Content-Type", e.contentType),
                r.send(JSON.stringify(e.data)))),
                n = setTimeout(function(e) {
                    clearTimeout(n),
                    r.abort()
                }, e.timeout)
            }
        }),
        t.default = l.default
    }
    , function(e, t, n) {
        "use strict";
        var r = TypeError
          , o = Object.getOwnPropertyDescriptor;
        if (o)
            try {
                o({}, "")
            } catch (e) {
                o = null
            }
        var i, a, s = function() {
            throw new r
        }, l = o ? function() {
            try {
                return arguments.callee,
                s
            } catch (e) {
                try {
                    return o(arguments, "callee").get
                } catch (e) {
                    return s
                }
            }
        }() : s, c = n(47)(), u = Object.getPrototypeOf || function(e) {
            return e.__proto__
        }
        , d = i ? u(i) : void 0, p = a ? u(a) : void 0, f = a ? a() : void 0, h = "undefined" == typeof Uint8Array ? void 0 : u(Uint8Array), v = {
            "%Array%": Array,
            "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer,
            "%ArrayBufferPrototype%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer.prototype,
            "%ArrayIteratorPrototype%": c ? u([][Symbol.iterator]()) : void 0,
            "%ArrayPrototype%": Array.prototype,
            "%ArrayProto_entries%": Array.prototype.entries,
            "%ArrayProto_forEach%": Array.prototype.forEach,
            "%ArrayProto_keys%": Array.prototype.keys,
            "%ArrayProto_values%": Array.prototype.values,
            "%AsyncFromSyncIteratorPrototype%": void 0,
            "%AsyncFunction%": void 0,
            "%AsyncFunctionPrototype%": void 0,
            "%AsyncGenerator%": a ? u(f) : void 0,
            "%AsyncGeneratorFunction%": p,
            "%AsyncGeneratorPrototype%": p ? p.prototype : void 0,
            "%AsyncIteratorPrototype%": f && c && Symbol.asyncIterator ? f[Symbol.asyncIterator]() : void 0,
            "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics,
            "%Boolean%": Boolean,
            "%BooleanPrototype%": Boolean.prototype,
            "%DataView%": "undefined" == typeof DataView ? void 0 : DataView,
            "%DataViewPrototype%": "undefined" == typeof DataView ? void 0 : DataView.prototype,
            "%Date%": Date,
            "%DatePrototype%": Date.prototype,
            "%decodeURI%": decodeURI,
            "%decodeURIComponent%": decodeURIComponent,
            "%encodeURI%": encodeURI,
            "%encodeURIComponent%": encodeURIComponent,
            "%Error%": Error,
            "%ErrorPrototype%": Error.prototype,
            "%eval%": eval,
            "%EvalError%": EvalError,
            "%EvalErrorPrototype%": EvalError.prototype,
            "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array,
            "%Float32ArrayPrototype%": "undefined" == typeof Float32Array ? void 0 : Float32Array.prototype,
            "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array,
            "%Float64ArrayPrototype%": "undefined" == typeof Float64Array ? void 0 : Float64Array.prototype,
            "%Function%": Function,
            "%FunctionPrototype%": Function.prototype,
            "%Generator%": i ? u(i()) : void 0,
            "%GeneratorFunction%": d,
            "%GeneratorPrototype%": d ? d.prototype : void 0,
            "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array,
            "%Int8ArrayPrototype%": "undefined" == typeof Int8Array ? void 0 : Int8Array.prototype,
            "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array,
            "%Int16ArrayPrototype%": "undefined" == typeof Int16Array ? void 0 : Int8Array.prototype,
            "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array,
            "%Int32ArrayPrototype%": "undefined" == typeof Int32Array ? void 0 : Int32Array.prototype,
            "%isFinite%": isFinite,
            "%isNaN%": isNaN,
            "%IteratorPrototype%": c ? u(u([][Symbol.iterator]())) : void 0,
            "%JSON%": "object" == typeof JSON ? JSON : void 0,
            "%JSONParse%": "object" == typeof JSON ? JSON.parse : void 0,
            "%Map%": "undefined" == typeof Map ? void 0 : Map,
            "%MapIteratorPrototype%": "undefined" != typeof Map && c ? u((new Map)[Symbol.iterator]()) : void 0,
            "%MapPrototype%": "undefined" == typeof Map ? void 0 : Map.prototype,
            "%Math%": Math,
            "%Number%": Number,
            "%NumberPrototype%": Number.prototype,
            "%Object%": Object,
            "%ObjectPrototype%": Object.prototype,
            "%ObjProto_toString%": Object.prototype.toString,
            "%ObjProto_valueOf%": Object.prototype.valueOf,
            "%parseFloat%": parseFloat,
            "%parseInt%": parseInt,
            "%Promise%": "undefined" == typeof Promise ? void 0 : Promise,
            "%PromisePrototype%": "undefined" == typeof Promise ? void 0 : Promise.prototype,
            "%PromiseProto_then%": "undefined" == typeof Promise ? void 0 : Promise.prototype.then,
            "%Promise_all%": "undefined" == typeof Promise ? void 0 : Promise.all,
            "%Promise_reject%": "undefined" == typeof Promise ? void 0 : Promise.reject,
            "%Promise_resolve%": "undefined" == typeof Promise ? void 0 : Promise.resolve,
            "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy,
            "%RangeError%": RangeError,
            "%RangeErrorPrototype%": RangeError.prototype,
            "%ReferenceError%": ReferenceError,
            "%ReferenceErrorPrototype%": ReferenceError.prototype,
            "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect,
            "%RegExp%": RegExp,
            "%RegExpPrototype%": RegExp.prototype,
            "%Set%": "undefined" == typeof Set ? void 0 : Set,
            "%SetIteratorPrototype%": "undefined" != typeof Set && c ? u((new Set)[Symbol.iterator]()) : void 0,
            "%SetPrototype%": "undefined" == typeof Set ? void 0 : Set.prototype,
            "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer,
            "%SharedArrayBufferPrototype%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer.prototype,
            "%String%": String,
            "%StringIteratorPrototype%": c ? u(""[Symbol.iterator]()) : void 0,
            "%StringPrototype%": String.prototype,
            "%Symbol%": c ? Symbol : void 0,
            "%SymbolPrototype%": c ? Symbol.prototype : void 0,
            "%SyntaxError%": SyntaxError,
            "%SyntaxErrorPrototype%": SyntaxError.prototype,
            "%ThrowTypeError%": l,
            "%TypedArray%": h,
            "%TypedArrayPrototype%": h ? h.prototype : void 0,
            "%TypeError%": r,
            "%TypeErrorPrototype%": r.prototype,
            "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array,
            "%Uint8ArrayPrototype%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array.prototype,
            "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray,
            "%Uint8ClampedArrayPrototype%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray.prototype,
            "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array,
            "%Uint16ArrayPrototype%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array.prototype,
            "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array,
            "%Uint32ArrayPrototype%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array.prototype,
            "%URIError%": URIError,
            "%URIErrorPrototype%": URIError.prototype,
            "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap,
            "%WeakMapPrototype%": "undefined" == typeof WeakMap ? void 0 : WeakMap.prototype,
            "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet,
            "%WeakSetPrototype%": "undefined" == typeof WeakSet ? void 0 : WeakSet.prototype
        }, g = n(4), m = g.call(Function.call, String.prototype.replace), y = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, b = /\\(\\)?/g, w = function(e) {
            var t = [];
            return m(e, y, function(e, n, r, o) {
                t[t.length] = r ? m(o, b, "$1") : n || e
            }),
            t
        }, x = function(e, t) {
            if (!(e in v))
                throw new SyntaxError("intrinsic " + e + " does not exist!");
            if (void 0 === v[e] && !t)
                throw new r("intrinsic " + e + " exists, but is not available. Please file an issue!");
            return v[e]
        };
        e.exports = function(e, t) {
            if ("string" != typeof e || 0 === e.length)
                throw new TypeError("intrinsic name must be a non-empty string");
            if (arguments.length > 1 && "boolean" != typeof t)
                throw new TypeError('"allowMissing" argument must be a boolean');
            for (var n = w(e), i = x("%" + (n.length > 0 ? n[0] : "") + "%", t), a = 1; a < n.length; a += 1)
                if (null != i)
                    if (o && a + 1 >= n.length) {
                        var s = o(i, n[a]);
                        if (!(t || n[a]in i))
                            throw new r("base intrinsic for " + e + " exists, but the property is not available.");
                        i = s ? s.get || s.value : i[n[a]]
                    } else
                        i = i[n[a]];
            return i
        }
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        t.DEFAULT_EMOJI_CDN = "//img.t.sinajs.cn/t4/appstyle/expression/ext/normal/",
        t.DB_NAME = "Comment",
        t.defaultConfig = {
            lang: "zh-CN",
            langMode: null,
            appId: "",
            appKey: "",
            clazzName: "Comment",
            meta: ["nick", "mail", "link"],
            path: location.pathname,
            placeholder: "Just Go Go",
            pageSize: 10,
            recordIP: !0,
            serverURLs: "",
            visitor: !1,
            emojiCDN: "",
            emojiMaps: void 0,
            enableQQ: !1,
            requiredFields: []
        },
        t.defaultMeta = ["nick", "mail", "link"],
        t.QQCacheKey = "_v_Cache_Q",
        t.MetaCacheKey = "_v_Cache_Meta",
        t.RandomStr = (Date.now() + Math.round(1e3 * Math.random())).toString(32),
        t.VERSION = "1.4.14"
    }
    , function(e, t, n) {
        function r(e, t) {
            return new i(t).process(e)
        }
        var o = n(7)
          , i = n(29);
        t = e.exports = r,
        t.FilterCSS = i;
        for (var a in o)
            t[a] = o[a];
        "undefined" != typeof window && (window.filterCSS = e.exports)
    }
    , function(e, t, n) {
        "use strict";
        var r = n(32);
        e.exports = Function.prototype.bind || r
    }
    , function(e, t) {
        e.exports = {
            indexOf: function(e, t) {
                var n, r;
                if (Array.prototype.indexOf)
                    return e.indexOf(t);
                for (n = 0,
                r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            },
            forEach: function(e, t, n) {
                var r, o;
                if (Array.prototype.forEach)
                    return e.forEach(t, n);
                for (r = 0,
                o = e.length; r < o; r++)
                    t.call(n, e[r], r, e)
            },
            trim: function(e) {
                return String.prototype.trim ? e.trim() : e.replace(/(^\s*)|(\s*$)/g, "")
            },
            spaceIndex: function(e) {
                var t = /\s|\n|\t/
                  , n = t.exec(e);
                return n ? n.index : -1
            }
        }
    }
    , function(e, t, n) {
        "use strict";
        t.__esModule = !0;
        var r = n(2)
          , o = {
            cdn: r.DEFAULT_EMOJI_CDN,
            maps: n(53),
            parse: function(e) {
                return String(e).replace(new RegExp(":(" + Object.keys(o.maps).join("|") + "):","ig"), function(e, t) {
                    return o.maps[t] ? o.build(t) : e
                })
            },
            build: function(e) {
                var t = /^(https?:)?\/\//i
                  , n = o.maps[e]
                  , r = t.test(n) ? n : o.cdn + n;
                return t.test(r) ? '<img alt="' + e + '" referrerPolicy="no-referrer" class="vemoji" src="' + r + '" />' : ""
            }
        };
        t.default = o
    }
    , function(e, t) {
        function n() {
            var e = {};
            return e["align-content"] = !1,
            e["align-items"] = !1,
            e["align-self"] = !1,
            e["alignment-adjust"] = !1,
            e["alignment-baseline"] = !1,
            e.all = !1,
            e["anchor-point"] = !1,
            e.animation = !1,
            e["animation-delay"] = !1,
            e["animation-direction"] = !1,
            e["animation-duration"] = !1,
            e["animation-fill-mode"] = !1,
            e["animation-iteration-count"] = !1,
            e["animation-name"] = !1,
            e["animation-play-state"] = !1,
            e["animation-timing-function"] = !1,
            e.azimuth = !1,
            e["backface-visibility"] = !1,
            e.background = !0,
            e["background-attachment"] = !0,
            e["background-clip"] = !0,
            e["background-color"] = !0,
            e["background-image"] = !0,
            e["background-origin"] = !0,
            e["background-position"] = !0,
            e["background-repeat"] = !0,
            e["background-size"] = !0,
            e["baseline-shift"] = !1,
            e.binding = !1,
            e.bleed = !1,
            e["bookmark-label"] = !1,
            e["bookmark-level"] = !1,
            e["bookmark-state"] = !1,
            e.border = !0,
            e["border-bottom"] = !0,
            e["border-bottom-color"] = !0,
            e["border-bottom-left-radius"] = !0,
            e["border-bottom-right-radius"] = !0,
            e["border-bottom-style"] = !0,
            e["border-bottom-width"] = !0,
            e["border-collapse"] = !0,
            e["border-color"] = !0,
            e["border-image"] = !0,
            e["border-image-outset"] = !0,
            e["border-image-repeat"] = !0,
            e["border-image-slice"] = !0,
            e["border-image-source"] = !0,
            e["border-image-width"] = !0,
            e["border-left"] = !0,
            e["border-left-color"] = !0,
            e["border-left-style"] = !0,
            e["border-left-width"] = !0,
            e["border-radius"] = !0,
            e["border-right"] = !0,
            e["border-right-color"] = !0,
            e["border-right-style"] = !0,
            e["border-right-width"] = !0,
            e["border-spacing"] = !0,
            e["border-style"] = !0,
            e["border-top"] = !0,
            e["border-top-color"] = !0,
            e["border-top-left-radius"] = !0,
            e["border-top-right-radius"] = !0,
            e["border-top-style"] = !0,
            e["border-top-width"] = !0,
            e["border-width"] = !0,
            e.bottom = !1,
            e["box-decoration-break"] = !0,
            e["box-shadow"] = !0,
            e["box-sizing"] = !0,
            e["box-snap"] = !0,
            e["box-suppress"] = !0,
            e["break-after"] = !0,
            e["break-before"] = !0,
            e["break-inside"] = !0,
            e["caption-side"] = !1,
            e.chains = !1,
            e.clear = !0,
            e.clip = !1,
            e["clip-path"] = !1,
            e["clip-rule"] = !1,
            e.color = !0,
            e["color-interpolation-filters"] = !0,
            e["column-count"] = !1,
            e["column-fill"] = !1,
            e["column-gap"] = !1,
            e["column-rule"] = !1,
            e["column-rule-color"] = !1,
            e["column-rule-style"] = !1,
            e["column-rule-width"] = !1,
            e["column-span"] = !1,
            e["column-width"] = !1,
            e.columns = !1,
            e.contain = !1,
            e.content = !1,
            e["counter-increment"] = !1,
            e["counter-reset"] = !1,
            e["counter-set"] = !1,
            e.crop = !1,
            e.cue = !1,
            e["cue-after"] = !1,
            e["cue-before"] = !1,
            e.cursor = !1,
            e.direction = !1,
            e.display = !0,
            e["display-inside"] = !0,
            e["display-list"] = !0,
            e["display-outside"] = !0,
            e["dominant-baseline"] = !1,
            e.elevation = !1,
            e["empty-cells"] = !1,
            e.filter = !1,
            e.flex = !1,
            e["flex-basis"] = !1,
            e["flex-direction"] = !1,
            e["flex-flow"] = !1,
            e["flex-grow"] = !1,
            e["flex-shrink"] = !1,
            e["flex-wrap"] = !1,
            e.float = !1,
            e["float-offset"] = !1,
            e["flood-color"] = !1,
            e["flood-opacity"] = !1,
            e["flow-from"] = !1,
            e["flow-into"] = !1,
            e.font = !0,
            e["font-family"] = !0,
            e["font-feature-settings"] = !0,
            e["font-kerning"] = !0,
            e["font-language-override"] = !0,
            e["font-size"] = !0,
            e["font-size-adjust"] = !0,
            e["font-stretch"] = !0,
            e["font-style"] = !0,
            e["font-synthesis"] = !0,
            e["font-variant"] = !0,
            e["font-variant-alternates"] = !0,
            e["font-variant-caps"] = !0,
            e["font-variant-east-asian"] = !0,
            e["font-variant-ligatures"] = !0,
            e["font-variant-numeric"] = !0,
            e["font-variant-position"] = !0,
            e["font-weight"] = !0,
            e.grid = !1,
            e["grid-area"] = !1,
            e["grid-auto-columns"] = !1,
            e["grid-auto-flow"] = !1,
            e["grid-auto-rows"] = !1,
            e["grid-column"] = !1,
            e["grid-column-end"] = !1,
            e["grid-column-start"] = !1,
            e["grid-row"] = !1,
            e["grid-row-end"] = !1,
            e["grid-row-start"] = !1,
            e["grid-template"] = !1,
            e["grid-template-areas"] = !1,
            e["grid-template-columns"] = !1,
            e["grid-template-rows"] = !1,
            e["hanging-punctuation"] = !1,
            e.height = !0,
            e.hyphens = !1,
            e.icon = !1,
            e["image-orientation"] = !1,
            e["image-resolution"] = !1,
            e["ime-mode"] = !1,
            e["initial-letters"] = !1,
            e["inline-box-align"] = !1,
            e["justify-content"] = !1,
            e["justify-items"] = !1,
            e["justify-self"] = !1,
            e.left = !1,
            e["letter-spacing"] = !0,
            e["lighting-color"] = !0,
            e["line-box-contain"] = !1,
            e["line-break"] = !1,
            e["line-grid"] = !1,
            e["line-height"] = !1,
            e["line-snap"] = !1,
            e["line-stacking"] = !1,
            e["line-stacking-ruby"] = !1,
            e["line-stacking-shift"] = !1,
            e["line-stacking-strategy"] = !1,
            e["list-style"] = !0,
            e["list-style-image"] = !0,
            e["list-style-position"] = !0,
            e["list-style-type"] = !0,
            e.margin = !0,
            e["margin-bottom"] = !0,
            e["margin-left"] = !0,
            e["margin-right"] = !0,
            e["margin-top"] = !0,
            e["marker-offset"] = !1,
            e["marker-side"] = !1,
            e.marks = !1,
            e.mask = !1,
            e["mask-box"] = !1,
            e["mask-box-outset"] = !1,
            e["mask-box-repeat"] = !1,
            e["mask-box-slice"] = !1,
            e["mask-box-source"] = !1,
            e["mask-box-width"] = !1,
            e["mask-clip"] = !1,
            e["mask-image"] = !1,
            e["mask-origin"] = !1,
            e["mask-position"] = !1,
            e["mask-repeat"] = !1,
            e["mask-size"] = !1,
            e["mask-source-type"] = !