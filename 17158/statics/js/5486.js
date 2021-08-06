var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//interfaceFun接口函数，初始化入口
//indexMain  对应页面

// import ff_owl from './owl.carousel';
// {faf: include('../options/headerHover/headerHover.js')}
var options = {},
    newStyleContent = {
    insertCss: '\n            .ff_bodyMask {\n                position: fixed;\n                z-index: 10000;\n                top: 0;\n                left: 0;\n                width: 100%;\n                height: 100%;\n                background-color: rgba(0, 0, 0, .3);\n                display: none;\n            }\n            .ff_bodyMask-content {\n                position: absolute;\n                top: 42%;\n                left: 50%;\n                background: #fff;\n             margin: -250px -243px;      }\n        '
},
    job = {};

(function (win, $) {

    $.fn.extend({
        simpleSlider: function simpleSlider(option) {

            var _width = 0,
                widths = [],
                fullWidths = [],
                heights = [],
                fullHeights = [],
                itemWidths = [],
                pos = [],
                initOption = {
                style: 'top',
                items: 3,
                dir: true,
                margin: 0,
                speed: 800
            },
                currentItem,
                $slider = $(this),
                $sliderWrap = $slider.parent(),
                sliderWrapPad = {
                left: [parseInt($sliderWrap.css('padding-left')).toFixed(2), parseInt($sliderWrap.css('padding-right')).toFixed(2)],
                top: [parseInt($sliderWrap.css('padding-top')).toFixed(2), parseInt($sliderWrap.css('padding-bottom')).toFixed(2)]
            },
                items = $slider.children(),
                current = 0,
                sliderNav;

            var dirBtn = '\n                <div class="owl-nav">\n                    <div class="owl-prev">\n                        <i class="icon iconfont icon-back"></i>\n                    </div>\n                    <div class="owl-next">\n                        <i class="iconfont icon-more"></i>\n                    </div>\n                </div>';

            items.eq(0).addClass('active');
            items.wrapAll('<div class="simple-slider-outer"><div class="simple-slider-stage"></div></div>');

            $slider = $(this).find('.simple-slider-stage');
            $sliderWrap = $slider.parent();

            $.extend(initOption, option, true);

            if (initOption.dir) {

                $(dirBtn).insertAfter($sliderWrap);
            }

            function gotoPos(index, page) {
                var dataArr, dir;
                if (initOption.style == 'left') {
                    dir = 'lr';
                    if (page) {
                        dataArr = fullWidths;
                    } else {
                        dataArr = widths;
                    }
                } else if (initOption.style == 'top') {
                    void 0;
                    dir = 'bt';
                    if (page) {
                        dataArr = fullHeights;
                    } else {
                        dataArr = heights;
                    }
                }
                if (page) {
                    if (index < current) {
                        index = initOption.items * Math.floor(index / initOption.items) - 1;
                    } else if (index > current) {
                        void 0;
                        index = initOption.items * Math.ceil(index / initOption.items);
                        index = Math.min(index, items.length - initOption.items);
                        void 0;
                    }
                }

                index = Math.max(index, 0);
                index = Math.min(index, items.length - 1);

                var $currentItem = items.eq(index),
                    disBox = tools.getRelPos($currentItem, $sliderWrap),
                    disPar = tools.getRelPos($currentItem, $slider),
                    disInfor;

                // if ($currentItem.hasClass('active')) return;

                tools.tabActive(items.eq(index));
                if (page) {
                    $slider.css({
                        'transform': function transform() {
                            var dis = -dataArr[index],
                                str;
                            if (dir == 'lr') {
                                str = 'translate3D(' + dis + 'px, 0px, 0px)';
                            } else if (dir == 'bt') {
                                str = 'translate3D(0px, ' + dis + 'px, 0px)';
                            }
                            return str;
                        }
                    });
                } else if (items[index - 1] && tools.getRelPos($sliderWrap, items.eq(index - 1))[initOption.style] < 0) {

                    disInfor = tools.getRelPos(items.eq(index - 1), $slider);

                    $slider.css({
                        'transform': function transform() {
                            var disX = disInfor.left,
                                disY = disInfor.top,
                                str = 'translate3D(' + disX + 'px, ' + disY + 'px, 0px)';
                            return str;
                        }
                    });
                } else if (dataArr[index + 1] && dataArr[index + 1] < 0) {
                    void 0;
                    void 0;
                    $slider.css({
                        'transform': function transform() {
                            var dis = dataArr[index + 1],
                                str;
                            if (dir == 'lr') {
                                str = 'translate3D(' + dis + 'px, 0px, 0px)';
                            } else if (dir == 'bt') {
                                str = 'translate3D(0px, ' + dis + 'px, 0px)';
                            }
                            void 0;
                            return str;
                        }
                    });
                }

                current = index;

                $sliderWrap.trigger('change-simpleSlider', [{
                    item: current
                }]);
            }

            // 确认 一行显示几个
            initOption.items = initOption.items ? initOption.items : Math.round($sliderWrap.width() / items.eq(0).width());
            $sliderWrap.css({
                overflow: 'hidden'
            });
            $slider.css({
                'transition': initOption.speed / 1000 + 's'
            });

            if (initOption.style == 'left') {
                initOption.margin = initOption.margin ? initOption.margin : -parseInt($(this).css('margin-right'));
                items.each(function (i, n) {
                    $(n).css({
                        width: function width() {
                            _width += (($sliderWrap.width() + initOption.margin) / initOption.items).toFixed(3) - initOption.margin + initOption.margin;
                            return (($sliderWrap.width() + initOption.margin) / initOption.items).toFixed(3) - initOption.margin;
                        }
                    });

                    widths.push(Math.max(_width - $sliderWrap.width()));
                    fullWidths.push(_width);
                });
                fullWidths.unshift(0);
                $slider.css({
                    width: _width
                });
                items.css({
                    float: 'left',
                    'margin-right': initOption.margin
                });
            } else if (initOption.style == 'top') {
                initOption.margin = initOption.margin ? initOption.margin : parseInt($(this).css('margin-bottom'));

                items.each(function (i, n) {
                    $(n).css({
                        width: function width() {
                            return $(this).outerWidth();
                        },
                        height: function height() {
                            return $(this).outerHeight();
                        }
                    });
                });

                var h = items.eq(0).height();

                items.css({
                    float: 'none',
                    'margin-bottom': initOption.margin
                });
                $slider.css({
                    height: 'auto'
                });
                $sliderWrap.css({
                    height: function height() {
                        return (items.eq(0).outerHeight() + initOption.margin) * initOption.items - initOption.margin;
                    }
                });

                items.each(function (i, n) {
                    var itemHeight = $(n).outerHeight(),
                        disY = tools.getRelPos($(this), $sliderWrap).top,
                        wraperHeight;
                    if (isNaN($sliderWrap.css('margin'))) {

                        wraperHeight = $sliderWrap.height() - parseInt($sliderWrap.css('margin'));
                    } else {

                        wraperHeight = $sliderWrap.height() - $sliderWrap.css('margin');
                    }

                    fullHeights.push((items.eq(0).outerHeight() + initOption.margin) * Math.min(items.length - initOption.items, i));
                    heights.push(Math.min(0, disY - itemHeight + wraperHeight));
                });
            }

            items.on('click', function () {
                gotoPos($(this).index());
            });
            $(this).find('.owl-prev').click(function (ev) {
                gotoPos(current - 1, false);
            });
            $(this).find('.owl-next').click(function (ev) {
                gotoPos(current + 1, false);
            });

            return {
                el: $sliderWrap,
                now: function now() {
                    return current;
                },
                to: function to(index) {
                    void 0;
                    gotoPos(index);
                },
                next: function next() {
                    this.to(current + 1);
                },
                prev: function prev() {
                    this.to(current - 1);
                }
            };
        }
    });
})(window, jQuery);

