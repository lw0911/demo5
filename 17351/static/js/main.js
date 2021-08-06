$('.carousel').carousel({
  interval: 5000
})
$(function(){
	$(".map iframe").load(function(){
		$(".map .loader").css("display","none")
	})
})
