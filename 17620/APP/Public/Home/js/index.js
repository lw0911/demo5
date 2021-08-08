$(function(){
	
	/*首页头部置顶*/
	var tab_index = function(){
			
			var warp_hg = $('.warp').height();
			$(window).scroll(function(){
				
				var scroll_top = $(this).scrollTop()
				if(scroll_top>warp_hg){
					
					$('.header1').hide();
					$('.header2').show().stop(true,false).animate({'top':0},450)
					
					}
					
					else{
						
						$('.header1').show();
						$('.header2').stop(true,false).hide().css('top','-64px')
						
						}
						
				
				})
			
			}
			
		$(window).load(function(){
			
			tab_index()
			
			})	
	
	/*首页banner*/
	$(window).resize(function(){
			
		
		var w_height = $(window).height()
		var w_width = $(window).width()
		var sub_wid = $('.nav1').width()
		var t_wd = 1200-(sub_wid+122+300)
			
		var rate=950/1920;					
		
		if((w_height/w_width)>=rate){
					
			$(".banner li img").css({width:$(window).height()/rate,height:w_height,marginTop:-w_height/2,marginLeft:-($(window).height()/rate)/2});	
			$('.warp,.banner,.banner_list,.banner_list li').css('height',w_height)
			$(".sub_nav,.sub_ser").css({width:$(window).height()/rate,marginLeft:-($(window).height()/rate)/2});	
			
			}else{
				$(".banner li img").css({width:w_width,height:w_width*rate,marginLeft:-w_width/2,marginTop:-(w_width*rate)/2});
				$('.warp,.banner,.banner_list,.banner_list li').css('height',w_width*rate)
				$(".sub_nav,.sub_ser").css({width:w_width,marginLeft:-(w_width/2)});
			
			}
		
		})	
		
		$(window).resize();
		
		/*首页产品系列*/
	function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        if (elemTop + 50 < docViewBottom) {
            return true
        } else {
            return false
        }
    }

    function animateTop(item, time,callback) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item).parent()) ){
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({'left': '0'}, 800, 'easeOutCubic');
                callback;
            },time)
        }
    }
	
	
    function ftAnimate(item, time,callback) {
        if ($(item).attr('init') == 'false'&& isScrolledIntoView($(item))) {
            $(item).attr('init', 'true');
            setTimeout(function(){
                $(item).animate({'right': '0'}, 800, null);
				callback;
            },time)
        }
    }
	
	 

    function animateBot(item, time, callback) {
        $(item).delay(time).animate({'bottom': '0'}, 1200, 'easeOutCubic', callback)
    }


    var floor1Init = false,
        boxElemets = $('.J_Box'),
        box2Elemets = $('.J_Box2'),
        tileA = $('.tileA .tile'),
        tileB = $('.tileB .tile'),
        footTags = $('.foot-tags div'),
        fromNav3 = true;

    $.each(tileA, function () {
        $(this).attr('init', 'false');
    });

    $.each(tileB, function () {
        $(this).attr('init', 'false');
    });

    $.each(boxElemets, function () {
        $(this).attr('init', 'false');
    });
    $.each(box2Elemets, function () {
        $(this).attr('init', 'false');
    });
    $.each(footTags, function () {
        $(this).attr('init', 'false');
    });
    $.each($('.services div'), function () {
        $(this).attr('init', 'false');
    });

    function animateInit(){
        $.each(boxElemets, function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                $(this).animate({'left': '50%'}, 1000, 'easeOutCubic');
            }
        });

        $.each(tileA, function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                $(this).animate({'left': '50%'}, 1000, 'easeOutCubic');
            }
        });

        $.each(tileB, function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                $(this).animate({'left': '50%'}, 1000, 'easeOutCubic');
            }
        });

        ftAnimate('.foot-tag1', 0);
        ftAnimate('.foot-tag2', 100);
        ftAnimate('.foot-tag3', 200);
        ftAnimate('.foot-tag4', 300);
        ftAnimate('.foot-tag5', 400);

        ftAnimate('.s1', 0);
        ftAnimate('.s2', 100);
        ftAnimate('.s3', 200);
        ftAnimate('.s4', 300);

        if (!floor1Init) {
            animateBot('.star1', 800);
            animateTop('.star2', 300);
			ftAnimate('.star3', 200);
        }

    }
    animateInit();
    $(window).scroll(function () {
        animateInit();
    });
		
		/*产品系列*/
		$('.pro_chnal li:eq(0),.pro_chnal li:eq(1)').addClass('cur1')
		$('.pro_chnal li:eq(2),.pro_chnal li:eq(3)').addClass('cur2')
		$('.pro_chnal li.cur1').hover(function(){
			
			$(this).addClass('zIndex').find('.pro_chShave').show().find('.pro_chShow').stop().animate({'left':'0'},450)
			
			},function(){
				
				$(this).removeClass('zIndex').find('.pro_chShow').animate({'left':'-300px'},0,function(){
					
					$(this).parents('.pro_chShave').hide()
					
					})
				
				})
		
		$('.pro_chnal li.cur2').hover(function(){
			
			$(this).addClass('zIndex').find('.pro_chShave').show().find('.pro_chShow').stop().animate({'right':'0'},450)
			
			},function(){
				
				$(this).removeClass('zIndex').find('.pro_chShow').animate({'right':'-300px'},0,function(){
					
					$(this).parents('.pro_chShave').hide()
					
					})
				
				})
				
		/*咨询平台选项卡*/		
		var $news_this = $(".news_chnal a")
			 $news_this.hover(function(){
		 	$(this).addClass('cur').siblings().removeClass('cur')
	 	 	var news_index = $news_this.index(this);
	 		$(".news_chShow >div").eq(news_index).fadeIn(200).siblings().hide();
					
		})			
	
	})
