$(function () {
    var wh = $('.banner').height()
    var ww = $(window).width()

    $(window).scroll(function () {
        var windowTop = $(window).scrollTop()
        // if (windowTop > wh) {
        //     $('.nav2').addClass('style2');
        // } else {
        //     $('.nav2').removeClass('style2');
        // }


    });

    window.onload = function () {

    }

    $('#topGo .jt').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    })
    $('.foot_select').click(function () {
        $(this).addClass('act').siblings('.foot_select').removeClass('act')
        $('.links').eq($(this).index()).slideDown().siblings('.links').slideUp()

    })

    $('#navMobile li>a').click(function () {
        $(this).siblings('div').slideDown().parents('li').siblings().find('div').slideUp()
    })

    $('.navMobileTop .hanberger').click(function () {
        $(this).find('.open').toggleClass('show');
        $('#navMobile').toggleClass('show');
    })









    $('body').on('click', '.m_img .mr', function () {
        $(this).toggleClass('act')
    })
    $('#nav .main .user .first').on('click', function () {
        $('.login').addClass('show');
        $('.login .forms').removeClass('show');
            $('.login .icons').addClass('show');
        
    })
    $('.headNone').on('click', function () {
        $('.login').addClass('show');
        $('.login .forms').removeClass('show');
        $('.login .icons').addClass('show');
    })
    $('.login .login_main .r .icons .item').click(function(){

        if($(this).index() === 2){
            $('.forms #phone_v').val('')
            $('.forms #code_v').val('')
        $('.login .icons').removeClass('show');
        $('.login .forms').addClass('show');
    }
    });

    $('.login .login_main .close').on('click', function () {
        $('.login').removeClass('show');
    })

    var m_weipwer_1 = new Swiper('.m_weipwer_1 .swiper-container', {
        nextButton: '.m_weipwer_1 .next',
        prevButton: '.m_weipwer_1 .prev',
        slidesPerView: 'auto',

    })

    $('body').on('click', '.collection', function () {
        $(this).toggleClass('act')
    })

    var mTab = new Swiper('.mTab', {
        // autoplay: 5000,//可选选项，自动滑动
    })
    $('.m_tab .item').click(function () {
        $(this).addClass('act').siblings('.item').removeClass('act');
        mTab.slideTo($(this).index(), 1000, false);//切换到第一个slide，速度为1秒
    })





    var m_subNav_userPage = new Swiper('.userPage .m_subNav .swiper-container', {
        nextButton: '.userPage .m_subNav .next',
        prevButton: '.userPage .m_subNav .prev',
        slidesPerView: 'auto',

    })

    var swiper5 = new Swiper('.swiper5.swiper-container', {
    })
    var m_subNav5 = new Swiper('#section5 .m_subNav .swiper-container', {
        nextButton: '#section5 .m_subNav .next',
        prevButton: '#section5 .m_subNav .prev',
        slidesPerView: 'auto'
    })
    $('#section5 .m_subNav .swiper-slide').click(function () {
        swiper5.slideTo($(this).index(), 1000, false);//切换到第一个slide，速度为1秒
        $(this).addClass('act').siblings().removeClass('act')

    })
    //section6
    var swiper6 = new Swiper('.swiper6.swiper-container', {
    })
    var m_subNav6 = new Swiper('#section6 .m_subNav .swiper-container', {
        nextButton: '#section6 .m_subNav .next',
        prevButton: '#section6 .m_subNav .prev',
        slidesPerView: 'auto'
    })
    $('#section6 .m_subNav .swiper-slide').click(function () {
        swiper6.slideTo($(this).index(), 1000, false);//切换到第一个slide，速度为1秒
        $(this).addClass('act').siblings().removeClass('act')

    })
    //section7
    var swiper7 = new Swiper('#swiper7', {
    })
    console.log('swiper6', swiper6);
    console.log('swiper7', swiper7);
    var m_subNav7 = new Swiper('#section7 .m_subNav .swiper-container', {
        nextButton: '#section7 .m_subNav .next',
        prevButton: '#section7 .m_subNav .prev',
        slidesPerView: 'auto'
    })
    $('#section7 .m_subNav .swiper-slide').click(function () {
        swiper7.slideTo($(this).index(), 1000, false);//切换到第一个slide，速度为1秒
        $(this).addClass('act').siblings().removeClass('act')
    })
    //section8
    var swiper8 = new Swiper('.swiper8.swiper-container', {
    })
    console.log('swiper7', swiper8);
    var m_subNav8 = new Swiper('#section8 .m_subNav .swiper-container', {
        nextButton: '#section8 .m_subNav .next',
        prevButton: '#section8 .m_subNav .prev',
        slidesPerView: 'auto'
    })
    $('#section8 .m_subNav .swiper-slide').click(function () {
        swiper8.slideTo($(this).index(), 1000, false);//切换到第一个slide，速度为1秒
        $(this).addClass('act').siblings().removeClass('act')

    })

    $(".m_search input").keypress(function (e) {
        if (e.which == 13) {
            alert('next');
        }
    });


    if (ww <= 768) {
        $('.scroll_x').width(ww * .9);
        $('.scroll_x .row .col2').css('marginBottom', '10px');
        $('.scroll_x .rows').width(($('.scroll_x .row').width() + 10) * $('.scroll_x .row').length + 20)
    }

    $('.user .out').click(function () {

        $('#nav .main .user .last').removeClass('show')
        $('#nav .main .user .first').addClass('show')

        //个人中心登陆状态改变
        $('.userPage .l .head .headImg > img').removeClass('show');
        $('.userPage .l .head .headImg > div').addClass('show');

        

    })

    layui.use(['layer', 'form'], function () {
        var layer = layui.layer
        var timeOut = null
        var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            var num = /^\d{6}$/;
        
        $('.forms .code').click(function () {
            if ($('.forms .code').hasClass('hide')) {
                return false;
            }
            
            if (!myreg.test($('.forms #phone_v').val())) {
                layer.msg('请输入正确的手机号码');
                return false;
            } else {
                var number = 60
                timeOut = setInterval(function(){
                    console.log(number);
                    if(number === 0){
                        clearInterval(timeOut)
                        $('.forms .code').removeClass('hide');
                        number === 0
                        $('.forms .code').text('获取验证码')
                        return false
                    }
                    $('.forms .code').text(number+'s')
                    number--
                },1000)
                
                $('.forms .code').addClass('hide');
                layer.msg('验证码已发送至' + $('.forms #phone_v').val());
            }


        })
        $('.forms #sub').click(function () {
            if (!myreg.test($('.forms #phone_v').val())) {
                layer.msg('请输入正确的手机号码');
                return false;
            }
            if (!num.test($('.forms #code_v').val())) {
                layer.msg('验证码为6位数字');
                return false;
            }
            
            $('.login .forms').removeClass('show');
            $('.login .icons').addClass('show');
            $('.login').removeClass('show');

            //个人中心登陆状态改变
            $('.userPage .l .head .headImg > div').removeClass('show');
            $('.userPage .l .head .headImg > img').addClass('show');

            //导航登陆状态改变
            $('#nav .main .user .first').removeClass('show');
            $('#nav .main .user .last').addClass('show');
            alert('提交数据');
            console.log($('.forms #phone_v').val(),$('.forms #code_v').val());

        })


    });


})