$(function () {

    //首页顶部轮播图
    $('#myCarousel').carousel({
        interval: 3000,
    });
    banner();















    //产品tabs切换
    $('#myTabs a').click(function (e) {
        e.preventDefault()
        $(this).tab('show')
    })
    //产品tabs切换轮播
    $('.carousel').carousel({
        interval: 2000
    })
    //产品轮播图下面产品展示
    //鼠标移动上去滑入阴影和放大镜效果
    $(".page02 ul li a").hover(function () {
        $(this).find("big").animate({top: 0}, 500);
    }, function () {
        $(this).find("big").stop().animate({top: "-100%"});
    });
    //超小屏模式下的产品菜单
    $('.dropdown-toggle').dropdown();
    //导航和顶部固定
    var navbar_h = $(".top_big_box").height();
    $(window).scroll(function () {
        var scrollTop = $(document).scrollTop();
        if (scrollTop >= navbar_h) {
            $(".top_big_box").css({
                "position": "fixed",
                "top": 0
            })
            $(".myBigCarousel").css("margin-top", navbar_h);
        } else {
            $(".top_big_box").css("position", "static");
            $(".myBigCarousel").css("margin-top", 0);
        }
    });
});


//交互
/*轮播图动态数据创建*/
function banner(){
















}


