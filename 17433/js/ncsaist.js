// JavaScript Document

function th(v,c)   { v.src=c;}
function shj(v)
{
	for(i=1;i<=3;i++)
	{
		$('#hj'+i).removeClass('bold');
		$('#hh'+i).hide();
	}
	$('#hj'+v).addClass('bold');
	$('#hh'+v).show();
}

function getzj(t)
{
	for(i=0;i<=5;i++)
	{
		$('.zj'+i).removeClass('phover');
		$('#zj'+i).hide();
	}
	$('.zj'+t).addClass('phover');
	$('#zj'+t).show();

}
function getzt(t)
{
	for(i=0;i<=4;i++)
	{
		$('#zt'+i).hide();
	}
	$('#zt'+t).show();
    document.documentElement.scrollTop = document.body.scrollTop =0;
}
function xm(v)
{
	for(i=1;i<=4;i++)
	{
		$('#xm'+i).removeClass('xmxz');
		$('#xmcon'+i).hide();
		$('#xmcon'+i).width(0);
		$('#xmcon'+i).height(0);
	}
	$('#xm'+v).addClass('xmxz');
	$('#xmcon'+v).show();
		$('#xmcon'+v).width(1150);
		$('#xmcon'+v).height(505);
}

function showXM(x,v)
{
	for(i=1;i<=v;i++)
	{
	$("#xm0"+i).removeClass('xmsh');
	$("#sxm0"+i).hide();
	}
	$("#xm0"+x).addClass('xmsh');
	$("#sxm0"+x).show();
	$("#sxm").show();
	
}

$(function(){ 
	//导航
	var st = 180;
	$('.xianmu').mouseenter(function () {
		$(this).addClass('bais');
        $(this).find('.topdht').stop(false, true).slideDown(st);
    }).mouseleave(function () {
		$(this).removeClass('bais');
        $(this).find('.topdht').stop(false, true).slideUp(st);
    });


    $('.navxm').mouseenter(function () {
	    $('#jiantou').attr("src","/ncsaist/up.jpg") ;
	    $("#nav_left").width(250) ;
        $(this).find('.topdhtt').stop(false, true).slideDown(st);
    }).mouseleave(function () {
	    $('#jiantou').attr("src","/ncsaist/down.jpg") ;
        $(this).find('.topdhtt').stop(false, true).slideUp(st);
        $(this).find('.Show_menu').stop(false, true).slideUp(st);
    });
	
	if($("#mlzx"))
	{
		$("#mlzx>li").each(function(){
			$(this).children().eq(0).text($(this).index()+1);
		});
	}
	//案例
	//function fnNice(){		
	//	$('.s4_c_in').shoufq({aniBeforeWidth:'231px',aniAfterWidth: '442px'});
	//}
	//fnNice();
});

//手风琴效果
(function($) {
	$.fn.shoufq = function(o) {
		o = $.extend({
			aniBeforeWidth: '0',
			aniAfterWidth: '0'
		},
		o);
		var _this = this;

		var aBW = o.aniBeforeWidth;
		var aAW = o.aniAfterWidth;
		var v = o.aniStyle;
		return _this.each(function() {
			$(this).mouseover(function() {
				$(this).stop().animate({
					width: aAW,opacity:1
				},
				300).siblings().stop().animate({
					width: aBW,opacity:0.7
				},
				300);
			});
		});
	}
	
})(jQuery);

$(function(){
	//alert(localhost.pathname);
//	if(location.pathname=="/"||location.pathname=="/index.html")
//	{
//		$(".nTlogo").html('<a href="/" title="长沙爱思特医疗美容医院" target="_blank"><img src="/pimg/logo_index.png" border="0" alt="长沙爱思特医疗美容医院"></a>');
//	}
	
});