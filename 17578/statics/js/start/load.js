// JavaScript Document



/*******load*********/
$(document).ready(function(){
  
  $('.load').height($(window).height());
  var banW=$(window).width()/2;
  
  var banH=$(window).height();
  var banS=$('.load_list1>ul>li').size();
  $('.load_list1>ul>li').height(banH);
  $('.load_list2>ul>li').height(banH);
  $('.load_list1>ul').height(banH*banS+1000);
  $('.load_list2>ul').height(banH*banS+1000);
  
  
  $(window).resize(function(){
	  
	  $('.load').height($(window).height());
	  var banW=$(window).width()/2;
	  
	  var banH=$(window).height();
	  var banS=$('.load_list1>ul>li').size();
	  $('.load_list1>ul>li').height(banH);
      $('.load_list2>ul>li').height(banH);
	  $('.load_list1>ul').height(banH*banS+1000);
      $('.load_list2>ul').height(banH*banS+1000);
	  
	  })

$('.load_list1>ul').animate({top:"0"},800);
$('.load_list2>ul').animate({top:"-100%"},800);
    
$('.load_zi1').delay(800).animate({bottom:"15%",opacity:"1"},1200);
$('.load_zi2').delay(800).animate({bottom:"15%",opacity:"1"},1200);
$('.load_p').delay(800).animate({bottom:"12%",opacity:"1"},1200);
$('.load_zi1a').delay(800).animate({bottom:"5%",opacity:"1"},1200);
$('.load_zi2a').delay(800).animate({bottom:"5%",opacity:"1"},1200);
$('.load_zi1a1').delay(800).animate({bottom:"5%",opacity:"1"},1200);
$('.load_zi2a1').delay(800).animate({bottom:"5%",opacity:"1"},1200);


setInterval(function(){
	
	$('.load_list1>ul').stop(true,true).animate({marginTop:-banH},800,function(){
    $('.load_list1>ul').find('li:first-child').appendTo($('.load_list1>ul'));
    $('.load_list1>ul').css({marginTop:0})
	})
	
	$('.load_list2>ul').stop(true,true).animate({marginTop:banH},800,function(){
	$('.load_list2>ul').find('li:last-child').prependTo($('.load_list2>ul'));	
    $('.load_list2>ul').stop(true,true).animate({marginTop:0},0)
	})
	
	
	},4000)
	

$('.load_list1>ul').click(function(){
	$('.load_list2').stop(true).animate({left:banW*2},1200,function(){
					  setTimeout(function(){
						   location.href = "xgm_jd/";
						   },300)
					  })
	})

$('.load_list2>ul').click(function(){
	$('.load_list2').stop(true).animate({left:0},1200,function(){
					setTimeout(function(){
						   location.href = "xgm_bg/";
						   },300)
					})
	})	

$('.load_btn span i').eq(0).click(function(){
	$('.load_list2').stop(true).animate({left:banW*2},1200,function(){
					  setTimeout(function(){
						   location.href = "xgm_jd/";
						   },300)
					  })
	})

$('.load_btn span i').eq(1).click(function(){
	$('.load_list2').stop(true).animate({left:0},1200,function(){
					setTimeout(function(){
						   location.href = "xgm_bg/";
						   },300)
					})
	})	

$('.load_zi1a').click(function(){
	$('.load_list2').stop(true).animate({left:banW*2},1200,function(){
					  setTimeout(function(){
						   location.href = "xgm_jd/";
						   },300)
					  })
	})
	
$('.load_zi2a').click(function(){
	$('.load_list2').stop(true).animate({left:0},1200,function(){
					setTimeout(function(){
						   location.href = "xgm_bg/";
						   },300)
					})
	})		



$('.load_list1').hover(function(){
	$('.load_bg').stop(true).fadeIn(600);
	$(this).find('.load_bg').stop(true).fadeOut(600);
	})

$('.load_list2').hover(function(){
	$('.load_bg').stop(true).fadeIn(600);
	$(this).find('.load_bg').stop(true).fadeOut(600);
	})		


var isdrag=false;   
var tx,x,p,pw,ul;    
$(function(){  
    document.getElementById("load_btn").addEventListener('mouseup',function(){  
        isdrag = false; 
	    if(p<0){
			if(Math.abs(p)>pw){
				$('.load_list2').stop(true).animate({left:0},600,function(){
					setTimeout(function(){
						   location.href = "xgm_jd/";
						   },300)
					})   		
				}else{
                   $('.load_list2').stop(true).animate({left:banW},600)   					
					}
			}else{
				
				if(Math.abs(p)>pw){
				  $('.load_list2').stop(true).animate({left:banW*2},600,function(){
					  setTimeout(function(){
						   location.href = "xgm_bg/";
						   },300)
					  })   		
				}else{
				   $('.load_list2').stop(true).animate({left:banW},600)	
					}
				
				}
		 		
    });  
    document.getElementById("load_btn1").addEventListener('mousedown',touchStart); 
	
	
$("#load_btn").mousemove(function(e){
 p=0;	 
 if (isdrag){  
    e.preventDefault();      
    p=tx + e.pageX - x;
	pw=$(window).width()*0.2;

	$('.load_list2').stop(true).animate({left:banW+p},0)
		
   }   
})
 
 
function touchStart(e){
   isdrag = true;  
   tx = parseInt(document.getElementById("load_btn").style.left+0);    
   x = e.pageX;
   return false;   
} 	
	
	
}); 


  
	
})



/*******load*********/
