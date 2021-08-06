$(function(){
	$(".con_intr>div").hide();
	$(".con_nav li").mouseenter(function(){
		i = $(this).index();
		if(i>=1&&i<=3){
			$(".con_intr>div").hide();
			$(".con_intr>div").eq(i-1).show();			
		}
	});
	$(".con_right").mouseleave(function(){
		$(".con_intr>div").hide();
	});
	var con_a = 1;
	$(".con_nav>a").click(function(){
		if(con_a == 1){
			$(".con_right ul").hide();
			$(".con_nav>a").css("transform","rotate(45deg)");
			con_a = 0;
		}
		else{
			$(".con_right ul").show();
			$(".con_nav>a").css("transform","rotate(0deg)");
			con_a = 1;
		}
	});
	$(".icon-chevron-up").click(function(){
		$('body,html').animate({scrollTop:0},1000);
	});
	qq_sq = new Array('943527905');
    qq_sz = new Array('943527905');
    qq_sh = new Array('943527905');
    qq_i = Math.floor(Math.random()*qq_sq.length);
    qq_j = Math.floor(Math.random()*qq_sz.length);
    qq_k = Math.floor(Math.random()*qq_sh.length);   
    sr1 = qq_sq[qq_i];
    sr2 = qq_sz[qq_j];
    sr3 = qq_sh[qq_k];
	$(".con_zx li").click(function(){
		var i = $(this).index();
		switch(i){
			case 0:$('.sq').attr('src', "http://wpa.qq.com/msgrd?v=3&uin="+sr1+"&site=qq&menu=yes");break;
			case 1:$('.sz').attr('src', "http://wpa.qq.com/msgrd?v=3&uin="+sr2+"&site=qq&menu=yes");break;
			case 2:$('.sh').attr('src', "http://wpa.qq.com/msgrd?v=3&uin="+sr3+"&site=qq&menu=yes");break;
		}		
	});  
});