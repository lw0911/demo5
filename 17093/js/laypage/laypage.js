/*! layPage v1.1 - 分页插件 By 贤心 http://sentsin.com/layui/laypage MIT License */
String.prototype.format = function (args) {
    var result = this;
    if (arguments.length > 0) {
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if (args[key] != undefined) {
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}
; !function () {
    "use strict";
    function a(d) {
        var e = "laypagecss";
        a.dir = "dir" in a ? a.dir : f.getpath + "skin/laypage.css", new f(d), a.dir && !b[c](e) && f.use(a.dir, e)
    }
    var b, c, d, e, f;
    a.v = "1.1",
    b = document,
    c = "getElementById",
    d = "getElementsByTagName",
    e = 0,
    f = function (a) {
        var b = this,
            c = b.config = a || {};
        c.item = e++, b.render()
    },
    f.on = function (a, b, c) {
        return a.attachEvent ? a.attachEvent("on" + b, function () {
            c.call(a, window.even)
        }) : a.addEventListener(b, c, !1),
            f
    },
    f.getpath = function () {
        var a = document.scripts,
            b = a[a.length - 1].src;
        return b.substring(0, b.lastIndexOf("/") + 1)
    }(),
    f.use = function (c, e) {
        var f = b.createElement("link");
        f.type = "text/css",
        f.rel = "stylesheet",
        f.href = a.dir,
        e && (f.id = e),
        b[d]("head")[0].appendChild(f),
        f = null
    },
    f.prototype.type = function () {
        var a = this.config;
        return "object" == typeof a.cont ? void 0 === a.cont.length ? 2 : 3 : void 0
    },
    f.prototype.view = function () {
        var b = this,
            c = b.config,
            d = [],
            e = {};
        var getPageUrl = function (page) {
            return page < 2 ? "" : (c.pagenum ? c.pagenum : "_page_") + page;
        }
        c.pages = 0 | c.pages, c.curr = 0 | c.curr || 1,
        c.groups = "groups" in c ? 0 | c.groups : 5,
        c.first = "first" in c ? c.first : 1,
        c.last = "last" in c ? c.last : c.pages,
        c.prev = "prev" in c ? c.prev : '<img src="/skin/webimages/Pagingleft.gif">',
        c.next = "next" in c ? c.next : '<img src="/skin/webimages/Pagingright.gif">',
        c.groups > c.pages && (c.groups = c.pages),
        e.index = Math.ceil((c.curr + (c.groups > 1 && c.groups !== c.pages ? 1 : 0)) / (0 === c.groups ? 1 : c.groups)),
        c.curr > 1 && c.prev && d.push('<a href="' + c.formatUrl.format({ page: getPageUrl(c.curr - 1) }) + '" class="laypage_prev Prev prev" data-page="' + (c.curr - 1) + '"><span>' + c.prev + "</span></a>"),
        e.index > 1 && c.first && 0 !== c.groups && d.push('<a href="' + c.formatUrl.format({ page: getPageUrl(1) }) + '" class="laypage_first" data-page="1"  title="首页">' + c.first + '</a><a class="Pagingmore">…</a>'),
        e.poor = Math.floor((c.groups - 1) / 2), e.start = e.index > 1 ? c.curr - e.poor : 1, e.end = e.index > 1 ? function () {
            var a = c.curr + (c.groups - e.poor - 1);
            return a > c.pages ? c.pages : a
        }() : c.groups,
        e.end - e.start < c.groups - 1 && (e.start = e.end - c.groups + 1);
        /^#/.test(c.skin) && d.push('<style>.Paging a:hover{background-color:' + c.skin + '}</style>');
        for (; e.start <= e.end; e.start++)
            e.start === c.curr ?
                d.push('<span class="laypage_curr" ' + (/^#/.test(c.skin) ? 'style="background-color:' + c.skin + '"' : "") + ">" + e.start + "</span>") :
                d.push('<a href="' + c.formatUrl.format({ page: getPageUrl(e.start) }) + '" data-page="' + e.start + '">' + e.start + "</a>");
        return c.pages > c.groups && e.end < c.pages && c.last && 0 !== c.groups && d.push('<a class="Pagingmore">…</a><a href="' + c.formatUrl.format({ page: getPageUrl(c.pages) }) + '" class="laypage_last" title="尾页"  data-page="' + c.pages + '">' +
            c.last + "</a>"),
            e.flow = !c.prev && 0 === c.groups,
            (c.curr !== c.pages && c.next || e.flow) && d.push(function () {
                return e.flow && c.curr === c.pages ? '<span class="page_nomore" title="已没有更多">' + c.next + "</span>" : '<a href="' + c.formatUrl.format({ page: getPageUrl(c.curr + 1) }) + '" class="laypage_next Next next" data-page="' +
                    (c.curr + 1) + '"><span>' + c.next + "</span></a>"
            }()),
            '<div name="laypage' + a.v + '" class="Paging laypage_main laypageskin_' + (c.skin ? function (a) {
                return /^#/.test(a) ? "molv" : a
            }(c.skin) : "default") + '" id="laypage_' + b.config.item + '">' +
            d.join("") + function () {
                return c.skip ?
                    '<span class="laypage_total"><label>到第</label><input type="number" min="1" onkeyup="this.value=this.value.replace(/\\D/, \'\');" class="laypage_skip"><label>页</label><button type="button" class="laypage_btn">确定</button></span>' : ""
            }() + "</div>"
    },
    f.prototype.jump = function (a) {
        if (a == null)
            return false;
        var c = b.config,
            g = a[d]("button")[0],
            h = a[d]("input")[0];
        g && f.on(g, "click", function () {
            var a = 0 | h.value.replace(/\s|\D/g, "");
            a && a <= c.pages && (location.href = c.formatUrl.format({ page: a < 2 ? '' : (c.pagenum ? c.pagenum : "_page_") + a }));
        })
    }, f.prototype.render = function () {
        var a = this,
            d = a.config,
            e = a.type(),
            f = a.view();
        2 === e ? d.cont.innerHTML = f : 3 === e ? d.cont.html(f) : b[c](d.cont).innerHTML = f, d.jump && d.jump(d),
        a.jump(b[c]("laypage_" + d.item)),
        d.hash && (location.hash = "!laypage_" + d.item + "=" + d.curr);
        
    },
    "function" == typeof define ?
    define(function () { return a }) :
    "undefined" != typeof exports ?
    module.exports = a :
    window.laypage = a
}();