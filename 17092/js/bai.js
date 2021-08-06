$(function(){
    // 头部导航
    $('.sec_nav').hide();
    $('.main_nav .main_li ').hover(function(){
        $(this).find('.sec_nav').slideDown();
        $(this).find('span').addClass('to_green');
    },function(){
        $(this).find('.sec_nav').hide();
        $(this).find('span').removeClass('to_green');
    });
    //患者中心的tab切换
     $('.tab_content .content').each(function(i,e){
        var wid=$('.tab_content').width()*$(this).find('.ol').size();
        $(this).find('.ol').width($('.tab_content').width())
        $(this).width(wid)
    });
     $('.tab_nav').find('ul').each(function(i,e){
        var wid=$('.tab_content div .ol').width();
        $(this).find('li').each(function(i,e){
            $(this).click(function(){
                  $(this).addClass('active').siblings().removeClass('active');
                  $(this).parents('.tab').find('.tab_content > div').animate({left:-i*wid},500);    
            })
        })
    });
})