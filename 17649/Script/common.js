//导航下拉开始
$(document).ready(function(){
	  $('ul.navigationlist li').mousemove(function(){
	  		$(this).find('ul').slideDown(280);//you can give it a speed
	  });
	  $('ul.navigationlist li').mouseleave(function(){
	  		$(this).find('ul').slideUp(280);
	  });
});
//导航下拉结束
