/*!
 * SuperSlide v2.1.1 
 * 轻松解决网站大部分特效展示问题
 * 详尽信息请看官网：http://www.SuperSlide2.com/
 *
 * Copyright 2011-2013, 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途

 * v2.1.1：修复当调用多个SuperSlide，并设置returnDefault:true 时返回defaultIndex索引错误

 */

jQuery(function()
{	
	var leng=jQuery(".ban li").length;
	jQuery('.bd li').mouseover(function(e) 
	{
		var mun=jQuery(this).index()
		jQuery(this).addClass('on').siblings().removeClass();
		jQuery('.ban li').eq(mun).hide().stop().fadeIn().siblings().hide();
		num=mun+1;
		if(num==leng)
		{
			num=0;
		}
    });
	
	
	var time=setInterval(huan,6000);
	var num=1;
	
	function huan()
	{
		jQuery('.ban li').eq(num).hide().stop().fadeIn().siblings().hide();
		jQuery('.bd li').eq(num).addClass('on').siblings().removeClass();
		num++;
		if(num>leng-1)
		{
			num=0;
		}
	}
	jQuery('.H_ban').hover(function(){
		clearInterval(time);
	},function(){
		clearInterval(time);
		time=setInterval(huan,6000);
	})
})	
jQuery('.bd li').eq(0).addClass('on')