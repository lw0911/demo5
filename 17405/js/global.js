// JavaScript Document
$(function() {
    (function() {
        var lastTime = 0;
        var vendors = ['ms', 'moz', 'webkit', 'o'];
        for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++
            x) {
            window.requestAnimationFrame = window[vendors[x] +
                'RequestAnimationFrame'];
            window.cancelAnimationFrame = window[vendors[x] +
                'CancelAnimationFrame'] || window[vendors[x] +
                'CancelRequestAnimationFrame'];
        }
        if (!window.requestAnimationFrame) window.requestAnimationFrame =
            function(callback, element) {
                var currTime = new Date().getTime();
                var timeToCall = Math.max(0, 16 - (currTime -
                    lastTime));
                var id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);
                lastTime = currTime + timeToCall;
                return id;
            };
        if (!window.cancelAnimationFrame) window.cancelAnimationFrame =
            function(id) {
                clearTimeout(id);
            };
    }());




  
  
        /* 下拉框滚动条 */
        $('.selectWarp .options').mCustomScrollbar({
            theme: "dark-thin",
            scrollbarPosition: 'inside',
            autoHideScrollbar: true,
            autoExpandScrollbar: true,
            advanced: {
                autoExpandHorizontalScroll: true
            }
        });

        /*下拉框*/
       $('.selectWarp').each(function() {
            var obj = $(this);
            var selectBtn = obj.children('.selectBtn');
            var option = obj.children('.options');

            obj.on('click', '.selectBtn', function() {
                $(this).siblings('.options').slideToggle(
                    200,
                    function() {
                        option.mCustomScrollbar(
                            'update');
                    });
                if (!$(this).hasClass('down')) {
                    selectBtn.addClass('down');
                } else {
                    selectBtn.removeClass(
                        'down');
                }
            });

            obj.on('click', 'li', function() {
                var text = $(this).text();
                selectBtn.removeClass('down').children(
                    '.value').text(text);
                option.slideUp(100, function() {
                    option.mCustomScrollbar(
                        'update');
                });
            });

            obj.mouseleave(function() {
                selectBtn.removeClass('down');
                option.slideUp(100, function() {
                    option.mCustomScrollbar(
                        'update');
                });
            });
        });

 
    //鼠标滑过图片缩放效果
    //	$('.scaleimg').hover(function(){
    //		if(!supportCss3('transition')){
    //			$(this).find('img').css({'max-width':'none','max-height':'none'});
    //			if(!$(this).find('img').is(':animated')){
    //				$(this).find('img').animate({width:'110%',marginTop:'-5%',marginLeft:'-5%'});
    //			}
    //		}
    //	},function(){
    //		if(!supportCss3('transition')){
    //			$(this).find('img').css({'max-width':'none','max-height':'none'});
    //			$(this).find('img').animate({width:'100%',marginTop:'0',marginLeft:'0'});
    //		}
    //	});

    //	返回顶部
   $('.gotop').click(function() {
        $($.browser.webkit ? "body" : "html").animate({
            scrollTop: 0
        }, 400 + $(window).scrollTop() * 0.3);
    });


    //	返回顶部按钮显隐
    $(window).scroll(function() {
        if ($(window).scrollTop() > 200) {
            if (!$('.gotop').is(':visible')) {
                $('.gotop').fadeIn();
            }
        } else {
            $('.gotop').fadeOut();
        }
    });


    /*	单选按钮	*/
     $('.radio').click(function() {
        if (!$(this).hasClass('check')) {
            $(this).addClass('check').siblings().removeClass(
                'check');
        }
    });

    $('.close').click(function() {
        $(this).parents('.popWindow').fadeOut(100);
    });

    // $('.close').click(function() {
    //     $(this).parent().parent('.popWindow').fadeOut(100);
    // });
    ///
});

