// JavaScript Document

$(function () {

    $(".wnewsWraper ul:eq(0)").show();
    $(".wnewsNav a:eq(0)").addClass("cur");

    function content() {


        var overflowwid = $("body").css("overflow", "hidden").width();
        var windowwid = $("body").removeAttr("style").width();
        var scrollwid = overflowwid - windowwid;



        if ($(document).width() > 1000) {
            //导航
            $(".navBtn").unbind("click");
            $(".navBg").unbind("click");
            $(".nav").show();
            $(".navBg").hide();
            $(".weixinCon").hide();
            $(".navBtn").removeClass("g_close")


            //二级下拉					 
            $(".nav ul li").unbind("mouseenter").bind("mouseenter", function () {
                $(this).find(".subMenu").stop(true, true).fadeIn(300);
            });

            $(".nav ul li").unbind("mouseleave").bind("mouseleave", function () {
                $(this).find(".subMenu").stop(true, true).fadeOut();
            });
            //微信
            $(".weixin").unbind("mouseenter").bind("mouseenter", function () {
                $(this).find(".weixinCon").show();
                $(".navBg").hide();
            });
            $(".weixin").unbind("mouseleave").bind("mouseleave", function () {
                $(this).find(".weixinCon").hide();
                $(".navBg").hide();
            });

            //语言
            $(".wqpLan").unbind("mouseenter").bind("mouseenter", function () {
                $(this).find(".lanuageList").show();
            });
            $(".wqpLan").unbind("mouseleave").bind("mouseleave", function () {
                $(this).find(".lanuageList").hide();
            });

            //首页新闻切换
            $(".wnewsNav a").each(function (index, element) {
                $(this).mouseenter(function () {
                    //start 2020.9.20
                    var moreUrl = $(this).attr("rel-url");
                    if (moreUrl != '' && moreUrl != null) {
                        $(".wnewsMore").attr("href", moreUrl);
                    }
                    //end

                    $(this).addClass("cur").siblings().removeClass("cur")
                    $(".wnewsWraper ul").eq(index).show().siblings().hide();
                })
            });

        }
        else {

            $(".nav").hide();
            $(".navBg").hide();
            $(".weixinCon").hide();
            $(".navBtn").removeClass("g_close")
            //移动端菜单
            $(".navBtn").unbind("click").bind("click", function () {
                if ($(".nav").is(":hidden")) {
                    $(this).addClass("g_close")
                    $(".nav").slideDown(300);
                    $(".navBg").show();
                }
                else {
                    $(this).removeClass("g_close");
                    $(".nav").slideUp();
                    $(".navBg").hide();
                }
            });

            //微信
            $(".weixin").unbind("mouseenter");
            $(".weixin").unbind("mouseleave");
            $(".weixin").unbind("click").bind("click", function () {
                if ($(".weixinCon").is(":hidden")) {

                    $(".weixinCon,.navBg").show();
                }
                else {
                    $(".weixinCon,.navBg").hide();
                }
            })


            $(".navBg").unbind("click").bind("click", function () {
                $(this).hide();
                $(".nav").slideUp();
                $(".navBtn").removeClass("g_close");
                $(".weixinCon").hide();
            });



            $(".nav ul li").unbind("mouseenter");
            $(".nav ul li").unbind("mouseleave");
            //二级下拉
            $(".nav ul li").unbind("click").bind("click", function () {
                if ($(this).find(".subMenu").is(":hidden")) {
                    /* $(this).find(".subMenu").slideDown().parent().siblings().find(".subMenu").slideUp();
                     $(this).addClass("cur").siblings().removeClass("cur");*/
                    $(".nav ul li .subMenu").slideUp(300);
                    $(".nav ul li").removeClass("cur");
                    $(this).addClass("cur");
                    $(this).find(".subMenu").slideDown(300);
                }
                else {
                    $(this).find(".subMenu").slideUp();
                    $(this).removeClass("cur");
                }
            });

            //首页新闻切换

            $(".wnewsNav a").unbind("mouseenter");
            $(".wnewsNav a").each(function (index, element) {
                $(this).click(function () {
                    //start 2020.9.20
                    var moreUrl = $(this).attr("rel-url");
                    if (moreUrl != '' && moreUrl != null) {
                        $(".wnewsMore").attr("href", moreUrl);
                    }
                    //end
                    $(this).addClass("cur").siblings().removeClass("cur")
                    $(".wnewsWraper ul").eq(index).show().siblings().hide();
                })
            });

        }



        if ($(document).width() > 1440) {
            var _height = $(".FactoryList ul li img").height();
            $(".wListbtn span").css("height", _height)
            $('.rightFixed').css("right", ($(window).width() - 1200) / 2 - 120);
            }   
        else{
            $('.rightFixed').css("right", "10px");
         }


    }
    content();
    $(window).resize(function () {
        content();
    });

    $(".ColumnOnenav a:eq(0)").addClass("cur");
    $(".ColumnOnenav a").each(function (index, element) {
        $(this).click(function () {

            $(this).addClass("cur").siblings().removeClass("cur");
            $(".ColumnWraper .indexColumnList").eq(index).show().siblings().hide();
            
        });
    })

    
        
    //首页销售网络
    $(".zdsworkbtn a").eq(0).addClass("cur");
    $(".zdschangeworklist").eq(0).show();
    $(".zdsworkbtn a").click(function () {
        var thisindex = $(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(".zdschangeworklist").eq(thisindex).show().siblings().hide();
    });

    $(".wnetSales li,.Workshop li,.nabroadlist li").hover(function () {
        $(this).find(".netContent").show();
    }, function () {
        $(".netContent").hide();
    });

 
    $(".ColumnWraper .indexColumnList").hide();
    $(".ColumnWraper .indexColumnList:eq(0)").show();

    //返回头部
    $(".rightFixed ul li.li2").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 760);
    });


    var _width = $(window).width();
    if (_width > 1180) {
        $(window).scroll(function (e) {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > 670) {
                $('.rightFixed').css({ 'position': 'fixed', 'top': '100px' })
            } else {
                $('.rightFixed').css({ 'position': 'absolute', 'top': '670px' })
            }
        });
        //侧漂
        offHarry = [];
        $(".rightFixed ul li:eq(0)").addClass("cur");
        $(".scroll").each(function (index, element) {
            var offT = $(this).offset().top;
            offHarry.push(offT);
        });
        $('.rightFixed ul li.li1').click(function () {
            $(this).addClass('cur').siblings().removeClass('cur');
            var aIn = $(this).index();
            $("body,html").animate({ "scrollTop": offHarry[aIn] });
        });
    }

    //首页banner
    function mobile() {
        if ($(document).width() > 640) {
            $(".index-banner ul li").each(function (index, element) {
                var _pcimg = $(this).attr("pc-img");
                $(this).find("img").attr("src", _pcimg)
            });

            //内页
            var _inpcimg = $(".Displaybanner p").attr("pc-img");
            $(".Displaybanner img").attr("src", _inpcimg)
        }
        else {
            $(".index-banner ul li").each(function (index, element) {
                var _mobileimg = $(this).attr("mod-img");
                $(this).find("img").attr("src", _mobileimg)
            })
            //内页
            var _inmocimg = $(".Displaybanner p").attr("mod-img");
            $(".Displaybanner img").attr("src", _inmocimg)
        }
    }
    mobile();
    $(window).resize(function () {
        mobile()
    })


    // 人才招聘 zxc
    rencaizhaoping();

    // 标准认证/资质荣誉
    //-------- 图片资源 --------

    $(".xcsmall ul").on("click", "li", function () {
        if ($(window).width() < 766) return false;
        piclist();
        var Inde = $(this).index() + 1;
        $(".certificate-popup").fadeIn();
        var mySwiper = new Swiper('.certificate-popupbox', {
            loop: true,
            autoplay: false,
            speed: 800,
            pagination: '',
            nextButton: '.certificate-popupbox .xcnext',
            prevButton: '.certificate-popupbox .xcprev',
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
            grabCursor: true,
            parallax: true
        });

    });

    $(".certificate-popupbox .xcclose").click(function () {
        $(".certificate-popup").fadeOut(function () {
            $(".certificate-popupbox ul").html("");
        });

    });

    // 产品详情
    $('.xcpro-detailtab').find('a:eq(0)').addClass('active');
    $('.xcpro-detailcont:eq(0)').fadeIn();
    $('.xcpro-detailtab').find('a').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $('.xcpro-detailcont').stop(false, true).fadeOut().eq($(this).index()).stop(false, true).fadeIn();
    });

    //首页最新产品切换
    $.each($(".ColumnWraper .indexColumnList"), function () {
        var _lilength = $(this).find("li").length;
        if (_lilength > 4) {
            $(this).find(".wbannerbtn").show();
        }
        else {
            $(this).find(".wbannerbtn").hide();
        }
    })
    

});

function rencaizhaoping() {

    $(".Recruitmentlist li").eq(0).addClass("cur");
    $(".RecruitmentContent").eq(0).show();
    $(".Recruitmentlist li h3").unbind("click");
    $(".Recruitmentlist li h3").click(function () {
        if ($(this).next().is(":hidden")) {
            $(".RecruitmentContent").slideUp(300);
            $(".Recruitmentlist li").removeClass("cur");
            $(this).parents("li").addClass("cur");
            $(this).next().slideDown(300);
        } else {
            $(this).parents("li").removeClass("cur");
            $(this).next().slideUp(300);
        }
    });
}

function piclist() {
    var listLength = $(".xcsmall ul li");
    //var imgArray = [];
    var liHtml = "";
    for (var i = 0; i < listLength.length; i++) {
        var imgList = listLength.eq(i).find("img").attr("src");
        var text = listLength.eq(i).find(".xctitle").html();
        liHtml += "<li class='swiper-slide'><img src=" + imgList + " /><p class='xctitle'>" + text + "</p></li>";
        $(".certificate-popupbox ul").html(liHtml);
    }
}

