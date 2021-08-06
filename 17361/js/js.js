// JavaScript Document
$(function(){
	//选项卡
	var $fangantixian=$('.width1140');
	 $fangantixian.each(function(){
	    var xuanxiangka=$(this).find(".uleq").children("li");
		var xuanxiangkashow=$(this).find(".showlist");
	     xuanxiangka.mouseover(function(){
		 $(this).addClass("uleqCur").siblings("li").removeClass("uleqCur");
		 var index=$(this).index();
		 xuanxiangkashow.eq(index).show().siblings(".showlist").hide();
		 })
		})
	//左侧导航
	$(".leftNavCur").next("dd").show();
	$(".leftNav dt").mouseover(function(){
		$(this).next("dd").slideDown().siblings("dd").hide();
		})
	})
	
	
	