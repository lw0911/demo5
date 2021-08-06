// JavaScript Document
$(document).ready(function(){
	 $('.bxslider').bxSlider({
			pager: false,
			auto: true,
			speed: 1000,
			nextSelector: '.next',
			prevSelector: '.prve'
				});
			});
//
$(document).ready(function(){
$(".pro_list_warpper").jqtab();	
$(".banner_box").hover(function(e){
	$(".prve").stop(true,true).animate({left:'50%',opacity:'1'});
	$(".next").stop(true,true).animate({right:'50%',opacity:'1'});
	},function(e){
	  $(".prve").stop(true,true).animate({left:'48%',opacity:'0'});
	  $(".next").stop(true,true).animate({right:'48%',opacity:'0'});
	});
	});
			
//
$(document).ready(function(){
   $(".index_pro_list li:nth-child(3n)").css("margin-right", 0);
   $(".superiority_list li").css("opacity", 0)
   $(".superiority_list li:nth-child(3n)").css("margin-right", 0);
function sA(a,b,c,d,e,f){if(!f)var f=a;a.animate(b,d||"normal",function(){if(a.animate(c,d||"normal"),a.next().length)sA(a.next(),b,c,d,e,f);else{if(0===e)return!1;"number"!=typeof e?e="forever":e--,(e||"forever"==e)&&sA(f,b,c,d,e,f)}})}
			window.onscroll=function(){
				var aht=(document.body.scrollTop) + (document.documentElement.scrollTop);
				var once = $("#s1").hasClass("active")
				if(aht>2000 && !once){
					sA($(".superiority_list li").eq(0), {"opacity": 0,"top": "10px"}, {"opacity": 1,"top": "0px"},300,1);
					$('#s1').addClass("active");
				}
			}
			});