options.videomplay = {
    name: "videomplay",
    css: '',
    fn: function videomplay() {
        var $videoArea = $('.videom'),
            $videoItem = $('.videom .content_list .item_block'),
            videoLinks = [],
            videoInfor = [];


        function getSingle(fn) {
            var result;

            return function () {
                return result ? result : (result = fn.apply(this, arguments));
            };
        }

        var singleVBg = getSingle(createVideoBg);

        function createVideoBg(obj) {
            var videoBg = $('<div class="videoBg" style="display: none"></div>').appendTo($('body')),
                initObj, config, result, timer;

            initObj = {
                initDo: function () {},
                outDo: function () {},
                inDo: function () {},
                hide: function () {
                    config.outDo.call(this, result);
                    videoBg.fadeOut();
                    $(videoBg).removeClass('deepView');
                    clearTimeout(timer);
                },
                show: function () {
                    timer = setTimeout(function () {
                        $(videoBg).addClass('deepView');
                    }, 4000);
                    config.inDo.call(this, result);
                    videoBg.fadeIn();
                }
            };
            config = $.extend(initObj, obj);

            videoBg.on({
                'click': function (ev) {

                    if ($(ev.target).hasClass('vPlayArea')) {

                        initObj.hide();
                    }
                },
                'mousewheel': function () {
                    return false;
                },
                'mousemove': function () {
                    var _this = this;
                    $(_this).removeClass('deepView');
                    if (timer) {
                        clearTimeout(timer)
                    }
                    timer = setTimeout(function () {
                        $(_this).addClass('deepView');
                    }, 4000);
                }
            });

            result = {
                bgJDOM: videoBg,
                hide: initObj.hide,
                show: initObj.show
            };

            initObj.initDo.call(this, result);

            return result;
        }


        var Videom = function (config, cd) {
            var cb = cb || {};
            this.initDo = false;
            this.evlist = {};
            this.initConfig = {
                link: []
            };
            this.cb = {};
            $.extend(true, this.initConfig, config);
            $.extend(true, this.cb, cb);
        };

        Videom.prototype = {
            construct: Videom,
            init: function (box, infor) {
                var videoInfor, v = this,
                    videoArea;

                if (typeof infor == 'number') {
                    videoInfor = this.initConfig.list[infor];
                } else {
                    videoInfor = {
                        videoLink: infor
                    };
                }

                if (this.initDo == true) {
                    this.tabTo(videoInfor);
                    this._trigger('initDo');
                    return;
                }

                this.initDo = true;
                var str = '<div class="vPlayArea">';

                str += `<div class="vPlayItem">
                            <video src="" autoplay controls="controls"> 您的浏览器不支持 video 标签。 </video>
                            <div class="videoInfor">
                                <div class="videoHeader">
                                    <p class="title"></p>
                                    <p class="subtitle"></p>
                                </div>
                                <div class="videoDes">
                                    <p class="description">
                                    </p>
                                </div>
                            </div>
                        </div>`;
                str += '</div>';


                $(str).on('click', function (ev) {
                    ev.stopPropagation();
                });
                videoArea = $(str).appendTo(box);

                v.box = box;
                v.videoArea = videoArea;
                v.video = videoArea.find('video');
                v.videoBox = videoArea.find('.vPlayItem');
                v.inforBox = videoArea.find('.videoInfor');
                v.desBox = videoArea.find('.videoDes');
                v.videoDom = v.video[0];

                // v._tabText(v.inforBox.find('.title'), videoInfor.title);
                // v._tabText(v.inforBox.find('.subtitle'), videoInfor.subtitle);
                // v._tabText(v.desBox.find('.description'), videoInfor.description);
                v._addControl(infor);

                this._bind('initDo', function () {
                    var _this = this;
                    this.video.on('click', function (ev) {
                        if (ev.which == 1) {
                            _this.tabState();
                        }
                    });
                });
                this._trigger('initDo');
                this.tabTo(videoInfor);
            },
            on: function (name, fn) {
                this._bind(name, fn);
            },
            tabTo: function (infor) {
                console.log(infor);
                var initInfor = {
                    index: 0,
                    description: "",
                    subtitle: "",
                    title: "",
                    videoLink: ""
                };
                $.extend(initInfor, infor);

                this._tabBtn(infor.index);
                this.video.attr('src', initInfor.videoLink);

                this._tabText(this.inforBox.find('.title'), initInfor.title);
                this._tabText(this.inforBox.find('.subtitle'), initInfor.subtitle);
                this._tabText(this.desBox.find('.description'), initInfor.description);
            },
            out: function () {
                this.stop();
                this._trigger('outvideo');
            },
            stop: function () {
                this.videoDom.pause();
            },
            play: function () {
                this.videoDom.play();
            },
            state: function () {
                var isPlay;

                if (this.videoDom.paused) {
                    isPlay = false;
                } else {

                    isPlay = true;
                }
                return isPlay;
            },
            tabState: function () {
                var isPlay = this.state();
                if (isPlay) {
                    this.stop();
                } else {
                    this.play();
                }
            },
            _addControl: function (num) {
                if (typeof num != 'number') return;
                var hasControl = false,
                    v = this,
                    prev, next, prevBtn, nextBtn;

                v.currentIndex = num;
                prev = {
                    index: num - 1,
                    className: (function () {
                        if (typeof v.initConfig.list[(num - 1)] == 'undefined') {
                            return 'disable';
                        } else {
                            return 'able';
                        }
                    })()
                };
                next = {
                    index: num + 1,
                    className: (function () {
                        if (typeof v.initConfig.list[(num + 1)] == 'undefined') {
                            return 'disable';
                        } else {
                            return 'able';
                        }
                    })()
                };

                if (hasControl) {

                    prevBtn.data('index', prev.index).addClass(prev.className);
                    nextBtn.data('index', next.index).addClass(next.className);
                    return;
                }
                hasControl = true;

                var tabControlStr, tabControl;
                tabControlStr = `
                    <div class="videoTabBtns">
                        <div class="videoTabBtn prev ${prev.className}" data-index="${prev.index}">
                            <p></p>
                            <i class="icon"></i>
                        </div>
                        <div class="videoTabBtn next ${next.className}" data-index="${next.index}">
                            <p></p>
                            <i class="icon"></i>
                        </div>
                    </div>
                `;


                tabControl = $(tabControlStr).appendTo(v.box);
                prevBtn = tabControl.find('.prev');
                nextBtn = tabControl.find('.next');

                tabControl.on('click', '.videoTabBtn', function (ev) {

                    ev.stopPropagation();
                    var btn = this;
                    if ($(btn).hasClass('disable') == false) {

                        v.tabTo(v.initConfig.list[$(btn).data('index')]);
                    }
                    return false;
                });

                v.tabControl = tabControl;
            },
            _tabBtn: function (index) {
                this._addControl(index);
            },
            _tabText: function (el, text) {
                if (typeof text == "undefined") {
                    $(el).css({
                        display: "none"
                    });
                } else {
                    $(el).text(text);
                }
            },
            _bindEv: function (name, fn) {
                var _this = this;
                this.cb[name] = fn;
                $.each(_this.cb, function (indexInArray, valueOfElement) {

                    $(_this).off(name).on(name, fn);
                });
            },
            _trigerEv: function (name, option) {

                if (typeof (this.cb[name]) != 'function') {
                    this._bindEv(name, function () {});
                }
                $(this).trigger(name, option);
            },
            _bind: function (name, fn) {
                let _self = this,
                    evlist = this.evlist;

                if (!evlist[name]) {
                    evlist[name] = [];
                } else if (fn in evlist[name]) {
                    return;
                }
                this.evlist[name].push(fn);
            },
            _trigger: function (name, context, arg) {
                let fns = this.evlist[name];

                if (!fns || fns.length === 0) {
                    return false;
                }

                if (!context) {

                    context = this;
                } else if (Object.prototype.toString.call(context) == '[object Array]') {

                    arg = context;
                    context = this;
                }

                $.each(fns, function (i, v) {
                    v.apply(context, arg);
                });
            },
        };

        $videoItem.each(function (i, e) {
            var infor = {};
            infor.index = i;
            infor.title = $(e).find('.item_info .title').text();
            infor.subtitle = $(e).find('.item_info .subtitle').text();
            infor.description = $(e).find('.description').text();
            infor.videoLink = $(e).data('href');
            videoInfor.push(infor);
            videoLinks.push($(e).data('href'));
        });

        var vPlayer = new Videom({
            list: videoInfor
        });
        var vBg = singleVBg({

                initDo: function (bg) {

                },
                inDo: function (bg) {

                    $('body').on('keydown.video', function (ev) {
                        if (ev.keyCode == 32) {
                            ev.stopPropagation();
                            ev.preventDefault();
                            vPlayer.tabState();
                        }
                    });
                },
                outDo: function (bg) {
                    vPlayer.out();

                    $('body').off('keydown.video');
                }
            }),
            mask = vBg.bgJDOM;
        vPlayer.on('initDo', function () {
            vBg.show();
            this.videoArea.addClass('vshow');
        });

        vPlayer.on('outvideo', function () {
            this.videoArea.removeClass('vshow');
        });

        $videoItem.on({
            'click.video': function () {
                var link = $(this).data('href'),
                    index = $(this).data('index');

                if (typeof link == 'undefined') return;
                vPlayer.init(mask, index);
            }
        });
    }
};
options.initThings = {
    name: "initThings",
    css: '',
    fn: function initThings() {
        function timeTurnEn(el) {
            var monEnArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            $(el).addClass('showTime').find('.m').text(function () {
                return monEnArr[parseInt($(this).text()) - 1];
            });
        }

        $('.ff_indexPage .module.project .item_block').off('click');
        if ($('.mlist.news')[0]) {

            timeTurnEn('.mlist.news');
        }

        if ($('body').hasClass('bodyindex') && $('.ff_indexPage .team')[0] && $('.ff_indexPage .team .tab_content .content_list').data('owlcarousel')) {
            var _$$addClass$owlCarous;

            $('.ff_indexPage .team .tab_content .content_list').data('owlcarousel').destroy();
            $('.ff_indexPage .team .tab_button .content_list').data('owlcarousel').destroy();
            var teamSliderApp = $('.ff_indexPage .team .tab_content .content_list').addClass('owl-carousel owl-theme').owlCarousel((_$$addClass$owlCarous = {
                center: false,
                items: 1,
                loop: false,
                autoWidth: false,
                responsive: false,
                nav: true,
                dots: false,
                smartSpeed: 1000,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn'
            }, _defineProperty(_$$addClass$owlCarous, 'responsive', {
                0: {
                    items: 1,
                    nav: true
                },
                1920: {
                    items: 1,
                    nav: true,
                    loop: false
                }
            }), _defineProperty(_$$addClass$owlCarous, 'responsiveRefreshRate', 200), _defineProperty(_$$addClass$owlCarous, 'navText', ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']), _$$addClass$owlCarous));

            void 0;

            var tabButtons = $('.ff_indexPage .team .tab_button .item_block');

            // var tabBtnApp = $('.ff_indexPage .team .tab_button .content_list').addClass('owl-carousel owl-theme').owlCarousel({
            //     center: false,
            //     items: 4,
            //     loop: false,
            //     autoWidth: false,
            //     responsive: false,
            //     nav: false,
            //     dots: false,
            //     smartSpeed: 800,
            //     responsive:{
            //         0:{
            //             items:1,
            //         },
            //         600: {
            //             items: 2,  
            //         },
            //         1280: {
            //             items: 3,  
            //         },
            //         1366: {
            //             items: 4,  
            //         },
            //         1920:{
            //             items:4,
            //         }
            //     },
            //     navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
            // });

            // // var tabBtnApp = $('.ff_indexPage .team .tab_button .content_list').simpleSlider({
            // //     dir: false,
            // //     style: 'left',
            // //     items: 3,
            // // });
            // // console.log(tabBtnApp);
            window.teamSliderApp = teamSliderApp;
            tabButtons.click(function () {
                var _this = this;
                var index = $(this).index();
                teamSliderApp.trigger('to.owl.carousel', [index]);
            });

            tabButtons.removeClass('active').eq(0).addClass('active');
            teamSliderApp.on('changed.owl.carousel', function (event) {
                var index = event.item.index;
                tabButtons.removeClass('active').eq(index).addClass('active');
            });
            // teamSliderApp.on('initialized.owl.carousel', function (event) {
            //     var index = event.item.index;
            // });
        }
        if ($('body').hasClass('bodyindex') && $('.ff_indexPage .service')[0] && $('.ff_indexPage .service .tab_content .content_list').data('owlcarousel')) {
            var changeButtonApp = function changeButtonApp(dir, index) {
                if (dir == 'prev') {
                    tabButton.trigger('to.owl.carousel', [index - 1]);
                } else if (dir == 'next') {

                    tabButton.trigger('to.owl.carousel', [index + 1]);
                }
            };

            var tabContent = $('.ff_indexPage .service.ff_slider .tab_content .content_list'),
                tabButton = $('.ff_indexPage .service.ff_slider .tab_button .content_list');

            tabContent.data('owlcarousel').destroy();
            tabButton.data('owlcarousel').destroy();

            var tabContentApp = tabContent.addClass('owl-carousel owl-theme').owlCarousel({
                center: false,
                items: 1,
                loop: false,
                autoWidth: false,
                responsive: false,
                nav: true,
                dots: false,
                smartSpeed: 800,
                responsiveRefreshRate: 200,
                mouseDrag: false,
                animateIn: "fadeIn",
                animateOut: "fadeOut",
                navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
            });
            var tabButtonApp = tabButton.addClass('owl-carousel owl-theme').owlCarousel({
                center: false,
                items: 1,
                loop: false,
                autoWidth: false,
                responsive: false,
                nav: false,
                dots: false,
                // animateIn: "slideInRight",
                // animateOut: "slideOutLeft",
                smartSpeed: 800,
                startPosition: 1,
                navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
            });

            var godir;
            tabContentApp.on('changed.owl.carousel', function (event) {
                var index = event.item.index;
                if (godir == 'prev') {

                    tabButton.trigger('to.owl.carousel', [index - 1]);
                } else if (godir == 'next') {

                    tabButton.trigger('to.owl.carousel', [index + 1]);
                }
            });

            $('.ff_indexPage .service').find('.owl-prev').on({
                mouseenter: function mouseenter() {
                    var infor = tabContent.data('owlcarousel'),
                        nowIndex = infor._current;
                    changeButtonApp('prev', nowIndex);
                    godir = 'prev';
                },
                mouseleave: function mouseleave() {

                    $('#sliderDirThemb').removeClass('showStage');
                }
            });

            $('.ff_indexPage .service').find('.owl-next').on({
                mouseenter: function mouseenter() {
                    var infor = tabContent.data('owlcarousel'),
                        nowIndex = infor._current;
                    changeButtonApp('next', nowIndex);
                    godir = 'next';
                },
                mouseleave: function mouseleave() {

                    $('#sliderDirThemb').removeClass('showStage');
                }
            });
        }
        (function () {

            if ($('body').hasClass('bodyindex') && $('.ff_indexPage .videom.ff_slider ')[0] && $('.ff_indexPage .videom.ff_slider .content_list').data('owlcarousel')) {

                var tabContent = $('.ff_indexPage .videom.ff_slider .content_list'),
                    tabButton = $('.ff_indexPage .videom.ff_slider .content_list');

                tabContent.data('owlcarousel').destroy();
                tabButton.data('owlcarousel').destroy();

                var tabContentApp = tabContent.addClass('owl-carousel owl-theme').owlCarousel({
                    center: false,
                    items: 1,
                    loop: false,
                    autoWidth: false,
                    responsive: false,
                    nav: true,
                    dots: false,
                    smartSpeed: 800,
                    responsiveRefreshRate: 200,
                    animateIn: "fadeIn",
                    animateOut: "fadeOut",
                    navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
                });
            }
        })();
    }
};
options.sliderDirThemb = {
    name: "sliderDirThemb",
    css: '\n        #topSlider .content_list .owl-prev:hover #sliderDotThemb,\n        #topSlider .content_list .owl-prev:hover #sliderDirThemb {\n            visibility: visible;\n            opacity: 1\n        }\n        #sliderDirThemb,\n        #sliderDotThemb {\n            width: 100px;\n            height: 50px;\n            position: absolute;\n            border: 3px solid #fff;\n            visibility: hidden;\n            opacity: 0;\n            box-sizing: border-box;\n            transition: visibility 0.36s ease, opacity 0.36s ease;\n        } \n        \n        #sliderDirThemb.dot,\n        #sliderDotThemb.dot {\n            top: auto ;\n            bottom: 40px;\n            transition: all 0.36s ease;\n            transform: translateX(-50%);\n        }\n        #sliderDirThemb.dir,\n        #sliderDotThemb.dir {\n            bottom: auto ;\n        }\n        #sliderDirThemb .owl-item .thumb-item,\n        #sliderDotThemb .owl-item .thumb-item {\n            width: 100px;\n            height: 44px;\n            background-position: center center;\n            background-size: cover;\n        }\n        #sliderDirThemb .owl-dots,\n        #sliderDotThemb .owl-dots {\n        }\n        #sliderDirThemb .owl-stage-outer,\n        #sliderDotThemb .owl-stage-outer {\n        }\n        #sliderDirThemb.showStage,\n        #sliderDotThemb.showStage {\n            visibility: visible;\n            opacity: 1\n        }\n    ',
    fn: function sliderDirThemb(dir) {
        var thembImages = [],
            topSliderDirThumbApp;
        var $itemBg = $('#topSlider .content_list .owl-item:not(.cloned) .item_block .item_bg');
        var html = '<div id="sliderDirThemb" class="topSliderThumb owl-carousel owl-theme">';
        var topSliderApp = this.topSliderApp;

        $itemBg.each(function (i, el) {
            html += '<div class="thumb-item" style="background-image:url(' + $(el).data('thumb').replace('_80x80.jpg', '.jpg') + ')"></div>';
            thembImages.push($(el).data('thumb'));
        });
        html += '</div>';

        topSliderDirThumbApp = $(html).appendTo($('#topSlider')).owlCarousel({
            center: false,
            items: 1,
            loop: true,
            margin: 0,
            autoWidth: false,
            nav: false,
            responsive: false,
            dots: false
        });

        $('#topSlider .content_list ').find('.owl-prev').add($('#topSlider .content_list ').find('.owl-next')).on({
            mouseenter: function mouseenter() {
                var _this = this,
                    nowIndex = $('#topSlider .content_list .owl-dots .owl-dot.active').index();

                if ($(_this).hasClass('owl-prev')) {
                    nowIndex -= 1;
                } else if ($(_this).hasClass('owl-next')) {
                    nowIndex += 1;
                }
                topSliderDirThumbApp.trigger('to.owl.carousel', [nowIndex]);
                topSliderApp.on('changed.owl.carousel', function (event) {
                    var item = event.item.index;
                    if ($(_this).hasClass('owl-prev')) {} else if ($(_this).hasClass('owl-next')) {
                        item -= 1;
                    }
                    topSliderDirThumbApp.trigger('to.owl.carousel', [item]);
                });

                $('#sliderDirThemb').removeClass('dot').addClass(function () {
                    if ($(_this).hasClass('.owl-prev')) {
                        return 'prev-dir dir showStage';
                    } else {
                        return 'next-dir dir showStage';
                    }
                }).css({
                    left: function left() {
                        if (dir == 'top') {

                            return tools.getRelPos("#topSlider", _this).left + ($(_this).outerWidth() - $(this).outerWidth()) / 2;
                        } else if (dir == 'LR') {
                            if ($(_this).offset().left + $('#sliderDirThemb').outerWidth() + $(_this).outerWidth() >= $(window).width()) {

                                return tools.getRelPos("#topSlider", _this).left - $('#sliderDirThemb').outerWidth();
                            } else {

                                return tools.getRelPos("#topSlider", _this).left + $(_this).outerWidth();
                            }
                        }
                    },
                    top: function top() {
                        if (dir == 'LR') {

                            return tools.getRelPos("#topSlider", _this).top + ($(_this).outerHeight() - $(this).outerHeight()) / 2;
                        } else if (dir == 'top') {

                            return tools.getRelPos("#topSlider", _this).top - $(this).outerHeight();
                        }
                    }
                });
                if (dir === 'top') {
                    $('#sliderDirThemb').css({
                        'transition': 'left 0.36s ease'
                    });
                }
            },
            mouseleave: function mouseleave() {

                $('#sliderDirThemb').removeClass('showStage');
            }
        });
    }
};

options.npostSlider = {
    name: "npostSlider",
    css: '\n        #postSlider .tab_button .content_list {\n            width: 240px;\n        }\n    ',
    fn: function npostSlider() {
        var npostSliderApp = $('#postSlider .tab_content').addClass('owl-carousel owl-theme').owlCarousel({
            center: false,
            items: 1,
            loop: false,
            autoWidth: false,
            responsive: false,
            nav: true,
            dots: true,
            smartSpeed: 800,
            navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
        });
        // var npostSliderThumbApp = $('#postSlider .tab_button').addClass('owl-carousel owl-theme').owlCarousel({
        //     center: false,
        //     items: 3,
        //     loop: false,
        //     autoWidth: false,
        //     responsive: false,
        //     nav: false,
        //     dots: false,
        //     margin: 10
        // });
        // $('#postSlider .tab_button').find('.item_block[data-tab-index="0"]').addClass('current');
        // npostSliderApp.on('changed.owl.carousel', function (event) {
        //     var item = event.item.index;
        //     var $buttons = $('#postSlider .tab_button').find('.item_block');
        //     npostSliderThumbApp.trigger('to.owl.carousel', [item]);
        //     $('#postSlider .tab_button').find('.item_block').removeClass('current');
        //     $buttons.eq(item).addClass('current');
        // });
        // $('#postSlider .tab_button').find('.owl-item').click(function () {
        //     var index = $(this).index();
        //     npostSliderApp.trigger('to.owl.carousel', [index]);
        // });
    }
};
options.searchForm = {
    name: "searchForm",
    css: '',
    fn: function searchForm(option) {
        var onOffBtn = $('#search-nav .searchOnOff');
        var searchEv = {
            searchShow: function searchShow() {
                var search_e = this,
                    timer,
                    logoW = $('#headTop').outerWidth(true);

                onOffBtn.click(function () {

                    $('#navWrapper .nav').addClass('navShow');
                    $('#search-nav').addClass('navShow');
                    $('.bodyMask').addClass('open');
                    $('.searchGroup input').off().click(function (ev) {

                        ev.cancelBubble = true;
                        return false;
                    });
                    $('body').off().on({
                        'mousewheel.stopScroll': function mousewheelStopScroll() {
                            return false;
                        }
                    });
                    timer = setInterval(function () {
                        void 0;
                        if ($('#navWrapper .nav').find('.navitem').eq(0).css('opacity') <= 0.02) {
                            $('#navWrapper .nav').addClass('navStop');
                            if (option.type == 'LR') {
                                $('#search-nav').css({
                                    left: logoW
                                });
                            }
                            $('#search-nav').addClass('navStop').find('input').focus();
                            $('body').off().on({
                                'click.hideSearch': function clickHideSearch() {
                                    search_e.searchHide();
                                }
                            });

                            clearInterval(timer);
                        }
                    }, 100);
                });
            },
            searchHide: function searchHide() {
                var search_e = this,
                    time;
                $('#navWrapper .nav').addClass('navHide');
                $('#search-nav').addClass('navHide');
                $('.bodyMask').removeClass('open');
                $('body').off('mousewheel.stopScroll');
                $('body').off('click.hideSearch');
                if (option.type == 'LR') {
                    $('#search-nav').css({
                        left: 'auto'
                    });
                }
                timer = setInterval(function () {
                    if ($('#search-nav.navHide').css('opacity') >= 0.98) {
                        $('#navWrapper .nav').removeClass('navShow navStop navHide');
                        $('#search-nav').removeClass('navShow navStop navHide');
                        clearInterval(timer);
                    }
                }, 100);
            },
            searchNormal: function searchNormal() {
                onOffBtn.click(function () {
                    $('#search-nav').toggleClass('search-open');
                });
            }
        };

        switch (option.style) {
            case 'one':

                searchEv.searchShow();
                break;
            case 'two':

                searchEv.searchNormal();
                break;
            default:
                break;
        }
    }
};
options.headerHoverBase = {
    name: "headerHoverBase",
    css: '',
    fn: function headerHoverBase(el) {
        $(el).find('.nav>.navitem').on({
            'mouseenter': function mouseenter() {
                $(this).addClass('isHover');
            },
            'mouseleave': function mouseleave() {
                $(this).removeClass('isHover');
            }
        });
        $(el).find('.subnav>li').on({
            'mouseenter': function mouseenter() {
                $(this).closest('.navitem').addClass('isSubHover');
            },
            'mouseleave': function mouseleave() {
                $(this).closest('.navitem').removeClass('isSubHover');
            }
        });
    }
};

options.teamTabPop = {
    name: "teamTabPop",
    css: '',
    fn: function teamTabPop() {
        $('.team_tabs .tab_content .item_block').on('click', 'a', function (ev) {
            ev.preventDefault();
        });
        $('.team_tabs .tab_content .item_block').on('click', function () {
            var _this = this,
                alertDom = $('<div class = "mlist" style="width:500px;"><div class="content_list"></div></div>');
            alertDom.find('.content_list').append($('.team_tabs .tab_content .item_block').clone().removeClass('wow'));

            tools.alertBx(alertDom, function () {
                alertDom.find('.content_list').addClass('owl-carousel owl-theme').owlCarousel({
                    center: false,
                    items: 1,
                    loop: false,
                    autoWidth: false,
                    responsive: false,
                    nav: true,
                    dots: false,
                    startPosition: $(_this).index(),
                    smartSpeed: 800,
                    navText: ['<i class="icon iconfont icon-back"></i>', '<i class="iconfont icon-more"></i>']
                });
            });
        });
    }
};

options.masonry = {
    name: "masonry",
    css: '',
    fn: function teamTabs(el, obj) {

        !function (e, t) {
            "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = t() : e.EvEmitter = t();
        }("undefined" != typeof window ? window : this, function () {
            function e() {}var t = e.prototype;return t.on = function (e, t) {
                if (e && t) {
                    var i = this._events = this._events || {},
                        n = i[e] = i[e] || [];return -1 == n.indexOf(t) && n.push(t), this;
                }
            }, t.once = function (e, t) {
                if (e && t) {
                    this.on(e, t);var i = this._onceEvents = this._onceEvents || {},
                        n = i[e] = i[e] || {};return n[t] = !0, this;
                }
            }, t.off = function (e, t) {
                var i = this._events && this._events[e];if (i && i.length) {
                    var n = i.indexOf(t);return -1 != n && i.splice(n, 1), this;
                }
            }, t.emitEvent = function (e, t) {
                var i = this._events && this._events[e];if (i && i.length) {
                    var n = 0,
                        o = i[n];t = t || [];for (var r = this._onceEvents && this._onceEvents[e]; o;) {
                        var s = r && r[o];s && (this.off(e, o), delete r[o]), o.apply(this, t), n += s ? 0 : 1, o = i[n];
                    }return this;
                }
            }, t.allOff = t.removeAllListeners = function () {
                delete this._events, delete this._onceEvents;
            }, e;
        }), function (e, t) {
            "use strict";
            "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
                return t(e, i);
            }) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter);
        }("undefined" != typeof window ? window : this, function (e, t) {
            function i(e, t) {
                for (var i in t) {
                    e[i] = t[i];
                }return e;
            }function n(e) {
                var t = [];if (Array.isArray(e)) t = e;else if ("number" == typeof e.length) for (var i = 0; i < e.length; i++) {
                    t.push(e[i]);
                } else t.push(e);return t;
            }function o(e, t, r) {
                return this instanceof o ? ("string" == typeof e && (e = document.querySelectorAll(e)), this.elements = n(e), this.options = i({}, this.options), "function" == typeof t ? r = t : i(this.options, t), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred()), void setTimeout(function () {
                    this.check();
                }.bind(this))) : new o(e, t, r);
            }function r(e) {
                this.img = e;
            }function s(e, t) {
                this.url = e, this.element = t, this.img = new Image();
            }var h = e.jQuery,
                a = e.console;o.prototype = Object.create(t.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
                this.images = [], this.elements.forEach(this.addElementImages, this);
            }, o.prototype.addElementImages = function (e) {
                "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);var t = e.nodeType;if (t && d[t]) {
                    for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                        var o = i[n];this.addImage(o);
                    }if ("string" == typeof this.options.background) {
                        var r = e.querySelectorAll(this.options.background);for (n = 0; n < r.length; n++) {
                            var s = r[n];this.addElementBackgroundImages(s);
                        }
                    }
                }
            };var d = { 1: !0, 9: !0, 11: !0 };return o.prototype.addElementBackgroundImages = function (e) {
                var t = getComputedStyle(e);if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                    var o = n && n[2];o && this.addBackground(o, e), n = i.exec(t.backgroundImage);
                }
            }, o.prototype.addImage = function (e) {
                var t = new r(e);this.images.push(t);
            }, o.prototype.addBackground = function (e, t) {
                var i = new s(e, t);this.images.push(i);
            }, o.prototype.check = function () {
                function e(e, i, n) {
                    setTimeout(function () {
                        t.progress(e, i, n);
                    });
                }var t = this;return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
                    t.once("progress", e), t.check();
                }) : void this.complete();
            }, o.prototype.progress = function (e, t, i) {
                this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, e, t);
            }, o.prototype.complete = function () {
                var e = this.hasAnyBroken ? "fail" : "done";if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
                    var t = this.hasAnyBroken ? "reject" : "resolve";this.jqDeferred[t](this);
                }
            }, r.prototype = Object.create(t.prototype), r.prototype.check = function () {
                var e = this.getIsImageComplete();return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image(), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src));
            }, r.prototype.getIsImageComplete = function () {
                return this.img.complete && void 0 !== this.img.naturalWidth;
            }, r.prototype.confirm = function (e, t) {
                this.isLoaded = e, this.emitEvent("progress", [this, this.img, t]);
            }, r.prototype.handleEvent = function (e) {
                var t = "on" + e.type;this[t] && this[t](e);
            }, r.prototype.onload = function () {
                this.confirm(!0, "onload"), this.unbindEvents();
            }, r.prototype.onerror = function () {
                this.confirm(!1, "onerror"), this.unbindEvents();
            }, r.prototype.unbindEvents = function () {
                this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
                this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;var e = this.getIsImageComplete();e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents());
            }, s.prototype.unbindEvents = function () {
                this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
            }, s.prototype.confirm = function (e, t) {
                this.isLoaded = e, this.emitEvent("progress", [this, this.element, t]);
            }, o.makeJQueryPlugin = function (t) {
                t = t || e.jQuery, t && (h = t, h.fn.imagesLoaded = function (e, t) {
                    var i = new o(this, e, t);return i.jqDeferred.promise(h(this));
                });
            }, o.makeJQueryPlugin(), o;
        });

        !function (t, e) {
            "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
                return e(t, i);
            }) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
        }(window, function (t, e) {
            "use strict";
            function i(i, r, a) {
                function h(t, e, n) {
                    var o,
                        r = "$()." + i + '("' + e + '")';return t.each(function (t, h) {
                        var u = a.data(h, i);if (!u) return void s(i + " not initialized. Cannot call methods, i.e. " + r);var d = u[e];if (!d || "_" == e.charAt(0)) return void s(r + " is not a valid method");var l = d.apply(u, n);o = void 0 === o ? l : o;
                    }), void 0 !== o ? o : t;
                }function u(t, e) {
                    t.each(function (t, n) {
                        var o = a.data(n, i);o ? (o.option(e), o._init()) : (o = new r(n, e), a.data(n, i, o));
                    });
                }a = a || e || t.jQuery, a && (r.prototype.option || (r.prototype.option = function (t) {
                    a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
                }), a.fn[i] = function (t) {
                    if ("string" == typeof t) {
                        var e = o.call(arguments, 1);return h(this, t, e);
                    }return u(this, t), this;
                }, n(a));
            }function n(t) {
                !t || t && t.bridget || (t.bridget = i);
            }var o = Array.prototype.slice,
                r = t.console,
                s = "undefined" == typeof r ? function () {} : function (t) {
                r.error(t);
            };return n(e || t.jQuery), i;
        }), function (t, e) {
            "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
        }("undefined" != typeof window ? window : this, function () {
            function t() {}var e = t.prototype;return e.on = function (t, e) {
                if (t && e) {
                    var i = this._events = this._events || {},
                        n = i[t] = i[t] || [];return -1 == n.indexOf(e) && n.push(e), this;
                }
            }, e.once = function (t, e) {
                if (t && e) {
                    this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
                        n = i[t] = i[t] || {};return n[e] = !0, this;
                }
            }, e.off = function (t, e) {
                var i = this._events && this._events[t];if (i && i.length) {
                    var n = i.indexOf(e);return -1 != n && i.splice(n, 1), this;
                }
            }, e.emitEvent = function (t, e) {
                var i = this._events && this._events[t];if (i && i.length) {
                    var n = 0,
                        o = i[n];e = e || [];for (var r = this._onceEvents && this._onceEvents[t]; o;) {
                        var s = r && r[o];s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n];
                    }return this;
                }
            }, t;
        }), function (t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
                return e();
            }) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
        }(window, function () {
            "use strict";
            function t(t) {
                var e = parseFloat(t),
                    i = -1 == t.indexOf("%") && !isNaN(e);return i && e;
            }function e() {}function i() {
                for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; u > e; e++) {
                    var i = h[e];t[i] = 0;
                }return t;
            }function n(t) {
                var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
            }function o() {
                if (!d) {
                    d = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var o = n(e);r.isBoxSizeOuter = s = 200 == t(o.width), i.removeChild(e);
                }
            }function r(e) {
                if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && e.nodeType) {
                    var r = n(e);if ("none" == r.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var d = a.isBorderBox = "border-box" == r.boxSizing, l = 0; u > l; l++) {
                        var c = h[l],
                            f = r[c],
                            m = parseFloat(f);a[c] = isNaN(m) ? 0 : m;
                    }var p = a.paddingLeft + a.paddingRight,
                        g = a.paddingTop + a.paddingBottom,
                        y = a.marginLeft + a.marginRight,
                        v = a.marginTop + a.marginBottom,
                        _ = a.borderLeftWidth + a.borderRightWidth,
                        z = a.borderTopWidth + a.borderBottomWidth,
                        E = d && s,
                        b = t(r.width);b !== !1 && (a.width = b + (E ? 0 : p + _));var x = t(r.height);return x !== !1 && (a.height = x + (E ? 0 : g + z)), a.innerWidth = a.width - (p + _), a.innerHeight = a.height - (g + z), a.outerWidth = a.width + y, a.outerHeight = a.height + v, a;
                }
            }var s,
                a = "undefined" == typeof console ? e : function (t) {
                void 0;
            },
                h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
                u = h.length,
                d = !1;return r;
        }), function (t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
        }(window, function () {
            "use strict";
            var t = function () {
                var t = window.Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
                    var n = e[i],
                        o = n + "MatchesSelector";if (t[o]) return o;
                }
            }();return function (e, i) {
                return e[t](i);
            };
        }), function (t, e) {
            "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
                return e(t, i);
            }) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
        }(window, function (t, e) {
            var i = {};i.extend = function (t, e) {
                for (var i in e) {
                    t[i] = e[i];
                }return t;
            }, i.modulo = function (t, e) {
                return (t % e + e) % e;
            }, i.makeArray = function (t) {
                var e = [];if (Array.isArray(t)) e = t;else if (t && "object" == (typeof t === 'undefined' ? 'undefined' : _typeof(t)) && "number" == typeof t.length) for (var i = 0; i < t.length; i++) {
                    e.push(t[i]);
                } else e.push(t);return e;
            }, i.removeFrom = function (t, e) {
                var i = t.indexOf(e);-1 != i && t.splice(i, 1);
            }, i.getParent = function (t, i) {
                for (; t != document.body;) {
                    if (t = t.parentNode, e(t, i)) return t;
                }
            }, i.getQueryElement = function (t) {
                return "string" == typeof t ? document.querySelector(t) : t;
            }, i.handleEvent = function (t) {
                var e = "on" + t.type;this[e] && this[e](t);
            }, i.filterFindElements = function (t, n) {
                t = i.makeArray(t);var o = [];return t.forEach(function (t) {
                    if (t instanceof HTMLElement) {
                        if (!n) return void o.push(t);e(t, n) && o.push(t);for (var i = t.querySelectorAll(n), r = 0; r < i.length; r++) {
                            o.push(i[r]);
                        }
                    }
                }), o;
            }, i.debounceMethod = function (t, e, i) {
                var n = t.prototype[e],
                    o = e + "Timeout";t.prototype[e] = function () {
                    var t = this[o];t && clearTimeout(t);var e = arguments,
                        r = this;this[o] = setTimeout(function () {
                        n.apply(r, e), delete r[o];
                    }, i || 100);
                };
            }, i.docReady = function (t) {
                var e = document.readyState;"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t);
            }, i.toDashed = function (t) {
                return t.replace(/(.)([A-Z])/g, function (t, e, i) {
                    return e + "-" + i;
                }).toLowerCase();
            };var n = t.console;return i.htmlInit = function (e, o) {
                i.docReady(function () {
                    var r = i.toDashed(o),
                        s = "data-" + r,
                        a = document.querySelectorAll("[" + s + "]"),
                        h = document.querySelectorAll(".js-" + r),
                        u = i.makeArray(a).concat(i.makeArray(h)),
                        d = s + "-options",
                        l = t.jQuery;u.forEach(function (t) {
                        var i,
                            r = t.getAttribute(s) || t.getAttribute(d);try {
                            i = r && JSON.parse(r);
                        } catch (a) {
                            return void (n && n.error("Error parsing " + s + " on " + t.className + ": " + a));
                        }var h = new e(t, i);l && l.data(t, o, h);
                    });
                });
            }, i;
        }), function (t, e) {
            "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
        }(window, function (t, e) {
            "use strict";
            function i(t) {
                for (var e in t) {
                    return !1;
                }return e = null, !0;
            }function n(t, e) {
                t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
            }function o(t) {
                return t.replace(/([A-Z])/g, function (t) {
                    return "-" + t.toLowerCase();
                });
            }var r = document.documentElement.style,
                s = "string" == typeof r.transition ? "transition" : "WebkitTransition",
                a = "string" == typeof r.transform ? "transform" : "WebkitTransform",
                h = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s],
                u = { transform: a, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" },
                d = n.prototype = Object.create(t.prototype);d.constructor = n, d._create = function () {
                this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
            }, d.handleEvent = function (t) {
                var e = "on" + t.type;this[e] && this[e](t);
            }, d.getSize = function () {
                this.size = e(this.element);
            }, d.css = function (t) {
                var e = this.element.style;for (var i in t) {
                    var n = u[i] || i;e[n] = t[i];
                }
            }, d.getPosition = function () {
                var t = getComputedStyle(this.element),
                    e = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    n = t[e ? "left" : "right"],
                    o = t[i ? "top" : "bottom"],
                    r = this.layout.size,
                    s = -1 != n.indexOf("%") ? parseFloat(n) / 100 * r.width : parseInt(n, 10),
                    a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * r.height : parseInt(o, 10);s = isNaN(s) ? 0 : s, a = isNaN(a) ? 0 : a, s -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = s, this.position.y = a;
            }, d.layoutPosition = function () {
                var t = this.layout.size,
                    e = {},
                    i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop"),
                    o = i ? "paddingLeft" : "paddingRight",
                    r = i ? "left" : "right",
                    s = i ? "right" : "left",
                    a = this.position.x + t[o];e[r] = this.getXValue(a), e[s] = "";var h = n ? "paddingTop" : "paddingBottom",
                    u = n ? "top" : "bottom",
                    d = n ? "bottom" : "top",
                    l = this.position.y + t[h];e[u] = this.getYValue(l), e[d] = "", this.css(e), this.emitEvent("layout", [this]);
            }, d.getXValue = function (t) {
                var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
            }, d.getYValue = function (t) {
                var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
            }, d._transitionTo = function (t, e) {
                this.getPosition();var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;if (this.setPosition(t, e), s && !this.isTransitioning) return void this.layoutPosition();var a = t - i,
                    h = e - n,
                    u = {};u.transform = this.getTranslate(a, h), this.transition({ to: u, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
            }, d.getTranslate = function (t, e) {
                var i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop");return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
            }, d.goTo = function (t, e) {
                this.setPosition(t, e), this.layoutPosition();
            }, d.moveTo = d._transitionTo, d.setPosition = function (t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
            }, d._nonTransition = function (t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
                    t.onTransitionEnd[e].call(this);
                }
            }, d.transition = function (t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
                    e.onEnd[i] = t.onTransitionEnd[i];
                }for (i in t.to) {
                    e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                }if (t.from) {
                    this.css(t.from);var n = this.element.offsetHeight;n = null;
                }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
            };var l = "opacity," + o(a);d.enableTransition = function () {
                if (!this.isTransitioning) {
                    var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: l, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(h, this, !1);
                }
            }, d.onwebkitTransitionEnd = function (t) {
                this.ontransitionend(t);
            }, d.onotransitionend = function (t) {
                this.ontransitionend(t);
            };var c = { "-webkit-transform": "transform" };d.ontransitionend = function (t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = c[t.propertyName] || t.propertyName;if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                        var o = e.onEnd[n];o.call(this), delete e.onEnd[n];
                    }this.emitEvent("transitionEnd", [this]);
                }
            }, d.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(h, this, !1), this.isTransitioning = !1;
            }, d._removeStyles = function (t) {
                var e = {};for (var i in t) {
                    e[i] = "";
                }this.css(e);
            };var f = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return d.removeTransitionStyles = function () {
                this.css(f);
            }, d.stagger = function (t) {
                t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
            }, d.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }, d.remove = function () {
                return s && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
                    this.removeElem();
                }), void this.hide()) : void this.removeElem();
            }, d.reveal = function () {
                delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
            }, d.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }, d.getHideRevealTransitionEndProperty = function (t) {
                var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
                    return i;
                }
            }, d.hide = function () {
                this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
                    e = {},
                    i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
            }, d.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }, d.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }, n;
        }), function (t, e) {
            "use strict";
            "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, r) {
                return e(t, i, n, o, r);
            }) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
        }(window, function (t, e, i, n, o) {
            "use strict";
            function r(t, e) {
                var i = n.getQueryElement(t);if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);var o = ++l;this.element.outlayerGUID = o, c[o] = this, this._create();var r = this._getOption("initLayout");r && this.layout();
            }function s(t) {
                function e() {
                    t.apply(this, arguments);
                }return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
            }function a(t) {
                if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
                    i = e && e[1],
                    n = e && e[2];if (!i.length) return 0;i = parseFloat(i);var o = m[n] || 1;return i * o;
            }var h = t.console,
                u = t.jQuery,
                d = function d() {},
                l = 0,
                c = {};r.namespace = "outlayer", r.Item = o, r.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var f = r.prototype;n.extend(f, e.prototype), f.option = function (t) {
                n.extend(this.options, t);
            }, f._getOption = function (t) {
                var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
            }, r.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, f._create = function () {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
            }, f.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }, f._itemize = function (t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
                    var r = e[o],
                        s = new i(r, this);n.push(s);
                }return n;
            }, f._filterFindItemElements = function (t) {
                return n.filterFindElements(t, this.options.itemSelector);
            }, f.getItemElements = function () {
                return this.items.map(function (t) {
                    return t.element;
                });
            }, f.layout = function () {
                this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
                    e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
            }, f._init = f.layout, f._resetLayout = function () {
                this.getSize();
            }, f.getSize = function () {
                this.size = i(this.element);
            }, f._getMeasurement = function (t, e) {
                var n,
                    o = this.options[t];o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0;
            }, f.layoutItems = function (t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
            }, f._getItemsForLayout = function (t) {
                return t.filter(function (t) {
                    return !t.isIgnored;
                });
            }, f._layoutItems = function (t, e) {
                if (this._emitCompleteOnItems("layout", t), t && t.length) {
                    var i = [];t.forEach(function (t) {
                        var n = this._getItemLayoutPosition(t);n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n);
                    }, this), this._processLayoutQueue(i);
                }
            }, f._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }, f._processLayoutQueue = function (t) {
                this.updateStagger(), t.forEach(function (t, e) {
                    this._positionItem(t.item, t.x, t.y, t.isInstant, e);
                }, this);
            }, f.updateStagger = function () {
                var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
            }, f._positionItem = function (t, e, i, n, o) {
                n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
            }, f._postLayout = function () {
                this.resizeContainer();
            }, f.resizeContainer = function () {
                var t = this._getOption("resizeContainer");if (t) {
                    var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
                }
            }, f._getContainerSize = d, f._setContainerMeasure = function (t, e) {
                if (void 0 !== t) {
                    var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
                }
            }, f._emitCompleteOnItems = function (t, e) {
                function i() {
                    o.dispatchEvent(t + "Complete", null, [e]);
                }function n() {
                    s++, s == r && i();
                }var o = this,
                    r = e.length;if (!e || !r) return void i();var s = 0;e.forEach(function (e) {
                    e.once(t, n);
                });
            }, f.dispatchEvent = function (t, e, i) {
                var n = e ? [e].concat(i) : i;if (this.emitEvent(t, n), u) if (this.$element = this.$element || u(this.element), e) {
                    var o = u.Event(e);o.type = t, this.$element.trigger(o, i);
                } else this.$element.trigger(t, i);
            }, f.ignore = function (t) {
                var e = this.getItem(t);e && (e.isIgnored = !0);
            }, f.unignore = function (t) {
                var e = this.getItem(t);e && delete e.isIgnored;
            }, f.stamp = function (t) {
                t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
            }, f.unstamp = function (t) {
                t = this._find(t), t && t.forEach(function (t) {
                    n.removeFrom(this.stamps, t), this.unignore(t);
                }, this);
            }, f._find = function (t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0;
            }, f._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }, f._getBoundingRect = function () {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
            }, f._manageStamp = d, f._getElementOffset = function (t) {
                var e = t.getBoundingClientRect(),
                    n = this._boundingRect,
                    o = i(t),
                    r = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom };return r;
            }, f.handleEvent = n.handleEvent, f.bindResize = function () {
                t.addEventListener("resize", this), this.isResizeBound = !0;
            }, f.unbindResize = function () {
                t.removeEventListener("resize", this), this.isResizeBound = !1;
            }, f.onresize = function () {
                this.resize();
            }, n.debounceMethod(r, "onresize", 100), f.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }, f.needsResizeLayout = function () {
                var t = i(this.element),
                    e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
            }, f.addItems = function (t) {
                var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
            }, f.appended = function (t) {
                var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
            }, f.prepended = function (t) {
                var e = this._itemize(t);if (e.length) {
                    var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
                }
            }, f.reveal = function (t) {
                if (this._emitCompleteOnItems("reveal", t), t && t.length) {
                    var e = this.updateStagger();t.forEach(function (t, i) {
                        t.stagger(i * e), t.reveal();
                    });
                }
            }, f.hide = function (t) {
                if (this._emitCompleteOnItems("hide", t), t && t.length) {
                    var e = this.updateStagger();t.forEach(function (t, i) {
                        t.stagger(i * e), t.hide();
                    });
                }
            }, f.revealItemElements = function (t) {
                var e = this.getItems(t);this.reveal(e);
            }, f.hideItemElements = function (t) {
                var e = this.getItems(t);this.hide(e);
            }, f.getItem = function (t) {
                for (var e = 0; e < this.items.length; e++) {
                    var i = this.items[e];if (i.element == t) return i;
                }
            }, f.getItems = function (t) {
                t = n.makeArray(t);var e = [];return t.forEach(function (t) {
                    var i = this.getItem(t);i && e.push(i);
                }, this), e;
            }, f.remove = function (t) {
                var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
                    t.remove(), n.removeFrom(this.items, t);
                }, this);
            }, f.destroy = function () {
                var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
                    t.destroy();
                }), this.unbindResize();var e = this.element.outlayerGUID;delete c[e], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace);
            }, r.data = function (t) {
                t = n.getQueryElement(t);var e = t && t.outlayerGUID;return e && c[e];
            }, r.create = function (t, e) {
                var i = s(r);return i.defaults = n.extend({}, r.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, r.compatOptions), i.namespace = t, i.data = r.data, i.Item = s(o), n.htmlInit(i, t), u && u.bridget && u.bridget(t, i), i;
            };var m = { ms: 1, s: 1e3 };return r.Item = o, r;
        }), function (t, e) {
            "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
        }(window, function (t, e) {
            var i = t.create("masonry");i.compatOptions.fitWidth = "isFitWidth";var n = i.prototype;return n._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
                    this.colYs.push(0);
                }this.maxY = 0, this.horizontalColIndex = 0;
            }, n.measureColumns = function () {
                if (this.getContainerWidth(), !this.columnWidth) {
                    var t = this.items[0],
                        i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
                }var n = this.columnWidth += this.gutter,
                    o = this.containerWidth + this.gutter,
                    r = o / n,
                    s = n - o % n,
                    a = s && 1 > s ? "round" : "floor";r = Math[a](r), this.cols = Math.max(r, 1);
            }, n.getContainerWidth = function () {
                var t = this._getOption("fitWidth"),
                    i = t ? this.element.parentNode : this.element,
                    n = e(i);this.containerWidth = n && n.innerWidth;
            }, n._getItemLayoutPosition = function (t) {
                t.getSize();var e = t.size.outerWidth % this.columnWidth,
                    i = e && 1 > e ? "round" : "ceil",
                    n = Math[i](t.size.outerWidth / this.columnWidth);n = Math.min(n, this.cols);for (var o = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", r = this[o](n, t), s = { x: this.columnWidth * r.col, y: r.y }, a = r.y + t.size.outerHeight, h = n + r.col, u = r.col; h > u; u++) {
                    this.colYs[u] = a;
                }return s;
            }, n._getTopColPosition = function (t) {
                var e = this._getTopColGroup(t),
                    i = Math.min.apply(Math, e);return { col: e.indexOf(i), y: i };
            }, n._getTopColGroup = function (t) {
                if (2 > t) return this.colYs;for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                    e[n] = this._getColGroupY(n, t);
                }return e;
            }, n._getColGroupY = function (t, e) {
                if (2 > e) return this.colYs[t];var i = this.colYs.slice(t, t + e);return Math.max.apply(Math, i);
            }, n._getHorizontalColPosition = function (t, e) {
                var i = this.horizontalColIndex % this.cols,
                    n = t > 1 && i + t > this.cols;i = n ? 0 : i;var o = e.size.outerWidth && e.size.outerHeight;return this.horizontalColIndex = o ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) };
            }, n._manageStamp = function (t) {
                var i = e(t),
                    n = this._getElementOffset(t),
                    o = this._getOption("originLeft"),
                    r = o ? n.left : n.right,
                    s = r + i.outerWidth,
                    a = Math.floor(r / this.columnWidth);a = Math.max(0, a);var h = Math.floor(s / this.columnWidth);h -= s % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);for (var u = this._getOption("originTop"), d = (u ? n.top : n.bottom) + i.outerHeight, l = a; h >= l; l++) {
                    this.colYs[l] = Math.max(d, this.colYs[l]);
                }
            }, n._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
            }, n._getContainerFitWidth = function () {
                for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
                    t++;
                }return (this.cols - t) * this.columnWidth - this.gutter;
            }, n.needsResizeLayout = function () {
                var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
            }, i;
        });

        if ($('.news.module .content_list')[0]) {
            void 0;
            var $grid = $('.news.module .content_list').masonry({
                // options
                itemSelector: '.item_block'
                // columnWidth: 368;
            });
            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });
        };
    }
};

