$(function(){
	//检测是否IE6
	if(navigator.userAgent.indexOf("MSIE 6.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") >0  || navigator.userAgent.indexOf("MSIE 8.0") >0 ){
		location.href="../update.html"/*tpa=http://www.zhouheiya.cn/wcs/Tpl/home/default/update.html*/;
	}
	
	$('.header .menu li:last-child').css('margin-right',0)
	
	
	
	$('.iconMenu').toggle(function(){
		$('.iMenu').css('display','block');
	},function(){
		$('.iMenu').css('display','none');
		
	})
	
	
	$('ul.p1 li:even').addClass('li01')
	$('ul.p1 li:odd').addClass('li02')
	
	$('ul.p7 li:even').css({'background':"#f5f5f5",'corlor':"#4d4d4d"})
	$('ul.p7 li:odd').css({'background':"#4d4d4d","color": "#fff"})
	
	
	$('ul.p1-2 li:even').css('background',"#f9f9f9")
	$('ul.p1-2 li:odd').css('background',"#ffffff")
	
	$('ul.p1-1 li:even').addClass('li01')
	$('ul.p1-1 li:odd').addClass('li02')
	
	
	
	
	
	
	
	
});