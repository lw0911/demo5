/******************************************************************************
* filename: index.js
* Include Modul Scripting


*******************************************************************************/
SKIN_PATH="/Skins/default/";
function initCommonHeader() {
    $.get("/ajax.ashx?action=initcommonheader&t=" + Math.random(), function (rsp) {
        var IM = gav(rsp, "showIM");
        showIM(IM);
        var username = gav(rsp, "username");
        if (username.length > 0) {
            $j("commonHeaderGuest").hide();
            $j("commonHeaderUsername").html(username);
            $j("commonHeaderUser").fadeIn(80);
            $j("login_user").show();
            $j("user_default").hide();
            return username;
        }
    });
    return "";
}

$(function () {
    //广告
    jQuery("#flashs").slide({ mainCell: ".bd div", titCell: ".hd span", effect: "fold", autoPlay: true, interTime: 5000, delayTime: 500 });
    //头部导航高度
    $(".nav_daohang li:first").addClass("cur");


//    $("#nav li").removeClass("cur");
//    $("#nav li").eq(0).addClass("cur");

    $('.rtTop').hide();
    $('.rtTop h4 img').hover(function () {
        $(this).stop().animate({ "top": "-43px" }, 200)
    }, function () {
        $(this).stop().animate({ "top": "0" }, 200)
    })
    $(window).scroll(function () {
        var st = $(document).scrollTop();
        if (st > 3000) {
            $('.rtTop').show();
        } else {
            $('.rtTop').hide();
        }

    })
    $('.rtTop h4').click(function () {
        $('html,body').animate({ 'scrollTop': 0 }, 500);
    })
    $(".side ul li").hover(function () {
        $(this).find(".sidebox").stop().animate({ "width": "124px" }, 200).css({ "opacity": "1", "filter": "Alpha(opacity=100)", "background": "#ae1c1c" })
        $(this).find(".sidebox1").stop().animate({ "width": "240px" }, 200).css({ "opacity": "1", "filter": "Alpha(opacity=100)", "background": "#ae1c1c" })
    }, function () {
        $(this).find(".sidebox").stop().animate({ "width": "54px" }, 200).css({ "opacity": "0.8", "filter": "Alpha(opacity=80)", "background": "#000" })
    });
});


function resrt(str)
{

    str=str.toLocaleString().replace("","");
     str=str.toLocaleString().replace( "& ", "&amp; ");
    str=str.toLocaleString().replace( " ' ", "&#39; ");
    str=str.toLocaleString().replace( "alert", "&#34; ");
    str = str.toLocaleString().replace("script", "&#34; ");
    str=str.toLocaleString().replace( " < ", "&lt");
    str=str.toLocaleString().replace( "> ", "&gt");
    str=str.toLocaleString().replace("where", "$1h&#101;re ");
    str=str.toLocaleString().replace("select", "$1el&#101;ct ");
    str=str.toLocaleString().replace("insert", "$1ns&#101;rt ");
    str=str.toLocaleString().replace("create", "$1r&#101;ate ");
    str=str.toLocaleString().replace("drop","$1ro&#112; ");
    str=str.toLocaleString().replace("alter", "$1lt&#101;r ");
    str=str.toLocaleString().replace("delete", "$1el&#101;te ");
    str=str.toLocaleString().replace("update", "$1p&#100;ate ");
    str = str.toLocaleString().replace("and", "$1h&#101;nd ");
    str = str.toLocaleString().replace("</title>", "$1h&#101;nd ");
    str = str.toLocaleString().replace("</head>", "$1h&#101;nd ");
    str = str.toLocaleString().replace("</body>", "$1h&#101;nd ");
   
}

function xuanze() {
    
    var xz =document.getElementById('seachkeywords').value;
   
    if (xz.length == 0) {
        xz = "";
    }
    window.location.href = '/Search/Index.aspx?objtype=product&kwd=' +xz;
}
/********************
* 根据key获取 ajax对象节点值getAjaxVal
* xMsg : xml对象
* key : 节点的属性key
********************/
function gav(xMsg, key) {
    var jMsg = $(xMsg);
    var s = $(jMsg.find("node[key=" + key + "]")).text();
    return s;
}
//是否显示在线客服
function showIM(res) {
    if ($("#bodd").html() != "") {
        if (res == "True") {
            $("#bodd").show();
            $("#kefubtn").hide();
            $("#divOranIm").show();
        }
        else {
            $("#bodd").hide();
            $("#kefubtn").show();
            $("#divOranIm").hide();
        }
    }
}


