
/*
name：H3C
date：2014.9.11	
 */

// 文件路径
var base_url ='/cn/tres';
var styles_url = base_url+'/WebUI/styles/';
var scripts_url = base_url+'/WebUI/scripts/';
var jwplayer_url = base_url+'/WebUI/jwplayer/';

// 加载
$(function(){

	// vData.init();
	// vHome.init();
	vJust.init();
	// init();
		

});

// 初始化屏宽区间
var oldMedia = getMedia();

$(window).on({
	'load':function(){
		vSize();
	},
	resize:function(){
		var newMedia = getMedia();
		if( newMedia != oldMedia ){
			vSize();
			oldMedia = newMedia;
		}
	},
	'scroll':function(){
		vScroll();
	}
})

// 判断浏览器
function myBrowser(){
	var userAgent = window.navigator.userAgent; 
	var isOpera = userAgent.indexOf("Opera") > -1; 
	var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera ; 
	var isFF = userAgent.indexOf("Firefox") > -1 ; 
	var isSafari = userAgent.indexOf("Safari") > -1 ; 	 
	if(isIE){
		if( /MSIE 6.0/ig.test(userAgent) ){ return 'IE6' }
		if( /MSIE 7.0/ig.test(userAgent) ){ return 'IE7' }
		if( /MSIE 8.0/ig.test(userAgent) ){ return 'IE8' }
		if( /MSIE 9.0/ig.test(userAgent) ){ return 'IE9' }
		return 'IE';	
	}
	if(isFF){ return "FF"; }
	if(isOpera){ return "Opera"; }
	return false;   
}

// 判断是否为PHONE
function isPhone(){
	var userAgent = window.navigator.userAgent; 
	var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone"); 
    var flag = false; 
    for (var v = 0; v < Agents.length; v++) { 
       if (userAgent.indexOf(Agents[v]) > -1) { flag = true; break; } 
    } 
    return flag;  
} 

// window resize
function vSize(){
	var media = getMedia();
	if( media == 'xs' ){ xsFun() }
	if( myBrowser() == 'IE7' ){ ie7Fun(media) }

	if( media == 'xs' ){
		$('.pro_tab').each(function(){
			var _this = $(this);
			$('.pro_tab_left .carousel-inner li',_this).removeClass("active")
			$('.pro_tab_right .acontent',_this).removeClass("active")
		})

		$('.video-slide').each(function(){
			var inner = $(this).children('.carousel-inner');
			inner.find('.col').eq(0).show().siblings().hide();
		})

	}else{
		$('.pro_tab').each(function(){
			var _this = $(this);
			$('.pro_tab_left .carousel-inner li',_this).removeClass("active").eq(0).addClass("active")
			$('.pro_tab_right .acontent',_this).removeClass("active").eq(0).addClass("active")
		})

		$('.video-slide').each(function(){
			var inner = $(this).children('.carousel-inner');
			inner.find('.col').show();
		})
	}
}

function getMedia(){
	var winWidth = $(window).width();
	if( winWidth > 1200 ){
		return 'lg';
	}else if( winWidth > 992 ){
		return 'md';
	}else if( winWidth > 768 ){
		return 'sm';
	}else{
		return 'xs';
	}
}

// ie7兼容
function ie7Fun(param){
	if( param != 'xs' ){
		var head = $('head:eq(0)');
		$('.iebootstrap',head).remove();
		head.append('<link class="iebootstrap" >');
		$('.iebootstrap',head).attr({rel:'stylesheet',type:'text/css',href:styles_url+'iebootstrap-'+param+'.css'});
	}
}

var scroll_str = 0;