Math.tween = {
    Linear: function Linear(x, t, b, c, d) {
        return c * t / d + b;
    }, easeOut: function easeOut(x, t, b, c, d) {
        //减速曲线
        return -c * (t /= d) * (t - 2) + b;
    },
    mcsEaseOut: function mcsEaseOut(x, t, b, c, d) {
        var ts = (t /= d) * t,
            tc = ts * t;
        return b + c * (0.499999999999997 * tc * ts + -2.5 * ts * ts + 5.5 * tc + -6.5 * ts + 4 * t);
    }
    // $.extend(jQuery.easing, Tween);


};$.extend({
    miniAnimate: function miniAnimate(form, dis, time, fn) {

        var AniTimer,
            _run,
            _this = this,
            t,
            nextPos,
            obj;
        if (!t) t = 0;
        // cancelAnimationFrame(AniTimer);
        _run = function run() {
            t += 17;
            nextPos = Math.tween.mcsEaseOut(null, t, form, dis, time);
            fn(nextPos);
            if (t >= time) {
                t = time;
                fn(form + dis);
            } else {
                AniTimer = requestAnimationFrame(_run);
            }
        };
        obj = {
            begin: function begin() {
                _run();
            },
            stop: function stop() {
                cancelAnimationFrame(AniTimer);
                t = 0;
                void 0;
            }
        };
        return obj;
    }
});

