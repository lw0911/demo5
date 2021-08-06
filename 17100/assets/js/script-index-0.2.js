//JavaScript Document
(function($){
	$(window).ready(function(){
		/* tipAction 信息提示 */
			function getUtc() {
			    var d = new Date();
			    return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
			}
			 $.tipAction = function (type, msg) {
                var timeId = getUtc(), time = 2000;
                if ($('#UI-tips').length > 0) {
                    $('#UI-tips').remove();
                }
                if(type === 'success'){
                    time = 700;
                }
                $('body').append('<div id="UI-tips"><div class="UI-tips-common UI-tips-' + type + ' UI-tips-' + timeId + '"><div class="tips-content">' + msg + '</div></div></div>');
                $('#UI-tips').show();
                setTimeout(function () {
                    $('#UI-tips .UI-tips-common').fadeOut(300);
                    setTimeout(function () {
                        $('#UI-tips').remove();
                    }, 300);
                }, time);
            };
            if ($('#UI-tips').length > 0) {
                setTimeout(function () {
                    $('#UI-tips .UI-tips-common').fadeOut(300);
                    setTimeout(function () {
                        $('#UI-tips').remove();
                    }, 300);
                }, time);
            }
		/* tipAction 信息提示结束 */

		/* 弹窗关闭 */
            $('.overlay .con-close').click(function(event) {
                event.preventDefault();
                $(this).closest('.overlay').hide();
                $('body').removeClass('overhidden');
                isscro = 1;
                if(player){
                    player.pause();
                }
            });
            $('.overlay').click(function() {
                var ths = $(this);
                ths.hide();
                $('body').removeClass('overhidden');
                isscro = 1;
                if(player){
                    player.pause();
                }
            });
            $('.overlay .overlay-container').click(function (e) {
                e.stopPropagation();
            });

            var isscro = 1;
            document.addEventListener("touchmove",function(e){
                if(isscro===0){
                    e.preventDefault();
                    e.stopPropagation();
                }
            },false);
		/* 弹窗关闭结束 */

         /* 头部显隐 */
         if($('#top').length>0){
            $(document).scroll(function(event) {
                /* Act on the event */
                var winWidth = $(window).width(),
                    scrTop = $(document).scrollTop(),
                    headHeight = $('#header').height(),
                    topEle = $('#top'),
                    topHeight = topEle.css('top'),
                    topLen = (winWidth<=350) ? -51:-60;
                if(scrTop>headHeight){
                    if(topHeight === topLen+'px'){
                        topEle.animate({top: 0},300);
                    }
                }else{
                    if(topHeight === '0px'){
                        topEle.stop().css('top', topLen);
                    }
                }
            });
         }
        /* 头部显隐结束 */

        //视频初始化
        //编码处理
        var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
        function base64encode(str) {
            var out, i, len;
            var c1, c2, c3;
            len = str.length;
            i = 0;
            out = "";
            while (i < len) {
                c1 = str.charCodeAt(i++) & 0xff;
                if (i == len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt((c1 & 0x3) << 4);
                    out += "==";
                    break;
                }
                c2 = str.charCodeAt(i++);
                if (i == len) {
                    out += base64EncodeChars.charAt(c1 >> 2);
                    out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                    out += base64EncodeChars.charAt((c2 & 0xF) << 2);
                    out += "=";
                    break;
                }
                c3 = str.charCodeAt(i++);
                out += base64EncodeChars.charAt(c1 >> 2);
                out += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
                out += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
                out += base64EncodeChars.charAt(c3 & 0x3F);
            }
            return out;
        }
        if($('.video-js').length>0){
            var video_ids = $('.video-js').attr('_val');
            player =  new QiniuPlayer('video-show-preview', {
                engineOrder: ['html5'],
                autoplay: false,
                preload: 'auto',
                controls: false,
                loop: true,
                vid: base64encode(video_ids),
                hub: 'sezign'
            });
        }

        $('#header .content .video').on('click', function(event) {
            event.preventDefault();
            $('body').addClass('overhidden');
            $('#video').show();
            player.play();
        });


        /* 轮播 */
            function intFlex(conEle){
                conEle.find('.flexslider').flexslider({
                    animation: "fade",
                    slideshowSpeed: 2000,
                    start: function(){
                        conEle.find('.spinnerBg').remove();
                    }
                });
            }
            if($('.flex').length>0){
                intFlex($('.flex'));
            }
        /* 轮播结束 */

        /* 头部显隐 */
            $(document).scroll(function(event) {
                /* Act on the event */
                var winWidth = $(window).width(),
                    scrTop = $(document).scrollTop(),
                    headHeight = $('.header').height(),
                    topEle = $('#top'),
                    topHeight = topEle.css('top'),
                    topLen = -65;
                if(scrTop> 90){
                    $(".fixedHeader").show();
                }else{
                     $(".fixedHeader").hide();
                }
            });
        /* 头部显隐结束 */
	});
})(jQuery);