function vScroll(){

	var head = $('.header-index');
	var _head = $('.header');
	var speed = 200;
	var top = $(document).scrollTop();
	if(head){
		
		// var num = 300;
		// if( top > num ){
		// 	$('.header-top',head).removeClass('header-active')
		// }else{
		// 	$('.header-top',head).addClass('header-active')
		// }
	}

	// 右侧返回顶部
	var pop = $('.popup');
	if( top > 300){
		pop.fadeIn(200);
		$('.product-popup').fadeIn(200)
	}else{
		pop.fadeOut(200)
		$('.product-popup').fadeOut(200)
	}

	if( !isPhone() && getMedia() != 'xs'){
		// if( top > 100 && scroll_str == 0 ){

		// 	scroll_str = 1;
		// 	$('.subhead',_head).fadeOut(100);
		// 	$('.search',_head).fadeOut(100);
		// 	_head.stop(true,true).animate({height:'55px'},speed)
		// 	$('.logo',_head).stop(true,true).animate({marginTop:'16px',height:'30px'},speed);
		// 	$('.navbar-nav',_head).stop(true,true).animate({paddingTop:'5px'},speed);
		// 	$('.nav-wrap',_head).css('top','55px');

		// }
		// if( top <= 100 && scroll_str == 1 ){

		// 	scroll_str = 0;
		// 	_head.stop(true,true).animate({height:'100px'},speed)
		// 	$('.logo',_head).stop(true,true).animate({marginTop:'36px',height:'42px'},speed);
		// 	$('.navbar-nav',_head).stop(true,true).animate({paddingTop:'35px'},speed);
		// 	$('.subhead',_head).fadeIn(300);
		// 	$('.search',_head).fadeIn(300);
		// 	$('.nav-wrap',_head).css('top','100px');
		// }
	}

}

var navBloor = true;

function xsFun(){

	if( !navBloor){ return false};
	var header = $('.header');
	var nav = $('.navbar-nav',header);
	var wrap = $('.nav-wrap',header).children();
	var phone = $('.nav-phone',header).children('ul');
	var search = $('.search',header);
	var _search = $('.search-phone',header).children('div');

	phone.html( nav.html() );

	_search.html( search.html() ).find('.text').val('')

	wrap.each(function(index){

		var _html = '';
		var _p_html = nav.children('li').eq(index).html();
		$(this).find('.nav-down-cell').each(function(){
			_html+='<li>'+$(this).html()+'</li>';
		});
		phone.children('li').eq(index).append('<ul><p class="p01">'+ _p_html +'</p>'+_html+'</ul>')
		phone.children('li').eq(index).children('ul').children('p').children('a').append('页面').prepend('去往');;
	});
	$('li,a,ul',phone).removeAttr("style").removeClass();
	phone.children('li').addClass('menu01').children('ul').addClass('ul01').children('li')
	.addClass('menu02').children('ul').addClass('ul02').children('li').addClass('menu03')

	vData.phone();
	navBloor = false;
}

