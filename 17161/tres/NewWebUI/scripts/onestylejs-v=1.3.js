;(function(){
	// 限制字数
	function lengthCile(obj,num){
		obj.each(function(i,e){
			$(e).css({height:'auto','max-height':'none'});
			if($(e).text().length > num){
				$(e).text($(e).text().slice(0,num)+'...');
			}
		})
	}
	lengthCile($('#newsWrap .proJouConListTextp'),60);//新闻资讯
	lengthCile($('#technicalWrap .proSolveConListText p'),100);//产品技术PC端
	lengthCile($('#technicalWrap .proEntListtext'),60);//产品技术PC端
	lengthCile($('#technicalWrap .protechH5SuccText p'),68);//产品技术移动端
	lengthCile($('#solution .SMBMbl .SMBContent p'),80);//12.23 19:28添加字数限制
	lengthCile($('#solution .hotP'),60);//一级页面SMB解决方案PC端
	lengthCile($('#solution .SMBMbl .containerInnerBox .SMBContent p'),100);//一级页面SMB解决方案移动端
	lengthCile($('#succWrapPC .techSolveConListText p'),100);//一级页面成功案例PC端
	lengthCile($('#succWrapH5 .techH5SuccText p'),68);//一级页面成功案例移动端
	lengthCile($('#consultationWrap .techapplicConText .techappliTextp'),140);//技术咨询与服务PC端新IT
	lengthCile($('#consultationWrap .techH5AppText p'),68);//技术咨询与服务PC端新IT
	lengthCile($('#support .proSolveConListText p'),100);//产品支持与服务PC端
	lengthCile($('#support .protechSolveMbl .containerInnerBox .SMBContent p'),68);//产品支持与服务端
	lengthCile($('#solution .industry .industryText'),40);//产品支持与服务端
	lengthCile($('#consultationWrap .techLevelConImgp'),38);//产品支持与服务端
})()
//;(function(){
//	// 选择当前选中页面
//	var oneTitArr = ['Products__Technology','Solution','technology-service-consulting','product-service-supporting','Training','Partner','About_H3C'];
//	var text_url = window.location.href;
//	for(var i in oneTitArr){
//		if(text_url.indexOf(oneTitArr[i]) !== -1){
//			$('.headPc .navBox .nav').eq(i).find('a').addClass('acthover');
//		}
//	}
//})()
// 一级页面整体js包围函数
var onscriptsJS = function(){
$('#partner .codeClickBoxTxt').click(function(e){
	e.stopPropagation();
	$('#partner .codeImgBg').show();
})
$(document).click(function(){
	$('#partner .codeImgBg').hide();
})
$('.protechSolveGoMore.gotoFontred,.columGoMore.gotoFontred').each(function(i,e){
	$(e).on({
		mouseenter:function(){
    		$(e).addClass('fontRed');
    		$(e).find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGoHover.png");
    	},
    	mouseleave:function(){
    		$(e).removeClass('fontRed');
    		$(e).find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGo.png");
    	}
	})
})
$('#newsWrap li,.techapplicConList li').on({
		mouseenter:function(){
    		$(this).find('.gotoFontred').addClass('fontRed');
    		$(this).find('.gotoFontred').find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGoHover.png");
    	},
    	mouseleave:function(){
    		$(this).find('.gotoFontred').removeClass('fontRed');
    		$(this).find('.gotoFontred').find("img").attr("src","/cn/tres/NewWebUI/images/solution/proJouConListTextGo.png");
    	}
	})
$('#crumbs .columWrapBox a').on({
		mouseenter:function(){
    		$(this).css("color","#e60012");
    		},
    	mouseleave:function(){
    		$(this).css("color","#333");
    		}
	})
	
	if($('body').hasClass('ie8')){
		$('.ie8 #VideoPlay').prepend('<div class="ie8box"></div>');
	}
 var thePlayer; 
$('.proVidConList li').click(function(){
	var videourl=$(this).find('a').attr('data-url');
	var videoimgurl=$(this).find('.imgurl').attr('src');
	$('#VideoPlay').show();
	$('.posterimg').show();
	//$('#VideoPlay .videoBox video').attr('src',videourl);
	$('#VideoPlay .videoBox .posterimg').attr('src',videoimgurl);
    thePlayer = jwplayer('videoall').setup({  
        flashplayer: '/cn/tres/NewWebUI/scripts/vender/player.swf',  
        file: videourl, 
        image: videoimgurl, 
        width: 770,  
        height: 464,  
        dock: false  
    });  
})
$('.protechH5VideoslBox').click(function(){
	var videourl=$(this).find('a').attr('data-url');
	var videoimgurl=$(this).find('.imgurl').attr('src');
	$('#VideoPlay').show();
	$('.posterimg').show();
	var _width=$('.videoBox').width();
	var _height=_width*0.6;
	//$('#VideoPlay .videoBox video').attr('src',videourl);
	$('#VideoPlay .videoBox .posterimg').attr('src',videoimgurl);
    thePlayer = jwplayer('videoall').setup({  
        flashplayer: '/cn/tres/NewWebUI/scripts/vender/player.swf',  
        file: videourl, 
        image: videoimgurl, 
        width: _width,  
        height: _height,  
        control: false,
        controlbar: 'bottom', 
        dock: false  
    });  
    $('#videoall').css('background-color','none')
	
	//var allvideo = $('#VideoPlay .videoBox video');
	//allvideo.controls=true;
	$('.posterimg').hide();
})
$('#VideoPlay .closevideo').click(function(){
	$('#VideoPlay').hide();
	$('#VideoPlay .videoBox video').attr('src','');
	$('#VideoPlay .videoBox .posterimg').attr('src','');
})
function support(){
	$(function() {
	if($('body').hasClass('ie8')){
		var industryWidth=$('.industry .swiper-hotPc').width();
		var industryNum=$('.industry .swiper-slide').length;
		$('.industry .swiper-hotPc .swiper-wrapper').css('width',(industryNum*100)+'%');
		$('.industry .swiper-slide').css('float','left');
		$('.industry .swiper-slide').css('width',industryWidth+'px');
		var hotPcWidth=$('.hotPc .swiper-hotPc').width();
		var hotPcNum=$('.hotPc .swiper-slide').length;
		$('.hotPc .swiper-hotPc .swiper-wrapper').css('width',(hotPcNum*100)+'%');
		$('.hotPc .swiper-slide').css('float','left');
		$('.hotPc .swiper-slide').css('width',hotPcWidth+'px');
		$('.hotPc .lookArrowRight').click(function(){
			$('.hotPc .swiper-hotPc .swiper-wrapper').animate({left:'-'+hotPcWidth+'px'});
		})
		$('.hotPc .lookArrowLeft').click(function(){
			$('.hotPc .swiper-hotPc .swiper-wrapper').animate({left:'-'+0+'px'});
		})
		for(var i=0;i<$('.hotPc .swiper-slide').length;i++){
			$('.hotPc .swiper-slide').eq(i).find('.hotActivitySwiper:last').css('margin-right','0');
		}

	}
	var timer;
	function isliHight(father, boy){
		$(father).find(boy).css({height: 'auto'});
		var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
		$(father).find(boy).each(function(i,e){
			var _height = $(e).height();
			heightarr.push(_height);
		})
		for(var i = 1; i < heightarr.length; i ++){
			if(heightarr[i] > lastHeight){
				lastHeight = heightarr[i];
			}
		}
		$(father).find(boy).css({height:lastHeight + 4 + 'px'});
	}
	function setFontSize(){
		// var _width = window.innerWidth,
			// _html = document.getElementsByClassName('Mbl');
			// for(var i=0;i<_html.length;i++){
				//_html[i].style.width = _width + 'px';
				//_html[i].style.fontSize = _width/2*.2 + 'px';
			// }
		//_html.style.width = _width + 'px';
		// if(_width > 540){
		// 	_html.style.fontSize = '75px';
		// } else {
			
		// }
	
		$('.technologyMbl .technologyList').css('height','auto');
		isliHight('.techSolveConList','li');
		isliHight('.proSolveConList','li');
		isliHight('.techH5SuccCon','.swiper-slide');
		industryListchange();
		h1();h2();h3();
	}
	// isliHight('.techSolveConList','li');
	// isliHight('.proSolveConList','li');
	// 调整窗口时重置
	if($('body').hasClass('ie8')){
		window.onresize=function(){
			clearTimeout(timer);
			timer = setTimeout(setFontSize, 300);
		}
	}else{
		window.addEventListener("resize", function() {
		    clearTimeout(timer);
		    timer = setTimeout(setFontSize, 300);
		}, false);
		// orientationchange 时也需要重算
		window.addEventListener("orientationchange", function() {
		    clearTimeout(timer);
		    timer = setTimeout(setFontSize, 300);
		}, false);
	}
	$('.proJouConList li').each(function(i,e){
		
		if((i+1)%2 !== 0){
			$(e).css({'margin-right':'5%'})
		}
		var isimg = $(e).find('.proJouConListImg img').length;
		
	})
	function h1(){
		var overheight1=0;	
		// $('.products .proSolveConList li').css('height','auto');
		// setTimeout(function(){
		// 	$('.products .proSolveConList li').each(function(i){
		// 		if($('.products .proSolveConList li').eq(i).height()>overheight1){
		// 			overheight1=$('.products .proSolveConList li').eq(i).height();
		// 		}
		// 	})
		// 	$('.products .proSolveConList li').css('height',overheight1+'px');
		// },100)
	}
	function h2(){
		var overheight=0;	
		// setTimeout(function(){
		// 	$('.Success .proSolveConList li').each(function(i){
		// 		if($('.Success .proSolveConList li').eq(i).height()>overheight){
		// 			overheight=$('.Success .proSolveConList li').eq(i).height();
		// 		}
		// 	})
		// 	$('.Success .proSolveConList li').css('height',overheight+'px');
		// },100)
	}
	function h3(){
		var overheight2=0;	
		// $('.Success .proSolveConList li').css('height','auto');
		// setTimeout(function(){
		// 	$('.Success .proSolveConList li').each(function(i){
		// 		if($('.Success .proSolveConList li').eq(i).height()>overheight2){
		// 			overheight2=$('.Success .proSolveConList li').eq(i).height();
		// 		}
		// 	})
		// 	$('.Success .proSolveConList li').css('height',overheight2+'px');
		// },100)
	}
	h1();h2();h3();
	
	

	function industryListchange(){
		var industryListheight=1;
		$('.technologyMbl .technologyList').each(function(i){
			$('.technologyMbl .technologyList').eq(i).css('height','auto');
			if($('.technologyMbl .technologyList').eq(i).height()>industryListheight){
				industryListheight=$('.technologyMbl .technologyList').eq(i).height();
			}
		})
		$('.technologyMbl .technologyList').css('height',industryListheight+20+'px');	
	}
	industryListchange();

    $(".proSolveConList li").on({
    	mouseenter:function(){
    		$(this).find('.more').css("color","#e60012");
    		$(this).find('.more').find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGoHover.png");
    	},
    	mouseleave:function(){
    		$(this).find('.more').css("color","#333");
    		$(this).find('.more').find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGo.png");
    	}
    })
    
    $(".trends .trendsContent .trendsList li").on({
    	mouseenter:function(){
    		$(this).css("color","#e60012");
    		$(this).find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGoHover.png");
    	},
    	mouseleave:function(){
    		$(this).css("color","#333");
    		$(this).find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGo.png");
    	}
    })
    $(".Help .trendsContent .trendsList li").on({
    	mouseenter:function(){
    		$(this).css("color","#e60012");
    		$(this).find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"mbl_more.png");
    	},
    	mouseleave:function(){
    		$(this).css("color","#333");
    		$(this).find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGo.png");
    	}
    })

	//$('.industryMbl .swiper-hotPc').css('height',industryListheight+85+'px');
	var src = "/cn/tres/NewWebUI/images/index/";
	//趋势洞察下面开始部分划过切换效果
//  $(".lastContainer_3").on({
//  	mouseenter:function(){
//  		$(this).find(".moreIcon").attr("src",src+"moreIconHover.png");
//  	},
//  	mouseleave:function(){
//  		$(this).find(".moreIcon").attr("src",src+"moreIcon.png");
//  	}
//  })
    //行业实践下面icon切换动画效果
    $(".chooseItem").on({
    	mouseenter:function(){
    		var num=$(this).attr("num");
    		$(this).find(".tableIcon").attr("src",src+"tableIconHover_"+num+".png");
    		$(this).find(".tableChooseP").css("color","#e60012");
    	},
    	mouseleave:function(){
    		var num=$(this).attr("num");
    		$(this).find(".tableIcon").attr("src",src+"tableIcon_"+num+".png");
    		$(this).find(".tableChooseP").css("color","#666");
    	}
    });
     //行业实践主体切换动画效果
    $(".hangPc").find(".addHover").on({
    	mouseenter:function(){
    		var num=$(this).attr("num");
    		$(this).css("background-color","#f9f9f9");
    		$(this).find(".bestContentTitle").css("color","#e60012");
    		$(this).find(".bestTitle").css("color","#e60012");
    		$(this).find(".peopleIcon").attr("src",src+"peopleIconHover_"+num+".png");
    	},
    	mouseleave:function(){
    		var num=$(this).attr("num");
    		$(this).css("background-color","#fff");
    		$(this).find(".bestContentTitle").css("color","#333");
    		$(this).find(".bestTitle").css("color","#333");
    		$(this).find(".peopleIcon").attr("src",src+"peopleIcon_"+num+".png");
    	}
    })
    //趋势洞察里面的查看效果
    $(".lookAllAddHover").on({
    	mouseenter:function(){
    		$(this).css("color","#e60012");
    		$(this).find(".lookIcon").attr("src",src+"hot_img_arrow_hover.png");
    	},
    	mouseleave:function(){
    		$(this).css("color","#747272");
    		$(this).find(".lookIcon").attr("src",src+"hot_img_arrow.png");
    	}
    })
    //
    $(".hotA").on({
    	mouseenter:function(){
    		$(this).css("color","#e60012");
    		$(this).find(".hotImgArrow").attr("src",src+"hot_img_arrow_hover.png");
    	},
    	mouseleave:function(){
    		$(this).css("color","#333");
    		$(this).find(".hotImgArrow").attr("src",src+"hot_img_arrow.png");
    	}
    })
	//解决方案划过效果
	$(".jiePc").find(".resolve").on("mouseenter",function(){
		$(".needPadding").addClass("padding0");
		$(".resolve").addClass("resolveAdd");
		$(".maskBox").removeClass("maskBoxAct");
		$(".resolve").removeClass("resolveAct");
		$(this).find(".resolveAlertBox").animate({"opacity":"1"})
		$(this).find(".maskBoxAdd").fadeOut();
//		$(this).find(".moreIcon").attr("src",src+"moreIconHover.png");
		$(this).addClass("resolveAct");
		$(this).find(".maskBox").addClass("maskBoxAct")
	})
	$(".jiePc").find(".resolve").on("mouseleave",function(){
		$(".needPadding").removeClass("padding0");
		$(".resolve").removeClass("resolveAdd");
		$(".maskBox").removeClass("maskBoxAct");
		$(this).find(".maskBoxAdd").fadeIn();
		$(this).find(".resolveAlertBox").animate({"opacity":"0"})
//		$(this).find(".moreIcon").attr("src",src+"moreIcon.png");
		$(this).removeClass("resolveAct")
	})
	if(!$('body').hasClass('ie8')){
	var myindustryMbl = new Swiper('.industryMbl .swiper-hotPc',{
		    grabCursor: true,
		    slidesPerView: 1,
		    pagination: '.industryMblBanner',
   	 		paginationClickable: true,
   	 		calculateHeight: true
	});

	var SMBSW = new Swiper('.SMBMbl .swiper-SMBSW',{
		    grabCursor: true,
		    slidesPerView: 1,
		    pagination: '.SMBMblBanner',
   	 		paginationClickable: true,
   	 		calculateHeight: true
		});

	var protechSolveMbl = new Swiper('.protechSolveMbl .swiper-SMBSW',{
		    grabCursor: true,
		    slidesPerView: 1,
		    pagination: '.protechSolveMblBanner',
   	 		paginationClickable: true,
   	 		calculateHeight: true
	});
	
	var protechVideoMbl = new Swiper('.protechVideoMbl .swiper-SMBSW',{
		    grabCursor: true,
		    slidesPerView: 1,
		    pagination: '.protechVideoMblBanner',
   	 		paginationClickable: true,
   	 		calculateHeight: true
	});
	
	var mySwiperHotPc = new Swiper('.industry .swiper-hotPc',{
		    grabCursor: true,
		    paginationClickable: true,
		    slidesPerView: 1
	});


	   
	 var mySwiperH5Vid = new Swiper('.swiper-containerVidH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '.protechH5VidBtnBox'
			})
	    // 成功案例
	    var mySwiperH5Succ = new Swiper('.swiper-containerSuccH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '.techH5SuccBtnbox'
			})


}
	var mySwiperHotPcNum=0;
	var allmySwiperHotPcNum=$('.industry .hotActivityInner').length-3;
	
	$('.industry .lookArrowLeft').on('click', function(e){
	    e.preventDefault();
	    mySwiperHotPc.slidePrev();
	    mySwiperHotPcNum--;
	    if(mySwiperHotPcNum<=0){
	    	$('.industry .lookArrowLeft').removeClass('hover');
	    	mySwiperHotPcNum=0;
	    }
	})
	$('.industry .lookArrowLeft').mouseover(function(){
	    if(mySwiperHotPcNum!=0){
			$('.industry .lookArrowLeft').addClass('hover');
		}
	}).mouseleave(function(){
	  $('.industry .lookArrowLeft').removeClass('hover');
	});
	$('.industry .lookArrowRight').mouseover(function(){
		if(mySwiperHotPcNum!=allmySwiperHotPcNum){
			$('.industry .lookArrowRight').addClass('hover');
		}
	}).mouseleave(function(){
		$('.industry .lookArrowRight').removeClass('hover');
	});
	$('.industry .lookArrowRight').on('click', function(e){
	    e.preventDefault();
	    mySwiperHotPc.slideNext();
	    mySwiperHotPcNum++;
	    if(mySwiperHotPcNum>=allmySwiperHotPcNum){
	    	mySwiperHotPcNum=allmySwiperHotPcNum;
	    	$('.industry .lookArrowRight').removeClass('hover');
	    }
	})
	var mySwiperHotPcNumnew=0;
	var allmySwiperHotPcNumnew=$('.hotPc .hotActivityInner').length-3;
	if(!$('body').hasClass('ie8')){
		var mySwiperHotPc1 = new Swiper('.hotPc .swiper-hotPc',{
			    grabCursor: true,
			    paginationClickable: true,
			    slidesPerView: 1
		});
	}
	$('.hotPc .lookArrowLeft').on('click', function(e){
	    e.preventDefault()
	    mySwiperHotPc1.slidePrev();
	    mySwiperHotPcNumnew--;
	    if(mySwiperHotPcNumnew<=0){
	    	$('.hotPc .lookArrowLeft').removeClass('hover');
	    	mySwiperHotPcNumnew=0;
	    }
	})

	if(!$('body').hasClass('ie8')){

		setTimeout(function(){
			setFontSize();

		},300)
	}
	$('.hotPc .lookArrowLeft').mouseover(function(){
	    if(mySwiperHotPcNumnew!=0){
			$('.hotPc .lookArrowLeft').addClass('hover');
		}
	}).mouseleave(function(){
	  $('.hotPc .lookArrowLeft').removeClass('hover');
	});

	$('.hotPc .lookArrowRight').on('click', function(e){
	    e.preventDefault()
	    mySwiperHotPc1.slideNext()
	    mySwiperHotPcNumnew++;
	    if(mySwiperHotPcNumnew>=allmySwiperHotPcNumnew){
	    	mySwiperHotPcNum=allmySwiperHotPcNum;
	    	$('.hotPc .lookArrowRight').removeClass('hover');
	    }
	})

	$('.hotPc .lookArrowRight').mouseover(function(){
		if(mySwiperHotPcNumnew!=allmySwiperHotPcNumnew){
			$('.hotPc .lookArrowRight').addClass('hover');
		}
	}).mouseleave(function(){
	   $('.hotPc .lookArrowRight').removeClass('hover');
	});
	$('.industryList').mouseover(function(){
		var num=$(this).attr('data-num');
		$(this).addClass('hover');
	    $(this).find('.industryImg').find('img').attr('src','/cn/tres/NewWebUI/images/solution/industryList_'+num+'_2.png');
	}).mouseleave(function(){
		var num=$(this).attr('data-num');
		$(this).removeClass('hover');
	    $(this).find('.industryImg').find('img').attr('src','/cn/tres/NewWebUI/images/solution/industryList_'+num+'.png');
	});
	$(".for_text").on("click", function() {
		$(this).hide()
	})
})
}
function solution(){	
$(function() {

	if($('body').hasClass('ie8')){
		var industryWidth=$('.industry .swiper-hotPc').width();
		var industryNum=$('.industry .swiper-slide').length;
		$('.industry .swiper-hotPc .swiper-wrapper').css('width',(industryNum*100)+'%');
		$('.industry .swiper-hotPc .swiper-slide').css('width','50%');
		$('.industry .swiper-slide').css('float','left');
		$('.industry .swiper-slide').css('width',industryWidth+'px');
		

		var hotPcWidth=$('.hotPc .swiper-hotPc').width();
		var hotPcNum=$('.hotPc .swiper-slide').length;
		$('.hotPc .swiper-hotPc .swiper-wrapper').css('width',(hotPcNum*100)+'%');
		$('.hotPc .swiper-slide').css('float','left');
		$('.hotPc .swiper-slide').css('width',hotPcWidth+'px');
		
		for(var i=0;i<$('.hotPc .swiper-slide').length;i++){
			$('.hotPc .swiper-slide').eq(i).find('.hotActivitySwiper:last').css('margin-right','0');
		}

		var ie8industryMbl=0;	
		setTimeout(function(){
			$('.ie8 .industryMbl .industryList').each(function(i){
				if($('.ie8 .industryMbl .industryList').eq(i).height()>ie8industryMbl){
					ie8industryMbl=$('.ie8 .industryMbl .industryList').eq(i).height();
				}
			})
			$('.ie8 .industryMbl .industryList').css('height',ie8industryMbl+'px');
			$('.ie8 .industryMbl .industryList').css('margin-bottom','30px');
		},100)
		

	}
	var timer;
	function isliHight(father, boy){
		$(father).find(boy).css({height: 'auto'});
		var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
		$(father).find(boy).each(function(i,e){
			var _height = $(e).height();
			heightarr.push(_height);
		})
		for(var i = 1; i < heightarr.length; i ++){
			if(heightarr[i] > lastHeight){
				lastHeight = heightarr[i];
			}
		}
		$(father).find(boy).css({height:lastHeight + 4 + 'px'});
	}

	function setFontSize(){
		var _width = window.innerWidth;
			_html=$('Mbl');
			for(var i=0;i<_html.length;i++){
				//_html[i].style.width = _width + 'px';
				_html[i].style.fontSize = _width/2*.2 + 'px';
			}
		//_html.style.width = _width + 'px';
		// if(_width > 540){
		// 	_html.style.fontSize = '75px';
		// } else {
			
		// }
		if($(document).width() > 768){
			isliHight('.proJouConList','li:eq(0),li:eq(1)');//操作系统部分调节
			isliHight('.protechH5EnterList','li:eq(2),li:eq(3)');//操作系统部分调节
		} else {
			$('.proJouConList li').css({height: 'auto'});
		}
		if(!$('body').hasClass('ie8')){
			myindustryMbl.onResize();	
			SMBSW.onResize();	
		}else{
			$('#solution .industry .swiper-hotPc .swiper-slide').css('width','50%');
			var hotPCwidth=$('.hotPc .swiper-hotPc .swiper-wrapper').width();
				hotPCwidth=hotPCwidth/3;
			$('#solution .hotPc .swiper-hotPc .swiper-slide').css('width',hotPCwidth+'px');
		}
		$('.technologyMbl .technologyList').css('height','auto');
			if(!$('body').hasClass('ie8')){
		    mySwiperH5Vid.onResize();
			mySwiperH5Succ.onResize();
			}
		isliHight('.techSolveConList','li');
		isliHight('.techH5SuccCon','.swiper-slide');
		isliHight('.hotPc','.hotActivity');
		isliHight('.SMBMbl','.SMBContent p');
		isliHight('.industryMbl','.hotActivityInner .industryList .industryText');
		setTimeout(function(){
			industryListchange();
			h1();
			h2();
		},100)	
	}
	
	// 调整窗口时重置
	if($('body').hasClass('ie8')){
		window.onresize=function(){
			clearTimeout(timer);
			timer = setTimeout(setFontSize, 300);
		}
	}else{
		window.addEventListener("resize", function() {
		    clearTimeout(timer);
		    timer = setTimeout(setFontSize, 300);
		}, false);
			
		// orientationchange 时也需要重算
		window.addEventListener("orientationchange", function() {
		    clearTimeout(timer);
		    timer = setTimeout(setFontSize, 300);
		}, false);
	}
	$('.proJouConList li').each(function(i,e){
		
		if((i+1)%2 !== 0){
			$(e).css({'margin-right':'5%'})
		}
		var isimg = $(e).find('.proJouConListImg img').length;
		
	})
	function h1(){
		var overheight=0;	
		$('.proSolveConList li').css('height','auto');
		$('.proSolveConList li').each(function(i){
			if($('.proSolveConList li').eq(i).height()>overheight){
				overheight=$('.proSolveConList li').eq(i).height();
			}
		})
		$('.proSolveConList li').css('height',overheight+'px');
	}
	h1();
	
	function h2(){	
		var ie8industryMbl=0;
		$('.ie8 .industryMbl .industryList').css('height','auto');
		$('.ie8 .industryMbl .industryList').each(function(i){
			if($('.ie8 .industryMbl .industryList').eq(i).height()>ie8industryMbl){
				ie8industryMbl=$('.ie8 .industryMbl .industryList').eq(i).height();
			}
		})
		$('.ie8 .industryMbl .industryList').css('height',ie8industryMbl+'px');
		$('.ie8 .industryMbl .industryList').css('margin-bottom','30px');
	}	
		
	h2();

	function industryListchange(){
		var industryListheight=1;
		$('.technologyMbl .technologyList').each(function(i){
			$('.technologyMbl .technologyList').eq(i).css('height','auto');
			if($('.technologyMbl .technologyList').eq(i).height()>industryListheight){
				industryListheight=$('.technologyMbl .technologyList').eq(i).height();
			}
		})
		$('.technologyMbl .technologyList').css('height',industryListheight+20+'px');	
	}
	industryListchange();

    $(".technology .left").on({
    	mouseenter:function(){
    		$(this).find('.more').css("color","#e60012");
    		$(this).find('.more').find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGoHover.png");
    	},
    	mouseleave:function(){
    		$(this).find('.more').css("color","#333");
    		$(this).find('.more').find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGo.png");
    	}
    })
    $(".VCF .more").on({
    	mouseenter:function(){
    		$(this).css("color","#e60012");
    		$(this).find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"mbl_more.png");
    	},
    	mouseleave:function(){
    		$(this).css("color","#333");
    		$(this).find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"more.png");
    	}
    })

    $(".industry .industryList").on({
    	mouseenter:function(){
    		$(this).addClass("hover");
    	},
    	mouseleave:function(){
    		$(this).removeClass("hover");
    	}
    })

	//$('.industryMbl .swiper-hotPc').css('height',industryListheight+85+'px');
	var src = "/cn/tres/NewWebUI/images/solution/";
	//趋势洞察下面开始部分划过切换效果
//  $(".lastContainer_3").on({
//  	mouseenter:function(){
//  		$(this).find(".moreIcon").attr("src",src+"moreIconHover.png");
//  	},
//  	mouseleave:function(){
//  		$(this).find(".moreIcon").attr("src",src+"moreIcon.png");
//  	}
//  })
    //行业实践下面icon切换动画效果
    $(".chooseItem").on({
    	mouseenter:function(){
    		var num=$(this).attr("num");
    		$(this).find(".tableIcon").attr("src",src+"tableIconHover_"+num+".png");
    		$(this).find(".tableChooseP").css("color","#e60012");
    	},
    	mouseleave:function(){
    		var num=$(this).attr("num");
    		$(this).find(".tableIcon").attr("src",src+"tableIcon_"+num+".png");
    		$(this).find(".tableChooseP").css("color","#666");
    	}
    });
     //行业实践主体切换动画效果
    $(".hangPc").find(".addHover").on({
    	mouseenter:function(){
    		var num=$(this).attr("num");
    		$(this).css("background-color","#f9f9f9");
    		$(this).find(".bestContentTitle").css("color","#e60012");
    		$(this).find(".bestTitle").css("color","#e60012");
    		$(this).find(".peopleIcon").attr("src",src+"peopleIconHover_"+num+".png");
    	},
    	mouseleave:function(){
    		var num=$(this).attr("num");
    		$(this).css("background-color","#fff");
    		$(this).find(".bestContentTitle").css("color","#333");
    		$(this).find(".bestTitle").css("color","#333");
    		$(this).find(".peopleIcon").attr("src",src+"peopleIcon_"+num+".png");
    	}
    })
    //趋势洞察里面的查看效果
    $(".lookAllAddHover").on({
    	mouseenter:function(){
    		$(this).css("color","#e60012");
    		$(this).find(".lookIcon").attr("src",src+"hot_img_arrow_hover.png");
    	},
    	mouseleave:function(){
    		$(this).css("color","#747272");
    		$(this).find(".lookIcon").attr("src",src+"hot_img_arrow.png");
    	}
    })
    //
    $(".hotPc .hotActivity").on({
    	mouseenter:function(){
    		$(this).find('.hotA').css("color","#e60012");
    		$(this).find('.hotA').find(".hotImgArrow").attr("src",src+"proJouConListTextGoHover.png");
    	},
    	mouseleave:function(){
    		$(this).find('.hotA').css("color","#333");
    		$(this).find('.hotA').find(".hotImgArrow").attr("src",src+"proJouConListTextGo.png");
    	}
    })
	//解决方案划过效果
	$(".jiePc").find(".resolve").on("mouseenter",function(){
		$(".needPadding").addClass("padding0");
		$(".resolve").addClass("resolveAdd");
		$(".maskBox").removeClass("maskBoxAct");
		$(".resolve").removeClass("resolveAct");
		$(this).find(".resolveAlertBox").animate({"opacity":"1"})
		$(this).find(".maskBoxAdd").fadeOut();
//		$(this).find(".moreIcon").attr("src",src+"moreIconHover.png");
		$(this).addClass("resolveAct");
		$(this).find(".maskBox").addClass("maskBoxAct")
	})
	$(".jiePc").find(".resolve").on("mouseleave",function(){
		$(".needPadding").removeClass("padding0");
		$(".resolve").removeClass("resolveAdd");
		$(".maskBox").removeClass("maskBoxAct");
		$(this).find(".maskBoxAdd").fadeIn();
		$(this).find(".resolveAlertBox").animate({"opacity":"0"})
//		$(this).find(".moreIcon").attr("src",src+"moreIcon.png");
		$(this).removeClass("resolveAct")
	})
	var myindustryMbl,SMBSW,protechSolveMbl,protechVideoMbl,mySwiperHotPc,mySwiperH5Vid,mySwiperH5Succ;
	if(!$('body').hasClass('ie8')){
	myindustryMbl = new Swiper('.industryMbl .swiper-hotPc',{
		    grabCursor: true,
		    slidesPerView: 1,
		    pagination: '.industryMblBanner',
   	 		paginationClickable: true,
   	 		calculateHeight: true
	});

	SMBSW = new Swiper('.SMBMbl .swiper-SMBSW',{
		    grabCursor: true,
		    slidesPerView: 1,
		    pagination: '.SMBMblBanner',
   	 		paginationClickable: true,
   	 		calculateHeight: true
	});

	protechSolveMbl = new Swiper('.protechSolveMbl .swiper-SMBSW',{
		    grabCursor: true,
		    slidesPerView: 1,
		    pagination: '.protechSolveMblBanner',
   	 		paginationClickable: true,
   	 		calculateHeight: true
	});
	
	protechVideoMbl = new Swiper('.protechVideoMbl .swiper-SMBSW',{
		    grabCursor: true,
		    slidesPerView: 1,
		    pagination: '.protechVideoMblBanner',
   	 		paginationClickable: true,
   	 		calculateHeight: true
	});
	
	mySwiperHotPc = new Swiper('.industry .swiper-hotPc',{
		    grabCursor: true,
		    paginationClickable: true,
		    slidesPerView: 1
	});
	mySwiperH5Vid = new Swiper('.swiper-containerVidH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '.protechH5VidBtnBox'
			})
	    // 成功案例
	mySwiperH5Succ = new Swiper('.swiper-containerSuccH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '.techH5SuccBtnbox'
			})
}
	var mySwiperHotPcNum=0;
	var allmySwiperHotPcNum=$('.industry .hotActivityInner').length-3;
	if(!$('body').hasClass('ie8')){
		$('.industry .lookArrowLeft').on('click', function(e){
		    e.preventDefault();
		    mySwiperHotPc.slidePrev();
		    mySwiperHotPcNum--;
		    if(mySwiperHotPcNum<=0){
		    	$('.industry .lookArrowLeft').removeClass('hover');
		    	mySwiperHotPcNum=0;
		    }
		})
	}else{
		$('.industry .lookArrowLeft').click(function(){
		    mySwiperHotPcNum--;
		    if(mySwiperHotPcNum<=0){
		    	$('.industry .lookArrowLeft').removeClass('hover');
		    	mySwiperHotPcNum=0;
		    }
			var industryWidth=$('.industry .swiper-hotPc').width();
			$('.industry .swiper-hotPc .swiper-wrapper').animate({left:'-'+0+'px'});
		})
	}
	$('.industry .lookArrowLeft').mouseover(function(){
	    if(mySwiperHotPcNum!=0){
			$('.industry .lookArrowLeft').addClass('hover');
		}
	}).mouseleave(function(){
	  $('.industry .lookArrowLeft').removeClass('hover');
	});
	$('.industry .lookArrowRight').mouseover(function(){
		if(mySwiperHotPcNum!=allmySwiperHotPcNum){
			$('.industry .lookArrowRight').addClass('hover');
		}
	}).mouseleave(function(){
		$('.industry .lookArrowRight').removeClass('hover');
	});
	if(!$('body').hasClass('ie8')){
		$('.industry .lookArrowRight').on('click', function(e){
		    e.preventDefault();
		    mySwiperHotPc.slideNext();
		    mySwiperHotPcNum++;
		    if(mySwiperHotPcNum>=allmySwiperHotPcNum){
		    	mySwiperHotPcNum=allmySwiperHotPcNum;
		    	$('.industry .lookArrowRight').removeClass('hover');
		    }
		})
	}else{
		$('.industry .lookArrowRight').click(function(){
		    mySwiperHotPcNum++;
		    if(mySwiperHotPcNum>=allmySwiperHotPcNum){
		    	mySwiperHotPcNum=allmySwiperHotPcNum;
		    	$('.industry .lookArrowRight').removeClass('hover');
		    }
			var industryWidth=$('.industry .swiper-hotPc').width();
			$('.industry .swiper-hotPc .swiper-wrapper').animate({left:'-'+industryWidth+'px'});
		})
	}
	var mySwiperHotPcNumnew=0;
	var ie8_hotPCwidth=0;
	var allmySwiperHotPcNumnew=$('.hotPc .hotActivityInner').length-1;
	if(!$('body').hasClass('ie8')){
		var mySwiperHotPc1 = new Swiper('.hotPc .swiper-hotPc',{
			    grabCursor: true,
			    paginationClickable: true,
			    slidesPerView: 1
		});
	}
	
		
	if(!$('body').hasClass('ie8')){
		$('.hotPc .lookArrowLeft').on('click', function(e){
		    e.preventDefault()
		    mySwiperHotPc1.slidePrev();
		    mySwiperHotPcNumnew--;
		    if(mySwiperHotPcNumnew<=0){
		    	$('.hotPc .lookArrowLeft').removeClass('hover');
		    	mySwiperHotPcNumnew=0;
		    }
		})
	}else{
		$('.hotPc .lookArrowLeft').click(function(){
			mySwiperHotPcNumnew--;
		    if(mySwiperHotPcNumnew<=0){
		    	$('.hotPc .lookArrowLeft').removeClass('hover');
		    	mySwiperHotPcNumnew=0;
		    }
		    ie8_hotPCwidth--
			hotPcWidth=$('#solution .swiper-hotPc .swiper-slide').width();
			hotPcWidth=ie8_hotPCwidth*hotPcWidth;

			if(ie8_hotPCwidth<0){
				ie8_hotPCwidth=0;
				return false;
			}
			$('.hotPc .swiper-hotPc .swiper-wrapper').animate({left:'-'+hotPcWidth+'px'});
		})

	}
	

		setTimeout(function(){
			setFontSize();

		},100)
	$('.hotPc .lookArrowLeft').mouseover(function(){
	    if(mySwiperHotPcNumnew!=0){
			$('.hotPc .lookArrowLeft').addClass('hover');
		}
	}).mouseleave(function(){
	  $('.hotPc .lookArrowLeft').removeClass('hover');
	});
	if(!$('body').hasClass('ie8')){
		$('.hotPc .lookArrowRight').on('click', function(e){
		    e.preventDefault()
		    mySwiperHotPc1.slideNext()
		    mySwiperHotPcNumnew++;
		    if(mySwiperHotPcNumnew>=allmySwiperHotPcNumnew){
		    	mySwiperHotPcNumnew=allmySwiperHotPcNumnew;
		    	$('.hotPc .lookArrowRight').removeClass('hover');
		    }
		})
	}else{
		$('.hotPc .lookArrowRight').click(function(){
			mySwiperHotPcNumnew++;
		    if(mySwiperHotPcNumnew>=allmySwiperHotPcNumnew){
		    	mySwiperHotPcNumnew=allmySwiperHotPcNumnew;
		    	$('.hotPc .lookArrowRight').removeClass('hover');
		    }
		    ie8_hotPCwidth++;
			hotPcWidth=$('#solution .swiper-hotPc .swiper-slide').width();
			hotPcWidth=ie8_hotPCwidth*hotPcWidth;
			if(ie8_hotPCwidth>=$('#solution .hotPc .swiper-hotPc .swiper-slide').length){
				ie8_hotPCwidth=$('#solution .hotPc .swiper-hotPc .swiper-slide').length-1;
				return false;
			}
			$('.hotPc .swiper-hotPc .swiper-wrapper').animate({left:'-'+hotPcWidth+'px'});
		})
	}	
	$('.hotPc .lookArrowRight').mouseover(function(){
		if(mySwiperHotPcNumnew!=allmySwiperHotPcNumnew){
			$('.hotPc .lookArrowRight').addClass('hover');
		}
	}).mouseleave(function(){
	   $('.hotPc .lookArrowRight').removeClass('hover');
	});
	$('.industryList').mouseover(function(){
		var num=$(this).attr('data-num');
		$(this).addClass('hover');
	    $(this).find('.industryImg').find('img').attr('src','/cn/tres/NewWebUI/images/solution/industryList_'+num+'_2.png');
	}).mouseleave(function(){
		var num=$(this).attr('data-num');
		$(this).removeClass('hover');
	    $(this).find('.industryImg').find('img').attr('src','/cn/tres/NewWebUI/images/solution/industryList_'+num+'.png');
	});
	$(".for_text").on("click", function() {
		$(this).hide()
	})
})
}

