/**
 * Created by Administrator on 2021/8/2.
 */
$(function () {

    // 多个元素不同变化方式（需要在HTML中加入js-tab）
    $('[js-tab=1]').tab();

    $('[js-tab=2]').tab({
        curDisplay: 2,
        changeMethod: 'horizontal'
    });

    $('.lanren li').mouseenter(function(){
        $(this).find('.divA').stop().animate({bottom:'0px'});
        $(this).find('.a2').css({left:'0'})
        $(this).children('.a2').find('.p4').css({left:'0'})
    })
    $('.lanren li').mouseleave(function(){
        $(this).find('.divA').stop().animate({bottom:'0px'});
        $(this).find('.a2').css({left:-$(this).width()})
        $(this).children('.a2').find('.p4').css({left:-$(this).width()})
    })

});