var vData = {
	point:function(){

		$('.data-focus').each(function(){

			var _text = $(this).val();

			$(this).on({
				'focus':function(){
					if( $(this).val() == _text ){ $(this).val('') }
				},
				'blur':function(){
					if( $(this).val() == '' ){ $(this).val(_text) }		
				}
			})

		})

	},
	nav:function(){

		var header = $('.header');
		var nav = $('.navbar-nav',header);
		var top = $('.header-top',header);
		var wrap = $('.nav-wrap',header);
		var cell = wrap.children();
		var speed = 300;
		var navStart,navEnd,wrapEnd;
		var delayTime = 500;
		var delay;

		navStart = function(){

			var par = $(this);
			var index = par.index();
			
			par.addClass('active').siblings().removeClass('active');
			$('.nav-wrap',header).children().eq(index).show().siblings().hide();

			clearTimeout(delay);
			delay = setTimeout(function(){
				
				wrap.stop(true,true).animate({height:'show'},speed);
				// top.removeClass('header-active');

			},delayTime);
		}

		navEnd = function(e){
			clearTimeout(delay);
			var elem = $(e.relatedTarget);
			if( !elem.hasClass('nav-wrap') && elem.parents('.nav-wrap').length < 1 && !elem.parents().hasClass('nav')){
				var _height = $('.nav-wrap',header).height();
				wrap.stop(true,true).animate({height:'hide'},speed);
				$(this).removeClass('active');
			}
		}

		wrapEnd = function(e){
			clearTimeout(delay);
			var elem = $(e.relatedTarget);
			if( !elem.hasClass('nav-wrap') && elem.parents('.nav-wrap').length < 1 && !elem.parents().hasClass('nav') ){
				var _height = $('.nav-wrap',header).height();
				wrap.stop(true,true).animate({height:'hide'},speed);
				nav.children('li').removeClass('active');
			}	
		}

		nav.children('li').on({'mouseenter':navStart,'mouseleave':navEnd});
		wrap.on({'mouseleave':wrapEnd});

	},
	phone:function(){

		var header = $('.header');
		var nav = $('.nav-phone',header);
		var top = $('.header-top',header);
		var search = $('.search-phone',header);

		nav.find('ul').each(function(){
			$(this).children('li:last').children('a').addClass('last');
		})
		nav.children('ul').find('li').each(function(){

			var _this = $(this);
			var dot = _this.children('a');
			var ul = _this.children('ul');

			dot.on('click',function(e){

				if( ul.length < 1 ){ return true } 
				e.preventDefault();

				if( $(this).hasClass('active') ){
					$(this).removeClass('active');
					ul.slideUp(200);
				}else{
					$(this).parent().siblings('li').children('ul').slideUp();
					$(this).parent().siblings('li').children('a').removeClass('active');
					$(this).parents('.menu01').siblings('li').find('.menu02').each(function(){
						$(this).children('ul').hide().siblings('a').removeClass('active');
					});
					$(this).addClass('active');
					ul.slideDown(200);
				}

			})

		});
		$('.navbar-toggle',header).on('click',function(e){
			e.preventDefault();
			search.hide();
			$('.search-toggle',header).removeClass('search-active');

			if( $(this).hasClass('navbar-active') ){
				$(this).removeClass('navbar-active');
				nav.children('ul').slideUp(200,function(){ 
					top.removeClass('header-active'); nav.hide();
					nav.find('ul').hide();
					nav.find('a').removeClass('active');
			 	});
			}else{
				$(this).addClass('navbar-active');
				nav.show().children('ul').slideDown(200);
				top.addClass('header-active');
			}
		});

		$('.search-toggle',header).on('click',function(e){
			e.preventDefault();
			nav.hide().find('ul').hide();
			nav.find('a').removeClass('active');
			$('.navbar-toggle',header).removeClass('navbar-active');

			if( $(this).hasClass('search-active') ){
				$(this).removeClass('search-active');
				search.hide();
				top.removeClass('header-active');
			}else{
				$(this).addClass('search-active');
				search.show()
				top.addClass('header-active');
			}
		});

	},
	popup:function(){

		var pop = $('.popup');
		var setBack;

		$('.header .weixin').children('a').on('click',startFun);

		function startFun(e){ 
			e.preventDefault();
			e.stopPropagation();
			var sib = $(this).siblings();
			if( $(this).hasClass('active') ){
				sib.fadeOut(300);
				$(this).removeClass('active')
			}else{
				sib.fadeIn(300);
				$(this).addClass('active')
			}
		}

		$('a.top',pop).on('click',function(e){
			e.preventDefault();
			$('html,body').animate({scrollTop:0},300)
		});

		pop.on('click','.suface a',function(e){
			e.preventDefault();
			clearTimeout(setBack);
			if( !$('body').children().hasClass('bodyBack') ){
				$('body').append('<div class="bodyBack"></div>');
				$('.bodyBack').css({
					width:'100%',
					height:'100%',
					position:'fixed',
					left:'0px',
					top:'0px',
					zIndex:999,
					background:'#000',
					opacity:0.7,
					display:'none'
				})
			};
			$('.bodyBack').fadeIn(200);
			setBack = setTimeout(function(){
				$('#jiathis_weixin_close').off('click').on('click',function(e){
					e.preventDefault();
					$('.bodyBack').fadeOut(100);
				})
			},50)
			
		})

		$(document).on('click',function(){ 
			$('.header .weixin').children('a').removeClass('active').siblings().fadeOut(300);
		})

	},
	init:function(){
		this.point();
		this.nav();
		this.popup();

	}
};

