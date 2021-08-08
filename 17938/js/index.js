$(function(){

	$("#menu ul").niceScroll({
		cursorcolor: "#000",
		cursoropacitymin: 0,
		cursoropacitymax: 0.8,
		cursorwidth: "4px",
		cursorborderradius: "2px",
	});
	
	$(".content").niceScroll({
		cursorcolor: "#11aee8",
		cursoropacitymin: 0,
		cursoropacitymax: 0.8,
		cursorwidth: "4px",
		cursorborderradius: "2px",
	});
	
	$(".apisc").niceScroll({
		cursorcolor: "#c6c6c6",
		cursoropacitymin: 0,
		cursoropacitymax: 0.8,
		cursorwidth: "4px",
		cursorborderradius: "2px",
	});
	$(".apinav").niceScroll({
		cursorcolor: "#c6c6c6",
		cursoropacitymin: 0,
		cursoropacitymax: 0.8,
		cursorwidth: "4px",
		cursorborderradius: "2px",
	});
	
	
	$(".topItem").hover(function(){
		$(this).find(".dropdown").stop().slideDown();
	},function(){
		$(this).find(".dropdown").stop().slideUp();
	})
	
	$(window).resize(function(){
		var winHeight=$(window).height();
		var topHeight=$("#top").height();
		
		$("#main").height(winHeight-topHeight+'px');
		
	}).resize();
	
	
	
	
	//获取信息
	var inform=function(){
			$(".selectBtn").click(function(event){
				$(this).toggleClass("active").siblings(".formSelect").slideToggle();
				event.stopPropagation();
			})
			
			$(".formSelect ul li").click(function(){
				$(this).parents(".formSelect").siblings("input").val($(this).text()).siblings(".formSelect").slideUp().siblings(".selectBtn").removeClass("active");
			})
			
			$("body").click(function(){
				$(".selectBtn").removeClass("active");
				$(".formSelect").slideUp();
			})
			
			/////////////////////////////////////////
			$(".informStateW").click(function(){
				$(this).find("em").toggleClass("active");
			})
			
		}
		
	//项目列表
	$(".prolist table span").click(function(){
		$(this).toggleClass("active");
	})
		
	//专属对接
	var selectDown=function(){
		$(".selectW").click(function(event){
			$(this).find(".selectDown").slideToggle().siblings(".selBtn").toggleClass("active");
			event.stopPropagation();
		})
		$(".selectDown ul li").click(function(){
			$(this).parents(".selectDown").siblings("input").val($(this).text());
		})
		$("body").click(function(){
			$(".selectDown").slideUp();
			$(".selBtn").removeClass("active");
		})
	}
		
	$(".buttChoose span").click(function(){
		$(this).addClass("active").siblings("span").removeClass("active");
	})
	
	$(".buttW table i").click(function(){
		$(this).toggleClass("active");
	})
		
	//个人中心	
	$(".personW p input, .personPassW p input").focus(function(){
		$(this).addClass("active");
	}).blur(function(){
		$(this).removeClass("active");
	})
	
	
		
	//page
	var page=function(){
		$(".page a").click(function(){
			$(this).addClass("active").siblings(".page a").removeClass("active");
			$(this).parent(".page").find("em").removeClass("active");
			$(this).parent(".page").find("i").removeClass("active");
		})
		$(".page em").click(function(){
			$(this).addClass("active").siblings(".page em").removeClass("active");
			$(this).parent(".page").find("i").removeClass("active");
		})
		$(".page i").click(function(){
			$(this).addClass("active").siblings(".page i").removeClass("active");
			$(this).parent(".page").find("em").removeClass("active");
		})
	}
	
	
	var help=function(){
		$(".help_list li").each(function(){
			$(this).click(function(){
				if($(this).hasClass("active")){
					$(this).removeClass("active");
					$(this).find(".help_down").slideUp();
				}else{
					$(this).addClass("active");
					$(this).find(".help_down").slideDown();
				}
			})
		})
	}
	
	
	//menu
	var menu=function(){
		$("#menu ul li").click(function(){
			$(this).addClass("on").siblings("li").removeClass("on");
		})
	}

	
	
	
	
	
		inform();   //获取信息
		selectDown();  //专属对接
		page();  //page
		help();
		menu();
	
	
	
	

});