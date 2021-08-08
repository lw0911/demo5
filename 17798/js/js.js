// JavaScript Document
/*$(function(){
	//获取网页的高度 
	var bodyHeight=$(window).height();
	   //alert(bodyHeight)
	//获取头部的高度 
	var TopHeight=$("header").height();
	   //alert(TopHeight)
	//获取底部的高度
	var FootHeight=$("footer").height();
	   //alert(FootHeight)
	//获取网页宽度 
	var bodyWidth=$(window).width();
	//给midCont 赋予高度
	$(".midCont-s").css("height",bodyHeight-TopHeight-FootHeight-10+"px");
	if(bodyWidth<1003){
		$(".midCont").removeClass("midCont-s");
		}
		else{
			$(".midCont").addClass("midCont-s");
			}
	})*/
$(function(){
	//导航下拉
	$("nav li").hover(function(){
		$(this).find(".chilNav").stop(true,true).slideDown();
		},function(){
			$(this).find(".chilNav").stop(true,true).slideUp();
			})
	//产品弹出
	$(".abParList dt").click(function(){
		$(this).next("dd").next(".abProBig").fadeIn();
		$(".bg100").fadeIn();
		$("html,body").animate({scrollTop:0},0);
		})	
	$(".abParList .glyphicon-remove").click(function(){
		$(".abProBig").fadeOut();
		$(".bg100").fadeOut();
		})		
	
	})	