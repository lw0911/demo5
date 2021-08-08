/**
 * Created by lvkun2 on 2017/2/14.
 */
$(function () {
    //隐藏菜单
    $("#left").on("click", function () {
        $("#right").hide();
        $("#left").hide();
        $("#left_fixed").show();
    })
    $("#left_fixed").on("click", function () {
        $("#right").show();
        $("#left").show();
        $("#left_fixed").hide();
    })
    //隐藏菜单滚动时固定
    //var bnt_fixed=$(".classify_fill_fixed").height();
    //var max_box=$(".big_classify_fill").height();
    //$(window).scroll(function () {
    //    var scrollTop=$(document).scrollTop();
    //    if(scrollTop>=max_box){
    //        $(".big_classify_fill").css({
    //            "position": "fixed",
    //            "top": bnt_fixed,
    //            "z-index": 100000000
    //        })
    //    }else{
    //        $(".big_classify_fill").css("position", "static");
    //    }
    //})








})