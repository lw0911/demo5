/*! jQuery v1.3.2 jquery.com | jquery.org/license */
(function () {
    var ae = this, M, I = ae.jQuery, Z = ae.$, aa = ae.jQuery = ae.$ = function (b, a) {
        return new aa.fn.init(b, a);
    }, T = /^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/, O = /^.[^:#\[\.,]*$/;
    aa.fn = aa.prototype = {
        init: function (c, e) {
            c = c || document;
            if (c.nodeType) {
                this[0] = c;
                this.length = 1;
                this.context = c;
                return this;
            }
            if (typeof c === "string") {
                var a = T.exec(c);
                if (a && (a[1] || !e)) {
                    if (a[1]) {
                        c = aa.clean([a[1]], e);
                    } else {
                        var d = document.getElementById(a[3]);
                        if (d && d.id != a[3]) {
                            return aa().find(c);
                        }
                        var b = aa(d || []);
                        b.context = document;
                        b.selector = c;
                        return b;
                    }
                } else {
                    return aa(e).find(c);
                }
            } else {
                if (aa.isFunction(c)) {
                    return aa(document).ready(c);
                }
            }
            if (c.selector && c.context) {
                this.selector = c.selector;
                this.context = c.context;
            }
            return this.setArray(aa.isArray(c) ? c : aa.makeArray(c));
        },
        selector: "",
        jquery: "1.3.2",
        size: function () {
            return this.length;
        },
        get: function (a) {
            return a === M ? Array.prototype.slice.call(this) : this[a];
        },
        pushStack: function (a, c, b) {
            var d = aa(a);
            d.prevObject = this;
            d.context = this.context;
            if (c === "find") {
                d.selector = this.selector + (this.selector ? " " : "") + b;
            } else {
                if (c) {
                    d.selector = this.selector + "." + c + "(" + b + ")";
                }
            }
            return d;
        },
        setArray: function (a) {
            this.length = 0;
            Array.prototype.push.apply(this, a);
            return this;
        },
        each: function (a, b) {
            return aa.each(this, a, b);
        },
        index: function (a) {
            return aa.inArray(a && a.jquery ? a[0] : a, this);
        },
        attr: function (a, c, d) {
            var b = a;
            if (typeof a === "string") {
                if (c === M) {
                    return this[0] && aa[d || "attr"](this[0], a);
                } else {
                    b = {};
                    b[a] = c;
                }
            }
            return this.each(function (e) {
                for (a in b) {
                    aa.attr(d ? this.style : this, a, aa.prop(this, b[a], d, e, a));
                }
            });
        },
        css: function (b, a) {
            if ((b == "width" || b == "height") && parseFloat(a) < 0) {
                a = M;
            }
            return this.attr(b, a, "curCSS");
        },
        text: function (a) {
            if (typeof a !== "object" && a != null) {
                return this.empty().append((this[0] && this[0].ownerDocument || document).createTextNode(a));
            }
            var b = "";
            aa.each(a || this, function () {
                aa.each(this.childNodes, function () {
                    if (this.nodeType != 8) {
                        b += this.nodeType != 1 ? this.nodeValue : aa.fn.text([this]);
                    }
                });
            });
            return b;
        },
        wrapAll: function (b) {
            if (this[0]) {
                var a = aa(b, this[0].ownerDocument).clone();
                if (this[0].parentNode) {
                    a.insertBefore(this[0]);
                }
                a.map(function () {
                    var c = this;
                    while (c.firstChild) {
                        c = c.firstChild;
                    }
                    return c;
                }).append(this);
            }
            return this;
        },
        wrapInner: function (a) {
            return this.each(function () {
                aa(this).contents().wrapAll(a);
            });
        },
        wrap: function (a) {
            return this.each(function () {
                aa(this).wrapAll(a);
            });
        },
        append: function () {
            return this.domManip(arguments, true, function (a) {
                if (this.nodeType == 1) {
                    this.appendChild(a);
                }
            });
        },
        prepend: function () {
            return this.domManip(arguments, true, function (a) {
                if (this.nodeType == 1) {
                    this.insertBefore(a, this.firstChild);
                }
            });
        },
        before: function () {
            return this.domManip(arguments, false, function (a) {
                this.parentNode.insertBefore(a, this);
            });
        },
        after: function () {
            return this.domManip(arguments, false, function (a) {
                this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        end: function () {
            return this.prevObject || aa([]);
        },
        push: [].push,
        sort: [].sort,
        splice: [].splice,
        find: function (b) {
            if (this.length === 1) {
                var a = this.pushStack([], "find", b);
                a.length = 0;
                aa.find(b, this[0], a);
                return a;
            } else {
                return this.pushStack(aa.unique(aa.map(this, function (c) {
                    return aa.find(b, c);
                })), "find", b);
            }
        },
        clone: function (d) {
            var b = this.map(function () {
                if (!aa.support.noCloneEvent && !aa.isXMLDoc(this)) {
                    var f = this.outerHTML;
                    if (!f) {
                        var e = this.ownerDocument.createElement("div");
                        e.appendChild(this.cloneNode(true));
                        f = e.innerHTML;
                    }
                    return aa.clean([f.replace(/ jQuery\d+="(?:\d+|null)"/g, "").replace(/^\s*/, "")])[0];
                } else {
                    return this.cloneNode(true);
                }
            });
            if (d === true) {
                var c = this.find("*").andSelf(), a = 0;
                b.find("*").andSelf().each(function () {
                    if (this.nodeName !== c[a].nodeName) {
                        return;
                    }
                    var g = aa.data(c[a], "events");
                    for (var e in g) {
                        for (var f in g[e]) {
                            aa.event.add(this, e, g[e][f], g[e][f].data);
                        }
                    }
                    a++;
                });
            }
            return b;
        },
        filter: function (a) {
            return this.pushStack(aa.isFunction(a) && aa.grep(this, function (c, b) {
                return a.call(c, b);
            }) || aa.multiFilter(a, aa.grep(this, function (b) {
                return b.nodeType === 1;
            })), "filter", a);
        },
        closest: function (a) {
            var b = aa.expr.match.POS.test(a) ? aa(a) : null, c = 0;
            return this.map(function () {
                var d = this;
                while (d && d.ownerDocument) {
                    if (b ? b.index(d) > -1 : aa(d).is(a)) {
                        aa.data(d, "closest", c);
                        return d;
                    }
                    d = d.parentNode;
                    c++;
                }
            });
        },
        not: function (b) {
            if (typeof b === "string") {
                if (O.test(b)) {
                    return this.pushStack(aa.multiFilter(b, this, true), "not", b);
                } else {
                    b = aa.multiFilter(b, this);
                }
            }
            var a = b.length && b[b.length - 1] !== M && !b.nodeType;
            return this.filter(function () {
                return a ? aa.inArray(this, b) < 0 : this != b;
            });
        },
        add: function (a) {
            return this.pushStack(aa.unique(aa.merge(this.get(), typeof a === "string" ? aa(a) : aa.makeArray(a))));
        },
        is: function (a) {
            return !!a && aa.multiFilter(a, this).length > 0;
        },
        hasClass: function (a) {
            return !!a && this.is("." + a);
        },
        val: function (c) {
            if (c === M) {
                var j = this[0];
                if (j) {
                    if (aa.nodeName(j, "option")) {
                        return (j.attributes.value || {}).specified ? j.value : j.text;
                    }
                    if (aa.nodeName(j, "select")) {
                        var e = j.selectedIndex, b = [], a = j.options, f = j.type == "select-one";
                        if (e < 0) {
                            return null;
                        }
                        for (var h = f ? e : 0, d = f ? e + 1 : a.length; h < d; h++) {
                            var g = a[h];
                            if (g.selected) {
                                c = aa(g).val();
                                if (f) {
                                    return c;
                                }
                                b.push(c);
                            }
                        }
                        return b;
                    }
                    return (j.value || "").replace(/\r/g, "");
                }
                return M;
            }
            if (typeof c === "number") {
                c += "";
            }
            return this.each(function () {
                if (this.nodeType != 1) {
                    return;
                }
                if (aa.isArray(c) && /radio|checkbox/.test(this.type)) {
                    this.checked = aa.inArray(this.value, c) >= 0 || aa.inArray(this.name, c) >= 0;
                } else {
                    if (aa.nodeName(this, "select")) {
                        var k = aa.makeArray(c);
                        aa("option", this).each(function () {
                            this.selected = aa.inArray(this.value, k) >= 0 || aa.inArray(this.text, k) >= 0;
                        });
                        if (!k.length) {
                            this.selectedIndex = -1;
                        }
                    } else {
                        this.value = c;
                    }
                }
            });
        },
        html: function (a) {
            return a === M ? this[0] ? this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g, "") : null : this.empty().append(a);
        },
        replaceWith: function (a) {
            return this.after(a).remove();
        },
        eq: function (a) {
            return this.slice(a, +a + 1);
        },
        slice: function () {
            return this.pushStack(Array.prototype.slice.apply(this, arguments), "slice", Array.prototype.slice.call(arguments).join(","));
        },
        map: function (a) {
            return this.pushStack(aa.map(this, function (c, b) {
                return a.call(c, b, c);
            }));
        },
        andSelf: function () {
            return this.add(this.prevObject);
        },
        domManip: function (d, a, b) {
            if (this[0]) {
                var e = (this[0].ownerDocument || this[0]).createDocumentFragment(), h = aa.clean(d, this[0].ownerDocument || this[0], e), f = e.firstChild;
                if (f) {
                    for (var g = 0, j = this.length; g < j; g++) {
                        b.call(c(this[g], f), this.length > 1 || g > 0 ? e.cloneNode(true) : e);
                    }
                }
                if (h) {
                    aa.each(h, H);
                }
            }
            return this;
            function c(l, k) {
                return a && aa.nodeName(l, "table") && aa.nodeName(k, "tr") ? l.getElementsByTagName("tbody")[0] || l.appendChild(l.ownerDocument.createElement("tbody")) : l;
            }
        }
    };
    aa.fn.init.prototype = aa.fn;
    function H(b, a) {
        if (a.src) {
            aa.ajax({
                url: a.src,
                async: false,
                dataType: "script"
            });
        } else {
            aa.globalEval(a.text || a.textContent || a.innerHTML || "");
        }
        if (a.parentNode) {
            a.parentNode.removeChild(a);
        }
    }
    function Q() {
        return +new Date();
    }
    aa.extend = aa.fn.extend = function () {
        var a = arguments[0] || {}, c = 1, b = arguments.length, f = false, d;
        if (typeof a === "boolean") {
            f = a;
            a = arguments[1] || {};
            c = 2;
        }
        if (typeof a !== "object" && !aa.isFunction(a)) {
            a = {};
        }
        if (b == c) {
            a = this;
            --c;
        }
        for (; c < b; c++) {
            if ((d = arguments[c]) != null) {
                for (var e in d) {
                    var h = a[e], g = d[e];
                    if (a === g) {
                        continue;
                    }
                    if (f && g && typeof g === "object" && !g.nodeType) {
                        a[e] = aa.extend(f, h || (g.length != null ? [] : {}), g);
                    } else {
                        if (g !== M) {
                            a[e] = g;
                        }
                    }
                }
            }
        }
        return a;
    };
    var F = /z-?index|font-?weight|opacity|zoom|line-?height/i, X = document.defaultView || {}, S = Object.prototype.toString;
    aa.extend({
        noConflict: function (a) {
            ae.$ = Z;
            if (a) {
                ae.jQuery = I;
            }
            return aa;
        },
        isFunction: function (a) {
            return S.call(a) === "[object Function]";
        },
        isArray: function (a) {
            return S.call(a) === "[object Array]";
        },
        isXMLDoc: function (a) {
            return a.nodeType === 9 && a.documentElement.nodeName !== "HTML" || !!a.ownerDocument && aa.isXMLDoc(a.ownerDocument);
        },
        globalEval: function (b) {
            if (b && /\S/.test(b)) {
                var c = document.getElementsByTagName("head")[0] || document.documentElement, a = document.createElement("script");
                a.type = "text/javascript";
                if (aa.support.scriptEval) {
                    a.appendChild(document.createTextNode(b));
                } else {
                    a.text = b;
                }
                c.insertBefore(a, c.firstChild);
                c.removeChild(a);
            }
        },
        nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toUpperCase() == b.toUpperCase();
        },
        each: function (c, f, d) {
            var e, b = 0, a = c.length;
            if (d) {
                if (a === M) {
                    for (e in c) {
                        if (f.apply(c[e], d) === false) {
                            break;
                        }
                    }
                } else {
                    for (; b < a; ) {
                        if (f.apply(c[b++], d) === false) {
                            break;
                        }
                    }
                }
            } else {
                if (a === M) {
                    for (e in c) {
                        if (f.call(c[e], e, c[e]) === false) {
                            break;
                        }
                    }
                } else {
                    for (var g = c[0]; b < a && f.call(g, b, g) !== false; g = c[++b]) { }
                }
            }
            return c;
        },
        prop: function (e, d, a, b, c) {
            if (aa.isFunction(d)) {
                d = d.call(e, b);
            }
            return typeof d === "number" && a == "curCSS" && !F.test(c) ? d + "px" : d;
        },
        className: {
            add: function (b, a) {
                aa.each((a || "").split(/\s+/), function (d, c) {
                    if (b.nodeType == 1 && !aa.className.has(b.className, c)) {
                        b.className += (b.className ? " " : "") + c;
                    }
                });
            },
            remove: function (b, a) {
                if (b.nodeType == 1) {
                    b.className = a !== M ? aa.grep(b.className.split(/\s+/), function (c) {
                        return !aa.className.has(a, c);
                    }).join(" ") : "";
                }
            },
            has: function (a, b) {
                return a && aa.inArray(b, (a.className || a).toString().split(/\s+/)) > -1;
            }
        },
        swap: function (e, a, d) {
            var c = {};
            for (var b in a) {
                c[b] = e.style[b];
                e.style[b] = a[b];
            }
            d.call(e);
            for (var b in a) {
                e.style[b] = c[b];
            }
        },
        css: function (c, e, a, f) {
            if (e == "width" || e == "height") {
                var g, d = {
                    position: "absolute",
                    visibility: "hidden",
                    display: "block"
                }, h = e == "width" ? ["Left", "Right"] : ["Top", "Bottom"];
                function b() {
                    g = e == "width" ? c.offsetWidth : c.offsetHeight;
                    if (f === "border") {
                        return;
                    }
                    aa.each(h, function () {
                        if (!f) {
                            g -= parseFloat(aa.curCSS(c, "padding" + this, true)) || 0;
                        }
                        if (f === "margin") {
                            g += parseFloat(aa.curCSS(c, "margin" + this, true)) || 0;
                        } else {
                            g -= parseFloat(aa.curCSS(c, "border" + this + "Width", true)) || 0;
                        }
                    });
                }
                if (c.offsetWidth !== 0) {
                    b();
                } else {
                    aa.swap(c, d, b);
                }
                return Math.max(0, Math.round(g));
            }
            return aa.curCSS(c, e, a);
        },
        curCSS: function (e, h, g) {
            var b, j = e.style;
            if (h == "opacity" && !aa.support.opacity) {
                b = aa.attr(j, "opacity");
                return b == "" ? "1" : b;
            }
            if (h.match(/float/i)) {
                h = K;
            }
            if (!g && j && j[h]) {
                b = j[h];
            } else {
                if (X.getComputedStyle) {
                    if (h.match(/float/i)) {
                        h = "float";
                    }
                    h = h.replace(/([A-Z])/g, "-$1").toLowerCase();
                    var a = X.getComputedStyle(e, null);
                    if (a) {
                        b = a.getPropertyValue(h);
                    }
                    if (h == "opacity" && b == "") {
                        b = "1";
                    }
                } else {
                    if (e.currentStyle) {
                        var d = h.replace(/\-(\w)/g, function (l, k) {
                            return k.toUpperCase();
                        });
                        b = e.currentStyle[h] || e.currentStyle[d];
                        if (!/^\d+(px)?$/i.test(b) && /^\d/.test(b)) {
                            var f = j.left, c = e.runtimeStyle.left;
                            e.runtimeStyle.left = e.currentStyle.left;
                            j.left = b || 0;
                            b = j.pixelLeft + "px";
                            j.left = f;
                            e.runtimeStyle.left = c;
                        }
                    }
                }
            }
            return b;
        },
        clean: function (e, h, b) {
            h = h || document;
            if (typeof h.createElement === "undefined") {
                h = h.ownerDocument || h[0] && h[0].ownerDocument || document;
            }
            if (!b && e.length === 1 && typeof e[0] === "string") {
                var c = /^<(\w+)\s*\/?>$/.exec(e[0]);
                if (c) {
                    return [h.createElement(c[1])];
                }
            }
            var d = [], f = [], g = h.createElement("div");
            aa.each(e, function (o, l) {
                if (typeof l === "number") {
                    l += "";
                }
                if (!l) {
                    return;
                }
                if (typeof l === "string") {
                    l = l.replace(/(<(\w+)[^>]*?)\/>/g, function (r, q, s) {
                        return s.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i) ? r : q + "></" + s + ">";
                    });
                    var p = l.replace(/^\s+/, "").substring(0, 10).toLowerCase();
                    var n = !p.indexOf("<opt") && [1, "<select multiple='multiple'>", "</select>"] || !p.indexOf("<leg") && [1, "<fieldset>", "</fieldset>"] || p.match(/^<(thead|tbody|tfoot|colg|cap)/) && [1, "<table>", "</table>"] || !p.indexOf("<tr") && [2, "<table><tbody>", "</tbody></table>"] || (!p.indexOf("<td") || !p.indexOf("<th")) && [3, "<table><tbody><tr>", "</tr></tbody></table>"] || !p.indexOf("<col") && [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"] || !aa.support.htmlSerialize && [1, "div<div>", "</div>"] || [0, "", ""];
                    g.innerHTML = n[1] + l + n[2];
                    while (n[0]--) {
                        g = g.lastChild;
                    }
                    if (!aa.support.tbody) {
                        var m = /<tbody/i.test(l), j = !p.indexOf("<table") && !m ? g.firstChild && g.firstChild.childNodes : n[1] == "<table>" && !m ? g.childNodes : [];
                        for (var k = j.length - 1; k >= 0; --k) {
                            if (aa.nodeName(j[k], "tbody") && !j[k].childNodes.length) {
                                j[k].parentNode.removeChild(j[k]);
                            }
                        }
                    }
                    if (!aa.support.leadingWhitespace && /^\s/.test(l)) {
                        g.insertBefore(h.createTextNode(l.match(/^\s*/)[0]), g.firstChild);
                    }
                    l = aa.makeArray(g.childNodes);
                }
                if (l.nodeType) {
                    d.push(l);
                } else {
                    d = aa.merge(d, l);
                }
            });
            if (b) {
                for (var a = 0; d[a]; a++) {
                    if (aa.nodeName(d[a], "script") && (!d[a].type || d[a].type.toLowerCase() === "text/javascript")) {
                        f.push(d[a].parentNode ? d[a].parentNode.removeChild(d[a]) : d[a]);
                    } else {
                        if (d[a].nodeType === 1) {
                            d.splice.apply(d, [a + 1, 0].concat(aa.makeArray(d[a].getElementsByTagName("script"))));
                        }
                        b.appendChild(d[a]);
                    }
                }
                return f;
            }
            return d;
        },
        attr: function (a, d, h) {
            if (!a || a.nodeType == 3 || a.nodeType == 8) {
                return M;
            }
            var c = !aa.isXMLDoc(a), g = h !== M;
            d = c && aa.props[d] || d;
            if (a.tagName) {
                var e = /href|src|style/.test(d);
                if (d == "selected" && a.parentNode) {
                    a.parentNode.selectedIndex;
                }
                if (d in a && c && !e) {
                    if (g) {
                        if (d == "type" && aa.nodeName(a, "input") && a.parentNode) {
                            throw "type property can't be changed";
                        }
                        a[d] = h;
                    }
                    if (aa.nodeName(a, "form") && a.getAttributeNode(d)) {
                        return a.getAttributeNode(d).nodeValue;
                    }
                    if (d == "tabIndex") {
                        var b = a.getAttributeNode("tabIndex");
                        return b && b.specified ? b.value : a.nodeName.match(/(button|input|object|select|textarea)/i) ? 0 : a.nodeName.match(/^(a|area)$/i) && a.href ? 0 : M;
                    }
                    return a[d];
                }
                if (!aa.support.style && c && d == "style") {
                    return aa.attr(a.style, "cssText", h);
                }
                if (g) {
                    a.setAttribute(d, "" + h);
                }
                var f = !aa.support.hrefNormalized && c && e ? a.getAttribute(d, 2) : a.getAttribute(d);
                return f === null ? M : f;
            }
            if (!aa.support.opacity && d == "opacity") {
                if (g) {
                    a.zoom = 1;
                    a.filter = (a.filter || "").replace(/alpha\([^)]*\)/, "") + (parseInt(h) + "" == "NaN" ? "" : "alpha(opacity=" + h * 100 + ")");
                }
                return a.filter && a.filter.indexOf("opacity=") >= 0 ? parseFloat(a.filter.match(/opacity=([^)]*)/)[1]) / 100 + "" : "";
            }
            d = d.replace(/-([a-z])/gi, function (k, j) {
                return j.toUpperCase();
            });
            if (g) {
                a[d] = h;
            }
            return a[d];
        },
        trim: function (a) {
            return (a || "").replace(/^\s+|\s+$/g, "");
        },
        makeArray: function (b) {
            var a = [];
            if (b != null) {
                var c = b.length;
                if (c == null || typeof b === "string" || aa.isFunction(b) || b.setInterval) {
                    a[0] = b;
                } else {
                    while (c) {
                        a[--c] = b[c];
                    }
                }
            }
            return a;
        },
        inArray: function (d, c) {
            for (var b = 0, a = c.length; b < a; b++) {
                if (c[b] === d) {
                    return b;
                }
            }
            return -1;
        },
        merge: function (e, c) {
            var b = 0, a, d = e.length;
            if (!aa.support.getAll) {
                while ((a = c[b++]) != null) {
                    if (a.nodeType != 8) {
                        e[d++] = a;
                    }
                }
            } else {
                while ((a = c[b++]) != null) {
                    e[d++] = a;
                }
            }
            return e;
        },
        unique: function (f) {
            var d = [], e = {};
            try {
                for (var c = 0, b = f.length; c < b; c++) {
                    var g = aa.data(f[c]);
                    if (!e[g]) {
                        e[g] = true;
                        d.push(f[c]);
                    }
                }
            } catch (a) {
                d = f;
            }
            return d;
        },
        grep: function (c, e, d) {
            var b = [];
            for (var a = 0, f = c.length; a < f; a++) {
                if (!d != !e(c[a], a)) {
                    b.push(c[a]);
                }
            }
            return b;
        },
        map: function (d, e) {
            var c = [];
            for (var b = 0, a = d.length; b < a; b++) {
                var f = e(d[b], b);
                if (f != null) {
                    c[c.length] = f;
                }
            }
            return c.concat.apply([], c);
        }
    });
    var V = navigator.userAgent.toLowerCase();
    aa.browser = {
        version: (V.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1],
        safari: /webkit/.test(V),
        opera: /opera/.test(V),
        msie: /msie/.test(V) && !/opera/.test(V),
        mozilla: /mozilla/.test(V) && !/(compatible|webkit)/.test(V)
    };
    aa.each({
        parent: function (a) {
            return a.parentNode;
        },
        parents: function (a) {
            return aa.dir(a, "parentNode");
        },
        next: function (a) {
            return aa.nth(a, 2, "nextSibling");
        },
        prev: function (a) {
            return aa.nth(a, 2, "previousSibling");
        },
        nextAll: function (a) {
            return aa.dir(a, "nextSibling");
        },
        prevAll: function (a) {
            return aa.dir(a, "previousSibling");
        },
        siblings: function (a) {
            return aa.sibling(a.parentNode.firstChild, a);
        },
        children: function (a) {
            return aa.sibling(a.firstChild);
        },
        contents: function (a) {
            return aa.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : aa.makeArray(a.childNodes);
        }
    }, function (b, a) {
        aa.fn[b] = function (d) {
            var c = aa.map(this, a);
            if (d && typeof d == "string") {
                c = aa.multiFilter(d, c);
            }
            return this.pushStack(aa.unique(c), b, d);
        };
    });
    aa.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (b, a) {
        aa.fn[b] = function (h) {
            var e = [], c = aa(h);
            for (var d = 0, g = c.length; d < g; d++) {
                var f = (d > 0 ? this.clone(true) : this).get();
                aa.fn[a].apply(aa(c[d]), f);
                e = e.concat(f);
            }
            return this.pushStack(e, b, h);
        };
    });
    aa.each({
        removeAttr: function (a) {
            aa.attr(this, a, "");
            if (this.nodeType == 1) {
                this.removeAttribute(a);
            }
        },
        addClass: function (a) {
            aa.className.add(this, a);
        },
        removeClass: function (a) {
            aa.className.remove(this, a);
        },
        toggleClass: function (a, b) {
            if (typeof b !== "boolean") {
                b = !aa.className.has(this, a);
            }
            aa.className[b ? "add" : "remove"](this, a);
        },
        remove: function (a) {
            if (!a || aa.filter(a, [this]).length) {
                aa("*", this).add([this]).each(function () {
                    aa.event.remove(this);
                    aa.removeData(this);
                });
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }
        },
        empty: function () {
            aa(this).children().remove();
            while (this.firstChild) {
                this.removeChild(this.firstChild);
            }
        }
    }, function (b, a) {
        aa.fn[b] = function () {
            return this.each(a, arguments);
        };
    });
    function ag(b, a) {
        return b[0] && parseInt(aa.curCSS(b[0], a, true), 10) || 0;
    }
    var ai = "jQuery" + Q(), L = 0, Y = {};
    aa.extend({
        cache: {},
        data: function (a, b, d) {
            a = a == ae ? Y : a;
            var c = a[ai];
            if (!c) {
                c = a[ai] = ++L;
            }
            if (b && !aa.cache[c]) {
                aa.cache[c] = {};
            }
            if (d !== M) {
                aa.cache[c][b] = d;
            }
            return b ? aa.cache[c][b] : c;
        },
        removeData: function (a, b) {
            a = a == ae ? Y : a;
            var c = a[ai];
            if (b) {
                if (aa.cache[c]) {
                    delete aa.cache[c][b];
                    b = "";
                    for (b in aa.cache[c]) {
                        break;
                    }
                    if (!b) {
                        aa.removeData(a);
                    }
                }
            } else {
                try {
                    delete a[ai];
                } catch (d) {
                    if (a.removeAttribute) {
                        a.removeAttribute(ai);
                    }
                }
                delete aa.cache[c];
            }
        },
        queue: function (a, b, c) {
            if (a) {
                b = (b || "fx") + "queue";
                var d = aa.data(a, b);
                if (!d || aa.isArray(c)) {
                    d = aa.data(a, b, aa.makeArray(c));
                } else {
                    if (c) {
                        d.push(c);
                    }
                }
            }
            return d;
        },
        dequeue: function (c, d) {
            var b = aa.queue(c, d), a = b.shift();
            if (!d || d === "fx") {
                a = b[0];
            }
            if (a !== M) {
                a.call(c);
            }
        }
    });
    aa.fn.extend({
        data: function (b, d) {
            var c = b.split(".");
            c[1] = c[1] ? "." + c[1] : "";
            if (d === M) {
                var a = this.triggerHandler("getData" + c[1] + "!", [c[0]]);
                if (a === M && this.length) {
                    a = aa.data(this[0], b);
                }
                return a === M && c[1] ? this.data(c[0]) : a;
            } else {
                return this.trigger("setData" + c[1] + "!", [c[0], d]).each(function () {
                    aa.data(this, b, d);
                });
            }
        },
        removeData: function (a) {
            return this.each(function () {
                aa.removeData(this, a);
            });
        },
        queue: function (b, a) {
            if (typeof b !== "string") {
                a = b;
                b = "fx";
            }
            if (a === M) {
                return aa.queue(this[0], b);
            }
            return this.each(function () {
                var c = aa.queue(this, b, a);
                if (b == "fx" && c.length == 1) {
                    c[0].call(this);
                }
            });
        },
        dequeue: function (a) {
            return this.each(function () {
                aa.dequeue(this, a);
            });
        }
    });
    (function () {
        var b = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g, h = 0, m = Object.prototype.toString;
        var o = function (w, B, aj, x) {
            aj = aj || [];
            B = B || document;
            if (B.nodeType !== 1 && B.nodeType !== 9) {
                return [];
            }
            if (!w || typeof w !== "string") {
                return aj;
            }
            var u = [], z, r, D, C, v, A, y = true;
            b.lastIndex = 0;
            while ((z = b.exec(w)) !== null) {
                u.push(z[1]);
                if (z[2]) {
                    A = RegExp.rightContext;
                    break;
                }
            }
            if (u.length > 1 && g.exec(w)) {
                if (u.length === 2 && l.relative[u[0]]) {
                    r = k(u[0] + u[1], B);
                } else {
                    r = l.relative[u[0]] ? [B] : o(u.shift(), B);
                    while (u.length) {
                        w = u.shift();
                        if (l.relative[w]) {
                            w += u.shift();
                        }
                        r = k(w, r);
                    }
                }
            } else {
                var s = x ? {
                    expr: u.pop(),
                    set: p(x)
                } : o.find(u.pop(), u.length === 1 && B.parentNode ? B.parentNode : B, c(B));
                r = o.filter(s.expr, s.set);
                if (u.length > 0) {
                    D = p(r);
                } else {
                    y = false;
                }
                while (u.length) {
                    var ab = u.pop(), q = ab;
                    if (!l.relative[ab]) {
                        ab = "";
                    } else {
                        q = u.pop();
                    }
                    if (q == null) {
                        q = B;
                    }
                    l.relative[ab](D, q, c(B));
                }
            }
            if (!D) {
                D = r;
            }
            if (!D) {
                throw "Syntax error, unrecognized expression: " + (ab || w);
            }
            if (m.call(D) === "[object Array]") {
                if (!y) {
                    aj.push.apply(aj, D);
                } else {
                    if (B.nodeType === 1) {
                        for (var t = 0; D[t] != null; t++) {
                            if (D[t] && (D[t] === true || D[t].nodeType === 1 && j(B, D[t]))) {
                                aj.push(r[t]);
                            }
                        }
                    } else {
                        for (var t = 0; D[t] != null; t++) {
                            if (D[t] && D[t].nodeType === 1) {
                                aj.push(r[t]);
                            }
                        }
                    }
                }
            } else {
                p(D, aj);
            }
            if (A) {
                o(A, B, aj, x);
                if (n) {
                    hasDuplicate = false;
                    aj.sort(n);
                    if (hasDuplicate) {
                        for (var t = 1; t < aj.length; t++) {
                            if (aj[t] === aj[t - 1]) {
                                aj.splice(t--, 1);
                            }
                        }
                    }
                }
            }
            return aj;
        };
        o.matches = function (r, q) {
            return o(r, null, null, q);
        };
        o.find = function (v, t, u) {
            var w, y;
            if (!v) {
                return [];
            }
            for (var q = 0, r = l.order.length; q < r; q++) {
                var x = l.order[q], y;
                if (y = l.match[x].exec(v)) {
                    var s = RegExp.leftContext;
                    if (s.substr(s.length - 1) !== "\\") {
                        y[1] = (y[1] || "").replace(/\\/g, "");
                        w = l.find[x](y, t, u);
                        if (w != null) {
                            v = v.replace(l.match[x], "");
                            break;
                        }
                    }
                }
            }
            if (!w) {
                w = t.getElementsByTagName("*");
            }
            return {
                set: w,
                expr: v
            };
        };
        o.filter = function (u, x, aj, z) {
            var A = u, D = [], s = x, w, C, v = x && x[0] && c(x[0]);
            while (u && x.length) {
                for (var q in l.filter) {
                    if ((w = l.match[q].exec(u)) != null) {
                        var B = l.filter[q], ab, r;
                        C = false;
                        if (s == D) {
                            D = [];
                        }
                        if (l.preFilter[q]) {
                            w = l.preFilter[q](w, s, aj, D, z, v);
                            if (!w) {
                                C = ab = true;
                            } else {
                                if (w === true) {
                                    continue;
                                }
                            }
                        }
                        if (w) {
                            for (var y = 0; (r = s[y]) != null; y++) {
                                if (r) {
                                    ab = B(r, w, y, s);
                                    var t = z ^ !!ab;
                                    if (aj && ab != null) {
                                        if (t) {
                                            C = true;
                                        } else {
                                            s[y] = false;
                                        }
                                    } else {
                                        if (t) {
                                            D.push(r);
                                            C = true;
                                        }
                                    }
                                }
                            }
                        }
                        if (ab !== M) {
                            if (!aj) {
                                s = D;
                            }
                            u = u.replace(l.match[q], "");
                            if (!C) {
                                return [];
                            }
                            break;
                        }
                    }
                }
                if (u == A) {
                    if (C == null) {
                        throw "Syntax error, unrecognized expression: " + u;
                    } else {
                        break;
                    }
                }
                A = u;
            }
            return s;
        };
        var l = o.selectors = {
            order: ["ID", "NAME", "TAG"],
            match: {
                ID: /#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                CLASS: /\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,
                NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,
                ATTR: /\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,
                TAG: /^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,
                CHILD: /:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,
                POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,
                PSEUDO: /:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/
            },
            attrMap: {
                "class": "className",
                "for": "htmlFor"
            },
            attrHandle: {
                href: function (q) {
                    return q.getAttribute("href");
                }
            },
            relative: {
                "+": function (v, t, w) {
                    var y = typeof t === "string", u = y && !/\W/.test(t), x = y && !u;
                    if (u && !w) {
                        t = t.toUpperCase();
                    }
                    for (var q = 0, r = v.length, s; q < r; q++) {
                        if (s = v[q]) {
                            while ((s = s.previousSibling) && s.nodeType !== 1) { }
                            v[q] = x || s && s.nodeName === t ? s || false : s === t;
                        }
                    }
                    if (x) {
                        o.filter(t, v, true);
                    }
                },
                ">": function (r, w, q) {
                    var t = typeof w === "string";
                    if (t && !/\W/.test(w)) {
                        w = q ? w : w.toUpperCase();
                        for (var v = 0, x = r.length; v < x; v++) {
                            var s = r[v];
                            if (s) {
                                var u = s.parentNode;
                                r[v] = u.nodeName === w ? u : false;
                            }
                        }
                    } else {
                        for (var v = 0, x = r.length; v < x; v++) {
                            var s = r[v];
                            if (s) {
                                r[v] = t ? s.parentNode : s.parentNode === w;
                            }
                        }
                        if (t) {
                            o.filter(w, r, true);
                        }
                    }
                },
                "": function (u, q, s) {
                    var v = h++, r = a;
                    if (!q.match(/\W/)) {
                        var t = q = s ? q : q.toUpperCase();
                        r = d;
                    }
                    r("parentNode", q, v, u, t, s);
                },
                "~": function (u, q, s) {
                    var v = h++, r = a;
                    if (typeof q === "string" && !q.match(/\W/)) {
                        var t = q = s ? q : q.toUpperCase();
                        r = d;
                    }
                    r("previousSibling", q, v, u, t, s);
                }
            },
            find: {
                ID: function (s, r, q) {
                    if (typeof r.getElementById !== "undefined" && !q) {
                        var t = r.getElementById(s[1]);
                        return t ? [t] : [];
                    }
                },
                NAME: function (v, s, r) {
                    if (typeof s.getElementsByName !== "undefined") {
                        var w = [], t = s.getElementsByName(v[1]);
                        for (var u = 0, q = t.length; u < q; u++) {
                            if (t[u].getAttribute("name") === v[1]) {
                                w.push(t[u]);
                            }
                        }
                        return w.length === 0 ? null : w;
                    }
                },
                TAG: function (r, q) {
                    return q.getElementsByTagName(r[1]);
                }
            },
            preFilter: {
                CLASS: function (v, w, u, x, r, q) {
                    v = " " + v[1].replace(/\\/g, "") + " ";
                    if (q) {
                        return v;
                    }
                    for (var t = 0, s; (s = w[t]) != null; t++) {
                        if (s) {
                            if (r ^ (s.className && (" " + s.className + " ").indexOf(v) >= 0)) {
                                if (!u) {
                                    x.push(s);
                                }
                            } else {
                                if (u) {
                                    w[t] = false;
                                }
                            }
                        }
                    }
                    return false;
                },
                ID: function (q) {
                    return q[1].replace(/\\/g, "");
                },
                TAG: function (r, s) {
                    for (var q = 0; s[q] === false; q++) { }
                    return s[q] && c(s[q]) ? r[1] : r[1].toUpperCase();
                },
                CHILD: function (r) {
                    if (r[1] == "nth") {
                        var q = /(-?)(\d*)n((?:\+|-)?\d*)/.exec(r[2] == "even" && "2n" || r[2] == "odd" && "2n+1" || !/\D/.test(r[2]) && "0n+" + r[2] || r[2]);
                        r[2] = q[1] + (q[2] || 1) - 0;
                        r[3] = q[3] - 0;
                    }
                    r[0] = h++;
                    return r;
                },
                ATTR: function (t, w, v, q, s, r) {
                    var u = t[1].replace(/\\/g, "");
                    if (!r && l.attrMap[u]) {
                        t[1] = l.attrMap[u];
                    }
                    if (t[2] === "~=") {
                        t[4] = " " + t[4] + " ";
                    }
                    return t;
                },
                PSEUDO: function (t, q, v, r, s) {
                    if (t[1] === "not") {
                        if (t[3].match(b).length > 1 || /^\w/.test(t[3])) {
                            t[3] = o(t[3], null, null, q);
                        } else {
                            var u = o.filter(t[3], q, v, true ^ s);
                            if (!v) {
                                r.push.apply(r, u);
                            }
                            return false;
                        }
                    } else {
                        if (l.match.POS.test(t[0]) || l.match.CHILD.test(t[0])) {
                            return true;
                        }
                    }
                    return t;
                },
                POS: function (q) {
                    q.unshift(true);
                    return q;
                }
            },
            filters: {
                enabled: function (q) {
                    return q.disabled === false && q.type !== "hidden";
                },
                disabled: function (q) {
                    return q.disabled === true;
                },
                checked: function (q) {
                    return q.checked === true;
                },
                selected: function (q) {
                    q.parentNode.selectedIndex;
                    return q.selected === true;
                },
                parent: function (q) {
                    return !!q.firstChild;
                },
                empty: function (q) {
                    return !q.firstChild;
                },
                has: function (q, r, s) {
                    return !!o(s[3], q).length;
                },
                header: function (q) {
                    return /h\d/i.test(q.nodeName);
                },
                text: function (q) {
                    return "text" === q.type;
                },
                radio: function (q) {
                    return "radio" === q.type;
                },
                checkbox: function (q) {
                    return "checkbox" === q.type;
                },
                file: function (q) {
                    return "file" === q.type;
                },
                password: function (q) {
                    return "password" === q.type;
                },
                submit: function (q) {
                    return "submit" === q.type;
                },
                image: function (q) {
                    return "image" === q.type;
                },
                reset: function (q) {
                    return "reset" === q.type;
                },
                button: function (q) {
                    return "button" === q.type || q.nodeName.toUpperCase() === "BUTTON";
                },
                input: function (q) {
                    return /input|select|textarea|button/i.test(q.nodeName);
                }
            },
            setFilters: {
                first: function (q, r) {
                    return r === 0;
                },
                last: function (r, s, t, q) {
                    return s === q.length - 1;
                },
                even: function (q, r) {
                    return r % 2 === 0;
                },
                odd: function (q, r) {
                    return r % 2 === 1;
                },
                lt: function (q, r, s) {
                    return r < s[3] - 0;
                },
                gt: function (q, r, s) {
                    return r > s[3] - 0;
                },
                nth: function (q, r, s) {
                    return s[3] - 0 == r;
                },
                eq: function (q, r, s) {
                    return s[3] - 0 == r;
                }
            },
            filter: {
                PSEUDO: function (r, v, u, q) {
                    var w = v[1], t = l.filters[w];
                    if (t) {
                        return t(r, u, v, q);
                    } else {
                        if (w === "contains") {
                            return (r.textContent || r.innerText || "").indexOf(v[3]) >= 0;
                        } else {
                            if (w === "not") {
                                var s = v[3];
                                for (var u = 0, x = s.length; u < x; u++) {
                                    if (s[u] === r) {
                                        return false;
                                    }
                                }
                                return true;
                            }
                        }
                    }
                },
                CHILD: function (s, z) {
                    var w = z[1], r = s;
                    switch (w) {
                        case "only":
                        case "first":
                            while (r = r.previousSibling) {
                                if (r.nodeType === 1) {
                                    return false;
                                }
                            }
                            if (w == "first") {
                                return true;
                            }
                            r = s;

                        case "last":
                            while (r = r.nextSibling) {
                                if (r.nodeType === 1) {
                                    return false;
                                }
                            }
                            return true;

                        case "nth":
                            var q = z[2], t = z[3];
                            if (q == 1 && t == 0) {
                                return true;
                            }
                            var x = z[0], u = s.parentNode;
                            if (u && (u.sizcache !== x || !s.nodeIndex)) {
                                var y = 0;
                                for (r = u.firstChild; r; r = r.nextSibling) {
                                    if (r.nodeType === 1) {
                                        r.nodeIndex = ++y;
                                    }
                                }
                                u.sizcache = x;
                            }
                            var v = s.nodeIndex - t;
                            if (q == 0) {
                                return v == 0;
                            } else {
                                return v % q == 0 && v / q >= 0;
                            }
                    }
                },
                ID: function (q, r) {
                    return q.nodeType === 1 && q.getAttribute("id") === r;
                },
                TAG: function (q, r) {
                    return r === "*" && q.nodeType === 1 || q.nodeName === r;
                },
                CLASS: function (q, r) {
                    return (" " + (q.className || q.getAttribute("class")) + " ").indexOf(r) > -1;
                },
                ATTR: function (s, u) {
                    var v = u[1], q = l.attrHandle[v] ? l.attrHandle[v](s) : s[v] != null ? s[v] : s.getAttribute(v), r = q + "", t = u[2], w = u[4];
                    return q == null ? t === "!=" : t === "=" ? r === w : t === "*=" ? r.indexOf(w) >= 0 : t === "~=" ? (" " + r + " ").indexOf(w) >= 0 : !w ? r && q !== false : t === "!=" ? r != w : t === "^=" ? r.indexOf(w) === 0 : t === "$=" ? r.substr(r.length - w.length) === w : t === "|=" ? r === w || r.substr(0, w.length + 1) === w + "-" : false;
                },
                POS: function (t, q, v, s) {
                    var r = q[2], u = l.setFilters[r];
                    if (u) {
                        return u(t, v, q, s);
                    }
                }
            }
        };
        var g = l.match.POS;
        for (var e in l.match) {
            l.match[e] = RegExp(l.match[e].source + /(?![^\[]*\])(?![^\(]*\))/.source);
        }
        var p = function (q, r) {
            q = Array.prototype.slice.call(q);
            if (r) {
                r.push.apply(r, q);
                return r;
            }
            return q;
        };
        try {
            Array.prototype.slice.call(document.documentElement.childNodes);
        } catch (f) {
            p = function (t, u) {
                var r = u || [];
                if (m.call(t) === "[object Array]") {
                    Array.prototype.push.apply(r, t);
                } else {
                    if (typeof t.length === "number") {
                        for (var q = 0, s = t.length; q < s; q++) {
                            r.push(t[q]);
                        }
                    } else {
                        for (var q = 0; t[q]; q++) {
                            r.push(t[q]);
                        }
                    }
                }
                return r;
            };
        }
        var n;
        if (document.documentElement.compareDocumentPosition) {
            n = function (r, s) {
                var q = r.compareDocumentPosition(s) & 4 ? -1 : r === s ? 0 : 1;
                if (q === 0) {
                    hasDuplicate = true;
                }
                return q;
            };
        } else {
            if ("sourceIndex" in document.documentElement) {
                n = function (r, s) {
                    var q = r.sourceIndex - s.sourceIndex;
                    if (q === 0) {
                        hasDuplicate = true;
                    }
                    return q;
                };
            } else {
                if (document.createRange) {
                    n = function (u, r) {
                        var q = u.ownerDocument.createRange(), s = r.ownerDocument.createRange();
                        q.selectNode(u);
                        q.collapse(true);
                        s.selectNode(r);
                        s.collapse(true);
                        var t = q.compareBoundaryPoints(Range.START_TO_END, s);
                        if (t === 0) {
                            hasDuplicate = true;
                        }
                        return t;
                    };
                }
            }
        }
        (function () {
            var r = document.createElement("form"), q = "script" + new Date().getTime();
            r.innerHTML = "<input name='" + q + "'/>";
            var s = document.documentElement;
            s.insertBefore(r, s.firstChild);
            if (!!document.getElementById(q)) {
                l.find.ID = function (t, w, v) {
                    if (typeof w.getElementById !== "undefined" && !v) {
                        var u = w.getElementById(t[1]);
                        return u ? u.id === t[1] || typeof u.getAttributeNode !== "undefined" && u.getAttributeNode("id").nodeValue === t[1] ? [u] : M : [];
                    }
                };
                l.filter.ID = function (v, u) {
                    var t = typeof v.getAttributeNode !== "undefined" && v.getAttributeNode("id");
                    return v.nodeType === 1 && t && t.nodeValue === u;
                };
            }
            s.removeChild(r);
        })();
        (function () {
            var q = document.createElement("div");
            q.appendChild(document.createComment(""));
            if (q.getElementsByTagName("*").length > 0) {
                l.find.TAG = function (r, s) {
                    var t = s.getElementsByTagName(r[1]);
                    if (r[1] === "*") {
                        var u = [];
                        for (var v = 0; t[v]; v++) {
                            if (t[v].nodeType === 1) {
                                u.push(t[v]);
                            }
                        }
                        t = u;
                    }
                    return t;
                };
            }
            q.innerHTML = "<a href='#'></a>";
            if (q.firstChild && typeof q.firstChild.getAttribute !== "undefined" && q.firstChild.getAttribute("href") !== "#") {
                l.attrHandle.href = function (r) {
                    return r.getAttribute("href", 2);
                };
            }
        })();
        if (document.querySelectorAll) {
            (function () {
                var r = o, q = document.createElement("div");
                q.innerHTML = "<p class='TEST'></p>";
                if (q.querySelectorAll && q.querySelectorAll(".TEST").length === 0) {
                    return;
                }
                o = function (s, t, v, u) {
                    t = t || document;
                    if (!u && t.nodeType === 9 && !c(t)) {
                        try {
                            return p(t.querySelectorAll(s), v);
                        } catch (w) { }
                    }
                    return r(s, t, v, u);
                };
                o.find = r.find;
                o.filter = r.filter;
                o.selectors = r.selectors;
                o.matches = r.matches;
            })();
        }
        if (document.getElementsByClassName && document.documentElement.getElementsByClassName) {
            (function () {
                var q = document.createElement("div");
                q.innerHTML = "<div class='test e'></div><div class='test'></div>";
                if (q.getElementsByClassName("e").length === 0) {
                    return;
                }
                q.lastChild.className = "e";
                if (q.getElementsByClassName("e").length === 1) {
                    return;
                }
                l.order.splice(1, 0, "CLASS");
                l.find.CLASS = function (t, s, r) {
                    if (typeof s.getElementsByClassName !== "undefined" && !r) {
                        return s.getElementsByClassName(t[1]);
                    }
                };
            })();
        }
        function d(q, w, x, s, v, t) {
            var u = q == "previousSibling" && !t;
            for (var z = 0, A = s.length; z < A; z++) {
                var r = s[z];
                if (r) {
                    if (u && r.nodeType === 1) {
                        r.sizcache = x;
                        r.sizset = z;
                    }
                    r = r[q];
                    var y = false;
                    while (r) {
                        if (r.sizcache === x) {
                            y = s[r.sizset];
                            break;
                        }
                        if (r.nodeType === 1 && !t) {
                            r.sizcache = x;
                            r.sizset = z;
                        }
                        if (r.nodeName === w) {
                            y = r;
                            break;
                        }
                        r = r[q];
                    }
                    s[z] = y;
                }
            }
        }
        function a(q, w, x, s, v, t) {
            var u = q == "previousSibling" && !t;
            for (var z = 0, A = s.length; z < A; z++) {
                var r = s[z];
                if (r) {
                    if (u && r.nodeType === 1) {
                        r.sizcache = x;
                        r.sizset = z;
                    }
                    r = r[q];
                    var y = false;
                    while (r) {
                        if (r.sizcache === x) {
                            y = s[r.sizset];
                            break;
                        }
                        if (r.nodeType === 1) {
                            if (!t) {
                                r.sizcache = x;
                                r.sizset = z;
                            }
                            if (typeof w !== "string") {
                                if (r === w) {
                                    y = true;
                                    break;
                                }
                            } else {
                                if (o.filter(w, [r]).length > 0) {
                                    y = r;
                                    break;
                                }
                            }
                        }
                        r = r[q];
                    }
                    s[z] = y;
                }
            }
        }
        var j = document.compareDocumentPosition ? function (q, r) {
            return q.compareDocumentPosition(r) & 16;
        } : function (q, r) {
            return q !== r && (q.contains ? q.contains(r) : true);
        };
        var c = function (q) {
            return q.nodeType === 9 && q.documentElement.nodeName !== "HTML" || !!q.ownerDocument && c(q.ownerDocument);
        };
        var k = function (x, r) {
            var v = [], t = "", s, u = r.nodeType ? [r] : r;
            while (s = l.match.PSEUDO.exec(x)) {
                t += s[0];
                x = x.replace(l.match.PSEUDO, "");
            }
            x = l.relative[x] ? x + "*" : x;
            for (var q = 0, w = u.length; q < w; q++) {
                o(x, u[q], v);
            }
            return o.filter(t, v);
        };
        aa.find = o;
        aa.filter = o.filter;
        aa.expr = o.selectors;
        aa.expr[":"] = aa.expr.filters;
        o.selectors.filters.hidden = function (q) {
            return q.offsetWidth === 0 || q.offsetHeight === 0;
        };
        o.selectors.filters.visible = function (q) {
            return q.offsetWidth > 0 || q.offsetHeight > 0;
        };
        o.selectors.filters.animated = function (q) {
            return aa.grep(aa.timers, function (r) {
                return q === r.elem;
            }).length;
        };
        aa.multiFilter = function (q, s, r) {
            if (r) {
                q = ":not(" + q + ")";
            }
            return o.matches(q, s);
        };
        aa.dir = function (r, s) {
            var t = [], q = r[s];
            while (q && q != document) {
                if (q.nodeType == 1) {
                    t.push(q);
                }
                q = q[s];
            }
            return t;
        };
        aa.nth = function (t, s, q, u) {
            s = s || 1;
            var r = 0;
            for (; t; t = t[q]) {
                if (t.nodeType == 1 && ++r == s) {
                    break;
                }
            }
            return t;
        };
        aa.sibling = function (q, r) {
            var s = [];
            for (; q; q = q.nextSibling) {
                if (q.nodeType == 1 && q != r) {
                    s.push(q);
                }
            }
            return s;
        };
        return;
        ae.Sizzle = o;
    })();
    aa.event = {
        add: function (a, d, b, f) {
            if (a.nodeType == 3 || a.nodeType == 8) {
                return;
            }
            if (a.setInterval && a != ae) {
                a = ae;
            }
            if (!b.guid) {
                b.guid = this.guid++;
            }
            if (f !== M) {
                var c = b;
                b = this.proxy(c);
                b.data = f;
            }
            var e = aa.data(a, "events") || aa.data(a, "events", {}), g = aa.data(a, "handle") || aa.data(a, "handle", function () {
                return typeof aa !== "undefined" && !aa.event.triggered ? aa.event.handle.apply(arguments.callee.elem, arguments) : M;
            });
            g.elem = a;
            aa.each(d.split(/\s+/), function (h, l) {
                var k = l.split(".");
                l = k.shift();
                b.type = k.slice().sort().join(".");
                var j = e[l];
                if (aa.event.specialAll[l]) {
                    aa.event.specialAll[l].setup.call(a, f, k);
                }
                if (!j) {
                    j = e[l] = {};
                    if (!aa.event.special[l] || aa.event.special[l].setup.call(a, f, k) === false) {
                        if (a.addEventListener) {
                            a.addEventListener(l, g, false);
                        } else {
                            if (a.attachEvent) {
                                a.attachEvent("on" + l, g);
                            }
                        }
                    }
                }
                j[b.guid] = b;
                aa.event.global[l] = true;
            });
            a = null;
        },
        guid: 1,
        global: {},
        remove: function (h, c, a) {
            if (h.nodeType == 3 || h.nodeType == 8) {
                return;
            }
            var d = aa.data(h, "events"), e, f;
            if (d) {
                if (c === M || typeof c === "string" && c.charAt(0) == ".") {
                    for (var b in d) {
                        this.remove(h, b + (c || ""));
                    }
                } else {
                    if (c.type) {
                        a = c.handler;
                        c = c.type;
                    }
                    aa.each(c.split(/\s+/), function (n, l) {
                        var j = l.split(".");
                        l = j.shift();
                        var m = RegExp("(^|\\.)" + j.slice().sort().join(".*\\.") + "(\\.|$)");
                        if (d[l]) {
                            if (a) {
                                delete d[l][a.guid];
                            } else {
                                for (var k in d[l]) {
                                    if (m.test(d[l][k].type)) {
                                        delete d[l][k];
                                    }
                                }
                            }
                            if (aa.event.specialAll[l]) {
                                aa.event.specialAll[l].teardown.call(h, j);
                            }
                            for (e in d[l]) {
                                break;
                            }
                            if (!e) {
                                if (!aa.event.special[l] || aa.event.special[l].teardown.call(h, j) === false) {
                                    if (h.removeEventListener) {
                                        h.removeEventListener(l, aa.data(h, "handle"), false);
                                    } else {
                                        if (h.detachEvent) {
                                            h.detachEvent("on" + l, aa.data(h, "handle"));
                                        }
                                    }
                                }
                                e = null;
                                delete d[l];
                            }
                        }
                    });
                }
                for (e in d) {
                    break;
                }
                if (!e) {
                    var g = aa.data(h, "handle");
                    if (g) {
                        g.elem = null;
                    }
                    aa.removeData(h, "events");
                    aa.removeData(h, "handle");
                }
            }
        },
        trigger: function (b, h, c, f) {
            var d = b.type || b;
            if (!f) {
                b = typeof b === "object" ? b[ai] ? b : aa.extend(aa.Event(d), b) : aa.Event(d);
                if (d.indexOf("!") >= 0) {
                    b.type = d = d.slice(0, -1);
                    b.exclusive = true;
                }
                if (!c) {
                    b.stopPropagation();
                    if (this.global[d]) {
                        aa.each(aa.cache, function () {
                            if (this.events && this.events[d]) {
                                aa.event.trigger(b, h, this.handle.elem);
                            }
                        });
                    }
                }
                if (!c || c.nodeType == 3 || c.nodeType == 8) {
                    return M;
                }
                b.result = M;
                b.target = c;
                h = aa.makeArray(h);
                h.unshift(b);
            }
            b.currentTarget = c;
            var a = aa.data(c, "handle");
            if (a) {
                a.apply(c, h);
            }
            if ((!c[d] || aa.nodeName(c, "a") && d == "click") && c["on" + d] && c["on" + d].apply(c, h) === false) {
                b.result = false;
            }
            if (!f && c[d] && !b.isDefaultPrevented() && !(aa.nodeName(c, "a") && d == "click")) {
                this.triggered = true;
                try {
                    c[d]();
                } catch (g) { }
            }
            this.triggered = false;
            if (!b.isPropagationStopped()) {
                var e = c.parentNode || c.ownerDocument;
                if (e) {
                    aa.event.trigger(b, h, e, true);
                }
            }
        },
        handle: function (h) {
            var a, f;
            h = arguments[0] = aa.event.fix(h || ae.event);
            h.currentTarget = this;
            var g = h.type.split(".");
            h.type = g.shift();
            a = !g.length && !h.exclusive;
            var b = RegExp("(^|\\.)" + g.slice().sort().join(".*\\.") + "(\\.|$)");
            f = (aa.data(this, "events") || {})[h.type];
            for (var d in f) {
                var c = f[d];
                if (a || b.test(c.type)) {
                    h.handler = c;
                    h.data = c.data;
                    var e = c.apply(this, arguments);
                    if (e !== M) {
                        h.result = e;
                        if (e === false) {
                            h.preventDefault();
                            h.stopPropagation();
                        }
                    }
                    if (h.isImmediatePropagationStopped()) {
                        break;
                    }
                }
            }
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[ai]) {
                return a;
            }
            var c = a;
            a = aa.Event(c);
            for (var b = this.props.length, e; b; ) {
                e = this.props[--b];
                a[e] = c[e];
            }
            if (!a.target) {
                a.target = a.srcElement || document;
            }
            if (a.target.nodeType == 3) {
                a.target = a.target.parentNode;
            }
            if (!a.relatedTarget && a.fromElement) {
                a.relatedTarget = a.fromElement == a.target ? a.toElement : a.fromElement;
            }
            if (a.pageX == null && a.clientX != null) {
                var f = document.documentElement, d = document.body;
                a.pageX = a.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f.clientLeft || 0);
                a.pageY = a.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f.clientTop || 0);
            }
            if (!a.which && (a.charCode || a.charCode === 0 ? a.charCode : a.keyCode)) {
                a.which = a.charCode || a.keyCode;
            }
            if (!a.metaKey && a.ctrlKey) {
                a.metaKey = a.ctrlKey;
            }
            if (!a.which && a.button) {
                a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0;
            }
            return a;
        },
        proxy: function (a, b) {
            b = b || function () {
                return a.apply(this, arguments);
            };
            b.guid = a.guid = a.guid || b.guid || this.guid++;
            return b;
        },
        special: {
            ready: {
                setup: W,
                teardown: function () { }
            }
        },
        specialAll: {
            live: {
                setup: function (b, a) {
                    aa.event.add(this, a[0], E);
                },
                teardown: function (b) {
                    if (b.length) {
                        var a = 0, c = RegExp("(^|\\.)" + b[0] + "(\\.|$)");
                        aa.each(aa.data(this, "events").live || {}, function () {
                            if (c.test(this.type)) {
                                a++;
                            }
                        });
                        if (a < 1) {
                            aa.event.remove(this, b[0], E);
                        }
                    }
                }
            }
        }
    };
    aa.Event = function (a) {
        if (!this.preventDefault) {
            return new aa.Event(a);
        }
        if (a && a.type) {
            this.originalEvent = a;
            this.type = a.type;
        } else {
            this.type = a;
        }
        this.timeStamp = Q();
        this[ai] = true;
    };
    function af() {
        return false;
    }
    function N() {
        return true;
    }
    aa.Event.prototype = {
        preventDefault: function () {
            this.isDefaultPrevented = N;
            var a = this.originalEvent;
            if (!a) {
                return;
            }
            if (a.preventDefault) {
                a.preventDefault();
            }
            a.returnValue = false;
        },
        stopPropagation: function () {
            this.isPropagationStopped = N;
            var a = this.originalEvent;
            if (!a) {
                return;
            }
            if (a.stopPropagation) {
                a.stopPropagation();
            }
            a.cancelBubble = true;
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = N;
            this.stopPropagation();
        },
        isDefaultPrevented: af,
        isPropagationStopped: af,
        isImmediatePropagationStopped: af
    };
    var G = function (c) {
        var a = c.relatedTarget;
        while (a && a != this) {
            try {
                a = a.parentNode;
            } catch (b) {
                a = this;
            }
        }
        if (a != this) {
            c.type = c.data;
            aa.event.handle.apply(this, arguments);
        }
    };
    aa.each({
        mouseover: "mouseenter",
        mouseout: "mouseleave"
    }, function (a, b) {
        aa.event.special[b] = {
            setup: function () {
                aa.event.add(this, a, G, b);
            },
            teardown: function () {
                aa.event.remove(this, a, G);
            }
        };
    });
    aa.fn.extend({
        bind: function (c, b, a) {
            return c == "unload" ? this.one(c, b, a) : this.each(function () {
                aa.event.add(this, c, a || b, a && b);
            });
        },
        one: function (d, c, a) {
            var b = aa.event.proxy(a || c, function (e) {
                aa(this).unbind(e, b);
                return (a || c).apply(this, arguments);
            });
            return this.each(function () {
                aa.event.add(this, d, b, a && c);
            });
        },
        unbind: function (a, b) {
            return this.each(function () {
                aa.event.remove(this, a, b);
            });
        },
        trigger: function (b, a) {
            return this.each(function () {
                aa.event.trigger(b, a, this);
            });
        },
        triggerHandler: function (a, b) {
            if (this[0]) {
                var c = aa.Event(a);
                c.preventDefault();
                c.stopPropagation();
                aa.event.trigger(c, b, this[0]);
                return c.result;
            }
        },
        toggle: function (b) {
            var a = arguments, c = 1;
            while (c < a.length) {
                aa.event.proxy(b, a[c++]);
            }
            return this.click(aa.event.proxy(b, function (d) {
                this.lastToggle = (this.lastToggle || 0) % c;
                d.preventDefault();
                return a[this.lastToggle++].apply(this, arguments) || false;
            }));
        },
        hover: function (b, a) {
            return this.mouseenter(b).mouseleave(a);
        },
        ready: function (a) {
            W();
            if (aa.isReady) {
                a.call(document, aa);
            } else {
                aa.readyList.push(a);
            }
            return this;
        },
        live: function (b, c) {
            var a = aa.event.proxy(c);
            a.guid += this.selector + b;
            aa(document).bind(ah(b, this.selector), this.selector, a);
            return this;
        },
        die: function (a, b) {
            aa(document).unbind(ah(a, this.selector), b ? {
                guid: b.guid + this.selector + a
            } : null);
            return this;
        }
    });
    function E(c) {
        var b = RegExp("(^|\\.)" + c.type + "(\\.|$)"), d = true, a = [];
        aa.each(aa.data(this, "events").live || [], function (g, f) {
            if (b.test(f.type)) {
                var e = aa(c.target).closest(f.data)[0];
                if (e) {
                    a.push({
                        elem: e,
                        fn: f
                    });
                }
            }
        });
        a.sort(function (e, f) {
            return aa.data(e.elem, "closest") - aa.data(f.elem, "closest");
        });
        aa.each(a, function () {
            if (this.fn.call(this.elem, c, this.fn.data) === false) {
                return d = false;
            }
        });
        return d;
    }
    function ah(a, b) {
        return ["live", a, b.replace(/\./g, "`").replace(/ /g, "|")].join(".");
    }
    aa.extend({
        isReady: false,
        readyList: [],
        ready: function () {
            if (!aa.isReady) {
                aa.isReady = true;
                if (aa.readyList) {
                    aa.each(aa.readyList, function () {
                        this.call(document, aa);
                    });
                    aa.readyList = null;
                }
                aa(document).triggerHandler("ready");
            }
        }
    });
    var J = false;
    function W() {
        if (J) {
            return;
        }
        J = true;
        if (document.addEventListener) {
            document.addEventListener("DOMContentLoaded", function () {
                document.removeEventListener("DOMContentLoaded", arguments.callee, false);
                aa.ready();
            }, false);
        } else {
            if (document.attachEvent) {
                document.attachEvent("onreadystatechange", function () {
                    if (document.readyState === "complete") {
                        document.detachEvent("onreadystatechange", arguments.callee);
                        aa.ready();
                    }
                });
                if (document.documentElement.doScroll && ae == ae.top) {
                    (function () {
                        if (aa.isReady) {
                            return;
                        }
                        try {
                            document.documentElement.doScroll("left");
                        } catch (a) {
                            setTimeout(arguments.callee, 0);
                            return;
                        }
                        aa.ready();
                    })();
                }
            }
        }
        aa.event.add(ae, "load", aa.ready);
    }
    aa.each("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error".split(","), function (a, b) {
        aa.fn[b] = function (c) {
            return c ? this.bind(b, c) : this.trigger(b);
        };
    });
    aa(ae).bind("unload", function () {
        for (var a in aa.cache) {
            if (a != 1 && aa.cache[a].handle) {
                aa.event.remove(aa.cache[a].handle.elem);
            }
        }
    });
    (function () {
        aa.support = {};
        var d = document.documentElement, c = document.createElement("script"), f = document.createElement("div"), g = "script" + new Date().getTime();
        f.style.display = "none";
        f.innerHTML = '   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';
        var b = f.getElementsByTagName("*"), e = f.getElementsByTagName("a")[0];
        if (!b || !b.length || !e) {
            return;
        }
        aa.support = {
            leadingWhitespace: f.firstChild.nodeType == 3,
            tbody: !f.getElementsByTagName("tbody").length,
            objectAll: !!f.getElementsByTagName("object")[0].getElementsByTagName("*").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /red/.test(e.getAttribute("style")),
            hrefNormalized: e.getAttribute("href") === "/a",
            opacity: e.style.opacity === "0.5",
            cssFloat: !!e.style.cssFloat,
            scriptEval: false,
            noCloneEvent: true,
            boxModel: null
        };
        c.type = "text/javascript";
        try {
            c.appendChild(document.createTextNode("window." + g + "=1;"));
        } catch (a) { }
        d.insertBefore(c, d.firstChild);
        if (ae[g]) {
            aa.support.scriptEval = true;
            delete ae[g];
        }
        d.removeChild(c);
        if (f.attachEvent && f.fireEvent) {
            f.attachEvent("onclick", function () {
                aa.support.noCloneEvent = false;
                f.detachEvent("onclick", arguments.callee);
            });
            f.cloneNode(true).fireEvent("onclick");
        }
        aa(function () {
            var h = document.createElement("div");
            h.style.width = h.style.paddingLeft = "1px";
            document.body.appendChild(h);
            aa.boxModel = aa.support.boxModel = h.offsetWidth === 2;
            document.body.removeChild(h).style.display = "none";
        });
    })();
    var K = aa.support.cssFloat ? "cssFloat" : "styleFloat";
    aa.props = {
        "for": "htmlFor",
        "class": "className",
        "float": K,
        cssFloat: K,
        styleFloat: K,
        readonly: "readOnly",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        rowspan: "rowSpan",
        tabindex: "tabIndex"
    };
    aa.fn.extend({
        _load: aa.fn.load,
        load: function (c, g, f) {
            if (typeof c !== "string") {
                return this._load(c);
            }
            var a = c.indexOf(" ");
            if (a >= 0) {
                var e = c.slice(a, c.length);
                c = c.slice(0, a);
            }
            var b = "GET";
            if (g) {
                if (aa.isFunction(g)) {
                    f = g;
                    g = null;
                } else {
                    if (typeof g === "object") {
                        g = aa.param(g);
                        b = "POST";
                    }
                }
            }
            var d = this;
            aa.ajax({
                url: c,
                type: b,
                dataType: "html",
                data: g,
                complete: function (h, j) {
                    if (j == "success" || j == "notmodified") {
                        d.html(e ? aa("<div/>").append(h.responseText.replace(/<script(.|\s)*?\/script>/g, "")).find(e) : h.responseText);
                    }
                    if (f) {
                        d.each(f, [h.responseText, j, h]);
                    }
                }
            });
            return this;
        },
        serialize: function () {
            return aa.param(this.serializeArray());
        },
        serializeArray: function () {
            return this.map(function () {
                return this.elements ? aa.makeArray(this.elements) : this;
            }).filter(function () {
                return this.name && !this.disabled && (this.checked || /select|textarea/i.test(this.nodeName) || /text|hidden|password|search/i.test(this.type));
            }).map(function (a, c) {
                var b = aa(this).val();
                return b == null ? null : aa.isArray(b) ? aa.map(b, function (d, e) {
                    return {
                        name: c.name,
                        value: d
                    };
                }) : {
                    name: c.name,
                    value: b
                };
            }).get();
        }
    });
    aa.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","), function (b, a) {
        aa.fn[a] = function (c) {
            return this.bind(a, c);
        };
    });
    var U = Q();
    aa.extend({
        get: function (b, d, c, a) {
            if (aa.isFunction(d)) {
                c = d;
                d = null;
            }
            return aa.ajax({
                type: "GET",
                url: b,
                data: d,
                success: c,
                dataType: a
            });
        },
        getScript: function (b, a) {
            return aa.get(b, null, a, "script");
        },
        getJSON: function (a, c, b) {
            return aa.get(a, c, b, "json");
        },
        post: function (b, d, c, a) {
            if (aa.isFunction(d)) {
                c = d;
                d = {};
            }
            return aa.ajax({
                type: "POST",
                url: b,
                data: d,
                success: c,
                dataType: a
            });
        },
        ajaxSetup: function (a) {
            aa.extend(aa.ajaxSettings, a);
        },
        ajaxSettings: {
            url: location.href,
            global: true,
            type: "GET",
            contentType: "application/x-www-form-urlencoded",
            processData: true,
            async: true,
            xhr: function () {
                return ae.ActiveXObject ? new ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest();
            },
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                script: "text/javascript, application/javascript",
                json: "application/json, text/javascript",
                text: "text/plain",
                _default: "*/*"
            }
        },
        lastModified: {},
        ajax: function (l) {
            l = aa.extend(true, l, aa.extend(true, {}, aa.ajaxSettings, l));
            var a, s = /=\?(&|$)/g, f, b, r = l.type.toUpperCase();
            if (l.data && l.processData && typeof l.data !== "string") {
                l.data = aa.param(l.data);
            }
            if (l.dataType == "jsonp") {
                if (r == "GET") {
                    if (!l.url.match(s)) {
                        l.url += (l.url.match(/\?/) ? "&" : "?") + (l.jsonp || "callback") + "=?";
                    }
                } else {
                    if (!l.data || !l.data.match(s)) {
                        l.data = (l.data ? l.data + "&" : "") + (l.jsonp || "callback") + "=?";
                    }
                }
                l.dataType = "json";
            }
            if (l.dataType == "json" && (l.data && l.data.match(s) || l.url.match(s))) {
                a = "jsonp" + U++;
                if (l.data) {
                    l.data = (l.data + "").replace(s, "=" + a + "$1");
                }
                l.url = l.url.replace(s, "=" + a + "$1");
                l.dataType = "script";
                ae[a] = function (v) {
                    b = v;
                    p();
                    m();
                    ae[a] = M;
                    try {
                        delete ae[a];
                    } catch (u) { }
                    if (q) {
                        q.removeChild(d);
                    }
                };
            }
            if (l.dataType == "script" && l.cache == null) {
                l.cache = false;
            }
            if (l.cache === false && r == "GET") {
                var t = Q();
                var c = l.url.replace(/(\?|&)_=.*?(&|$)/, "$1_=" + t + "$2");
                l.url = c + (c == l.url ? (l.url.match(/\?/) ? "&" : "?") + "_=" + t : "");
            }
            if (l.data && r == "GET") {
                l.url += (l.url.match(/\?/) ? "&" : "?") + l.data;
                l.data = null;
            }
            if (l.global && !aa.active++) {
                aa.event.trigger("ajaxStart");
            }
            var g = /^(\w+:)?\/\/([^\/?#]+)/.exec(l.url);
            if (l.dataType == "script" && r == "GET" && g && (g[1] && g[1] != location.protocol || g[2] != location.host)) {
                var q = document.getElementsByTagName("head")[0];
                var d = document.createElement("script");
                d.src = l.url;
                if (l.scriptCharset) {
                    d.charset = l.scriptCharset;
                }
                if (!a) {
                    var j = false;
                    d.onload = d.onreadystatechange = function () {
                        if (!j && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete")) {
                            j = true;
                            p();
                            m();
                            d.onload = d.onreadystatechange = null;
                            q.removeChild(d);
                        }
                    };
                }
                q.appendChild(d);
                return M;
            }
            var n = false;
            var o = l.xhr();
            if (l.username) {
                o.open(r, l.url, l.async, l.username, l.password);
            } else {
                o.open(r, l.url, l.async);
            }
            try {
                if (l.data) {
                    o.setRequestHeader("Content-Type", l.contentType);
                }
                if (l.ifModified) {
                    o.setRequestHeader("If-Modified-Since", aa.lastModified[l.url] || "Thu, 01 Jan 1970 00:00:00 GMT");
                }
                o.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                o.setRequestHeader("Accept", l.dataType && l.accepts[l.dataType] ? l.accepts[l.dataType] + ", */*" : l.accepts._default);
            } catch (e) { }
            if (l.beforeSend && l.beforeSend(o, l) === false) {
                if (l.global && ! --aa.active) {
                    aa.event.trigger("ajaxStop");
                }
                o.abort();
                return false;
            }
            if (l.global) {
                aa.event.trigger("ajaxSend", [o, l]);
            }
            var k = function (w) {
                if (o.readyState == 0) {
                    if (h) {
                        clearInterval(h);
                        h = null;
                        if (l.global && ! --aa.active) {
                            aa.event.trigger("ajaxStop");
                        }
                    }
                } else {
                    if (!n && o && (o.readyState == 4 || w == "timeout")) {
                        n = true;
                        if (h) {
                            clearInterval(h);
                            h = null;
                        }
                        f = w == "timeout" ? "timeout" : !aa.httpSuccess(o) ? "error" : l.ifModified && aa.httpNotModified(o, l.url) ? "notmodified" : "success";
                        if (f == "success") {
                            try {
                                b = aa.httpData(o, l.dataType, l);
                            } catch (u) {
                                f = "parsererror";
                            }
                        }
                        if (f == "success") {
                            var v;
                            try {
                                v = o.getResponseHeader("Last-Modified");
                            } catch (u) { }
                            if (l.ifModified && v) {
                                aa.lastModified[l.url] = v;
                            }
                            if (!a) {
                                p();
                            }
                        } else {
                            aa.handleError(l, o, f);
                        }
                        m();
                        if (w) {
                            o.abort();
                        }
                        if (l.async) {
                            o = null;
                        }
                    }
                }
            };
            if (l.async) {
                var h = setInterval(k, 13);
                if (l.timeout > 0) {
                    setTimeout(function () {
                        if (o && !n) {
                            k("timeout");
                        }
                    }, l.timeout);
                }
            }
            try {
                o.send(l.data);
            } catch (e) {
                aa.handleError(l, o, null, e);
            }
            if (!l.async) {
                k();
            }
            function p() {
                if (l.success) {
                    l.success(b, f);
                }
                if (l.global) {
                    aa.event.trigger("ajaxSuccess", [o, l]);
                }
            }
            function m() {
                if (l.complete) {
                    l.complete(o, f);
                }
                if (l.global) {
                    aa.event.trigger("ajaxComplete", [o, l]);
                }
                if (l.global && ! --aa.active) {
                    aa.event.trigger("ajaxStop");
                }
            }
            return o;
        },
        handleError: function (a, c, b, d) {
            if (a.error) {
                a.error(c, b, d);
            }
            if (a.global) {
                aa.event.trigger("ajaxError", [c, a, d]);
            }
        },
        active: 0,
        httpSuccess: function (a) {
            try {
                return !a.status && location.protocol == "file:" || a.status >= 200 && a.status < 300 || a.status == 304 || a.status == 1223;
            } catch (b) { }
            return false;
        },
        httpNotModified: function (d, b) {
            try {
                var c = d.getResponseHeader("Last-Modified");
                return d.status == 304 || c == aa.lastModified[b];
            } catch (a) { }
            return false;
        },
        httpData: function (e, a, b) {
            var c = e.getResponseHeader("content-type"), d = a == "xml" || !a && c && c.indexOf("xml") >= 0, f = d ? e.responseXML : e.responseText;
            if (d && f.documentElement.tagName == "parsererror") {
                throw "parsererror";
            }
            if (b && b.dataFilter) {
                f = b.dataFilter(f, a);
            }
            if (typeof f === "string") {
                if (a == "script") {
                    aa.globalEval(f);
                }
                if (a == "json") {
                    f = ae["eval"]("(" + f + ")");
                }
            }
            return f;
        },
        param: function (b) {
            var d = [];
            function c(f, e) {
                d[d.length] = encodeURIComponent(f) + "=" + encodeURIComponent(e);
            }
            if (aa.isArray(b) || b.jquery) {
                aa.each(b, function () {
                    c(this.name, this.value);
                });
            } else {
                for (var a in b) {
                    if (aa.isArray(b[a])) {
                        aa.each(b[a], function () {
                            c(a, this);
                        });
                    } else {
                        c(a, aa.isFunction(b[a]) ? b[a]() : b[a]);
                    }
                }
            }
            return d.join("&").replace(/%20/g, "+");
        }
    });
    var ad = {}, ac, R = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]];
    function P(c, a) {
        var b = {};
        aa.each(R.concat.apply([], R.slice(0, a)), function () {
            b[this] = c;
        });
        return b;
    }
    aa.fn.extend({
        show: function (a, g) {
            if (a) {
                return this.animate(P("show", 3), a, g);
            } else {
                for (var c = 0, e = this.length; c < e; c++) {
                    var f = aa.data(this[c], "olddisplay");
                    this[c].style.display = f || "";
                    if (aa.css(this[c], "display") === "none") {
                        var d = this[c].tagName, h;
                        if (ad[d]) {
                            h = ad[d];
                        } else {
                            var b = aa("<" + d + " />").appendTo("body");
                            h = b.css("display");
                            if (h === "none") {
                                h = "block";
                            }
                            b.remove();
                            ad[d] = h;
                        }
                        aa.data(this[c], "olddisplay", h);
                    }
                }
                for (var c = 0, e = this.length; c < e; c++) {
                    this[c].style.display = aa.data(this[c], "olddisplay") || "";
                }
                return this;
            }
        },
        hide: function (e, d) {
            if (e) {
                return this.animate(P("hide", 3), e, d);
            } else {
                for (var a = 0, b = this.length; a < b; a++) {
                    var c = aa.data(this[a], "olddisplay");
                    if (!c && c !== "none") {
                        aa.data(this[a], "olddisplay", aa.css(this[a], "display"));
                    }
                }
                for (var a = 0, b = this.length; a < b; a++) {
                    this[a].style.display = "none";
                }
                return this;
            }
        },
        _toggle: aa.fn.toggle,
        toggle: function (b, c) {
            var a = typeof b === "boolean";
            return aa.isFunction(b) && aa.isFunction(c) ? this._toggle.apply(this, arguments) : b == null || a ? this.each(function () {
                var d = a ? b : aa(this).is(":hidden");
                aa(this)[d ? "show" : "hide"]();
            }) : this.animate(P("toggle", 3), b, c);
        },
        fadeTo: function (a, b, c) {
            return this.animate({
                opacity: b
            }, a, c);
        },
        animate: function (d, b, e, a) {
            var c = aa.speed(b, e, a);
            return this[c.queue === false ? "each" : "queue"](function () {
                var f = aa.extend({}, c), h, j = this.nodeType == 1 && aa(this).is(":hidden"), g = this;
                for (h in d) {
                    if (d[h] == "hide" && j || d[h] == "show" && !j) {
                        return f.complete.call(this);
                    }
                    if ((h == "height" || h == "width") && this.style) {
                        f.display = aa.css(this, "display");
                        f.overflow = this.style.overflow;
                    }
                }
                if (f.overflow != null) {
                    this.style.overflow = "hidden";
                }
                f.curAnim = aa.extend({}, d);
                aa.each(d, function (l, o) {
                    var p = new aa.fx(g, f, l);
                    if (/toggle|show|hide/.test(o)) {
                        p[o == "toggle" ? j ? "show" : "hide" : o](d);
                    } else {
                        var q = o.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/), n = p.cur(true) || 0;
                        if (q) {
                            var m = parseFloat(q[2]), k = q[3] || "px";
                            if (k != "px") {
                                g.style[l] = (m || 1) + k;
                                n = (m || 1) / p.cur(true) * n;
                                g.style[l] = n + k;
                            }
                            if (q[1]) {
                                m = (q[1] == "-=" ? -1 : 1) * m + n;
                            }
                            p.custom(n, m, k);
                        } else {
                            p.custom(n, o, "");
                        }
                    }
                });
                return true;
            });
        },
        stop: function (c, a) {
            var b = aa.timers;
            if (c) {
                this.queue([]);
            }
            this.each(function () {
                for (var d = b.length - 1; d >= 0; d--) {
                    if (b[d].elem == this) {
                        if (a) {
                            b[d](true);
                        }
                        b.splice(d, 1);
                    }
                }
            });
            if (!a) {
                this.dequeue();
            }
            return this;
        }
    });
    aa.each({
        slideDown: P("show", 1),
        slideUp: P("hide", 1),
        slideToggle: P("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        }
    }, function (b, a) {
        aa.fn[b] = function (d, c) {
            return this.animate(a, d, c);
        };
    });
    aa.extend({
        speed: function (d, c, a) {
            var b = typeof d === "object" ? d : {
                complete: a || !a && c || aa.isFunction(d) && d,
                duration: d,
                easing: a && c || c && !aa.isFunction(c) && c
            };
            b.duration = aa.fx.off ? 0 : typeof b.duration === "number" ? b.duration : aa.fx.speeds[b.duration] || aa.fx.speeds._default;
            b.old = b.complete;
            b.complete = function () {
                if (b.queue !== false) {
                    aa(this).dequeue();
                }
                if (aa.isFunction(b.old)) {
                    b.old.call(this);
                }
            };
            return b;
        },
        easing: {
            linear: function (d, c, b, a) {
                return b + a * d;
            },
            swing: function (d, c, b, a) {
                return (-Math.cos(d * Math.PI) / 2 + .5) * a + b;
            }
        },
        timers: [],
        fx: function (c, a, b) {
            this.options = a;
            this.elem = c;
            this.prop = b;
            if (!a.orig) {
                a.orig = {};
            }
        }
    });
    aa.fx.prototype = {
        update: function () {
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this);
            }
            (aa.fx.step[this.prop] || aa.fx.step._default)(this);
            if ((this.prop == "height" || this.prop == "width") && this.elem.style) {
                this.elem.style.display = "block";
            }
        },
        cur: function (a) {
            if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
                return this.elem[this.prop];
            }
            var b = parseFloat(aa.css(this.elem, this.prop, a));
            return b && b > -1e4 ? b : parseFloat(aa.curCSS(this.elem, this.prop)) || 0;
        },
        custom: function (d, e, a) {
            this.startTime = Q();
            this.start = d;
            this.end = e;
            this.unit = a || this.unit || "px";
            this.now = this.start;
            this.pos = this.state = 0;
            var c = this;
            function b(f) {
                return c.step(f);
            }
            b.elem = this.elem;
            if (b() && aa.timers.push(b) && !ac) {
                ac = setInterval(function () {
                    var f = aa.timers;
                    for (var g = 0; g < f.length; g++) {
                        if (!f[g]()) {
                            f.splice(g--, 1);
                        }
                    }
                    if (!f.length) {
                        clearInterval(ac);
                        ac = M;
                    }
                }, 13);
            }
        },
        show: function () {
            this.options.orig[this.prop] = aa.attr(this.elem.style, this.prop);
            this.options.show = true;
            this.custom(this.prop == "width" || this.prop == "height" ? 1 : 0, this.cur());
            aa(this.elem).show();
        },
        hide: function () {
            this.options.orig[this.prop] = aa.attr(this.elem.style, this.prop);
            this.options.hide = true;
            this.custom(this.cur(), 0);
        },
        step: function (a) {
            var b = Q();
            if (a || b >= this.options.duration + this.startTime) {
                this.now = this.end;
                this.pos = this.state = 1;
                this.update();
                this.options.curAnim[this.prop] = true;
                var d = true;
                for (var c in this.options.curAnim) {
                    if (this.options.curAnim[c] !== true) {
                        d = false;
                    }
                }
                if (d) {
                    if (this.options.display != null) {
                        this.elem.style.overflow = this.options.overflow;
                        this.elem.style.display = this.options.display;
                        if (aa.css(this.elem, "display") == "none") {
                            this.elem.style.display = "block";
                        }
                    }
                    if (this.options.hide) {
                        aa(this.elem).hide();
                    }
                    if (this.options.hide || this.options.show) {
                        for (var f in this.options.curAnim) {
                            aa.attr(this.elem.style, f, this.options.orig[f]);
                        }
                    }
                    this.options.complete.call(this.elem);
                }
                return false;
            } else {
                var e = b - this.startTime;
                this.state = e / this.options.duration;
                this.pos = aa.easing[this.options.easing || (aa.easing.swing ? "swing" : "linear")](this.state, e, 0, 1, this.options.duration);
                this.now = this.start + (this.end - this.start) * this.pos;
                this.update();
            }
            return true;
        }
    };
    aa.extend(aa.fx, {
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function (a) {
                aa.attr(a.elem.style, "opacity", a.now);
            },
            _default: function (a) {
                if (a.elem.style && a.elem.style[a.prop] != null) {
                    a.elem.style[a.prop] = a.now + a.unit;
                } else {
                    a.elem[a.prop] = a.now;
                }
            }
        }
    });
    if (document.documentElement.getBoundingClientRect) {
        aa.fn.offset = function () {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                };
            }
            if (this[0] === this[0].ownerDocument.body) {
                return aa.offset.bodyOffset(this[0]);
            }
            var d = this[0].getBoundingClientRect(), a = this[0].ownerDocument, e = a.body, f = a.documentElement, g = f.clientTop || e.clientTop || 0, h = f.clientLeft || e.clientLeft || 0, b = d.top + (self.pageYOffset || aa.boxModel && f.scrollTop || e.scrollTop) - g, c = d.left + (self.pageXOffset || aa.boxModel && f.scrollLeft || e.scrollLeft) - h;
            return {
                top: b,
                left: c
            };
        };
    } else {
        aa.fn.offset = function () {
            if (!this[0]) {
                return {
                    top: 0,
                    left: 0
                };
            }
            if (this[0] === this[0].ownerDocument.body) {
                return aa.offset.bodyOffset(this[0]);
            }
            aa.offset.initialized || aa.offset.initialize();
            var f = this[0], j = f.offsetParent, k = f, a = f.ownerDocument, c, h = a.documentElement, e = a.body, d = a.defaultView, l = d.getComputedStyle(f, null), b = f.offsetTop, g = f.offsetLeft;
            while ((f = f.parentNode) && f !== e && f !== h) {
                c = d.getComputedStyle(f, null);
                b -= f.scrollTop, g -= f.scrollLeft;
                if (f === j) {
                    b += f.offsetTop, g += f.offsetLeft;
                    if (aa.offset.doesNotAddBorder && !(aa.offset.doesAddBorderForTableAndCells && /^t(able|d|h)$/i.test(f.tagName))) {
                        b += parseInt(c.borderTopWidth, 10) || 0, g += parseInt(c.borderLeftWidth, 10) || 0;
                    }
                    k = j, j = f.offsetParent;
                }
                if (aa.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible") {
                    b += parseInt(c.borderTopWidth, 10) || 0, g += parseInt(c.borderLeftWidth, 10) || 0;
                }
                l = c;
            }
            if (l.position === "relative" || l.position === "static") {
                b += e.offsetTop, g += e.offsetLeft;
            }
            if (l.position === "fixed") {
                b += Math.max(h.scrollTop, e.scrollTop), g += Math.max(h.scrollLeft, e.scrollLeft);
            }
            return {
                top: b,
                left: g
            };
        };
    }
    aa.offset = {
        initialize: function () {
            if (this.initialized) {
                return;
            }
            var c = document.body, j = document.createElement("div"), g, h, a, f, b, k, e = c.style.marginTop, d = '<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
            b = {
                position: "absolute",
                top: 0,
                left: 0,
                margin: 0,
                border: 0,
                width: "1px",
                height: "1px",
                visibility: "hidden"
            };
            for (k in b) {
                j.style[k] = b[k];
            }
            j.innerHTML = d;
            c.insertBefore(j, c.firstChild);
            g = j.firstChild, h = g.firstChild, f = g.nextSibling.firstChild.firstChild;
            this.doesNotAddBorder = h.offsetTop !== 5;
            this.doesAddBorderForTableAndCells = f.offsetTop === 5;
            g.style.overflow = "hidden", g.style.position = "relative";
            this.subtractsBorderForOverflowNotVisible = h.offsetTop === -5;
            c.style.marginTop = "1px";
            this.doesNotIncludeMarginInBodyOffset = c.offsetTop === 0;
            c.style.marginTop = e;
            c.removeChild(j);
            this.initialized = true;
        },
        bodyOffset: function (a) {
            aa.offset.initialized || aa.offset.initialize();
            var b = a.offsetTop, c = a.offsetLeft;
            if (aa.offset.doesNotIncludeMarginInBodyOffset) {
                b += parseInt(aa.curCSS(a, "marginTop", true), 10) || 0, c += parseInt(aa.curCSS(a, "marginLeft", true), 10) || 0;
            }
            return {
                top: b,
                left: c
            };
        }
    };
    aa.fn.extend({
        position: function () {
            var f = 0, a = 0, c;
            if (this[0]) {
                var b = this.offsetParent(), e = this.offset(), d = /^body|html$/i.test(b[0].tagName) ? {
                    top: 0,
                    left: 0
                } : b.offset();
                e.top -= ag(this, "marginTop");
                e.left -= ag(this, "marginLeft");
                d.top += ag(b, "borderTopWidth");
                d.left += ag(b, "borderLeftWidth");
                c = {
                    top: e.top - d.top,
                    left: e.left - d.left
                };
            }
            return c;
        },
        offsetParent: function () {
            var a = this[0].offsetParent || document.body;
            while (a && !/^body|html$/i.test(a.tagName) && aa.css(a, "position") == "static") {
                a = a.offsetParent;
            }
            return aa(a);
        }
    });
    aa.each(["Left", "Top"], function (c, a) {
        var b = "scroll" + a;
        aa.fn[b] = function (d) {
            if (!this[0]) {
                return null;
            }
            return d !== M ? this.each(function () {
                this == ae || this == document ? ae.scrollTo(!c ? d : aa(ae).scrollLeft(), c ? d : aa(ae).scrollTop()) : this[b] = d;
            }) : this[0] == ae || this[0] == document ? self[c ? "pageYOffset" : "pageXOffset"] || aa.boxModel && document.documentElement[b] || document.body[b] : this[0][b];
        };
    });
    aa.each(["Height", "Width"], function (f, b) {
        var d = f ? "Left" : "Top", a = f ? "Right" : "Bottom", c = b.toLowerCase();
        aa.fn["inner" + b] = function () {
            return this[0] ? aa.css(this[0], c, false, "padding") : null;
        };
        aa.fn["outer" + b] = function (g) {
            return this[0] ? aa.css(this[0], c, false, g ? "margin" : "border") : null;
        };
        var e = b.toLowerCase();
        aa.fn[e] = function (g) {
            return this[0] == ae ? document.compatMode == "CSS1Compat" && document.documentElement["client" + b] || document.body["client" + b] : this[0] == document ? Math.max(document.documentElement["client" + b], document.body["scroll" + b], document.documentElement["scroll" + b], document.body["offset" + b], document.documentElement["offset" + b]) : g === M ? this.length ? aa.css(this[0], e) : null : this.css(e, typeof g === "string" ? g : g + "px");
        };
    });
})();

