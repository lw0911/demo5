// JavaScript Document
$(document).ready(function(e) {
	var url = window.location.href;		//获取当前URL
	if(url.indexOf("/about")>=0){
		$(".pcto_menu_xun ").eq(1).addClass('on');			
	}
	else if(url.indexOf("/product")>=0){
		$(".pcto_menu_xun ").eq(2).addClass('on');			
	}
	else if(url.indexOf("/service")>=0){
		$(".pcto_menu_xun ").eq(3).addClass('on');			
	}
	else if(url.indexOf("/new")>=0){
		$(".pcto_menu_xun ").eq(4).addClass('on');			
	}
	else if(url.indexOf("/job")>=0){
		$(".pcto_menu_xun ").eq(5).addClass('on');			
	}
	else if(url.indexOf("/contact")>=0){
		$(".pcto_menu_xun ").last().addClass('on');			
	}
	else{
	    $(".pcto_menu_xun ").eq(0).addClass('on');		
	}
    
	if(url.indexOf("/en/")>=0&&$(".fenye").length>0){
		var len=$(".fenye_nei a").length;
		var ht;
		for(var i=0;i<len;i++){
		    ht=$(".fenye_nei a").eq(i).html();
			if(ht=="上一页"){
				$(".fenye_nei a").eq(i).html("PREVIOUS");	
			}	
			else if(ht=="下一页"){
				$(".fenye_nei a").eq(i).html("NEXT");	
			}
		}
	}
});
$(document).ready(function(e) {
	//下拉菜单
    $(".menuicon").click(function(){
	     $(".moxiala").slideToggle();	
	});
	//产品中心下拉菜单
    $(".proxiala_chakan").click(function(){
	     $(".proxiala_menu").slideToggle();	
	});
});

$(document).ready(function(e) {
	var oldh=$(".indexabout_box").height();
	
    $(".iaov .iaov2").click(function(){
		$(this).hide();
		$(".iaov .iaov1").show();
	    $(".indexabout_box").css({"height":"240px"});	
	});
    $(".iaov .iaov1").click(function(){
		$(this).hide();
		$(".iaov .iaov2").show();
	    $(".indexabout_box").css({"height":"auto"});	
	});
});

$(document).ready(function(e) {
	var zi=window.setInterval(function(){
		$(".moxl").height(($(window).height()-50));
		//$(".moxl_box").width(($(window).width()));
	},1);
	var a=-1,ind;
	$(".openicon").click(function(){
		$(this).hide();
		$(".cloesicon").show();
		$(".moxl").css({"left":0});
		$("body").css("overflow","hidden");
		s=1;
	});
	
	$(".cloesicon").click(function(){
		$(this).hide();
		$(".openicon").show();
		$(".moxl").css({"left":"-100%"});
		$(".moxl_xun_img2").click();
		$("body").css("overflow","inherit");
		s=0;
	});
	$(".moxl_xun_img1").click(function(){
		$(".moxl_xun_img1").show();
		$(this).hide();
		$(".moxl_xun_img2").hide();
		$(this).next().show();
		$(".moxl_erji").slideUp();
		ind=$(this).parents(".moxl_xun").index();
		if(a!=ind){
			$(this).parents(".moxl_xun").find(".moxl_erji").slideDown();
		    a=ind;
		}else{
		   	a=-1;
		}
	});
	$(".moxl_xun_img2").click(function(){
		$(".moxl_xun_img1").show();
		$(this).hide();
		$(".moxl_xun_img2").hide();
		$(".moxl_erji").slideUp();
		a=-1;
	});
	
});


//招聘列表展开收起
$(document).ready(function(e) {
	var oldind=-1,newind;
    $(".job_liebiao .job_liebiao_title").click(function(){
	     newind=$(this).index();
		 $(".job_liebiao_box").slideUp();
		 $(".job_liebiao_title").removeClass("on");	
		 if(newind!=oldind){
			$(this).addClass("on"); 
			$(this).next(".job_liebiao_text").find(".job_liebiao_box").slideToggle();
			oldind=newind;
		 }else{oldind=-1}
	});
});
