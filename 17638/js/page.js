//弹出信息定义
var ShowPopinfo = {
    //显示弹出层
    popalert: function (t, con, iconnum) {
        layer.alert(con, { icon: iconnum, title: t, zIndex: layer.zIndex });
    },
    pconform: function (t, con, iconnum, callback) {
        layer.confirm(con, { icon: iconnum, title: t, zIndex: layer.zIndex }, function (index) {
            callback(index);
            layer.close(index);
        });
    },
    pconformfun: function (t, con, iconnum, callback) {
        layer.confirm(con, { icon: iconnum, title: t, zIndex: layer.zIndex }, function (index) {
            eval(callback + "()");
            layer.close(index);
        });
    },
    pconformfunparam: function (t, con, iconnum, callback, param) {
        layer.confirm(con, { icon: iconnum, title: t, zIndex: layer.zIndex }, function (index) {
            eval(callback + "(" + param + ")");
            layer.close(index);
        });
    }
};
//var isTouch = Modernizr.touchevents,
//	isMobile = false,
// 	win_width = 0,
// 	win_height = 0,
// 	atH = 0,
// 	$navMobile = jQuery("#navMobile"),
// 	$navA = $navMobile.find("a"),
// 	$mSubnav = $navMobile.find(".msubnav");

function setImgMax(img, imgW, imgH, tW, tH) {
    var tWidth = tW || win_width;
    var tHeight = tH || win_height;
    var coe = imgH / imgW;
    var coe2 = tHeight / tWidth;
    if (coe < coe2) {
        var imgWidth = tHeight / coe;
        img.css({ height: tHeight, width: imgWidth, left: -(imgWidth - tWidth) / 2, top: 0 });
    } else {
        var imgHeight = tWidth * coe;
        img.css({ height: imgHeight, width: tWidth, left: 0, top: -(imgHeight - tHeight) / 2 });
    };
};
function pageBox() {
    win_width = $(window).width();
    win_height = $(window).height();
    if (win_width <= 1024) {
        isMobile = true;
    } else if (win_width > 1024) {
        isMobile = false;
    };
}
function pageBanner() {
    if (!isMobile) {
        jQuery('.pbanner2').css("height", jQuery(".pbanner2 img").height());
    } else {
        jQuery('.pbanner2').css("height", "auto");
    }
    if (jQuery(".pagenav").length >= 1) {
        atH = jQuery(".pbanner2 img").height() - 76;
    }
};
load();
function load() {
    var maxNum = $(".pbanner2 img").size();
    var curNum = 0;
    jQuery(".pbanner2 img").each(function () {
        $(this).attr("src", $(this).attr("_src"));
        jQuery(this).load(function () {
            curNum++;
            if (curNum == maxNum) {
                pageBanner();
            }
        });
    });
};
pageBox();
jQuery(window).resize(function () {
    pageBox();
    pageBanner();
});
$(".menu-handler").removeClass("active")
var menu = {
    trigger: ".menu",
    trigger2: ".menuclose",
    init: function () {
        menu.bind();
    },
    bind: function () {
        $(document).on("click", menu.trigger, menu.openNav);
        $(document).on("click", menu.trigger2, menu.openNav);
    },
    openNav: function () {
        if ($("body").is(".open")) {
            $("body").removeClass("open");
            $(".menu-handler").removeClass("active");
        } else {
            $("body").addClass("open");
            $(".menu-handler").addClass("active");
        }
    }
};

