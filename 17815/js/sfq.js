// JavaScript Document
 $(function(){
	  
	  $('.pic ul li').mouseover(function(){

	      $(this).stop(true).animate({width:'689px'},1000).siblings().stop(true).animate({width:'100px'},1000);

	  }); 
	  
	  $('.top_right li').mouseover(function(){
		   		  
		 $(this).addClass('top_li').siblings().removeClass('top_li');  
	
	  });
	  
	  $('.top_right li').mouseout(function(){
		   		  
		 $(this).removeClass('top_li');  
	
	  });

		 
	 $('.grid li figure figcaption').click(function(){
			
	
		 
	   $(this).parent().next().fadeIn(1000);
		
		
	
	 });
	 
	 
	 $('.gb').click(function(){
			 
	    $('.an').fadeOut(1000);
	    //$('.an').css('display','none').animate({width:'800px'},1000);
	 });
		 
  });