// 产品与技术方法
function protechJS(){
	// 判断是否为ie8
	var ie8Falg = false;
	if($('body').hasClass('ie8')){
		ie8Falg = true;
	}
	if(ie8Falg){
		var ie8length;
		$('.ie8 #technicalWrap .proEntCon .swiper-wrapper').removeClass('swiper-wrapper').addClass('swiper-ie8');
		ie8length = $('#technicalWrap .proEntCon .swiper-ie8 .swiper-slide').length - 1;
		$('.ie8 #technicalWrap .proEntCon .swiper-ie8').css({width: (ie8length+1)*100+'%'});
		$('#technicalWrap .swiper-ie8 .swiper-slide').css({width: 100/(ie8length+1)+'%'});
		var thisnum = 0;
		function ie8Swiper(type){
			type=="right"?thisnum+=1:thisnum-=1;
			var _width = $('#technicalWrap .proEntCon .swiper-ie8').width();
			$('#technicalWrap .swiper-ie8').animate({left: -100 * thisnum+'%'},300,'linear',function(){
				if(thisnum == 0){
					$('#technicalWrap .proEntBtnLeft').removeClass('hover');
				} else if(thisnum == ie8length) {
					$('#technicalWrap .proEntBtnRight').removeClass('hover');
				}
			});
		}
		$('#technicalWrap .proEntBtnRight').click(function(){
			if(thisnum < ie8length){
				ie8Swiper("right");
			}
		})
		$('#technicalWrap .proEntBtnLeft').click(function(){
			if(thisnum > 0){
				ie8Swiper("left");
			}
		})
		$('#technicalWrap .proEntBtnLeft').on({
			mouseenter:function(){
				if(thisnum > 0){
					$(this).addClass('hover');
				}
	    	},
	    	mouseleave:function(){
	    		$(this).removeClass('hover');
	    	}
		})
		$('#technicalWrap .proEntBtnRight').on({
			mouseenter:function(){
				if(thisnum < ie8length){
					$(this).addClass('hover');
				}
	    	},
	    	mouseleave:function(){
	    		$(this).removeClass('hover');
	    	}
		})
	}
	
	// 遍历新闻资讯最后板块是否设置margin
	$('#technicalWrap .proJouConList li').each(function(i,e){
		if((i+1)%2 !== 0){
			$(e).css({'margin-right':'5%'})
		}
	})
	if(!ie8Falg){
		var mySwiper = new Swiper('#technicalWrap .swiper-container',{
		    grabCursor: true,
		    paginationClickable: true,
		    onSlideChangeEnd:function(swiper){
		       if(swiper.activeIndex == 0){
		       		$('#technicalWrap .proEntBtnLeft').removeClass('hover');
		       } else if(swiper.activeIndex == swiper.slides.length-1) {
		       		$('#technicalWrap .proEntBtnRight').removeClass('hover');
		       }
		    },
		})
		$('#technicalWrap .proEntBtnLeft').on('click', function(e){
		    e.preventDefault()
		    mySwiper.slidePrev()
		})
		$('#technicalWrap .proEntBtnRight').on('click', function(e){
		    e.preventDefault()
		    mySwiper.slideNext()
		})
		// 移动端企业级产品Swiper
	    var mySwiperH5 = new Swiper('#technicalWrap .swiper-containerEnterH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '#technicalWrap .protechH5Box'
			})
	    // 移动端智能终端产品Swiper
	    var mySwiperH5term = new Swiper('#technicalWrap .swiper-containerTermH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '#technicalWrap .protechH5TermBtnBox'
			})
	    // 操作系统Swiper
	    var mySwiperH5Sys = new Swiper('#technicalWrap .swiper-containerSysH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '#technicalWrap .protechH5SysBtnbox'
			})
	    // 相关视频Swiper
	    var mySwiperH5Vid = new Swiper('#technicalWrap .swiper-containerVidH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '#technicalWrap .protechH5VidBtnBox'
			})
	    // 产品解决方案Swiper
	    var mySwiperH5Succ = new Swiper('#technicalWrap .swiper-containerSuccH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '#technicalWrap .protechH5SuccBtnbox'
			})

		var timer;
		function setFontSize(){
			isliHight('#technicalWrap .swiper-containerEnterH5','li');//移动端企业级产品高度调节
			isliHight('#technicalWrap .proSolveConList','li');//PC产品解决方案高度调节
			isliHight('#technicalWrap .proSysConList','li');//操作系统高度调节
			isliHight('#technicalWrap .proVidConList','li');//产品视频高度调节
			isliHight('#technicalWrap .protechH5Succ','.sysBox');//移动端产品解决方案高度调节
			if($(document).width() > 768){
				isliHight('#newsWrap .proJouConList','li:eq(0),li:eq(1)');
				isliHight('#newsWrap .protechH5EnterList','li:eq(2),li:eq(3)');
			} else {
				$('#newsWrap .proJouConList li').css({height: 'auto'});
			}
			mySwiper.onResize();
			mySwiperH5.onResize();
			mySwiperH5term.onResize();
			mySwiperH5Sys.onResize();
			mySwiperH5Vid.onResize();
			mySwiperH5Succ.onResize();
		};
		// 调整窗口时重置
	    window.addEventListener("resize", function() {
	        clearTimeout(timer);
	        timer = setTimeout(setFontSize, 30);
	    }, false);
		var slidelength = $('#technicalWrap .proEntCon .swiper-slide').length - 1;
	    $('#technicalWrap .proEntBtnLeft').on({
			mouseenter:function(){
				if(mySwiper.activeIndex > 0){
					$(this).addClass('hover');
				}
	    	},
	    	mouseleave:function(){
	    		$(this).removeClass('hover');
	    	}
		})
		$('#technicalWrap .proEntBtnRight').on({
			mouseenter:function(){
				if(mySwiper.activeIndex < slidelength){
					$(this).addClass('hover');
				}
	    	},
	    	mouseleave:function(){
	    		$(this).removeClass('hover');
	    	}
		})
	}
	
	// 鼠标移上事件
	$("#technicalWrap .proEntList").each(function(i,e){
		$(e).find('li').each(function(j,ev){
			$(ev).on({
				mouseenter:function(){
		    		$(ev).addClass('protecgFontRed');
		    		$(ev).find(".proEntListImg img").attr("src","/cn/tres/NewWebUI/images/protech/protech"+(i+1)+"-icon0"+(j+1)+"-hover.png?v=1.1");
		    	},
		    	mouseleave:function(){
		    		$(ev).removeClass('protecgFontRed');
		    		$(ev).find(".proEntListImg img").attr("src","/cn/tres/NewWebUI/images/protech/protech"+(i+1)+"-icon0"+(j+1)+".png?v=1.1");
		    	}
	    	})			
		})
	})
	// 判断高度变化函数
	function isliHight(father, boy){
		$(father).find(boy).css({height: 'auto'});
		var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
		$(father).find(boy).each(function(i,e){
			var _height = $(e).height();
			heightarr.push(_height);
		})
		for(var i = 1; i < heightarr.length; i ++){
			if(heightarr[i] > lastHeight){
				lastHeight = heightarr[i];
			}
		}
		$(father).find(boy).css({height:lastHeight + 4 + 'px'});
	}
	var timeSet = setTimeout(function(){
		isliHight('#technicalWrap .swiper-containerEnterH5','li');//移动端企业级产品高度调节
		isliHight('#technicalWrap .proSolveConList','li');//PC产品解决方案高度调节
		isliHight('#technicalWrap .proSysConList','li');//操作系统高度调节
		isliHight('#technicalWrap .proVidConList','li');//产品视频高度调节
		isliHight('#technicalWrap .protechH5Succ','.sysBox');//移动端产品解决方案高度调节
		if($(document).width() > 768){
			isliHight('#newsWrap .proJouConList','li:eq(0),li:eq(1)');
			isliHight('#newsWrap .protechH5EnterList','li:eq(2),li:eq(3)');
		}
		clearTimeout(timeSet)
	},300)

	if(ie8Falg){
		window.onresize = function(){
			if($(document).width() > 768){
				isliHight('#newsWrap .proJouConList','li:eq(0),li:eq(1)');//新闻资讯
				isliHight('#newsWrap .protechH5EnterList','li:eq(2),li:eq(3)');//新闻资讯
			} else {
				$('#newsWrap .proJouConList li').css({height: 'auto'});
			}
			isliHight('#technicalWrap .swiper-containerEnterH5','li');//移动端企业级产品高度调节
			isliHight('#technicalWrap .proSolveConList','li');//PC产品解决方案高度调节
			isliHight('#technicalWrap .proSysConList','li');//操作系统高度调节
			isliHight('#technicalWrap .proVidConList','li');//产品视频高度调节
			isliHight('#technicalWrap .protechH5Succ','.sysBox');//移动端产品解决方案高度调节
		}
	}
}


