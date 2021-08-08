/**
 * Created by Administrator on 2016/3/30.
 */
$(function(){
    $(".subNav").click(function(){
//                        $(this).toggleClass("currentDd").siblings(".subNav").removeClass("currentDd");
        $(this).toggleClass("currentDt").siblings(".subNav").removeClass("currentDt");
        $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500);
    })
})