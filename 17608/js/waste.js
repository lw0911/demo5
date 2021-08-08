$(function(){
	//页面导入
	$.get("head.html",function(html){$("body").prepend(html);nav();});
	$.get("foot.html",function(html){$("body").append(html);nav();});	
})