var SKIN_PATH = "/Skins/Default/";

var PTN_EMAIL = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

var PTN_FLOAT = /\d+(\.\d+)?/;

function $nsw() { }

function $j(a) {
    return $("#" + a);
}

function $v(b, a) {
    if (a == null) {
        var c = $j(b).attr("value");
        if (c == null || c == undefined) {
            return "";
        }
        return c;
    } else {
        return $j(b).attr("value", a);
    }
}

function $tv(a) {
    return $.trim($v(a));
}

function getChecked(a) {
    return $("#" + a).attr("checked");
}

function checkRadio(a, c) {
    var b;
    if (c == null) {
        b = $(document.body).find("input[type=radio]");
    } else {
        b = $j(c).find("input[type=radio]");
    }
    b.each(function (d) {
        var e = $(this);
        e.attr("checked", e.attr("value") == a);
    });
}

function getSelectedText(b) {
    var a = $("#" + b + ">option");
    var c = "";
    a.each(function (d) {
        if (this.selected) {
            c = this.text;
        }
    });
    return c;
}

function hideDdl(d) {
    var b = ["select", "iframe", "applet", "object"];
    var c;
    if (d != null) {
        c = $j(d);
    } else {
        c = $(document.body);
    }
    for (var a = 0; a < b.length; ++a) {
        c.find(b[a]).css("visibility", "hidden");
    }
}

