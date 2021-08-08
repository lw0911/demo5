/**
 * Created by Administrator on 15-6-11.
 */
$(function(){
    var b = $('.base-title').width();
    var ls = 0;
    $('.base-title ul li').each(function(){
        var w = $(this).width();
        if(typeof $(this).outWidth == "function"){
            w = $(this).outWidth(true);
        }
        ls += w;
    });
    $('.base-title ul').width(ls + "px").css("margin-left",b/2-ls/2 + "px");
})