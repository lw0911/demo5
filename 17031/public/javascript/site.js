var swiper = new Swiper('.swiper-container', {
    pagination: {
      el:'.swiper-pagination',
    },autoplay: { delay:5000 }
});

var swiper = new Swiper('.notice_box', {
    slidesPerView: 1,
    direction:'vertical',
    loop: true,
    pagination: {
      el: '.pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },autoplay: { delay:5000 }
});

new WOW().init();

//返回顶部
$(function(){
    $("#goTop").hide();
    $(window).scroll(function(){ 
        if ($(window).scrollTop()>100){ 
            $("#goTop").fadeIn(1500); 
        } 
        else{ 
            $("#goTop").fadeOut(1500); 
        } 
    });
    $("#goTopBtn").click(function(){
        $('body,html').animate({scrollTop:0},500); 
        return false; 
    });
})