//初始化头部热门关键词
function initCommonHeaderKeywords(_s) {
    if (_s == "") _s = "6";
    $.post("/ajax.ashx?action=initcommonheaderkeywords&t=" + Math.random(), {
        s: _s
    }, function (msg) {
        $j("commonHeaderkeywords").html(msg);
    });
}

function $j(elmId) { return $("#" + elmId); }
function $v(elmId, val) {
    if (val == null) {
        var o = $j(elmId).attr("value");
        if (o == null || o == undefined)
            return "";
        return o;
    } else {
        return $j(elmId).attr("value", val);
    }
}
function $tv(elmId) { return $.trim($v(elmId)); }


    //邮件订阅
function subscription(src, elmId) {
    if (elmId == null) {
        elmId = "txtSubscriptionEmail";
    }
    var _email = $.trim($j(elmId).val());
    var ptn = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (_email.length == 0) {
        $a("E-Mail 不可为空");
        $j(elmId).focus();
        return false;
    }
    if (!ptn.test(_email)) {
        $a("E-Mail 格式错误。");
        $j(elmId).focus();
        return false;
    }
    showProc(src);
    $.post("/ajax.ashx?action=subscription&t=" + Math.random(), {
        email: _email
    }, function(msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
        } else {
            $a(sMsg);
        }
        showProc(src, false);
    });
}

function showProc(src, show) {
    var oImg = $j("imgProc");
    if (show == null)
        show = true;
    if (show) {
        $(src).hide();
        if (oImg.length > 0) {
            oImg.remove();
        }
        $("<img src='" + SKIN_PATH + "img/processing.gif' id='imgProc' alt='正在处理' />").insertAfter(src);
    } else {
        $(src).show();
        oImg.remove();
    }
}
function hideDdl(cntrId) {
    var arrTags = ["select", "iframe", "applet", "object"];
    var jCntr;
    if (cntrId != null) {
        jCntr = $j(cntrId);
    } else {
        jCntr = $(document.body);
    }
    for (var i = 0; i < arrTags.length; ++i) {
        jCntr.find(arrTags[i]).css("visibility", "hidden");
    }

}