function showDdl() {
    var b = ["select", "iframe", "applet", "object"];
    for (var a = 0; a < b.length; ++a) {
        $(b[a]).css("visibility", "visible");
    }
}

function relocation(c) {
    var a;
    if (typeof c.toString().toLowerCase() == "string") {
        a = $j(c);
    } else {
        a = $(c);
    }
    if (a.length == 0) {
        return;
    }
    var b = document.documentElement.scrollTop || document.body.scrollTop;
    var d = b - a.height() / 2 + "px";
    a.css({
        "margin-top": d
    });
}

$(function () {
    $(window).resize(function () {
        relocation("mesbook1");
        relocation("mesbook1_c");
    });
    $(window).scroll(function () {
        relocation("mesbook1");
        relocation("mesbook1_c");
    });
});

function oran_msg(a, e, b, d, f, c) {
    window.onload = function () {
        $a(a, e, b, d, f, c);
    };
}

function $confirm(p, m, b) {
    hideDdl();
    var G = "消息对话框";
    var e = $j("mesbook1_c");
    if (e.length == 0) {
        var o = "<div id='mesbook1_c'><div><img onclick='hideMsg()' id='mesbook1_cImgClose' src='" + SKIN_PATH + "Img/ico9_close.gif' alt='关闭' class='fr p vam' /><span id='mesbook1_cTitle'></span></div><dl class='b1'><dt><img id='mesbook1_cIcon' src='" + SKIN_PATH + "Img/message_ico_03.gif' alt='' title=''  /></dt><dd class='l_25' id='mesbook1_cMsg'></dd><dd class='b' style='visibility:hidden' id='mesbook1_cAutoClose'>此窗口<span id='mesbook1_cDelay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd><dd id='mesbook1_cBtns'><input type='button' class='b15' value='确 定' /><input type='button' class='b15' value='取 消' /></dd></dl></div>";
        $(document.body).append(o);
    }
    var e = $j("mesbook1_c");
    var n = $j("mesbook1_cImgClose");
    var d = $j("mesbook1_cIcon");
    var k = $j("mesbook1_cMsg");
    var l = $j("mesbook1_cAutoClose");
    var a = $j("mesbook1_cDelay");
    var h = $j("mesbook1_cTitle");
    var c = $j("mesbook1_cBtns");
    h.html(G);
    k.html(p);
    var g = SKIN_PATH + "Img/ico_ques.gif";
    d.attr("src", g);
    var f = c.find("input:eq(0)");
    var j = c.find("input:eq(1)");
    f.removeAttr("onclick");
    j.removeAttr("onclick");
    if (m.title != null) {
        f.val(m.title);
    }
    if (typeof m.toDo == "string") {
        f.click(function () {
            location.href = m.toDo;
        });
    } else {
        f.click(function () {
            m.toDo();
        });
    }
    if (b.title != null) {
        j.val(b.title);
    }
    if (typeof b.toDo == "string") {
        j.click(function () {
            location.href = b.toDo;
        });
    } else {
        j.click(function () {
            b.toDo();
        });
    }
    n.removeAttr("onclick");
    n.click(function () {
        hideConfirm();
    });
    showFullBg();
    setCM("mesbook1_c");
    relocation("mesbook1_c");
    e.fadeIn(80);
}

