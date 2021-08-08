$(function(){
	$(".footer").load("../iframe/footer.html");
	$(".right-contain").load("../iframe/right.html");
	$("#header_box").load("../iframe/header.html",function(response,status){
	if (status=="success"){
				$(".menu_total").hover(function(){
				$(this).find(".menu_drop").stop().slideToggle();
			});
		}
	})


	// 菜单
	
})