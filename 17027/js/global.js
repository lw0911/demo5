// JavaScript Document

function imgload(){
	$(".img").each(function(index, element) {
		if($(window).width()<=640){
			$(this).attr("src",$(this).attr("msrc"));
		}
		else{
			$(this).attr("src",$(this).attr("psrc"));
		}
	});
	$(".imgbg").each(function(index, element) {
		if($(window).width()<=640){
			$(this).css("background-image","url("+$(this).attr("msrc")+")");
		}
		else{
			$(this).css("background-image","url("+$(this).attr("psrc")+")");
		}
	});
}

var sto;
$(window).resize(function(){
	clearTimeout(sto);
	sto=setTimeout(function(){
		imgload();
	},300);
});

//全局js
$(function(){
//start
imgload();

$(function(){
	$("#header").addClass("show");
	$(".banner").addClass("show");
});


//滚动条
if($(window).width()>640){
	$("html").niceScroll({
		cursorcolor:"#111",
		cursorborder:"none",
		cursorwidth:"8px",
		scrollspeed:80,
		background:"#aaa",
		cursoropacitymin:0,
		cursoropacitymax:0.7,
		enablekeyboard:false,
		zindex:2
	});
}
else{
//phone
//全局点击事件
$(window).bind("touchend",function(){
	$("#header .menu").removeClass("act");
	$("#header .nav_main").removeClass("show");
});
//导航显示
$("#header .menu").bind("touchend",function(event){
	if(!$(this).hasClass("act")){
		$(".nav_main").addClass("show");
		$(this).addClass("act");
	}
	else{
		$(".nav_main").removeClass("show");
		$(this).removeClass("act");
	}
});
//停止派生
$("#header .menu").bind("touchend",function(event){
	event.stopPropagation();
});
$(".nav_main").bind("touchend",function(event){
	event.stopPropagation();
});
}


$(".gotop").click(function(){
	$("html").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
	if(navigator.appVersion.match("WebKit")){
		$("body").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
	}
	else{
		$("html").animate({scrollTop:0},400+$(window).scrollTop()*0.3);
	}
});
$(window).scroll(function(){
	if($(window).scrollTop()>100){$(".gotop").fadeIn();}
	else{$(".gotop").fadeOut();}
});


//end
});