function hideConfirm() {
    showDdl();
    var a = $j("mesbook1_c");
    hideFullBg();
    a.fadeOut(80);
}

function $a(o, I, d, j, p, l) {
    if (I == null) {
        I = 2;
    }
    if (d == null) {
        d = -1;
    }
    if (p == null) {
        p = "消息提示";
    }
    hideDdl();
    var c = $j("mesbook1");
    if (c.length == 0) {
        var n = "<div id='mesbook1'><div><img style='float:right' onclick='hideMsg()' id='mesbook1ImgClose' src='" + SKIN_PATH + "Img/ico9_close.gif' alt='关闭' class='fr p vam ml5' /><span id='mesbook1Title'></span></div><dl class='b1'><dt><img id='mesbook1Icon' src='" + SKIN_PATH + "Img/message_ico_03.gif' alt='' title='' /></dt><dd class='l_25' id='mesbook1Msg'></dd><dd class='b' style='visibility:hidden' id='mesbook1AutoClose'>此窗口<span id='mesbook1Delay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd><dd id='mesbook1Btns'><input type='button' class='b15' value='关 闭' /></dd></dl></div>";
        $(document.body).append(n);
    }
    var c = $j("mesbook1");
    var m = $j("mesbook1ImgClose");
    var b = $j("mesbook1Icon");
    var h = $j("mesbook1Msg");
    var k = $j("mesbook1AutoClose");
    var q = $j("mesbook1Delay");
    var g = $j("mesbook1Title");
    var a = $j("mesbook1Btns");
    g.html(p);
    h.html(o);
    var f = SKIN_PATH + "Img/";
    switch (I) {
        case 1:
            f += "ico_ok.gif";
            break;

        case 2:
            f += "ico_info.gif";
            break;

        case 3:
            f += "ioc_ques.gif";
            break;

        case -1:
            f += "ico_error.gif";
            break;

        default:
            f += "ico_normal.gif";
            break;
    }
    b.attr("src", f);
    var e = a.find("input");
    e.removeAttr("onclick");
    e.click(function () {
        hideMsg();
        if (j != null) {
            $j(j).focus();
        }
        if (l != null) {
            l();
        }
    });
    m.removeAttr("onclick");
    m.click(function () {
        hideMsg();
        if (j != null) {
            $j(j).focus();
        }
        if (l != null) {
            l();
        }
    });
    e.focus();
    showFullBg();
    setCM("mesbook1");
    relocation("mesbook1");
    c.fadeIn(80);
}

function showMsgPage(b, d, a, c, g, f) {
    if (d == null) {
        d = "Information";
    } else {
        switch (d) {
            case 1:
                d = "Successful";
                break;

            case 2:
                d = "Information";
                break;

            case 3:
                d = "Question";
                break;

            case -1:
                d = "Failed";
                break;

            default:
                d = "Information";
                break;
        }
    }
    if (a == null) {
        a = "/";
    }
    if (c == null) {
        c = "首页";
    }
    if (g == null) {
        g = "/";
    }
    if (f == null) {
        f = 9;
    }
    b = b.replace("/<script>/g", "").replace("/</script>/g", "").replace("/</sCript>/g", "");
    a = a.replace("/<script>/g", "").replace("/</script>/g", "").replace("/</sCript>/g", "").replace("http://", "").replace("https://", "");
    c = c.replace("/<script>/g", "").replace("/</script>/g", "").replace("/</sCript>/g", "");
    g = g.replace("/<script>/g", "").replace("/</script>/g", "").replace("/</sCript>/g", "").replace("http://", "").replace("https://", "");
    var e = "/Tools/Message.aspx?result=" + d + "&btntitle=" + encodeURIComponent(c) + "&btnhref=" + encodeURIComponent(a) + "&defaulthref=" + encodeURIComponent(g) + "&delay=" + f + "&msg=" + encodeURIComponent(b);
    location.href = e;
}

function hideMsg() {
    showDdl();
    var a = $j("mesbook1");
    hideFullBg();
    a.fadeOut(80);
}

function setCM(e, c) {
    var b;
    if (typeof e.toString().toLowerCase() == "string") {
        b = $j(e);
    } else {
        b = $(e);
    }
    if (c == null) {
        c = 80;
    }
    var a = b.height() / 2;
    var d = b.width() / 2;
    b.css({
        top: "50%",
        "margin-top": "-" + a + "px",
        left: "50%",
        "margin-left": "-" + d + "px"
    });
    b.css({
        position: "absolute",
        "z-index": "999"
    });
    b.fadeIn(c);
}

function setCMS(a, d) {
    var c;
    if (typeof a.toString().toLowerCase() == "string") {
        c = $j(a);
    } else {
        c = $(a);
    }
    if (d == null) {
        d = 80;
    }
    var b = c.height() / 2;
    var f = c.width() / 2;
    var e = document.documentElement.scrollTop;
    if (e > 100) {
        c.css({
            top: "50%",
            "margin-top": "-" + b + "px",
            left: "50%",
            "margin-left": "-" + f + "px"
        });
    } else {
        b = 200;
        c.css({
            "margin-top": "-" + b + "px",
            left: "50%",
            "margin-left": "-" + f + "px"
        });
    }
    c.css({
        position: "absolute",
        "z-index": "999"
    });
    c.fadeIn(d);
}

function showFullBg(e, j, m, a, n, h, f) {
    if (e == null) {
        e = "oran_full_bg";
    }
    var d = $j(e);
    if (d.length == 0) {
        var b = "<div style='position:absolute;top:0;left:0;display:none;' id='" + e + "'></div>";
        $(document.body).append(b);
    }
    if (m == null) {
        m = .75;
    }
    if (a == null) {
        a = "#777";
    }
    if (n == null) {
        n = "9";
    }
    if (h == null) {
        h = 80;
    }
    if (j == null) {
        j = true;
    }
    var d = $j(e);
    var c = document.documentElement;
    var g = c.scrollWidth;
    var l = c.scrollHeight;
    var k = c.clientHeight;
    var C = c.clientWidth;
    if (l < k) {
        l = k;
    }
    if (g < C) {
        g = C;
    }
    d.css({
        "z-index": n,
        background: a,
        opacity: m,
        filter: "progid:DXImageTransform.Microsoft.Alpha(opacity=" + m * 100 + ")"
    });
    d.css({
        height: l,
        width: g
    });
    if (j) {
        hideDdl(null, f);
    }
    d.fadeIn(h);
    if (f != null) {
        f();
    }
}

function hideFullBg(b, a) {
    if (b == null) {
        b = "oran_full_bg";
    }
    if (a == null) {
        a = 80;
    }
    var c = $j(b);
    c.fadeOut(a);
    showDdl();
}

function $closeLayer(a, b) {
    $j(a).fadeOut(80, function () {
        hideFullBg(b);
    });
}

function limitLength(e) {
    var b = e.value;
    var d = parseInt($(e).attr("max"));
    var g = e.id;
    var j = b.replace(/[^\x00-\xff]/g, "**");
    var h = j.length;
    if (h * 1 <= d * 1) {
        return;
    }
    var n = j.substr(0, d);
    var m = 0;
    var a = "";
    for (var l = 0; l < n.length; l++) {
        var f = n.substr(l, 1);
        if (f == "*") {
            m++;
        }
    }
    var c = 0;
    var k = j.substr(d * 1 - 1, 1);
    if (m % 2 == 0) {
        c = m / 2 + (d * 1 - m);
        a = b.substr(0, c);
    } else {
        c = (m - 1) / 2 + (d * 1 - m);
        a = b.substr(0, c);
    }
    alert("最大输入" + d + "个字节（相当于" + d / 2 + "个汉字）！");
    document.getElementById(g).value = a;
    return;
}

function $g(a) {
    return document.getElementById(a);
}

function $name(a) {
    return document.getElementsByName(a);
}

function $tag(c, b) {
    var a = c;
    if (a != Object) {
        a = $g(c);
    }
    return a.getElementsByTagName(b);
}

function digiKeyOnly(b) {
    var a = window.event ? event.keyCode : b.which;
    if (a < 27 || a > 128) {
        return true;
    } else {
        if (a >= 48 && a <= 57) {
            return true;
        } else {
            return false;
        }
    }
}

function digiOnly(a) {
    a.value = a.value.replace(/[^0-9]/g, "");
}

