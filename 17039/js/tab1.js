(function(e) {
    e.fn.OM_HDP = function(t) {
        function v() {
            u == e("li", s).length - 1 ? e("li:eq(0)", s).mouseover() : e("li", s).eq(u).next("li").mouseover()
        }
        var n = {
            delay: 0,
            time: 0,
            title: 0,
            type: 0
        },
        r = e.extend({},
        n, t),
        s = e(this),
        o = "",
        u = 0,
        a = s.css("width"),
        f = s.css("height");
        r.type == 0 && (l = e("img", s).length, e("img", s).css({
            width: a,
            height: f,
            left: "0px",
            top: "0px",
            border: "none",
            display: "none",
            position: "absolute"
        }));
        if (r.type == 1) {
            e("img", s).css({
                width: a,
                height: f,
                "float": "left",
                display: "block",
                border: "none"
            }),
            _content = s.html(),
            s.html("<div class='pic_scroll'><div class='cont con0'>" + _content + "</div><div class='cont'>" + _content + "</div></div>");
            var l = e("img", s).length / 2,
            c = parseInt(a) * l,
            p = 0;
            e(".pic_scroll").css({
                width: c * 2 + "px",
                height: f,
                position: "relative"
            }),
            e(".cont").css({
                width: c + "px",
                height: f,
                "float": "left"
            })
        }
        if (r.type == 2) {
            e("img", s).css({
                width: a,
                height: f,
                display: "block",
                border: "none"
            }),
            _content = s.html(),
            s.html("<div class='pic_scroll'><div class='cont con0'>" + _content + "</div><div class='cont'>" + _content + "</div></div>");
            var l = e("img", s).length / 2,
            d = parseInt(f) * l,
            p = 0;
            e(".pic_scroll").css({
                width: a,
                height: d * 2 + "px",
                position: "relative"
            }),
            e(".cont").css({
                width: a,
                height: d + "px"
            })
        }
        s.append("<ul></ul>");
        for (i = 1; i < l + 1; i++) o += "<li>" + i + "</li>";
        e("ul", s).html(o),
        e("ul", s).css({
            position: "absolute",
            padding: "6px 5px 5px 5px",
            margin: "0px",
            bottom: "12px",
            right: "0",
            "z-index": 999
        }),
        e("li", s).css({
            "float": "left",
            listStyleType: "none",
            color: "#fff",
            display: "inline",
            textAlign: "center",
            width: "7px",
            height: "7px",
            marginTop: "0px",
            marginRight: "3px",
            marginBottom: "0px",
            marginLeft: "3px",
            lineHeight: "7px",
            backgroundColor: "#b60202",
            cursor: "pointer",
			borderRadius:"50%",
			fontSize:"0"
        }),
        r.title == 1 && (s.append("<div class='hdp_bg'></div>"), s.append("<div class='hdp_title'></div>"), e(".hdp_bg").css({
            position: "absolute",
            width: 80+ "px",
            height: "20px",
            bottom: "0px",
            right: "0px",
            backgroundColor: "none",
            opacity: .5,
			borderRadius:"10px 0 0 10px",
            "z-index": 50
        }), e(".hdp_title").css({
            position: "absolute",
            width: parseInt(s.css("width")) - e("ul", s).width() - 80 + "px",
            height: "30px",
            bottom: "0px",
            left: "0px",
            lineHeight: "30px",
            paddingLeft: "20px",
            overflow: "hidden",
            color: "#FCD998",
            "z-index": 50
        })),
        e("li", s).live("mouseover", 
        function() {
            u = e("li", s).index(this),
            a_curr = e(".con0").find("a").eq(u),
            r.type == 0 && (a_curr = e("a", s).eq(u), e("img", s).is(":animated") && e("img", s).stop(), a_curr.find("img").fadeIn(r.delay), a_curr.siblings("a").find("img").fadeOut(r.delay)),
            r.type == 1 && (e(".pic_scroll").is(":animated") && (abs(parseInt(e(".pic_scroll").css("left")) % parseInt(a)) >= parseInt(a) / 2 ? e(".pic_scroll").animate({
                left: "-=" + parseInt(a) - abs(parseInt(e(".pic_scroll").css("left")) % parseInt(a))
            },
            r.delay) : e(".pic_scroll").animate({
                left: "-=" + parseInt(a) + abs(parseInt(e(".pic_scroll").css("left")) % parseInt(a))
            },
            r.delay), e(".pic_scroll").stop()), e(".pic_scroll").css("left") == "-" + c + "px" && e(".pic_scroll").css("left", "0px"), e(".pic_scroll").animate({
                left: "-=" + parseInt(a) * (u - p)
            },
            r.delay), p = u),
            r.type == 2 && (e(".pic_scroll").is(":animated") && (abs(parseInt(e(".pic_scroll").css("top")) % parseInt(f)) >= parseInt(f) / 2 ? e(".pic_scroll").animate({
                top: "-=" + parseInt(f) - abs(parseInt(e(".pic_scroll").css("top")) % parseInt(f))
            },
            r.delay) : e(".pic_scroll").animate({
                top: "-=" + parseInt(f) + abs(parseInt(e(".pic_scroll").css("top")) % parseInt(f))
            },
            r.delay), e(".pic_scroll").stop()), e(".pic_scroll").css("top") == "-" + d + "px" && e(".pic_scroll").css("top", "0px"), e(".pic_scroll").animate({
                top: "-=" + parseInt(f) * (u - p)
            },
            r.delay), p = u),
            e(this).addClass("icon_hover").css({
                color: "#fb7600",
                backgroundColor: "#fff",
                fontWeight: "bold"
            }).siblings().removeClass("icon_hover").css({
                color: "#fff",
                backgroundColor: "#b60202",
                fontWeight: "bold"
            }),
            r.title == 1 && (atitle = a_curr.attr("title") == "undefined" ? "": a_curr.attr("title"), e(".hdp_title").text(atitle)),
            clearInterval(h),
            h = setInterval(v, r.time)
        }),
        e("img", s).hover(function() {
            clearInterval(h)
        },
        function() {
            h = setInterval(v, r.time)
        }),
        h = setInterval(v, r.time),
        e("li:eq(0)", s).mouseover()
    }
})(jQuery)