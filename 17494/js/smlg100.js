
changecss();	

window.onresize = function(){
	changecss();
}
function changecss(){
	var kuandu = document.documentElement.clientWidth;
	var bannerW=kuandu;
	var diaoqiW=$(".diaoqi ul").width();
	var banner=$("#banner").width(bannerW);
	//alert(bannerW);
	var left=(bannerW-diaoqiW)/2;
	$(".diaoqi ul").css("left",left);
}
var bannerUlL=$(".banner_in ul li").length;
var bannerUlLW=$(".banner_in ul li").width();
var bannerstop=(bannerUlLW*bannerUlL)/2;
$(".banner_in ul").append($(".banner_in ul").html());
var bannerL=$(".banner_in").css("left");

var Marquee_2=50;
setInterval(Marquee2,Marquee_2);
function Marquee2(){	

	$(".banner_in").animate({"left":"-"+Marquee_2+"px"},50);
if(bannerstop < Marquee_2){
	    //clearInterval(MyMar2);
		$(".banner_in").animate("left","0px");Marquee_2=0;}		
	Marquee_2=Marquee_2+3;
} 
$(".show_l_in a img").mouseenter(function(){
	$(this).css({"opacity":"0.5"});
	$(this).siblings().css({"line-height":"112px","color":"#fff","font-size":"14px","font-weight":"bold","display":"block","width":"116px","height":"112px"});
	ieSrcVal=$(this).attr("src");
	ieAltVal=$(this).attr("alt");
	$(this).siblings().append(ieAltVal);
	$(".show_l h3").html(ieAltVal);
	var liNum=$(this).parent().parent().index();
	$(".show_r_in li:eq("+liNum+")").addClass("cur");
	$(".show_r_in li:eq("+liNum+")").siblings().removeClass("cur");	
});
$(".show_l_in a span").mouseleave(function(){
	$(this).siblings().css({"opacity":"1"});
	$(this).css({"background-image":"none","display":"inline","width":"auto","height":"auto"});
	$(this).html("");
});
$(".show_shop_btn div li a").click(function(){
	
	var aLiNum=$(this).html()-1;
	//alert(aLiNum);
	$(".show_shop_btn div li:eq("+aLiNum+")").addClass("btn_cur");
	$(".show_shop_btn div li:eq("+aLiNum+")").siblings().removeClass("btn_cur");	
	$(".show_shop_l_in li:eq("+aLiNum+")").addClass("cur");
	$(".show_shop_l_in li:eq("+aLiNum+")").siblings().removeClass("cur");		
});
var showTime=1000;
var pro=setInterval(product,showTime);
var i=0;
function product(){
	var numBtn=$(".show_shop_btn li").length;
	var numShop=$(".show_shop_l_in li").length;

	if(i<=numBtn){
		$(".show_shop_btn div li:eq("+i+")").addClass("btn_cur");
		$(".show_shop_btn div li:eq("+i+")").siblings().removeClass("btn_cur");	
		$(".show_shop_l_in li:eq("+i+")").addClass("cur");
		$(".show_shop_l_in li:eq("+i+")").siblings().removeClass("cur");
		i++;
	}else{i=0;}

}
$(".show_shop_l").mouseenter(function(){
	clearInterval(pro);
});
$(".show_shop_l").mouseleave(function(){
	pro=setInterval(product,showTime);
});
$("#squeezebox .one_in").css({"z-index":"0","top":"-248px"});
$("#squeezebox .two_img").css({"z-index":"0","top":"-548px"});  
$("#squeezebox div").mouseenter(function(){
	$(this).css("z-index","3");
	$(this).siblings().css("z-index","0");
	var num1=$("#squeezebox .one").css("z-index");
	var num2=$("#squeezebox .two").css("z-index");
	var num3=$("#squeezebox .three").css("z-index");
	//alert(num1);
	if(num1==3){
	   $("#squeezebox .one h3").css({"width":"163px","height":"41px","background-image":"url(images/jmdt_s.png)","top":"24px","left":"24px","right":"auto","z-index":"3"});
	   $("#squeezebox .one_in").css({"z-index":"0","top":"75px"});	   
	   $("#squeezebox .two").css({"left":"auto","right":"73px","z-index":"2"});
	   $("#squeezebox .two_txt").css({"top":"-548px","left":"0"});  
	   $("#squeezebox .two h3").css({"background-image":"url(images/ppgs_s.png)","width":"25px","height":"88px","top":"163px","left":"auto","right":"-1000px"});
	   $("#squeezebox .three h3").css({"background-image":"url(images/jtxw.png)","width":"25px","height":"88px","top":"163px","left":"auto","right":"-998px"});
	}
	if(num2==3){
	   $("#squeezebox .one h3").css({"background-image":"url(images/jmdt.png)","width":"25px","height":"88px","top":"163px","left":"24px","right":"auto","z-index":"1"});
	   $("#squeezebox .one_in").css({"z-index":"0","top":"-248px"});
	   $("#squeezebox .two_img").css({"z-index":"0","top":"0"});  	   
	   $("#squeezebox .two_txt").css({"left":"0","top":"0","z-index":"6"});	   
	   $("#squeezebox .two h3").css({"background-image":"url(images/ppgs.png)","width":"131px","height":"41px","top":"14px","left":"-11px","right":"auto"});
	   $("#squeezebox .three h3").css({"background-image":"url(images/jtxw.png)","width":"25px","height":"88px","top":"163px","left":"auto","right":"-998px"});
	}
	if(num3==3){
	   $("#squeezebox .one h3").css({"background-image":"url(images/jmdt.png)","width":"25px","height":"88px","top":"163px","left":"24px","right":"auto","z-index":"1"});
       $("#squeezebox .one_in").css({"z-index":"0","top":"-248px"});
	   $("#squeezebox .two_img").css({"z-index":"0","top":"-548px"});
	   $("#squeezebox .two_txt").css({"left":"-600px"}); 	   
	   $("#squeezebox .two h3").css({"background-image":"url(images/ppgs_s.png)","width":"25px","height":"88px","top":"163px","left":"24px","right":"auto"});		   
	   $("#squeezebox .three h3").css({"background-image":"url(images/jtxw_s.png)","width":"85px","height":"28px","top":"24px","left":"24px","right":"auto"});	
	}	
  });