function $o(d, c, b, a) {
    if (d == null || d == "") {
        return;
    }
    if (c == null) {
        c = "300";
    }
    if (b == null) {
        b = "300";
    }
    if (a == null) {
        a = "location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0;top=0,left=0";
    }
    if (c) {
        a += ",width=" + c;
    }
    if (b) {
        a += ",height=" + b;
    }
    window.open(d, "", a, false);
}

function emptyText(b) {
    var a;
    if (b == null) {
        a = $("body").find("input[type=text]");
    } else {
        a = $j(b).find("input[type=text]");
    }
    var c;
    if (b == null) {
        c = $("body").find("input[type=password]");
    } else {
        c = $j(b).find("input[type=password]");
    }
    a.each(function () {
        $(this).attr("value", "");
    });
    c.each(function () {
        $(this).attr("value", "");
    });
    if (b == null) {
        a = $("body").find("textarea");
    } else {
        a = $j(b).find("textarea");
    }
    a.each(function () {
        $(this).attr("value", "");
    });
}

$cookie = function (g, c, e) {
    if (c == null && e == null) {
        var a = g + "=";
        begin = document.cookie.indexOf(a);
        if (begin != -1) {
            begin += a.length;
            end = document.cookie.indexOf(";", begin);
            if (end == -1) {
                end = document.cookie.length;
            }
            return document.cookie.substring(begin, end);
        }
        return null;
    } else {
        if (typeof c == "boolean") {
            $cookie(g, "", -999999);
        } else {
            if (e == null) {
                e = 99864e5;
            }
            var d = new Date();
            var b = new Date();
            var f = e;
            b.setTime(d.getTime() + f);
            document.cookie = g + "=" + c + ";expires=" + b.toGMTString();
        }
    }
};

function $qs(a) {
    var d = new Object();
    var h = location.search.substring(1);
    var g = h.split("&");
    for (var e = 0; e < g.length; ++e) {
        var b = g[e].indexOf("=");
        if (!b) {
            continue;
        }
        var f = g[e].substring(0, b);
        var c = g[e].substring(b + 1);
        c = decodeURIComponent(c);
        d[f] = c;
    }
    return d[a] == null ? "" : d[a];
}

function selectAll(b, d) {
    var c = $tag(d, "input");
    for (var a = 0; a < c.length; ++a) {
        c[a].checked = b.checked;
    }
}

function invertSelect(c) {
    var b = $tag(c, "input");
    for (var a = 0; a < b.length; ++a) {
        b[a].checked = !b[a].checked;
    }
}

function getPageFilename() {
    var c = location.pathname;
    var a = c.lastIndexOf("/") + 1;
    var b = c.substring(a, c.length);
    return b;
}

function getRawUrl() {
    var c = location.href;
    var a = c.lastIndexOf("/") + 1;
    var b = c.substring(a, c.length);
    a = b.lastIndexOf("#");
    b = b.substring(0, a);
    return b;
}

function getIntactRawUrl() {
    var a = location.href;
    var b;
    b = a.lastIndexOf("#");
    a = a.substring(0, b);
    return a;
}

function toggleArg(f, b) {
    var e = $$.intactRawUrl();
    var c = e.indexOf("?");
    if (c == -1) {
        return e + "?" + f + "=" + b;
    } else {
        var d = e.substring(c);
        var a = e.substring(0, c);
        var g = new RegExp("&?" + f + "=?\\w*\\[?\\w*\\]?\\|?\\d?", "i");
        d = d.replace(g, "");
        if (d.length == 1) {
            d += f + "=" + b;
        } else {
            d += "&" + f + "=" + b;
        }
        return a + d;
    }
}

function increase(a, c) {
    if (c == null) {
        c = "show";
    }
    var b = $j(a);
    b.animate({
        height: c,
        width: c,
        opacity: c
    }, "fast");
}

function fadeToggle(a, b) {
    if (b == null) {
        b = "fast";
    }
    if ($("#" + a).is(":visible")) {
        $("#" + a).fadeOut(b);
    } else {
        $("#" + a).fadeIn(b);
    }
}

function clearAllElms(a, b) {
    clearDdls(a, b);
    clearTextBoxes(a, b);
    clearRdos(a, b);
    clearChks(a, b);
}

function clearRdos(b, a) {
    if (a == null) {
        a = "tfocus";
    }
    var c = $j(b).find("input[type=radio]");
    c.focus(function () {
        $(this).addClass(a);
    });
    c.blur(function () {
        $(this).removeClass(a);
    });
}

function clearChks(b, a) {
    if (a == null) {
        a = "tfocus";
    }
    var c = $j(b).find("input[type=checkbox]");
    c.focus(function () {
        $(this).addClass(a);
    });
    c.blur(function () {
        $(this).removeClass(a);
    });
}

function clearDdls(b, a) {
    if (a == null) {
        a = "tfocus";
    }
    var c = $j(b).find("select");
    c.focus(function () {
        $(this).addClass(a);
    });
    c.blur(function () {
        $(this).removeClass(a);
    });
}

function clearTextBoxes(b, a) {
    if (a == null) {
        a = "tfocus";
    }
    var c = $j(b).find("input[type=text]");
    c.focus(function () {
        $(this).addClass(a);
    });
    c.blur(function () {
        $(this).removeClass(a);
    });
    var c = $j(b).find("input[type=password]");
    c.focus(function () {
        $(this).addClass(a);
    });
    c.blur(function () {
        $(this).removeClass(a);
    });
    c = $j(b).find("textarea");
    c.focus(function () {
        $(this).addClass(a);
    });
    c.blur(function () {
        $(this).removeClass(a);
    });
}