function yearBar(arr, now) {
    var alen = arr.length;
    var nowIdx = now;
    $('.date-area .date-tab .to').text(arr[0]);
    $('.date-area .date-tab .from').text(arr[alen - 1]);
    $('.date-area .date-tab .now').text(arr[nowIdx]);
    $('.date-list ul').eq(nowIdx).css('display', 'block');
    $('.date-area .date-tab .next').click(function() {
        if (nowIdx > 0) {
            nowIdx--;
            change(nowIdx);
        }
    });

    $('.date-area .date-tab .prev').click(function() {
        if (nowIdx < alen - 1) {
            nowIdx++;
            change(nowIdx);
        }
    });

    function change(i) {
        $('.date-area .date-tab .now').text(arr[i]);
        $('.date-list ul').eq(i).fadeIn(100).siblings().css('display', 'none');
        $('.date-area .date-list ul').mCustomScrollbar('update');
    };
};

//	footer置底
function bottomFooter() {
    var bHeight = $('body').height();
    var wHeight = $(window).height();
    var fHeight = $('#footer').height();
    if (!$('#footer').hasClass('fBottom')) {
        if (bHeight < wHeight) {
            $('#footer').addClass('fBottom');
        }
    } else {
        if (bHeight + fHeight >= wHeight) {
            $('#footer').removeClass('fBottom');
        }
    }
};
//	打开弹窗
function openAlert(ele) {
    $(ele).fadeIn(100);
};
//	关闭弹窗
function closeAlert() {
    $('.popWindow').fadeOut(100);
};
//	滚轮驱动事件 ele-对象，n-矫正值
function scrollPos(ele, n) {
    return $(window).scrollTop() >= ele.offset().top - ($(window).height() / 2) +
        n;
};

function supportCss3(style) {
    var prefix = ['webkit', 'Moz', 'ms', 'o'],
        i,
        humpString = [],
        htmlStyle = document.documentElement.style,
        _toHumb = function(string) {
            return string.replace(/-(\w)/g, function($0, $1) {
                return $1.toUpperCase();
            });
        };

    for (i in prefix)
        humpString.push(_toHumb(prefix[i] + '-' + style));
    humpString.push(_toHumb(style));
    for (i in humpString)
        if (humpString[i] in htmlStyle) return true;
    return false;
}
//	浏览器前缀适配函数
function transformFix() { //第1个参数为操作对象，第2至n-1个参数为传入的transform键，第n个参数true为transform前缀,false为css属性值前缀
      if (arguments[arguments.length - 1]) {
        var str = '';
        for (var i = 1; i < arguments.length - 1; i++) {
            if (i > 1) {
                str = str + ' ' + arguments[i];
            } else {
                str = str + arguments[i];
            }
        };
        arguments[0].css({
            '-webkit-transform': str,
            '-moz-transform': str,
            '-ms-transform': str,
            '-o-transform': str,
            'transform': str
        });
    } else {
        var browser = ['-webkit-' + arguments[1], '-moz-' + arguments[1],
            '-ms-' + arguments[1], '-o-' + arguments[1], arguments[1]
        ];
        var val = arguments[2],
            j = 0;
        for (j in browser) {
            arguments[0].css(browser[j], val);
        };
    }
};

//	计数增长
function numGrow(obj, time, delay) {
    var num = obj.text().replace(/[^0-9]/ig, "");
    var g = 0;
    obj.text(g);
    var step = Math.ceil(num / (time / delay));
    var time = setInterval(function() {
        if (g <= num - step) {
            g += step;
        } else {
            g = num;
        }
        obj.text(g);
        if (g >= num) {
            clearInterval(time);
            return false;
        }
    }, delay);
};

/*	等比自适应函数	*/
function autoHeight(obj, w, h) {
    var per = w / h;
    obj.css('height', obj.width() / per);
};


