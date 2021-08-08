//轮播
var i = 0;
var timer;
$(function() {

	$(".ig").eq(0).show().siblings().hide(); /*获取到第一张图片并显示*/

	ShowTime(); /*开始轮播*/

	$(".tab").hover(function() { /*鼠标移动到底部选项卡和移出到底部选项卡的变化*/

		i = $(this).index();
		Show();
		clearInterval(timer); /*消除轮播*/

	}, function() {

		ShowTime();
	});

	$(".btn1").click(function() { /*点击上一个*/
		clearInterval(timer);
		if(i == 0) {
			i = 4
		}
		i--;
		Show();
		ShowTime();

	});

	$(".btn2").click(function() { /*点击下一个*/
		clearInterval(timer);
		if(i == 3) {
			i = -1
		}
		i++;
		Show();
		ShowTime();

	});

});

function Show() {

	$(".ig").eq(i).fadeIn(400).siblings().fadeOut(400); /*渐变显示渐变隐藏*/
	$(".tab").eq(i).addClass("bg").siblings().removeClass("bg"); /*跟随轮播设置样式.siblings().removeClass("bg");是兄弟关系的移除bg样式*/
}

function ShowTime() { /*循环轮播*/
	timer = setInterval(function() {
		i++;
		if(i == 4) {
			i = 0;
		}

		Show();

	}, 4000)

}

$(function() {

	$(".ph-menu").click(function() {

		$(".ph_h,.ph_hed").toggle(300);

	});

	$(".all").hover(function() {
		$(".allnav,.san").show();
	}, function() {
		$(".allnav,.san").hide();
	});

})