$(function () {

    // 头部tab
    $('.tab_menu_l p').mouseover(function () {
        var data = $(this).attr("data");
        $('.tab_menu_l p').removeClass("hover");
        $(this).addClass("hover");
        $('.tab_menu_r').css("display", "none");
        $('.tab_menu_r').eq(data).css("display", "block");
    })


    // 头部飘来飘去那条
    $(".game_com_list").each(function () {
        var line = $(this).find(".line");
        $(this).find("li").each(function (i) {
            $(this).hover(function () {
                $(this).siblings().removeClass("on");
                $(this).addClass("on");
                line.stop(true, false).animate({
                    "left": $(this).position().left + 0 + 'px'
                },
                    500)
            });
        });
    });


    // banner幻灯片儿
    (function ($) {
        $.fn.Slide = function (options) {
            var defaults = {
                item: "slide-item",
                nav: "slide-nav",
                nowClass: "nownav",
                loading: "slide-loading"
            },
                options = options || {};
            options = $.extend(defaults, options);
            var cont = $(this),
                item = cont.find("." + options.item),
                nav = cont.find("." + options.nav),
                curr = options.nowClass,
                len = item.length,
                width = item.width(),
                html = "",
                index = order = 0,
                timer = null,
                lw = "-" + width + "px",
                rw = width + "px",
                newtimer,
                ld = cont.find("." + options.loading);
            item.each(function (i) {
                $(this).css({
                    left: i === index ? 0 : (i > index ? width + 'px' : '-' + width + 'px')
                });
                html += '<a href="javascript:">' + (i + 1) + '</a>';
            });

            nav.html(html);
            var navitem = nav.find("a");
            navitem.eq(index).addClass(curr);
            function anim(index, dir) {
                loading();
                if (order === len - 1 && dir === 'next') {
                    item.eq(order).stop(true, false).animate({
                        left: lw
                    });
                    item.eq(index).css({
                        left: rw
                    }).stop(true, false).animate({
                        left: 0
                    });
                } else if (order === 0 && dir === 'prev') {
                    item.eq(0).stop(true, false).animate({
                        left: rw
                    });
                    item.eq(index).css({
                        left: lw
                    }).stop(true, false).animate({
                        left: 0
                    });
                } else {
                    item.eq(order).stop(true, false).animate({
                        left: index > order ? lw : rw
                    });
                    item.eq(index).stop(true, false).css({
                        left: index > order ? rw : lw
                    }).animate({
                        left: 0
                    });
                }
                order = index;
                navitem.removeClass(curr).eq(index).addClass(curr);
            }
            function next() {
                index = order >= len - 1 ? 0 : order + 1;
                _stop();
                ld.stop(true, true).animate({
                    "width": 0
                },
                    0);
                anim(index, 'next');
                timer = setInterval(next, 5000);
            }
            function prev() {
                index = order <= 0 ? len - 1 : order - 1;
                _stop();
                ld.stop(true, true).animate({
                    "width": 0
                },
                    0);
                anim(index, 'prev');
                timer = setInterval(next, 5000);
            }
            function auto() {
                loading();
                timer = setInterval(next, 5000);
            }
            function _stop() {
                clearInterval(timer);
            }
            function loading() {
                ld.css({
                    "height": "0",
                    "height": "5px",
                    "position": "absolute",
                    "left": "0",
                    "bottom": "0",
                    "background": "#ffe825",
                    "z-index": "10"
                });
                ld.animate({
                    "width": "100%"
                },
                    5000).animate({
                        "width": 0
                    },
                    0);
            }
            return this.each(function () {
                auto();
                navitem.hover(function () {
                    _stop();
                    var i = navitem.index(this);
                    if (/nownav/.test($(this).attr('class'))) {
                        return false;
                    }
                    if (newtimer) clearTimeout(newtimer);
                    newtimer = setTimeout(function () {
                        _stop();
                        ld.stop(true, true).animate({
                            "width": 0
                        }, 0);
                        anim(i, this);
                    }, 250);
                }, auto);
                $('#next').on('click', next);
                $('#prev').on('click', prev);
            });
        };
    })(jQuery);
    $("#slide").Slide();


    // 热门游戏tab
    $('.itab').hover(function () {
        var index = $(this).index();
        $(this).addClass('hover').siblings('.itab').removeClass('hover');
        $('.b3-l-slidebox').eq(index).show().siblings('.b3-l-slidebox').hide();
    })


    // 新游视频缩放条
    function bline(obj) {
        obj.each(function () {
            $(this).append("<div class='b_line'></div>");
            var b_line = $(this).find(".b_line");
            b_line.css({
                "position": "absolute",
                "width": "100%",
                "left": "-100%",
                "bottom": 0
            });
            $(this).hover(function () {
                b_line.stop(true, false).animate({
                    left: 0
                }, 300)
            }, function () {
                b_line.stop(true, false).animate({
                    left: "-100%"
                }, 300)
            });
        });
    };
    bline($('.video_a'));
    bline($('.video_b'));


    // 新游排行
    $('.b4-xf-list li').on('mouseenter', function () {
        $('.b4-xf-list li .b4-xfl1').show();
        $('.b4-xf-list li .b4-xfl2').hide();
        $(this).find('.b4-xfl1').hide();
        $(this).find('.b4-xfl2').show();
    })


    // 右侧浮动导航栏
    $(window).bind("scroll", function() {
        var b = $(this).scrollTop();
        b >= 315 && 625 > b ? ($(".leftnav").css({
            position: "fixed",
            top: "85px"
        }),
        $(".leftnav li:eq(0)").addClass("current").siblings("li").removeClass("current")) : b >= 625 && 1300 > b ? ($(".leftnav").css({
            position: "fixed",
            top: "85px"
        }),
        $(".leftnav li:eq(1)").addClass("current").siblings("li").removeClass("current")) : b >= 1300 && 1700 > b ? ($(".leftnav").css({
            position: "fixed",
            top: "85px"
        }),
        $(".leftnav li:eq(2)").addClass("current").siblings("li").removeClass("current")) : b >= 1595 && 2000 > b ? ($(".leftnav").css({
            position: "fixed",
            top: "85px"
        }),
        $(".leftnav li:eq(3)").addClass("current").siblings("li").removeClass("current")) : b >= 2655 && 3114 > b ? ($(".leftnav").css({
            position: "fixed",
            top: "85px"
        }),
        $(".leftnav li:eq(4)").addClass("current").siblings("li").removeClass("current")) : 668 > b && ($(".leftnav li").removeClass("current"),
        $(".leftnav").css({
            position: "absolute",
            top: "400px"
        }))
    });
    $("#gotop").click(function() {
        $(".leftnav li").removeClass("current"),
        $("body,html").animate({
            scrollTop: 0
        }, 400)
    });
    $(".nav-8-box").hover(function() {
        $(this).find("a").addClass("current"),
        $(this).find("div").fadeIn(400)
    }, function() {
        $(this).find("a").removeClass("current"),
        $(this).find("div").fadeOut(400)
    });
    $(".leftnav a.nav-link").bind("click", function() {
        var a = $(this).attr("data-id")
          , b = "#" + a;
        $("html,body").animate({
            scrollTop: $(b).offset().top
        }, 400),
        $(this).parent().addClass("current").siblings("li").removeClass("current")
    });
    function resi(){
        var a = $(window).width(),
            b = 0;
        b = a >= 1550 ? (a - 1200) / 2 - 140 - $(".leftnav").width() : 0,
        $(".leftnav").css({
            right: b
        })
    };
    resi();
    $(window).resize(function() {
        resi();
    })

})