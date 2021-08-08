$(function() {

	//var sWidth = $("#focusindex").width(); //获取焦点图的宽度（显示面积）

	var len = $("#focusindex ul li").length; //获取焦点图个数

	var index = 0;

	var picTimer;

	

	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮

	var btn = "<div class='btn'>";

	for(var i=0; i < len; i++) {

		btn += "<span></span>";

	}

	btn += "</div><div class='preNext2 pre2'></div><div class='preNext2 next2'></div>";

	$("#focusindex").append(btn);



	//为小按钮添加鼠标滑入事件，以显示相应的内容

	$("#focusindex .btn span").css("opacity",1).mouseover(function() {

		index = $("#focusindex .btn span").index(this);

		showPics(index);

	}).eq(0).trigger("mouseover");



	//上一页、下一页按钮透明度处理

/*	$("#focusindex").hover(function() {

		$("#focusindex .pre").animate({"left":"10%","opacity":"1"},300);

		$("#focusindex .next").animate({"right":"10%","opacity":"1"},300);

	},function() {

		$("#focusindex .pre").animate({"left":"0%","opacity":"0"},300);

		$("#focusindex .next").animate({"right":"0%","opacity":"0"},300);

	});*/



	//上一页按钮

	$("#focusindex .pre2").click(function() {

		index -= 1;

		if(index == -1) {index = len - 1;}

		showPics(index);

	});



	//下一页按钮

	$("#focusindex .next2").click(function() {

		index += 1;

		if(index == len) {index = 0;}

		showPics(index);

	});

	

	//IPAI

	$("#focusindex").on("swipeleft",function(){

		index -= 1;

		if(index == -1) {index = len - 1;}

		showPics(index);

	});

$("#focusindex").on("swiperight",function(){

		index += 1;

		if(index == len) {index = 0;}

		showPics(index);

	});





	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度

	//$("#focusindex ul").css("width",sWidth * (len));

	

	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放

	$("#focusindex").hover(function() {

		clearInterval(picTimer);

	},function() {

		picTimer = setInterval(function() {

			showPics(index);

			index++;

			if(index == len) {index = 0;}

		},4000); //此4000代表自动播放的间隔，单位：毫秒

	}).trigger("mouseleave");

	

	//显示图片函数，根据接收的index值显示相应的内容

	function showPics(index) { //普通切换

		//var nowLeft = -index*sWidth; //根据index值计算ul元素的left值

		//$("#focusindex ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position

		//$("#focusindex .btn span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果

		$("#focusindex .btn span").stop(true,false).removeClass("on").eq(index).stop(true,false).addClass("on"); //为当前的按钮切换到选中的效果

		$("#focusindex ul li").stop(true,false).animate({"opacity":"0"},300).css("z-index",0).removeClass("bannerdh").eq(index).stop(true,false).animate({"opacity":"1"},300).addClass("bannerdh").css("z-index",1); //为当前的按钮切换到选中的效果

	}

});