var vHome = {
	tab:function(){

		// $('#myTab li:first').tab('show');
		$('.carousel').each(function(){
			var bloor = $(this).attr('data-bloor') == '0'?false:5000;
			$(this).carousel({interval: bloor})
		});

	},
	banner:function(){

		var ban = $('#header-banner');
		var bd = ban.children('.header-banner-bd');
		var _length = bd.children().length;
		var hd = ban.children('.header-banner-ol');
		
		var index = 0;
		var speed = 600;

		// ban.on('slid.bs.carousel', function (a) {
		// 	if(a.direction == 'left'){
		// 		index++;
		//   		if(index >= _length){ index = 0 };
		// 	}else{
		// 		index--;
		// 		if( index < 0 ){ index = _length-1 }
		// 	}
		  
		//   beforFun();
		// });
		ban.on('slid.bs.carousel', function (a) {
			index = $('.carousel-indicators.header-banner-ol').children('.active').index();
		  
		  beforFun();
		});

		function beforFun(){
			var _this = bd.children().eq(index).children('.pc');
			var stack = _this.children('.stack').children();
			var pic = $('.pic',_this);
			var text = $('.text',_this);
			$('.stack',ban).each(function(){
				$(this).children().children().eq(0).css({left:'-200px',opacity:0});
				$(this).children().children().eq(1).css({left:'200px',opacity:0});
			});
			stack.children().stop(true,true).animate({left:0,opacity:1},speed)
		}

		beforFun();

		// 切换按钮 显示隐藏
		var _slide = $('.banner-slide');
		var bd_length = _slide.children('.carousel-inner').children().length;
		var but = _slide.children('.banner-btn');
		_slide.hover(function(){ if( bd_length>1 ){but.stop().fadeIn(300)} },function(){ but.fadeOut(300) })

		if( bd_length <= 1 ){
			$('.carousel-indicators',_slide).hide();
		}

	},
	not:function(){
		$('.notice-cell').slide({
			effect:'topLoop',
			mainCell:'ul',
			delayTime:300,
			autoPlay:true
		});
	},
	phone:function(){

		var wrap = $('.stat-wrap');
		var phoneSet;
		$('.stat-phone-tit',wrap).each(function(index){
			var _this = $(this);
			_this.children('a').on('click',function(){
				var par = $(this).parent();
				var _height = ( par.outerHeight() )*index;
				var offTop = Math.floor( _this.parent().offset().top ) +_height;
				$('html,body').animate({scrollTop:offTop},0);
				$(this).addClass('phoneActive').parent().siblings().children('a').removeClass('phoneActive');
			})
		});

		wrap.children('.tab-pane').filter(':first').addClass('active');
		wrap.children('.stat-phone-tit').each(function(index){
			if(index == 0){ 
				$(this).children('a').addClass('phoneActive')
			}else{
				$(this).children('a').removeClass('phoneActive')
			}
		});
		$('.stat-tabs').children('li').filter(':first').addClass('active');


	},
	sear:function(){
		var search = $('.header .search');

		search.find('input[type="text"]').on({
			'focus':function(){
				search.addClass('searchActive')
			},
			'blur':function(){
				search.removeClass('searchActive')
			}
		})
	},
	init:function(){
		this.tab();
		this.banner();
		//this.not();
		this.phone();
		this.sear();
	}
}

