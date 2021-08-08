$(function(){
	var timer = '';//定时器
	var i = 0;
	var y = 0;
	var tao_timer = '';


		// 左边公共tab切换样式
	$('.tabbox a').mouseover(function(){
		$(this).addClass('hot_style').siblings('a').removeClass('hot_style');
		var cur = $(this).index();
		$(this).parents('.hot_l_title').siblings('ul').eq(cur).show().siblings('ul').hide();
	})


	// input表单获得焦点
	$('.search_text').focus(function(){
		$(this).attr('value','');
		$(this).removeClass().addClass('blue');
	})

	//input表单失去焦点
	$('.search_text').blur(function(){
		$(this).removeClass('blue').addClass('search_text');
	})


	//头部右边隐藏盒子效果
	$('.user_r').hover(function(){
		$('.hidden_r').show();
	},function(){
		$('.hidden_r').hide();
	})

	//中间隐藏盒子文字样式
	$('.hidden_m_top span').mouseover(function(){
		$('.hidden_m_top span').removeClass('span_style');
		$(this).addClass('span_style');
	})


	// 头部右侧中间隐藏盒子移入
	$('.user_m').hover(function(){
		$('.user_m .hidden_m').show();
	},function(){
		$('.user_m .hidden_m').hide();
	})


	// 中间隐藏盒子tab切换效果
	$('span.history').mouseover(function(){
		$('.history_box').show();
	});

	$('span.update').mouseover(function(){
		$('.history_box').hide();
		$('.user_m .hidden_m').show();
	})





	//轮换版
	$('.smal_pic li').mouseover(function(){
		clearInterval(timer);
		var backImg = $(this).find('img').attr('backImg');
		var backColor = $(this).find('img').attr('backColor');
		var background = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background : background});
		$(this).addClass('hover').siblings().removeClass('hover');
		i = $(this).index();
		$('.focus_title a').eq(i).show().siblings('a').hide();
	})

	// 移出小图片开启定时器
	$('.smal_pic li').mouseout(function(){
		timer = setInterval(move,1000);
	})

	timer = setInterval(move,1000);

	function move(){
		if(i>11){
			i = 0;
		}
		var backImg = $('.smal_pic li').eq(i).find('img').attr('backImg');
		var backColor = $('.smal_pic li').eq(i).find('img').attr('backColor');
		var background = 'url(' + backImg + ') ' + 'no-repeat center ' + backColor;
		$('#focus_background').css({background : background});
		$('.smal_pic li').eq(i).addClass('hover').siblings().removeClass('hover');
		$('.focus_title a').eq(i).show().siblings('a').hide();
		i++; 
	}




	//轮换版右侧全部分类鼠标样式
	$('.title a').mouseover(function(){
		$(this).addClass('rank_hover').siblings().removeClass('rank_hover');
	})

	//轮换版区域全部分类tab切换效果
	$('.focusrank p.title a').mouseover(function(){
		var cur = $(this).index();
		$('.focusrank div.content ul').eq(cur).show().siblings('ul').hide();
	})




	// 图片hover公共效果

	$('a.pic').hover(function(){
		$(this).addClass('apic_hover');
	},function(){
		$(this).removeClass('apic_hover');
	})






	//今日热播右边tab切换效果
	$('.hot_right a.tab').mouseover(function(){
		$(this).addClass('a_r_tab').siblings('a').removeClass('a_r_tab');
		var cur = $(this).index();
		$('.hot_right ul').eq(cur).show().siblings('ul').hide();
	})



	// 电视剧区域右边tab切换效果
	$('ul.tab_box li').mouseover(function(){
		$(this).addClass('tv_r_tab').siblings('li').removeClass('tv_r_tab');
		var cur = $(this).index();
		$('.tv_right div.list').eq(cur).show().siblings('div.list').hide();
		$('.tv_right ul.tagbox').eq(cur).show().siblings('ul.tagbox').hide();
	})


	//猜您喜欢点击效果
	var index=0;
	$('.like .title_left a.more2').click(function(){
		index--;
		index = (index==-3)?0:index;
		var left = 953*index;
		$('.like_left .main_l ul.img_list').stop().animate({'left':left+'px'},300)
	})



	// 电影区域右边tab切换效果
	$('.movie_right ul.tab_box li').mouseover(function(){
		var cur = $(this).index();
		$('.movie_right div.list').eq(cur).show().siblings('div.list').hide();
		$('.movie_right ul.tagbox').eq(cur).show().siblings('ul.tagbox').hide();	
	})






	// vip区域右边tab切换效果
	$('.vip_right ul.tab_box li').mouseover(function(){
		var cur = $(this).index();
		$('.vip_right div.list').eq(cur).show().siblings('div.list').hide();
	})


	// 综艺区域右边tab切换效果

	$('.zy .zy_tab li').mouseover(function(){
		var cur = $(this).index();
		$('.zy .zy_right div.list').eq(cur).show().siblings('div.list').hide();
		$('.zy .zy_right ul.tagbox').eq(cur).show().siblings('ul.tagbox').hide();
	})





	// 动漫区域右边tab切换效果
	$('.anime_right ul.tab_box li').mouseover(function(){
		var cur = $(this).index();
		$('.anime_right div.list').eq(cur).show().siblings('div.list').hide();
		$('.anime_right ul.tagbox').eq(cur).show().siblings('ul.tagbox').hide();
		$('.anime_right ul.simglist').eq(cur).show().siblings('ul.simglist').hide();
	})


	//百度广告盒子

	$('.baidu_box a').hover(function(){
		$(this).css('opacity',0.9);
	},function(){
		$(this).css('opacity',1);
	})


	//靓tv右边tab效果
	$('.good_right .tabbox_title a').mouseover(function(){
		$(this).addClass('good_r_style').siblings('a').removeClass('good_r_style');
		var cur = $(this).index();
		$('.good_right ul.imglist').eq(cur).show().siblings('ul.imglist').hide();
	})



	//淘宝小图片移入效果
	$('p.tao').mouseover(function(){
		$('div.tao1').show();
		$(this).hide();
	})
	$('div.tao1').mouseout(function(){
		$('div.tao1').hide();
		$('p.tao').show();
	})


	// 淘宝广告tab切换效果
	$('.ad_tab a').mouseover(function(){
		clearInterval(tao_timer);
		var cur = $(this).index();
		$(this).addClass('one').siblings('a').removeClass('one');
		$('.ad_left ul').eq(cur).show().siblings('ul').hide();
	})

	$('.ad_tab a').mouseout(function(){
		tao_timer = setInterval(tab,1000);
	})

	tao_timer = setInterval(tab,1000);

	function tab(){
		if(y>2){
			y=0;
		}
		$('.ad_left ul').eq(y).show().siblings('ul').hide();
		$('.ad_tab a').eq(y).addClass('one').siblings('a').removeClass('one');
		y++;
	}



	// 返回顶部效果
	var back_timer = '';
	$(window).scroll(function(){
		var top = $(window).scrollTop();
		(top>500)?$('.back_top').show():$('.back_top').hide();
	})

	
	$('.back_top a').click(function(){
		back_timer = setInterval(function(){
			$(window).scrollTop($(window).scrollTop()-1000);
			if($(window).scrollTop()<=0){
				clearInterval(back_timer);
			}
		},1)
	})

})