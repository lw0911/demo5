(function ($) {
    //创建项容器
    function createPanel(target) {
        var btnpanel = $('<div class="banCarousel-btn"><a href="javascript:;" class="banCarouselprevBtn"><i></i></a><a href="javascript:;" class="banCarouselnextBtn"><i></i></a></div>').prependTo(target);
        var cirpanel = $('<ul class="banCarousel-circle"></ul>').appendTo(target);
        var count = $(target).find('.banCarousel-img li').length;
        var cirhtml = "<li class='selected' href='javascript:;'><a></a></li>";
        for (var i = 1; i < count; i++) {
            //动态添加小圆点
            cirhtml += "<li><a href='javascript:;'></a></li>";
        }
        cirpanel.append(cirhtml);
        var cirLeft = cirpanel.width() * (-0.5);
        cirpanel.css({ 'marginLeft': cirLeft });
        var urlpanel = $(target).find('.banCarousel-img');
        urlpanel.width(count * $(target).width());
        return { btnpanel: btnpanel, prevbtn: btnpanel.find('.banCarouselprevBtn'), nextbtn: btnpanel.find('.banCarouselnextBtn'), urlpanel: urlpanel, count: count, cirpanel: cirpanel }
    }
    //绑定事件
    function bindevent(target) {
        var state = $.data(target, 'banCarousel');
        $(target).hover(function () {
            state.btnpanel.show();
            if (state.options.isauto) {
                if (state.timer)
                    clearInterval(state.timer);
            }
        }, function () {
            state.btnpanel.hide();
            if (state.options.isauto) {
                if (state.timer)
                    clearInterval(state.timer);
                state.timer = setInterval(function () { automove(target, '') }, 3000);
            }
        });
        state.btnpanel.find('a').hover(function () {
            //实现透明渐变，阻止冒泡
            $(this).animate({ opacity: 0.6 }, 'fast');
            return false;
        }, function () {
            $(this).animate({ opacity: 0.3 }, 'fast');
            return false;
        }).click(function () {
            //手动点击清除计时器
            btnClass = this.className;
            if (state.options.isauto) {
                if (state.timer)
                    clearInterval(state.timer);
                state.timer = setInterval(function () { automove(target, '') }, 3000);
            }
            automove(target, this.className);
        });
        state.cirpanel.find('li').click(function () {
            var index = state.cirpanel.find('li').index(this);
            state.urlpanel.animate({ left: -$(target).width() * index }, 'slow');
            state.page = index + 1;
            cirMove(target);
        });
        if (state.options.isauto)
            state.timer = setInterval(function () { automove(target, '') }, 3000);
    }
    //自动播放
    function automove(target, classname) {
        var state = $.data(target, 'banCarousel');
        //手动及自动播放
        if (!state.urlpanel.is(':animated')) {
            if (classname == 'banCarouselprevBtn') {
                if (state.page == 1) {
                    state.urlpanel.animate({ left: -$(target).width() * (state.count - 1) });
                    state.page = state.count;
                    cirMove(target);
                }
                else {
                    state.urlpanel.animate({ left: '+=' + $(target).width() }, "slow");
                    state.page--;
                    cirMove(target);
                }
            }
            else {
                if (state.page == state.count) {
                    state.urlpanel.animate({ left: 0 });
                    state.page = 1;
                    cirMove(target);
                }
                else {
                    state.urlpanel.animate({ left: '-=' + $(target).width() }, "slow");
                    state.page++;
                    cirMove(target);
                }
            }
        }
    }
    //圆点移动
    function cirMove(target) {
        var state = $.data(target, 'banCarousel');
        //检测page的值，使当前的page与selected的小圆点一致
        state.cirpanel.find('li').eq(state.page - 1).addClass('selected').siblings().removeClass('selected');
    }

    $.fn.banner = function (options, param) {
        if (typeof options == 'string') {
            return $.fn.categoryselecter.methods[options](this, param);
        }
        options = options || {};
        return this.each(function () {
            var state = $.data(this, 'banCarousel');
            var opts;
            if (state) {
                opts = $.extend(state.options, options);
            } else {
                opts = $.extend({}, $.extend({}, $.fn.banner.defaults), options);
                var panel = createPanel(this);
                $.data(this, 'banCarousel', {
                    options: opts,
                    btnpanel: panel.btnpanel,
                    prevbtn: panel.prevbtn,
                    nextbtn: panel.nextbtn,
                    timer: null,
                    urlpanel: panel.urlpanel,
                    page: 1,
                    count: panel.count,
                    cirpanel: panel.cirpanel
                });
            }
            bindevent(this);
        });
    };

    $.fn.banner.methods = {
        //获取配置参数
        options: function (jq) {
            var opts = $.data(jq[0], "categoryselecter").options;
            return opts;
        }
    };

    $.fn.banner.defaults = {
        isauto: true
    };
})(jQuery);