$(document).ready(function () {
    //首页banner图
    jQuery(".fullSlide").slide({
        titCell: ".hd ul", mainCell: ".bd ul", effect: "fade", autoPlay: true, autoPage: true, trigger: "click", interTime: "6000",
        startFun: function (i) {
            var curLi = jQuery(".fullSlide .bd li").eq(i);
            if (!!curLi.attr("_src")) { curLi.css("background-image", curLi.attr("_src")).removeAttr("_src") }
        }
    });

    //输入框变色
    $('.login_txt li.top10 input').focus(function () {
        $(this).addClass("input_bor");
    });
    $('.login_txt li.top10 input').blur(function () {
        $(this).removeClass('input_bor');
    })

    //精品游戏
    $("#jp_game li").hover(
			function () {
			    $(this).find(".dask").stop().delay(50).animate({ "bottom": 0, opacity: 1 }, 200);
			    $(this).find(".X_bg,p").hide();
			},
			function () {
			    $(this).find(".dask").stop().animate({ "bottom": -70, opacity: 0 }, 200);
			    $(this).find(".X_bg,p").show();
			});

    //玩家论坛
    jQuery("#slideBox").slide({ mainCell: ".bd ul", effect: "left", autoPlay: true });
    jQuery("#slideBox2").slide({ mainCell: ".bd ul", effect: "fade", autoPlay: true, interTime: "3000" });
    //开服列表
    jQuery(".new-actives").slide({ mainCell: ".tab-bd-in", effect: "left", delayTime: 400, pnLoop: true, easing: "easeOutCubic" });

    //游戏大全
    $("#games_nav > li").hover(function () {
        $(this).siblings().removeClass("cur");       
    },
    function () {
        $(this).addClass("cur"); 
    });
});
//新版右侧开服表
function switchTab(n) {
    for (var i = 1; i <= 2; i++) {
        document.getElementById("tab_" + i).className = "";
        document.getElementById("tab_con_" + i).style.display = "none";
    }
    document.getElementById("tab_" + n).className = "on";
    document.getElementById("tab_con_" + n).style.display = "block";
}