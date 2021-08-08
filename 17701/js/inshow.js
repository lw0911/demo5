/**
 * Created by Administrator on 2016/3/21.
 */
$(function(){

    $('.wmdxul ul li').hover(function(){
        $(this).children('.wmxqlj').stop(true,true).delay(100).animate({'top':0,opacity:1},300);
    },function(){
        $(this).children('.wmxqlj').stop(true,true).animate({'top':-317,opacity:0},200);
    })

})