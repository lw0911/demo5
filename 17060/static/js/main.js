//$(function(){
//	$(".prore-nav li").mouseenter(function(){
//		var i = $(this).index();
//		$(".prore-nav li").removeClass("active");
//		$(".prore-nav li").eq(i).addClass("active");
//	})
//})
$(function(){
	var winHeight = $(window).height();
	var bodHeight = $("body").height();
	if(bodHeight<winHeight){
		var temp = winHeight - bodHeight;
		$(".space").css("height",temp);
	}
});

$(function(){
	$(".hover-li li").mouseenter(function(){
		var i = $(this).index();
		$(".hover-li li").removeClass("active");
		$(".hover-li li").eq(i).addClass("active");
		$(".ch-li>div").css("display","none");
		$(".ch-li>div").eq(i).css("display","block");
	})
});

$(".map iframe").load(function(){
	$(".map span").css("display","none");
})