var speed=10; //滚动速度
var FGDemo=$("#squeezebox .one"); //获取父容器
var FGDemo1=$("#squeezebox .one_in"); //获取第一个div
var FGDemo2=FGDemo1.append(FGDemo1.html()); //获取第二个
var gdi=1;
function Marquee1(){ 
	var myHeight=$(".one_txt").css("height");
	var myHeight=parseInt(myHeight);
	var myTop=$(".one_txt").css("top");
	var myTop=parseInt(myTop);
	//alert(myHeight);
	//alert(myTop);
	if(Math.abs(myTop) < myHeight){
		
		$(".one_txt").css("top","-"+gdi+"px");
		gdi=gdi+1;
	}else{$(".one_txt").css("top","0px");gdi=1;}
} 
var MyMar1=setInterval(Marquee1,speed);
$("#squeezebox .one_in .one_txt").mouseenter(function(){
	clearInterval(MyMar1);
});
$("#squeezebox .one_in .one_txt").mouseleave(function(){
	MyMar1=setInterval(Marquee1,speed);
});
var artHeight=$(".art_txt").height() || $(".right").height() ;
if(artHeight<=104){
	$(".b").height("849");
}
if(artHeight<=204 && artHeight>=104){
	$(".b").height("749");    
}                             
if(artHeight<=304 && artHeight>=204){
	$(".b").height("649");    
}                             
if(artHeight<=404 && artHeight>=304){
	$(".b").height("549");    
}                             
if(artHeight<=504 && artHeight>=404){
	$(".b").height("449");    
}                             
if(artHeight<=604 && artHeight>=504){	
	$(".b").height("349");    
}                             
if(artHeight<=704 && artHeight>=604){	
	$(".b").height("249");    
}                             
if(artHeight<=804 && artHeight>=704){	
	$(".b").height("149");
}
if(artHeight>=904){	
	$(".b").height("0");
}