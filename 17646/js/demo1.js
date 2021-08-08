$(function () {
    //bigbanner滚动动画
    var timer = null;
    $("#bigBanner").mouseover(function () {
        $("#arr").css("display", "block");
        clearInterval(timer);
    });
    $("#bigBanner").mouseout(function () {
        $("#arr").css("display", "none");
        timer = setInterval(playNext, 2500);
    });
    var liLast = $("#bigBanner li:first").clone();
    $("#bannerBox>ul").append(liLast);
    var lis = $("#bigBanner li");
    for (var i = 0; i < lis.length; i++) {
        var li = lis[i];
        if (i === lis.length - 1) {
            $(li).css("backgroundImage", "url(images/bigBanner01.jpg)");
        } else {
            $(li).css("backgroundImage", "url(images/bigBanner0" + (i + 1) + ".jpg)");
        }
    }
//点击banner右边箭头
    var pic = 0;
    $("#right").click(function () {
        playNext();
    });
    timer = setInterval(playNext, 2500);
    function playNext() {
        if (pic === lis.length - 2) {
            pic = 0;
            $("#bannerBox>ul").css("left", 0)

        }
        pic++;
        var target = -1340 * pic;
        $("#bannerBox>ul").animate({"left": target}, 1000);
    }

//点击banner左边箭头
    $("#left").click(function () {
        if (pic === 0) {
            pic = lis.length - 2;
            var tar = -pic * 1340;
            $("#bannerBox>ul").css("left", tar);
        }
        pic--;
        var target = -1340 * pic;
        $("#bannerBox>ul").animate({"left": target}, 1000);
    });

    //鼠标进入li事件
    $("#slide>ul>li").mouseenter(function () {
        //创建span
        var span = $('<span class="bj"></span>');
        $(this).children("a").append(span);
        //创建div
        var div = $('<div class="hgln"></div>');
        $(this).children("a").append(div);
        $(this).find(".hgln").slideDown("slow");
    });
    //鼠标离开li事件
    $("#slide>ul>li").mouseleave(function () {
        $(this).find("span").remove();

        $(this).find(".hgln").slideUp("slow", function () {
            $(this).remove();
        });
    });

//    imageshow动画
    $("#imgShowleft li").mouseenter(function () {
        $(this).stop(true).animate({"height": 270}).siblings().stop(true).animate({"height": 45});
        $(this).find(".menuDiv").stop().slideDown(800);
    });
    $("#imgShowleft li").mouseleave(function () {
        $(this).find(".menuDiv").slideUp();
    });
    $("#imgShowleft").mouseleave(function () {
        $("#imgShowleft li:eq(0)").stop(true).animate({"height": 270}).siblings().stop(true).animate({"height": 45});
        $(".menuDiv:eq(0)").stop().slideDown(800);
    });

    //imageshow右边
    var wrightDivs = $(".wright");
    for (var i = 0; i < wrightDivs.length; i++) {
        var div = wrightDivs[i];
        var zindex = 1;
        var divLeft = parseInt(Math.random() * 590 + 10);
        var divTop = parseInt(Math.random() * 340);
        $(div).animate({"top": divTop, "left": divLeft}, "swing");
        $(div).click(function () {
            zindex++;
            $(this).css("zIndex", zindex);
        });
        $(div).children().dblclick(function () {
            var num = $(this).parent().index();
            $(".wrSpan").css("background", 'url(images/wrapBig0' + (num - 1) + '.jpg) no-repeat center').slideDown();
        });
    }
    $(".wrSpan>.btn").click(function () {
        $(".wrSpan").css("display", "none");
    });

//第二个手风琴动画
    var lis = $("#productWrap li");
    var arr = [];
    for (var i = 0; i < lis.length; i++) {
        var li = lis[i];
        $(li).slideDown();
    }
    $("#productWrap li").mouseenter(function () {
        $(this).stop(true).animate({"width": "800px"}).siblings().stop(true).animate({"width": "100px"});
        $(this).find(".lidiv").animate({"width": "800px", "opacity": 1}, 1500);
        //$(".lidiv").stop(true).animate({"width": "800px"})
    })
    $("#productWrap li").mouseleave(function () {
        $(this).find(".lidiv").animate({"width": "240px", "opacity": 0.2}, 1500);

    })

    $("#productWrap>ul").mouseleave(function () {
        $("#productWrap li").animate({"width": "240px"});
    });
});