/*	等比缩放函数	*/
function autoScale(ele) {
    var per;
    if ($(window).width() < 320) {
        per = 1;
    };
    if ($(window).width() >= 320 && $(window).width() <= 640) {
        per = $(window).width() / 320;
    };
    if ($(window).width() > 640) {
        per = 2;
    };
    ele.css({
        '-webkit-transform': 'scale(' + per + ')',
        '-moz-transform': 'scale(' + per + ')',
        'transform': 'scale(' + per + ')'
    });
};


/*	多行文本省略号	*/
$(".figcaption").each(function(i) {
    var divH = $(this).height();
    var $p = $("p", $(this)).eq(0);
    while ($p.outerHeight() > divH) {
        $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/,
            "..."));
    };
});

/* 结束animate动画 */
// $('#yourElement').animateCss('bounce');
$.fn.extend({
    animateCss: function(animationName) {
        var animationEnd =
            'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(
            animationEnd,
            function() {
                $(this).removeClass('animated ' + animationName);
            });
    }
});


//算术运算
//Math.pow(2,53)      // => 9007199254740992: 2 的 53次幂
//Math.round(.6)      // => 1.0: 四舍五入
//Math.ceil(.6)       // => 1.0: 向上求整
//Math.floor(.6)      // => 0.0: 向下求整
//Math.abs(-5)            // => 5: 求绝对值
//Math.max(x,y,z)         // 返回最大值
//Math.min(x,y,z)         // 返回最小值
//Math.random()       // 生成一个大于等于0小于1.0的伪随机数
//Math.PI             // π: 圆周率
//Math.E              // e: 自然对数的底数
//Math.sqrt(3)            // 3的平方根
//Math.pow(3, 1/3)        // 3的立方根
//Math.sin(0)             // 三角函数: 还有Math.cos, Math.atan等
//Math.log(10)            // 10的自然对数
//Math.log(100)/Math.LN10     // 以10为底100的对数
//Math.log(512)/Math.LN2  // 以2为底512的对数
//Math.exp(3)             // e的三次幂

//等边三角形的高
//l/2*Math.sqrt(3)

//日期和时间　
//var then = new Date(2011, 0, 1); // 2011年1月1日
//var later = new Date(2011, 0, 1, 17, 10, 30);// 同一天, 当地时间5:10:30pm,
//var now = new Date(); // 当前日期和时间
//var elapsed = now - then; // 日期减法：计算时间间隔的毫秒数
//later.getFullYear() // => 2011
//later.getMonth() // => 0: 从0开始计数的月份
//later.getDate() // => 1: 从1开始计数的天数
//later.getDay() // => 5: 得到星期几， 0代表星期日，5代表星期一
//later.getHours() // => 当地时间17: 5pm
//later.getUTCHours() // 使用UTC表示小时的时间，基于时区

//字符串处理　　
//var s = "hello, world"  // 定义一个字符串
//s.charAt(0)             // => "h": 第一个字符
//s.charAt(s.length-1)        // => "d": 最后一个字符
//s.substring(1,4)        // => "ell":第2～4个字符
//s.slice(1,4)            // => "ell": 同上
//s.slice(-3)             // => "rld": 最后三个字符
//s.indexOf("l")     	 // => 2: 字符l首次出现的位置
//s.lastIndexOf("l")      // => 10:字符l最后一次出现的位置
//s.indexOf("l", 3)       // => 3:在位置3及之后首次出现字符l的位置
//s.split(", ")      	 // => ["hello", "world"] 分割成子串
//s.replace("h", "H")         // => "Hello, world": 全文字符替换
//s.toUpperCase()

//ie8
//if($.browser.msie && parseInt($.browser.version)==8){
//
//};

//倒序排数
//function reverseNum(num){
//	var num=parseInt(num.replace(/[^0-9]/ig,""));
//	var rev=0;
//	do{
//		var lastNum=num%10;
//		rev=(rev*10)+lastNum;
//		num=parseInt(num/10);
//	} while(num>0);
//	return rev;
//};
