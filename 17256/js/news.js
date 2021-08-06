/**
 * Created by nissachang on 2017/6/13 0013.
 */
$(function() {
    var ul = document.getElementById("newslist");
    var lis = ul.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
    }
    ;
    lis[1].className = "newsnote";
    lis[4].className = "newsnote";

    $("#newslist li").hover(
        function () {
            $(this).children(".cover").stop().toggleClass("dsbnone");
            $(this).children(".cover").stop().toggleClass("dsblock");
            $(this).children(".newstxt").children("h3").stop().toggleClass("ftc-b");
            $(this).children(".newstxt").children("h3").stop().toggleClass("ftc-1065a1");
            $(this).stop().toggleClass("boxshadow");
        },
        function () {
            $(this).children(".cover").stop().toggleClass("dsbnone");
            $(this).children(".cover").stop().toggleClass("dsblock");
            $(this).children(".newstxt").children("h3").stop().toggleClass("ftc-b");
            $(this).children(".newstxt").children("h3").stop().toggleClass("ftc-1065a1");
            $(this).stop().toggleClass("boxshadow");
        }
    );
})














