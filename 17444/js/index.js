$(document).ready(function(){
	$(".fullSlide").hover(function(){
		$(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
	},
	function(){
		$(this).find(".prev,.next").fadeOut()

	});
	$(".fullSlide").slide({
		
		titCell: ".hd ul",
		mainCell: ".bd ul",
		effect: "fold",
		autoPlay: true,
		autoPage: true,
		trigger: "click",
		startFun: function(i) {
			var curLi = jQuery(".fullSlide .bd li").eq(i);
			if ( !! curLi.attr("_src")) {
				curLi.css("background-image", curLi.attr("_src")).removeAttr("_src")
			}
		}
		
	});
	$(function () {
		
		var titnumb = $(".hd ul li").length;
		if (titnumb == 1) {
			$(".fullSlide .pd").css("display", "none");
			$(".fullSlide .hd").css("display", "none");
			} else {
			$(".fullSlide .pd").css("display", "block");
			$(".fullSlide .hd").css("display", "block");
			}
		});
	//专家行程
	$(function(){
	if(document.getElementById('yuyue_c'))
	{
		var _ul = $("#yuyue_c").children('ul');
		function autoScroll(){
			_ul.animate({marginTop:'-28px'},300,function(){
				$(this).children('li').eq(0).remove().appendTo($(this));
				$(this).css('margin-top','0px');
			});
		}
		var _auto = setInterval(autoScroll,2000);
		$("#yuyue_c").hover(function(){
			clearInterval(_auto);
		},function(){
			_auto = setInterval(autoScroll,2000);
		});
	}
});
	//首页专家
$(function(){
	if($('.index_team'))
	{
		var _ul = $(".index_team");
		
		function autoScroll(){
			_ul.animate({marginLeft:'-182px'},300,function(){
				$(this).children('li').eq(0).remove().appendTo($(this));
				$(this).css('margin-left','0px');
			});
		}
		var _auto = setInterval(autoScroll,2000);
		$(".index_team").hover(function(){
			clearInterval(_auto);
		},function(){
			_auto = setInterval(autoScroll,2000);
		});
		
		$('.slide_left').click(function(){
			clearInterval(_auto);						
			_ul.animate({marginLeft:'182px'},300,function(){
				$(this).children('li').last().remove().prependTo($(this));
				$(this).css('margin-left','0px');
			});
		});
		
		$('.slide_right').click(function(){
			clearInterval(_auto);
			_ul.animate({marginLeft:'-182px'},300,function(){
				$(this).children('li').eq(0).remove().appendTo($(this));
				$(this).css('margin-left','0px');
			});
		});
	}
});
//专家轮播
	$(".pro-main-banner").slide({
		titCell: ".pro-main-nb ul",
		mainCell: ".pro-main-box ul",
		effect: "left",
		interTime:4000,
		autoPlay: false,
		autoPage: true,
		prevCell: ".pro-main-prev",
		nextCell: ".pro-main-next",
		trigger: "click"
		
	});
	$(function () {
		var titnumb = $(".pro-main-nb ul li").length;
		if (titnumb == 1) {
			$(".pro-main-banner .pro-main-pn").css("display", "none");
			$(".pro-main-banner .pro-main-nb").css("display", "none");
			} else {
			$(".pro-main-banner .pro-main-pn").css("display", "block");
			$(".pro-main-banner .pro-main-nb").css("display", "block");
			}
	});	
//真人案例
	$(".proBoxSlide").hover(function(){
		$(this).find(".proBoxprev,.proBoxnext").stop(true, true).fadeTo("show", 0.5)
	},
	function(){
		$(this).find(".proBoxprev,.proBoxnext").fadeOut()
	});
	$(".proBoxSlide").slide({
		titCell: ".proBoxhd ul",
		mainCell: ".proBoxbd ul",
		effect: "fold",
		autoPlay: false,
		autoPage: true,
		vis: 1,
		trigger: "click",
		prevCell: ".proBoxprev",
		nextCell: ".proBoxnext"
	});
	var zrjs = 0;
	var fr = false;
	var fl = false;
	var lf = false;
	var rf = false;
	$(function() {
	   $(".proBoxprev").on("click", function () {
			if(rf == true){
				zrjs = 0;
				fl = false;
				rf = false;
				$('ul.navslist li')[0].click();
				$('div.xmsbutbox').scrollLeft(0);
			}
			else
			{
				lf = true;
				if(zrjs==0 && !fl){
					zrjs = 1000;
				}
				if(zrjs%500 == 0){
					if(zrjs == -500 && fl){
						zrjs = 1000;
					}
					$('div.xmsbutbox').scrollLeft(zrjs);
				}
				zrjs -= 125;
				if(zrjs == 0)
					fl = true;
			}
		})
	   $(".proBoxnext").on("click", function () {
			if(lf == true){
				zrjs = 0;
				fr = false;
				lf = false;
				$('ul.navslist li')[0].click();
				$('div.xmsbutbox').scrollLeft(0);
			}
			else
			{
				rf = true;
				zrjs += 125;
				if(zrjs%500 == 0){
					if(zrjs == 500 && fr){
						zrjs = 0;
						fr = false;
					}
					$('div.xmsbutbox').scrollLeft(zrjs);
				}
				if(zrjs == 1000){
					zrjs = 0;
					fr = true;
				}
			}
		})
	});
	$(function() {
		var div = $('div.xmsbutbox'),
		ul = $('ul.navslist'),
		ulPadding = 15;
		var divWidth = div.width();
		div.css({
			overflow: 'hidden'
		});
		var lastLi = $('ul.navslist li');
		var ulWidth =1500;
		ul.width(ulWidth);
		var pageNow = 0;
		var pageNUB = 2;
		
		$(".propageRight").on("click", function () {
			if(pageNow==pageNUB){pageNow=0;}else{pageNow=pageNow+1;}
			 div.scrollLeft(500*pageNow);
			 if(pageNow == 0) {
				lastLi[0].click();
			 }
			 else if(pageNow == 1) {
				lastLi[4].click();
			 }
			 else if(pageNow == 2) {
				lastLi[8].click();
			 }
			 zrjs = 500*pageNow;
			 if(zrjs == 1000){
				zrjs = 0;
				fr = true;
			 }
			 else{
				zrjs = 500*pageNow;
				fr = false;
			 }
		})
		$(".propageLeft").on("click", function () {
			if(pageNow==0){pageNow=pageNUB;}else{pageNow=pageNow-1;}
			div.scrollLeft(500*pageNow);
			if(pageNow == 0) {
				lastLi[0].click();
			 }
			 else if(pageNow == 1) {
				lastLi[4].click();
			 }
			 else if(pageNow == 2) {
				lastLi[8].click();
			 }
			 rf = true;
			 lf = true;
		})
	});
//底部轮播
$(function(){
	
	$(".titlemb li").removeClass("hover");
	$(".boxtxt").hide();

	$(".titlemb li").eq(0).addClass("hover");
	$(".boxtxt").eq(0).show();
	
		$(".titlemb li").mouseover(function(){
			$(".titlemb li").removeClass("hover");
			$(".boxtxt").hide();
			
			$(this).addClass("hover");
			
			$(".boxtxt").eq($(this).index()).show();

			
		});
	
});

	//专家行程
	$(".scheBox").slide({
		titCell: ".in-sche-nb ul",
		mainCell: ".in-sche-box ul",
		effect: "fold",
		interTime:2000,
		autoPlay: true,
		autoPage: true,
		trigger: "click"
		
	});
	$(function () {
		
		var titnumb = $(".in-sche-nb ul li").length;
		if (titnumb == 1) {
			$(".scheBox .in-sche-pn").css("display", "none");
			$(".scheBox .in-sche-nb").css("display", "none");
			} else {
			$(".scheBox .in-sche-pn").css("display", "block");
			$(".scheBox .in-sche-nb").css("display", "block");
			}
		});
	//活动轮播
	$(".con-main-banner").slide({
		titCell: ".con-main-nb ul",
		mainCell: ".con-main-box ul",
		effect: "left",
		interTime:4000,
		autoPlay: true,
		autoPage: true,
		prevCell: ".con-main-prev",
		nextCell: ".con-main-next",
		trigger: "click"
		
	});
	$(function () {
		var titnumb = $(".con-main-nb ul li").length;
		if (titnumb == 1) {
			$(".con-main-banner .con-main-pn").css("display", "none");
			$(".con-main-banner .con-main-nb").css("display", "none");
			} else {
			$(".con-main-banner .con-main-pn").css("display", "block");
			$(".con-main-banner .con-main-nb").css("display", "block");
			}
	});	
	//治疗范围
	$(function () {
		var itemnumb = $(".con-itemBox ul li").length;
		if (itemnumb > 6) {
			$(".con-itemBox").addClass("con-smallitem");
			}
	});

	//美莱历史
	$(".br-history").slide({
		titCell: ".br-history-nb ul",
		mainCell: ".br-history-box ul",
		effect: "left",
		autoPlay: true,
		autoPage: true,
		prevCell: ".br-history-prev",
		nextCell: ".br-history-next",
		trigger: "click"
		
	});
	$(function () {
		var titnumb = $(".br-history-nb ul li").length;
		if (titnumb == 1) {
			$(".br-history-banner .br-history-pn").css("display", "none");
			$(".br-history-banner .br-history-nb").css("display", "none");
			} else {
			$(".br-history-banner .br-history-pn").css("display", "block");
			$(".br-history-banner .br-history-nb").css("display", "block");
			}
	});	
});	