// JavaScript Document
$(function(){
	$(".txt").click(function(){ 
		if($(this).val()=="输入关键字"){ 
			$(this).val(""); 
		} 
	});
	$(".txt").blur(function(){ 
		if($(this).val()=="") { 
			$(this).val("输入关键字"); 
		} 
	});
});

$(function(){
	$("#Slide>a:gt(0)").hide();
	var n=0;
	var slide=$("#Slide>a");
	var c=slide.length;
	var t=null;
	autoPlay();
	function autoPlay(){
		t=setInterval(function(){
			n++;
			if(n>=c)n=0;
			slide.eq(n).fadeIn(1000).siblings('a').fadeOut(1000);
			$("#Ctrl>span").eq(n).addClass('currt').siblings().removeClass('currt');
		 },2000);
	}
	$("#Ctrl>span").each(function(index){
		$(this).click(function(){
			n=index;
			slide.eq(index).fadeIn(1000).siblings('a').fadeOut(1000);
			$("#Ctrl>span").eq(index).addClass('currt').siblings().removeClass('currt');
		});
	});
	$("#Slide").hover(function(){
		clearInterval(t);
	},function(){
		autoPlay();
	});
});

$(function(){
	var flag=0;
	$(".prev>a").click(function(){
		flag-=615;
		if(flag<-615)flag=0;
		$(".scroll").stop(true,false).animate({'marginLeft':flag},800);
	});
	$(".next>a").click(function(){
		if(flag>-615)flag=-1230;
		flag+=615;
		$(".scroll").stop(true,false).animate({'marginLeft':flag},800);
	});
});

$(function(){
	$(".prev").hover(function(){
		$("#s1").fadeIn(100).show();
	},function(){
		$("#s1").fadeOut(100).hide();
	});
})

$(function(){
	$(".next").hover(function(){
		$("#s2").fadeIn(100).show();
	},function(){
		$("#s2").fadeOut(100).hide();
	});
})


