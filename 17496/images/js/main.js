/**
 * Created by Administrator on 2017/6/1.
 */
$(window).ready(function(){
    var $window=$(window).height();
    var $navCenter=$('.nav-center');
    var $navBox=$('.nav-box');
    var $menuHandler=$('#menu-handler');
    var yyjm_select=$('.yyjm_select');
    //导航
    $navCenter.css({
        marginTop:($window+88)/2-$navCenter.height()/2
    });
    //导航按钮
    $('.menu').click(function(){
        $menuHandler.toggleClass('active');
        $navBox.toggleClass('active');
        $('.header').toggleClass('active');
    });
    //关闭
    $('.nav-close').click(function(){
        $navBox.toggleClass('active');
        $menuHandler.toggleClass('active');
        $('.header').toggleClass('active');
    });
    $('.section3 span.toBig').hover(function(){
        $(this).siblings('.line').find('i').css({width:"100%"});
    },function(){
        $(this).siblings('.line').find('i').css({width:0});
    });
    yyjm_select.find('p').click(function(e){
        e.stopPropagation();
        $(this).siblings('ul').show();
        $(this).parents('.yyjm_select').siblings().find('ul').hide();
    });
    yyjm_select.on('click','li',function(){
        var text=$(this).text();
        $(this).parents('.yyjm_select').find('p').text(text).siblings('ul').hide();
    });
    $('.footer_select p').click(function(e){
        e.stopPropagation();
        $(this).siblings('ul').show().parents('.footer_select').siblings().find('ul').hide();
    });
    $('.footer_select').on('click','li',function(){
        var text=$(this).text();
        $(this).parent().hide().siblings('p').text(text);
    });
    $('.footer-fix .close').click(function(){
        $('.footer-fix').addClass('active');
        setTimeout(function(){
            $('.footer-fix').removeClass('active');
        },8000)
    });
    //底部二维码
    $('.weChat').hover(function(){
        $(this).find('.code_box').stop().show(300);
    },function(){
        $(this).find('.code_box').stop().hide(300);
    });
    //左侧二维码
    $('.fixed_left li.li5').hover(function(){
        $(this).find('.ff_code').stop().show(300);
    },function(){
        $(this).find('.ff_code').stop().hide(300);
    });

    //品牌招商
    $('.demo_control li').click(function(){
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.do_brand_list').eq(index).addClass('active').siblings().removeClass('active');
    });

    //品牌介绍
    $(".show_industry a").click(function(e){
        e.preventDefault();
        var index=$(this).index();
        $('.industry_des').show().find('.industry_page').eq(index).addClass('active').siblings('.industry_page').removeClass('active');
    });
    $('.industry_des_con a').click(function(e){
        e.preventDefault();
        $('.industry_des').hide().find('.industry_page').removeClass('active');
    });

    $('.book_des').on('click','.middle_text p',function(){
        var index=$(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parents('.book_des').siblings().find('p').eq(index).addClass('active').siblings().removeClass('active');
    });
    //关闭视频
    $('.show_video').on('click','.video_close',function(e){
        e.preventDefault();
        $('.show_video').hide().find('.video_con').html("");
    });

    $('.bofang').click(function(e){
        var src=$(this).attr('data-src');
        e.preventDefault();
        $('#music')[0].pause();
        $('.musicBtn').addClass('active');
        $('.show_video').show().find('.video_con').html("<a class='video_close' href='#'></a> <video src='"+src+"'controls autoplay>您的浏览器不支持 video 标签。</video>");
    });
    $('.bofang2').click(function(e){
        var src=$(this).attr('data-src');
        e.preventDefault();
        $('#music')[0].pause();
        $('.musicBtn').addClass('active');
        $('.baozi').hide();
        $('.ban_sp video').show().attr('src',src);
    });
    $('.ljyd').click(function(e){
        e.preventDefault();
        $('.liaojie').show();
    });
    $('.liaojie').on('click','.liaojie_close',function(e){
        e.preventDefault();
        $('.liaojie').hide();
    });

    $('.aldehyde_des,.muban_des').on('click','i',function(){
        $(this).parents('li').find('.aldehyde_hide').addClass('active');
    });
    $('.aldehyde_list li,.muban_list li').hover(function(){

    },function(){
        $(this).find('.aldehyde_hide').removeClass('active');
    });


    $('.at_once p,.fixed_left li.li3,.show_yuyue,.join_investment_link2,.design_nav li.li6').click(function(){
        $('.apointment_show').show();
    });

    $('.app_close').click(function(){
        $('.apointment_show').hide();
    });


    $('.bottom_close').click(function(e){
        e.stopPropagation();
        $('.float_bottom').addClass("in");
        $('.float_bottom').click(function(){
            $(this).removeClass('in');
        });
    });

    $('.sc_close').click(function(){
        $(this).parents('.sc').hide();
    });



    $('.musicBtn').click(function(){
        $(this).toggleClass('active');
        var audio=$('#music')[0];
        if(audio.paused){
            audio.play();
          }else{
           audio.pause();
          }
    });

});