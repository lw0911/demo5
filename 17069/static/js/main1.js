$(function(){	 
	var i = document.body.clientWidth;
	
    $('#fullpage').fullpage({
        'verticalCentered': false,//内容是否垂直居中
        'scrollingSpeed': 800, //滚动速度
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],//锚点
        //'navigation': true,//显示项目导航 圆点
        //'navigationPosition': 'left',//导航位置 left or  right
        //'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple']//导航tip

        	
        
    })
	
   	$('.icon-chevron-up').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionUp();
	});

	$('.icon-chevron-down').click(function(e){
		e.preventDefault();
		$.fn.fullpage.moveSectionDown();
	});
	
	
	
    /*    
    $(".mnav li").click(function(){
    	var i = $(this).index();
    	$(".mnav li").removeClass("active");
    	$(".mnav li").eq(i).addClass("active");
    })*/
   //$(".service").remove(); 
})

/*banner
var swiper = new Swiper('.banner .swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: false,
    autoplayDisableOnInteraction: false
});*/
var mySwiper = new Swiper('#fullpage .banner .swiper-container',{
	pagination: '#fullpage .banner .pagination',
    loop:true,
    paginationClickable: true,
    autoplay:4000,
    slidesPerView: 1
})

var mySwiper2 = new Swiper('#fullpage .solution .swiper-container',{
    paginationClickable: true,
    loop: true,
    autoplay:3000,
    slidesPerView: 3
 });
	$('#fullpage .solution .arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper2.swipePrev()
  });
  $('#fullpage .solution .arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper2.swipeNext()
  });
var mySwiper3 = new Swiper('.news .swiper-container',{
    paginationClickable: true,
    loop: true,
    autoplay:3000,
    slidesPerView: 3
 });
	$('.news .arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper3.swipePrev()
  });
  $('.news .arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper3.swipeNext()
  });
var mySwiper4 = new Swiper('.customer .swiper-container',{
	pagination: '.customer .pagination',
    paginationClickable: true,
    loop: false,
    autoplay:false,
    slidesPerView: 1
 });
 /*
var mySwiper5 = new Swiper('#mobile .solution .swiper-container',{
    paginationClickable: true,
    loop: true,
    autoplay:false,
    slidesPerView: 1
 });
	$('#mobile  .solution .arrow-left').on('click', function(e){
    e.preventDefault()
    mySwiper2.swipePrev()
  });
  $('#mobile  .solution .arrow-right').on('click', function(e){
    e.preventDefault()
    mySwiper2.swipeNext()
  });*/
$(function(){
	$(".service li").mouseenter(function(){
		var i = $(this).index();
		switch(i){
			case 0:$(".service li img").eq(i).attr("src","static/images/service1_2.png");break;
			case 1:$(".service li img").eq(i).attr("src","static/images/service2_2.png");break;
			case 2:$(".service li img").eq(i).attr("src","static/images/service3_2.png");break;
			case 3:$(".service li img").eq(i).attr("src","static/images/service4_2.png");break;
			case 4:$(".service li img").eq(i).attr("src","static/images/service5_2.png");break;
			case 5:$(".service li img").eq(i).attr("src","static/images/service6_2.png");break;
		}		
	});
	$(".service li").mouseleave(function(){
		var i = $(this).index();
		switch(i){
			case 0:$(".service li img").eq(i).attr("src","static/images/service1.png");break;
			case 1:$(".service li img").eq(i).attr("src","static/images/service2.png");break;
			case 2:$(".service li img").eq(i).attr("src","static/images/service3.png");break;
			case 3:$(".service li img").eq(i).attr("src","static/images/service4.png");break;
			case 4:$(".service li img").eq(i).attr("src","static/images/service5.png");break;
			case 5:$(".service li img").eq(i).attr("src","static/images/service6.png");break;
		}
	});
	$(".customer li").mouseenter(function(){
		var i = $(this).index();
		switch(i){
			case 0:$(".customer li").removeClass("active");$(".customer li").eq(i).addClass("active");$(".customer li img").eq(i).attr("src","static/images/kh01_2.png");break;
			case 1:$(".customer li").removeClass("active");$(".customer li").eq(i).addClass("active");$(".customer li img").eq(i).attr("src","static/images/kh02_2.png");break;
			case 2:$(".customer li").removeClass("active");$(".customer li").eq(i).addClass("active");$(".customer li img").eq(i).attr("src","static/images/kh03_2.png");break;
			case 3:$(".customer li").removeClass("active");$(".customer li").eq(i).addClass("active");$(".customer li img").eq(i).attr("src","static/images/kh04_2.png");break;
			case 4:$(".customer li").removeClass("active");$(".customer li").eq(i).addClass("active");$(".customer li img").eq(i).attr("src","static/images/kh05_2.png");break;
			case 5:$(".customer li").removeClass("active");$(".customer li").eq(i).addClass("active");$(".customer li img").eq(i).attr("src","static/images/kh06_2.png");break;
			case 6:$(".customer li").removeClass("active");$(".customer li").eq(i).addClass("active");$(".customer li img").eq(i).attr("src","static/images/kh07_2.png");break;
			case 7:$(".customer li").removeClass("active");$(".customer li").eq(i).addClass("active");$(".customer li img").eq(i).attr("src","static/images/kh08_2.png");break;
		}			
	});
	$(".customer li").mouseleave(function(){
		var i = $(this).index();
		switch(i){
			case 0:$(".customer li").removeClass("active");$(".customer li img").eq(i).attr("src","static/images/kh01_2.png");break;
			case 1:$(".customer li").removeClass("active");$(".customer li img").eq(i).attr("src","static/images/kh02_2.png");break;
			case 2:$(".customer li").removeClass("active");$(".customer li img").eq(i).attr("src","static/images/kh03_2.png");break;
			case 3:$(".customer li").removeClass("active");$(".customer li img").eq(i).attr("src","static/images/kh04_2.png");break;
			case 4:$(".customer li").removeClass("active");$(".customer li img").eq(i).attr("src","static/images/kh05_2.png");break;
			case 5:$(".customer li").removeClass("active");$(".customer li img").eq(i).attr("src","static/images/kh06_2.png");break;
			case 6:$(".customer li").removeClass("active");$(".customer li img").eq(i).attr("src","static/images/kh07_2.png");break;
			case 7:$(".customer li").removeClass("active");$(".customer li img").eq(i).attr("src","static/images/kh08_2.png");break;
		}			
	});
	$(".flow li").mouseenter(function(){
		var i = $(this).index();
		$(".flow li").removeClass("active");
		$(".flow li").eq(i).addClass("active");
	});
	
	$(document).scroll(function(){
		var scroll = $(document).scrollTop();
		if(scroll>50)
		$(".banner header").css("background-color","rgb(0,0,0)");
		else $(".banner header").css("background-color","transparent");
	})
});