for (var key in options) {
    if (options.hasOwnProperty(key)) {
        var item = options[key];
        if (item.css) {
            newStyleContent[key] = item.css;
        }
        if (item.fn) {
            job[key] = item.fn;
        }
    }
}

var tools = {
    getRelPos: function getRelPos(el1, el2) {
        void 0;
        var el1Pos = $(el1).offset(),
            el2Pos = $(el2).offset();
        return {
            left: Math.round(el2Pos.left - el1Pos.left),
            top: Math.round(el2Pos.top - el1Pos.top)
        };
    },
    hideEl: function hideEl(el, pos) {
        $(window).scroll(function (ev) {
            var scrollPos = $(window).scrollTop();
            if (pos < scrollPos) {
                $(el).removeClass('outPos').addClass('inPos');
            } else {
                $(el).removeClass('inPos').addClass('outPos');
            }
        });
    },
    tabActive: function tabActive($el, className) {
        className = className || 'active';
        $el.siblings().removeClass(className);
        $el.addClass(className);
    },
    getTransfrom: function getTransfrom(el, attr) {
        var str = el.style.transform;
        var pattern = new RegExp(attr + "\\((-?[0-9]+\\.?[0-9]{0,2}).*\\)");
        str.match(pattern);

        return RegExp.$1;
    },
    alertBx: function alertBx($dom, fn) {
        var $el = $('<div class="ff_bodyMask"><div class="ff_bodyMask-content mlist"></div></div>');
        $el.find('.ff_bodyMask-content').append($dom);
        $el.appendTo($('body')).fadeIn().on({
            'mousewheel.stopScroll': function mousewheelStopScroll() {
                return false;
            },
            'click.closeMask': function closeMask(ev) {
                if (ev.target == $(this)[0]) {
                    $(this).off().fadeOut();
                }
            }
        }).find('.ff_bodyMask-content');

        fn && fn();
    },
    dragEl: function dragEl(el, evList, limit) {
        var endMove;
        var upDataLimit = function upDataLimit(newData) {
            limit.area = newData;
        };
        var initEv = {
            dragEv: function dragEv(ev) {
                var tra,
                    endEv,
                    endPos = {},
                    toX = ev.changePos.x + ev.transformPos.x,
                    toY = ev.changePos.y + ev.transformPos.y;

                void 0;
                if (limit.area.x) {
                    if (toX <= limit.area.x) {
                        toX = limit.area.x - Math.sqrt(2 * Math.abs(toX - limit.area.x) / 0.1);
                        endPos.x = limit.area.x;
                    }
                    void 0;
                    if (toX >= 0) {
                        toX = Math.sqrt(2 * toX / 0.1);
                        endPos.x = 0;
                    }
                }

                if (limit.area.y) {

                    if (toY <= limit.area.y) {
                        toY = limit.area.y[0];
                    }
                    if (toY >= 0) {
                        toY = 0;
                    }
                }
                if (limit.dir == 'x') {

                    tra = 'translateX(' + toX + 'px)';
                } else if (limit.dir == 'y') {

                    tra = 'translateY(' + toY + 'px)';
                } else {

                    tra = 'translateX(' + toX + 'px) translateY(' + toY + 'px)';
                };

                $(this).css({
                    transform: tra
                });
                return endPos;
            }
        };
        $(el).on({
            'mousedown': function mousedown(ev) {
                var changePos, endPos, endChangePos, drageTime, moveSpeed;
                var initPos = {
                    x: ev.clientX,
                    y: ev.clientY
                };
                var transformPos = {
                    x: +tools.getTransfrom($(el)[0], 'translateX'),
                    y: +tools.getTransfrom($(el)[0], 'translateY')
                };
                ev.initPos = initPos;
                $(el).css({
                    transition: "0s"
                });
                if (typeof endMove != 'undefined') {
                    endMove.stop();
                    moveSpeed = 0;
                }
                evList.begin && evList.begin.call($(el)[0], ev);

                $('body').on({
                    'mousemove.drage': function mousemoveDrage(ev) {
                        moveSpeed = 0;
                        var movePos = {
                            x: ev.clientX,
                            y: ev.clientY
                        };
                        if (changePos) {
                            endChangePos = {
                                x: changePos.x - (movePos.x - initPos.x)
                            };
                            moveSpeed = endChangePos.x / (+new Date() - drageTime);
                            // console.log(moveSpeed, 'moveSpeed');
                            // console.log(moveSpeed,endChangePos.x, (+new Date()) - drageTime, 'moveS');
                        }
                        changePos = {
                            x: movePos.x - initPos.x,
                            y: movePos.y - initPos.y
                        };
                        drageTime = +new Date();
                        ev.movePos = movePos;
                        ev.changePos = changePos;
                        ev.transformPos = transformPos;
                        endPos = initEv.dragEv.call($(el)[0], ev);
                        evList.change && evList.change.call($(el)[0], ev);
                    },
                    'mouseup.drage': function mouseupDrage(ev) {
                        $(this).off('mousemove.drage');
                        $(this).off('mouseup.drage');
                        if (typeof endMove != 'undefined') {
                            endMove.stop();
                        }
                        var str = '';
                        if (endPos && typeof endPos.x != 'undefined') {
                            str += 'translateX(' + endPos.x + 'px)';
                        }
                        if (endPos && typeof endPos.y != 'undefined') {

                            str += 'translateY(' + endPos.y + 'px)';
                        }
                        if (str) {
                            $(el).css({
                                transition: '0.5s',
                                transform: str
                            });
                        } else {
                            $(el).css({
                                transition: '0s'
                            });
                            void 0;
                            if (Math.abs(changePos.x) < 50 || Math.abs(moveSpeed) <= 0.2) return;
                            var startPos = +tools.getTransfrom($(el)[0], 'translateX');
                            var dis = startPos > 0 ? +(moveSpeed * 400) : -(moveSpeed * 400);
                            endMove = $.miniAnimate(Math.floor(startPos), Math.floor(dis), 1000, function (a) {
                                var ceshi = Math.ceil(+a);
                                if (ceshi <= limit.area.x) {
                                    ceshi = limit.area.x;
                                }
                                if (ceshi >= 0) {
                                    ceshi = 0;
                                }
                                $(el).css({
                                    transform: 'translateX(' + ceshi + 'px)'
                                });
                            });
                            endMove.begin();
                        }
                    }
                });
            }
        });
        return upDataLimit;
    }
};

