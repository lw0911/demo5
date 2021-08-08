// JavaScript Document
var i=0;
var timer;
$(function(){
  $('.ig').eq(0).show().siblings().hide();
  showtime();
  
  //触摸事件
  
  $('.xyq').hover(function(){
	 i = $(this).index();
     show();
	 clearInterval(timer);
	 
  },function(){
	  
	showtime();  
	 
  });
  
  
  // 点击事件
  
  $('.btn1').click(function(){
	
	 clearInterval(timer);
	 
	 if(i == 0)
	 {
		 i = 3; 
	 } 
	 i--;
	 
	 show();
	 showtime();
  });
  
  $('.btn2').click(function(){
	
	 clearInterval(timer);
	 
	 if(i == 2)
	 {
		 i = -1; 
	 } 
	 i++;
	 
	 show();
	 showtime();
  });
	
});

function show()
{
	 $('.ig').eq(i).fadeIn(500).siblings().fadeOut(500);
	 $('.xyq').eq(i).addClass('xyq_ys').siblings().removeClass('xyq_ys');
}

function showtime()
{
	timer = setInterval(function(){
	  i++;
	  if(i == 3)
	  {
		 i = 0;  
	  }
	  show();
  },3000);
}