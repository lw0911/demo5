$(document).ready(function () {

  

    /*		轮播插件 推荐产品		*/
    var owl = $("#owl-carousel");
    owl.owlCarousel({
        items: '3', 
        loop: true, 
        autoplay: true, 
        mouseDrag: false
    });
    $('.tp').click(function () {
        owl.trigger('next.owl.carousel');
    });
    $('.tp1').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    });

   
})
