$(window).load(function(){
	size();
	//导航定位
	//$(".daohang li:eq(0) a:first").addClass("navCur");
	$(".select").each(function(){
		//var s=$(this);
		//var z=parseInt(s.css("z-index"));
		//var dt=$(this).children("dt");
		//var dd=$(this).children("dd");
		//var _show=function(){dd.slideDown(200);dt.addClass("cur");s.css("z-index",z+1);};   //展开效果
		//var _hide=function(){dd.slideUp(200);dt.removeClass("cur");s.css("z-index",z);};    //关闭效果
		//dt.click(function(){dd.is(":hidden")?_show():_hide();});
		//dd.find("a").click(function(){dt.html($(this).html());_hide();});     //选择效果（如需要传值，可自定义参数，在此处返回对应的“value”值 ）
		//$("body").click(function(i){ !$(i.target).parents(".select").first().is(s) ? _hide():"";});
		
		var dt=$(this).find("dt"),
		    dd=$(this).find("dd");
	    dt.click(function(){$(this).siblings("dd").stop().slideToggle("fast");return false;})
		$("body").click(function(){ $(".select dd").slideUp("fast")});
	})
	
	
	/*产品详情选项卡*/
	$(".proinfoDtaList:first").show();
	$(".proinfoDtaEq li").click(function(){
		$(this).addClass("eqCur").siblings("li").removeClass("eqCur");
		var proindex=$(this).index();
		$(".proinfoDtaList").eq(proindex).show().siblings(".proinfoDtaList").hide();
		})
	//我要留言
	$(".liuyan").click(function(){
		$(".messages").fadeIn();
		})
	$(".close").click(function(){
		$(".messages").fadeOut();
		})
	//培训管理列表
	 //列表第1、4、7个添加 trainingList1 作用去除左边距
	$(".trainingList:eq(0),.trainingList:eq(3),.trainingList:eq(6)").addClass("trainingList1")
	//列表大于第三个 添加 trainingList2 增加上边距
	$(".trainingList:gt(2)").addClass("trainingList2")
	 //列表第3、6、9个添加 borRight0 作用去除有边框
	$(".trainingList:eq(2),.trainingList:eq(5),.trainingList:eq(8)").addClass("borRight0");
	//我的习性 点击展开收起效果	
	$(".znxx dt:first em b").hide();
	$(".znxx dt:first em i").show();
	$(".znxx dt:first").next("dd").show();
	$(".znxx dt em").click(function(){
		$(this).find("b").toggle();
		$(this).find("i").toggle();
		$(this).parents("dt").next("dd").toggle().siblings("dd").hide();
		})	
})
function size(){
	var w=$(window).width(),
	   r=(w-1100)*0.5;
	$(".regbox").css("right",r);
}
//导航高亮
function nav(){
	var _nav = $("body").attr("cur");
	if (_nav != "" && (!isNaN(_nav))) {
		$(".nav>li").eq(_nav).addClass("active");
	}
}
//判断路径，给左边菜单加样式
function GetRequest() {
	var str=location.pathname;
	a=str.substr(str.lastIndexOf("/")+1);
	$(".side-nav a").each(function() {
		var a_h=$(this).attr("href");
		if(a==a_h){
			$(this).parents("li").addClass("active");
		}
	});
}
//产品页面条件筛选为选中的条件加样式
function initclass() {
	var id = getQueryStringByName("id");
	if (!isNaN(id)) {
		$(".Grouplist .job").eq(id).find(".job-bd").show().siblings(".job-hd").addClass("active");/*
		var url = "Group.html?id=" + id;
		$(".nav-pills li a[href='" + url + "']").parents("li").addClass("active").siblings("li").removeClass("active");*/
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
//字数限制
function words_deal(){var a=$("#TextArea1").val().length;if(a>500){var b=$("#TextArea1").val().substr(0,500);$("#TextArea1").val(b),alert("\u8d85\u8fc7\u5b57\u6570\u9650\u5236\uff0c\u591a\u51fa\u7684\u5b57\u5c06\u88ab\u622a\u65ad\uff01")}else $("#textCount").text(500-$("#TextArea1").val().length)}