function $a(sMsg, boxType, autoClose, focusElmId, sTitle, behavior) {
    if (boxType == null) {
        boxType = 2;
    }
    if (autoClose == null) {
        autoClose = -1;
    }
    //标题
    if (sTitle == null) {
        sTitle = "消息提示";
    }

    hideDdl();
    var jMesbook1 = $j("mesbook1");
    if (jMesbook1.length == 0) {
        var sHtml = "<div id='mesbook1'>"
				+ "<div><img style='float:right' onclick='hideMsg()' id='mesbook1ImgClose' src='" + SKIN_PATH + "Img/ico9_close.gif' alt='关闭' class='fr p vam ml5' /><span id='mesbook1Title'></span></div>"
				+ "<dl class='b1'>"
					+ "<dt><img id='mesbook1Icon' src='" + SKIN_PATH + "Img/message_ico_03.gif' alt='' title='' /></dt>"
					+ "<dd class='l_25' id='mesbook1Msg'></dd>"
					+ "<dd class='b' style='visibility:hidden' id='mesbook1AutoClose'>此窗口<span id='mesbook1Delay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd>"
					+ "<dd id='mesbook1Btns'>"
					+ "<input type='button' class='b15' value='关 闭' />"
					+ "</dd>"
				+ "</dl>"
			+ "</div>";
        $(document.body).append(sHtml);
    }
    var jMesbook1 = $j("mesbook1");
    var jMesbook1ImgClose = $j("mesbook1ImgClose");
    var jMesbook1Icon = $j("mesbook1Icon");
    var jMesbook1Msg = $j("mesbook1Msg");
    var jMesbook1AutoClose = $j("mesbook1AutoClose");
    var jMesbook1Delay = $j("mesbook1Delay");
    var jMesbook1Title = $j("mesbook1Title");
    var jMesbook1Btns = $j("mesbook1Btns");

    jMesbook1Title.html(sTitle);
    //消息内容
    jMesbook1Msg.html(sMsg);
    //图标
    var iconPath = SKIN_PATH + "Img/";
    switch (boxType) {
        case 1: iconPath += "ico_ok.gif"; break;
        case 2: iconPath += "ico_info.gif"; break;
        case 3: iconPath += "ioc_ques.gif"; break;
        case -1: iconPath += "ico_error.gif"; break;
        default: iconPath += "ico_normal.gif"; break;
    }
    jMesbook1Icon.attr("src", iconPath);

    //关闭按钮
    var okBtn = jMesbook1Btns.find("input");
    okBtn.removeAttr("onclick");
    okBtn.click(function() {
        hideMsg();
        if (focusElmId != null) {
            $j(focusElmId).focus();
        }
        if (behavior != null) {
            behavior();
        }
    });
    jMesbook1ImgClose.removeAttr("onclick");
    jMesbook1ImgClose.click(function() {
        hideMsg();
        if (focusElmId != null) {
            $j(focusElmId).focus();
        }
        if (behavior != null) {
            behavior();
        }
    });
    okBtn.focus();

    //显示
    showFullBg();
    setCM("mesbook1");
    //relocation("mesbook1");
    jMesbook1.fadeIn(80);
}
/********************
* 显示一个全屏灰度背景
* elmId : 元素ID或元素
********************/
function showFullBg(elmId, isHideDdl, opacity, bgColor, zIndex, speed, behavior) {
    if (elmId == null) {
        elmId = "oran_full_bg";
    }
    var jElm = $j(elmId);
    if (jElm.length == 0) {
        var sHtml = "<div style='position:absolute;top:0;left:0;display:none;' id='" + elmId + "'></div>";
        $(document.body).append(sHtml);
    }
    if (opacity == null) {
        opacity = 0.75;
    }
    if (bgColor == null) {
        bgColor = "#777";
    }
    if (zIndex == null) {
        zIndex = "9";
    }
    if (speed == null) {
        speed = 80;
    }
    if (isHideDdl == null) {
        isHideDdl = true;
    }
    var jElm = $j(elmId);
    var dd = document.documentElement;
    var sWidth = dd.scrollWidth;
    var sHeight = dd.scrollHeight;
    var cH = dd.clientHeight;
    var cW = dd.clientWidth;
    if (sHeight < cH) {
        sHeight = cH;
    }
    if (sWidth < cW) {
        sWidth = cW;
    }
    jElm.css({ "z-index": zIndex, "background": bgColor, "opacity": opacity, "filter": "progid:DXImageTransform.Microsoft.Alpha(opacity=" + opacity * 100 + ")" });
    jElm.css({ "height": sHeight, "width": sWidth });
    if (isHideDdl) {
        hideDdl(null, behavior);
    }
    jElm.fadeIn(speed);
    if (behavior != null) {
        behavior();
    }
}

function setCM(elmId, speed) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (speed == null) {
        speed = 80;
    }
    var h = jElm.height() / 2;
    var w = jElm.width() / 2;
    var $w = $(window);
    var top = $w.height() / 2 + $w.scrollTop();
    //jElm.css({ "top": top+"px", "margin-top" : "0px !important", "left": "50%", "margin-left": "-" + w + "px" });
    jElm.css({ top: top + "px", marginTop: "0px", left: "50%", marginLeft: (-w) + "px" });
    var isIE = navigator.userAgent.toUpperCase().indexOf("MSIE") == -1 ? false : true;

    $w.scroll(function() {
        var top = $w.height() / 2 + $w.scrollTop();
        jElm.css({ 'top': top + 'px' });
    });
    //if(isIE){
    jElm.css({ "position": "absolute", "z-index": "999" });
    //    }else{
    //        jElm.css({ "position": "fixed", "z-index": "999"});
    //    }
    jElm.fadeIn(speed);
}

