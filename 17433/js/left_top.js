$(function(){
   $(window).scroll(function(){  
	var divcss = {
	position: 'fixed',
	top: '0px'
	};

	var divcss1 = {
	position: 'absolute',
	top: '850px'

	};


	var oTop = document.documentElement.scrollTop || document.body.scrollTop;
	var oBottom = $(window).height()-($(".foot").offset().top-oTop);

    if (oTop >= 850 && oBottom < 0) {
	  if (typeof document.body.style.maxHeight === "undefined") {
		$('.ableft').css('top' ,oTop + 'px');
	  }else {
		$('.ableft').css(divcss);
	  }
    }else if(oBottom >= 0){ 
			$('.ableft').css('bottom' ,oBottom + 'px');
			$('.ableft').css('top' ,'auto');
		
	}else {
		$('.ableft').css(divcss1);

    }		
})
});
