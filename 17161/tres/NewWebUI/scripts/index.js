$(function() {
	function ThisIsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone",
					"SymbianOS", "Windows Phone",
					"iPad", "iPod"];
		var flag = true;
		for (var v = 0; v < Agents.length; v++) {
			if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				break;
			}
		}
		return flag;
	}
	;(function(){
		function lengthCile(obj,num){
			obj.each(function(i,e){
				$(e).css({height:'auto'});
				if($(e).text().length > num){
					$(e).text($(e).text().slice(0,num)+'...');
				}
			})
		}
		lengthCile($('.hotActivityBottom .hotP'),140);
		lengthCile($('.tendencyText .hotP'),140);
		lengthCile($('.tendencyOut .hotP'),140);
		lengthCile($('.bestContentP'),65);
	})()
	var src = "tres/NewWebUI/images/index/";
    //行业实践下面icon切换动画效果
    $(".chooseItem").on({
    	mouseenter:function(){
//  		var arr = $(this).find(".tableIcon").attr("src").split("_");
    		if(isPc()){
    			var num=$(this).attr("num");
	    		$(this).find(".tableIcon").attr("src",src+"industry_small_"+num+"_2.png");
	    		$(this).find(".tableChooseP").css("color","#e60012");
    		}
    	},
    	mouseleave:function(){
    		if(isPc()){
	    		var num=$(this).attr("num");
	    		$(this).find(".tableIcon").attr("src",src+"industry_small_"+num+"_1.png");
	    		$(this).find(".tableChooseP").css("color","#666");	
    		}
    		
    	}
    });
     //行业实践数字效果开始
    var _num='';
    var numnub=0;
    var setNum;
    function addnum(overnum){
    	$(".hangPc").find(".addHover").eq(0).find('.num').html('30');
    	$(".hangPc").find(".addHover").eq(1).find('.num').html('70');
    	$(".hangPc").find(".addHover").eq(2).find('.num').html('10');
    	numnub++;
    	if(numnub>overnum){
    		clearTimeout(setNum);
    		return false;
    	}
    	if(_num.attr('num')==3){
    		_num.find('.num').html(numnub);
	    	setNum=setTimeout(function(){
	    		addnum(overnum)
	    	},5)	
    	}else if(_num.attr('num')==4){
    		_num.find('.num').html(numnub);
	    	setNum=setTimeout(function(){
	    		addnum(overnum)
	    	},50)	
    	}else{
    		_num.find('.num').html(numnub);
	    	setNum=setTimeout(function(){
	    		addnum(overnum)
	    	},10)
    	}
    	
    }
    //行业实践数字效果结束
    //行业实践主体切换动画效果
    $(".hangPc").find(".addHover").on({
    	mouseenter:function(){
    		var num=$(this).attr("num");
    		$(this).css("background-color","#f9f9f9");
    		$(this).find(".bestContentTitle").css("color","#e60012");
    		$(this).find(".bestTitle").css("color","#e60012");
    		$(this).find(".peopleIcon").attr("src",src+"industry_big_"+num+"_2.png");
    		_num=$(this);
    		$(this).find('.num').html('0');
    		numnub=0;
    		if(num==1){
    			addnum(30);
    		}else if(num==3){
    			addnum(70);
    		}else if(num==4){
    			addnum(10);
    		}

    	},
    	mouseleave:function(){
    		var num=$(this).attr("num");
    		$(this).css("background-color","#fff");
    		$(this).find(".bestContentTitle").css("color","#333");
    		$(this).find(".bestTitle").css("color","#333");
    		$(this).find(".peopleIcon").attr("src",src+"industry_big_"+num+"_1.png");
    		clearTimeout(setNum);
    		numnub=0;
    		if(num==1){
    			$(this).find('.num').html('30');
    		}else if(num==3){
    			$(this).find('.num').html('70');
    		}else if(num==4){
    			$(this).find('.num').html('10');
    		}
    	}
    })
    
    //趋势洞察里面的查看效果
    $(".lookAllAddHover").on({
    	mouseenter:function(){
    		$(this).css("color","#e60012");
    		$(this).find(".lookIcon").attr("src",src+"hot_img_arrow_hover.png");
    	},
    	mouseleave:function(){
    		$(this).css("color","#333");
    		$(this).find(".lookIcon").attr("src",src+"hot_img_arrow.png");
    	}
    })
    //
    $(".hotActivitySwiper").on({
    	mouseenter:function(){
    		$(this).find(".hotA").css("color","#e60012");
    		$(this).find(".hotImgArrow").attr("src",src+"hot_img_arrow_hover.png");
    	},
    	mouseleave:function(){
    		$(this).find(".hotA").css("color","#333");
    		$(this).find(".hotImgArrow").attr("src",src+"hot_img_arrow.png");
    	}
    });
    var maxWidth=$(".containerInnerBox").width()-32;
    var baseWidth=($(".containerInnerBox").width()-32)/4;
    
    if(isIE()){
    	$(".containerH3").addClass("containerH3isIE");
	}
    $(window).resize(function(){
    	maxWidth=$(".containerInnerBox").width()-32;
    	baseWidth=($(".containerInnerBox").width()-32)/4;
	    $(".jiePc").find(".resolve").width(baseWidth);
	    $(".jiePc").find(".resolveInnerBox").width(baseWidth);
	    $(".resolveMakeBox").width(maxWidth);
	    var maxW = $(".device").width();
		$(".animateInner").width((maxW-40)/3);
		$(".animateBox").height($(".hotActivityInner").height()+4);
		changeBanner();
		var width;
		if($('body').hasClass('ie8')){
			width = $(".animateInner").width()+22;
		}else {
			width = $(".animateInner").width()+20;
		}
		$(".beAnimate").css({'left':-width*hotNum});
    })
    $(".resolveMakeBox").width(maxWidth);
    $(".jiePc").find(".resolve").width(baseWidth);
    $(".jiePc").find(".resolveInnerBox").width(baseWidth);
	//解决方案划过效果
	$(".jiePc").find(".resolve").on("mouseenter",function(){
		var num=$(this).attr("num");
		var that=$(this);
		$(".jiePc").find(".resolve").addClass("resolveDelay");
		$(".resolveMakeBox").removeClass("resolveDelay");
		setTimeout(function(){
			that.siblings().width(baseWidth);
			that.width(baseWidth+140);
			$(".resolveMakeBox").width((Number(maxWidth)+140)+"px");
			if(num==4){
				$(".resolveMakeBox").css("transform","translateX(-70px)");
			}else{
				$(".resolveMakeBox").css("transform","translateX(0px)");
			}
			that.siblings().find(".maskBoxAdd").fadeIn();
			that.find(".maskBoxAdd").fadeOut();
		})
		
	});
	$(".searchIconBox").on("click",function(){
		
	})
	$(".resolveMakeBox").on("mouseleave",function(){
		$(".jiePc").find(".resolve").removeClass("resolveDelay");
		$(".resolveMakeBox").addClass("resolveDelay");
		setTimeout(function(){
			$(".resolveMakeBox").width(maxWidth);
			$(".jiePc").find(".resolve").width(baseWidth);
			$(".resolveMakeBox").css("transform","translateX(0px)");
		})
	});
	
	if(!$("body").hasClass("ie8")){
		var mySwiperHangMbl = new Swiper('.swiper-hotMbl',{
		    grabCursor: true,
		    paginationClickable: true,
		   	pagination: '.pagination',
   	 		paginationClickable: true,
   	 		observer: true, 
            observeParents: true 
		})
		var mySwiperHangMbl = new Swiper('.swiper-hangMbl',{
		    grabCursor: true,
		    paginationClickable: true,
		   	pagination: '.paginationA',
   	 		paginationClickable: true,
   	 		observer: true, 
            observeParents: true 
		})
	}
	//热点活动点击序列号记录变量
	var hotNum = 0;
	$('.lookArrowLeft').on('click', function(e){
	    e.preventDefault();
	    if(hotNum>0){
	    	hotNum--;
	    	if($('body').hasClass('ie8')){
	    		var width = $(".animateInner").width()+22;
	    	}else {
				var width = $(".animateInner").width()+20;
	    	}
			$(".beAnimate").animate({"left":"-"+width*hotNum})
	    }
	})
	$('.lookArrowRight').on('click', function(e){
	    e.preventDefault();
	    var len = $(".animateInner").length;
	    if((len-3)>hotNum){
	    	hotNum++;
	    	if($('body').hasClass('ie8')){
				var width = $(".animateInner").width()+22;
	    	}else{
	    		var width = $(".animateInner").width()+20;
	    	}
			
			$(".beAnimate").animate({"left":"-"+width*hotNum})
	    }
	})
	$('.lookArrowLeft').on({
		mouseenter:function(){
			if(hotNum>0){
				$(this).addClass("lookArrowLeftHover");
			}
    	},
    	mouseleave:function(){
    		$(this).removeClass("lookArrowLeftHover");
    	}
	});
	$('.lookArrowRight').on({
		mouseenter:function(){
			 var len = $(".animateInner").length;
			if((len-3)>hotNum){
		    	$(this).addClass("lookArrowRightHover");
		   	}
    	},
    	mouseleave:function(){
    		$(this).removeClass("lookArrowRightHover");
    	}
	});
	$(".for_text").on("click", function() {
		$(this).hide()
	})
	changeBanner()
	function changeBanner(){
		if(isPc()){
			$('.halfChangeAllAdd .tendencyBox').eq(0).find('img').attr('src',src+'tendencyImg_2.jpg');
			$('.halfChangeAllAdd .tendencyBox').eq(1).find('img').attr('src',src+'tendencyImg_3.jpg');
			// 修改底部图片
			$('.xiaPc.containerAddBg .lastContainer_3').eq(0).find('.resolveInner img').attr('src',src+'lastFooterImg_1.jpg');
			$('.xiaPc.containerAddBg .lastContainer_3').eq(1).find('.resolveInner img').attr('src',src+'lastFooterImg_2.jpg');
			$('.xiaPc.containerAddBg .lastContainer_3').eq(2).find('.resolveInner img').attr('src',src+'lastFooterImg_3.jpg');
			$(".bannerImg").attr("src",src+"banner_1.jpg")
		}else{
			$('.halfChangeAllAdd .tendencyBox').eq(0).find('img').attr('src',src+'tendencyImgMBL_2.jpg');
			$('.halfChangeAllAdd .tendencyBox').eq(1).find('img').attr('src',src+'tendencyImgMBL_3.jpg');
			// 修改底部图片
			$('.xiaPc.containerAddBg .lastContainer_3').eq(0).find('.resolveInner img').attr('src',src+'lastFooterImgMBL_1.jpg');
			$('.xiaPc.containerAddBg .lastContainer_3').eq(1).find('.resolveInner img').attr('src',src+'lastFooterImgMBL_2.jpg');
			$('.xiaPc.containerAddBg .lastContainer_3').eq(2).find('.resolveInner img').attr('src',src+'lastFooterImgMBL_3.jpg');
			$(".bannerImg").attr("src",src+"indexBannerMbl.jpg")
		}
	}
	
	function isIE() { //ie?
	 if (!!window.ActiveXObject || "ActiveXObject" in window)
	  return true;
	  else
	  return false;
	}
	function isPc(){
		var winWidth="";
		if (window.innerWidth){
			winWidth = window.innerWidth;
		}else if ((document.body) && (document.body.clientWidth)){
			winWidth = document.body.clientWidth;
		}
		if(winWidth>768){
			return true;
		}
		return false;
	}
	var maxW = $(".device").width();
	setTimeout(function(){
		$(".animateInner").width((maxW-40)/3);
		$(".animateBox").height($(".hotActivityInner").height()+4);
		$('.footerInnerRight').html('版权所有 2003-'+ (new Date().getFullYear()) +' XXX.保留一切权利.XXX<img src="tres/NewWebUI/images/index/fileIcon.png" class="fileIcon" /><a href="javascript:void(0)" class="footRightA" >浙公网安备 33010802004416号</a>')
	},100)

	;(function(){
		//视频调整
		if($('.bannerPc #videoallIndex').length > 0 && !$('body').hasClass('ie8') && !$('body').hasClass('ie7')){
			var videoIndex = document.getElementById('videoallIndex');
			if (ThisIsPC()) {
				videoIndex.play()
			}
		}
	})()
})