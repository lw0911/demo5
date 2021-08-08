$(function(){
	$(".main .childPointer").click(function(){
		var parent=$(this).parent();
		parent.find(".childContent").slideToggle(500);
		$(this).toggleClass("on");
	});
});



setnavon();
function setnavon(){
	 var  patrn=/^\d*$/;   
	 var str = window.location.href;
	 var m = str.indexOf('id');
	 var n = str.substr(m+3,2);	
	 if((patrn.test(n))){	
	 	
	 	 var top=parseInt($("#jobChild"+n).offset().top);
		 var headerTop=parseInt($(".header").css("height"));
		 top=top-headerTop;
		 $('body').animate({scrollTop:top},500,function(){
			$("#jobChild"+n).find(".childPointer").click();;
		 });		 
	 }	
}