function setCMS(elmId, speed) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (speed == null) {
        speed = 80;
    }
    var h = jElm.height() / 2;
    var w = jElm.width() / 2;
    var height = document.documentElement.scrollTop;
    if (height > 100) {
        jElm.css({ "top": "50%", "margin-top": "-" + h + "px", "left": "50%", "margin-left": "-" + w + "px" });
    }
    else {
        h = 200;
        jElm.css({ "margin-top": "-" + h + "px", "left": "50%", "margin-left": "-" + w + "px" });
    }

    jElm.css({ "position": "absolute", "z-index": "999" });
    jElm.fadeIn(speed);
}
/********************
* 重置一个层为绝对居中于窗口的位置
* elmId : 元素ID或元素
********************/
function relocation(elmId) {
    var jElm;
    if (typeof (elmId).toString().toLowerCase() == "string") {
        jElm = $j(elmId);
    } else {
        jElm = $(elmId);
    }
    if (jElm.length == 0) {
        return;
    }

    var dd = document.documentElement;
    var t = (dd.scrollTop - (jElm.height() / 2) + "px");
    jElm.css({ "margin-top": t/*, "left": l */ });
}

/********************
* 隐藏消息提示层
********************/
function hideMsg() {
    showDdl();
    var jShadow = $j("mesbook1");
    hideFullBg();
    jShadow.fadeOut(80);
}

/********************
* 隐藏下拉框函数
********************/
function showDdl() {
    var arrTags = ["select", "iframe", "applet", "object"];
    for (var i = 0; i < arrTags.length; ++i) {
        $(arrTags[i]).css("visibility", "visible");
    }
}

/********************
* 隐藏全屏灰度背景
* speed : (可选)渐变消退的速度
********************/
function hideFullBg(elmId, speed) {
    if (elmId == null) {
        elmId = "oran_full_bg";
    }
    if (speed == null) {
        speed = 80;
    }
    var jElm = $j(elmId);
    jElm.fadeOut(speed);
    showDdl();
}




//用户登陆
function LoginCheck(_username, _password) {
    if (_username == undefined || _username.length == 0) {
        $a("请输入用户名", "错误提示", "txtUsername");
        return;
    }
    if (_password == undefined || _password.length == 0) {
        $a("请输入密码", "错误提示", "txtPassword");
        return;
    }
    $.post("/ajax.ashx?action=logincheck&t=" + Math.random(), {
        username: _username,
        password: _password
    },
       function(msg) {
           if (gav(msg, "state") == "1") {
               $a(gav(msg, "msg"), null, null, null, null, function() {
                   window.location.href = location.href + "?t=" + Math.random();
               });
               //window.location.href = url;
           }
           else {
               $a(gav(msg, "msg"));
           };
       });
}


function SearchObjectByGet(FieldList, url, getUrlOnly) {
    if (getUrlOnly == null) {
        getUrlOnly = false;
    }
    var newUrl = GetSearchURL(FieldList, url);
    if (getUrlOnly) {
        return newUrl;
    }
    window.location.href = newUrl;
}

//根据字段列表获取查询页面路径字符串
//FieldList格式：控件ID名称,查询字段名称|控件ID名称1,查询字段名称1|.. 
function GetSearchURL(FieldList, URL) {
    //1\定义变量
    if (URL == null) {
        URL = getIntactRawUrl();
    }

    //2\循环把变量列表取出来,组合成URL
    var TempFieldList = FieldList.split("|");
    for (var i = 0; i < TempFieldList.length; i++) {
        //1>寻找控件
        var control1 = TempFieldList[i].split(",");
        var controlname;
        var control = document.getElementById(control1[0]);
        if (control1.length == 2) { controlname = control1[1]; } else { controlname = control1[0]; }
        if (control != null) {
            //2>取出控件的值
            var controlvalue = control.value;
            //3>设置URL
            if (controlvalue != null) {
                URL += "&" + controlname + "=" + encodeURIComponent(controlvalue);
            }
        }
    }
    return URL;
}
function getIntactRawUrl() {
    var path = location.href;
    var pos;
    pos = path.lastIndexOf('#');
    path = path.substring(0, pos);
    return path;
}

/********************
* 增加书签
* url : URL
* title : 收藏项目的标题
********************/
function addBookmark(url, title) {
    if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    } else if (document.all) {
        window.external.AddFavorite(url, title);
    } else if (window.opera && window.print) {
        return true;
    }
}

