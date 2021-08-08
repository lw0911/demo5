var customerLogoLeft=224+20;
var customerLogoMarginLeft=20;
var customerLogoScreenmun=5;

var customerLeft=632;
var customerMarginLeft=64;
var customerScreenmun=2;
/*screen*/
screenWidth=$(window).width();
if(screenWidth>=1200){

}else if(screenWidth>=1024&&screenWidth<1200){
customerLogoLeft=181+18;
customerLogoMarginLeft=14;
customerLogoScreenmun=5;

customerLeft=462+56;
customerMarginLeft=56;
customerScreenmun=1;
}else if(screenWidth>=640&&screenWidth<1024){
customerLogoLeft=180+29;
customerLogoMarginLeft=27;
customerLogoScreenmun=3;

customerLeft=600;
customerMarginLeft=0;
customerScreenmun=1;
}else if(screenWidth>=320&&screenWidth<640){

customerLogoLeft=90+14;
customerLogoMarginLeft=11;
customerLogoScreenmun=3;

customerLeft=$(".customerContent").width();
customerMarginLeft=0;
customerScreenmun=1;
}

$(function(){
	$("#vedioChild").click(function(){
		$(".vedioHide").fadeIn(500);
		$(".vedioContent").delay(100).fadeIn(500);
	});
	$(".vedioClose").click(function(){
		$(".vedioHide").fadeOut(500);
		$(".vedioContent").delay(100).fadeOut(500);
	});
	
	$(".customer .customerBtn").mouseover(function(){
		var imageSrc=$(this).attr("src");
		if(imageSrc.indexOf("On.png")>0){}else{
			imageSrc=imageSrc.replace(".png","On.png");
		}
		$(this).attr("src",imageSrc);
	}).mouseleave(function(){
		var imageSrc=$(this).attr("src");
		if(imageSrc.indexOf("On.png")>0){
			imageSrc=imageSrc.replace("On.png",".png");
		}else{}
		$(this).attr("src",imageSrc);
	});
});