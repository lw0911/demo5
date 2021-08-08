/**
 * Created by Administrator on 15-6-10.
 */
$(window).load(function(){

    var spotlight = {
        opacity : 0.2,
        imgWidth : $('.index-fwimg ul li').find('img').width(),

    };

    $('.index-fwimg ul li').css({ 'width' : spotlight.imgWidth});

    $('.index-fwimg ul li').hover(function(){
        $(this).find('img').addClass('active1').css({ 'opacity' : 1});
        $(this).siblings('li').find('img').css({'opacity' : spotlight.opacity}) ;
    }, function(){
        $(this).find('img').removeClass('active1');
    });

    $('.index-fwimg ul').bind('mouseleave',function(){
        $(this).find('img').css('opacity', 1);
    });

});