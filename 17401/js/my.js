// JavaScript Document
$(document).ready(function(){
   $(".header_weixin>img").mouseover(function(){
	  $(".header_weixinBig").css('display','block');  
   })
   $(".header_weixin>img").mouseout(function(){
	  $(".header_weixinBig").css('display','none');  
   })
   
   $('.showP').click(function(){
	     $('.sub').slideToggle();
		 $('.aUp').toggle();
		 $('.aDown').toggle();
	})
})