//加入收藏
function addBookmark() {
    var title = document.title;
    var url = document.URL;
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

$(function () {
    document.onkeydown = keyDown;
    function keyDown(e) {
        enterHandler(e);
    }
    function enterHandler(event) {
        var keynum;
        if (window.event) // IE  
        {
            keynum = window.event.keyCode
        }
        else if (event.which) // Netscape/Firefox/Opera  
        {
            keynum = event.which
        }
        if (keynum == 13) {
            xuanze();
            if (window.event) {
                window.event.returnValue = false;
            }
            else {
                event.preventDefault();  //for firefox  
            }
        }
    }
});


$(function () {
 //头部导航高度
//    $("#nav li").removeClass("cur");
//    $("#nav li").eq(0).addClass("cur");

 $('.rtTop').hide();
    $('.rtTop h4 img').hover(function () {
        $(this).stop().animate({ "top": "-43px" }, 200)
    }, function () {
        $(this).stop().animate({ "top": "0" }, 200)
    })
    $(window).scroll(function () {
        var st = $(document).scrollTop();
        if (st > 3000) {
            $('.rtTop').show();
        } else {
            $('.rtTop').hide();
        }

    })
    $('.rtTop h4').click(function () {
        $('html,body').animate({ 'scrollTop': 0 }, 500);
    })
    $(".side ul li").hover(function () {
        $(this).find(".sidebox").stop().animate({ "width": "124px" }, 200).css({ "opacity": "1", "filter": "Alpha(opacity=100)", "background": "#ae1c1c" })
        $(this).find(".sidebox1").stop().animate({ "width": "240px" }, 200).css({ "opacity": "1", "filter": "Alpha(opacity=100)", "background": "#ae1c1c" })
    }, function () {
        $(this).find(".sidebox").stop().animate({ "width": "54px" }, 200).css({ "opacity": "0.8", "filter": "Alpha(opacity=80)", "background": "#000" })
    });
});


/********************
* 根据ID获取jQuery对象
* elmId : 元素ID
********************/
function $j(elmId) { return $("#" + elmId); }
/********************
* 根据ID获取文本框内容
* 重载1: 如果传递val参数，则修改文本框内容
* elmId : 元素ID
* val : 新的文本框内容
********************/
function $v(elmId, val) {

    if (val == null) {
        //var o = $j(elmId).attr("value");
        var o = $j(elmId).val();
        if (o == null || o == undefined) {
            return "";
        }
        return o;
    } else {
        //return $j(elmId).attr("value", val);
        return $j(elmId).val(val);
    }
}

/********************
* 清空文本框内容
* cntrId : 容器ID，不传递则以body为容器
********************/

function emptyText(cntrId) {
    var jTxts;
    if (cntrId == null) {
        jTxts = $("body").find("input[type=text]");
    } else {
        jTxts = $j(cntrId).find("input[type=text]");
    }
    var jTxtss;
    if (cntrId == null) {
        jTxtss = $("body").find("input[type=password]");
    } else {
        jTxtss = $j(cntrId).find("input[type=password]");
    }
    jTxts.each(function () {
        $(this).val("");
    });
    jTxtss.each(function () {
        $(this).val("");
    });
    if (cntrId == null)
        jTxts = $("body").find("textarea");
    else
        jTxts = $j(cntrId).find("textarea");
    jTxts.each(function () {
        $(this).val("");
    });
}

//发送留言
function sendLeaveword(src) {

    var sCompany = $v("LEAVEWORD_txtCompany");
    var sTel = $v("LEAVEWORD_txtTel");
    var sContact = $v("LEAVEWORD_txtContact");

    var sMail = $v("LEAVEWORD_txtMail");

    var sXuqiu = $v("LEAVEWORD_txtXuqiu");
    var err = "";
//    if (sContact == "") {
//        err += "<p>联系人不可为空</p>";
//    }
    if (sMail == "") {
        err += "<p>邮箱不可为空</p>";
    }
   

    if (err.length > 0) {
        $a(err);
        return;
    }

    showProc(src);
    $.post("/ajax.ashx?action=SendLeaveword&t=" + Math.random(), {

        company: sCompany,
        title: sContact,
        mail: sMail,
        xuqiu: sXuqiu,
        tel: sTel

    }, function (msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
            emptyText('LYFrom');

        } else {

            if (sMsg == "") {
                sMsg = "提交失败，请稍后再试，勿频繁提交！";
            }
            else {
                emptyText('LYFrom');
            }
            $a(sMsg);
        }
        showProc(src, false);
    });
}