// 技术咨询方法
function technicalJS(){
	var ie8Falg = false;
	if($('body').hasClass('ie8')){
		ie8Falg = true;
	}
	// 遍历新闻资讯是否有图片
	$('#consultationWrap .proJouConList li').each(function(i,e){
		if((i+1)%2 !== 0){
			$(e).css({'margin-right':'5%'})
		}
	})
	// 鼠标移上事件
	$("#consultationWrap .techLevelConList").each(function(i,e){
		$(e).find('li').each(function(j,ev){
			$(ev).on({
				mouseenter:function(){
		    		$(ev).addClass('protecgFontRed');
		    		$(ev).find(".techLevelConImg img").attr("src","/cn/tres/NewWebUI/images/technical/levelicon-hover0"+(j+1)+".png?v=1.1");
		    	},
		    	mouseleave:function(){
		    		$(ev).removeClass('protecgFontRed');
		    		$(ev).find(".techLevelConImg img").attr("src","/cn/tres/NewWebUI/images/technical/techLevelConListicon0"+(j+1)+".png?v=1.1");
		    	}
	    	})			
		})
	})
	// 判断产品解决方案高度变化
	function isliHight(father, boy){
		$(father).find(boy).css({height: 'auto'});
		var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
		$(father).find(boy).each(function(i,e){
			var _height = $(e).height();
			heightarr.push(_height);
		})
		for(var i = 1; i < heightarr.length; i ++){
			if(heightarr[i] > lastHeight){
				lastHeight = heightarr[i];
			}
		}
		$(father).find(boy).css({height:lastHeight + 4 + 'px'});
	}
	var timeHeight = setTimeout(function(){
		if($(document).width() > 768){
			isliHight('#consultationWrap .proJouConList','li:eq(0),li:eq(1)');//新闻资讯高度调节
			isliHight('#consultationWrap .protechH5EnterList','li:eq(2),li:eq(3)');//新闻资讯高度调节
		}
		isliHight('#consultationWrap .techapplicConList','li');//新IT行业应用高度调节
		isliHight('#consultationWrap .techLevelConList','li');//新IT顶层规划高度调节
		isliHight('#consultationWrap .techSolveConList','li');//成功案例PC端高度调节
		isliHight('#consultationWrap .techH5SuccCon','.swiper-slide');//成功案例移动端高度调节
		clearTimeout(timeHeight)
	},300)
	if(ie8Falg){
		window.onresize = function(){
			if($(document).width() > 768){
				isliHight('#consultationWrap .proJouConList','li:eq(0),li:eq(1)');
				isliHight('#consultationWrap .protechH5EnterList','li:eq(2),li:eq(3)');
			} else {
				$('#consultationWrap .proJouConList li').css({height: 'auto'});
			}
			isliHight('#consultationWrap .techapplicConList','li');//新IT行业应用高度调节
			isliHight('#consultationWrap .techLevelConList','li');//新IT顶层规划高度调节
			isliHight('#consultationWrap .techSolveConList','li');//成功案例PC端高度调节
			isliHight('#consultationWrap .techH5SuccCon','.swiper-slide');//成功案例移动端高度调节
		}
	}
	if(!ie8Falg){
		// 新IT行业应用swiper
		var mySwiperH5App = new Swiper('#consultationWrap .swiper-containerAppH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '#consultationWrap .techH5AppBtnbox'
			})
		// 成功案例swiper
		var mySwiperH5Succ = new Swiper('#consultationWrap .swiper-containerSuccH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '#consultationWrap .techH5SuccBtnbox'
			})
		// 新一代数据swiper
		var mySwiperH5Data = new Swiper('#consultationWrap .swiper-containerDataH5',{
			    grabCursor: true,
			    paginationClickable: true,
			    nextButton: '#consultationWrap .swiper-button-next',
			    prevButton: '#consultationWrap .swiper-button-prev'
			})

		// 调整窗口时重置
		window.addEventListener("resize", function() {
			if($(document).width() > 768){
				isliHight('#consultationWrap .proJouConList','li:eq(0),li:eq(1)');
				isliHight('#consultationWrap .protechH5EnterList','li:eq(2),li:eq(3)');
			} else {
				$('#consultationWrap .proJouConList li').css({height: 'auto'});
			}
		    isliHight('#consultationWrap .techapplicConList','li');//新IT行业应用高度调节
			isliHight('#consultationWrap .techLevelConList','li');//新IT顶层规划高度调节
			isliHight('#consultationWrap .techSolveConList','li');//成功案例PC端高度调节
			isliHight('#consultationWrap .techH5SuccCon','.swiper-slide');//成功案例移动端高度调节
			mySwiperH5App.onResize();
			mySwiperH5Succ.onResize();
			mySwiperH5Data.onResize();
		}, false);
	}
}

