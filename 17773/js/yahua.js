/*  Author:Nissa Chang */
/*  Time:2020/2/22 */



$(function(){
	/*go to top*/
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();		
		if(scrolltop>=200){		
				$("#gotop").show();
			}else{
				$("#gotop").hide();
			}
		});		
		$("#gotoparrow").click(function(){
		$("html,body").animate({scrollTop: 0}, 500);	
	});
	/*go to top*/
	$('#registerbg').height($(document.body).outerHeight(true));
	var htop =parseInt(($(window).height()-$('#register').height())/2);
	var htow =parseInt(($(window).width()-$('#register').width())/2);
	$('#register').css({top:htop,left:htow});
	
  		

	
	
	
	$(".login").mouseover(function(){
		$("#registerbg").css("display","block");
  		
  
  
});
	
	$(".down").hover(
  function () {
    $(".ewm").css("display","block");
  },
  function () {
    $(".ewm").css("display","none");
  }
);
	
	

     



	
	
})





