var addBookmark = function (f) {
    var g = document.title;
    var b = document.URL;
    var d = window.event || arguments.callee.caller.arguments[0];
    var h = {
        IE: /MSIE/.test(window.navigator.userAgent) && !window.opera,
        FF: /Firefox/.test(window.navigator.userAgent),
        OP: !!window.opera
    };
    f.onclick = null;
    if (h.IE) {
        f.attachEvent("onclick", function () {
            try {
                window.external.AddFavorite(b, g);
                window.event.returnValue = false;
            } catch (a) {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        });
    } else {
        if (h.FF || f.nodeName.toLowerCase() == "a") {
            if (h.FF) {
                f.setAttribute("rel", "sidebar"), f.title = g, f.href = b;
            } else {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        } else {
            if (h.OP) {
                var c = document.createElement("a");
                c.rel = "sidebar", c.title = g, c.href = b;
                f.parentNode.insertBefore(c, f);
                c.appendChild(f);
                c = null;
            } else {
                alert("加入收藏失败，请使用Ctrl+D进行添加");
            }
        }
    }
};

function setSelectByValue(d, b) {
    var c = $g(d);
    for (var a = 0; a < c.options.length; ++a) {
        var e = c.options[a];
        e.selected = e.value == b;
    }
}

function showVerifyCode(c, e, d, h) {
    if (c == null) {
        c = "spVerCode";
    }
    if (e == null) {
        e = "spVerCodeMsg";
    }
    if (d == null) {
        d = "imgVerCode";
    }
    if (h == null) {
        h = "spChgVerCode";
    }
    var b = $j(c);
    var g = $j(e);
    var f = $j(h);
    if (b.html() == "") {
        g.html("正在加载验证码...");
        g.show();
        b.html("<img src='/Tools/ValidCode.aspx' style='display:none;' id='" + d + "' alt='验证码' />");
    }
    var a = $j(d);
    a.load(function () {
        g.hide();
        a.show();
        f.show();
    });
}

function changeVerCode(c, d) {
    if (c == null) {
        c = "imgVerCode";
    }
    if (d == null) {
        d = "spVerCodeMsg";
    }
    var b = $j(c);
    var a = $j(d);
    a.html("正在刷新验证码...").show();
    b.attr({
        src: "/Tools/ValidCode.aspx?x=" + Math.random(),
        alt: "验证码"
    });
    b.hide();
    b.load(function () {
        a.hide();
        b.show();
    });
}

function showProc(a, b) {
    var c = $j("imgProc");
    if (b == null) {
        b = true;
    }
    if (b) {
        $(a).hide();
        if (c.length > 0) {
            c.remove();
        }
        $("<img src='" + SKIN_PATH + "img/processing.gif' id='imgProc' alt='正在处理' />").insertAfter(a);
    } else {
        $(a).show();
        c.remove();
    }
}

function enlarge(a, e) {
    if (a == null) {
        a = true;
    }
    if (e == null) {
        e = "Content";
    }
    var c = $j(e);
    var b = parseInt(c.css("font-size"));
    var d = a ? b * 1.2 : b / 1.2;
    c.css("font-size", d + "px");
}

function altRow(e, a, h, b) {
    var g = $tag(a, "tr");
    for (var f = e; f < g.length; ++f) {
        var d;
        if (f % 2 == 0) {
            d = b;
        } else {
            d = h;
        }
        if (typeof d == "object") {
            for (var c in d) {
                g[f].style[c] = d[c];
            }
        } else {
            g[f].className = d;
        }
    }
}

function getCheckedVal(a, b) {
    if (b == null) {
        b = -1;
    }
    var e = $j(a).find("input:checked");
    var c = "";
    var d = false;
    e.each(function (f) {
        if (f > b) {
            if (d) {
                c += ",";
            }
            c += $(this).val();
            d = true;
        }
    });
    return c;
}

function checkAll(a, c) {
    var b = $j(c).find("input[type=checkbox]");
    b.each(function (d) {
        this.checked = a.checked;
    });
}

function GetSearchURL(g, d) {
    if (d == null) {
        d = getIntactRawUrl();
    }
    var b = g.split("|");
    for (var h = 0; h < b.length; h++) {
        var e = b[h].split(",");
        var c;
        var a = document.getElementById(e[0]);
        if (e.length == 2) {
            c = e[1];
        } else {
            c = e[0];
        }
        if (a != null) {
            var f = a.value;
            if (f != null) {
                d += "&" + c + "=" + encodeURIComponent(f);
            }
        }
    }
    return d;
}

function SearchObjectByGet(a, d, c) {
    if (c == null) {
        c = false;
    }
    var b = GetSearchURL(a, d);
    if (c) {
        return b;
    }
    window.location.href = b;
}

function SearchObjects(a, c) {
    if (a == "请填写关键词" || a == "请输入关键词") {
        $a("您还没有输入关键词，请填写后查询。");
        return;
    }
    if (c == "product") {
        var b = "/Search/Index.aspx?objtype=product&kwd=" + escape(a);
        window.location.href = b;
    } else {
        var b = "/Search/News.aspx?objtype=news&kwd=" + escape(a);
        window.location.href = b;
    }
}

function GoToURL(a, c) {
    var b;
    b = SetURLField(b, a, c);
    location.href = b;
}

function GoToURLByGet(a, c) {
    var b;
    b = location.href;
    b = SetURLField(b, "page", "1");
    b = SetURLField(b, a, c);
}

function SetURLField(e, d, a) {
    var f;
    f = e.indexOf("?");
    if (f == -1) {
        e += "?" + d + "=" + a;
    } else {
        var b = d + "=";
        var c = e.indexOf(b);
        if (c != -1) {
            c += b.length;
            end = e.indexOf("&", c);
            if (end == -1) {
                e = e.substring(0, c) + a;
            } else {
                e = e.substring(0, c) + a + e.substring(end);
            }
        } else {
            e = e + "&" + d + "=" + a;
        }
    }
    return e;
}

function readURLParameter(c) {
    var a = c + "=";
    var e = "";
    var d = location.href;
    var b = d.indexOf(a);
    if (b != -1) {
        b += a.length;
        end = d.indexOf("&", b);
        if (end == -1) {
            e = d.substring(b);
        } else {
            e = d.substring(b, end);
        }
    }
    return e;
}

function focusToRemoveText(a) {
    var b = $(a);
    var c = b.attr("hadfocused") == "1";
    if (!c) {
        b.val("");
        b.attr("hadfocused", "1");
    }
}

function SUR_ShowTable(d) {
    var c = "";
    var a;
    switch (d.SelectionMode) {
        case 1:
            a = "radio";
            break;

        case 2:
            a = "checkbox";
            break;
    }
    switch (d.ShowMode) {
        case 1:
            c = '<div class="survey_1" style="width:' + d.Width + 'px;"><div class="sur_tit" style="width:' + (d.Width - 2) + 'px;">' + d.Title + '</div><table class="sur_tab" id="SUR_itemTab_' + d.SubjectId + '">';
            for (var f = 0; f < d.Items.length; ++f) {
                var b = d.Items[f];
                var e = "SUR_item_" + d.SubjectId + f;
                c += '<tr><td><input name="SUR_item' + d.SubjectId + '" type="' + a + '" value="' + b.id + '" id="' + e + '" /></td><td><label for="' + e + '">' + b.title + "</label></td></tr>";
            }
            c += '</table><div class="bot_btn2"><input type="button" value="提交" class="b15" onclick="SUR_senddata(this,' + d.ObjectName + ')" /><input type="button" onclick="window.open(\'/tools/survey.aspx?oid=' + d.SubjectId + '\')" value="查看" class="b16" /></div></div>';
            break;
    }
    document.write(c);
}

function SUR_senddata(d, e) {
    var a = "SUR_post_msg_" + e.SubjectId;
    var b = "<span id='" + a + "'>正在提交,请稍后...</span>";
    var f = "/ajax.ashx?action=Survey&t=" + Math.random();
    var c = getCheckedVal("SUR_itemTab_" + e.SubjectId);
    if (c == null || c.length == 0) {
        $a("您至少需要选中一个投票项。");
        return;
    }
    $(d).after(b).hide();
    $.post(f, {
        _SUR_SubjectID: e.SubjectId,
        _CheckedItems: c
    }, function (g) {
        var h = gav(g, "state");
        var j = gav(g, "msg");
        if (h == "1") {
            $confirm("投票成功，感谢您的参与。", {
                title: "确定",
                toDo: function () {
                    hideConfirm();
                }
            }, {
                title: "查看结果",
                toDo: function () {
                    window.open("/tools/survey.aspx?oid=" + e.SubjectId);
                    hideConfirm();
                }
            });
        } else {
            $a(j);
        }
        $j(a).remove();
        $(d).show();
    });
}

function LEW_ShowTable() {
    var a = '<div class="reports" id="LEAVEWORD_cntr" style="margin:0 auto 10px auto;"><h1>留言</h1><table id="LEAVEWORD_tab"><tr><th>* 标题：</th><td><input type="text" size="40" id="LEAVEWORD_txtTitle" /></td></tr><tr><th>* 联系人：</th><td><input type="text" size="10" id="LEAVEWORD_txtContact" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="30" id="LEAVEWORD_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="30" id="LEAVEWORD_txtMobile" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="30" id="LEAVEWORD_txtEmail" /></td></tr><tr><th>* 留言分类：</th><td id="LEAVEWORD_tdCats"></td></tr><tr><th>留言内容：</th><td><textarea style="width:230px;height:80px;" id="LEAVEWORD_txtShortDesc"></textarea></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="提交" class="b15" onclick="sendLeaveword(this)" /> </td></tr></table></div>';
    document.write(a);
    fillLeavewordCategories();
}

function PAY_ShowTable() {
    var a = '<div class="reports" id="DIR_PAY_cntr" style="margin:0 auto 10px auto;"><h1>付款</h1><table id="DIR_PAY_tab" style="background:url(' + SKIN_PATH + 'img/Pay_ico.gif) no-repeat right top;width:400px;"><tr><tr><th>* 付款方式：</th><td><select id="DIR_PAY_ddlPayment"><option value="">请选择</option><option value="alipay">支付宝</option><option value="99bill">快钱</option></select></td></tr><th>* 付款人：</th><td><input type="text" size="20" id="DIR_PAY_txtPayer" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="20" id="DIR_PAY_txtEmail" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="20" id="DIR_PAY_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="20" id="DIR_PAY_txtMobile" /></td></tr><tr><th>我公司业务员姓名：</th><td><input type="text" size="20" id="DIR_PAY_txtSalesManName" /></td></tr><tr><th>* 付款金额：</th><td><input type="text" size="10" id="DIR_PAY_txtMoney" /></td></tr><tr><th>* 款项用途：</th><td><input type="text" size="40" id="DIR_PAY_txtUse" /></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="提交" class="b15" onclick="directPay(this)" /> </td></tr></table></div>';
    document.write(a);
}

function LoginCheck(b, a) {
    var c = window.location;
    if (b == undefined || b.length == 0) {
        $a("请输入用户名", "错误提示", "txtUsername");
        return;
    }
    if (a == undefined || a.length == 0) {
        $a("请输入密码", "错误提示", "txtPassword");
        return;
    }
    $.post("/ajax.ashx?action=logincheck&t=" + Math.random(), {
        username: b,
        password: a
    }, function (d) {
        if (gav(d, "state") == "1") {
            $a(gav(d, "msg"));
            window.location.href = c;
        } else {
            $a(gav(d, "msg"));
        }
    });
}

function xuanze() {
    var a = document.getElementById("seachkeywords").value;
    if (a == "请输入关键词搜索") {
        a = "";
    }
    window.location.href = "/Search/Index.aspx?objtype=product&kwd=" + a;
}

$(function () {
    $("#seachkeywords").val("请输入关键词搜索").css({
        color: "#666"
    });
    $("#seachkeywords").click(function () {
        $(this).val("").css({
            color: "#000"
        });
    }).blur(function () {
        if ($.trim($(this).val()) == "") {
            $(this).val("请输入关键词搜索").css({
                color: "#666"
            });
        }
    });
});

function ChangeFontSize(b, a) {
    $(b).addClass("cur").siblings("a").removeClass("cur");
    $j("cntrBody").css("font-size", a).find("*").css("font-size", a);
}

function getUrlParms() {
    var e = new Object();
    var b = location.search.substring(1);
    var a = b.split("&");
    for (var f = 0; f < a.length; f++) {
        var c = a[f].indexOf("=");
        if (c == -1) {
            continue;
        }
        var d = a[f].substring(0, c);
        var g = a[f].substring(c + 1);
        e[d] = unescape(g);
    }
    return e;
}

function helpLoad() {
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    getHelpStatic(OBJ_ID);
    helpSelectCurrentPosition();
}

function helpSelectCurrentPosition() {
    var a = window.location.href.substring(window.location.href.lastIndexOf(".") + 1).toLowerCase(); 
    if (a != "html") {
        $(".nr h4[sid='" + SID + "']").addClass("cur0");
        $(".nr li[sid='" + SID + "']").addClass("cur");
    } else {
        if (!$(".nr .cur").size()) {
            $(".nr h4[sid='" + SID + "']").addClass("cur0");
            $(".nr li[sid='" + SID + "']").addClass("cur");
        }
    }
}

function newsLoad() {
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    writeComment(OBJ_ID, MARK);
    getLastArticle();
    getHistory(MARK);
    addHistory(OBJ_ID, MARK);
    getNewProduct();
}

function newsSelectCurrentPosition() {
    $(".leib h4[sid='" + SID + "'],.leib li[sid='" + SID + "']").addClass("cur");
}

function productLoad() {
    productSelectCurrentPosition(SID);
    hits(ProductID, "product");
    writeComment(ProductID, MARK);
    addHistory(ProductID, MARK);
    initImages(ProductID);
    getHistory("product");
    getRecommentProductByHistory(ProductID);
    getRelevantViewed(ProductID);
    for (var a = 0; a < ARR_AD_MARK.length; ++a) {
        getAd(ARR_AD_MARK[a], "cntrAd_" + a);
    }
    checkSize();
}
function productSelectCurrentPosition(a) {
    $(".list_con h3[sid='" + a + "'],.list_con h5[sid='" + a + "'],.list_con li[sid='" + a + "']").addClass("cur");
}

function projectSelectCurrentPosition(a) {
    $(".cp_l h3[sid='" + a + "'],.nr h5[sid='" + a + "'],.pro_l li[sid='" + a + "']").addClass("cur");
}
function agentLoad() {
    agentSelectCurrentPosition(SID);
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    getAgentHelpStatic(OBJ_ID);
    getAd(MARK, "cntrAd");
}
function agentSelectCurrentPosition(a) {
    $(".nr h4[sid='" + a + "'],.nr li[sid='" + a + "']").addClass("cur0");
}
function downLoad() {
    hits(DownloadID, "download");
    writeComment(DownloadID, MARK);
    addHistory(DownloadID, MARK);
    getHistory("download");
    getRelevantViewedDownload(DownloadID);
}

function projectLoad() {
    projectSelectCurrentPosition(SID);
    hits(ProjectID, "project");
    writeComment(ProjectID, MARK);
    addHistory(ProjectID, MARK);
    getVideo(VIDEO_KEY);
    getHistory("project");
    getRecommentProjectByHistory(ProjectID);
    getRelevantViewedProject(ProjectID);
    for (var a = 0; a < ARR_AD_MARK.length; ++a) {
        getAd(ARR_AD_MARK[a], "cntrAd_" + a);
    }
    checkSize();
}

function getTaoCanPrice(a) {
    $.post("/ajax.ashx?action=getTaoCanPrice&t=" + Math.random(), {
        IDList: a
    }, function (d) {
        var c = gav(d, "OldPrice");
        var b = gav(d, "NowPrice");
        $j("OldPrice").html(c);
        $j("NowPrice").html(b);
    });
}

function ShowTaoCanProduct() {
    $(document).ready(function () {
        $(".cbox").find("input").click(function () {
            var b = new Array();
            b = $("#txtIDList").attr("value").split(",");
            var c = b[0];
            if (!this.checked) {
                $(".tao_rt").find("a[id=" + this.value + "]").hide();
                $(".tao_rt").find("a[id=" + this.value + "]").prev().hide();
                for (var a = 0; a < b.length; a++) {
                    if (this.value != b[a] && b[a] != b[0] && this.value != b[a]) {
                        c = c + "," + b[a];
                    }
                }
            } else {
                $(".tao_rt").find("a[id=" + this.value + "]").show();
                $(".tao_rt").find("a[id=" + this.value + "]").prev().show();
                c = $("#txtIDList").attr("value") + "," + this.value;
            }
            $("#txtIDList").val(c);
            $("#TCount").html($("#txtIDList").attr("value").split(",").length);
            getTaoCanPrice(c);
        });
    });
}

function initCommonHeader() {
    $.get("/ajax.ashx?action=initcommonheader&t=" + Math.random(), function (c) {
        var b = gav(c, "username");
        var a = gav(c, "usermenu");
        var d = gav(c, "myphoto");
        if (b.length > 0) {
            $("#guest").hide();
            $("#user").show();
            $j("commonHeaderGuest").hide();
            $j("commonHeaderUsername").html(b);
            $j("commonHeaderUsermenu").html(a);
            $j("commonHeaderUserPhoto").attr("src", d);
            $j("commonHeaderUser").fadeIn(80);
        }
    });
}

function checkSize() {
    $(document).ready(function () {
        $(".pro_kuang").find("li").click(function () {
            $(this).parent().find("a").removeClass();
            $(this).find("a").addClass("img");
        });
    });
}

function checkWishSize(c) {
    $(c).parent().find("a").removeClass();
    $(c).addClass("clicked");
    if ($("#txtAttr").html() == "") {
        $("#txtAttr").append($(c).attr("title"));
    } else {
        var d = new Array();
        d = $("#txtAttr").html().split(",");
        for (var a = 0; a < d.length; a++) {
            var e = d[a].split(":")[0];
            var g = $(c).attr("title").split(":")[0];
            var f = $(c).attr("title").split(":")[1];
            var b = e + ":" + f;
            if (e == g) {
                $("#txtAttr").html($("#txtAttr").html().replace(d[a], b));
                return;
            }
        }
        $("#txtAttr").append("," + $(c).attr("title"));
    }
}

function getAttrValesPhotos(a) {
    $.post("/ajax.ashx?action=attrValuesPhotos&t=" + Math.random(), {
        oid: a
    }, function (b) {
        $j("img_list").html(b);
    });
}

function switchProdTab(b) {
    var d = $(b);
    var c = d.attr("target_id");
    var a = d.parent().find("a[class=cr]");
    if (a.attr("target_id") == c) {
        return;
    }
    a.removeClass("cr");
    d.addClass("cr");
    $j("cntrRelevantProd>div").hide();
    $j(c).show();
}

function keepUsername(b, c) {
    var a = $j(c).attr("value");
    if (b != null && a != undefined) {
        if (b) {
            $cookie("__oran__k_username", a, 99999999999);
        } else {
            $cookie("__oran__k_username", false);
        }
        return;
    }
    if (!$j("chkKeep").attr("checked")) {
        return;
    }
    if (a != undefined) {
        $cookie("__oran__k_username", a, 99999999999);
    }
}

function toggleJobDetail(b, a) {
    var c = $(b).parent().next();
    var d = $(b).parent();
    if (c.is(":visible")) {
        c.slideUp(80);
        d.css({
            background: "url(" + a + "img/ico14.gif) no-repeat 0 5px"
        });
    } else {
        c.slideDown(80);
        d.css({
            background: "url(" + a + "img/ico13.gif) no-repeat 0 5px"
        });
    }
}

function showAllColumns(a) {
    if (a == null) {
        a = true;
    }
    if (a) {
        showFullBg();
    }
    setCM("prod_all_columns");
    relocation("prod_all_columns");
}

function hideAllColumns(a) {
    if (a == null) {
        a = true;
    }
    if (a) {
        hideFullBg();
    }
    $j("prod_all_columns").fadeOut(80);
}

function showBgProc(c, b) {
    if (b == null) {
        b = "正在处理...";
    }
    var d = "oran_div_processing";
    var a = $j(d);
    if (a.length == 0) {
        $(document.body).append("<div id='" + d + "'><p><img src='" + SKIN_PATH + "img/processing_2.gif' id='imgProc' alt='" + b + "' /></p><p class='mt10'>" + b + "</p></div>");
    }
    a = $j(d);
    if (c == null) {
        c = true;
    }
    if (c) {
        showFullBg("oran_full_bg_2");
        setCM(d);
        relocation(d);
        a.fadeIn(80);
    } else {
        a.fadeOut(80);
        hideFullBg("oran_full_bg_2");
    }
}

function gav(b, c) {
    var a = $(b);
    var d = $(a.find("node[key=" + c + "]")).text();
    return d;
}

function sc(b, a) {
    b.attr("class", a);
}

function ddlSecQus_Changed(a, b) {
    if (b == null) {
        b = "txtSecQus";
    }
    var c = $j(b);
    if (a.value == "") {
        c.show();
        c.attr("value", "").focus();
    } else {
        c.hide();
    }
    c.attr("value", a.value);
}

function showMyAddress(b) {
    if (b == null) {
        b = true;
    }
    if (b) {
        showFullBg("oran_full_bg", false);
    }
    var a = $("#divCartMyAddr > iframe");
    a.attr("src", "layer/MyAddress.aspx");
    setCM("divCartMyAddr");
}

function hideMyAddress() {
    top.window.hideFullBg("oran_full_bg");
    $(top.window.document).find("#divCartMyAddr").fadeOut(80);
}

function setMyAddr(h) {
    var g = $(h).parent().parent().parent();
    var d = g.find("span[name=chnName]").html();
    var a = g.find("span[name=province]").html();
    var b = g.find("span[name=city]").html();
    var f = g.find("span[name=address]").html();
    var j = g.find("span[name=zipCode]").html();
    var c = g.find("span[name=tel]").html();
    var k = g.find("span[name=mobile]").html();
    var e = g.find("span[name=email]").html();
    var w = $(top.window.document);
    w.find("#txtAddrName").val(d);
    w.find("#txtInvoiceTitle").val(d);
    w.find("#txtEmail").val(e);
    w.find("#txtAddrAddr").val(f);
    w.find("#txtAddrZip").val(j);
    w.find("#txtAddrTel").val(c);
    w.find("#txtAddrMobile").val(k);
    $(top.window.document).find("#regionAddr_hdnPrtRegion").val(a);
    $(top.window.document).find("#regionAddr_hdnChdRegion").val(b);
    top.window.regionAddr_initSelectedItems();
    hideMyAddress();
}

function checkPinForm() {
    var a = $j("txtNewPin").val();
    var c = $j("txtSecAsr").val();
    var b = $j("txtNewEmail").val();
    if (a.length == 0 && c == 0 && b.length == 0) {
        $a("未有任何修改项", 2);
        return false;
    } else {
        return true;
    }
}

function switchOrderTab(b) {
    var a = $j("ulOrderTypeTabs");
    a.find("a").removeClass("cur b cblack f14");
    $(b).addClass("cur b cblack f14").blur();
}

function searchOrder() {
    var c = $tv("txOrderNo");
    var d = $tv("txtStartDate");
    var b = $tv("txtEndDate");
    var a = $tv("ddlOrderStates");
    var f = $("#ulOrderTypeTabs").find(".cur").attr("ordertype");
    if (c.length == 0 && d.length == 0 && b.length == 0 && a.length == 0) {
        $a("至少需要一个查询条件。");
        return;
    }
    var e = false;
    var g = "orderlist.aspx?";
    if (c.length > 0) {
        g += "no=" + c;
        e = true;
    }
    if (d.length > 0) {
        if (e) {
            g += "&";
        }
        g += "start=" + d;
        e = true;
    }
    if (b.length > 0) {
        if (e) {
            g += "&";
        }
        g += "end=" + b;
        e = true;
    }
    if (a.length > 0) {
        if (e) {
            g += "&";
        }
        g += "state=" + a;
        e = true;
    }
    if (f != undefined && f.length > 0) {
        if (e) {
            g += "&";
        }
        g += "type=" + f;
        e = true;
    }
    location.href = g;
}

function searchFav() {
    var a = $tv("txtFavKwd");
    var b = $tv("ddlFavClns");
    var c = false;
    var d = "MyFavorites.aspx?";
    if (a.length > 0) {
        d += "kwd=" + encodeURI(a);
        c = true;
    }
    if (b.length > 0) {
        if (c) {
            d += "&";
        }
        d += "oid=" + b;
        c = true;
    }
    location.href = d;
}

function customizePriceRange(d) {
    var a = $(d).parent().find("input:eq(0)");
    var c = $(d).parent().find("input:eq(1)");
    var f = parseInt(a.val());
    var b = parseInt(c.val());
    var e = "/product/list.aspx?";
    if (!f) {
        f = 0;
    }
    if (!b) {
        b = 0;
    }
    if (f == 0 && b == 0) {
        $a("至少需要一个价格范围。");
        a.focus();
        return;
    }
    if (f > 0 && b > 0) {
        e += "PriceLower=" + f + "&PriceUpper=" + b;
    } else {
        if (f > 0) {
            e += "PriceUpper=" + f;
        } else {
            if (b > 0) {
                e += "PriceLower=" + b;
            }
        }
    }
    location.href = e;
}

function copyUrl(a) {
    var d = $j("div_nsw_copy_url");
    var c = location.href;
    if (d.length == 0) {
        var b = "<div id='div_nsw_copy_url'><h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_copy_url_bg')\"><img src='" + SKIN_PATH + "img/ico9_close.gif' /></a>拷贝链接地址</h1><div class='cont'><div>拷贝本URL从您的博客或者网站链接到本" + (a == "product" ? "产品" : "文章") + "</div><textarea>" + c + "</textarea><div><input type='button' value='拷贝地址' onclick='copyArticleUrl()' class='b13' /></div></div></div>";
        $(document.body).append(b);
    }
    setCM("div_nsw_copy_url");
    relocation("div_nsw_copy_url");
    showFullBg("div_nsw_copy_url_bg");
}

function copyArticleUrl() {
    var a = $("#div_nsw_copy_url .cont textarea").val();
    window.clipboardData.setData("Text", a);
    $a("本网页地址已复制到粘帖板。", 1);
}

function initImages(a) {
    var c = '<li {$co$}><a href="{$path$}" target="_blank" title="{$title$}"><img title="{$title$}" alt="{$title$}" longdesc="{$path$}" src="{$path$}"  width="60" height="60"></a></li>';
    var b = "";
    for (var d = 0; d < ARR_IMG_PATH.length; ++d) {
        if (d == 0) {
            b = c.replace(/\{\$co\$\}/gi, "class='now'").replace(/\{\$path\$\}/gi, ARR_IMG_PATH[d]).replace(/\{\$title\$\}/gi, OBJ_TITLE);
        } else {
            b += c.replace(/\{\$co\$\}/gi, "").replace(/\{\$path\$\}/gi, ARR_IMG_PATH[d]).replace(/\{\$title\$\}/gi, OBJ_TITLE);
        }
    }
    $("#img_list").html(b);
}

function setSelectedImg(a) {
    $(a).parent().find("a").removeClass("cur");
    $(a).addClass("cur");
}

function viewBigImage(c) {
    var a = window.location.host;
    var b = "/product/gallery.aspx?oid=" + c;
    if (a != "undefined") {
        b += "&selectedpath=http://" + a;
    }
    window.open(b);
}

function switchImage(b) {
    var d = $(".MagicZoom");
    var e = d.find("img:eq(0)");
    var a = $(".MagicZoomBigImageCont img");
    var c = $(b).find("img").attr("srcimg");
    d.attr("href", c);
    e.attr("src", c);
    a.attr("src", c);
    $j("btnShowOrgiImg").click(function () {
        window.open(c, "orgiImg");
    });
}

function initViewPhoto() {
    $j("imgBig").attr("src", $("#ulPhotos>li>a>img").attr("src"));
    $("#ulPhotos>li>a:eq(0)").addClass("cur");
    resetNextPrevious($("#ulPhotos>li>a:eq(0)").get());
}

function viewPhoto(a) {
    $j("imgBig").attr("src", $(a).find("img").attr("src"));
    $("#ulPhotos>li>a").removeClass("cur");
    $(a).addClass("cur").blur();
    resetNextPrevious(a);
}

function resetNextPrevious(c) {
    var a = $(c).parent().prev();
    if (a.length == 0) {
        a = $("#ulPhotos>li:last");
    }
    var b = $(c).parent().next();
    if (b.length == 0) {
        b = $("#ulPhotos>li:first");
    }
    $j("btnPrev").removeAttr("onclick").click(function () {
        viewPhoto(a.find("a").get());
    });
    $j("btnNext").removeAttr("onclick").click(function () {
        viewPhoto(b.find("a").get());
    });
}

function mailArticle(b, d) {
    var c = $j("mailArticle");
    if (c.length == 0) {
        var a = "<div id='mailArticle'><iframe src='/private/SendNewsToYourFriends.aspx?oid=" + d + "' frameborder='0'></iframe></div>";
        $(document.body).append(a);
    }
    setCM("mailArticle");
    showFullBg("mailArticle_bg", null, null, null, null, null, function () {
        $("#mailArticle iframe").css("visibility", "visible");
    });
    relocation("mailArticle");
}

function mailProduct(b, a) {
    $j("mailArticle").html("<iframe src='/private/SendProductToYourFriends.aspx?oid=" + a + "' frameborder='0'></iframe>");
    setCM("mailArticle");
    showFullBg("mailArticle_bg", null, null, null, null, null, function () {
        $("#mailArticle iframe").css("visibility", "visible");
    });
    relocation("mailArticle");
}

function mailDownload(b, a) {
    $j("mailArticle").html("<iframe src='/private/SendDownloadToYourFriends.aspx?oid=" + a + "' frameborder='0'></iframe>");
    setCM("mailArticle");
    showFullBg("mailArticle_bg", null, null, null, null, null, function () {
        $("#mailArticle iframe").css("visibility", "visible");
    });
    relocation("mailArticle");
}

function hideMailAtricle() {
    $(top.document.getElementById("mailArticle")).fadeOut(80);
    $(top.document.getElementById("mailArticle_bg")).fadeOut(80);
    top.showDdl();
}

function contractExtend(d, a) {
    var f = $(d);
    var b = f.parent().next();
    var c;
    var e;
    if (f.attr("alt") == "收缩") {
        c = "展开";
        e = "img/ico15_.gif";
        b.slideUp(80);
    } else {
        c = "收缩";
        e = "img/ico15.gif";
        b.slideDown(80);
    }
    f.attr({
        src: a + e,
        alt: c
    });
}

function showLayer(b, a, c) {
    setCM(b);
    relocation(b);
    showFullBg(a, null, null, null, null, null, c);
}

function hideLayer(a, b) {
    $j(a).fadeOut(80);
    hideFullBg(b);
}

function hideAdvanNewsSearch() {
    $(top.document).find("#div_nsw_news_advan_cntr").fadeOut(80);
    $(top.document).find("#div_nsw_news_advan_bg").fadeOut(80);
    top.showDdl();
}

function advanNewsSearch() {
    var a = "/search/news.aspx?type=";
    a += $g("rdoFuzzy").checked ? "1" : "2";
    top.location.href = SearchObjectByGet("ddlFields,tg|ddlNewsColumns2,sid|txtKwd,kwd|txtStartDate,start|txtEndDate,end", a, true);
}

function contractExtendProdColumn(d, a) {
    var f = $(d);
    var b = f.parent().parent().next();
    var c;
    var e;
    if (f.attr("alt") == "收缩") {
        c = "展开";
        e = "img/ico14.gif";
        b.slideUp(80);
    } else {
        c = "收缩";
        e = "img/ico13.gif";
        b.slideDown(80);
    }
    f.attr({
        src: a + e,
        alt: c
    });
}

function resetOrderList(b) {
    var a = b.lastIndexOf("/");
    b = b.substring(a + 1);
    var c = $j("ddlOrderBy").find("option");
    c.each(function (d) {
        if ($(c[d]).attr("value") == b) {
            $(c[d]).attr("selected", "selected");
        }
    });
}

function initNextPre() {
    var a = $j("pagerMain").find("a[class=oran_pg_pp]");
    if (a.length == 0) {
        $j("btnPrePage").click(function () {
            $a("这已是第一页。");
        });
    } else {
        var b = a.attr("href");
        $j("btnPrePage").click(function () {
            location.href = b;
        });
    }
    var c = $j("pagerMain").find("a[class=oran_pg_np]");
    if (c.length == 0) {
        $j("btnNextPage").click(function () {
            $a("这已是最后一页。");
        });
    } else {
        var d = c.attr("href");
        $j("btnNextPage").click(function () {
            location.href = d;
        });
    }
}

function increaseScroll(b) {
    var c = 1;
    var a = setInterval(function () {
        if (c > 320) {
            window.clearInterval(a);
        }
        $g("img_list").scrollLeft += 14;
        c += 14;
    }, 1);
}

function decreaseScroll(b) {
    var c = 1;
    var a = setInterval(function () {
        if (c > 320) {
            window.clearInterval(a);
        }
        $g("img_list").scrollLeft -= 14;
        c += 14;
    }, 1);
}

function payadScroll(c, d, a) {
    var b = $j("payad_" + d);
    var e = $j("payad_" + c);
    if (b.length == 0) {
        b = $j("payad_" + a);
    }
    e.fadeOut("80", function () {
        b.show();
    });
}

function showReport(a) {
    var b = $j("RPT_cntr");
    if (b.length == 0) {
        var c = '<div class="reports" id="RPT_cntr"><h1><a href="javascript:void(0)" onclick="$closeLayer(\'RPT_cntr\',\'RPT____BG\')" class="close2"><img src="' + SKIN_PATH + 'img/close2.gif" alt="关闭" title="关闭" /></a>报告/纠错/举报</h1><table id="RPT_tab"><tr><th>被报告网站标题：</th><td><input type="text" size="40" disabled="disabled" value="' + document.title + '" /></td></tr><tr><th>被报告网址：</th><td><input type="text" size="40" disabled="disabled" value="' + document.URL + '" /></td></tr><tr><th>* 报告类型：</th><td id="RPT_tdCats"></td></tr><tr><th>联系人：</th><td><input type="text" size="10" id="RPT_txtContact" /></td></tr><tr><th>电子邮箱地址：</th><td><input type="text" size="30" id="RPT_txtEmail" /></td></tr><tr><th>报告内容简要描述：</th><td><textarea style="width:230px;height:80px;" id="RPT_txtShortDesc"></textarea></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="关闭" class="b18 fr" onclick="$(\'#RPT_cntr>h1>a\').click()" /> <input type="button"  value="提交" class="b15" onclick="sendReprots(this)" /> </td></tr></table></div>';
        $(document.body).append(c);
        fillReportCategories();
    }
    b.show();
    showFullBg("RPT____BG", null, null, null, null, null, function () {
        $j("RPT_cats").css("visibility", "visible");
    });
    setCM("RPT_cntr");
    relocation("RPT_cntr");
}

function showLeaveword(a) {
    var b = $j("LEAVEWORD_cntr");
    if (b.length == 0) {
        var c = '<div class="reports" id="LEAVEWORD_cntr"><h1><a href="javascript:void(0)" onclick="$closeLayer(\'LEAVEWORD_cntr\',\'LEAVEWORD____BG\')" class="close2"><img src="' + SKIN_PATH + 'img/close2.gif" alt="关闭" title="关闭" /></a>留言</h1><table id="LEAVEWORD_tab"><tr><th>* 标题：</th><td><input type="text" size="40" id="LEAVEWORD_txtTitle" /></td></tr><tr><th>* 联系人：</th><td><input type="text" size="10" id="LEAVEWORD_txtContact" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="30" id="LEAVEWORD_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="30" id="LEAVEWORD_txtMobile" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="30" id="LEAVEWORD_txtEmail" /></td></tr><tr><th>* 留言分类：</th><td id="LEAVEWORD_tdCats"></td></tr><tr><th>留言内容：</th><td><textarea style="width:230px;height:80px;" id="LEAVEWORD_txtShortDesc"></textarea></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="关闭" class="b18 fr" onclick="$(\'#LEAVEWORD_cntr>h1>a\').click()" /> <input type="button"  value="提交" class="b15" onclick="sendLeaveword(this)" /> </td></tr></table></div>';
        $(document.body).append(c);
        fillLeavewordCategories();
    }
    b.show();
    showFullBg("LEAVEWORD____BG", null, null, null, null, null, function () {
        $j("LEAVEWORD_cats").css("visibility", "visible");
    });
    setCM("LEAVEWORD_cntr");
    relocation("LEAVEWORD_cntr");
}

function showDirectPay(a) {
    var b = $j("DIR_PAY_cntr");
    if (b.length == 0) {
        var c = '<div class="reports" id="DIR_PAY_cntr"><h1><a href="javascript:void(0)" onclick="$closeLayer(\'DIR_PAY_cntr\',\'DIR_PAY____BG\')" class="close2"><img src="' + SKIN_PATH + 'img/close2.gif" alt="关闭" title="关闭" /></a>付款</h1><table id="DIR_PAY_tab" style="background:url(' + SKIN_PATH + 'img/Pay_ico.gif) no-repeat right top;width:400px;"><tr><tr><th>* 付款方式：</th><td><select id="DIR_PAY_ddlPayment"><option value="">请选择</option><option value="alipay">支付宝</option><option value="99bill">快钱</option></select></td></tr><th>* 付款人：</th><td><input type="text" size="20" id="DIR_PAY_txtPayer" /></td></tr><tr><th>* 电子邮箱地址：</th><td><input type="text" size="20" id="DIR_PAY_txtEmail" /></td></tr><tr><th>联系电话：</th><td><input type="text" size="20" id="DIR_PAY_txtTel" /></td></tr><tr><th>手机号码：</th><td><input type="text" size="20" id="DIR_PAY_txtMobile" /></td></tr><tr><th>我公司业务员姓名：</th><td><input type="text" size="20" id="DIR_PAY_txtSalesManName" /></td></tr><tr><th>* 付款金额：</th><td><input type="text" size="10" id="DIR_PAY_txtMoney" /></td></tr><tr><th>* 款项用途：</th><td><input type="text" size="40" id="DIR_PAY_txtUse" /></td></tr><tr><th>&nbsp;</th><td><input type="button"  value="关闭" class="b18 fr" onclick="$(\'#DIR_PAY_cntr>h1>a\').click()" /> <input type="button"  value="提交" class="b15" onclick="directPay(this)" /> </td></tr></table></div>';
        $(document.body).append(c);
    }
    b.show();
    showFullBg("DIR_PAY____BG", null, null, null, null, null, function () {
        $j("DIR_PAY_ddlPayment").css("visibility", "visible");
    });
    setCM("DIR_PAY_cntr");
    relocation("DIR_PAY_cntr");
}

function showFav(a, h, e) {
    if (e == null) {
        e = location.pathname;
    }
    var d = "div_fav_cntr";
    var b = "/private/favorite.aspx?url=" + e + "&title=" + h;
    b = b.toLowerCase();
    var c = $j(d);
    if (c.length != 0) {
        c.remove();
    }
    var g = '<div style="z-index:99;position:absolute;" id="' + d + '"><iframe src="' + b + "\" frameborder='0'></iframe></div>";
    $(document.body).append(g);
    c = $j(d);
    var f = getObjectOffset(a);
    c.css({
        top: f.bottom - 130,
        left: f.right - 200
    });
}

function closeTopLayer(a) {
    var b = $(top.document).find("#" + a);
    b.fadeOut();
    top.hideFullBg();
}

function getObjectOffset(b) {
    var c = $(b);
    var a = c.offset();
    var d = {
        top: a.top,
        left: a.left,
        bottom: a.top + c.height(),
        right: a.left + c.width()
    };
    return d;
}



function ShowHelp(c) {
    var b = $j("div_nsw_show_help");
    if (b.length == 0) {
        var a = "<div id='div_nsw_show_help'><h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_show_help_bg')\"><img src='" + SKIN_PATH + "img/ico9_close.gif' /></a>帮助说明</h1><div class='cont'><textarea>" + c + "</textarea></div></div>";
        $(document.body).append(a);
    }
    setCM("div_nsw_show_help");
    relocation("div_nsw_show_help");
    showFullBg("div_nsw_show_help_bg");
}

function onclPrReAtts(d, h, c) {
    var a = false;
    $("#" + d).html(h);
    if (atts == null || atts == "") {
        atts = c + "," + h;
    } else {
        var f = new Array();
        f = atts.split("$");
        if (f.length <= 0) {
            atts = atts + "$" + c + "," + h;
        } else {
            atts = "";
            for (var g = 0; g < f.length; g++) {
                var b = "";
                var e = f[g].split(",");
                if (e.length == 2) {
                    b = e[1];
                    if (e[0] == c) {
                        b = h;
                        a = true;
                    }
                    if (atts == null || atts == "") {
                        atts = e[0] + "," + b;
                    } else {
                        atts = atts + "$" + e[0] + "," + b;
                    }
                }
            }
            if (a == false) {
                if (atts == null || atts == "") {
                    atts = c + "," + h;
                } else {
                    atts = atts + "$" + c + "," + h;
                }
            }
        }
    }
}

function switchAttrTab(a) {
    var b = $(a);
    if (b.attr("class") == "cur") {
        return;
    }
    var c = b.attr("item_name");
    $j("div__detail").hide();
    $j("div__attr").hide();
    $j("div__" + c).show();
    $(".prod_tab").find("a").removeClass("cur");
    b.addClass("cur");
}

function switchExtendAttrTab(b, c) {
    var g = b;
    var d = b.substring(b.length - 1, b.length);
    for (var e = 0; e < c; e++) {
        var f = "detailvalue" + e;
        var a = "detail" + e;
        if (d == e) {
            $j(f).show();
            $j(a).addClass("cur");
        } else {
            $j(f).hide();
            $j(a).removeClass();
        }
    }
}

function switchExtendContentTab(a, b, c) {
    var g = a;
    var d = a.substring(a.length - 1, a.length);
    for (var e = 0; e < b; e++) {
        var f = "contentvalue" + c + e;
        var h = "content" + c + e;
        if (d == e) {
            $j(f).show();
            $j(h).addClass("cur");
        } else {
            $j(f).hide();
            $j(h).removeClass();
        }
    }
}

$(function () {
    var e = 7;
    var m = 3;
    var a = 0;
    var k = 6;
    var b = 0;
    var d = 0;
    var p = 0;
    var s = "";
    var o = $("div.plc");
    var g = $("div.plc2");
    var u = $("div.pro_curmbs");
    var f = o.size() ? o : g;
    var n = f.size() ? f : u;
    var h = $("div.menu");
    var q = h.children("ul").children("li");
    var c = n.find("a");
    var l = c.size();
    var j = "cur";
    h.find("li").removeClass(j);
    var w = new Object();
    w.getCurrentURL = function () {
        switch (MARK) {
            case "product":
                s = m ? m : MARK;
                break;

            case "news":
                s = e ? e : MARK;
                break;

            case "project":
                s = b ? b : MARK;
                break;

            case "agent":
                s = a ? a : MARK;
                break;

            case "help":
                s = k ? k : MARK;
                break;

            case "download":
                s = d ? d : MARK;
                break;

            case "job":
                s = p ? p : MARK;
                break;

            default:
                s = 0;
                break;
        }
        return s;
    };
    w.firstLiCur = function () {
        h.find("li:first").addClass(j);
    };
    w.selectedCur = function () {
        q.children("a").each(function () {
            var x = $(this).attr("href").toLowerCase();
            x = x.substring(x.lastIndexOf("/") + 1);
            if (x == s) {
                $(this).parent("li").addClass(j);
                return false;
            } else {
                if (typeof s == "number") {
                    q.eq(s).addClass(j);
                    return false;
                }
            }
        });
    };
    w.selectedTxtCur = function () {
        q.children("a").each(function () {
            var x = $.trim($(this).text());
            if (x == r && r.indexOf("首页") == -1) {
                $(this).parent("li").addClass(j);
                return false;
            }
        });
        return h.children("ul").children("li." + j);
    };
    w.hasCur = function () {
        var x = h.children("ul").children("li." + j).size();
        return x;
    };
    if (typeof MARK == "undefined") {
        w.firstLiCur();
        return false;
    }
    if (!l) {
        s = w.getCurrentURL();
        w.selectedCur();
        return false;
    }
    for (var t = l - 1; t >= 0; t--) {
        s = c.eq(t).attr("href");
        var r = $.trim(c.eq(t).text());
        s = s.substring(s.lastIndexOf("/") + 1).toLowerCase();
        if (s == "" || s == undefined) {
            s = w.getCurrentURL();
        }
        var v = w.selectedTxtCur();
        if (v.size() && r.indexOf("首页") == -1) {
            v.parent("li").addClass(j);
            return false;
        } else {
            w.selectedCur();
            if (w.hasCur()) {
                return false;
            }
        }
    }
    if (!w.hasCur()) {
        s = MARK;
        w.selectedCur();
        if (!w.hasCur()) {
            w.firstLiCur();
        }
    } else { }
});

function removeProductInfoTags() {
    if (!$.trim($("div.pd_attr").text())) {
        $("div.pd_attr").remove();
    }
    if (!$.trim($("div.pd_short").text())) {
        $("div.pd_short").remove();
    }
}

function SetHome(a, b) {
    try {
        a.style.behavior = "url(#default#homepage)";
        a.setHomePage(b);
    } catch (d) {
        if (window.netscape) {
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
            } catch (d) {
                alert("抱歉！您的浏览器不支持直接设为首页。请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为“true”，点击“加入收藏”后忽略安全提示，即可设置成功。");
            }
            var c = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);
            c.setCharPref("browser.startup.homepage", b);
        } else {
            alert("抱歉，您的浏览器不支持自动设置首页, 请使用浏览器菜单手动设置!");
        }
    }
}

var flag = false;

function DrawImage(c, e, d, b) {
    var a = new Image();
    a.src = c.src;
    if (a.width > 0 && a.height > 0) {
        flag = true;
        if (a.width / a.height >= e / d) {
            if (a.width > e) {
                c.width = e;
                c.height = a.height * e / a.width;
            } else {
                c.width = a.width;
                c.height = a.height;
            }
            if (b == 1) {
                if (d > c.height && e > c.width) {
                    c.style.padding = (d - c.height) / 2 + "px 0 0 " + (e - a.width) / 2 + "px";
                } else {
                    if (d > c.height) {
                        c.style.padding = (d - c.height) / 2 + "px 0 0 0";
                    } else {
                        if (e > c.width) {
                            c.style.padding = "0 0 0 " + (e - c.width) / 2 + "px";
                        }
                    }
                }
            }
        } else {
            if (a.height > d) {
                c.height = d;
                c.width = a.width * d / a.height;
            } else {
                c.width = a.width;
                c.height = a.height;
            }
            if (b == 1) {
                if (d > c.height && e > c.width) {
                    c.style.padding = (d - c.height) / 2 + "px 0 0 " + (e - c.width) / 2 + "px";
                } else {
                    if (d > c.height) {
                        c.style.padding = (d - c.height) / 2 + "px 0 0 0";
                    } else {
                        if (e > c.width) {
                            c.style.padding = "0 0 0 " + (e - c.width) / 2 + "px";
                        }
                    }
                }
            }
        }
    }
}

