$(function () {
    //bigbanner��������
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
//���banner�ұ߼�ͷ
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

//���banner��߼�ͷ
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

    //������li�¼�
    $("#slide>ul>li").mouseenter(function () {
        //����span
        var span = $('<span class="bj"></span>');
        $(this).children("a").append(span);
        //����div
        var div = $('<div class="hgln"></div>');
        $(this).children("a").append(div);
        $(this).find(".hgln").slideDown("slow");
    });
    //����뿪li�¼�
    $("#slide>ul>li").mouseleave(function () {
        $(this).find("span").remove();

        $(this).find(".hgln").slideUp("slow", function () {
            $(this).remove();
        });
    });

//    imageshow����
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

    //imageshow�ұ�
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

//�ڶ����ַ��ٶ���
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

