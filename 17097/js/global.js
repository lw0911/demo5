$(function(){
	change();
	
	$(window).scroll(function(){
		var scrollTop=$(window).scrollTop();
		change()
		//console.log(scrollTop)
	});
	
	$.when(function(){
		scro2();	
	}).done(function(){
	 	setTimeout(function(){
			jQuery(".txtScroll-left").slide({
			titCell: ".hd ul",
			mainCell: ".bd ul",
			autoPage: true,
			effect: "left",
			scroll: 1,
			vis: 4,
			interTime:3500,
			trigger: "click",
			autoPlay: true
			})
		},2000)
			
	})
	
	function scro2(){
		$('.inProCon h3').animate({top:'0px'},1400,'easeOutQuad');
		$('.txtScroll-left .hd .prev').animate({left:'0px'},2000,'easeOutQuad');
		$('.txtScroll-left .hd .next').animate({right:'0px'},2000,'easeOutQuad');
		$('.txtScroll-left .bd li').eq(0).animate({left:'0px'},2000,'easeOutQuad');
		$('.txtScroll-left .bd li').eq(1).animate({left:'0px'},1800,'easeOutQuad');
		$('.txtScroll-left .bd li').eq(2).animate({right:'0px'},1800,'easeOutQuad');
		$('.txtScroll-left .bd li').eq(3).animate({right:'0px'},2000,'easeOutQuad');
		$('.learnBtn').animate({bottom:'58px'},2000,'easeOutQuad');
	}
	
	function change(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>=300){
			$(".whyChooseUs h3 span").animate({top:'0px'},1400,'easeOutQuad');
			$('.whyChooseUsCon p.img').animate({left:'0px'},1800,'easeOutQuad');
			$('.whyChooseUsContent').animate({right:'0px'},1800,'easeOutQuad');
		}
		if(scrollTop>=800){
			scro2();
		}
		
		if(scrollTop>=1400){
			$('.inNews h3 span').animate({top:'3px'},1400,'easeOutQuad');
			$('.newsBtn a').eq(0).animate({left:'0px'},2000,'easeOutQuad');
			$('.newsBtn a').eq(1).animate({right:'0px'},2000,'easeOutQuad');
			$('.inNews ul:eq(0) li').eq(0).animate({left:'0px'},2000,'easeOutQuad');
			$('.inNews ul:eq(0) li').eq(2).animate({left:'0px'},2000,'easeOutQuad');
			$('.inNews ul:eq(0) li').eq(1).animate({right:'0px'},1800,'easeOutQuad');
			$('.inNews ul:eq(0) li').eq(3).animate({right:'0px'},1800,'easeOutQuad');
			$('.inNewsBtn').eq(0).animate({bottom:'0'},2000,'easeOutQuad');
		}
	}
});
