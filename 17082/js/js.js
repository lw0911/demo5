// JavaScript Document
$(function(){
	//内页左侧导航
	$(".leftNavCur").next("dd").show();
	$(".leftNav dt").click(function(){
		$(this).addClass("leftNavCur").siblings("dt").removeClass("leftNavCur");
		$(this).next("dd").slideDown().siblings("dd").hide();
		})
		
	})
	
	
	