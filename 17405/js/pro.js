// JavaScript Document
$(function() {



    //	窗口滚动条
    var htmlNs = $("html").niceScroll({
        cursorwidth: 10,
        zindex: 9999,
        cursoropacitymin: 0.3,
        cursoropacitymax: 0.8,
        cursorborder: 0,
        horizrailenabled: false
    });
    htmlNs.cursor.css({
        width: 5
    });
    var objNs = (htmlNs.ispage) ? htmlNs.rail : htmlNs.win;
    objNs.hover(function() {
        htmlNs.state = true;
        htmlNs.cursor.stop().animate({
            width: 10
        }, 100);
    }, function() {
        if (htmlNs.rail.drag) {
            htmlNs.cursor.css({
                'opacity': '0.8'
            });
            return;
        }
        htmlNs.cursor.stop().animate({
            width: 5
        }, 100);
    });
    $(document).mouseup(function() {
        if (htmlNs.state) {
            htmlNs.state = false;
            htmlNs.cursor.stop().animate({
                width: 5
            }, 100);
        }
    });
    //	requestAnimationFrame兼容调用
    //	requestAnimationFrame();

    $(window).on('resize', function() {
        //	footer缃簳
        bottomFooter();

    });

    $(window).on('load', function() {
        //	footer缃簳
        bottomFooter();

        $('.group-circle .scrollWrap ul').carouFredSel({
            auto: false,
            responsive: true,
            prev: '.group-circle .prev',
            next: '.group-circle .next',
            items: 6,
            scroll: {
                items: 1
            }
        });


   
   
        });

       
	   
})


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
