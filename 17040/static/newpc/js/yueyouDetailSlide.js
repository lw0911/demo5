if($('.btn_play_v').length) {
  $("#slide2 .swiper-slide:gt(0)").on("click", function () {
    $(".logbg").show();
    $("#slide1").show();
    mySwiper1.slideTo($(this).index());
  })
} else {
  $("#slide2 .swiper-slide").on("click", function () {
    $(".logbg").show();
    $("#slide1").show();
    mySwiper1.slideTo($(this).index());
  })
  $('#autop').parent('label').hide();
}

$(function () {
  $("#slide1 .swiper-slide,.c-btn").on("click", function () {
    $(".logbg").hide();
    $("#slide1").hide();
  })
})

var mySwiper1 = new Swiper('#slide1', {
  width: $(window).width() * 0.95,
  hiehgt: ($(window).height() * 0.7),
  freeMode: false,
  pagination: '#pagination1',
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
})
var mySwiper2 = new Swiper('#slide2', {
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true
  },
  freeMode: false,
  freeModeMomentum: false,
  slidesPerView:'auto',
  spaceBetween: 20,
  navigation: {
    prevEl: '.swiper-button-prev',
    nextEl: '.swiper-button-next',
  },
})