//关于我们函数 
function aboutUs(){
	var ie8Falg = false;
	if($('body').hasClass('ie8')){
		ie8Falg = true;
	}
	var companyVideo = document.getElementById('companyVideo');
	$('.gotoIcon').click(function(){
			var videourl=$(this).attr('data-url');
			var videoimgurl=$(this).attr('data-img');
			$('#VideoPlay').show();
			var _width=$('.videoBox').width();
			var _height=_width*0.6;
			$('#VideoPlay .videoBox .posterimg').attr('src',videoimgurl);
		    thePlayer = jwplayer('videoall').setup({  
		        flashplayer: '/cn/tres/NewWebUI/scripts/vender/player.swf',  
		        file: videourl, 
		        image: videoimgurl, 
		        width: _width,  
		        height: _height,  
		        dock: false  
		    });  
		})
	// 判断高度变化函数
	function isliHight(father, boy){
		$(father).find(boy).css({height: 'auto'});
		var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
		$(father).find(boy).each(function(i,e){
			var _height = $(e).height();
			heightarr.push(_height);
		})
		for(var i = 1; i < heightarr.length; i ++){
			if(heightarr[i] > lastHeight){
				lastHeight = heightarr[i];
			}
		}
		$(father).find(boy).css({height:lastHeight + 4 + 'px'});
	}
	// 公司简介列表去除最后margin
	//$('.companyProfileList li:last').css({'margin-right':0});
	// 遍历新闻资讯是否设置margin
	$('#aboutUs .proJouConList li').each(function(i,e){
		if((i+1)%2 !== 0){
			$(e).css({'margin-right':'5%'})
		}
	})
	var time = setTimeout(function(){
		clearTimeout(time);
		if($(document).width() > 768){
			isliHight('#aboutUs .proJouConList','li:eq(0),li:eq(1)');//新闻资讯高度调节
			isliHight('#aboutUs .protechH5EnterList','li:eq(2),li:eq(3)');//新闻资讯高度调节
		} else {
			$('#aboutUs .proJouConList li').css({height: 'auto'});
			
		}
		$('#aboutUs .proJouConList li:last').removeClass('journBoxact');
		isliHight('#aboutUs .brandConceptList','li');//品牌理念高度调节
		isliHight('#aboutUs .swiper-containerVidH5','.protechH5VideoslBox');//相关视频高度调节
		isliHight('#aboutUs .proVidConList','li');//移动端适配高度调节
	},300)
	if(ie8Falg){
		window.onresize = function(){
			if($(document).width() > 768){
				isliHight('#aboutUs .proJouConList','li:eq(0),li:eq(1)');//新闻资讯高度调节
				isliHight('#aboutUs .protechH5EnterList','li:eq(2),li:eq(3)');//新闻资讯高度调节
			} else {
				$('#aboutUs .proJouConList li').css({height: 'auto'});
			}
			isliHight('#aboutUs .brandConceptList','li');//品牌理念高度调节
			isliHight('#aboutUs .swiper-containerVidH5','.protechH5VideoslBox');//相关视频高度调节
			isliHight('#aboutUs .proVidConList','li');//移动端适配高度调节
		}
	} else {
		 // 相关视频
	    var mySwiperH5Vid = new Swiper('#aboutUs .swiper-containerVidH5',{
			    grabCursor: true,
			    paginationClickable: true,
			   	pagination: '#aboutUs .protechH5VidBtnBox'
			})
		window.addEventListener("resize", function() {
			if($(document).width() > 768){
				isliHight('#aboutUs .proJouConList','li:eq(0),li:eq(1)');//操作系统部分调节
				isliHight('#aboutUs .protechH5EnterList','li:eq(2),li:eq(3)');//操作系统部分调节
			} else {
				$('#aboutUs .proJouConList li').css({height: 'auto'});
			}
			isliHight('#aboutUs .brandConceptList','li');
			isliHight('#aboutUs .swiper-containerVidH5','.protechH5VideoslBox');
			isliHight('#aboutUs .proVidConList','li');
			mySwiperH5Vid.onResize();
		}, false);
	}
}

