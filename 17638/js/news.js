$(function(){
// ---------面包屑导航的tab切换  
    $(".bread .breadRight li").eq(0).addClass("current"); 
    $(".bread .breadRight li").find("i").eq(0).css({display:"block"});
    $(".news .newsCon").children("li").eq(0).clone().appendTo($(".news .newsCon"));
     $(".bread .breadRight li").click(function(){
        // var i=$(this).index();
        $(this).addClass("current").siblings().removeClass("current");
        $(this).find("i").css({display:"block"}),$(this).siblings().find("i").css({display:"none"});
        var index=$(this).index();
        $(".news .newsCon").animate({marginLeft:-index*1200},300);
        });

// -------------------------------最外层括号
    })