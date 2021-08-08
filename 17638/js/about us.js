$(function(){
    $(".subnav .tab li").eq(0).find("i").css({display:"block"});
    $(".subnav .tab li").eq(0).find("a").css({color:"#f14e0d"})
    var size=$(".subnav .tab li").size();
    var w=$("body").width();
    $(".content>ul").css({width:w*size});
    $(".content>ul>li").css({width:w});
    $(".subnav .tab li").click(function(){
        //-------------tab 导航内容
        var subt=$(this).find("a").text();
        // console.log(subt);
        $(".subnav p span").html(subt);
        //---------------------点击效果
        $(this).find("i").css({display:"block"}),$(this).siblings().find("i").hide();
        $(this).find("a").css({color:"#f14e0d"}),$(this).siblings().find("a").css({color:"#666"});
        var index=$(this).index();
        $(".content>ul").animate({marginLeft:-index*w},300);
    });   
   
});