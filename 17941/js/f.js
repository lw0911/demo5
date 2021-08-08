/// <reference path="jquery-1.9.1.min.js" />
$(function () {
    $(".Js_closeBtn").click(function () {
        $(".adduser,.f_delete").fadeOut(200);
    });
    $(".Js_edit").click(function () {

        $(".adduser").fadeIn(200);
    });
    $(".Js_delete").click(function () {
        $(".f_delete").fadeIn(200);
    });

    //左侧菜单
    //$(".Js_MenuList").click(function () {
    //    if ($(".Js_leftBox").css("left") == "0px") {
    //        $(".Js_RightBox").css("width", "96%");
    //        $(".Js_leftBox").animate({ left: "-13%" }, 200);
    //        $(".Js_RightBox").animate({ left: "0" }, 200);
    //    } else {
    //        $(".Js_RightBox").css("width", "83%");
    //        $(".Js_leftBox").animate({ left: "0" }, 200);
    //        $(".Js_RightBox").animate({ left: "13%" }, 200);

    //    }
    //});

    //返回顶部
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    $('.back-to-top').on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

});