;(function($,win,doc){

    function index(){
        this.init();
    };

    index.prototype = {
        init:function(){
            this.event();
            this.slide();
            this.motelAlert();
            this.scrollShow();
        },
        hover:function(hoverElem){
            this.hoverElem = $(hoverElem);
            var _this =this;
            this.hoverElem.hover(function(){
                _this.hoverElem.removeClass('active');
                $(this).addClass('active').siblings().removeClass('active');
            });
        },
        mouseHover:function(hoverElem){
            this.hoverElem = $(hoverElem);
            var _this =this;
            this.hoverElem.hover(function(){
                $(this).addClass('active');
            },function(){

                $(this).removeClass('active');
            });
        },event:function(){
            $('.header_small_btn').on('click',function(){
                $(this).siblings('.header_small_nav').slideToggle();
            })
        },
        slide:function(){
            this.prevBtn = $('.prev_btn');
            this.nextBtn = $('.next_btn');

            var list = $('.base_list_in li');

            var _this = this;
            
            var showImg = $('.base_in_pic img');
            
            var showText = $('.base_in_text');
            
            this.num = 0;
            list.hover(function(){
                var index = $(this).index();
                 
                _this.num = index;
                
                var curImgSrc = $(this).find('img').attr('src');
                
                var curText = $(this).find('.base_name').text();
                
                
                	showImg.attr('src',curImgSrc);
                	showText.text(curText);
                	
            });
            this.nextBtn.on('click',function(){
                _this.num++;
                if(_this.num>=list.length){
                    _this.num--;
                    return;
                }
                list.eq(_this.num).addClass('active').siblings().removeClass('active');
                
                var curImgSrc = list.eq(_this.num).find('img').attr('src');
                
                var curText = list.eq(_this.num).find('.base_name').text();
                
                
                	showImg.attr('src',curImgSrc);
                	showText.text(curText);
            });
            this.prevBtn.on('click',function(){
                _this.num--;
                if(_this.num<0){
                    _this.num=0;
                    return;
                }
                list.eq(_this.num).addClass('active').siblings().removeClass('active');
            	var curImgSrc = list.eq(_this.num).find('img').attr('src');
                
                var curText = list.eq(_this.num).find('.base_name').text();
                
                
                	showImg.attr('src',curImgSrc);
                	showText.text(curText);
            });
				
				
			

        },
        motelAlert:function(){
            var btn = $('.recruit_check');
            btn.on('click',function(){
                var index = $(this).closest('.recruit_item').index();

                $('.recruit_motel').show();
                $('.recruit_motel_list .motel_item').eq(index).addClass('active').siblings().removeClass('active');
            });
            $('.recruit_motel').on('click',function(){
                $(this).hide();
                $('.recruit_motel_list .motel_item').removeClass('active');
            })
        },
        scrollShow:function () {
                $(window).scroll(function(){
                    var H = $(window).scrollTop();
                    var W = $(window).width()

                    if(H>200&&W>970){
                        $('.fixed_top_scroll ').show();
                    }else{
                        $('.fixed_top_scroll ').hide();
                    }
                });
        }
    }

    win.index = new index();


})(jQuery,window,document);


$(function(){

    index.hover('.about_list li');
    index.mouseHover('.pro_item');
    index.hover('.base_list_in li');
    index.mouseHover('.honor_item');
    index.mouseHover('.recruit_item');
    index.mouseHover('.news_con_item');

    // wow动画插件调用
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100,
        mobile: true,
        live: true
    });
    wow.init();
});