/**
 * Created by Administrator on 2017/10/25 0025.
 */
;(function(){

    function _indexFn(){};

    _indexFn.prototype = {
        _init:function(){
            this.scrollTop();
            this.event();
        },
        _hover:function(parentEle){
            $(parentEle).children().hover(function(){
                $(this).addClass('active');
            },function () {
                $(this).removeClass('active');
            });
        },
        scrollTop:function(){
            var H = $(window).height();

            $(window).scroll(function(){
                var ScrollTop = $(window).scrollTop();

                if(ScrollTop>H){
                    $('.float_box').show();
                }else{
                    $('.float_box').hide();
                }
            });
            $('.float_up').on('click',function(){
                $('body,html').animate({scrollTop:0},500);
            });
        },event:function(){
            $('.screen_small_menu').on('click',function(){
               $(this).siblings('.screen_small_list').toggleClass('active');
            });

            $('.nav_list li').hover(function(){
                $(this).find('.down_list').show();
            },function(){
                $(this).find('.down_list').hide();
            });
        }
    }

    window._indexFn = new _indexFn();

})();
$(function(){
    _indexFn._hover('.float_list');
    _indexFn._init();
});