var vJust = {
    product: function () {
        $('.product-con .container-fluid:even .container .row').each(function () {
            var _this = $(this);
            var _col1 = _this.children('.col:eq(0)');
            var _col2 = _this.children('.col:eq(1)');
            _col1.addClass('col-sm-push-6');
            _col2.addClass('col-sm-pull-6');
        })

    },
    video: function () {

        var video = $('.video-open');
        if (video.length > 0) {

            var thePlayer;
            $('body').append('<div class="video-h"><div class="video-con"><div id="videoJw"></div><div class="video-close"></div></div></div>');

            $(".video-open").click(function () {

                if (navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPad") != -1) {
                    window.location.href = $(this).children('img').attr("alt");
                } else {
                    $(this).children("img").attr('id', "thisvideo");
                    var _url = $('#thisvideo').attr('alt');
                    var _img = $('#thisvideo').attr('src');
                    var _winWidth = $(window).width();

                    if (_winWidth < 678) {
                        var _width = $(this).children("img").width();
                        var _height = $(this).children("img").height();
                        var _winHeight = ($(window).height()) / 2;
                        $('.video-con').css({ width: _width + 'px', height: _height + 'px', top: _winHeight - _height / 2 + 'px', left: '15px' });
                    };
                    thePlayer = jwplayer("videoJw").setup({
                        stretching: "fill",
                        flashplayer: jwplayer_url + "player.swf",
                        image: _img,
                        levels: [
							{ file: _url }
						],
						control:false,
                        controlbar: 'bottom',
                        width: '100%',
                        height: '100%'
                    });

                    $(".video-h").fadeIn();
                }

            });
            $(".video-close").click(function () {
                thePlayer.stop();
                $(".video-open").children("img").removeAttr('id');
                $(".video-h").fadeOut();
            });

        }
        $('.reco-video').hover(function () {
            $(this).find('.rv-arit').stop(true, true).animate({ marginTop: "0", top: "0%" });
        }, function () {
            $(this).find('.rv-arit').stop(true, true).animate({ marginTop: "-40px", top: "100%" });
        });

    },
    videowin: function () {
        $('.videowin').each(function () {
            var _url = $('#videowin').attr('data-src');
            var _img = $('#videowin').attr('data-img');
            var _Width = $('.videowin').width();
            var _Height = _Width * 0.6;
            $('.videowin').css({ "height": _Height });

            jwplayer("videowin").setup({
                stretching: "fill",
                flashplayer: jwplayer_url + "player.swf",
                image: _img,
                levels: [
					{ file: _url }
				],
                control: false,
                controlbar: 'bottom',
                width: _Width,
                height: _Height
            });
        });
        $('.videowlan').each(function () {
            var _url = $(this).children().attr('data-src');
            var _img = $(this).children().attr('data-img');
            var _Width = $(this).children().width();
            var _Height = _Width * 0.6;
            $('.videowin').css({ "height": _Height });
            var _id = $(this).children().attr("id");
            jwplayer(_id).setup({
                stretching: "fill",
                flashplayer: jwplayer_url + "player.swf",
                image: _img,
                levels: [
					{ file: _url }
				],
                control: false,
                controlbar: 'bottom',
                width: _Width,
                height: _Height
            });
        });
    },
    variation: function () {
        var ation = $('.variation');
        var hd = $('.varHd', ation);
        var hd_child = hd.children();
        var cell = $('.varCell', ation);

        cell.hide().each(function (t) {
            var _html = hd_child.eq(t).html();
            $(this).before('<div class="varTitle visible-xs-block">' + _html + '</div>')
        })

        var tit = $('.varTitle', ation);
        var bd = $('.varBd', ation);

        hd.find('a').on('click', function (e) {
            e.preventDefault();
            var index = $(this).parent().index();
            $(this).parent().addClass('active').siblings().removeClass('active');
            tit.eq(index).addClass('active').siblings('.varTitle').removeClass('active');
            cell.eq(index).show().siblings().hide();
        }).eq(0).trigger('click');

        tit.each(function () {
            $(this).children('a').on('click', function (e) {
                e.preventDefault();
                var par = $(this).parent();
                var index = tit.index(par[0]);
                par.addClass('active').siblings('.varTitle').removeClass('active');
                hd.children().eq(index).addClass('active').siblings().removeClass('active');
                cell.eq(index).show().siblings().hide();

                var offTop = Math.floor(par.offset().top);
                $('html,body').animate({ scrollTop: offTop }, 0);

            })
        })

    },
    varCell1: function () {
        $('.serviceproduct-recom-exc>a').each(function () {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.serviceproduct-recom-exc>ul').hide();
                $(this).parent().find('ul').toggle();
            });
        });
    },
    recom: function () {
        $('.product-recom-exc').each(function () {
            var _this = $(this);
            var bd = $('.bd', _this).children();
            var btn = $('a.button', _this);
            var _text = ['展开', '收起'];

            bd.filter(':lt(2)').show();
            if (bd.length <= 2) { btn.hide() }

            btn.click(function (e) {
                e.preventDefault();
                if ($(this).hasClass('on')) {
                    $(this).removeClass('on').text(_text[0]);
                    bd.filter(':gt(1)').slideUp();
                } else {
                    $(this).addClass('on').text(_text[1]);
                    bd.slideDown()
                }
            });
        });

        $('.information-list li').each(function () {
            var _this = $(this);
            var speed = 300;
            var _a = _this.children("a");
            var _ul = _this.children("ul");

            _a.click(function (e) {
                if (_ul.length > 0 && _ul.children().length > 0) {
                    e.preventDefault();
                    if ($(this).hasClass('active')) {
                        _ul.find("a").removeClass("active");
                        _ul.find("ul").slideUp(speed);
                        _ul.slideUp(speed);


                    } else {
                        _this.siblings().each(function () {
                            $(this).find("a").removeClass("active");
                            $(this).find("ul").slideUp(speed);
                        })
                        _ul.slideDown(speed)
                    }
                    $(this).toggleClass('active');
                }
            })
        })


    },
    pro: function () {
        $('.pro_tab').each(function () {
            var _this = $(this);
            var li_ = $('.pro_tab_left .carousel-inner li', _this);
            var content_ = $('.pro_tab_right .acontent', _this);
            li_.each(function (i) {
                $(this).children('a').click(function (e) {
                    if (getMedia() != 'xs') {
                        e.preventDefault()
                    }
                    li_.eq(i).addClass('active').siblings().removeClass('active');
                    content_.eq(i).addClass('active').siblings().removeClass('active')

                })
            });
        })
    },
    totab: function () {
        $('.to-stat-wrap a').click(function () {
            var _tab = $('.stat-tabs');
            var index = $(this).index() / 2;
            var offTop = Math.floor(_tab.offset().top) - 100;
            _tab.children('li').removeClass('active');
            _tab.children('li:eq(' + index + ')').addClass('active');
            $('.tab-content .tab-pane').removeClass('active');
            $('.tab-content .tab-pane:eq(' + index + ')').addClass('active');
            $('body,html').animate({ scrollTop: offTop }, 500);
        });
    },
    page: function () {

        $('.prod-row-list').filter(function () {
            return !$(this).parent().hasClass('product-inform-tag')
        }).each(function () {
            pageFun($(this), "col-sm-6")
        })

        $('.product-inform,.parse-col-3').each(function () {
            pageFun($(this), "col-sm-4")
        })

        $('.parse-col-4').each(function () {
            pageFun($(this), "col-sm-3")
        })

        $('.parse-col-2').each(function () {
            pageFun($(this), "col-sm-6")
        })

        function pageFun(a, b) {
            var _this = a.children();
            var c = 12 / parseInt(b.split('-').pop());
            var len = Math.ceil((_this.length) / c);

            if (a.children('.more').length > 0) {
                len = Math.ceil((_this.length - 1) / c);
                if (!_this.hasClass(b)) {
                    for (var i = 0; i < c; i++) {
                        if (i == c - 1) {
                            _this.slice(i * len, i * len + len).wrapAll('<div class=' + b + '></div>')
                        } else {
                            _this.slice(i * len, i * len + len).wrapAll('<div class=' + b + '></div>')
                        }

                    }
                }
                a.children('.more').wrapAll('<div class="col-sm-12"></div>');
            } else {
                if (!_this.hasClass(b)) {
                    for (var i = 0; i < c; i++) {
                        _this.slice(i * len, i * len + len).wrapAll('<div class=' + b + '></div>')
                    }
                }
            }

        }

    },
    prodcoll: function () {
        var collbody = $('#collbody').children();
        var cHeight = collbody.height();
        var cp0 = collbody.children();
        var pHeight;
        var btn = $('.hard-sketch a.button');
        var arr = ['展开', '收起'];

        for (var i = 0; i < cp0.length; i++) {
            if (/^\s*$/.test(cp0.eq(i).html()) && cp0.get(i).tagName.toLowerCase() != 'img') {
                cp0.eq(i).remove();
            }
        }

        pHeight = collbody.children().eq(0).height() + 20;
        cHeight = collbody.css("height", "100%").height();
        collbody.css("height", pHeight + "px");

        btn.html(arr[0]);

        if (pHeight >= cHeight) { btn.hide() }

        btn.click(function () {
            if (collbody.height() <= pHeight) {
                collbody.animate({ height: cHeight + "px" });
                $(this).removeClass('collapsed');
                btn.html(arr[1])
            } else {
                collbody.animate({ height: pHeight + "px" });
                $(this).addClass('collapsed');
                btn.html(arr[0])
            }
        });

        $('.carousel').each(function () {
            var _this = $(this);
            var bd = $('.carousel-inner', _this);
            var hd = $('.carousel-indicators', _this);
            var item = bd.children('.item');
            var len = item.length;

            hd.children().filter(':gt(0)').remove();

            var _html = hd.children().removeClass("active").end().html();

            item.eq(0).addClass('active');
            hd.empty();

            for (var i = 0; i < len; i++) {
                hd.append(_html).children().eq(i).attr('data-slide-to', i)
            }

            hd.children().eq(0).addClass('active');

        })

        $('.video-slide,.solut-slide').each(function () {
            var bd = $(this).children('.carousel-inner');
            if (bd.children().length < 1) { $(this).parents('.container-fluid').hide() }
            if (bd.children().length == 1) { $(this).children('.carousel-control').hide() }

        })
    },
    init: function () {
        this.product();
        this.video();
        this.videowin();
        this.variation();
        this.recom();
        this.pro();
        this.totab();
        this.page();
        this.prodcoll();
        this.varCell1();
    }
}
var H3C = H3C || {};
H3C.isWeiXinBrowser = function(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
 	} else {
		return false;
	}
}
H3C.setCookie = function (key, value, expirehours) {
        if (!expirehours) {
            expirehours = 24;
        }
        var expire = new Date();
        expire.setTime(expire.getTime() + expirehours * 60 * 60 * 1000);
        document.cookie = key + '=' + escape(value) + ';expires=' + expire.toUTCString()+';path=/';
}
H3C.getCookie = function (name) {
	var match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
	if (match)
		return unescape(match[2]);
	else
		return '';
}
H3C.internet = (function () {
	var isInternet = false;
	if(H3C.getCookie('isInternet')=='1'){
		isInternet = true;
	}
	else if (H3C.getCookie('isInternet')=='0'){
		isInternet = false;
	}
	else
	{
		$.ajax({
			type: "Get",
			async: true,
			dataType: "text",
			url: "/ip.html",
			success: function (result) {
				if (result.indexOf("77") < 0) {
					isInternet = true;
					H3C.setCookie('isInternet','1',30*24);
				}
				else {
					isInternet = false;
					H3C.setCookie('isInternet','0',30*24);
				}
			},
			error: function (jqXHR, textStatus, errorThrown) {
				// console.log(errorThrown);
			}
		});
	}
	return isInternet;
})();
