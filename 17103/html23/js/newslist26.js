
	$(document).ready(function(){
		$("ul.newslist26").find("a:first").css({fontWeight:"bold"});
		$("ul.newslist26").find("div.memo:first").show();
		$("ul.newslist26").find("img:first").show();
		$("ul.newslist26").find("div.time:first").hide();
		$("ul.newslist26").find("li").mouseover(function(){
			$("ul.newslist26").find("a").css({fontWeight:"normal"});
			$("ul.newslist26").find("div.memo").hide();
			$("ul.newslist26").find("img").hide();
			$("ul.newslist26").find("div.time").show();
			$(this).find("a").css({fontWeight:"bold"});
			$(this).find("div.memo").show();
			$(this).find("img").show();
			$(this).find("div.time").hide();
		
		});
	});
