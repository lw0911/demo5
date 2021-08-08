$(function(){
// ---------面包屑导航的tab切换  
    $(".bread .breadRight li").eq(0).addClass("current"); 
    $(".bread .breadRight li").find("i").eq(0).css("opacity","1");
     $(".bread .breadRight li").click(function(){
        $(this).addClass("current").siblings().removeClass("current");
        $(this).find("i").css({opacity:"1"}),$(this).siblings().find("i").css({opacity:"0"});

        // $(".news .newsCon").stop().animate({left:-1200},function(){
        //     $(".news .newsCon").children("li").first().clone().appendTo(this).css({left:0});
        //     $(this).children("li").first().remove();
        //     $(".news .newsCon").css({left:0});
        //      });
        });

// news左侧
    

// -------------------------------最外层括号
    })