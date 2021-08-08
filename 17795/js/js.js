// JavaScript Document
$(function(){
	$(".kaiList tr:lt(3)").css("color","#F99500");
	$(".banner").click(function(){
		$(".allBack").show();
		$(".fuwuqu").show();
		})
	$(".allBack,.close").click(function(){
		$(".allBack").hide();
		$(".fuwuqu").hide();
		})
	$(".baby dl").hover(function(){
		$(this).find("dd").stop(true,true).slideToggle();
		})	
	$(".jinian dl").hover(function(){
		$(this).find("dd").stop(true,true).slideToggle();
		})	
	//.hengfu3
	$(".hengfu3:first").show();
	$(".hengLink span").click(function(){
		$(this).addClass("spanCur").siblings().removeClass("spanCur");
		var heng=$(this).index();
		$(".hengfu3").eq(heng).show().siblings(".hengfu3").hide();
		})
	//弹窗
	$(".jinian dl").click(function(){
		$(".bg100,.falvBox").stop(true,true).slideToggle();
		})
	$(".close,.yes").click(function(){
		$(".bg100,.falvBox").stop(true,true).slideToggle();
		})
	//wx
	$(".wx").click(function(){
		$(this).children(".wiImg").toggle();
		})
	$(".wiImg").dblclick(function(){
		$(this).slideToggle();
		})	
	})
	
	
	