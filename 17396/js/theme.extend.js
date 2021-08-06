jQuery(function($) {
	
	
	
	
	/* ----------------------------------------------------------------------------------------------
	$('li.facebook').find('a').on('click',function(){
		//<li class="social facebook"><a href="" data-tip="bottom" data-original-title="官方微信"></a></li>
		//return false;
	});
	 */
	
	
	
	
	/* ---------------------------------------------------------------------------------------------- */
	/* 图片蒙板 * /
	$(".thumb-list img").click(function(){
		var src = $(this).attr("src");
		var large = $(this).data("large");
		$("#zoomblock>img").attr("src",src);
		$("#zoomblock .he-zoom>img").attr("src",large);
	});
	/* ---------------------------------------------------------------------------------------------- */
	/* divRuner 首页批量移动 */
	$('#divRuner ul').carouFredSel({
		prev: '#prev',
		next: '#next',
		pagination: "#pager",
		scroll: 1000
	});
	/* ---------------------------------------------------------------------------------------------- */
	/* divRuner 内页批量移动 */
	$('#divRuner4pic ul').carouFredSel({
		prev: '#prev',
		next: '#next',
		items: 4,
		/* pagination: "#pager", */
		scroll: 1000
	});
	/* ---------------------------------------------------------------------------------------------- */
	/* fullScreenRunner */
	var $c = $('#fullScreenRunner'),
		$w = $(window);
	$c.carouFredSel({
		align: false,
		items: 10,
		scroll: {
			items: 1,
			duration: 8000,
			timeoutDuration: 0,
			easing: 'linear',
			pauseOnHover: 'immediate'
		}
	});
	
	$w.bind('resize.example', function() {
		var nw = $w.width();
		if (nw < 990) {
			nw = 990;
		}
		$c.width(nw * 3);
		$c.parent().width(nw);
	}).trigger('resize.example');
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(".products-thumbs .product-thumb").hover(function() {
		//$(this).find("h4").css("display","block");
		//$(this).find("img").animate({bottom:"210px"},300);
		//$(this).find(".ico").animate({bottom:"-55px"},300);
		//$(this).find(".hover").animate({bottom:"80px"},300);
		$(this).animate({top:"-210px"},300);
	}, function() {
		//$(this).find("h4").css("display","none");
		//$(this).find("img").animate({bottom:"0px"},300); 
		//$(this).find(".hover").animate({bottom:"-210px"},300); 
		//$(this).find(".ico").animate({bottom:"50px"},300);
		
		$(this).animate({top:"0px"},300);
	});
	
	$(".shops-thumbs .shops-thumb").hover(function() {
		$(this).animate({top:"-300px"},300);
	}, function() {
		$(this).animate({top:"0px"},300);
	});
	
	
	$('.brand_B').imagesLoaded(function(){
		$('.brand_B').masonry({
			itemSelector : '.item',
			columnWidth : 15
		});
		$(".brand_B").find('.item').each(function(){
			var thisItemHeight = $(this).height();
			$(this).height( thisItemHeight - 5);
		});
	});
	$(".brand_B").find('.item').hover(function(){
		h = $(this).height()/2;
		$(this).find("a").css("padding-top",h-20)
		$(this).find("a").fadeTo(500,1);
		$(this).find("span").fadeTo(200,0.5);
	},function(){
		$(this).find("a").fadeTo(100,0);
		$(this).find("span").fadeTo(100,0);
	})

	
	
	
	//展开效果
	$("#kefuSidebar").animate({right:-150},100);
	$("#kefuSidebar").hover(
		function(){
			$(this).stop(true,false);
			$(this).animate({right:0},300);
		},
		function(){
			$(this).animate({right:-150},100);
		}
	)
	
	
	
});