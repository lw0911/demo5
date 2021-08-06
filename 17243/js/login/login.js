/**
 * Created by lizhenya on 2017/8/1.
 */

webpackJsonp([7], {
    0: function(n, o, r) {
        (function(n) {
                "use strict";
                function o(n) {
                    return n && n.__esModule ? n : {
                        default: n
                    }
                }
                function t() {
                    T = n(this).attr("data-target"),
                        w.removeClass("cur"),
                        y.removeClass("error"),
                        n(this).addClass("cur"),
                        n(".toogle-item").addClass("none "),
                        n(T).removeClass("none")
                }
                function e() {
                    var o = f.default + "/generic/RandomCode.do?" + Date.now();
                    v.attr("src", o);
                    var r = n(".graph-num-img");
                    r.attr("src", o)
                }
                function i() {
                    n(this).parent("div").addClass("focus")
                }
                function a() {
                    z = n.trim(n(this).val()),
                    "" == z && n(this).parent("div").removeClass("focus")
                }
                var s = r(3)
                    , l = r(29)
                    , u = o(l)
                    , c = r(6)
                    , f = o(c);
                r(264),
                    n(".register-promptly").on("click", function() {
                        n(".new-login-box").toggleClass("overturn")
                    });
                var d = (n("body"),
                    n(".login-front-inner .login-btn"))
                    , g = n(".login-front-inner .login-password")
                    , p = n(".login-front-inner .login-account")
                    , m = /(\d+[a-zA-Z])|([a-zA-Z]+\d+)/
                    , v = n(".verify-btn-img")
                    , h = n(".verification-box")
                    , y = n(".account-input")
                    , C = n(".login-front-inner>.login-error")
                    , b = n(".login-front-inner .email-verif")
                    , T = ""
                    , w = n(".toogle-btns li");
                w.on("click", t);
                var k = {
                    errorTimes: "密码错误次数已达上限，请10分钟后再试",
                    noInput: "请填写邮箱或手机号",
                    noPassword: "请填写密码",
                    accountError: "账号或密码错误",
                    codeNull: "请输入验证码",
                    codeError: "验证码错误"
                }
                    , x = function(o) {
                    return y.removeClass("error"),
                        s.util.isNull(o.usermail) ? (S(k.noInput),
                            !1) : s.util.reg.email.test(o.usermail) || s.util.reg.phone.test(o.usermail) ? s.util.isNull(o.password) ? (S(k.noPassword),
                            g.addClass("error").focus(),
                            !1) : !m.test(o.password) || o.password.length < 8 || o.password.length > 20 ? (S(k.accountError),
                            g.addClass("error").focus(),
                            !1) : !!h.hasClass("none") || (s.util.isNull(o.randomcode) ? (S(k.codeNull),
                                n(".login-front .email-verif").addClass("error").focus(),
                                !1) : "4" == o.randomcode.length || (S(k.codeError),
                                    !1)) : (S(k.accountError),
                            !1)
                }
                    , S = function(n) {
                    C.hasClass("hide") ? C.removeClass("hide").find("span").html(n) : C.find("span").html(n)
                }
                    , B = 0
                    , _ = void 0
                    , A = function() {
                    B = 0,
                        clearTimeout(_),
                        g.focus().val(""),
                        n(".login-front .verify-btn-img").trigger("click"),
                        d.removeClass("login-flag")
                }
                    , N = function() {
                    var o = n(".login-front .login-account").val()
                        , r = n(".login-front .login-password").val()
                        , t = n(".login-front .email-verif").val()
                        , e = n("#rem-me").is(":checked") ? 1 : 0
                        , i = {
                        usermail: s.util.escapeHtml(o),
                        password: s.util.escapeHtml(r),
                        randomcode: s.util.escapeHtml(t),
                        rememberMe: s.util.escapeHtml(e)
                    };
                    return i
                }
                    , j = f.default + "/generic/RandomCode.do"
                    , E = function(o) {
                    var r = n(o.target);
                    r.attr("src", j + "?" + Date.now())
                }
                    , H = function() {
                    var o = N();
                    if (!d.hasClass("disabled") && !d.hasClass("login-flag") && x(o)) {
                        n(".login-front-inner>.login-error").addClass("hide"),
                            d.addClass("login-flag"),
                            localStorage.account = o.usermail,
                            o.password = (0,
                                u.default)(o.password);
                        var r = f.default + "/merchuser/anon/login.do";
                        n.ajax({
                            url: r,
                            data: o,
                            type: "get",
                            dataType: "jsonp",
                            timeout: 25e3,
                            success: function(n) {
                                n.retcode && "200" == n.retcode ? (s.util.reg.email.test(o.usermail) ? sa.track("login", {
                                    platformType: "pc",
                                    loginWay: "email"
                                }) : sa.track("login", {
                                    platformType: "pc",
                                    loginWay: "phone"
                                }),
                                    d.addClass("login-sucss"),
                                    setTimeout(function() {
                                        location.href = "/appcenter"
                                    }, 1500),
                                    q()) : (n.data && "1" == n.data.isShowCode ? (h.removeClass("none"),
                                    R()) : h.addClass("none"),
                                    S(n.message),
                                    A())
                            },
                            error: function(n, o, r) {
                                A()
                            },
                            complete: function() {}
                        })
                    }
                }
                    , M = function(n) {
                    I(),
                    13 == n.keyCode && H()
                }
                    , D = function() {
                    var o = localStorage.account
                        , r = f.default + "/merchuser/anon/isShowAuthCode.do";
                    s.util.isNull(o) || n.ajax({
                        url: r,
                        data: {
                            account: s.util.escapeHtml(o)
                        },
                        type: "get",
                        dataType: "jsonp",
                        timeout: 25e3,
                        success: function(o) {
                            o.retcode && "200" == o.retcode && (h.removeClass("none"),
                                n(".verify-btn-img").trigger("click"),
                                R())
                        },
                        error: function() {},
                        complete: function() {}
                    })
                }
                    , I = function() {
                    p.removeClass("error"),
                        C.addClass("hide")
                }
                    , z = void 0
                    , F = void 0
                    , R = function() {
                    F = n(".login-front .verification-box").hasClass("none"),
                        F ? n(".flip-container>p").css("bottom", "-47px") : n(".flip-container>p").css("bottom", "-106px")
                }
                    , W = function() {
                    var o = n.trim(g.val())
                        , r = n.trim(p.val());
                    r && p.parent(".input-parent").addClass("focus"),
                    o && g.parent(".input-parent").addClass("focus")
                };
                n(function() {
                    e(),
                        O(),
                        d.on("click", H),
                        g.on("keyup", M),
                        p.on("keyup", I),
                        b.on("keyup", I),
                        D(),
                        v.on("click", E),
                        y.on("focus", i),
                        y.on("blur", a),
                        y.on("keyup", i),
                        n(".remember-me, .login-front-inner .login-btn, .login-front-inner p, .get-verif-code, #register-phone-box p, .link-login").bind("selectstart", function() {
                            return !1
                        }),
                        setTimeout(W, 1e3)
                });
                var q = function() {
                    var o = n(".login-front .login-account").val()
                        , r = (n(".login-front .login-password").val(),
                        n("#rem-me").is(":checked") ? 1 : 0);
                    if (1 == r) {
                        var t = new Date;
                        t.setDate(t.getDate() + 30);
                        for (var e = document.cookie.split("; "), i = [], a = 0; a < e.length; a++) {
                            var s = e[a].split("=");
                            i.push(s[1])
                        }
                        i.indexOf(o) == -1 && (document.cookie = "userNameFuqianla=" + o + "; expires=" + t.toGMTString())
                    } else if (0 == r) {
                        var l = new Date;
                        l.setTime(-1e3),
                            document.cookie = "userNameFuqianla= ;  expires=" + l.toGMTString()
                    }
                }
                    , O = function() {
                    for (var n = document.cookie.split("; "), o = 0; o < n.length; o++) {
                        var r = n[o].split("=");
                        "userNameFuqianla" == r[0] && p.val(r[1])
                    }
                }
            }
        ).call(o, r(2))
    },
    15: function(n, o) {
        var r = {
            utf8: {
                stringToBytes: function(n) {
                    return r.bin.stringToBytes(unescape(encodeURIComponent(n)))
                },
                bytesToString: function(n) {
                    return decodeURIComponent(escape(r.bin.bytesToString(n)))
                }
            },
            bin: {
                stringToBytes: function(n) {
                    for (var o = [], r = 0; r < n.length; r++)
                        o.push(255 & n.charCodeAt(r));
                    return o
                },
                bytesToString: function(n) {
                    for (var o = [], r = 0; r < n.length; r++)
                        o.push(String.fromCharCode(n[r]));
                    return o.join("")
                }
            }
        };
        n.exports = r
    },
    27: function(n, o) {
        !function() {
            var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                , r = {
                rotl: function(n, o) {
                    return n << o | n >>> 32 - o
                },
                rotr: function(n, o) {
                    return n << 32 - o | n >>> o
                },
                endian: function(n) {
                    if (n.constructor == Number)
                        return 16711935 & r.rotl(n, 8) | 4278255360 & r.rotl(n, 24);
                    for (var o = 0; o < n.length; o++)
                        n[o] = r.endian(n[o]);
                    return n
                },
                randomBytes: function(n) {
                    for (var o = []; n > 0; n--)
                        o.push(Math.floor(256 * Math.random()));
                    return o
                },
                bytesToWords: function(n) {
                    for (var o = [], r = 0, t = 0; r < n.length; r++,
                        t += 8)
                        o[t >>> 5] |= n[r] << 24 - t % 32;
                    return o
                },
                wordsToBytes: function(n) {
                    for (var o = [], r = 0; r < 32 * n.length; r += 8)
                        o.push(n[r >>> 5] >>> 24 - r % 32 & 255);
                    return o
                },
                bytesToHex: function(n) {
                    for (var o = [], r = 0; r < n.length; r++)
                        o.push((n[r] >>> 4).toString(16)),
                            o.push((15 & n[r]).toString(16));
                    return o.join("")
                },
                hexToBytes: function(n) {
                    for (var o = [], r = 0; r < n.length; r += 2)
                        o.push(parseInt(n.substr(r, 2), 16));
                    return o
                },
                bytesToBase64: function(n) {
                    for (var r = [], t = 0; t < n.length; t += 3)
                        for (var e = n[t] << 16 | n[t + 1] << 8 | n[t + 2], i = 0; i < 4; i++)
                            8 * t + 6 * i <= 8 * n.length ? r.push(o.charAt(e >>> 6 * (3 - i) & 63)) : r.push("=");
                    return r.join("")
                },
                base64ToBytes: function(n) {
                    n = n.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var r = [], t = 0, e = 0; t < n.length; e = ++t % 4)
                        0 != e && r.push((o.indexOf(n.charAt(t - 1)) & Math.pow(2, -2 * e + 8) - 1) << 2 * e | o.indexOf(n.charAt(t)) >>> 6 - 2 * e);
                    return r
                }
            };
            n.exports = r
        }()
    },
    28: function(n, o) {
        function r(n) {
            return !!n.constructor && "function" == typeof n.constructor.isBuffer && n.constructor.isBuffer(n)
        }
        function t(n) {
            return "function" == typeof n.readFloatLE && "function" == typeof n.slice && r(n.slice(0, 0))
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        n.exports = function(n) {
            return null != n && (r(n) || t(n) || !!n._isBuffer)
        }
    },
    29: function(n, o, r) {
        !function() {
            var o = r(27)
                , t = r(15).utf8
                , e = r(28)
                , i = r(15).bin
                , a = function(n, r) {
                n.constructor == String ? n = r && "binary" === r.encoding ? i.stringToBytes(n) : t.stringToBytes(n) : e(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || (n = n.toString());
                for (var s = o.bytesToWords(n), l = 8 * n.length, u = 1732584193, c = -271733879, f = -1732584194, d = 271733878, g = 0; g < s.length; g++)
                    s[g] = 16711935 & (s[g] << 8 | s[g] >>> 24) | 4278255360 & (s[g] << 24 | s[g] >>> 8);
                s[l >>> 5] |= 128 << l % 32,
                    s[(l + 64 >>> 9 << 4) + 14] = l;
                for (var p = a._ff, m = a._gg, v = a._hh, h = a._ii, g = 0; g < s.length; g += 16) {
                    var y = u
                        , C = c
                        , b = f
                        , T = d;
                    u = p(u, c, f, d, s[g + 0], 7, -680876936),
                        d = p(d, u, c, f, s[g + 1], 12, -389564586),
                        f = p(f, d, u, c, s[g + 2], 17, 606105819),
                        c = p(c, f, d, u, s[g + 3], 22, -1044525330),
                        u = p(u, c, f, d, s[g + 4], 7, -176418897),
                        d = p(d, u, c, f, s[g + 5], 12, 1200080426),
                        f = p(f, d, u, c, s[g + 6], 17, -1473231341),
                        c = p(c, f, d, u, s[g + 7], 22, -45705983),
                        u = p(u, c, f, d, s[g + 8], 7, 1770035416),
                        d = p(d, u, c, f, s[g + 9], 12, -1958414417),
                        f = p(f, d, u, c, s[g + 10], 17, -42063),
                        c = p(c, f, d, u, s[g + 11], 22, -1990404162),
                        u = p(u, c, f, d, s[g + 12], 7, 1804603682),
                        d = p(d, u, c, f, s[g + 13], 12, -40341101),
                        f = p(f, d, u, c, s[g + 14], 17, -1502002290),
                        c = p(c, f, d, u, s[g + 15], 22, 1236535329),
                        u = m(u, c, f, d, s[g + 1], 5, -165796510),
                        d = m(d, u, c, f, s[g + 6], 9, -1069501632),
                        f = m(f, d, u, c, s[g + 11], 14, 643717713),
                        c = m(c, f, d, u, s[g + 0], 20, -373897302),
                        u = m(u, c, f, d, s[g + 5], 5, -701558691),
                        d = m(d, u, c, f, s[g + 10], 9, 38016083),
                        f = m(f, d, u, c, s[g + 15], 14, -660478335),
                        c = m(c, f, d, u, s[g + 4], 20, -405537848),
                        u = m(u, c, f, d, s[g + 9], 5, 568446438),
                        d = m(d, u, c, f, s[g + 14], 9, -1019803690),
                        f = m(f, d, u, c, s[g + 3], 14, -187363961),
                        c = m(c, f, d, u, s[g + 8], 20, 1163531501),
                        u = m(u, c, f, d, s[g + 13], 5, -1444681467),
                        d = m(d, u, c, f, s[g + 2], 9, -51403784),
                        f = m(f, d, u, c, s[g + 7], 14, 1735328473),
                        c = m(c, f, d, u, s[g + 12], 20, -1926607734),
                        u = v(u, c, f, d, s[g + 5], 4, -378558),
                        d = v(d, u, c, f, s[g + 8], 11, -2022574463),
                        f = v(f, d, u, c, s[g + 11], 16, 1839030562),
                        c = v(c, f, d, u, s[g + 14], 23, -35309556),
                        u = v(u, c, f, d, s[g + 1], 4, -1530992060),
                        d = v(d, u, c, f, s[g + 4], 11, 1272893353),
                        f = v(f, d, u, c, s[g + 7], 16, -155497632),
                        c = v(c, f, d, u, s[g + 10], 23, -1094730640),
                        u = v(u, c, f, d, s[g + 13], 4, 681279174),
                        d = v(d, u, c, f, s[g + 0], 11, -358537222),
                        f = v(f, d, u, c, s[g + 3], 16, -722521979),
                        c = v(c, f, d, u, s[g + 6], 23, 76029189),
                        u = v(u, c, f, d, s[g + 9], 4, -640364487),
                        d = v(d, u, c, f, s[g + 12], 11, -421815835),
                        f = v(f, d, u, c, s[g + 15], 16, 530742520),
                        c = v(c, f, d, u, s[g + 2], 23, -995338651),
                        u = h(u, c, f, d, s[g + 0], 6, -198630844),
                        d = h(d, u, c, f, s[g + 7], 10, 1126891415),
                        f = h(f, d, u, c, s[g + 14], 15, -1416354905),
                        c = h(c, f, d, u, s[g + 5], 21, -57434055),
                        u = h(u, c, f, d, s[g + 12], 6, 1700485571),
                        d = h(d, u, c, f, s[g + 3], 10, -1894986606),
                        f = h(f, d, u, c, s[g + 10], 15, -1051523),
                        c = h(c, f, d, u, s[g + 1], 21, -2054922799),
                        u = h(u, c, f, d, s[g + 8], 6, 1873313359),
                        d = h(d, u, c, f, s[g + 15], 10, -30611744),
                        f = h(f, d, u, c, s[g + 6], 15, -1560198380),
                        c = h(c, f, d, u, s[g + 13], 21, 1309151649),
                        u = h(u, c, f, d, s[g + 4], 6, -145523070),
                        d = h(d, u, c, f, s[g + 11], 10, -1120210379),
                        f = h(f, d, u, c, s[g + 2], 15, 718787259),
                        c = h(c, f, d, u, s[g + 9], 21, -343485551),
                        u = u + y >>> 0,
                        c = c + C >>> 0,
                        f = f + b >>> 0,
                        d = d + T >>> 0
                }
                return o.endian([u, c, f, d])
            };
            a._ff = function(n, o, r, t, e, i, a) {
                var s = n + (o & r | ~o & t) + (e >>> 0) + a;
                return (s << i | s >>> 32 - i) + o
            }
                ,
                a._gg = function(n, o, r, t, e, i, a) {
                    var s = n + (o & t | r & ~t) + (e >>> 0) + a;
                    return (s << i | s >>> 32 - i) + o
                }
                ,
                a._hh = function(n, o, r, t, e, i, a) {
                    var s = n + (o ^ r ^ t) + (e >>> 0) + a;
                    return (s << i | s >>> 32 - i) + o
                }
                ,
                a._ii = function(n, o, r, t, e, i, a) {
                    var s = n + (r ^ (o | ~t)) + (e >>> 0) + a;
                    return (s << i | s >>> 32 - i) + o
                }
                ,
                a._blocksize = 16,
                a._digestsize = 16,
                n.exports = function(n, r) {
                    if (void 0 === n || null === n)
                        throw new Error("Illegal argument " + n);
                    var t = o.wordsToBytes(a(n, r));
                    return r && r.asBytes ? t : r && r.asString ? i.bytesToString(t) : o.bytesToHex(t)
                }
        }()
    },
    264: 268
});