$(function () {
    $("#banner li").width(document.body.clientWidth);
    var len = document.body.clientWidth;
    mswMove("banner", "", "", "bannerbtn", true, "left", true, len, 1000, 3000, 1)


    $(".product .list").hover(function () {
        //$(this).find('img').stop().animate({ width: '110%', height: '110%', marginLeft: '-5%', marginTop: '-5%' }, 500);
        $(this).find('.til').stop().animate({ paddingTop: 20 }).css({ "background": "#d02127", "color": "#fff" });

    }, function () {
        //$(this).find('img').stop().animate({ width: '100%', height: '100%', marginLeft: '0%', marginTop: '0%' }, 500);
        $(this).find('.til').stop().animate({ paddingTop: 10 }).css({ "background": "#fff", "color": "#333" });
    })

    mswMove("tuwen01", "yybtn01", "yybtn02", "", false, "left", true, 945, 1000, 3000, 1)
    mswMove("tuwen02", "yybtn01", "yybtn02", "", false, "left", true, 945, 1000, 3000, 1)
    mswMove("tuwen03", "yybtn01", "yybtn02", "", false, "left", true, 945, 1000, 3000, 1)
    mswMove("tuwen04", "yybtn01", "yybtn02", "", false, "left", true, 945, 1000, 3000, 1)
    mswMove("tuwen05", "yybtn01", "yybtn02", "", false, "left", true, 945, 1000, 3000, 1)
    $(".yingyong .tuwenlist").eq(0).show().siblings(".tuwenlist").hide();
    $(".yingyong .menu .list").hover(function () {
        $(this).addClass("cur").siblings(".list").removeClass("cur");
        var index = $(this).index();
        $(".yingyong .tuwenlist").eq(index).fadeIn().siblings(".tuwenlist").hide();
    })

    $(".pingzhi li").hover(function () {
        $(this).find('img').stop().animate({ width: '110%', height: '110%', marginLeft: '-5%', marginTop: '-5%' }, 500);

    }, function () {
        $(this).find('img').stop().animate({ width: '100%', height: '100%', marginLeft: '0%', marginTop: '0%' }, 500);
    })




    mswMove("ry", "", "", "", true, "left", true, 300, 1000, 3000, 4)
    $(".about_ry .menu li").hover(function () {
        $(this).addClass("cur").siblings().removeClass("cur");
        if ($(this).index() == 0) {
            $(".about ").show();
            $(".ry").hide();
        } else {
            $(".ry ").show();
            $(".about").hide();
        }
    })

    mswMove("wenda", "", "", "", true, "top", false, 103, 0, 30, 3)


    $(".pingzhi li").eq(0).css({ "left": -300, "top": -300, "opacity": 0 })
    $(".pingzhi li").eq(1).css({ "left": 0, "top": -300, "opacity": 0 })
    $(".pingzhi li").eq(2).css({ "left": 300, "top": -300, "opacity": 0 })
    $(".pingzhi li").eq(3).css({ "left": -300, "top": 300, "opacity": 0 })
    $(".pingzhi li").eq(4).css({ "left": 0, "top": 300, "opacity": 0 })
    $(".pingzhi li").eq(5).css({ "left": 300, "top": 300, "opacity": 0 })


    $(window).scroll(function () {
        var top = $(window).scrollTop();

        if (top > 1000) {
            $(".ad .ren").delay(500).animate({ bottom: 0 }, 800);
            $(".ad .wen").animate({ marginLeft: 255 }, 500);
            $(".ad img").delay(1000).fadeIn(1000)
        }
        if (top > 1500) {
            $(".yingyong .menu li").eq(0).animate({ left: 0 }, 300);
            $(".yingyong .menu li").eq(1).delay(100).animate({ left: 0 }, 300);
            $(".yingyong .menu li").eq(2).delay(200).animate({ left: 0 }, 300);
            $(".yingyong .menu li").eq(3).delay(300).animate({ left: 0 }, 300);
            $(".yingyong .menu li").eq(4).delay(400).animate({ left: 0 }, 300);
            $(".yingyong .menu li").eq(5).delay(500).animate({ left: 0 }, 300);
            $(".yingyong .tuwen").delay(600).animate({ left: 0 }, 300)
        }

        if (top > 2100) {
            $(".pingzhi li").animate({ left: 0, top: 0, opacity: 1 }, 1000, 'easeOutExpo')
        }



    })





})