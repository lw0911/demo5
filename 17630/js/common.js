// JavaScript Document
$(function(){
	
	$('.bannerW .bannerL li').hover(function(){
		$(this).children('dl').show();
	},function(){
		$(this).children('dl').hide();
	});	
	
	//焦点图轮播
	var interval = 3000;	//自动轮播间隔
	var s = 600;			//淡出淡入时间
	var nowimg = 0;
	var $imageslistLis = $(".bannerR li");
	var $circles = $(".circle li");
	var liAmount = $imageslistLis.length;
	function rightButFunc() {
		if(!$imageslistLis.is(":animated")){
			$imageslistLis.eq(nowimg).fadeOut(s);
			nowimg++;
			if (nowimg > liAmount - 1) {
				nowimg = 0;
			}
			$imageslistLis.eq(nowimg).fadeIn(s);
			changeCircle();
		}
	}
	//小圆点
	$circles.click(function(){
	if(!$imageslistLis.is(":animated")){
		$imageslistLis.eq(nowimg).fadeOut(s);
		nowimg = $(this).index();
		$imageslistLis.eq(nowimg).fadeIn(s);
		changeCircle();
		}
	});

	function changeCircle() {
		$circles.eq(nowimg).addClass("current").siblings().removeClass("current");
	}
	//定时器
	var timer = setInterval(rightButFunc,interval);
			
	$(".bannerR , .circle").mouseenter(function(){
		clearInterval(timer);
	});

	$(".bannerR , .circle").mouseleave(function(){
		clearInterval(timer);
		timer = setInterval(rightButFunc,interval);
	});
	
	//热门专业	
	var imK = 0;
	var timer01 = null;
	function myFn(){
		imK++;
		if(imK > 7){
			 imK = 1; 
			 $('.hotB').css('left','0px');
		}
		var iwz = imK * -205;
		$('.hotB').stop().animate({'left':iwz + 'px'},500);
	}
	timer01 = setInterval(function(){
            myFn();
        },3000);
	$('.hotT .traR').click(function(event) {	 
		myFn();
	});
	$('.hotT .traL').click(function(event) {
		imK--;
		if(imK < 0){
			imK = 6;
			$('.hotB').css('left','-1435px');
		}
		var iwz = imK * -205;
		$('.hotB').stop().animate({'left':iwz + 'px'},500);
	});
	$('.hotB').hover(function() {
            clearInterval(timer01);
        }, function() {
            timer01 = setInterval(function(){
                myFn();
            },3000);
    });
	
	//青鸟报名流程
	 $(window).scroll(function(){ 
      	if($(window).scrollTop() > 1600){ 
          $('#scrollSearchDiv').show();	 
        } 
    });
	
	//项目展示	
	var imK1 = 0;
	var timer03 = null;
	function myds(){
		imK1++;
		if(imK1 > 12){
			 imK1 = 1; 
			 $('.story-con').css('left','0px');
		}
		var iwz1 = imK1 * -309;
		$('.story-con').stop().animate({'left':iwz1 + 'px'},500);
	}
	timer03 = setInterval(function(){
            myds();
        },3000);
	$('.story-con').hover(function() {
            clearInterval(timer03);
        }, function() {
            timer03 = setInterval(function(){
                myds();
            },3000);
    });
	
	//荣誉奖项	
	var play = {
		dom:null,
		prev:null,
		next:null,
		left:320,
		domW:null,
		init:function(){
			var size; 
			this.dom = $(".h-ry-con ul li");
			size = this.dom.find("dl").size()+1;
			this.prev = $(".h-ry-con .btnLeft");
			this.next = $(".h-ry-con .btnRight");
			this.dom.width(size*this.left);
			this.prevEvent();
			this.nextEvent();
		},
		prevEvent:function(){
			var prevBolen = false;
			var addObj;
			this.next.click(function(){
				if(prevBolen) return;
				prevBolen = true;
				play.dom.find("dl").first().clone().appendTo(play.dom);
				play.dom.animate({left:"-"+play.left},500,function(){
					play.dom.css("left","0");
					play.dom.find("dl").first().remove();
					prevBolen = false;
					addObj = play.dom.find("dl.current").next();
					play.dom.find("dl.current").removeClass("current");
					addObj.addClass("current");
				});
			});
		},
		nextEvent:function(){
			var nextBolen = false;
			var addObj1;
			this.prev.click(function(){
				if(nextBolen) return;
				nextBolen = true;
				play.dom.find("dl").last().clone().prependTo(play.dom);
				play.dom.css("left","-320px");
				play.dom.animate({left:0},500,function(){
					play.dom.find("dl").last().remove();
					nextBolen = false;
					addObj1 = play.dom.find("dl.current").prev();
					play.dom.find("dl.current").removeClass("current");
					addObj1.addClass("current");
				});
			});
		},
	};
	play.init();

	//教师介绍
	$('.shizi li').hover(function(){
		$(this).children('p').stop().slideDown(500);
		$(this).siblings().children('p').stop().slideUp(500);
	},function(){
		$(this).children('p').stop().slideUp(500);
		$('.shizi li').eq(0).children('p').stop().slideDown(500);
	});
	
	//女生页面轮播
	var myLSn = $('.lunbo ul li').eq(0).clone(true);
	var myTagn = $(myLSn);
	var imgKeyn = 0;
	function nvFn(){
		imgKeyn++;
		if(imgKeyn > 5){
			 imgKeyn = 1; 
			 $('.lunbo ul').css('left','0px');
		}
		var imgWZn = imgKeyn * -910;
		$('.lunbo ul').stop().animate({'left':imgWZn + 'px'},500);
	}
	$('.lunbo ul').append(myTagn);
	$('.teaCon .btnR').click(function(event) {	 
		nvFn();
	});
	$('.teaCon .btnL').click(function(event) {
		imgKeyn--;
		if(imgKeyn < 0){
			imgKeyn = 4;
			$('.lunbo ul').css('left','-4550px');
		}
		var imgWZn = imgKeyn * -910;
		$('.lunbo ul').stop().animate({'left':imgWZn + 'px'},500);
	});
})

