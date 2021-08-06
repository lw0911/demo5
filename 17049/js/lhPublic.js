//初始化
(function($){
	smoothScroll.init({offset:80});
	new WOW().init();
	$('[data-animated="fadeIn"]').addClass('wow animated fadeIn');
	$('[data-animated="fadeInRight"]').addClass('wow animated fadeInRight');
	$('[data-animated="fadeInDown"]').addClass('wow animated fadeInDown');
	$('[data-animated="fadeInLeft"]').addClass('wow animated fadeInLeft');
	$('[data-animated="fadeInUp"]').addClass('wow animated fadeInUp');
	$("img.lazy").lazyload({effect: "fadeIn",threshold :100});
})(jQuery);
(function(jQuery){
    $.fn.scrollClass = function(config){
        var defaults = {};
        var config = jQuery.extend(defaults, config);
        var target = this;

        function addAction(){
            var length = target.length;
            for(var i=0; i<length; i++){
                if(target.eq(i).hasClass('lhShow')) continue;
                
                var in_position = target.eq(i).offset().top + 100;
                var window_bottom_position = jQuery(window).scrollTop() + jQuery(window).height();
                if(in_position < window_bottom_position){
                    target.eq(i).addClass('lhShow');
                }
            }
        }
        addAction();

        jQuery(window).on('scroll', function(){
            addAction();
        });
        return target;
    };
} )(jQuery);
jQuery('.lh-section').delay(300).scrollClass();
var Public = {
	//banner
	Banner : function(a){
		var a = a || {};
		var opt = $.extend({
			'boxCell' : '.banner',
			'titCell' : '.hd',
			'mainCell' : '.bd',
			'vis':1,
			'autoPage':true,
			'autoPlay':true,
			'prevCell':'.prev',
			'nextCell':'.next',
			'pnLoop':true
		},a);
		jQuery(opt.boxCell).slide({titCell:opt.titCell,mainCell:opt.mainCell,effect:"left",autoPlay:opt.autoPlay,autoPage:opt.autoPage,vis:opt.vis,prevCell:opt.prevCell,nextCell:opt.nextCell,pnLoop:opt.pnLoop,
		endFun:function(i,c){
			var i = i+1, c = c+1;
			$('.current').text('0'+i);
			$('.amount').text('0'+c);
		}
		});
	},//banner end
	//banner
	mobBanner : function(a){
		var a= a ||{};
		var opt = $.extend({
			box : '#mobBanner',
			retun : false	
		},a);
		TouchSlide({ 
			slideCell:opt.box,
			titCell:".hd",
			mainCell:".bd", 
			effect:"leftLoop", 
			autoPage:true,//自动分页
			autoPlay:false, //自动播放
			endFun:function(i,e){
				$('.lh-banner-num').children('span').text(i+1);	
				$('.lh-banner-num').children('em').text(e);	
			}
		});	
	},//banner end	
	//tab
	Tab : function(a){
		var a = a || {};
		var opt = $.extend({
			'boxCell' : '.tab',
			'titCell' : '.hd li',
			'mainCell' : '.bd',
			effect:'fade',
		},a);
		jQuery(opt.boxCell).slide({titCell:opt.titCell,mainCell:opt.mainCell,effect:opt.effect});
	},//tab
	//导航
	Nav : function(){
		var wWidth = $(window).width();
		if(wWidth>1024){
			$('.lh-map-btn').on('click',function(){
				$('.lh-map').addClass('on');	
			});
			$(document).on('click','.lh-map-close',function(){
				$('.lh-map').removeClass('on');	
			});
		}else{
			$('.lh-map-btn').on('click',function(){
				if($(this).hasClass('active')){
					$(this).removeClass('active');
					$('.lh-moblie-nav').removeClass('on');
					$('.lh-shadow').remove();
				}else{
					$(this).addClass('active');
					$('.lh-moblie-nav').addClass('on');
					var shadow = '<div class="lh-shadow"></div>';
					$('body').append(shadow);	
				}	
			});
			$(document).on('click','.lh-map-close,.lh-shadow',function(){
				$('.lh-map-btn').removeClass('active');
				$('.lh-moblie-nav').removeClass('on');
				$('.lh-shadow').remove();	
			});	
		}
		
		$('.lh-map-nav').on('click','a',function(){
			$('.lh-map').removeClass('on');	
		});
		//mobile
		$('.lh-moblie-nav').on('click','li h2',function(){
			var _this = $(this);
			if(_this.hasClass('active')){
				_this.removeClass('active');
				_this.parent().find('dl').slideUp();
			}else{
				_this.addClass('active');
				_this.parent().siblings().find('dl').slideUp();
				_this.parent().siblings().find('h2').removeClass('active');
				_this.parent().find('dl').slideDown();	
			}
		});
	},
	ReturnTop : function(){
		$('.lh-return-top').on('click',function(){
			$('html,body').animate({scrollTop:'0px'});	
		});	
	}		
}
Public.Nav();