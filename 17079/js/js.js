// 焦点图
(function(d,D,v){d.fn.responsiveSlides=function(h){var b=d.extend({auto:!0,speed:1E3,timeout:7E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!1,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},h);return this.each(function(){v++;var e=d(this),n,p,i,k,l,m=0,f=e.children(),w=f.size(),q=parseFloat(b.speed),x=parseFloat(b.timeout),r=parseFloat(b.maxwidth),c=b.namespace,g=c+v,y=c+"_nav "+g+"_nav",s=c+"_here",j=g+"_on",z=g+"_s",
o=d("<ul class='"+c+"_tabs "+g+"_tabs' />"),A={"float":"left",position:"relative"},E={"float":"none",position:"absolute"},t=function(a){b.before();f.stop().fadeOut(q,function(){d(this).removeClass(j).css(E)}).eq(a).fadeIn(q,function(){d(this).addClass(j).css(A);b.after();m=a})};b.random&&(f.sort(function(){return Math.round(Math.random())-0.5}),e.empty().append(f));f.each(function(a){this.id=z+a});e.addClass(c+" "+g);h&&h.maxwidth&&e.css("max-width",r);f.hide().eq(0).addClass(j).css(A).show();if(1<
f.size()){if(x<q+100)return;if(b.pager){var u=[];f.each(function(a){a=a+1;u=u+("<li><a href='#' class='"+z+a+"'>"+a+"</a></li>")});o.append(u);l=o.find("a");h.controls?d(b.controls).append(o):e.after(o);n=function(a){l.closest("li").removeClass(s).eq(a).addClass(s)}}b.auto&&(p=function(){k=setInterval(function(){var a=m+1<w?m+1:0;b.pager&&n(a);t(a)},x)},p());i=function(){if(b.auto){clearInterval(k);p()}};b.pause&&e.hover(function(){clearInterval(k)},function(){i()});b.pager&&(l.bind("click",function(a){a.preventDefault();
b.pauseControls||i();a=l.index(this);if(!(m===a||d("."+j+":animated").length)){n(a);t(a)}}).eq(0).closest("li").addClass(s),b.pauseControls&&l.hover(function(){clearInterval(k)},function(){i()}));if(b.nav){c="<a href='#' class='"+y+" prev'>"+b.prevText+"</a><a href='#' class='"+y+" next'>"+b.nextText+"</a>";h.controls?d(b.controls).append(c):e.after(c);var c=d("."+g+"_nav"),B=d("."+g+"_nav.prev");c.bind("click",function(a){a.preventDefault();if(!d("."+j+":animated").length){var c=f.index(d("."+j)),
a=c-1,c=c+1<w?m+1:0;t(d(this)[0]===B[0]?a:c);b.pager&&n(d(this)[0]===B[0]?a:c);b.pauseControls||i()}});b.pauseControls&&c.hover(function(){clearInterval(k)},function(){i()})}}if("undefined"===typeof document.body.style.maxWidth&&h.maxwidth){var C=function(){e.css("width","100%");e.width()>r&&e.css("width",r)};C();d(D).bind("resize",function(){C()})}})}})(jQuery,this,0);
$(function() {
    $(".f426x240").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 700,
        maxwidth: 825
    });
    $(".f160x160").responsiveSlides({
        auto: true,
        pager: true,
        speed: 700,
        maxwidth: 160
    });
});

// JavaScript Document
$(function(){
	var bodyHegiht=$(window).height();//获取浏览器的高度
	$(".indexLeft").css("min-height",bodyHegiht+"px")	//indexLeft等于浏览器的高度
	$(".parBox,.jiantous").css("min-height",bodyHegiht-30+"px")  //midNav等于浏览器的高度减去30
	var parBox=$(".parBox").height();
	$(".midNav").css("min-height",parBox+100+"px")
	//更多图片
	$(".proImg img:first").fadeIn();
	$(".proImgList li").click(function(){
		var pros=$(this).index();
		$(".proImg img").eq(pros).fadeIn().siblings("img").hide();
		})
	//颜色选择
	$(".buycolor li").click(function(){
		$(this).addClass("colorBor").siblings("li").removeClass("colorBor");
		})
	//漂浮的左导航
	$("#indexLeft").animate({
		left:"-160px",
		},3000)	
	$("#indexLeft").hover(function(){
		$(this).stop(true,true).animate({
			left:"0px",
			},1000,function(){
				$("#midNav").stop(true,true).fadeIn();
				})
		},function(){
			$(this).stop(true,true).animate({
				left:"-160px",
				},1000,function(){
					$("#midNav").stop(true,true).fadeOut();
					})
			})
	})
	
