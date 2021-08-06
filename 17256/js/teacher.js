/**
 * Created by nissachang on 2017/6/13 0013.
 */
$(function() {
    var ul2 = document.getElementById("teacherlist");
    var lis2 = ul2.getElementsByTagName("li");
    for (var i = 0; i < lis2.length; i++) {
    }
    ;
    lis2[0].className = "newsnote";
    lis2[4].className = "newsnote";






    $("#teacherlist li").hover(
        function () {
            $(this).stop().toggleClass("boxshadow");
        },
        function () {
            $(this).stop().toggleClass("boxshadow");
        }
    );


})














