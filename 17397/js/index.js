$(function(){
	
	var lbtH = $(".lbt").height();
	var transparentNum = 1;
	var topH = 0;
	$(window).scroll(function(){
		topH = $(document).scrollTop();	//卷入的高度
		if(lbtH >= topH){
			transparentNum = (1-(lbtH - topH)/lbtH).toFixed(2);
		}else{
			topH = lbtH;
		}
		$(".bannerBox").css("background-color","rgba(51,51,51,"+transparentNum+")");
	});
})