//座椅定制
// JavaScript Document
$(function(){
	//.chairList dl
	$(".chairList dl:first").addClass("dlStyle");
	//.shiqiMidBox
	$(".shiqiMidBox:first,.chairStyleBox:first").show();
	$(".chairList dl").click(function(){
		$(this).addClass("dlStyle").siblings("dl").removeClass("dlStyle");
		var dlindex=$(this).index();
		$(".shiqiMidBox").eq(dlindex).show().siblings(".shiqiMidBox").hide();
		$(".chairStyleBox").eq(dlindex).show().siblings(".chairStyleBox").hide();
		})
	$(".chairZhengTop img:first,.chairZhengCenter img:first,.chairZhengBottom img:first,.chairCeTop img:first,.chairCeCenter img:first,.chairCeBottom img:first,.qianzhiCe img:first,.qianzhiNei img:first,.qianzhiZheng img:first,.zuoyiLeft img:first,.zuoyiRight img:first").show();
	//样式
	/*$(".chairTopStyle li,.chairCenterStyle li,.chairBottomStyle li").click(function(){
		$(this).children("img").toggle();
		});*/
	//安全座椅样式选择	
	$(".chairStyleBox:first .chairTopStyle li:first,.chairStyleBox:first .chairCenterStyle li:first,.chairStyleBox:first .chairBottomStyle li:first,.chairStyleBox:eq(1) .chairTopStyle li:first,.chairStyleBox:eq(1) .chairCenterStyle li:first,.chairStyleBox:eq(1) .chairBottomStyle li:first,.chairStyleBox:eq(2) .chairTopStyle li:first,.chairStyleBox:eq(2) .chairCenterStyle li:first").addClass("listyle");
	$(".chairStyleBox:first .chairTopStyle li").click(function(){
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		var topIndex=$(this).index();
		$(".chairZhengTop img").eq(topIndex).fadeIn().siblings("img").hide();
		$(".chairCeTop img").eq(topIndex).fadeIn().siblings("img").hide();
		})
	$(".chairStyleBox:first .chairCenterStyle li").click(function(){
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		var topIndex=$(this).index();
		$(".chairZhengCenter img").eq(topIndex).fadeIn().siblings("img").hide();
		$(".chairCeCenter img").eq(topIndex).fadeIn().siblings("img").hide();
		})
	$(".chairStyleBox:first .chairBottomStyle li").click(function(){
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		var topIndex=$(this).index();
		$(".chairCeBottom img").eq(topIndex).fadeIn().siblings("img").hide();
		$(".chairZhengBottom img").eq(topIndex).fadeIn().siblings("img").hide();
		})
	//前置护体样式选择	
	$(".chairStyleBox:eq(1) .chairTopStyle li").click(function(){
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		var topIndex=$(this).index();
		$(".qianzhiCe img").eq(topIndex).fadeIn().siblings("img").hide();
		})
	$(".chairStyleBox:eq(1) .chairCenterStyle li").click(function(){
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		var topIndex=$(this).index();
		$(".qianzhiNei img").eq(topIndex).fadeIn().siblings("img").hide();
		})
	$(".chairStyleBox:eq(1) .chairBottomStyle li").click(function(){
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		var topIndex=$(this).index();
		$(".qianzhiZheng img").eq(topIndex).fadeIn().siblings("img").hide();
		})	
	//座椅垫样式选择	
	$(".chairStyleBox:eq(2) .chairTopStyle li").click(function(){
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		var topIndex=$(this).index();
		$(".zuoyiLeft img").eq(topIndex).fadeIn().siblings("img").hide();
		})
	$(".chairStyleBox:eq(2) .chairCenterStyle li").click(function(){
		$(this).addClass("listyle").siblings("li").removeClass("listyle");
		var topIndex=$(this).index();
		$(".zuoyiRight img").eq(topIndex).fadeIn().siblings("img").hide();
		})
	//下一步 安全座椅
	$(".next-an").click(function(){
		$(this).parents(".chairStyleBox").hide();
		$(".chairStyleBox:eq(1)").show();
		$(".shiqiMidBox:first").hide();
		$(".shiqiMidBox:eq(1)").show();
		$(".chairList dl:eq(1)").addClass("dlStyle").siblings("dl").removeClass("dlStyle");
		})
	//下一步 前置护体
	$(".next-qian").click(function(){
		$(this).parents(".chairStyleBox").hide();
		$(".chairStyleBox:eq(2)").show();
		$(".shiqiMidBox:eq(1)").hide();
		$(".shiqiMidBox:eq(2)").show();
		$(".chairList dl:eq(2)").addClass("dlStyle").siblings("dl").removeClass("dlStyle");
		})
	//返回第一步 座椅垫
	$(".next-zuo").click(function(){
		$(this).parents(".chairStyleBox").hide();
		$(".chairStyleBox:first").show();
		$(".shiqiMidBox:eq(2)").hide();
		$(".shiqiMidBox:first").show();
		$(".chairList dl:first").addClass("dlStyle").siblings("dl").removeClass("dlStyle");
		})
	})	