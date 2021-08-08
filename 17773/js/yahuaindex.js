/*  Author:Nissa Chang */
/*  Time:2020/2/22 */

$(function(){
		
		var $li2 = $('#tab2 li');
		var $ul2 = $('#content2 ul');
					
		$li2.mouseover(function(){
		var $this = $(this);
		var $t2 = $this.index();
		$li2.removeClass();
		$this.addClass('current2');
		$ul2.css('display','none');
		$ul2.eq($t2).css('display','block');
		})
		
		var $li = $('#tab li');
		var $ul = $('#content ul');
					
		$li.mouseover(function(){
		var $this = $(this);
		var $t = $this.index();
		$li.removeClass();
		$this.addClass('current');
		$ul.css('display','none');
		$ul.eq($t).css('display','block');
	})
	
		
		
		
	var $li3 = $('#tab3 li');
		var $ul3 = $('#content3 ul');
					
		$li3.mouseover(function(){
		var $this = $(this);
		var $t3 = $this.index();
		$li3.removeClass();
		$this.addClass('current3');
		$ul3.css('display','none');
		$ul3.eq($t3).css('display','block');
	})	
	
	
	var $li4 = $('#tab4 li');
		var $ul4 = $('#content4 ul');
					
		$li4.mouseover(function(){
		var $this = $(this);
		var $t4 = $this.index();
		$li4.removeClass();
		$this.addClass('current4');
		$ul4.css('display','none');
		$ul4.eq($t4).css('display','block');
	})
	
	var $li5 = $('#tab5 li');
		var $ul5 = $('#content5 ul');
					
		$li5.mouseover(function(){
		var $this = $(this);
		var $t5 = $this.index();
		$li5.removeClass();
		$this.addClass('current5');
		$ul5.css('display','none');
		$ul5.eq($t5).css('display','block');
	})	
	var $li6 = $('#tab6 li');
		var $ul6 = $('#content6 ul');
					
		$li6.mouseover(function(){
		var $this = $(this);
		var $t6 = $this.index();
		$li6.removeClass();
		$this.addClass('current6');
		$ul6.css('display','none');
		$ul6.eq($t6).css('display','block');
	})	
	var $li7 = $('#tab7 li');
		var $ul7 = $('#content7 ul');
					
		$li7.mouseover(function(){
		var $this = $(this);
		var $t7 = $this.index();
		$li7.removeClass();
		$this.addClass('current7');
		$ul7.css('display','none');
		$ul7.eq($t7).css('display','block');
	})	

var ul = document.getElementById ("schpicshow");
		var lis = ul.getElementsByTagName("li");
		for (var i = 0; i < lis.length; i++) {};
		lis[1].className="keynote";
		lis[3].className="keynote";
		lis[5].className="keynote";


	

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





























