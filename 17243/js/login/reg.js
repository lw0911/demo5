/**
 * Created by lizhenya on 2017/8/1.
 */

webpackJsonp([8], {
    0: function(e, r, t) {
        (function(e) {
                "use strict";
                function r(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
                function o() {
                    if (!e(this).hasClass("disabled") && (e(".account-input").removeClass("error"),
                            e(".register-error").addClass("hide"),
                            e("#register-phone-box").is(":visible") ? (Y = "phone",
                                X = G(),
                                c = Q(X)) : (Y = "email",
                                X = L(),
                                c = K(X)),
                            c)) {
                        X.password = (0,
                            d.default)(X.password),
                            k.addClass("hide"),
                            H.addClass("disabled");
                        var r = a.default + "/merchuser/anon/register.do";
                        e.ajax({
                            url: r,
                            data: X,
                            type: "get",
                            dataType: "jsonp",
                            timeout: 25e3,
                            contentType: "application/json;charset=UTF-8",
                            success: function(e) {
                                e.retcode && "200" == e.retcode ? (sa.track("register", {
                                    platformType: "pc",
                                    phone: X.mobile,
                                    email: X.email,
                                    registerWay: Y
                                }),
                                    H.addClass("login-sucss"),
                                    setTimeout(function() {
                                        location.href = "/appcenter"
                                    }, 1500)) : (W(e.message),
                                    V())
                            },
                            error: function() {
                                V()
                            }
                        })
                    }
                }
                function s(r) {
                    ie = e.trim(e(this).val()),
                        ae = r && r.keyCode,
                    "8" == ae && (e(this).prev().length > 0 && e(this).attr("disabled", !0),
                        e(this).prev().attr("disabled", !1).focus().val("")),
                        le.test(ie) ? (e(this).val(ie.substring(ie.length - 1)),
                            e(this).attr("disabled", !0),
                            e(this).next().attr("disabled", !1).focus()) : e(this).val(""),
                        T.removeClass("error").find(".graph-title>span").html("请输入图形验证码"),
                        de()
                }
                var n = t(3)
                    , i = t(6)
                    , a = r(i)
                    , l = t(29)
                    , d = r(l)
                    , u = void 0
                    , c = void 0
                    , f = void 0
                    , p = void 0
                    , h = void 0
                    , g = void 0
                    , m = (e("body"),
                    e(".graph-close"))
                    , v = e(".msg-code")
                    , b = e(".change-btn")
                    , C = e(".graph-num-img")
                    , y = e(".register-back .email-verif")
                    , w = e(".verify-btn-img")
                    , T = e(".graph-verification")
                    , k = e(".register-error")
                    , N = a.default + "/generic/RandomCode.do"
                    , x = ""
                    , E = e(".toogle-btns li")
                    , B = e(".get-verif-code")
                    , _ = e(".graph-num-box input")
                    , A = /(\d+[a-zA-Z])|([a-zA-Z]+\d+)/
                    , S = e(".register-phone-number")
                    , j = e(".rigster-email-input")
                    , H = e(".register-back-inner .register-btn")
                    , I = e(".register-email-password")
                    , U = e(".register-phone-password")
                    , z = (e(".register-phone-btn"),
                    e(".register-email-btn"),
                    "081d27193d7f4da3805d7279b37f4f37")
                    , M = function() {
                    x = e(void 0).attr("data-target"),
                        E.removeClass("cur"),
                        k.addClass("hide"),
                        e(void 0).addClass("cur"),
                        e(".toogle-item").addClass("none"),
                        e(x).removeClass("none")
                };
                E.on("click", M);
                var O = {
                    emailNone: "请填写邮箱",
                    emailError: "请填写正确的邮箱",
                    emailExist: "邮箱已注册",
                    phoneNone: "请填写手机号码",
                    phoneError: "请填写正确的手机号",
                    phoneExist: "手机号已注册",
                    sendEmail: "完成",
                    pwdNone: "请填写密码",
                    pwdError: "请输入8-20位数字和字母组合密码",
                    vcodeNone: "请输入验证码",
                    vcodeError: "验证码错误",
                    vcodePhoneNone: "请填写验证码",
                    vcodePhoneError: "验证码错误，请重新输入"
                }
                    , P = function(r) {
                    var t = e(r.target);
                    t.attr("src", N + "?" + Date.now()),
                        Z()
                }
                    , Z = function() {
                    _.attr("disabled", !0).val(""),
                        _.eq(0).attr("disabled", !1).focus()
                }
                    , q = 60
                    , F = void 0
                    , R = function e() {
                    B.hasClass("disabled") || B.addClass("disabled"),
                        B.html("重新获取(" + q + ")"),
                        q > 0 ? (q--,
                            F = setTimeout(e, 1e3)) : (B.html("获取验证码").removeClass("disabled"),
                            clearTimeout(F),
                            q = 60)
                }
                    , W = function(e) {
                    k.hasClass("hide") ? k.removeClass("hide").find("span").html(e) : k.find("span").html(e)
                }
                    , D = function(e) {
                    clearTimeout(F),
                        B.removeClass("disabled").html("获取验证码"),
                        q = 60
                }
                    , J = function(e, r, t) {
                    return p = e + r + t + z,
                        (0,
                            d.default)(p)
                }
                    , L = function() {
                    var r = e.trim(j.val())
                        , t = e.trim(I.val())
                        , o = e.trim(y.val())
                        , s = {
                        usermail: n.util.escapeHtml(r),
                        password: n.util.escapeHtml(t),
                        randomcode: n.util.escapeHtml(o),
                        pathway: "02"
                    };
                    return s
                }
                    , G = function() {
                    var r = e.trim(e(".register-phone-password").val())
                        , t = e.trim(e(".msg-code").val());
                    h = e.trim(S.val());
                    var o = {
                        mobile: n.util.escapeHtml(h),
                        password: n.util.escapeHtml(r),
                        smsCode: n.util.escapeHtml(t),
                        pathway: "02"
                    };
                    return o
                }
                    , K = function(r) {
                    return n.util.isNull(r.usermail) ? (W(O.emailNone),
                        j.addClass("error").focus(),
                        !1) : n.util.reg.email.test(r.usermail) ? n.util.isNull(r.password) ? (W(O.pwdNone),
                        I.addClass("error").focus(),
                        !1) : !A.test(r.password) || r.password.length < 8 || r.password.length > 20 ? (W(O.pwdError),
                        I.addClass("error").focus(),
                        !1) : n.util.isNull(r.randomcode) ? (W(O.vcodeNone),
                        e(".email-verif").addClass("error").focus(),
                        !1) : 4 == r.randomcode.length || (W(O.vcodeError),
                            e(".email-verif").addClass("error").focus(),
                            !1) : (W(O.emailError),
                        j.addClass("error").focus(),
                        !1)
                }
                    , Q = function(e) {
                    return n.util.isNull(e.mobile) ? (W(O.phoneNone),
                        S.addClass("error").focus(),
                        !1) : n.util.reg.phone.test(e.mobile) ? n.util.isNull(e.password) ? (W(O.pwdNone),
                        U.addClass("error").focus(),
                        !1) : !A.test(e.password) || e.password.length < 8 || e.password.length > 20 ? (W(O.pwdError),
                        U.addClass("error").focus(),
                        !1) : n.util.isNull(e.smsCode) ? (W(O.vcodePhoneNone),
                        v.addClass("error").focus(),
                        !1) : 6 == e.smsCode.length || (W(O.vcodePhoneError),
                            v.addClass("error").focus(),
                            !1) : (W(O.phoneError),
                        S.addClass("error").focus(),
                        !1)
                }
                    , V = function() {
                    clearTimeout(g),
                        e(".register-back .verify-btn-img").trigger("click"),
                        H.removeClass("disabled")
                }
                    , X = {}
                    , Y = void 0
                    , $ = function() {
                    e(".account-input").removeClass("error"),
                    e(".register-error").hasClass("hide") || e(".register-error").addClass("hide")
                }
                    , ee = function() {
                    $()
                }
                    , re = function() {
                    $()
                }
                    , te = function() {
                    C.trigger("click"),
                        Z()
                }
                    , oe = function() {
                    if (!B.hasClass("disabled")) {
                        S.removeClass("error").focus(),
                            e(".register-error").addClass("hide");
                        var r = e.trim(S.val());
                        return n.util.isNull(r) ? (W("请填写手机号码"),
                            void S.addClass("error").focus()) : n.util.reg.phone.test(r) ? void ue() : (W("请填写正确的手机号码"),
                            void S.addClass("error").focus())
                    }
                }
                    , se = function(e) {
                    T.addClass("error").find(".graph-title>span").html(e)
                }
                    , ne = function(r) {
                    v.val(""),
                        f = n.util.UUID(),
                        h = e.trim(S.val()),
                        u = J(h, r, f);
                    var t = a.default + "/merchuser/anon/getMobileSmsCode.do";
                    e.ajax({
                        url: t,
                        data: {
                            mobile: h,
                            smsCodeType: "01",
                            noncestr: f,
                            sign: u,
                            randomcode: r
                        },
                        type: "get",
                        dataType: "jsonp",
                        contentType: "application/json;charset=UTF-8",
                        success: function(e) {
                            e.retcode && "200" != e.retcode ? (se(e.message),
                                D(),
                                te()) : (R(),
                                T.addClass("success"),
                                setTimeout(ce, 800))
                        },
                        error: function() {
                            D()
                        }
                    })
                }
                    , ie = void 0
                    , ae = void 0
                    , le = /^[0-9a-zA-Z]+$/
                    , de = function() {
                    var r = "";
                    _.map(function() {
                        r += e.trim(e(this).val())
                    }),
                    r && "4" == r.length && ne(r)
                }
                    , ue = function() {
                    T.hasClass("error") && T.removeClass("error").find(".graph-title>span").html("请输入图形验证码"),
                        T.fadeIn(),
                        e(".accont-shadow").fadeIn(),
                        _.eq(0).focus(),
                        C.trigger("click"),
                        _.val("")
                }
                    , ce = function() {
                    e(".graph-verification").fadeOut(),
                        e(".accont-shadow").fadeOut(),
                        T.removeClass("success")
                };
                e(function() {
                    w.on("click", P),
                        C.on("click", P),
                        _.eq(0).attr("disabled", !1).focus(),
                        b.on("click", te),
                        _.on("keyup", s),
                        m.on("click", ce),
                        B.on("click", oe),
                        H.on("click", o),
                        e(".rigster-email-input, .register-email-password, .email-verif").on("keyup", re),
                        e(".register-phone-number, .register-phone-password, .msg-code, .send-verif-btn").on("keyup", ee)
                })
            }
        ).call(r, t(2))
    },
    15: function(e, r) {
        var t = {
            utf8: {
                stringToBytes: function(e) {
                    return t.bin.stringToBytes(unescape(encodeURIComponent(e)))
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(t.bin.bytesToString(e)))
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var r = [], t = 0; t < e.length; t++)
                        r.push(255 & e.charCodeAt(t));
                    return r
                },
                bytesToString: function(e) {
                    for (var r = [], t = 0; t < e.length; t++)
                        r.push(String.fromCharCode(e[t]));
                    return r.join("")
                }
            }
        };
        e.exports = t
    },
    27: function(e, r) {
        !function() {
            var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
                , t = {
                rotl: function(e, r) {
                    return e << r | e >>> 32 - r
                },
                rotr: function(e, r) {
                    return e << 32 - r | e >>> r
                },
                endian: function(e) {
                    if (e.constructor == Number)
                        return 16711935 & t.rotl(e, 8) | 4278255360 & t.rotl(e, 24);
                    for (var r = 0; r < e.length; r++)
                        e[r] = t.endian(e[r]);
                    return e
                },
                randomBytes: function(e) {
                    for (var r = []; e > 0; e--)
                        r.push(Math.floor(256 * Math.random()));
                    return r
                },
                bytesToWords: function(e) {
                    for (var r = [], t = 0, o = 0; t < e.length; t++,
                        o += 8)
                        r[o >>> 5] |= e[t] << 24 - o % 32;
                    return r
                },
                wordsToBytes: function(e) {
                    for (var r = [], t = 0; t < 32 * e.length; t += 8)
                        r.push(e[t >>> 5] >>> 24 - t % 32 & 255);
                    return r
                },
                bytesToHex: function(e) {
                    for (var r = [], t = 0; t < e.length; t++)
                        r.push((e[t] >>> 4).toString(16)),
                            r.push((15 & e[t]).toString(16));
                    return r.join("")
                },
                hexToBytes: function(e) {
                    for (var r = [], t = 0; t < e.length; t += 2)
                        r.push(parseInt(e.substr(t, 2), 16));
                    return r
                },
                bytesToBase64: function(e) {
                    for (var t = [], o = 0; o < e.length; o += 3)
                        for (var s = e[o] << 16 | e[o + 1] << 8 | e[o + 2], n = 0; n < 4; n++)
                            8 * o + 6 * n <= 8 * e.length ? t.push(r.charAt(s >>> 6 * (3 - n) & 63)) : t.push("=");
                    return t.join("")
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var t = [], o = 0, s = 0; o < e.length; s = ++o % 4)
                        0 != s && t.push((r.indexOf(e.charAt(o - 1)) & Math.pow(2, -2 * s + 8) - 1) << 2 * s | r.indexOf(e.charAt(o)) >>> 6 - 2 * s);
                    return t
                }
            };
            e.exports = t
        }()
    },
    28: function(e, r) {
        function t(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        function o(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
        }
        /*!
         * Determine if an object is a Buffer
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        e.exports = function(e) {
            return null != e && (t(e) || o(e) || !!e._isBuffer)
        }
    },
    29: function(e, r, t) {
        !function() {
            var r = t(27)
                , o = t(15).utf8
                , s = t(28)
                , n = t(15).bin
                , i = function(e, t) {
                e.constructor == String ? e = t && "binary" === t.encoding ? n.stringToBytes(e) : o.stringToBytes(e) : s(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                for (var a = r.bytesToWords(e), l = 8 * e.length, d = 1732584193, u = -271733879, c = -1732584194, f = 271733878, p = 0; p < a.length; p++)
                    a[p] = 16711935 & (a[p] << 8 | a[p] >>> 24) | 4278255360 & (a[p] << 24 | a[p] >>> 8);
                a[l >>> 5] |= 128 << l % 32,
                    a[(l + 64 >>> 9 << 4) + 14] = l;
                for (var h = i._ff, g = i._gg, m = i._hh, v = i._ii, p = 0; p < a.length; p += 16) {
                    var b = d
                        , C = u
                        , y = c
                        , w = f;
                    d = h(d, u, c, f, a[p + 0], 7, -680876936),
                        f = h(f, d, u, c, a[p + 1], 12, -389564586),
                        c = h(c, f, d, u, a[p + 2], 17, 606105819),
                        u = h(u, c, f, d, a[p + 3], 22, -1044525330),
                        d = h(d, u, c, f, a[p + 4], 7, -176418897),
                        f = h(f, d, u, c, a[p + 5], 12, 1200080426),
                        c = h(c, f, d, u, a[p + 6], 17, -1473231341),
                        u = h(u, c, f, d, a[p + 7], 22, -45705983),
                        d = h(d, u, c, f, a[p + 8], 7, 1770035416),
                        f = h(f, d, u, c, a[p + 9], 12, -1958414417),
                        c = h(c, f, d, u, a[p + 10], 17, -42063),
                        u = h(u, c, f, d, a[p + 11], 22, -1990404162),
                        d = h(d, u, c, f, a[p + 12], 7, 1804603682),
                        f = h(f, d, u, c, a[p + 13], 12, -40341101),
                        c = h(c, f, d, u, a[p + 14], 17, -1502002290),
                        u = h(u, c, f, d, a[p + 15], 22, 1236535329),
                        d = g(d, u, c, f, a[p + 1], 5, -165796510),
                        f = g(f, d, u, c, a[p + 6], 9, -1069501632),
                        c = g(c, f, d, u, a[p + 11], 14, 643717713),
                        u = g(u, c, f, d, a[p + 0], 20, -373897302),
                        d = g(d, u, c, f, a[p + 5], 5, -701558691),
                        f = g(f, d, u, c, a[p + 10], 9, 38016083),
                        c = g(c, f, d, u, a[p + 15], 14, -660478335),
                        u = g(u, c, f, d, a[p + 4], 20, -405537848),
                        d = g(d, u, c, f, a[p + 9], 5, 568446438),
                        f = g(f, d, u, c, a[p + 14], 9, -1019803690),
                        c = g(c, f, d, u, a[p + 3], 14, -187363961),
                        u = g(u, c, f, d, a[p + 8], 20, 1163531501),
                        d = g(d, u, c, f, a[p + 13], 5, -1444681467),
                        f = g(f, d, u, c, a[p + 2], 9, -51403784),
                        c = g(c, f, d, u, a[p + 7], 14, 1735328473),
                        u = g(u, c, f, d, a[p + 12], 20, -1926607734),
                        d = m(d, u, c, f, a[p + 5], 4, -378558),
                        f = m(f, d, u, c, a[p + 8], 11, -2022574463),
                        c = m(c, f, d, u, a[p + 11], 16, 1839030562),
                        u = m(u, c, f, d, a[p + 14], 23, -35309556),
                        d = m(d, u, c, f, a[p + 1], 4, -1530992060),
                        f = m(f, d, u, c, a[p + 4], 11, 1272893353),
                        c = m(c, f, d, u, a[p + 7], 16, -155497632),
                        u = m(u, c, f, d, a[p + 10], 23, -1094730640),
                        d = m(d, u, c, f, a[p + 13], 4, 681279174),
                        f = m(f, d, u, c, a[p + 0], 11, -358537222),
                        c = m(c, f, d, u, a[p + 3], 16, -722521979),
                        u = m(u, c, f, d, a[p + 6], 23, 76029189),
                        d = m(d, u, c, f, a[p + 9], 4, -640364487),
                        f = m(f, d, u, c, a[p + 12], 11, -421815835),
                        c = m(c, f, d, u, a[p + 15], 16, 530742520),
                        u = m(u, c, f, d, a[p + 2], 23, -995338651),
                        d = v(d, u, c, f, a[p + 0], 6, -198630844),
                        f = v(f, d, u, c, a[p + 7], 10, 1126891415),
                        c = v(c, f, d, u, a[p + 14], 15, -1416354905),
                        u = v(u, c, f, d, a[p + 5], 21, -57434055),
                        d = v(d, u, c, f, a[p + 12], 6, 1700485571),
                        f = v(f, d, u, c, a[p + 3], 10, -1894986606),
                        c = v(c, f, d, u, a[p + 10], 15, -1051523),
                        u = v(u, c, f, d, a[p + 1], 21, -2054922799),
                        d = v(d, u, c, f, a[p + 8], 6, 1873313359),
                        f = v(f, d, u, c, a[p + 15], 10, -30611744),
                        c = v(c, f, d, u, a[p + 6], 15, -1560198380),
                        u = v(u, c, f, d, a[p + 13], 21, 1309151649),
                        d = v(d, u, c, f, a[p + 4], 6, -145523070),
                        f = v(f, d, u, c, a[p + 11], 10, -1120210379),
                        c = v(c, f, d, u, a[p + 2], 15, 718787259),
                        u = v(u, c, f, d, a[p + 9], 21, -343485551),
                        d = d + b >>> 0,
                        u = u + C >>> 0,
                        c = c + y >>> 0,
                        f = f + w >>> 0
                }
                return r.endian([d, u, c, f])
            };
            i._ff = function(e, r, t, o, s, n, i) {
                var a = e + (r & t | ~r & o) + (s >>> 0) + i;
                return (a << n | a >>> 32 - n) + r
            }
                ,
                i._gg = function(e, r, t, o, s, n, i) {
                    var a = e + (r & o | t & ~o) + (s >>> 0) + i;
                    return (a << n | a >>> 32 - n) + r
                }
                ,
                i._hh = function(e, r, t, o, s, n, i) {
                    var a = e + (r ^ t ^ o) + (s >>> 0) + i;
                    return (a << n | a >>> 32 - n) + r
                }
                ,
                i._ii = function(e, r, t, o, s, n, i) {
                    var a = e + (t ^ (r | ~o)) + (s >>> 0) + i;
                    return (a << n | a >>> 32 - n) + r
                }
                ,
                i._blocksize = 16,
                i._digestsize = 16,
                e.exports = function(e, t) {
                    if (void 0 === e || null === e)
                        throw new Error("Illegal argument " + e);
                    var o = r.wordsToBytes(i(e, t));
                    return t && t.asBytes ? o : t && t.asString ? n.bytesToString(o) : r.bytesToHex(o)
                }
        }()
    }
});
