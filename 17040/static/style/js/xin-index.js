

$(function(){
	$('.mainlists dd,.conside dd,.Alltable dd,.Stable dd,.Pclist').mouseenter(function(){
		$(this).addClass("curr Pcnow").siblings().removeClass("curr Pcnow")
	})
	$('.mainlists dd,.Stable dd,.Pclist').mouseleave(function(){
		$(this).removeClass("curr Pcnow")
	})
	$('.sidenav li').mouseenter(function(){
		        $(this).addClass("curr").siblings().removeClass("curr");
        var e = $(".sidenav li").index($(this));
        $(".Stable").eq(e).show().siblings(".Stable").hide()
	})

 });