var selfTools = {
    bindPage: function bindPage(fn, pageList, parameter) {

        var fnName = fn.name;

        for (var i = 0; i < pageList.length; i++) {
            var doSome = fn;
            var item = pageList[i];

            YY.Page[item].prototype.things.push([doSome, parameter]);
        }
    },
    addStyle: function addStyle() {
        var newStyle = '<style id="ff_add">';
        for (var key in newStyleContent) {
            if (newStyleContent.hasOwnProperty(key)) {
                // console.log(config, key);
                // if (config[key].open) {
                var style = newStyleContent[key];
                newStyle += style;
                // }
            }
        }
        newStyle += '</style>';
        $(newStyle).insertBefore($('link')[0]);
    }
};

var pageConfig = {
    list: ['indexMain', 'baseMain', 'postMain']
};

var config = _defineProperty({
    initThings: {
        page: pageConfig.list,
        fn: job.initThings
    },
    headerHover: {
        page: pageConfig.list,
        fn: job.headerHover
    },
    parallax: {
        page: ['indexMain'],
        fn: job.parallax,
        parameter: ['#topSlider .content_list']
    },
    parallaxPage: {
        page: ['baseMain'],
        fn: job.parallaxPage,
        parameter: ['.npagePage #banner div']
    },
    sliderDotThemb: {
        page: ['indexMain'],
        fn: job.sliderDotThemb
    },
    sliderDirThemb: {
        page: ['indexMain'],
        fn: job.sliderDirThemb,
        parameter: ['free']
    },
    sliderTitle: {
        page: ['indexMain'],
        fn: job.sliderTitle
    },
    npostSlider: {
        page: ['postMain'],
        fn: job.npostSlider
    },
    postTabHiden: {
        page: ['postMain'],
        fn: job.postTabHiden
    },
    specialModule: {
        page: ['indexMain'],
        fn: job.specialModule
    },
    teamTabs: {
        page: ['indexMain'],
        fn: job.teamTabs
    },
    teamTabsTwo: {
        page: ['indexMain'],
        fn: job.teamTabsTwo
    },
    masonry: {
        page: ['indexMain', 'postMain'],
        fn: job.masonry
    },
    normalTeamTabs: {
        page: ['indexMain'],
        fn: job.normalTeamTabs,
        parameter: [{}, true]
    },
    searchForm: {
        page: pageConfig.list,
        fn: job.searchForm,
        parameter: [{
            style: 'two',
            type: 'LR'
        }]
    },
    timeTurnEn: {
        page: pageConfig.list,
        fn: job.timeTurnEn,
        parameter: ['.service .item_block .date_wrap']
    },
    headerHoverBase: {
        page: pageConfig.list,
        fn: job.headerHoverBase,
        parameter: ['#header']
    },
    teamTabPop: {
        page: ['indexMain'],
        fn: job.teamTabPop
    },
    postSliderThemb: {
        page: ['postMain'],
        fn: job.postSliderThemb,
        parameter: ['LR']
    },
    moduleControl: {
        page: ['indexMain'],
        fn: job.moduleControl
    },
    privateproject: {
        page: ['indexMain', 'baseMain'],
        fn: job.privateproject
    },
    videomplay: {
        page: ['indexMain', 'baseMain'],
        fn: job.videomplay
    }
}, 'masonry', {
    page: pageConfig.list,
    fn: job.masonry
});

selfTools.addStyle();

(function () {

    for (var i = 0; i < pageConfig.list.length; i++) {
        var item = pageConfig.list[i];
        YY.Page[item].prototype.things = [];
        YY.Page[item].prototype.interfaceFun = function () {
            void 0;
            var _this = this;
            for (var i = 0; i < this.things.length; i++) {
                var fn = this.things[i][0];
                var arg = this.things[i][1];
                fn.apply(_this, arg);
            }
        };
    }

    // for (var key in this.config) {
    //     if (this.config.hasOwnProperty(key)) {
    //         var val = this.config[key];
    //         if (key) {
    //             selfTools.bindPage(val.fn, val.page, val.parameter);
    //         }
    //     }
    // }

    for (var key in job) {
        if (job.hasOwnProperty(key)) {
            var element = job[key];
            var val = this.config[key];
            selfTools.bindPage(val.fn, val.page, val.parameter);
        }
    }
})();