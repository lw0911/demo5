$(function() {
	var sWidth = $("#ele_zsMove").width(); //获取焦点图的宽度（显示面积）
	var len = $("#ele_zsMove ul li").length; //获取焦点图个数
	var index = 0;
	var picTimer;
	
	//以下代码添加数字按钮和按钮后的半透明条，还有上一页、下一页两个按钮
	var btn = "<div class='btnBg'>";
	for(var i=0; i < len; i++) {
		btn += "<span></span>";
	}
	btn += "</div>";
	$("#ele_zsMove").append(btn);

	//为小按钮添加鼠标滑入事件，以显示相应的内容
	$("#ele_zsMove .btnBg span").mouseover(function() {
		index = $("#ele_zsMove .btnBg span").index(this);
		showPics(index);
	}).eq(0).trigger("mouseover");


	//本例为左右滚动，即所有li元素都是在同一排向左浮动，所以这里需要计算出外围ul元素的宽度
	$("#ele_zsMove ul").css("width",sWidth * (len));
	
	//鼠标滑上焦点图时停止自动播放，滑出时开始自动播放
	$("#ele_zsMove").hover(function() {
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
		var nowLeft = -index*sWidth; //根据index值计算ul元素的left值
		$("#ele_zsMove ul").stop(true,false).animate({"left":nowLeft},300); //通过animate()调整ul元素滚动到计算出的position
		$("#ele_zsMove .btnBg span").removeClass("on").eq(index).addClass("on"); //为当前的按钮切换到选中的效果
	}
});
