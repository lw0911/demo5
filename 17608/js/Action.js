$(window).load(function(){
	//导航
	nav();
	GetRequest();
	initclass();
	$(".Services").each(function() {
        var m=$(this).find("dl").size();
		for(i=1;i<=m;i++){
			if( i % 4 == 3 ){
				$(this).find("dl").eq(i).addClass("mr0");
			}
		}
    });
	input(".textarea");
	input(".form-tab .inpt");
	//main
	$("#main .txt").hover(function(){
		/*var top=$(this).position().top,
		    top_hover=top-6;*/
		$(this).animate({
			marginTop:"-6px"
		},"fast")
	},function(){
		$(this).animate({
			marginTop:"0"
		},"fast")
	})
})

//导航高亮
function nav(){
	var _nav = $("body").attr("cur");
	if (_nav != "" && (!isNaN(_nav))) {
		$(".nav>li").eq(_nav).addClass("current");
	}
	$(".nav>li").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
}
//判断路径，给左边菜单加样式
function GetRequest() {
	var str=location.pathname;
	a=str.substr(str.lastIndexOf("/")+1);
	$(".sidenav a").each(function() {
		var a_h=$(this).attr("href");
		if(a==a_h){
			$(this).parents("li").addClass("current");
		}
	});
}
//产品页面条件筛选为选中的条件加样式
function initclass() {
	var id = getQueryStringByName("id");
	if (!isNaN(id)) {
		var url = "about.html?id=" + id;
		$(".sidenav li a[href='" + url + "']").parents("li").addClass("current");
		var url2 = "Affiliate.html?id=" + id;
		$(".sidenav li a[href='" + url2 + "']").parents("li").addClass("current");
	}
}
//根据QueryString参数名称获取值
function getQueryStringByName(name) {
	var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
	if (result == null || result.length < 1) {
		return "";
	}
	return result[1];
}
//--输入框内提示-------------
function input(a){
$(a).each(function(){
	var thisVal=$(this).val();
	if(thisVal!=""){
		$(this).siblings("span").hide();
		}
	else{
		$(this).siblings("span").show();
		}
	$(this).focus(function(){
		$(this).siblings("span").hide();
	}).blur(function(){
		var val=$(this).val();
		if(val!=""){
			$(this).siblings("span").hide();
			}
		else{
			$(this).siblings("span").show();
			} 
	});
});
}		
//字数限制
function words_deal(){var a=$("#TextArea1").val().length;if(a>500){var b=$("#TextArea1").val().substr(0,500);$("#TextArea1").val(b),alert("\u8d85\u8fc7\u5b57\u6570\u9650\u5236\uff0c\u591a\u51fa\u7684\u5b57\u5c06\u88ab\u622a\u65ad\uff01")}else $("#textCount").text(500-$("#TextArea1").val().length)}
