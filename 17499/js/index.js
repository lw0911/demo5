$(function () {

    $('#product').mouseover(function () {

        $('#product>a').css({
            'color':'red'
        })

        $('#nav_out').slideDown(500,function () {

        });
        $('.figure').mouseover(function () {
            $('#nav_out').slideUp(500,function () {
                $('#product>a').css({
                    'color':'white'
                })
            });
        })

    });










    var mySwiper = new Swiper ('.swiper-container', {
        direction:'horizontal',//横着滑动
        loop: true,

        autoplay:4000,
//分页器
        pagination: '.swiper-pagination',
        paginationClickable:true,


    });






});