function showIM(a) {
    if ($("#bodd").html() != "") {
        if (a == "True") {
            $("#bodd").show();
            $("#kefubtn").hide();
            $("#divOranIm").show();
        } else {
            $("#bodd").hide();
            $("#kefubtn").show();
            $("#divOranIm").hide();
        }
    }
}

function initCommonHeaderKeywords(a) {
    if (a == "") {
        a = "6";
    }
    $.post("/ajax.ashx?action=initcommonheaderkeywords&t=" + Math.random(), {
        s: a
    }, function (b) {
        $j("commonHeaderkeywords").html(b);
    });
}

function addToCart(h, e, c, g, d, b, f) {
    showProc(h);
    if (b == null) {
        b = false;
    }
    g = $j(g).html();
    d = $j(d).val();
    var a;
    if (c == null) {
        a = 1;
    } else {
        if (typeof c == "number") {
            a = c;
        } else {
            a = $tv(c);
        }
    }
    if (g == null) {
        g = "";
    }
    if (d == null) {
        d = "";
    }
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: e,
        quti: a,
        atts: g,
        pidlist: d
    }, function (k) {
        var l = gav(k, "msg");
        var j = gav(k, "count");
        var m = gav(k, "state");
        if (f != null) {
            location.href = f;
            return;
        }
        if (m != "1") {
            $a(l);
            showProc(h, false);
            return;
        }
        $confirm(l, {
            title: "去结算",
            toDo: "/paycenter/cart.aspx"
        }, {
            title: "再选购",
            toDo: function () {
                hideConfirm();
            }
        });
        $j("headerCartCount").html(j);
        if (b && gav(k, "state") == 1 && confirm("添加到购物车成功，是否马上刷新页面购物车页面？\r\n\r\n是 - 刷新本页面查看最新结果\r\n否 - 保留当前页面状态")) {
            location.href = "cart.aspx?t=" + Math.random();
            return;
        }
        showProc(h, false);
    });
}

function emptyCart(a) {
    showBgProc();
    $.get("/ajax.ashx?action=emptycart&t=" + Math.random(), function (b) {
        if (b == "1") {
            $a("清空购物车成功，单击确认返回产品中心。", 1, false, null, "消息", function () {
                location.href = "/product";
            });
        } else {
            $a("清空购物车失败，请稍候重试。");
        }
        showBgProc(false);
    });
}

function changeQuantity(b, d, a) {
    var c = $(b).parent().find("input").attr("value");
    if (!/^\d+$/.test(c)) {
        $a("数量必须是一个整数。");
        return;
    }
    if (parseInt(c) == 0) {
        $a("数量必须大于0，若要删商品，请点操作中的‘删除’。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: d,
        quti: c,
        atts: a
    }, function (e) {
        if (gav(e, "state") == "1") {
            if (confirm("数量修改成功，是否马上刷新页面查看购物车结果？\n\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
                location.href = "cart.aspx?t=" + Math.random();
            } else {
                showBgProc(false);
                $(b).hide();
            }
        } else {
            $a(e);
            showBgProc(false);
        }
    });
}

function delCartProduct(a, c, d) {
    showBgProc();
    var b = 0;
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: c,
        atts: d
    }, function (e) {
        if (gav(e, "state") == "1") {
            if (confirm("商品已删除，是否马上刷新页面查看结果？\n\n\r\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
                location.href = "cart.aspx?t=" + Math.random();
            }
        } else {
            $a(gav(e, "msg"));
        }
        showBgProc(false);
    });
}

function changeQuantity(a, c) {
    var b = $(a).parent().find("input").attr("value");
    if (!/^\d+$/.test(b)) {
        $a("数量必须是一个整数。");
        return;
    }
    if (parseInt(b) == 0) {
        $a("数量必须大于0，若要删商品，请点操作中的‘删除’。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: c,
        quti: b
    }, function (d) {
        if (gav(d, "state") == "1") {
            if (confirm("数量修改成功，是否马上刷新页面查看购物车结果？\n\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
                location.href = "cart.aspx?t=" + Math.random();
            } else {
                showBgProc(false);
                $(a).hide();
            }
        } else {
            $a(d);
            showBgProc(false);
        }
    });
}

function delCartProduct(a, c, d) {
    showBgProc();
    var b = 0;
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: c,
        atts: d
    }, function (e) {
        if (gav(e, "state") == "1") {
            if (confirm("商品已删除，是否马上刷新页面查看结果？\n\n\r\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
                location.href = "cart.aspx?t=" + Math.random();
            }
        } else {
            $a(gav(e, "msg"));
        }
        showBgProc(false);
    });
}

function cancelOrder(b, a) {
    showBgProc();
    $.post("/ajax.ashx?action=cancelorder&t=" + Math.random(), {
        no: a
    }, function (c) {
        if (gav(c, "state") == "1") {
            $(b).parent().parent().parent().find("td[name=orderstate]").html("已取消");
            $(b).hide();
        } else {
            $a("<p>取消订单操作失败。</p><p>非‘待审核’状态、已锁定等订单不可取消。</p>");
        }
        showBgProc(false);
    });
}

function delFavColumn(b, a) {
    showBgProc();
    $.post("/ajax.ashx?action=delfavfolumn&t=" + Math.random(), {
        oid: a
    }, function (c) {
        if (gav(c, "state") == "1") {
            $(b).parent().parent().fadeOut(80).remove();
        } else {
            $a("操作失败，请稍候重试。");
        }
        showBgProc(false);
    });
}