/*青鸟实力*/
$(function(){
	var video = $().dialog({
		width:860,
		height:500
	});
	$("#sec7-1").click(function(){
		var param = '<video id="sec7-video1" width="100%"  height="100%" preload="auto"><source src="img/shili/sec7-1.mp4" type="video/mp4" ></video>';
		video.open(param);
		media=document.getElementById("sec7-video1");
		media.play();
	});
	$("#sec7-2").click(function(){
		var param = '<video id="sec7-video2" width="100%"  height="100%" preload="auto"><source src="img/shili/sec7-2.mp4" type="video/mp4" ></video>';
		video.open(param);
		media=document.getElementById("sec7-video2");
		media.play();
	});
	$("#sec7-3").click(function(){
		var param = '<video id="enter_video" width="100%"  height="100%" autoplay="autoplay" preload="auto"><source src="img/shili/sec7-3.mp4" type="video/mp4" ></video>';
		video.open(param);
		media=document.getElementById("sec7-video3");
		/*media.play();*/
	});
});
//实力页面弹出层
(function($){$.fn.extend({"dialog":function(options){
	var opt = $.extend({
		id:"open-dialog",
		width:800,
		height:600,
		btn:false,
	},options);
	var $win = $(window);
	var $dom,$shadow;
	var dialog={
		initDialog:function(){
			$dom = $("#"+opt.id);
			if(!$dom.get(0)){
				$dom = $('<div id="'+opt.id+'" class="dialog-box"><a href="javascript:void(0);" id="prev-btn"></a><a href="javascript:void(0);" id="next-btn"></a><div class="dialog-body"></div><a href="javascript:void(0);" class="dialog-close"></a></div>');
				$("body").append($dom);
			}
			if(!opt.btn){
				$("#prev-btn,#next-btn").hide();
			}
			$dom.css({'width':opt.width+'px', 'height':opt.height+'px'});
			$dom.find(".dialog-body").css({'width':opt.width+'px', 'height':opt.height+'px'});
		},
		showShadow:function(){
			$shadow = $('.dialog-shadow');
			if(!$shadow.get(0)){
				$shadow = $("<div class='dialog-shadow'></div>");
				$("body").append($shadow);
			}
			dialog.resize();
		},
		resize:function(){
			$dom.css("top", ($win.height()-$dom.height())/2+"px");
			$dom.css("left", ($win.width()-$dom.width())/2+"px");
			var h = Math.max($win.innerHeight(),$("body").innerHeight());
            var w = Math.max($win.innerWidth(),$("body").innerWidth());
            $shadow.css({height:h,width:w});
		},
		show:function(){
			$dom.show();
			$shadow.show();
		},
		close:function(){
			if($dom){
				$dom.hide();
				$dom.find(".dialog-body").html('');
			}
			if($shadow)
				$shadow.hide();
		},
		init:function(){
			dialog.initDialog();
			dialog.showShadow();
			$win.bind("resize",function(){
				dialog.resize();
			});
			var $close = $dom.find(".dialog-close");
			$close.bind("click",function(){
				dialog.close();
			});
		}
	};
	var handle = {
		open:function(param){
			dialog.init();
			if(param){
				$dom.find(".dialog-body").html(param);	
			}
			dialog.show();
		},
		nextBtn:function(){
			var silding = $dom.find(".dialog-body figure");
			$("#next-btn").bind("click",function(){
				var first = silding.find("img:first");
				silding.append(first);
			});
		},
		prevBtn:function(){
			var silding = $dom.find(".dialog-body figure");
			$("#prev-btn").bind("click",function(){
				var last = silding.find("img:last");
				silding.prepend(last);
			});
		},
	};
	return handle;
}})})(jQuery);