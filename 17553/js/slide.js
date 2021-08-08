$(function() {
    var banner = new Swiper('.vr_banner', {
        direction: 'horizontal',
        loop: false,
        autoplay: 3000,
        paginationClickable: true,
        pagination: '.vr_banner_pages'
    });
    var caseApp = new Swiper('.vr_case_slide', {
        direction: 'horizontal',
        loop: false,
        // autoplay: 3000,
        // paginationClickable: true,
        prevButton: '.vr_case_prev',
        nextButton: '.vr_case_next',
    });
    var slide;
    slideView(slide);
    // $(window).resize(function () {
    //     slideView(slide);
    // });
});

function slideView(slide) {
    if ($(window).width() < 768) {
        $('.vr_slide').removeClass('vr_scale');
        slide = new Swiper('.vr_slide', {
            direction: 'horizontal',
            initialSlide: 0,
            loop: true,
            slidesPerView: 1,
            centeredSlides: true,
            prevButton: '.vr_slide_prev',
            nextButton: '.vr_slide_next',
        });
    } else {
        $('.vr_slide').addClass('vr_scale');
        slide = new Swiper('.vr_slide', {
            direction: 'horizontal',
            initialSlide: 1,
            loop: true,
            slidesPerView: 3,
            centeredSlides: true,
            prevButton: '.vr_slide_prev',
            nextButton: '.vr_slide_next',
        });
    }
}