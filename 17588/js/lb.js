// JavaScript Document
$(document).ready(function(){ 
　　$("#myTabs>li").mouseover(function(){
		var i = $(this).index();
		$(this).addClass("active").siblings("li").removeClass("active");
		$("#myTabContent>div").eq(i).show().siblings().hide();
	})

		  var ph= $(".panel-heading");
		  $(ph).click(function(){
			$(this).addClass("product_4").parent().siblings(".panel").children(".product_4").removeClass("product_4");   
	      })
   
}); 

$(function() { 
$("img").lazyload({ 
effect : "fadeIn" ,
data_attribute: "attr",
}); 
}); 

