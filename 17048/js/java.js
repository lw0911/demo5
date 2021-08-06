/*js代码(www.jsdaima.com)拒绝滥竽充数，我们只提供精品资源！*/
window.onload = function(){
    //首页教师团队
    $(".jstd_ul li").hover(function () {
        var x=$(this).index();
        $(this).addClass("cur").siblings().removeClass("cur");
        $(this).parents(".jstd_ul").siblings(".jstd_info").children(".jstd_info_con").eq(x).css({"display":"block"}).siblings(".jstd_info_con").css({"display":"none"});
    });
}