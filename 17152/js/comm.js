$(function(){

    $(window).resize(function () {
        resize();
    }).resize();
});
function resize() {
    var windowWidth = $(window).width();
    var isSmallScreen = windowWidth < 768;
    $('.index-carousel .swiper-slide').each(function(i, item) {
        var $item = $(item);
        var imgSrc =
            isSmallScreen ? $item.data('image-xs') : $item.data('image-lg');
        if (isSmallScreen) {
            $item.find('img').attr('src',imgSrc);
        } else {
            $item.find('img').attr('src',imgSrc);
        }
    });
    //style control
    if(windowWidth < 768){
        $('.index-06 .list .item').eq(3).addClass('col-xs-offset-2');
    }else{
        $('.index-06 .list .item').eq(3).removeClass('col-xs-offset-2');
    }
}