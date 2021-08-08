/*! 作者：nissachang  www.nissachang.com*/
$(function(){
	var w = parseInt(($(window).width()-$(".container").width())/2+300);
	$(".toptip_bgc").width(w);
	$(".recruit li:even").addClass("rcline");
	

 	$('#newslist li').eq(0).addClass("cur")
	$("#newslist li").hover(
	  function () {
		$(this).addClass("cur").siblings().removeClass("cur");
	  },
	  function () {
		$(this).removeClass("cur");
		$('#newslist li').eq(0).addClass("cur")
	  }
	);
	
})
 
$(function(){
  $(".search_bg").click(function(){
    $("#formsea").fadeToggle(300);
  });
});
 