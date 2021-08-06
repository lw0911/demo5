$(function(){

	jQuery(".slideBox").slide({mainCell:".bd ul",autoPlay:true});
	//banner
	$(function(){
		var swiper = new Swiper('#swiper-container_ban', {
		pagination: '.swiper-pagination',
		    paginationClickable: true
		});
		
		var swiper = new Swiper('#swiper-container_news', {
		pagination: '.swiper-paginationa',
		    paginationClickable: true
		});
	});
	
});

//nav
$(function(){
	var $hei = $(".header").height();
	var $heig = $("#Nav").height();
//	$("#Nav").css({"top": $heig});
	var mark=1;
	$(".menu").click(function(){
		if(mark==1){
			$(this).addClass("close");
			$('#Nav').animate({"right":"0px"}, 300);
			$(".container").animate({"right":"30%"},300);
			$("#showRight").show();
			mark=2;
		}else if(mark==2){
			$("#Nav").animate({"right": "-30%"},300);
			$(".container").animate({"right":"0px"},300);
			$("#showRight").hide();
			$(this).removeClass("close");
			mark=1;
		}
	});
	$("#showRight").click(function(e) {
		$("#Nav").animate({"right": "-30%" },300);
		$(".container").animate({"right":"0px"},300);
		$("#showRight").hide();
		mark=1;
	});
	$("#Nav").click(function(e) {
		e.stopPropagation();
	});
});