// 合作伙伴函数
function partner(){
	function isliHight(father, boy){
		$(father).find(boy).css({height: 'auto'});
		var heightarr = [],lastHeight = $(father).find(boy).eq(0).height();
		$(father).find(boy).each(function(i,e){
			var _height = $(e).height();
			heightarr.push(_height);
		})
		for(var i = 1; i < heightarr.length; i ++){
			if(heightarr[i] > lastHeight){
				lastHeight = heightarr[i];
			}
		}
		$(father).find(boy).css({height:lastHeight + 60 + 'px'});
	}
	$('#partner .partner_resource_center .partner_resource_centerBox .partner_resource_centerList li').each(function(i,e){
		$(e).on({
			mouseenter:function(){
	    		$(e).find('.partner_resource_centerList_img').find('img').addClass('hover');
	    	},
	    	mouseleave:function(){
	    		$(e).find('.partner_resource_centerList_img').find('img').removeClass('hover');
	    	}
		})
	})


	$('#partner .partner_alliance .partner_allianceBox .partner_allianceListBox li').each(function(i,e){
		$(e).on({
			mouseenter:function(){
	    		$(e).find('.partner_allianceListImg').addClass('hover');
	    	},
	    	mouseleave:function(){
	    		$(e).find('.partner_allianceListImg').removeClass('hover');
	    	}
		})
	})
	isliHight('#partner .techSolveConList','li');
	isliHight('#partner .succTechH5 .swiper-containerSuccH5','.swiper-slide');
	isliHight('#partner .nobecome_partners','.become_partnersList');
	isliHight('#partner .hasbecome_partners','.become_partnersList');
	if($('body').hasClass('ie8')){

	}else{
    var mySwiperH5 = new Swiper('#partner .swiper-containerSuccH5',{
		    grabCursor: true,
		    paginationClickable: true,
		   	pagination: '#partner .techH5SuccBtnbox'
		})
   	 mySwiperH5.onResize();
    }
    if($('body').hasClass('ie8')){
		window.onresize = function(){
			if($(document).width() > 768){
				isliHight('#partner .techSolveConList','li');
			}else{
				isliHight('#partner .succTechH5 .swiper-containerSuccH5','.swiper-slide');
				isliHight('#partner .nobecome_partners','.become_partnersList');
				isliHight('#partner .hasbecome_partners','.become_partnersList');
			}
			isliHight('#partner .nobecome_partners','.become_partnersList');
			isliHight('#partner .hasbecome_partners','.become_partnersList');
		}		
	}else{
		window.addEventListener("resize", function() {
			if($(document).width() > 768){
				isliHight('#partner .techSolveConList','li');
			}else{
				mySwiperH5.onResize();
				isliHight('#partner .succTechH5 .swiper-containerSuccH5','.swiper-slide');
				isliHight('#partner .nobecome_partners','.become_partnersList');
				isliHight('#partner .hasbecome_partners','.become_partnersList');
			}
			isliHight('#partner .nobecome_partners','.become_partnersList');
			isliHight('#partner .hasbecome_partners','.become_partnersList');
		}, false);
	}
	$(".techSolveConList li").on({
    	mouseenter:function(){
    		$(this).find('.more').css("color","#e60012");
    		$(this).find('.more').find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGoHover.png");
    	},
    	mouseleave:function(){
    		$(this).find('.more').css("color","#333");
    		$(this).find('.more').find("img").attr("src",'/cn/tres/NewWebUI/images/solution/'+"proJouConListTextGo.png");
    	}
    })
}
$('#newsWrap .proJouConList li:last').removeClass('journBoxact');
// 判断执行
var classNameArr = ['#technicalWrap', '#consultationWrap','#solution','#support','#aboutUs','#partner'];
var jsFunctionArr = [protechJS, technicalJS,solution,support,aboutUs,partner];
for(i = 0; i < classNameArr.length; i ++){
	if($(classNameArr[i]).length > 0){
		jsFunctionArr[i]();
	}
}

}