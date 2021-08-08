$(function() {
	/*左侧导航栏显示隐藏功能*/
	$(".subNav").click(function() {
			/*显示*/
			if($(this).find("span:first-child").attr('class') == "title-icon fa fa-caret-right") {
				$(this).find("span:first-child").removeClass("fa-caret-right");
				$(this).find("span:first-child").addClass("fa-caret-down");
				$(this).removeClass("sublist-down");
				$(this).addClass("sublist-up");
			}
			/*隐藏*/
			else {
				$(this).find("span:first-child").removeClass("fa-caret-down");
				$(this).find("span:first-child").addClass("fa-caret-right");
				$(this).removeClass("sublist-up");
				$(this).addClass("sublist-down");
			}
			// 修改数字控制速度， slideUp(500)控制卷起速度
			$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
		})
		/*左侧导航栏缩进功能*/
	$('.left-main').mouseover(function() {
		$(this).removeClass("left-off");
		$(this).addClass("left-full");
		$(this).siblings().find(".right-product").removeClass("right-off");
		$(this).siblings().find(".right-product").addClass("right-full");
		$(this).find('.sidebar-fold').find('span').attr('class', "fa fa-dedent");
	})
	$('.left-main').mouseout(function() {
			$(this).removeClass("left-full");
			$(this).addClass("left-off");
			$(this).siblings().find(".right-product").removeClass("right-full");
			$(this).siblings().find(".right-product").addClass("right-off");
			$(this).find('.sidebar-fold').find('span').attr('class', "fa fa-indent");
		})
		//	$(".left-main .sidebar-fold").click(function() {
		//
		//		if($(this).parent().attr('class') == "left-main left-full") {			//收起
		//			$(this).parent().removeClass("left-full");
		//			$(this).parent().addClass("left-off");
		//
		//			$(this).parent().parent().find(".right-product").removeClass("right-full");
		//			$(this).parent().parent().find(".right-product").addClass("right-off");
		//			$(this).find('span').attr('class',"fa fa-indent");
		//			
		//		} else {																//打开
		//			$(this).parent().removeClass("left-off");
		//			$(this).parent().addClass("left-full");
		//
		//			$(this).parent().parent().find(".right-product").removeClass("right-off");
		//			$(this).parent().parent().find(".right-product").addClass("right-full");
		//			$(this).find('span').attr('class',"fa fa-dedent");
		//		}
		//	})

	/*左侧鼠标移入提示功能*/
	$(".sBox ul li").mouseenter(function() {
		if($(this).find("span:last-child").css("display") == "none") {
			$(this).find("div").show();
		}
	}).mouseleave(function() {
		$(this).find("div").hide();
	})
	$('.subNavBox li').click(function() {
		$('.subNavBox ul li').removeClass('active');
		$(this).addClass('active');
	})

	$('.navContent>li>a').click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		var iframe = $('#ifr')[0].src = href;
	})
	$('#a1>li').click(function() {
		$(this).addClass('active').siblings('.active').removeClass('active');
		var id = $(this).find('a').attr('href');
		$(id).removeClass('hide').siblings().addClass('hide');
		$(id).find('div').find('ul').find('li').removeClass('active');
		$(id).find('div').find('ul').find('li:eq(0)').addClass('active');
		var id2 = $(id).find('div').find('ul').find('li:eq(0)').find('a').attr('href');
		var iframe = $('#ifr')[0].src = id2;
	})

	$('#cz_ul>li:last-child').mouseover(function() {
		$(this).find('.user-menu').css('display', 'block');
	});
	$('#cz_ul>li:last-child').mouseleave(function() {
		$(this).find('.user-menu').css('display', 'none');
	});
})