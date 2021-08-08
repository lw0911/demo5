$(function () {

    //首页顶部轮播图
    $('#myCarousel').carousel({
        interval: 3000,
    });



    //产品轮播图下面产品展示
    //鼠标移动上去滑入阴影和放大镜效果

    $(".page02 ul li a").hover(function () {
        $(this).find("big").animate({top: 0}, 500);
    }, function () {
        $(this).find("big").stop().animate({top: "-100%"});
    });


    //超小屏模式下的产品菜单
    $('.dropdown-toggle').dropdown();

    //隐藏菜单
    $("#left").on("click", function () {
        $("#right").hide();
        $("#left").hide();
        $("#left_fixed").show();
    })
    $("#left_fixed").on("click", function () {
        $("#right").show();
        $("#left").show();
        $("#left_fixed").hide();
    })





});