function delMyWish(a, b) {
    var c = getCheckedVal(b);
    if (c.length == 0) {
        $a("无选中项。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=delMyWishs&t=" + Math.random(), {
        ids: c
    }, function (e) {
        if (gav(e, "state") == "1") {
            var d = $j(b).find("input[name=item]:checked");
            d.each(function (f) {
                $(this).parent().parent().remove();
            });
        } else {
            $a(gav(e, "msg"));
        }
        showBgProc(false);
    });
}

function delMyDownloads(a, b) {
    var c = getCheckedVal(b);
    if (c.length == 0) {
        $a("无选中项。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=delMyDownloads&t=" + Math.random(), {
        ids: c
    }, function (e) {
        if (gav(e, "state") == "1") {
            var d = $j(b).find("input[name=item]:checked");
            d.each(function (f) {
                $(this).parent().parent().remove();
            });
        } else {
            $a(gav(e, "msg"));
        }
        showBgProc(false);
    });
}

function addFav(b, a, d, c) {
    if (d == null) {
        d = location.pathname;
    }
    if (a == null) {
        a = document.title;
    }
    $.post("/ajax.ashx?action=fav&t=" + Math.random(), {
        url: d,
        ptitle: a,
        column_id: c
    }, function (f) {
        var e = gav(f, "state");
        var g = gav(f, "msg");
        if (e == "1") {
            closeTopLayer("div_fav_cntr");
        } else {
            top.$a(g, "2");
            closeTopLayer("div_fav_cntr");
        }
    });
}

function delFav(a, b) {
    var c = getCheckedVal(b);
    if (c.length == 0) {
        $a("无选中项。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=delfav&t=" + Math.random(), {
        ids: c
    }, function (e) {
        if (gav(e, "state") == "1") {
            var d = $j(b).find("input[name=item]:checked");
            d.each(function (f) {
                $(this).parent().parent().remove();
            });
        } else {
            $a(gav(e, "msg"));
        }
        showBgProc(false);
    });
}

function hits(a, b) {
    $.post("/ajax.ashx?action=hits&t=" + Math.random(), {
        oid: a,
        mark: b
    });
}

function postComment(c, a, b) {
    showProc(c);
    var d = $tv("txtCmtContent");
    var e = $tv("txtCmtVerCode");
    if (d == "") {
        $a("内容必填。");
        showProc(c, false);
        return;
    }
    if ($g("txtVerCode") != null && s_verCode == "") {
        $a("验证码不可空。");
        showProc(c, false);
        return;
    }
    $.post("/ajax.ashx?action=postcomment&t=" + Math.random(), {
        content: d,
        oid: a,
        verCode: e,
        mark: b
    }, function (n) {
        var p = gav(n, "state");
        var o = gav(n, "msg");
        if (p == "") {
            $a(n, -1);
        } else {
            if (p == "2") {
                $a(o, 1);
                emptyText("tbCmt");
            } else {
                if (p == "1") {
                    var g = gav(n, "time");
                    var m = gav(n, "username");
                    var h = gav(n, "ip");
                    var r = gav(n, "comment");
                    var k = gav(n, "feedback");
                    var q = gav(n, "num");
                    var f = "<dl><dd>{$username$}<span class='ip'>IP：{$ip$}</span>时间：{$time$}</dd><dd class='c666 con mt8 mb10'>{$content$}</dd><dd class='huifu'><h5>管理员回复：</h5><div>{$feedback$}</div></dd></dl>";
                    var j = f.replace("{$username$}", m).replace("{$ip$}", h).replace("{$time$}", g).replace("{$feedback$}", k).replace("{$content$}", r);
                    var l = $j("divComments").html();
                    if (l == "暂无评论") {
                        l = "";
                    }
                    $j("divComments").html(j + l);
                    $j("spCommentCount").html(q);
                    $a(o, 1);
                    emptyText("tbCmt");
                } else {
                    $a(o);
                }
            }
        }
        showProc(c, false);
    });
}

function writeComment(a, b) {
    $.post("/ajax.ashx?action=getcomment&t=" + Math.random(), {
        oid: a,
        mark: b
    }, function (k) {
        var n = $(k).find("count").text();
        $j("spCommentCount").html(n);
        var g = $(k).find("comment");
        var e = "";
        var c = "<dl><dd>{$username$}<span class='ip'>IP：{$ip$}</span>时间：{$time$}</dd><dd class='c666 con mt8 mb10'>{$content$}</dd><dd class='huifu'><h5>管理员回复：</h5><div>{$feedback$}</div></dd></dl>";
        for (var l = 0; l < g.length; ++l) {
            var h = $(g[l]);
            var j = h.find("username").text();
            var m = h.find("content").text();
            var d = h.find("ip").text();
            var o = h.find("inputTime").text();
            var f = h.find("feedback").text();
            e += c.replace("{$username$}", j).replace("{$ip$}", d).replace("{$time$}", o).replace("{$content$}", m).replace("{$feedback$}", f);
        }
        if (e.length > 0) {
            $j("divComments").html(e);
        } else {
            $j("divComments").html("暂无评论");
        }
    });
}

function addHistory(a, b) {
    $.get("/ajax.ashx?action=addhistory&t=" + Math.random(), {
        oid: a,
        mark: b
    });
}

function getAd(b, a) {
    $.post("/ajax.ashx?action=getadd", {
        keyname: b
    }, function (c) {
        $j(a).html(c);
    });
}

function getVideo(a) {
    $.post("/ajax.ashx?action=getvideo", {
        videoKey: a
    }, function (c) {
        var b = $j("divVideo");
        if (c.length == 0) {
            b.slideUp(80);
        } else {
            b.html(c);
            $(".prod_attrs").toggleClass("prod_attrs").toggleClass("prod_attrs_b");
        }
    });
}

function getOrderAnns() {
    $.get("/ajax.ashx?action=getorderanns", function (a) {
        $j("divOrderAnns").html(a);
    });
}

function getEndingRemark() {
    $.get("/ajax.ashx?action=getendingremark", function (a) {
        $j("divEndingRemark").html(a);
    });
}

function getHistory(a) {
    $.post("/ajax.ashx?action=gethistory&t=" + Math.random(), {
        mark: a
    }, function (b) {
        if (b.length == 0) {
            b = "<li>&nbsp;&nbsp;无浏览历史</li>";
        }
        $j("divHistoryCntr").html(b + "<div class='clear'></div>");
    });
}

function getHits(a, b) {
    $.post("/ajax.ashx?action=gethits", {
        mark: b,
        oid: a
    }, function (c) {
        $j("cntrHits").html(c);
    });
}

function getHelpStatic(a) {
    $.post("/ajax.ashx?action=helpsatisfaction&t=" + Math.random(), {
        oid: a
    }, function (e) {
        var d = [parseInt(gav(e, "1")), parseInt(gav(e, "2")), parseInt(gav(e, "3"))];
        var b = d[0] + d[1] + d[2];
        if (b == 0) {
            b = 1;
        }
        var k = 100;
        for (var f = 0; f < d.length; ++f) {
            var j = (d[f] / b).toFixed(2);
            var g = k * j;
            if (g == 0) {
                g = 1;
            }
            var c = "<div class='static_graph' style='height:" + g + "px;'></div><div class='static_w'>" + (j * 100).toFixed(2) + "%</div>";
            $j("cntrStatic_" + f).html(c);
        }
    });
}

function submitHelpUse(a, c) {
    showProc(a);
    var b = $("input[name=use]:checked").val();
    $.post("/ajax.ashx?action=helpuseful&t=" + Math.random(), {
        oid: c,
        notion: b
    }, function (d) {
        if (gav(d, "state") == "0") {
            $a(gav(d, "msg"));
        } else {
            $a(gav(d, "msg"), 1);
            getHelpStatic(c);
        }
        showProc(a, false);
    });
}

function getSimilarArticle(a) {
    $.post("/ajax.ashx?action=getsmilararticle&t=" + Math.random(), {
        sid: a
    }, function (b) {
        $j("cntrSimilarArticle").html(b);
    });
}

function getLastArticle() {
    $.post("/ajax.ashx?action=getlastarticle", function (a) {
        $j("cntrLastArticle").html(a);
    });
}

function cleanHistory(b, a) {
    $.post("/ajax.ashx?action=cleanhistory", {
        mark: b
    }, function (c) {
        $j("divHistoryCntr").html("<li>&nbsp;&nbsp;无浏览历史</li>");
    });
}

function subscription(b, c) {
    if (c == null) {
        c = "txtSubscriptionEmail";
    }
    var a = $.trim($j(c).val());
    var d = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (a.length == 0) {
        $a("E-Mail 不可为空");
        $j(c).focus();
        return false;
    }
    if (!d.test(a)) {
        $a("E-Mail 格式错误。");
        $j(c).focus();
        return false;
    }
    showProc(b);
    $.post("/ajax.ashx?action=subscription&t=" + Math.random(), {
        email: a
    }, function (f) {
        var e = gav(f, "state");
        var g = gav(f, "msg");
        if (e == "1") {
            $a(g, 1);
        } else {
            $a(g);
        }
        showProc(b, false);
    });
}

function userFeedback(a) {
    var b = $tv("txtFdTitle");
    var c = $tv("txtFdShortDesc");
    if (b.length == 0 || c.length == 0) {
        $a("内容或标题不可为空。");
        return false;
    }
    showBgProc(true, "正在提交...");
    $.post("/ajax.ashx?action=userfeedback&t=" + Math.random(), {
        title: b,
        shortDesc: c
    }, function (e) {
        var d = gav(e, "state");
        var f = gav(e, "msg");
        if (d == "1") {
            showMsgPage("<li>您的意见提交成功，感谢您的意见，有您的支持，我们会做得更好。</li>", 1, "/user/faq.aspx", "意见/反馈", "/user/faq.aspx");
            return;
        } else {
            if (f.length > 0) {
                $a(f);
            } else {
                $a(e);
            }
        }
        showBgProc(false);
    });
}

function checkAuthority(b, a) {
    $.post("/ajax.ashx?action=checkauthority&t=" + Math.random(), {
        authIDs: b
    }, function (c) {
        if (c == "1") {
            $j("div___________Perm").hide();
            document.oncontextmenu = function () {
                return true;
            };
            document.onselectstart = function () {
                return true;
            };
        } else {
            showMsgPage("您不具有查看 " + a + " 的权限。");
            return;
        }
    });
}

function changeFavColumn(a, b) {
    var c = getCheckedVal(b);
    if (c.length == 0) {
        $a("无选中项。");
        return;
    }
    showProc(a);
    $.post("/ajax.ashx?action=changefavcolumn&t=" + Math.random(), {
        ids: c,
        targetId: a.value
    }, function (e) {
        var d = gav(e, "state");
        var f = gav(e, "msg");
        if (d == "1") {
            location.reload();
        } else { }
    });
    showProc(a, false);
}

function getRecommentProductByHistory(a) {
    $.post("/ajax.ashx?action=GetRecommentProductByHistory&t=" + Math.random(), {
        oid: a
    }, function (c) {
        var b = $j("divHistoryRecommentCntr");
        if (c.length == 0) {
            b.remove();
        } else {
            b.html(c);
        }
    });
}

function getRecommentProjectByHistory(a) {
    $.post("/ajax.ashx?action=GetRecommentProjectByHistory&t=" + Math.random(), {
        oid: a
    }, function (c) {
        var b = $j("divHistoryRecommentCntr");
        if (c.length == 0) {
            b.remove();
        } else {
            b.html(c);
        }
    });
}

function getRelevantSales(a) {
    $.post("/ajax.ashx?action=GetRelevantSales&t=" + Math.random(), {
        oid: a
    }, function (c) {
        var b = $j("divRelevantSalesCntr");
        if (c.length == 0) {
            b.remove();
        } else {
            b.html(c);
        }
    });
}

function getRelevantViewed(a) {
    $.post("/ajax.ashx?action=GetRelevantViewed&t=" + Math.random(), {
        oid: a
    }, function (c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
            b.remove();
        } else {
            b.html(c);
        }
    });
}

function getRelevantViewedProject(a) {
    $.post("/ajax.ashx?action=GetRelevantViewedProject&t=" + Math.random(), {
        oid: a
    }, function (c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
            b.remove();
        } else {
            b.html(c);
        }
    });
}

function getRelevantViewedDownload(a) {
    $.post("/ajax.ashx?action=GetRelevantViewedDownload&t=" + Math.random(), {
        oid: a
    }, function (c) {
        var b = $j("divRelevantViewedCntr");
        if (c.length == 0) {
            b.remove();
        } else {
            b.html(c);
        }
    });
}

function delInitationlog(a, b) {
    var c = getCheckedVal(b);
    if (c.length == 0) {
        $a("无选中项。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=DelInitationlog&t=" + Math.random(), {
        ids: c
    }, function (e) {
        if (gav(e, "state") == "1") {
            var d = $j(b).find("input[name=item]:checked");
            d.each(function (f) {
                $(this).parent().parent().remove();
            });
        } else {
            $a(gav(e, "msg"));
        }
        showBgProc(false);
    });
}

function sendInvitation(a) {
    var c = $j(a);
    var b = $j("txtEmail").val();
    if (b == null || b.length == 0) {
        $a("电子邮箱地址不可为空。");
        return;
    }
    if (!PTN_EMAIL.test(b)) {
        $a("电子邮箱地址格式不正确。");
        return;
    }
    showProc(a);
    $.post("/ajax.ashx?action=SendInvitation&t=" + Math.random(), {
        _email: b
    }, function (e) {
        var d = gav(e, "state");
        var f = gav(e, "msg");
        if (d == "1") {
            showMsgPage(f, 1, "/user/InviteUserList.aspx", "邀请函列表", "/user/InviteUserList.aspx");
        } else {
            $a(f);
            showProc(a, false);
        }
    });
}

function fillReportCategories() {
    $.get("/ajax.ashx?action=GetReportCategories&t=" + Math.random(), function (b) {
        var c = b.split("$$");
        var a = '<option value="">请选择...</option>';
        for (var d = 0; d < c.length; ++d) {
            a += '<option value="' + c[d] + '">' + c[d] + "</option>";
        }
        $j("RPT_tdCats").html('<select id="RPT_cats">' + a + "</select>");
    });
}

function fillLeavewordCategories() {
    $.get("/ajax.ashx?action=GetLeavewordCategories&t=" + Math.random(), function (b) {
        var c = b.split("$$");
        var a = '<option value="">请选择...</option>';
        for (var d = 0; d < c.length; ++d) {
            a += '<option value="' + c[d] + '">' + c[d] + "</option>";
        }
        $j("LEAVEWORD_tdCats").html('<select id="LEAVEWORD_cats">' + a + "</select>");
    });
}

function sendLeaveword(j) {
    var g = $j("LEAVEWORD_cats").val();
    var h = $v("LEAVEWORD_txtTitle");
    var b = $v("LEAVEWORD_txtTel");
    var e = $v("LEAVEWORD_txtMobile");
    var c = $v("LEAVEWORD_txtContact");
    var f = $v("LEAVEWORD_txtEmail");
    var d = $v("LEAVEWORD_txtShortDesc");
    var a = "";
    if (h == "") {
        a += "<li>标题不可为空</li>";
    }
    if (c == "") {
        a += "<li>联系人不可为空</li>";
    }
    if (f == "") {
        a += "<li>电子邮箱地址不可为空</li>";
    } else {
        if (!PTN_EMAIL.test(f)) {
            a += "<li>电子邮箱地址格式错误</li>";
        }
    }
    if (g == "") {
        a += "<li>留言类型必选</li>";
    }
    if (a.length > 0) {
        $a(a);
        return;
    }
    showProc(j);
    $.post("/ajax.ashx?action=SendLeaveword&t=" + Math.random(), {
        title: h,
        cat: g,
        contact: c,
        email: f,
        shortDesc: d,
        tel: b,
        mobile: e
    }, function (l) {
        var k = gav(l, "state");
        var m = gav(l, "msg");
        if (k == "1") {
            $a(m, 1);
        } else {
            $a(m);
        }
        showProc(j, false);
    });
}

function sendReprots(c) {
    var f = $j("RPT_cats").val();
    var e = document.title;
    var a = document.URL;
    var b = $v("RPT_txtContact");
    var g = $v("RPT_txtEmail");
    var d = $v("RPT_txtShortDesc");
    if (f.length == 0) {
        $a("请选择报告分类。");
        return;
    }
    showProc(c);
    $.post("/ajax.ashx?action=SendReports&t=" + Math.random(), {
        title: e,
        url: a,
        cat: f,
        contact: b,
        email: g,
        shortDesc: d
    }, function (j) {
        var h = gav(j, "state");
        var k = gav(j, "msg");
        if (h == "1") {
            $a(k, 1);
        } else {
            $a(k);
        }
        showProc(c, false);
    });
}

function directPay(h) {
    var c = $v("DIR_PAY_txtPayer");
    var g = $v("DIR_PAY_txtEmail");
    var e = $v("DIR_PAY_txtTel");
    var f = $v("DIR_PAY_txtMobile");
    var b = $v("DIR_PAY_txtSalesManName");
    var a = $v("DIR_PAY_txtMoney");
    var j = $v("DIR_PAY_txtUse");
    var k = $v("DIR_PAY_ddlPayment");
    var d = "";
    if (c.length == 0) {
        d += "<li>付款人不可为空。</li>";
    }
    if (g == "") {
        d += "<li>电子邮箱地址不可为空</li>";
    } else {
        if (!PTN_EMAIL.test(g)) {
            d += "<li>电子邮箱地址格式错误</li>";
        }
    }
    if (a.length == 0) {
        d += "<li>付款金额不可为空。</li>";
    } else {
        if (!PTN_FLOAT.test(a)) {
            d += "<li>付款金额必须为数字，如89.00。</li>";
        }
    }
    if (j.length == 0) {
        d += "<li>款项用途不可为空。</li>";
    }
    if (k.length == 0) {
        d += "<li>请选择付款方式。</li>";
    }
    if (d.length > 0) {
        $a(d);
        return;
    }
    showProc(h);
    $.post("/ajax.ashx?action=DirectPay&t=" + Math.random(), {
        payer: c,
        email: g,
        tel: e,
        mobile: f,
        salesMan: b,
        _money: a,
        _use: j,
        payment: k
    }, function (n) {
        var m = gav(n, "state");
        var l = gav(n, "msg");
        if (m == "1") {
            location.href = "/Paycenter/PayDirectConfirm.aspx";
            return;
        } else {
            $a(l);
        }
        showProc(h, false);
    });
}

function submitOrder(e, j) {
    showProc(e);
    var h = $j("txtContact").val();
    var n = $j("txtCompName").val();
    var a = $j("txtTel").val();
    var m = $j("txtMobile").val();
    var c = $j("txtEmail").val();
    var g = $j("txtAddr").val();
    var l = $j("txtContent").val();
    var d = $j("txtValidate").val();
    var k = "";
    if (h.length == 0) {
        k += "<p>联系人不可为空</p>";
    }
    if (m.length == 0) {
        k += "<p>手机不可为空</p>";
    }
    var b = /^\d{11,13}$/;
    if (m.length > 0 && !b.test(m)) {
        k += "<p>手机格式错误</p>";
    }
    var f = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (c.length > 0 && !f.test(c)) {
        k += "<p>E-Mail格式错误</p>";
    }
    if (l.length == 0) {
        k += "<p>采购意向描述不可为空</p>";
    }
    if (d.length == 0) {
        k += "<p>验证码不可为空</p>";
    }
    if (k.length > 0) {
        $a(k);
        showProc(e, false);
        return;
    }
    $.post("/ajax.ashx?action=submitorder&t=" + Math.random(), {
        oid: j,
        contact: h,
        compName: n,
        tel: a,
        mobile: m,
        email: c,
        addr: g,
        content: l,
        vali: d
    }, function (p) {
        var o = gav(p, "state");
        var q = gav(p, "msg");
        if (o == "1") {
            $a(q, 1);
            emptyText("tbForm1");
            document.getElementById("imgvalidate").src = "/Tools/ValidCodes.aspx?" + new Date().getTime();
        } else {
            $a(q);
            if ($.trim(q).indexOf("验证码错误") != -1) {
                document.getElementById("imgvalidate").src = "/Tools/ValidCodes.aspx?" + new Date().getTime();
            } else {
                emptyText("tbForm1");
            }
        }
    });
    showProc(e, false);
}

function getAgentHelpStatic(a) {
    $.post("/ajax.ashx?action=agenthelpsatisfaction&t=" + Math.random(), {
        oid: a
    }, function (e) {
        var d = [parseInt(gav(e, "1")), parseInt(gav(e, "2")), parseInt(gav(e, "3"))];
        var b = d[0] + d[1] + d[2];
        if (b == 0) {
            b = 1;
        }
        var k = 100;
        for (var f = 0; f < d.length; ++f) {
            var j = (d[f] / b).toFixed(2);
            var g = k * j;
            if (g == 0) {
                g = 1;
            }
            var c = "<div class='static_graph' style='height:" + g + "px;'></div><div class='static_w'>" + (j * 100).toFixed(2) + "%</div>";
            $j("cntrStatic_" + f).html(c);
        }
    });
}

function submitAgentHelpUse(a, c) {
    showProc(a);
    var b = $("input[name=use]:checked").val();
    $.post("/ajax.ashx?action=agenthelpuseful&t=" + Math.random(), {
        oid: c,
        notion: b
    }, function (d) {
        if (gav(d, "state") == "0") {
            $a(gav(d, "msg"));
        } else {
            $a(gav(d, "msg"), 1);
            getAgentHelpStatic(c);
        }
        showProc(a, false);
    });
}

function showProductInfo(b, e, a) {
    var h = null;
    var g = null;
    var c = null;
    var f = null;
    $(b).hover(function () {
        h = new Date();
        d();
    }, function () {
        window.clearInterval(c);
    });
    function d() {
        c = window.setInterval(function () {
            g = new Date();
            f = g - h;
            if (f > 400) {
                if ($(b).parent().parent().next().attr("class") == "mesbook4" || $(b).parent().parent().next().attr("class") == "mesbook40") {
                    if ($(b).parent().parent().next().is(":visible")) {
                        return;
                    } else {
                        $(b).parent().parent().next().show();
                    }
                } else {
                    $.post("/ajax.ashx?action=showProductInfo&t=" + Math.random(), {
                        oid: e,
                        index: a
                    }, function (j) {
                        if ($(b).parent().parent().next().attr("class") == "mesbook4" || $(b).parent().parent().next().attr("class") == "mesbook40") {
                            return;
                        } else {
                            $(b).parent().parent().after(j);
                            return;
                        }
                    });
                }
            }
        }, 450);
    }
}

function showProductInfos(c, f) {
    var b = null;
    var a = null;
    var d = null;
    var g = null;
    $(c).hover(function () {
        b = new Date();
        e();
    }, function () {
        window.clearInterval(d);
    });
    function e() {
        d = window.setInterval(function () {
            a = new Date();
            g = a - b;
            if (g > 400) {
                if ($(c).parent().parent().next().attr("class") == "mesbook44") {
                    if ($(c).parent().parent().next().is(":visible")) {
                        return;
                    } else {
                        $(c).parent().parent().next().show();
                    }
                } else {
                    $.post("/ajax.ashx?action=showProductInfos&t=" + Math.random(), {
                        oid: f
                    }, function (h) {
                        if ($(c).parent().parent().next().attr("class") == "mesbook44") {
                            return;
                        } else {
                            $(c).parent().parent().after(h);
                            return;
                        }
                    });
                }
            }
        }, 450);
    }
}

function hideProductInfo(a) {
    if ($(a).parent().parent().next().attr("class") == "mesbook4" || $(a).parent().parent().next().attr("class") == "mesbook40" || $(a).parent().parent().next().attr("class") == "mesbook44") {
        $(a).parent().parent().next().mouseover(function () {
            $(a).parent().parent().next().show();
            return;
        });
        $(a).parent().parent().next().mouseout(function () {
            $(a).parent().parent().next().hide();
            return;
        });
        $(a).parent().parent().next().hide();
    }
}

function showProductTips(c) {
    var b = $j("div_nsw_tips");
    if (b.length == 0) {
        var a = "<div class='mesbook5' id='div_nsw_tips'><h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_tips_bg')\"><img src='" + SKIN_PATH + "img/ico9_close.gif' /></a>产品预定</h1><h4>告诉我该产品的好消息</h4><div class='con'>您需要等待该产品的上架吗？一旦该产品的价格降价之后，我们会第一时间把该商品的价格清单发送到您的电子邮件。</div> <h5>如果打折则发送电子邮件给我</h5><div class='inp'><input id='rdoTip1' type='radio' name='rdoTips' value='0' checked='true' /><label for='rdoTip1'>仅仅当前该产品</label></div><div class='inp'><input id='rdoTip2' type='radio' name='rdoTips' value='1' /><label for='rdoTip2'>当前产品所属分类</label></div><div class='inp'><input  id='rdoTip3' type='radio' name='rdoTips' value='2' /><label for='rdoTip3'>所有打折清单</label></div><div class='inp'><span>Email:</span><input type='text' id='txtEmail' name='txtEmail'  class='text' /><input id='txtHide' name='txtHide' type='hidden' value='" + c + "' /></div><div class='inp'><span>简述:</span><textarea id='txtContent' name='txtContent'class='textarea'></textarea></div><div class='mes_btn'><input type='button' class='b61' value='提  交' onclick=\"submitProductTips('txtHide','txtEmail','txtContent','rdoTips')\" /><input type='button' class='b62' value='取  消' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_tips_bg')\" /></div></div>";
        $(document.body).append(a);
    }
    setCM("div_nsw_tips");
    showFullBg("div_nsw_tips_bg");
    relocation("div_nsw_tips");
}

function submitProductTips(c, d, a, b) {
    var c = $j("txtHide").val();
    var d = $j("txtEmail").val();
    var a = $j("txtContent").val();
    var e = $("input[name=rdoTips]:checked").val();
    if (a.length > 500) {
        $a("简述太长，不能超过500个字节，请填写简短描述");
    }
    var f = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (d.length == 0) {
        $a("E-Mail 不可为空");
        return false;
    }
    if (!f.test(d)) {
        $a("E-Mail 格式错误");
        return false;
    }
    $.post("/ajax.ashx?action=postProductTips&t=" + Math.random(), {
        oid: c,
        email: d,
        content: a,
        state: e
    }, function (g) {
        if (gav(g, "state") == "1") {
            $a(gav(g, "msg"), 1);
        } else {
            $a(gav(g, "msg"));
        }
    });
    $j("div_nsw_tips").hide();
    hideFullBg("div_nsw_tips_bg");
}

function showMyWish(c) {
    var b = $j("div_nsw_wishs");
    if (b.length == 0) {
        var a = '<div class="mesbook6" id="div_nsw_wishs"></div>';
        $(document.body).append(a);
    }
    $.post("/ajax.ashx?action=showMyWish&t=" + Math.random(), {
        oid: c
    }, function (d) {
        $j("div_nsw_wishs").html(d);
    });
    setCM("div_nsw_wishs");
    showFullBg("div_nsw_wishs_bg");
    relocation("div_nsw_wishs");
}

function submitProductWishs(c, a, b) {
    var c = $j("txtHide").val();
    var a = $j("txtAttr").html();
    var b = $j("txtNum").val();
    $.post("/ajax.ashx?action=postProductWishs&t=" + Math.random(), {
        oid: c,
        attr: a,
        num: b
    }, function (d) {
        if (gav(d, "state") == "1") {
            $a(gav(d, "msg"), 1);
        } else {
            $a(gav(d, "msg"));
        }
    });
    $j("div_nsw_wishs").hide();
    hideFullBg("div_nsw_wishs_bg");
}

function sendGetProductsNotify(a) {
    var c = $j("ddlProductsColumns").val();
    var b = $j("txtSearch").val();
    if (b == "关键词") {
        b = "";
    }
    $.post("/ajax.ashx?action=sendGetProductsByColumn&t=" + Math.random(), {
        columnID: c,
        searchText: b
    }, function (d) {
        InitDropdownlist(document.getElementById("PackageSelectList"), "请选择关联资讯", "0", d);
    });
}

function InitDropdownlist(c, b, a, d) {
    var e = c.options.length;
    for (i = 0; i < e; i++) {
        c.remove(0);
    }
    var f = d.split("||");
    e = f.length;
    if (e) {
        for (i = 0; i < e - 1; i++) {
            text_value = f[i].split("$$");
            text = text_value[1];
            value = text_value[0];
            c.add(new Option(text, value));
        }
    }
}

function userorder(g) {
    var h = $tv("txtname");
    var l = $tv("txttitle");
    var j = $tv("txtemail");
    var d = $tv("txttel");
    var a = $tv("txtcontent");
    var c = $tv("txtaddress");
    var e = $tv("txtenddate");
    var b = $("#PackagePickList").val();
    if (l == "") {
        $a("定单名称不能为空", "txttitle");
        return;
    }
    if (h == "") {
        $a("下单人姓名不能为空", "txtname");
        return;
    }
    if (d == "") {
        $a("联系电话不能为空", "txttel");
        return;
    }
    if (c == "") {
        $a("联系地址不能为空", "txtaddress");
        return;
    }
    if (e == "") {
        $a("到货时间不能为空", "txtenddate");
        return;
    }
    if (a == "" || a.length > 1e3) {
        $a("详细描述不能为空或者大于1000字", "txtcontent");
        return;
    } else {
        var f = $.trim($(g).attr("value"));
        var k = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (!k.test(j)) {
            $a("E-Mail错误");
            return false;
        }
    }
    $.post("/ajax.ashx?action=agentorder&t=" + Math.random(), {
        s_name: h,
        s_title: l,
        s_email: j,
        s_tel: d,
        s_content: a,
        s_address: c,
        s_enddate: e,
        s_IDList: b
    }, function (m) {
        var o = gav(m, "state");
        var n = gav(m, "msg");
        if (o == "1") {
            showMsgPage("<li>定单提交成功，我们会尽快与您联系，谢谢！</li>", 1, "/User/UserOrder.aspx", "在线定单", "/User/UserOrder.aspx");
            return;
        } else {
            if (n.length > 0) {
                $a(n);
            } else {
                $a(m);
            }
        }
    });
}

function delAgentOrder(a, b) {
    var c = getCheckedVal(b);
    if (c.length == 0) {
        $a("无选中项。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=delAgentOrder&t=" + Math.random(), {
        ids: c
    }, function (e) {
        if (gav(e, "state") == "1") {
            var d = $j(b).find("input[name=item]:checked");
            d.each(function (f) {
                $(this).parent().parent().remove();
            });
            $a(gav(e, "msg"), 1);
        } else {
            $a(gav(e, "msg"));
        }
        showBgProc(false);
    });
}

function AddApply(h) {
    var j = document.getElementById("TxtType").selectedIndex;
    var k = $tv("TxtUrl");
    var b = $tv("TxtName");
    var a = $tv("TxtPhotoPath");
    var e = $tv("TxtMsg");
    var g = $tv("TxtUserName");
    var c = $tv("TxtTel");
    var d = $tv("TxtEmail");
    var f = $tv("TxtQQ");
    if (k == "" || k == "http://") {
        $a("请输入网址！", "TxtUrl");
        return;
    }
    if (b == "") {
        $a("请输入网站名称！", "TxtName");
        return;
    }
    if (e.length > 400) {
        $a("网站简况不能大于400字！", "txtUsername");
        return;
    }
    $.post("/ajax.ashx?action=apply&t=" + Math.random(), {
        Type: j,
        Url: k,
        Name: b,
        PhotoPath: a,
        Content: e,
        UserName: g,
        Phone: c,
        Email: d,
        QQ: f
    }, function (l) {
        if (gav(l, "state") == "1") {
            $a(gav(l, "msg"));
            emptyText('tbForm');
        } else {
            $a(gav(l, "msg"));
            emptyText('tbForm');
        }
    });
}

function AddCompare(c) {
    var a = false;
    if (c.checked) {
        a = true;
        $(c).next().next().next().show();
    } else {
        a = false;
        $(c).next().next().next().hide();
    }
    var b = $(c).val();
    $.post("/ajax.ashx?action=addCompare&t=" + Math.random(), {
        ids: b,
        flag: a
    }, function (e) {
        if (gav(e, "state") == "1") {
            var d = gav(e, "newcookie");
            var f = new Array();
            f = d.split(",");
            if (f.length > 0) {
                for (var g = 0; g < f.length; g++) {
                    if (g == f.length - 1) {
                        $(".pro_main").find("input[id=" + f[g] + "]").show();
                    } else {
                        $(".pro_main").find("input[id=" + f[g] + "]").hide();
                    }
                }
            }
        }
    });
}

function DelOneCompare(b) {
    var a = $(b).attr("id");
    $.post("/ajax.ashx?action=delOneCompare&t=" + Math.random(), {
        ids: a
    }, function (c) {
        if (gav(c, "state") == "1") {
            window.location = "/product/Compare.aspx";
        } else {
            showMsgPage("<li>产品对比车中不存在对比的产品记录，请选择需要对比的产品</li>", 0, "/", "首页", "/");
        }
    });
}

function DelAllCompare() {
    $.post("/ajax.ashx?action=delAllCompare&t=" + Math.random(), {}, function (a) {
        showMsgPage("<li>产品对比车中所有产品已移除，您可以继续挑选产品进行比较</li>", 1, "/", "首页", "/");
    });
}

function addDownload(b, a) {
    $.post("/ajax.ashx?action=addDownload&t=" + Math.random(), {
        oid: b
    }, function (c) {
        if (gav(c, "state") == "1") {
            window.location = a;
        } else {
            $a(gav(c, "msg"));
        }
    });
}

function getNewProduct() {
    $.post("/ajax.ashx?action=getnewproduct&t=" + Math.random(), function (a) {
        $("#newpro").html(a);
        $("#newpro h5").mouseover(function () {
            $(this).addClass("cur").siblings("h5").removeClass("cur").end().next("dl").show().siblings("dl").hide();
        }).eq(0).trigger("mouseover");
    });
}

function getSubSiteInfos() {
    $.post("/ajax.ashx?action=subsiteinfos&t=" + Math.random(), {
        domain: document.domain
    }, function (a) {
        var b = gav(a, "phone");
        var c = gav(a, "address");
        $("#phones").html(b);
    });
}

function getSubSiteInfo() {
    $.post("/ajax.ashx?action=subsiteinfo&t=" + Math.random(), {
        domain: document.domain
    }, function (a) {
        if (a) {
            $("#site ul").html(a);
        } else {
            $("#site").remove();
        }
    });
}

function IsURL(a) {
    var c = "^((https|http|ftp|rtsp|mms)?://)?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].[a-z]{2,6})(:[0-9]{1,4})?((/?)|(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    var b = new RegExp(c);
    if (b.test(a)) {
        return true;
    } else {
        return false;
    }
}

$(function () {
    if (!$.trim($("div.prodesc").text())) {
        $("div.prodesc").remove();
    }
});

var flag = false;

function DrawImage(c, e, d, b) {
    var a = new Image();
    a.src = c.src;
    if (a.width > 0 && a.height > 0) {
        flag = true;
        if (a.width / a.height >= e / d) {
            if (a.width > e) {
                c.width = e;
                c.height = a.height * e / a.width;
            } else {
                c.width = a.width;
                c.height = a.height;
            }
            if (b == 1) {
                if (d > c.height && e > c.width) {
                    c.style.padding = (d - c.height) / 2 + "px 0 0 " + (e - a.width) / 2 + "px";
                } else {
                    if (d > c.height) {
                        c.style.padding = (d - c.height) / 2 + "px 0 0 0";
                    } else {
                        if (e > c.width) {
                            c.style.padding = "0 0 0 " + (e - c.width) / 2 + "px";
                        }
                    }
                }
            }
        } else {
            if (a.height > d) {
                c.height = d;
                c.width = a.width * d / a.height;
            } else {
                c.width = a.width;
                c.height = a.height;
            }
            if (b == 1) {
                if (d > c.height && e > c.width) {
                    c.style.padding = (d - c.height) / 2 + "px 0 0 " + (e - c.width) / 2 + "px";
                } else {
                    if (d > c.height) {
                        c.style.padding = (d - c.height) / 2 + "px 0 0 0";
                    } else {
                        if (e > c.width) {
                            c.style.padding = "0 0 0 " + (e - c.width) / 2 + "px";
                        }
                    }
                }
            }
        }
    }
}

$(function () {
    var a = $("#seachkeywords").val();
    $("#seachkeywords").focus(function () {
        if (this.value == a) {
            this.value = "";
        }
    }).blur(function () {
        if (this.value == "") {
            this.value = a;
        }
    }).keydown(function (b) {
        if (b.keyCode == "13") {
            $("#sousuo").click();
            return false;
        }
    });
    $("#sousuo").click(function () {
        var b = $("#seachkeywords").val();
        if (b == a) {
            b = "";
        }
        window.location.href = "/Search/Index.aspx?objtype=product&kwd=" + b;
    });
});

function include_file(a, f, d) {
    var c = document.getElementsByTagName("head")[0];
    var b = navigator.userAgent.toUpperCase().indexOf("MSIE") == -1 ? false : true;
    var e;
    if (f == "script") {
        e = document.createElement("script");
        e.setAttribute("type", "text/javascript");
        e.setAttribute("src", a);
        c.appendChild(e);
        if (!b) {
            e.onload = function () {
                d();
            };
        } else {
            e.onreadystatechange = function () {
                if (e.readyState == "loaded" || e.readyState == "complete") {
                    d();
                }
            };
        }
    } else {
        if (f == "css") {
            e = document.createElement("link");
            e.setAttribute("type", "text/css");
            e.setAttribute("rel", "stylesheet");
            e.setAttribute("href", a);
            c.appendChild(e);
            if (!b) {
                d();
            } else {
                e.onreadystatechange = function () {
                    if (e.readyState == "loaded" || e.readyState == "complete") {
                        d();
                    }
                };
            }
        }
    }
}

jQuery(document).ready(function (a) {
    include_file("/Css/fanhuidibu.css", "css", function () {
        action();
    });
});

function action() {
    $(document.body).append('<div id="roll" style="display:none;"><div title="回到顶部" id="roll_top"></div></div>');
    $("#roll_top").click(function () {
        $("html,body").animate({
            scrollTop: "0px"
        }, 800);
    });
    $("#ct").click(function () {
        $("html,body").animate({
            scrollTop: $(".ct").offset().top
        }, 800);
    });
    $(window).scroll(function (a) {
        if ($.browser.ie6) {
            $("#roll").css("top", $(this).scrollTop() + $(this).height() - 170);
        }
        if ($(this).scrollTop() > 260) {
            $("#roll").fadeIn();
        } else {
            $("#roll").fadeOut();
        }
    });
}

function IsLoads(a) {
    var c = false;
    var b = document.getElementsByTagName("script");
    for (i = 0; i < b.length; i++) {
        if (b[i].src && b[i].src.indexOf(a) != -1) {
            if (b[i].readyState == "loaded" || b[i].readyState == "complete") {
                c = true;
                break;
            }
        }
    }
    return c;
}

$(function () {
    var b = location.href;
    var c = 0;
    var a = $(".h_nav ul li").length;
    $(".h_nav ul li").each(function (e) {
        var d = $(this).find("a").attr("href");
        if (d.length > 5 && b.substring(b.length - d.length).toUpperCase() == d.toUpperCase()) {
            $(this).addClass("cur");
            $(this).siblings("li").removeClass("cur");
            return;
        }
        c++;
    });
    if (c == a) {
        $(".h_nav ul li:eq(0)").addClass("cur");
        $(".h_nav ul li:eq(0)").siblings("li").removeClass("cur");
    }
});
function Marquee() {
    this.ID = document.getElementById(arguments[0]);
    if (!this.ID) {
        alert("您要设置的\"" + arguments[0] + "\"初始化错误\r\n请检查标签ID设置是否正确!");
        this.ID = -1;
        return;
    }
    this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
    this.Step = 1;
    this.Timer = 30;
    this.DirectionArray = { "top": 0, "up": 0, "bottom": 1, "down": 1, "left": 2, "right": 3 };
    if (typeof arguments[1] == "number" || typeof arguments[1] == "string") this.Direction = arguments[1];
    if (typeof arguments[2] == "number") this.Step = arguments[2];
    if (typeof arguments[3] == "number") this.Width = arguments[3];
    if (typeof arguments[4] == "number") this.Height = arguments[4];
    if (typeof arguments[5] == "number") this.Timer = arguments[5];
    if (typeof arguments[6] == "number") this.DelayTime = arguments[6];
    if (typeof arguments[7] == "number") this.WaitTime = arguments[7];
    if (typeof arguments[8] == "number") this.ScrollStep = arguments[8];
    this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
    this.ID.noWrap = true;
    this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
    if (arguments.length >= 7) this.Start();
}

Marquee.prototype.Start = function () {
    if (this.ID == -1) return;
    if (this.WaitTime < 800) this.WaitTime = 800;
    if (this.Timer < 20) this.Timer = 20;
    if (this.Width == 0) this.Width = parseInt(this.ID.style.width);
    if (this.Height == 0) this.Height = parseInt(this.ID.style.height);
    if (typeof this.Direction == "string") this.Direction = this.DirectionArray[this.Direction.toString().toLowerCase()];
    this.HalfWidth = Math.round(this.Width / 2);
    this.HalfHeight = Math.round(this.Height / 2);
    this.BakStep = this.Step;
    this.ID.style.width = this.Width + "px";
    this.ID.style.height = this.Height + "px";
    if (typeof this.ScrollStep != "number") this.ScrollStep = this.Direction > 1 ? this.Width : this.Height;
    var templateLeft = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
    var templateTop = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
    var msobj = this;
    msobj.tempHTML = msobj.ID.innerHTML;
    if (msobj.Direction <= 1) {
        msobj.ID.innerHTML = templateTop.replace(/MSCLASS_TEMP_HTML/g, msobj.ID.innerHTML);
    }
    else {
        if (msobj.ScrollStep == 0 && msobj.DelayTime == 0) {
            msobj.ID.innerHTML += msobj.ID.innerHTML;
        }
        else {
            msobj.ID.innerHTML = templateLeft.replace(/MSCLASS_TEMP_HTML/g, msobj.ID.innerHTML);
        }
    }
    var timer = this.Timer;
    var delaytime = this.DelayTime;
    var waittime = this.WaitTime;
    msobj.StartID = function () { msobj.Scroll() }
    msobj.Continue = function () {
        if (msobj.MouseOver == 1) {
            setTimeout(msobj.Continue, delaytime);
        }
        else {
            clearInterval(msobj.TimerID);
            msobj.CTL = msobj.Stop = 0;
            msobj.TimerID = setInterval(msobj.StartID, timer);
        }
    }

    msobj.Pause = function () {
        msobj.Stop = 1;
        clearInterval(msobj.TimerID);
        setTimeout(msobj.Continue, delaytime);
    }

    msobj.Begin = function () {
        msobj.ClientScroll = msobj.Direction > 1 ? msobj.ID.scrollWidth / 2 : msobj.ID.scrollHeight / 2;
        if ((msobj.Direction <= 1 && msobj.ClientScroll <= msobj.Height + msobj.Step) || (msobj.Direction > 1 && msobj.ClientScroll <= msobj.Width + msobj.Step)) {
            msobj.ID.innerHTML = msobj.tempHTML;
            delete (msobj.tempHTML);
            return;
        }
        delete (msobj.tempHTML);
        msobj.TimerID = setInterval(msobj.StartID, timer);
        if (msobj.ScrollStep < 0) return;
        msobj.ID.onmousemove = function (event) {
            if (msobj.ScrollStep == 0 && msobj.Direction > 1) {
                var event = event || window.event;
                if (window.event) {
                    if (msobj.IsNotOpera) {
                        msobj.EventLeft = event.srcElement.id == msobj.ID.id ? event.offsetX - msobj.ID.scrollLeft : event.srcElement.offsetLeft - msobj.ID.scrollLeft + event.offsetX;
                    }
                    else {
                        msobj.ScrollStep = null;
                        return;
                    }
                }
                else {
                    msobj.EventLeft = event.layerX - msobj.ID.scrollLeft;
                }
                msobj.Direction = msobj.EventLeft > msobj.HalfWidth ? 3 : 2;
                msobj.AbsCenter = Math.abs(msobj.HalfWidth - msobj.EventLeft);
                msobj.Step = Math.round(msobj.AbsCenter * (msobj.BakStep * 2) / msobj.HalfWidth);
            }
        }
        msobj.ID.onmouseover = function () {
            if (msobj.ScrollStep == 0) return;
            msobj.MouseOver = 1;
            clearInterval(msobj.TimerID);
        }
        msobj.ID.onmouseout = function () {
            if (msobj.ScrollStep == 0) {
                if (msobj.Step == 0) msobj.Step = 1;
                return;
            }
            msobj.MouseOver = 0;
            if (msobj.Stop == 0) {
                clearInterval(msobj.TimerID);
                msobj.TimerID = setInterval(msobj.StartID, timer);
            }
        }
    }
    setTimeout(msobj.Begin, waittime);
}

Marquee.prototype.Scroll = function () {
    switch (this.Direction) {
        case 0:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return;
            }
            else {
                if (this.ID.scrollTop >= this.ClientScroll) {
                    this.ID.scrollTop -= this.ClientScroll;
                }
                this.ID.scrollTop += this.Step;
            }
            break;

        case 1:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return;
            }
            else {
                if (this.ID.scrollTop <= 0) {
                    this.ID.scrollTop += this.ClientScroll;
                }
                this.ID.scrollTop -= this.Step;
            }
            break;

        case 2:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return;
            }
            else {
                if (this.ID.scrollLeft >= this.ClientScroll) {
                    this.ID.scrollLeft -= this.ClientScroll;
                }
                this.ID.scrollLeft += this.Step;
            }
            break;

        case 3:
            this.CTL += this.Step;
            if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
                this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
                this.Pause();
                return;
            }
            else {
                if (this.ID.scrollLeft <= 0) {
                    this.ID.scrollLeft += this.ClientScroll;
                }
                this.ID.scrollLeft -= this.Step;
            }
            break;
    }
}