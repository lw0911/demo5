/**
 * Created by Administrator on 15-6-11.
 */
$(function(){
    //菜单隐藏展开
    var tabs_i=0
    $('.vtitle').click(function(){
        var _self = $(this);
        var j = $('.vtitle').index(_self);
        if( tabs_i == j ) return false; tabs_i = j;
        $('.vtitle span').each(function(e){
            if(e==tabs_i){
                $('span',_self).removeClass('downj2').addClass('downj');
            }else{
                $(this).removeClass('downj').addClass('downj2');
            }
        });
        $('.vcon').slideUp().eq(tabs_i).slideDown();
    });
})