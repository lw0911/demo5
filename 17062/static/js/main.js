$('.carousel').carousel({
	interval: 5000
})
$(function() {
	$(".newsArt li").mouseenter(function(){
		var i = $(this).index();
		//alert(i);
		$(".newsArt li").eq(i).siblings().removeClass("active");
		$(".newsArt li").eq(i).addClass("active");
		$(".newsImg li").eq(i).siblings().removeClass("active");
		$(".newsImg li").eq(i).addClass("active");
	});
	
	
	$(".map iframe").load(function() {
		$(".map .loader").css("display", "none")
	})
	function logo(){
		if($(window).width()<768)
		$(".navbar h1").css("margin-top","0px");
		else
		$(".navbar h1").css("margin-top","20px");
	}
	function autoNav(){
		if($(window).scrollTop()>20){
			$(".navbar").css("position","fixed");
			$(".navbar").css("top","0");
			$(".navbar h1").css("margin-top","0");
			$(".navbar ul.nav").css("padding","10px 0");
		}
		else{
			$(".navbar").css("position","absolute");
			logo();
			$(".navbar ul.nav").css("padding","30px 0 20px");
		}
	}
	autoNav();
	$(window).scroll(function(){
		autoNav();
	});	
	
})