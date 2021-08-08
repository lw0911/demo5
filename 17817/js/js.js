$(document).ready(function(){
	var num = 0;
	function move(){
		if(num == -550){
			num = 0;
		}
		num-=1;
		$(".notice").css({left:num})
	}
	var timer = setInterval(move,20)
})
var mySwiper = new Swiper ('.swiper-container',{
	  	direction: 'horizontal',
	  	loop: true,
	  	autoplay:true,
 		pagination: {
      		el: '.swiper-pagination',
    	}
})


$(".Xopen").click(function () {
	$(".Xhide").show();
})
$(".Xhide li").click(function () {
	event.stopPropagation();
	var ind = $(".Xhide li").index(this);
	$(".Xopen").find('input').val($(".Xhide li").get(ind).textContent);
	$(".Xhide").hide();

})

$(".Alist_tR li").click(function(){
	$(".Alist_tR li").removeClass();
	$(this).addClass("AlistHover");
})
$(".Alist_cR li").click(function(){
	$(".Alist_cR li").removeClass();
	$(this).addClass("AlistHover");
})
$(".Alist_bR li").click(function(){
	$(".Alist_bR li").removeClass();
	$(this).addClass("AlistHover");
})