$("#pennav a").click(function (e) {
    var hash = jQuery(this).attr("href").split("#")[1];
    if (hash && jQuery("#" + hash).length == 1) {
        e.preventDefault();
        setScroll("#" + hash);
        $("body").removeClass("open");
        $(".menu-handler").removeClass("active");
    }
});
jQuery("#navMobile .msubnav a").click(function (e) {
    var hash = jQuery(this).attr("href").split("#")[1];
    if (hash && jQuery("#" + hash).length == 1) {
        e.preventDefault();
        setScroll("#" + hash);
        $("body").removeClass("open");
        $(".menu-handler").removeClass("active");
    }
});
function getHash() {
    var hash = location.href.split("#")[1];
    if (hash) {
        setScroll("#" + hash);
    }
};
var scnum = 114;
function setScroll(anchorCur) {
    if (isMobile) {
        scnum = 65;
    } else {
        scnum = 114;
    }
    jQuery("html,body").delay(300).animate({ scrollTop: jQuery(anchorCur).offset().top - scnum }, 800, 'easeInOutExpo');
};
function getHash3() {
    var hash = location.href.split("#")[1];
    if (hash) {
        setScroll3("#" + hash);
    }
};
jQuery(".hrMenu a").click(function (e) {
    var $this = jQuery(this);
    var hash = $this.attr("href").split("#")[1];
    if (hash) {
        setScroll3("#" + hash);
    }
});
var sctopnum = 114, saboutnum = 0;
function setScroll3(anchorCur) {
    if (isMobile) {
        sctopnum = 66;
    } else {
        sctopnum = 76;
    }
    jQuery("html,body").animate({ scrollTop: jQuery(anchorCur).offset().top - (sctopnum + saboutnum) }, 800, 'easeInOutExpo');
};
setPopUp(jQuery(".weixin"), "官方微信");
function setPopUp(obj, title) {
    obj.click(function () {
        var str = '<div class="popUpblack"><div class="popUp"><div class="t">' + title + '<span class="close">关闭</span></div><div class="img"><img src="' + obj.attr("href") + '"/></div></div></div>';
        $("body").append(str);
        jQuery(".popUpblack").fadeIn();
        jQuery(".popUp").animate({ marginTop: "-127" }, 400);
        $(".popUp .close").click(function () {
            $(".popUpblack").remove();
        });
        jQuery(".popUpblack").click(function () { $(".popUpblack").remove(); });
        return false;
    });
};
jQuery(function () {
    menu.init();
    jQuery(".backTop").bind("click", function () { jQuery('html, body').stop().animate({ scrollTop: 0 }, 800, 'easeInOutExpo'); });
    jQuery("#navMobile>dd>p>a").bind("click", function (e) {
        var hjcur = $(this);
        var hjDD = $(this).parents("p").parents("dd");
        if (hjDD.find(".msubnav").size() > 0) {
            if (hjcur.hasClass("cur")) {
                hjDD.find(".msubnav").stop(false, false).slideUp();
                hjcur.removeClass("cur");
            } else {
                $navA.removeClass("cur");
                $mSubnav.stop(false, false).slideUp();
                hjDD.find(".msubnav").stop(false, false).slideDown();
                hjcur.addClass("cur");
                e.preventDefault();
            }
        }
    });

    function pbannerW() {
        if (!isMobile) {
            jQuery(".pbanner").css({ "height": win_height, "width": win_width });
            setImgMax(jQuery(".pbanner img"), 1920, 950, win_width, win_height);
            atH = win_height - 76;
        } else {
            jQuery(".pbanner").css({ "height": "auto", "width": "100%" });
            jQuery(".pbanner img").attr("style", "").css({ "position": "relative" });
        }
    };
    pbannerW();
    var $pbanner = jQuery(".pbanner");
    if ($pbanner.length >= 1) {
        setTimeout(function () {
            $pbanner.addClass('trans-1');
            $pbanner.removeClass('picw');
        }, 100);
        setTimeout(function () {
            $pbanner.removeClass('trans-1');
        }, 600);
    };
    jQuery(window).resize(function () {
        pbannerW();
    });
    if (jQuery(".pagenav").length >= 1) {
        atH = jQuery(".pagenav").offset().top - 76;
    }
    if (jQuery(window).scrollTop() > 0) {
        jQuery(".top").addClass("topfix");
        jQuery(".hrTop").addClass("topfix");
    }
    jQuery(window).scroll(function () {
        var windowTop = jQuery(window).scrollTop();
        if (windowTop > 0) {
            jQuery(".top").addClass("topfix");
            jQuery(".hrTop").addClass("topfix");
        } else {
            jQuery(".top").removeClass("topfix");
            jQuery(".hrTop").removeClass("topfix");
        };
        if (windowTop > atH && !isMobile) {
            jQuery(".pagenav").addClass("fixed");
        } else if (windowTop < atH && !isMobile) {
            jQuery(".pagenav").removeClass("fixed");
        };
        if (windowTop > 100) {
            jQuery(".backTop").stop(false, false).animate({ bottom: "60" }, 200);
        } else {
            jQuery(".backTop").stop(false, false).animate({ bottom: "-50" }, 300);
        };
        if (windowTop < win_height && !isMobile) {
            jQuery('.pbanner img').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
            jQuery('.pbanner2 img').css('transform', "translate(0px," + (windowTop) / 1.5 + "px)");
        }
    });
    if (isMobile) {
        var danNum = 0;
        jQuery(".cpnav").bind("click", function () {
            if (danNum == 0) {
                jQuery(this).next(".inner").fadeIn();
                danNum = 1;
            } else {
                jQuery(this).next(".inner").fadeOut();
                danNum = 0;
            }
        });
    }
    var $pbanner2 = jQuery(".pbanner2");
    if ($pbanner2.length >= 1) {
        setTimeout(function () {
            $pbanner2.addClass('trans-1');
            $pbanner2.removeClass('picw');
        }, 100);
        setTimeout(function () {
            $pbanner2.removeClass('trans-1');
        }, 600);
    };
});
