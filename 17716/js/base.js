var navbool=true;
/*screen*/
function boolwapscreen(){
	var screenWidth=$(window).width();
	if(screenWidth>=1200){
		navbool=true;
	}else if(screenWidth>=1024&&screenWidth<1200){
		navbool=true;
	}else if(screenWidth>=640&&screenWidth<1024){
		navbool=false;
	}else if(screenWidth>=320&&screenWidth<640){
		navbool=false;
	}
}
boolwapscreen();
/*nav*/
function boolwapnav(navIndex,navbool){
	if(navbool){
		$(".nav").show();
		$(".nav .child").unbind("click").bind("mouseover",function(){
			navIndex=$(".nav .child").index($(this));
			navTopAn(navIndex);
			$(this).find(".childContent").show();
			$.each($(this).find(".childContent .childContentLi"),function(i,n){
				var stime=0.5+0.1*i;
				anClasAdd($(".nav .child:eq("+navIndex+") .childContent .childContentLi:eq("+i+")"),"rightOpacityShow",stime+"s","0s","ease-in-out","both");
			});
		}).bind("mouseleave",function(){
			var navIndex=$(".nav .child").index($(".nav .child.on"));
			navTopAn(navIndex);
			$(this).find(".childContent").hide();
		});
	}else{
		$(".nav").hide();
		$(".wapNavBtn").unbind("click").bind("click",function(){
			$(".nav").stop(false,true).fadeToggle(500);
		});
		$(".nav .child").unbind("mouseover mouseleave").bind("click",function(){
			$(this).find(".childContent").stop(false,true).slideToggle(500);
		});
	}
}
$(function(){
	/*nav*/
	var navIndex=$(".nav .child").index($(".nav .child.on"));
	navTopAn(navIndex);
	boolwapnav(navIndex,navbool);
	$(window).resize(function(){
		boolwapscreen();
		boolwapnav(navIndex,navbool);
	});
	

	
	$(".header .nav .child .seachIcon").click(function(){	
		$(".searchContent").stop(false,true).fadeToggle(500);
	});
	$(".header .list .pointer").click(function(){
		$(this).toggleClass("on");
		$(this).parent().parent().children(".listContent").stop(false,true).slideToggle(500);
	});
	$(".header .list .addBtn").click(function(){
		$(this).toggleClass("on");
		$(".list .container").stop(false,true).slideToggle(500);
	});
	
	
	var floatBool=true;
	var scrollTop=$(this).scrollTop();
	$(window).scroll(function(){
		if($(this).scrollTop()>=400){
			if(!floatBool){
				$(".top").fadeIn(500);
				floatBool=true;
			}
		}else{
			if(floatBool){
				$(".top").fadeOut(500);
				floatBool=false;
			}
		}
	});
	
	$(".top").click(function(){
		$('body,html').animate({scrollTop:0},500);
	});
	
	/*scroll*/
	var scrollBool=false;
	$(window).scroll(function(){
		if($(this).scrollTop()>=200){
			if(!scrollBool){
			$(".header").stop(false,false).animate({"height":"80px"},200);
			$(".header .nav").stop(false,false).animate({"height":"80px"},200);
			$(".header .nav .child").stop(false,false).animate({"height":"80px"},200).css({"line-height":"80px"});
			$(".header .nav .child.navChildSearch").stop(false,false).css({"line-height":"20px"});
			$(".header .nav .child.navChildSearch .seachIcon").css({"margin-top":"33px"});
			$(".header .nav .child .childContent").css("top","80px");
			$(".header .headerLogo").stop(false,false).animate({"top":"16px"},200);
			$(".crumbs").animate({"padding-top":"80px"},200);
			scrollBool=true;
			}
		}else{
			if(scrollBool){
			$(".header").stop(false,false).animate({"height":"120px"},200);
			$(".header .nav").stop(false,false).animate({"height":"120px"},200);
			$(".header .nav .child").stop(false,false).animate({"height":"120px"},200).css({"line-height":"120px"});
			$(".header .nav .child.navChildSearch").stop(false,false).css({"line-height":"20px"});
			$(".header .nav .child.navChildSearch .seachIcon").css({"margin-top":"53px"});
			$(".header .nav .child .childContent").css("top","120px");
			$(".header .headerLogo").stop(false,false).animate({"top":"38px"},200);
			$(".crumbs").animate({"padding-top":"120px"},200);
			scrollBool=false;
			}
		}
		
	});
});
/*vedioPlay*/
function vedioPlay(src){
	$(".vedioContent iframe").attr("src",src);
	$(".vedioHide").fadeIn(500);
	$(".vedioContent").delay(100).fadeIn(500);
}
function vedioPlayClose(){
	$(".vedioContent iframe").attr("src","");
	$(".vedioHide").delay(100).fadeOut(500);
	$(".vedioContent").fadeOut(500);
}
/*nav top*/
function navTopAn(index){
	var navW=$(".nav .child.on").width();
	$(".navTop").css({
		"width":navW,
		"display":"block",
		"left":navW*index
	});
}
/*animateClassAdd*/
function anClasAdd(e,keyframes,stime,dtime,an,status){
	$(e).css({
		"animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-moz-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-webkit-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
		"-o-animation":keyframes+" "+stime+" "+an+" "+dtime+" "+status,
	});
}
/*cutString*/
function cutString(str, len) {
	if(str.length*2 <= len) {
		return str;
	}
	var strlen = 0;
	var s = "";
	for(var i = 0;i < str.length; i++) {
		s = s + str.charAt(i);
		if (str.charCodeAt(i) > 128) {
			strlen = strlen + 2;
			if(strlen >= len){
				return s.substring(0,s.length-1) + "...";
			}
		} else {
			strlen = strlen + 1;
			if(strlen >= len){
				return s.substring(0,s.length-2) + "...";
			}
		}
	}
	return s;
}

















