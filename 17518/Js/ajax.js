/******************************************************************************
* filename: Common.js
* Ajax Modul Scripting


*******************************************************************************/
/********************
* 初始化头部信息，如购物车产品总数，登录状态等
* 回应 : XML对象
********************/
/******************************************************************************
* filename: Common.js
* Common Modul Scripting(Basic, Utilities)


*******************************************************************************/

function nav(nav) {

    var li_width = 0;
    var nav_width = 0;
    var li_pa;
    var li_len = $("#" + nav + ">ul>li").length;
    for (i = 0; i < li_len; i++) {
        nav_width += $("#" + nav + ">ul>li").eq(i).outerWidth();
    }
    li_pa = Math.floor(($("#" + nav + "").width() - nav_width) / li_len * 0.5);
    $("#" + nav + ">ul>li>a").css({ "padding-left": li_pa, "padding-right": li_pa });

    nav_width = 0;

    for (i = 0; i < li_len; i++) {
        nav_width += $("#" + nav + ">ul>li").eq(i).outerWidth();
    }
    var last_pa = $("#" + nav + "").width() - nav_width
    $("#" + nav + ">ul>li>a:last").css({ "padding-right": li_pa + last_pa * 0.5, "padding-left": li_pa + last_pa * 0.5 })
    if ($("#" + nav + ">ul").height() > $("#" + nav + ">ul>li").height()) {
        $("#" + nav + ">ul>li>a:last").css({ "padding-right": li_pa + last_pa * 0.5, "padding-left": li_pa + last_pa * 0.5 - 1 })
    }

} /*end nav()*/


//导航栏高亮度设置
function headNavPosition(MARK, SID) {
    var lis;
    if (MARK == "news") {
        if (SID.length > 8) {
            SID = SID.substring(0, 9);
        }
    }
    //    if (MARK == "help") {
    //        if (SID != "0001,0005,0006" && SID != "0001,0005,0019") {//定制案例、礼品茶定制
    //            if (SID.length > 8) {
    //                SID = SID.substring(0, 9);
    //            }
    //        }
    //        }

    if (MARK == "product" && SID != "0001,0004,0007") {
        if (SID.length > 8) {
            SID = SID.substring(0, 9);
        }
    }
    if (MARK == "help" && SID != "0001,0003,0009" && SID != "0001,0011" && SID != "0001,0003,0004") {
        if ((SID.indexOf("0011") > 0) || (SID.indexOf("0003") > 0)) {
            if (SID.length > 8) {
                SID = SID.substring(0, 9);
            }
        }
    }
    //    if (((MARK == "help" && SID.indexOf("0011") > 0)) || (MARK == "help" && SID.indexOf("0003") > 0)) {
    //            if (SID.length > 8) {
    //                SID = SID.substring(0, 9);
    //            }
    //        }
    //    alert("sub" + SID);
    lis = $(".header").find("li");
    for (var i = 0; i < lis.length; ++i) {
        // alert($(lis[i]).find("a").attr("sid") + "==" + SID);
        if ($(lis[i]).find("a").attr("sid") == SID && $(lis[i]).find("a").attr("mark") == MARK) {
            //alert($(lis[i]).find("a").attr("sid")+"=="+SID);
            $(lis[i]).addClass("cur");

            break;
        }


    }
}



SKIN_PATH = "/Skins/default/";
var PTN_EMAIL = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
var PTN_FLOAT = /\d+(\.\d+)?/;
function $nsw() { }
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
        // var o = $j(elmId).attr("value");
        var o = $j(elmId).val();
        if (o == null || o == undefined) {
            return "";
        }
        return o;
    } else {
        return $j(elmId).attr("value", val);
    }
}
/********************
* 根据ID获取文本框内容并去除两边空格
* elmId : 元素ID
********************/
function $tv(elmId) { return $.trim($v(elmId)); };
/********************
* 获取元素选中状态（复选框、单选框）
* elmId : 元素ID
********************/
function getChecked(elmId) { return $("#" + elmId).attr("checked"); };
/********************
* 从容器查找单选框，当value与val相等则选中之
* val : 值
* cntrId : 容器ID
********************/
function checkRadio(val, cntrId) {
    var rdos;
    if (cntrId == null) {
        rdos = $(document.body).find("input[type=radio]");
    } else {
        rdos = $j(cntrId).find("input[type=radio]");
    }
    rdos.each(function (i) {
        var jT = $(this);
        jT.attr("checked", jT.attr("value") == val);
    });
}
function getSelectedText(ddlElmId) {
    var opts = $("#" + ddlElmId + ">option");
    var rtnVal = "";
    opts.each(function (i) {
        if (this.selected) {
            rtnVal = this.text;
        }
    });
    return rtnVal;
}
/********************
* 隐藏下拉框函数
* 重载1 : 如果不传递cntrId，则以body为容器
* cntrId : 容器ID
********************/
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
    //    if (behavior != null) {
    //        behavior();
    //    }
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
* 缩放窗口或拖动滚动条时，保持弹出层消息框于窗口居中
********************/
$(function () {
    //--
    $(window).resize(function () {
        relocation("mesbook1");
        relocation("mesbook1_c");
    });
    $(window).scroll(function () {
        relocation("mesbook1");
        relocation("mesbook1_c");
    });
    //--
});
/********************
* 对应$a(...)，用于在服务端显示弹出层消息框，针对IE的补丁
********************/
function oran_msg(sMsg, boxType, autoClose, focusElmId, sTitle, behavior) {
    window.onload = function () {
        $a(sMsg, boxType, autoClose, focusElmId, sTitle, behavior);
    }
}
/********************
* 提示选择对话框
* msg : 消息内容（必传递参数）
* obj : 对话框属性
********************/
function $confirm(sMsg, yesObj, noObj) {
    hideDdl();
    var sTitle = "消息对话框";
    var jMesbook1 = $j("mesbook1_c");
    if (jMesbook1.length == 0) {
        var sHtml = "<div id='mesbook1_c'>"
				+ "<div><img onclick='hideMsg()' id='mesbook1_cImgClose' src='" + SKIN_PATH + "Img/ico9_close.gif' alt='关闭' class='fr p vam' /><span id='mesbook1_cTitle'></span></div>"
				+ "<dl class='b1'>"
					+ "<dt><img id='mesbook1_cIcon' src='" + SKIN_PATH + "Img/message_ico_03.gif' alt='' title=''  /></dt>"
					+ "<dd class='l_25' id='mesbook1_cMsg'></dd>"
					+ "<dd class='b' style='visibility:hidden' id='mesbook1_cAutoClose'>此窗口<span id='mesbook1_cDelay' style='margin:0 5px;'></span>秒钟后自动关闭。</dd>"
					+ "<dd id='mesbook1_cBtns'>"
						+ "<input type='button' class='b15' value='确 定' />"
						+ "<input type='button' class='b15' value='取 消' />"
					+ "</dd>"
				+ "</dl>"
			+ "</div>";
        $(document.body).append(sHtml);
    }
    var jMesbook1 = $j("mesbook1_c");
    var jMesbook1ImgClose = $j("mesbook1_cImgClose");
    var jMesbook1Icon = $j("mesbook1_cIcon");
    var jMesbook1Msg = $j("mesbook1_cMsg");
    var jMesbook1AutoClose = $j("mesbook1_cAutoClose");
    var jMesbook1Delay = $j("mesbook1_cDelay");
    var jMesbook1Title = $j("mesbook1_cTitle");
    var jMesbook1Btns = $j("mesbook1_cBtns");

    jMesbook1Title.html(sTitle);
    //消息内容
    jMesbook1Msg.html(sMsg);
    //图标
    var iconPath = SKIN_PATH + "Img/ico_ques.gif";
    jMesbook1Icon.attr("src", iconPath);

    //关闭按钮
    var yesBtn = jMesbook1Btns.find("input:eq(0)");
    var noBtn = jMesbook1Btns.find("input:eq(1)");
    yesBtn.removeAttr("onclick");
    noBtn.removeAttr("onclick");
    //yes
    if (yesObj.title != null) {
        yesBtn.val(yesObj.title);
    }
    if (typeof (yesObj.toDo) == "string") {
        yesBtn.click(function () {
            location.href = yesObj.toDo;
        });
    } else {
        yesBtn.click(function () {
            yesObj.toDo();
        })
    }
    //no
    if (noObj.title != null) {
        noBtn.val(noObj.title);
    }

    if (typeof (noObj.toDo) == "string") {
        noBtn.click(function () {
            location.href = noObj.toDo;
        });
    } else {
        noBtn.click(function () {
            noObj.toDo();
        })
    }
    jMesbook1ImgClose.removeAttr("onclick");
    jMesbook1ImgClose.click(function () {
        hideConfirm();
    });

    //显示
    showFullBg();
    setCM("mesbook1_c");
    // relocation("mesbook1_c");
    jMesbook1.fadeIn(80);
}
/********************
* 隐藏消息提示层
********************/
function hideConfirm() {
    showDdl();
    var jShadow = $j("mesbook1_c");
    hideFullBg();
    jShadow.fadeOut(80);
}
/********************
* 显示消息提示层
* sMsg : 消息内容（必传递参数）
* boxType : 消息框类型（ok - 确认，info - 消息提示，yesno - 确定或取消对话框，error - 错误警告 ）
* autoClose : 自动关闭消息框延时(秒)，传递null表示不自动关闭
* focusElmId : 关闭消息框后将获得焦点的元素的ID，传递null则取消该操作
* sTitle : 消息框标题
* behavior : 传递一个 Function 对象，当关闭消息框后调用该函数
********************/
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
    okBtn.click(function () {
        hideMsg();
        if (focusElmId != null) {
            $j(focusElmId).focus();
        }
        if (behavior != null) {
            behavior();
        }
    });
    jMesbook1ImgClose.removeAttr("onclick");
    jMesbook1ImgClose.click(function () {
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

function showMsgPage(msg, msgType, btnHref, btnTitle, defaultHref, delay) {
    if (msgType == null) {
        msgType = "Information";
    } else {
        switch (msgType) {
            case 1: msgType = "Successful"; break;
            case 2: msgType = "Information"; break;
            case 3: msgType = "Question"; break;
            case -1: msgType = "Failed"; break;
            default: msgType = "Information"; break;
        }
    }
    if (btnHref == null) {
        btnHref = "/";
    }
    if (btnTitle == null) {
        btnTitle = "首页";
    }
    if (defaultHref == null) {
        defaultHref = "/";
    }
    if (delay == null) {
        delay = 9;
    }
    var url = "/Tools/Message.aspx?result=" + msgType
    + "&btntitle=" + encodeURI(btnTitle) + "&btnhref=" + encodeURI(btnHref) + "&defaulthref=" + encodeURI(defaultHref)
    + "&delay=" + delay + "&msg=" + encodeURI(msg);
    location.href = url;
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
* 设置层绝对居中（水平，垂直）setCenterMiddle
* elmId : 元素ID或元素
* speed : (可选)渐变进入的速度
********************/
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

    $w.scroll(function () {
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
//关闭层
//cntrId : 层ID
//bgId : 背景层ID
function $closeLayer(cntrId, bgId) {
    $j(cntrId).fadeOut(80, function () { hideFullBg(bgId); });
}
/********************
* 限制文本框字符长度，一个中文占两个长度（该函数一般用于多行文本框）
* src : 触发事件的源元素
* 使用方法如 <textarea max="100" onkeyup="limitLength(this)"></textarea>
********************/
function limitLength(src) {
    var value = src.value;
    var byteLength = parseInt($(src).attr("max"));
    var attribute = src.id;
    var newvalue = value.replace(/[^\x00-\xff]/g, "**");
    var length = newvalue.length;

    //当填写的字节数小于设置的字节数
    if (length * 1 <= byteLength * 1) {
        return;
    }
    var limitDate = newvalue.substr(0, byteLength);
    var count = 0;
    var limitvalue = "";
    for (var i = 0; i < limitDate.length; i++) {
        var flat = limitDate.substr(i, 1);
        if (flat == "*") {
            count++;
        }
    }
    var size = 0;
    var istar = newvalue.substr(byteLength * 1 - 1, 1); //校验点是否为“×”

    //if 基点是×; 判断在基点内有×为偶数还是奇数 
    if (count % 2 == 0) {
        //当为偶数时
        size = count / 2 + (byteLength * 1 - count);
        limitvalue = value.substr(0, size);
    } else {
        //当为奇数时
        size = (count - 1) / 2 + (byteLength * 1 - count);
        limitvalue = value.substr(0, size);
    }
    alert("最大输入" + byteLength + "个字节（相当于" + byteLength / 2 + "个汉字）！");
    document.getElementById(attribute).value = limitvalue;
    return;
}
/********************
* 根据元素ID获取元素对象(document.getElementById)
* elmId : 元素ID
********************/
function $g(elmId) { return document.getElementById(elmId); };
/********************
* 根据元素名称获取元素对象集(document.getElementsByName)
* nm : 元素name
********************/
function $name(nm) { return document.getElementsByName(nm); };
/********************
* 根据元素标签从指定容器获取元素对象集(document.getElementsByTagName)
* cntr : 容器，可以是元素对象、元素ID
* tagName : 标签名称
********************/
function $tag(cntr, tagName) {
    var o = cntr;
    if (o != Object) { o = $g(cntr); }
    return o.getElementsByTagName(tagName);
}
/********************
* 限制文本框只能输入数字(数字键)
* e : event
********************/
function digiKeyOnly(e) {
    var key = window.event ? event.keyCode : e.which;
    if (key < 27 || key > 128) {
        return true;
    } else if (key >= 48 && key <= 57) {
        return true;
    } else {
        return false;
    }
}
/********************
* 限制文本框只能输入数字
* src : 触发事件的源元素
* 使用方法如 <input onkeyup="digiOnly(this)" />
********************/
function digiOnly(src) {
    src.value = src.value.replace(/[^0-9]/g, '');
}
/********************
* 打开窗口
* url : URL
* w : 窗口宽度（不传递则默认为300px）
* h : 窗口高度（不传递则默认为300px）
* features : 关于窗口的更多属性（可先，不传递该参数或传递null则默认为无工具栏、无菜单栏、可拖放、有滚动条、纵横坐标为0）
********************/
function $o(url, w, h, features) {
    if (url == null || url == "") {
        return;
    }
    if (w == null) {
        w = "300";
    }
    if (h == null) {
        h = "300";
    }
    if (features == null) {
        features = "location=0,menubar=0,resizable=1,scrollbars=1,status=0,toolbar=0;top=0,left=0";
    }
    if (w) {
        features += ",width=" + w;
    }
    if (h) {
        features += ",height=" + h;
    }
    window.open(url, "", features, false);
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
        $(this).attr("value", "");
    });
    jTxtss.each(function () {
        $(this).attr("value", "");
    });
    if (cntrId == null)
        jTxts = $("body").find("textarea");
    else
        jTxts = $j(cntrId).find("textarea");
    jTxts.each(function () {
        $(this).attr("value", "");
    });
}
/********************
* COOKIE操作
* 重载1 只传递name : 根据键名获取cookie值
* 重载2 传递name, value : 设置cookie,默认过期时间为9986400000
* 重载3 传递name, value, expire : 设置cookie并指定过期时间
* 重载4 传递name, value(bool) : 根据键名删除cookie
* name : cookie 键名 : 
* val : cookie值
* expire : cookie过期时间
********************/
$cookie = function (name, val, expire) {
    if (val == null && expire == null) {
        var search = name + "=";
        begin = document.cookie.indexOf(search);
        if (begin != -1) {
            begin += search.length;
            end = document.cookie.indexOf(";", begin);
            if (end == -1) end = document.cookie.length;
            return document.cookie.substring(begin, end);
        }
        return null;
    } else if (typeof (val) == "boolean") {
        $cookie(name, "", -999999);

    } else {
        if (expire == null) { expire = 9986400000; }
        var today = new Date();
        var expireDay = new Date();
        var msPerMonth = expire;
        expireDay.setTime(today.getTime() + msPerMonth);
        document.cookie = name + "=" + val + ";expires=" + expireDay.toGMTString();
    }
};
/********************
* 查询URL参数（查询失败则返回空字符串）
* paraNm : 参数名
********************/
function $qs(paraNm) {
    var args = new Object();
    var query = location.search.substring(1);
    var pairs = query.split("&");
    for (var i = 0; i < pairs.length; ++i) {
        var pos = pairs[i].indexOf('=');
        if (!pos) continue;
        var paraNm2 = pairs[i].substring(0, pos);
        var vlu = pairs[i].substring(pos + 1);
        vlu = decodeURIComponent(vlu);
        args[paraNm2] = vlu;
    }
    return args[paraNm] == null ? "" : args[paraNm];
}
/********************
* 全选复选框或取消全选（根据触发事件的源对象的选中状态而定）
* src : 触发事件的源对象
* cntrId : 容器ID
********************/
function selectAll(src, cntrId) {
    var chks = $tag(cntrId, "input");
    for (var i = 0; i < chks.length; ++i) {
        chks[i].checked = src.checked;
    }
}
/********************
* 反选复选框
* cntrId : 容器ID
********************/
function invertSelect(cntrId) {
    var chks = $tag(cntrId, "input");
    for (var i = 0; i < chks.length; ++i) {
        chks[i].checked = !chks[i].checked;
    }
}
function getPageFilename() {
    var path = location.pathname;
    var pos = path.lastIndexOf('/') + 1;
    var filename = path.substring(pos, path.length);
    return filename;
}
function getRawUrl() {
    var path = location.href;
    var pos = path.lastIndexOf('/') + 1;
    var filename = path.substring(pos, path.length);
    pos = filename.lastIndexOf('#');
    filename = filename.substring(0, pos);
    return filename;
}
function getIntactRawUrl() {
    var path = location.href;
    var pos;
    pos = path.lastIndexOf('#');
    path = path.substring(0, pos);
    return path;
}
/********************
* 附加参数到现URl
* name : 参数名
* val : 参数值
********************/
function toggleArg(name, val) {
    var url = $$.intactRawUrl();
    var pos = url.indexOf('?');
    if (pos == -1) {
        return url + "?" + name + "=" + val;
    } else {
        var args = url.substring(pos);
        var path = url.substring(0, pos);
        var patten = new RegExp("&?" + name + "=?\\w*\\[?\\w*\\]?\\|?\\d?", "i");
        args = args.replace(patten, "");
        if (args.length == 1) {//没有任何参数，只有?
            args += name + "=" + val;
        } else {
            args += "&" + name + "=" + val;
        }
        return path + args;
    }
};
/********************
* 渐大/小，渐出/入一个元素
* elmId : 元素ID
* visibility : 显现或隐藏
********************/
function increase(elmId, visibility) {
    if (visibility == null) {
        visibility = "show";
    }
    var jO = $j(elmId);
    jO.animate({
        height: visibility,
        width: visibility,
        opacity: visibility
    }, "fast");
}
/********************
* 渐出/入一个元素(当元素可见则入，反之则出)
* elmId : 元素ID
* speed : 速度
********************/
function fadeToggle(elmId, speed) {
    if (speed == null) { speed = "fast" };
    if ($("#" + elmId).is(":visible")) { $("#" + elmId).fadeOut(speed) }
    else { $("#" + elmId).fadeIn(speed) };
}
/********************
* 当元素获得焦点时，高亮显示
* cntrId : 容器ID
* focusClass : 高亮时的样式我
********************/
function clearAllElms(cntrId, focusClass) {
    clearDdls(cntrId, focusClass);
    clearTextBoxes(cntrId, focusClass);
    clearRdos(cntrId, focusClass);
    clearChks(cntrId, focusClass);
}
function clearRdos(cntrId, focusClass) {
    if (focusClass == null) {
        focusClass = "tfocus";
    }
    var txts = $j(cntrId).find("input[type=radio]");
    txts.focus(function () { $(this).addClass(focusClass); });
    txts.blur(function () { $(this).removeClass(focusClass); });
}
function clearChks(cntrId, focusClass) {
    if (focusClass == null) {
        focusClass = "tfocus";
    }
    var txts = $j(cntrId).find("input[type=checkbox]");
    txts.focus(function () { $(this).addClass(focusClass); });
    txts.blur(function () { $(this).removeClass(focusClass); });
}
function clearDdls(cntrId, focusClass) {
    if (focusClass == null) {
        focusClass = "tfocus";
    }
    var txts = $j(cntrId).find("select");
    txts.focus(function () { $(this).addClass(focusClass); });
    txts.blur(function () { $(this).removeClass(focusClass); });
}
function clearTextBoxes(cntrId, focusClass) {
    if (focusClass == null) {
        focusClass = "tfocus";
    }
    var txts = $j(cntrId).find("input[type=text]");
    txts.focus(function () { $(this).addClass(focusClass); });
    txts.blur(function () { $(this).removeClass(focusClass); });
    var txts = $j(cntrId).find("input[type=password]");
    txts.focus(function () { $(this).addClass(focusClass); });
    txts.blur(function () { $(this).removeClass(focusClass); });
    txts = $j(cntrId).find("textarea");
    txts.focus(function () { $(this).addClass(focusClass); });
    txts.blur(function () { $(this).removeClass(focusClass); });
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


//加入收藏
function BookMarkit() {
    var url = "http://" + window.location.host;
    var title = document.title;
    if (document.all) {
        window.external.addFavorite(url, title);
    }
    else if (window.sidebar) {
        window.sidebar.addPanel(title, url, "");
    }
}

/********************
* 根据值选中下拉列表项
* ddlId : 下拉列表元素ID
* val : 值
********************/
function setSelectByValue(ddlId, val) {
    var ddl = $g(ddlId);
    for (var i = 0; i < ddl.options.length; ++i) {
        var opt = ddl.options[i];
        opt.selected = (opt.value == val);
    }
}
/********************
* 显示验证码
********************/
function showVerifyCode(elmId, msgElmId, imgId, chgLnkId) {
    if (elmId == null) {
        elmId = "spVerCode";
    }
    if (msgElmId == null) {
        msgElmId = "spVerCodeMsg";
    }
    if (imgId == null) {
        imgId = "imgVerCode";
    }
    if (chgLnkId == null) {
        chgLnkId = "spChgVerCode";
    }
    var jImg = $j(elmId);
    var jMsg = $j(msgElmId);
    var jChgLnk = $j(chgLnkId);
    if (jImg.html() == "") {
        jMsg.html("正在加载验证码...");
        jMsg.show();
        jImg.html("<img src='/Tools/ValidCode.aspx' style='display:none;' id='" + imgId + "' alt='验证码' />");
    }
    var jVerCode = $j(imgId);
    jVerCode.load(function () {
        jMsg.hide();
        jVerCode.show();
        jChgLnk.show();
    });
}
/********************
* 更换验证码
********************/
function changeVerCode(elmId, msgElmId) {
    if (elmId == null) {
        elmId = "imgVerCode";
    }
    if (msgElmId == null) {
        msgElmId = "spVerCodeMsg";
    }
    var jImg = $j(elmId);
    var jMsg = $j(msgElmId);
    jMsg.html("正在刷新验证码...").show();
    jImg.attr({ src: "/Tools/ValidCode.aspx?x=" + Math.random(), alt: "验证码" });
    jImg.hide();
    jImg.load(function () {
        jMsg.hide();
        jImg.show();
    });
}
/********************
* 显示正在处理的图标
* src : 触发事件的源对象
* show : 显示/隐藏
********************/
function showProc(src, show) {
    var oImg = $j("imgProc");
    if (show == null) {
        show = true;
    }
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
/********************
* 放大字体
* el : 放大/缩小
********************/
function enlarge(el, elmId) {
    if (el == null) {
        el = true;
    }
    if (elmId == null) {
        elmId = "Content";
    }
    var o = $j(elmId);
    var fontSize = parseInt(o.css("font-size"));
    var newFontSize = (el ? fontSize * 1.2 : fontSize / 1.2);
    o.css("font-size", newFontSize + "px");
}
/********************
* 奇偶行变色
* el : 放大/缩小
* escapeRows : 忽略最首行数
* tabName : 表ID
* odd : 奇行的样式或样式类名
* even : 偶行的样式或样式类名
********************/
function altRow(escapeRows, tabName, odd, even) {
    var rows = $tag(tabName, "tr");
    for (var i = escapeRows; i < rows.length; ++i) {
        var argSty;
        if (i % 2 == 0) argSty = even;
        else argSty = odd;
        if (typeof (argSty) == "object") {
            for (var sty in argSty) {
                rows[i].style[sty] = argSty[sty];
            }
        } else {
            rows[i].className = argSty;
        }
    }
}
/********************
* 获取容器里已选中复选/单选按钮的值
* cntrId : 容器ID
* escapeRows : 忽略最首行数
********************/
function getCheckedVal(cntrId, escapeRows) {
    if (escapeRows == null) {
        escapeRows = -1;
    }
    var chks = $j(cntrId).find("input:checked");
    var rtnVal = "";
    var flag = false;
    chks.each(function (i) {
        if (i > escapeRows) {
            if (flag) {
                rtnVal += ",";
            }
            rtnVal += $(this).val();
            flag = true;
        }
    });
    return rtnVal;
}
function checkAll(src, cntrId) {
    var chks = $j(cntrId).find("input[type=checkbox]");
    chks.each(function (i) {
        this.checked = src.checked;
    });
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


function SearchObjects(kwd, objtype) {
    if (kwd == "请填写关键词" || kwd == "请输入关键词") {
        $a("您还没有输入关键词，请填写后查询。");
        return;
    }
    if (objtype == "product") {
        var URL = "/Search/Index.aspx?objtype=product&kwd=" + escape(kwd);
        window.location.href = URL;
    }
    else {
        var URL = "/Search/News.aspx?objtype=news&kwd=" + escape(kwd);
        window.location.href = URL;
    }

}

//跳转到某页
//参数：参训参数
//		参数值
function GoToURL(FieldName, FieldValue) {
    var URL;
    URL = SetURLField(URL, FieldName, FieldValue);
    location.href = URL;
}
//跳转到某页
//参数：参训参数
//		参数值
function GoToURLByGet(FieldName, FieldValue) {
    //1\定义变量
    var URL;
    URL = location.href;

    //2\获取地址参数
    URL = SetURLField(URL, "page", "1");
    URL = SetURLField(URL, FieldName, FieldValue);

    //3\递交数据
}
//设置地址栏的参数
function SetURLField(URL, FieldName, FieldValue) {
    //1\把当前的超链接地址取出来
    var FindPlace;
    //2\如果？号后面没有字符串,则在?后面添加查询的字段 
    FindPlace = URL.indexOf("?");

    if (FindPlace == -1) {
        URL += "?" + FieldName + "=" + FieldValue;
    }
    else {
        //3\如果?后面有查询字符串,则检测有没有该字段，如果有，则重新付值
        var search = FieldName + "=";
        var offset = URL.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = URL.indexOf("&", offset);
            if (end == -1) {
                URL = URL.substring(0, offset) + FieldValue;
            }
            else {
                URL = URL.substring(0, offset) + FieldValue + URL.substring(end);
            }
        }
        else {
            URL = URL + "&" + FieldName + "=" + FieldValue;
        }
    }
    return URL;

}

//读取地址栏的参数值
//参数：参数名称
function readURLParameter(FieldName) {
    var search = FieldName + "=";
    var FieldValue = "";
    var URL = location.href;
    var offset = URL.indexOf(search);
    if (offset != -1) {
        offset += search.length;
        end = URL.indexOf("&", offset);
        if (end == -1) {
            FieldValue = URL.substring(offset);
        }
        else {
            FieldValue = URL.substring(offset, end);
        }
    }
    return FieldValue;
}
/********************
* 当一个文本框第一次获得焦点时清空自己的文本，该文本框默认有一个属性和事件：hadfocused="0" onfocus="focusToRemoveText(this)"
* src : 触发事件的源元素
********************/
function focusToRemoveText(src) {
    var jSrc = $(src);
    var hadFocused = (jSrc.attr("hadfocused") == "1");
    if (!hadFocused) {
        jSrc.val("");
        jSrc.attr("hadfocused", "1");
    }
}
//输出动态表单
//surObj : 投票对象
function SUR_ShowTable(surObj) {
    var sHtml = "";
    //投票模式（单选/复选）
    var inputType;
    switch (surObj.SelectionMode) {
        case 1: inputType = "radio"; break;
        case 2: inputType = "checkbox"; break;
    }
    //输出内容
    switch (surObj.ShowMode) {
        case 1:
            sHtml = "<div class=\"survey_1\" style=\"width:" + surObj.Width + "px;\">"
                + "<div class=\"sur_tit\" style=\"width:" + (surObj.Width - 2) + "px;\">" + surObj.Title + "</div>"
                + "<table class=\"sur_tab\" id=\"SUR_itemTab_" + surObj.SubjectId + "\">";
            for (var i = 0; i < surObj.Items.length; ++i) {
                var obj = surObj.Items[i];
                var inputId = "SUR_item_" + surObj.SubjectId + i;
                sHtml += "<tr>"
                + "<td><input name=\"SUR_item" + surObj.SubjectId + "\" type=\"" + inputType + "\" value=\"" + obj.id + "\" id=\"" + inputId + "\" /></td>"
                + "<td><label for=\"" + inputId + "\">" + obj.title + "</label></td>"
                + "</tr>";
            } // end for
            sHtml += "</table>"
                + "<div class=\"bot_btn2\">"
                + "<input type=\"button\" value=\"提交\" class=\"b15\" onclick=\"SUR_senddata(this," + surObj.ObjectName + ")\" />"
                + "<input type=\"button\" onclick=\"window.open('/tools/survey.aspx?oid=" + surObj.SubjectId + "')\" value=\"查看\" class=\"b16\" />"
                + "</div>"
                + "</div>";
            break;
    } // end switch
    document.write(sHtml);
}

////提交投票
////参数：src : 触发方法的源对象
////surObj : 投票对象
//function SUR_senddata(src, subObj) {
//    var msgElmId = "SUR_post_msg_" + subObj.SubjectId;
//    var s = "<span id='" + msgElmId + "'>正在提交,请稍后...</span>";
//    var url = "/ajax.ashx?action=Survey&t=" + Math.random();
//    var checkedVla = getCheckedVal("SUR_itemTab_" + subObj.SubjectId);
//    if (checkedVla == null || checkedVla.length == 0) {
//        $a("您至少需要选中一个投票项。");
//        return;
//    }
//    $(src).after(s).hide();
//    $.post(url, {
//        _SUR_SubjectID: subObj.SubjectId,
//        _CheckedItems: checkedVla
//    }, function(rsp) {
//        var sta = gav(rsp, "state");
//        var sMsg = gav(rsp, "msg");
//        if (sta == "1") {
//            $confirm("投票成功，感谢您的参与。", { title: "确定", toDo: function() { hideConfirm(); } }, { title: "查看结果", toDo: function() { window.open("/tools/survey.aspx?oid=" + subObj.SubjectId); hideConfirm(); } });
//        } else {
//            $a(sMsg);
//        }
//        $j(msgElmId).remove();
//        $(src).show();
//    });
//}
//输出留言表单
//surObj : 对象ID
function LEW_ShowTable() {
    var sHtml = "<div class=\"reports\" id=\"LEAVEWORD_cntr\" style=\"margin:0 auto 10px auto;\">"
            + "<h1>留言</h1>"
            + "<table id=\"LEAVEWORD_tab\">"
            + "<tr>"
            + "<th>* 标题：</th>"
            + "<td><input type=\"text\" size=\"40\" id=\"LEAVEWORD_txtTitle\" /></td>"
            + "</tr>"
            + "<tr>"
            + "<th>* 联系人：</th>"
            + "<td><input type=\"text\" size=\"10\" id=\"LEAVEWORD_txtContact\" /></td>"
            + "</tr>"
            + "<tr>"
            + "<th>联系电话：</th>"
            + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtTel\" /></td>"
            + "</tr>"
            + "<tr>"
            + "<th>手机号码：</th>"
            + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtMobile\" /></td>"
            + "</tr>"
            + "<tr>"
            + "<th>* 电子邮箱地址：</th>"
            + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtEmail\" /></td>"
            + "</tr>"
            + "<tr>"
            + "<th>* 留言分类：</th>"
            + "<td id=\"LEAVEWORD_tdCats\"></td>"
            + "</tr>"
            + "<tr>"
            + "<th>留言内容：</th>"
            + "<td><textarea style=\"width:230px;height:80px;\" id=\"LEAVEWORD_txtShortDesc\"></textarea></td>"
            + "</tr>"
            + "<tr>"
            + "<th>&nbsp;</th>"
            + "<td>"
            + "<input type=\"button\"  value=\"提交\" class=\"b15\" onclick=\"sendLeaveword(this)\" /> "
            + "</td>"
            + "</tr>"
            + "</table>"
            + "</div>";
    document.write(sHtml);
    fillLeavewordCategories();

}

////输出留言表单
////surObj : 对象ID
//function PAY_ShowTable() {
//    var sHtml = "<div class=\"reports\" id=\"DIR_PAY_cntr\" style=\"margin:0 auto 10px auto;\">"
//        + "<h1>付款</h1>"
//        + "<table id=\"DIR_PAY_tab\" style=\"background:url(" + SKIN_PATH + "img/Pay_ico.gif) no-repeat right top;width:400px;\">"
//        + "<tr>"
//        + "<tr>"
//        + "<th>* 付款方式：</th>"
//        + "<td><select id=\"DIR_PAY_ddlPayment\"><option value=\"\">请选择</option>"
//        + "<option value=\"alipay\">支付宝</option>"
//        + "<option value=\"99bill\">快钱</option>"
//        + "</select>"
//        + "</td>"
//        + "</tr>"
//        + "<th>* 付款人：</th>"
//        + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtPayer\" /></td>"
//        + "</tr>"
//        + "<tr>"
//        + "<th>* 电子邮箱地址：</th>"
//        + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtEmail\" /></td>"
//        + "</tr>"
//        + "<tr>"
//        + "<th>联系电话：</th>"
//        + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtTel\" /></td>"
//        + "</tr>"
//        + "<tr>"
//        + "<th>手机号码：</th>"
//        + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtMobile\" /></td>"
//        + "</tr>"
//        + "<tr>"
//        + "<th>我公司业务员姓名：</th>"
//        + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtSalesManName\" /></td>"
//        + "</tr>"
//        + "<tr>"
//        + "<th>* 付款金额：</th>"
//        + "<td><input type=\"text\" size=\"10\" id=\"DIR_PAY_txtMoney\" /></td>"
//        + "</tr>"
//        + "<tr>"
//        + "<th>* 款项用途：</th>"
//        + "<td><input type=\"text\" size=\"40\" id=\"DIR_PAY_txtUse\" /></td>"
//        + "</tr>"
//        + "<tr>"
//        + "<th>&nbsp;</th>"
//        + "<td>"
//        + "<input type=\"button\"  value=\"提交\" class=\"b15\" onclick=\"directPay(this)\" /> "
//        + "</td>"
//        + "</tr>"
//        + "</table>"
//        + "</div>";
//    document.write(sHtml);
//}

//用户登陆
function LoginCheck(_username, _password) {

    var url = window.location;
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
       function (msg) {
           if (gav(msg, "state") == "1") {
               $a(gav(msg, "msg"));
               window.location.href = url;
           }
           else {
               $a(gav(msg, "msg"));
           }
           ;
       });
}

function xuanze() {
    
    var xz =document.getElementById('seachkeywords').value;
   
    if (xz.length == 0) {
        xz = "";
    }
    window.location.href = '/Search/Index.aspx?objtype=product&kwd=' + xz;
}

function initCommonHeader() {
    $.get("/ajax.ashx?action=initcommonheader&t=" + Math.random(), function(rsp) {
       // $j("headerCartCount").html(gav(rsp, "prod_count"));
        var IM = gav(rsp, "showIM");
        showIM(IM);
        var username = gav(rsp, "username");
        if (username.length > 0) {
            $j("commonHeaderGuest").hide();
            $j("commonHeaderUsername").html(username);
            $j("commonHeaderUser").fadeIn(80);
        }
    });
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
    }, function(msg) {
        $j("commonHeaderkeywords").html(msg);
    });
}
/********************
* 添加产品到购物车
* src : 触发事件的源对象
* _pid : 产品ID
* qutiElmId : 数量（重载：number购买数量、string数量的文本框元素ID）
* atts : 附加属性
* reloadCartPage : (可选)是否询问重新刷新购物车首页
* redirectUrl : (可选)当产品添加成功后，跳转到的页面（优先权高）
* 回应 : XML对象
********************/
function addToCart(src, _pid, qutiElmId, _atts,_pidlist, reloadCartPage, redirectUrl) {
    showProc(src);
    if (reloadCartPage == null) {
        reloadCartPage = false;
    }
    _atts = $j(_atts).html();
    _pidlist = $j(_pidlist).val();
    var _quti;
    if (qutiElmId == null) {
        _quti = 1;
    } else if (typeof (qutiElmId) == "number") {
        _quti = qutiElmId;
    } else {
        _quti = $tv(qutiElmId);
    }
    if (_atts == null) {
        _atts = "";
    }
    if (_pidlist==null)
    {
        _pidlist = "";
    }
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: _pid,
        quti: _quti,
        atts: _atts,
        pidlist: _pidlist
    }, function(msg) {
        var sMsg = gav(msg, "msg");
        var sCount = gav(msg, "count");
        var sta = gav(msg, "state");
        if (redirectUrl != null) {
            location.href = redirectUrl;
            return;
        }
        if (sta != "1") {
            $a(sMsg);
            showProc(src, false);
            return;
        }
        $confirm(sMsg, { title: "去结算", toDo: "/paycenter/cart.aspx" }, { title: "再选购", toDo: function() {
            hideConfirm();
        }
        });
        $j("headerCartCount").html(sCount);
        if (reloadCartPage && (gav(msg, "state") == 1) && confirm("添加到购物车成功，是否马上刷新页面购物车页面？\r\n\r\n是 - 刷新本页面查看最新结果\r\n否 - 保留当前页面状态")) {
            location.href = "cart.aspx?t=" + Math.random();
            return;
        }
        showProc(src, false);
    });
}
/********************
* 清空购物车
* src : 触发事件的源对象
* 回应 : string
*       1 - 成功
*       0 - 失败
********************/
function emptyCart(src) {
    showBgProc();
    $.get("/ajax.ashx?action=emptycart&t=" + Math.random(), function(msg) {
        if (msg == "1") {
            $a("清空购物车成功，单击确认返回产品中心。", 1, false, null, "消息", function() {
                location.href = "/product";
            });
        } else {
            $a("清空购物车失败，请稍候重试。");
        }
        showBgProc(false);
    });
}
/********************
* 清空购物车
* src : 触发事件的源对象
* _pid : 产品ID
* 回应 : xml
********************/
function changeQuantity(src, _pid,_attrs) {
    var newVal = $(src).parent().find("input").attr("value");
    if (!/^\d+$/.test(newVal)) {
        $a("数量必须是一个整数。");
        return;
    }
    if (parseInt(newVal) == 0) {
        $a("数量必须大于0，若要删商品，请点操作中的‘删除’。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: _pid,
        quti: newVal,
        atts: _attrs
    }, function(msg) {
        if (gav(msg, "state") == "1") {
            if (confirm("数量修改成功，是否马上刷新页面查看购物车结果？\n\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
                location.href = "cart.aspx?t=" + Math.random();
            } else {
                showBgProc(false);
                $(src).hide();
            }
        } else {
            $a(msg);
            showBgProc(false);
        }
    });
}
function delCartProduct(src, _pid, _atts) {
    showBgProc();
    var _quti = 0;
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: _pid,
        atts: _atts
    }, function(msg) {
        if (gav(msg, "state") == "1") {
            if (confirm("商品已删除，是否马上刷新页面查看结果？\n\n\r\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
                location.href = "cart.aspx?t=" + Math.random();
            }
        } else {
            $a(gav(msg, "msg"));
        }
        showBgProc(false);
    });
}
/********************
* 清空购物车
* src : 触发事件的源对象
* _pid : 产品ID
* 回应 : xml
********************/
function changeQuantity(src, _pid) {
    var newVal = $(src).parent().find("input").attr("value");
    if (!/^\d+$/.test(newVal)) {
        $a("数量必须是一个整数。");
        return;
    }
    if (parseInt(newVal) == 0) {
        $a("数量必须大于0，若要删商品，请点操作中的‘删除’。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: _pid,
        quti: newVal
    }, function(msg) {
        if (gav(msg, "state") == "1") {
            if (confirm("数量修改成功，是否马上刷新页面查看购物车结果？\n\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
                location.href = "cart.aspx?t=" + Math.random();
            } else {
                showBgProc(false);
                $(src).hide();
            }
        } else {
            $a(msg);
            showBgProc(false);
        }
    });
}
function delCartProduct(src, _pid, _atts) {
    showBgProc();
    var _quti = 0;
    $.post("/ajax.ashx?action=addtocart&t=" + Math.random(), {
        pid: _pid,
        atts: _atts
    }, function(msg) {
        if (gav(msg, "state") == "1") {
            if (confirm("商品已删除，是否马上刷新页面查看结果？\n\n\r\n是 - 刷新页面查看结果\n否 - 保留当前页面状态")) {
                location.href = "cart.aspx?t=" + Math.random();
            }
        } else {
            $a(gav(msg, "msg"));
        }
        showBgProc(false);
    });
}

function cancelOrder(src, _orderNo) {
    showBgProc();
    $.post("/ajax.ashx?action=cancelorder&t=" + Math.random(), {
        no: _orderNo
    }, function(msg) {
        if (gav(msg, "state") == "1") {
            $(src).parent().parent().parent().find("td[name=orderstate]").html("已取消");
            $(src).hide();
        } else {
            $a("<p>取消订单操作失败。</p><p>非‘待审核’状态、已锁定等订单不可取消。</p>");
        }
        showBgProc(false);
    });
}



function hits(_oid, _mark) {
    $.post("/ajax.ashx?action=hits&t=" + Math.random(), {
        oid: _oid,
        mark: _mark
    })
}


function postComment(src, _oid, _mark) {
    showProc(src);
    var _content = $tv("txtCmtContent");
    var _verCode = $tv("txtCmtVerCode");
    if (_content == "") {
        $a("内容必填。");
        showProc(src, false);
        return;
    }
    if ($g("txtVerCode") != null && s_verCode == "") {
        $a("验证码不可空。");
        showProc(src, false);
        return;
    }
    $.post("/ajax.ashx?action=postcomment&t=" + Math.random(), {
        content: _content,
        oid: _oid,
        verCode: _verCode,
        mark: _mark
    }, function(msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "") {
            $a(msg, -1);
        } else if (sta == "2") {
            $a(sMsg, 1);
            emptyText('tbCmt');
        } else if (sta == "1") {
            var sTime = gav(msg, "time");
            var sUsername = gav(msg, "username");
            var sIp = gav(msg, "ip");
            var sComment = gav(msg, "comment");
            var sfeedback = gav(msg, "feedback");
            var num = gav(msg, "num");

  var htmlFmt = "<dl>"
                        +"<dt><img src=\"/Skins/Default/Img/head2.jpg\" /></dt>" 
						+ "<dd class='con'><p><b>{$username$}</b>说：</p><span class=\"comms\">{$content$}</span><p class=\"time\">发表于：{$time$}<p></dd>"					
						+ "<dd class='huifus'><h5>管理员回复：</h5><div>{$feedback$}</div></dd>"
					+ "</dl>";
            var sHtml = htmlFmt
                .replace("{$username$}", sUsername)
                .replace("{$ip$}", sIp)
                .replace("{$time$}", sTime)
                .replace("{$feedback$}", sfeedback)
                .replace("{$content$}", sComment);
            var oldComments=$j("divComments").html();
            if(oldComments=="暂无评论")
            {
                oldComments="";
            }
            $j("divComments").html(sHtml + oldComments);
            $j("spCommentCount").html(num);
            $a(sMsg, 1);
            emptyText('tbCmt')

        } else {
            $a(sMsg);
        }
        showProc(src, false);
    });
    
}
function writeComment(_oid, _mark) {
    $.post("/ajax.ashx?action=getcomment&t=" + Math.random(), {
        oid: _oid,
        mark: _mark
    }, function(msg) {
        var iCount = $(msg).find("count").text();
        $j("spCommentCount").html(iCount);
        var commtns = $(msg).find("comment");
        var sHtml = "";
        var htmlFmt = "<dl>"
						   +"<dt><img src=\"/Skins/Default/Img/head2.jpg\" /></dt>" 
						+ "<dd class='con'><p><b>{$username$}</b>说：</p><span class=\"comms\">{$content$}</span><p class=\"time\">发表于：{$time$}<p></dd>"					
						+ "<dd class='huifus'><h5>管理员回复：</h5><div>{$feedback$}</div></dd>"
					+ "</dl>";
        for (var i = 0; i < commtns.length; ++i) {
            var jCmt = $(commtns[i]);
            var sUsername = jCmt.find("username").text();
            var sContent = jCmt.find("content").text();
            var sIp = jCmt.find("ip").text();
            var sTime = jCmt.find("inputTime").text();
            var sfeedback = jCmt.find("feedback").text();
            sHtml += htmlFmt
                .replace("{$username$}", sUsername)
                .replace("{$ip$}", sIp)
                .replace("{$time$}", sTime)
                .replace("{$content$}", sContent)
                 .replace("{$feedback$}", sfeedback);
        }
        if (sHtml.length > 0) {
            $j("divComments").html(sHtml);
        } else {
            $j("divComments").html("暂无评论");
        }
    });
}
function addHistory(_oid, _mark) {
    $.get("/ajax.ashx?action=addhistory&t=" + Math.random(), {
        oid: _oid,
        mark: _mark
    });
}

function getHistory(_mark) {
 
    $.post("/ajax.ashx?action=gethistory&t=" + Math.random(), {
        mark: _mark
    }, function(msg) {
        if (msg.length == 0) {
            msg = "<li>&nbsp;&nbsp;无浏览历史</li>";
        }
        $j("divHistoryCntr").html(msg+"<div class='clear'></div>");
    });
}
function getHits(_oid, _mark) {
    $.post("/ajax.ashx?action=gethits", {
        mark: _mark,
        oid: _oid
    }, function(msg) {
        $j("cntrHits").html(msg);
    });
}

function submitHelpUse(src, _oid) {
    showProc(src);
    var _notice = $("input[name=use]:checked").val();
    $.post("/ajax.ashx?action=helpuseful&t=" + Math.random(), {
        oid: _oid,
        notion: _notice
    }, function(msg) {
        if (gav(msg, "state") == "0") {
            $a(gav(msg, "msg"));
        } else {
            $a(gav(msg, "msg"), 1);
            getHelpStatic(_oid);
        }
        showProc(src, false);
    });
}
function getSimilarArticle(_sid) {
    $.post("/ajax.ashx?action=getsmilararticle&t=" + Math.random(), {
        sid: _sid
    }, function(msg) {
        $j("cntrSimilarArticle").html(msg);
    });
}
function getLastArticle() {
    $.post("/ajax.ashx?action=getlastarticle", function(msg) {
        $j("cntrLastArticle").html(msg);
    });
}
function cleanHistory(_mark, key) {
    $.post("/ajax.ashx?action=cleanhistory", {
        mark: _mark
    }, function(msg) {
       // $j("divHistoryCntr").html("<h4 class=\"t05\"><a class=\"clr\" onclick=\"cleanHistory('product','__oran__product_history')\" href=\"javascript:void(0)\">清除</a>最近浏览过的产品</h4><div id=\"divHistoryItems\" class=\"t05_con\">无浏览历史<div class=\"clear\"/></div>");
        $j("divHistoryCntr").html("<li>&nbsp;&nbsp;无浏览历史</li>");
    });
}
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
function userFeedback(src) {
    var _title = $tv("txtFdTitle");
    var _shortDesc = $tv("txtFdShortDesc");
    if (_title.length == 0 || _shortDesc.length == 0) {
        $a("内容或标题不可为空。");
        return false;
    }

    showBgProc(true, "正在提交...");
    $.post("/ajax.ashx?action=userfeedback&t=" + Math.random(), {
        title: _title,
        shortDesc: _shortDesc
    }, function(msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            showMsgPage("<li>您的意见提交成功，感谢您的意见，有您的支持，我们会做得更好。</li>", 1, "/user/faq.aspx", "意见/反馈", "/user/faq.aspx");
            return;
        } else if (sMsg.length > 0) {
            $a(sMsg);
        } else {
            $a(msg);
        }
        showBgProc(false);
    });
}
function checkAuthority(_authIDs, _title) {
    $.post("/ajax.ashx?action=checkauthority&t=" + Math.random(), {
        authIDs: _authIDs
    }, function(msg) {
        if (msg == "1") {
            $j("div___________Perm").hide();
            document.oncontextmenu = function() { return true; };
            document.onselectstart = function() { return true; };
        } else {
            showMsgPage("您不具有查看 " + _title + " 的权限。");
            return;
        }
    });
}
function changeFavColumn(src, itemTabId) {
    var _ids = getCheckedVal(itemTabId);
    if (_ids.length == 0) {
        $a("无选中项。");
        return;
    }
    showProc(src);
    $.post("/ajax.ashx?action=changefavcolumn&t=" + Math.random(), {
        ids: _ids,
        targetId: src.value
    }, function(msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            location.reload();
        } else {
            //alert(sMsg);
        }
    });
    showProc(src, false);
}
function getRecommentProductByHistory() {
    $.post("/ajax.ashx?action=GetRecommentProductByHistory&t=" + Math.random(), {
      
    }, function(msg) {
        var jO = $j("divHistoryRecommentCntr");
        if (msg.length == 0) {
            jO.remove();
        } else {
            jO.html(msg);
        }
    });
}

function getRecommentProjectByHistory(_oid) {
    $.post("/ajax.ashx?action=GetRecommentProjectByHistory&t=" + Math.random(), {
        oid: _oid
    }, function(msg) {
        var jO = $j("divHistoryRecommentCntr");
        if (msg.length == 0) {
            jO.remove();
        } else {
            jO.html(msg);
        }
    });
}


function getRelevantSales(_oid) {
    $.post("/ajax.ashx?action=GetRelevantSales&t=" + Math.random(), {
        oid: _oid
    }, function(msg) {
        var jO = $j("divRelevantSalesCntr");
        if (msg.length == 0) {
            jO.remove();
        } else {
            jO.html(msg);
        }
    });
}
function getRelevantViewed(_oid) {
    $.post("/ajax.ashx?action=GetRelevantViewed&t=" + Math.random(), {
        oid: _oid
    }, function(msg) {
        var jO = $j("divRelevantViewedCntr");
        if (msg.length == 0) {
            jO.remove();
        } else {
            jO.html(msg);
        }
    });
}
//浏览服务的历史记录
function getRelevantViewedProject(_oid) {
    $.post("/ajax.ashx?action=GetRelevantViewedProject&t=" + Math.random(), {
        oid: _oid
    }, function(msg) {
        var jO = $j("divRelevantViewedCntr");
        if (msg.length == 0) {
            jO.remove();
        } else {
            jO.html(msg);
        }
    });
}



function delInitationlog(src, itemTabId) {
    var _ids = getCheckedVal(itemTabId);
    if (_ids.length == 0) {
        $a("无选中项。");
        return;
    }
    showBgProc();
    $.post("/ajax.ashx?action=DelInitationlog&t=" + Math.random(), {
        ids: _ids
    }, function(msg) {
        if (gav(msg, "state") == "1") {
            var chks = $j(itemTabId).find("input[name=item]:checked");
            chks.each(function(i) {
                $(this).parent().parent().remove();
            });
        } else {
            $a(gav(msg, "msg"));
        }
        showBgProc(false);
    });
}
function sendInvitation(src) {
    var jSrc = $j(src);
    var sEmail = $j("txtEmail").val();
    if (sEmail == null || sEmail.length == 0) {
        $a("电子邮箱地址不可为空。");
        return;
    }
    if (!PTN_EMAIL.test(sEmail)) {
        $a("电子邮箱地址格式不正确。");
        return;
    }
    showProc(src);
    $.post("/ajax.ashx?action=SendInvitation&t=" + Math.random(), {
        _email: sEmail
    }, function(msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            showMsgPage(sMsg, 1, "/user/InviteUserList.aspx", "邀请函列表", "/user/InviteUserList.aspx");
        } else {
            $a(sMsg);
            showProc(src, false);
        }
    });
}
//填充报告分类
function fillReportCategories() {
    $.get("/ajax.ashx?action=GetReportCategories&t=" + Math.random(), function(msg) {
        var arrCat = msg.split("$$");
        var sOptHtml = "<option value=\"\">请选择...</option>";
        for (var i = 0; i < arrCat.length; ++i) {
            sOptHtml += "<option value=\"" + arrCat[i] + "\">" + arrCat[i] + "</option>";
        }
        $j("RPT_tdCats").html("<select id=\"RPT_cats\">" + sOptHtml + "</select>");
    });
}
//填充留言分类
function fillLeavewordCategories() {
    $.get("/ajax.ashx?action=GetLeavewordCategories&t=" + Math.random(), function(msg) {
        var arrCat = msg.split("$$");
        var sOptHtml = "<option value=\"\">请选择...</option>";
        for (var i = 0; i < arrCat.length; ++i) {
            sOptHtml += "<option value=\"" + arrCat[i] + "\">" + arrCat[i] + "</option>";
        }
        $j("LEAVEWORD_tdCats").html("<select id=\"LEAVEWORD_cats\">" + sOptHtml + "</select>");
    });
}
//发送留言
function sendLeaveword(src) {
    var sCat = $j("LEAVEWORD_cats").val();
    var sTitle = $v("LEAVEWORD_txtTitle");
    var sTel = $v("LEAVEWORD_txtTel");
    var sMobile = $v("LEAVEWORD_txtMobile");
    var sContact = $v("LEAVEWORD_txtContact");
    var sEmail = $v("LEAVEWORD_txtEmail");
    var sShortDesc = $v("LEAVEWORD_txtShortDesc");
    var err = "";
    if (sTitle == "") {
        err += "<li>标题不可为空</li>";
    }
    if (sContact == "") {
        err += "<li>联系人不可为空</li>";
    }
    if (sEmail == "") {
        err += "<li>电子邮箱地址不可为空</li>";
    }
    else if (!PTN_EMAIL.test(sEmail)) {
        err += "<li>电子邮箱地址格式错误</li>";
    }
    if (sCat == "") {
        err += "<li>留言类型必选</li>";
    }
    if (err.length > 0) {
        $a(err);
        return;
    }
    showProc(src);
    $.post("/ajax.ashx?action=SendLeaveword&t=" + Math.random(), {
        title: sTitle,
        cat: sCat,
        contact: sContact,
        email: sEmail,
        shortDesc: sShortDesc,
        tel: sTel,
        mobile: sMobile

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
function sendLeavewordOnline(src) {


    var oTitle = $v("ONLINE_txtTitle");
    var oCompany = $v("ONLINE_txtCompany");
    var oTel = $v("ONLINE_txtPhone");
    var oEmail = $v("ONLINE_txtEmail");
    var oCity = $v("ONLINE_txtCity");
    var oMes = $v("ONLINE_txtMes");


    var err = "";
    if (oTitle == "") {
        err += "<p>联系人不可为空</p>";
    }
    if (oEmail == "") {
        err += "<p>联系邮箱不可为空</p>";
    }


    if (err.length > 0) {
        $a(err);
        return;
    }

    showProc(src);
    $.post("/ajax.ashx?action=SendLeavewordOnline&t=" + Math.random(), {

        title_o: oTitle,
        company_o: oCompany,
        tel_o: oTel,
        email_o: oEmail,
        city_o: oCity,
        mes_o: oMes

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



function submitOrder(src, _oid) {
    showProc(src);
    var _contact = $j("txtContact").val();  
    var _mobile = $j("txtMobile").val();
    var _email = $j("txtEmail").val();
//    var _code = $j("txtcode").val();
    var _content = $j("txtContent").val();
    var errorMsg = "";
    if (_contact.length == 0 || _contact == "请填写联系人") {
        errorMsg += "<p>联系人不可为空</p>";
    }
//    if (_mobile.length == 0) {
//        errorMsg += "<p>手机不可为空</p>";
//    }
    
    var ptns = /^\d{11,13}$/;
//    if (_mobile.length > 0 && !ptns.test(_mobile)) {
//        errorMsg += "<p>手机格式错误</p>";
//    }
    
    var ptn = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (_email.length > 0 && !ptn.test(_email)) {
        errorMsg += "<p>E-Mail格式错误</p>";
    }

    if (_content.length == 0 || _content == "请填写您要咨询的信息") {
        errorMsg += "<p>请填写您要咨询的信息不可为空</p>";
    }
//    if (_code.length == 0 || _code == "请填写正确的验证码") {
//        errorMsg += "<p>请填写正确的验证码</p>";
//    }
    if (errorMsg.length > 0) {
        $a(errorMsg);
        showProc(src, false);
        return;
    }
    $.post("/ajax.ashx?action=submitorder&t=" + Math.random(), {
        oid: _oid,
        contact: _contact,
        mobile: _mobile,
        //code:_code,
        content: _content,
	email: _email
    }, function(msg) {
        var sta = gav(msg, "state");
        var sMsg = gav(msg, "msg");
        if (sta == "1") {
            $a(sMsg, 1);
            emptyText('tbForm1');
        } else {
            $a(msg);
            emptyText('tbForm1');
        }
    });
    showProc(src, false);
}





/*加盟商在线下单*/
function sendGetProductsNotify(src) {
    var _productColumn = $j("ddlProductsColumns").val();
    var _searchText = $j("txtSearch").val();
    if (_searchText == "关键词") { _searchText = ""; }
    //showProc(src);
    $.post("/ajax.ashx?action=sendGetProductsByColumn&t=" + Math.random(), {
        columnID: _productColumn,
        searchText: _searchText
    }, function(msg) {

        //创建下拉表单
        InitDropdownlist(document.getElementById("PackageSelectList"), "请选择关联资讯", "0", msg);
    });
}

//设置产品数据源
function InitDropdownlist(sel, defaulttext, defaultvalue, arry) {
    //1\清除所有的数据源
    var len = sel.options.length;
    for (i = 0; i < len; i++) {
        sel.remove(0);
    }

    //2\设置一个默认值
    //sel.add(new Option(defaulttext, defaultvalue));

    //3\制作数据源，键值对中间用$$分开，||作为键值对之间的分割符

    var ary = arry.split("||");
    len = ary.length;
    if (len) {
        for (i = 0; i < len-1; i++) {
            text_value = ary[i].split("$$");
            text = text_value[1];
            value = text_value[0];
            sel.add(new Option(text, value));
        }
    }
}

/******************************************************************************
* filename: Common.js
* Include Modul Scripting


*******************************************************************************/
/********************
* 帮助中心详细页加载脚本
********************/
function helpLoad() {
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    // getHelpStatic(OBJ_ID);
    helpSelectCurrentPosition(SID);
}
/********************
* 根据当前方案ID，使帮助中心左边选择对应的分类
********************/
function helpSelectCurrentPosition(SID) {
    var lis = $(".about_nav").find("li");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).attr("sid") == SID) {
            $(lis[i]).addClass("cur");
            break;
        }
    }
}
/********************
* 资讯详细页加载脚本
********************/


function newsLoad() {
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    writeComment(OBJ_ID, MARK);
    getLastArticle();
    getHistory(MARK);
    addHistory(OBJ_ID, MARK);
}
/********************
* 根据当前请求的分类SID，使资讯中心左边选择对应的分类
********************/
function newsSelectCurrentPosition(SID) {
    var lis = $(".about_nav").find("li");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).attr("sid") == SID) {
            $(lis[i]).addClass("cur");
            break;
        }
    }
}
/********************
* 资讯详细页加载脚本
********************/
function productLoad() {
    productSelectCurrentPosition(SID);
    hits(ProductID, "product");
    // writeComment(ProductID, MARK);
    //  addHistory(ProductID, MARK);
    initImages(ProductID);
    // getVideo(VIDEO_KEY);
    //  getHistory("product");
    getRecommentProductByHistory();
    getRelevantViewed(ProductID);

}


///********************
//* 资讯详细页加载脚本
//********************/
//function downLoad() {
//    hits(DownloadID, "download");
//    writeComment(DownloadID, MARK);
//    addHistory(DownloadID, MARK);
//    getHistory("download");
//    getRelevantViewedDownload(DownloadID);
//}

/********************
* 方案服务详细页加载脚本
********************/
function projectLoad() {
    productSelectCurrentPosition(SID);
    hits(ProjectID, "project");
    writeComment(ProjectID, MARK);
    addHistory(ProjectID, MARK);
    getHistory("project");
    getRecommentProjectByHistory(ProjectID);
    getRelevantViewedProject(ProjectID);

}


/********************
* 产品详细页选择产品的颜色，尺寸等(愿望夹)
********************/

/********************
* 产品详细页选择产品的属性时，显示相关的图片
********************/
function getAttrValesPhotos(_oid) {
    //  alert(_oid);
    $.post("/ajax.ashx?action=attrValuesPhotos&t=" + Math.random(), {
        oid: _oid
    }, function (msg) {
        //alert(msg);
        // var sta = gav(msg, "state");
        // var s = gav(msg, "msg");
        $j("img_list").html(msg);
    });
}



/********************
* 产品详细页切换‘相关产品’，‘相关购买产品’，‘相关浏览器’选项卡
* src : 触发事件的源
********************/
function switchProdTab(src) {
    var jSrc = $(src);
    var targetId = jSrc.attr("target_id");
    var selectedElm = jSrc.parent().find("a[class=cr]");
    if (selectedElm.attr("target_id") == targetId) {
        return;
    }

    selectedElm.removeClass("cr");
    jSrc.addClass("cr");
    $j("cntrRelevantProd>div").hide();
    $j(targetId).show();
}
/********************************************* 代理加盟:start *********************************/
/********************
* 代理加盟详细页加载脚本
********************/
function agentLoad() {
    hits(OBJ_ID, MARK);
    getHits(OBJ_ID, MARK);
    getAgentHelpStatic(OBJ_ID);
    getAd(MARK, "cntrAd");
}
/********************************************* 代理加盟:end *********************************/
/********************
* 保存用户名
********************/
function keepUsername(keep, emailElmId) {
    var sName = $j(emailElmId).attr("value");
    if (keep != null && sName != undefined) {
        if (keep) { $cookie("__oran__k_username", sName, 99999999999) }
        else { $cookie("__oran__k_username", false) };
        return;
    }
    if (!$j("chkKeep").attr("checked")) { return };
    if (sName != undefined) { $cookie("__oran__k_username", sName, 99999999999) };
}
/********************
* 根据ID获取文本框内容并去除两边空格
* src : 触发事件的源对象
********************/
function toggleJobDetail(src, _skinPath) {
    var detail = $(src).parent().next();
    var jH = $(src).parent();
    if (detail.is(":visible")) {
        detail.slideUp(80);
        jH.css({ "background": "url(" + _skinPath + "img/ico14.gif) no-repeat 0 5px" });
    } else {
        detail.slideDown(80);
        jH.css({ "background": "url(" + _skinPath + "img/ico13.gif) no-repeat 0 5px" });
    }
}
/********************
* 显示所有产品分类
* showBg : (可选)是否显示灰度背景，默认显示
********************/
function showAllColumns(showBg) {
    if (showBg == null) {
        showBg = true;
    }
    if (showBg) {
        showFullBg();
    }
    setCM("prod_all_columns");
    relocation("prod_all_columns");
}
/********************
* 隐藏所有产品分类
* showBg : (可选)是否隐藏灰度背景，默认隐藏
********************/
function hideAllColumns(showBg) {
    if (showBg == null) {
        showBg = true;
    }
    if (showBg) {
        hideFullBg();
    }
    $j("prod_all_columns").fadeOut(80);
}
/********************
* 显示正在处理中动画，点全屏
* show : (可选)显示或隐藏，默认显示
********************/
function showBgProc(show, msg) {
    if (msg == null) {
        msg = "正在处理...";
    }
    var sElmId = "oran_div_processing";
    var oImg = $j(sElmId);
    if (oImg.length == 0) {
        $(document.body).append("<div id='" + sElmId + "'><p><img src='" + SKIN_PATH + "img/processing_2.gif' id='imgProc' alt='" + msg + "' /></p>"
        + "<p class='mt10'>" + msg + "</p></div>");
    }
    oImg = $j(sElmId);
    if (show == null) {
        show = true;
    }
    if (show) {
        showFullBg("oran_full_bg_2");
        setCM(sElmId);
        relocation(sElmId);
        oImg.fadeIn(80);
    } else {
        oImg.fadeOut(80);
        hideFullBg("oran_full_bg_2");
    }
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
/********************
* 设置对象的样式名SetClass
* jObj : jQuery对象
* className : 样式类名
********************/
function sc(jObj, className) {
    jObj.attr("class", className);
}
function ddlSecQus_Changed(src, elmId) {
    if (elmId == null) {
        elmId = "txtSecQus";
    }
    var jTxt = $j(elmId);
    if (src.value == "") {
        jTxt.show();
        jTxt.attr("value", "").focus();
    } else {
        jTxt.hide();
    }
    jTxt.attr("value", src.value);
}
/********************
* 弹出我的收货地址层
* showBg : (可选)是否显示灰度背景，默认显示
********************/
function showMyAddress(showBg) {
    if (showBg == null) {
        showBg = true;
    }
    if (showBg) {
        showFullBg("oran_full_bg", false);
    }
    var jFrm = $("#divCartMyAddr > iframe");
    jFrm.attr("src", "layer/MyAddress.aspx");
    setCM("divCartMyAddr");
    //relocation("divCartMyAddr");
}
/********************
* 隐藏我的收货地址层
********************/
function hideMyAddress() {
    top.window.hideFullBg("oran_full_bg");
    $(top.window.document).find("#divCartMyAddr").fadeOut(80);
}
/********************
* 设置我的收货地址层
* src : 触发事件的源对象
********************/
function setMyAddr(src) {
    var jCntr = $(src).parent().parent().parent();
    var chnName = jCntr.find("span[name=chnName]").html();
    var province = jCntr.find("span[name=province]").html();
    var city = jCntr.find("span[name=city]").html();
    var address = jCntr.find("span[name=address]").html();
    var zipCode = jCntr.find("span[name=zipCode]").html();
    var tel = jCntr.find("span[name=tel]").html();
    var mobile = jCntr.find("span[name=mobile]").html();
    var email = jCntr.find("span[name=email]").html();
    var jTopDoc = $(top.window.document);
    jTopDoc.find("#txtAddrName").val(chnName);
    jTopDoc.find("#txtInvoiceTitle").val(chnName);
    jTopDoc.find("#txtEmail").val(email);
    jTopDoc.find("#txtAddrAddr").val(address);
    jTopDoc.find("#txtAddrZip").val(zipCode);
    jTopDoc.find("#txtAddrTel").val(tel);
    jTopDoc.find("#txtAddrMobile").val(mobile);

    $(top.window.document).find("#regionAddr_hdnPrtRegion").val(province);
    $(top.window.document).find("#regionAddr_hdnChdRegion").val(city);
    top.window.regionAddr_initSelectedItems();

    hideMyAddress();
}
function checkPinForm() {
    var newPin = $j("txtNewPin").val();
    var newSecAsr = $j("txtSecAsr").val();
    var newEmail = $j("txtNewEmail").val();
    if (newPin.length == 0 && newSecAsr == 0 && newEmail.length == 0) {
        $a("未有任何修改项", 2);
        return false;
    } else {
        return true;
    }
}
/********************
* 切换订单选项卡
********************/
function switchOrderTab(src) {
    var jUl = $j("ulOrderTypeTabs");
    jUl.find("a").removeClass("cur b cblack f14");
    $(src).addClass("cur b cblack f14").blur();

}
/********************
* 搜索订单
********************/
function searchOrder() {
    var orderNo = $tv("txOrderNo");
    var startDate = $tv("txtStartDate");
    var endDate = $tv("txtEndDate");
    var orderState = $tv("ddlOrderStates");
    var orderType = $("#ulOrderTypeTabs").find(".cur").attr("ordertype");
    if (orderNo.length == 0 && startDate.length == 0 && endDate.length == 0 && orderState.length == 0) {
        $a("至少需要一个查询条件。");
        return;
    }
    var flag = false;
    var url = "orderlist.aspx?";
    if (orderNo.length > 0) {
        url += "no=" + orderNo;
        flag = true;
    }
    if (startDate.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "start=" + startDate;
        flag = true;
    }
    if (endDate.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "end=" + endDate;
        flag = true;
    }
    if (orderState.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "state=" + orderState;
        flag = true;
    }
    if (orderType != undefined && orderType.length > 0) {
        if (flag) {
            url += "&";
        }
        url += "type=" + orderType;
        flag = true;
    }
    location.href = url;
}
//function searchFav() {
//    var kwd = $tv("txtFavKwd");
//    var clnId = $tv("ddlFavClns");
//    var flag = false;
//    var url = "MyFavorites.aspx?";
//    if (kwd.length > 0) {
//        url += "kwd=" + encodeURI(kwd);
//        flag = true;
//    }
//    if (clnId.length > 0) {
//        if (flag) {
//            url += "&";
//        }
//        url += "oid=" + clnId;
//        flag = true;
//    }
//    location.href = url;
//}
//function customizePriceRange(src) {
//    var jLower = $(src).parent().find("input:eq(0)");
//    var jUpper = $(src).parent().find("input:eq(1)");
//    var lower = parseInt(jLower.val());
//    var upper = parseInt(jUpper.val());
//    var url = "/product/list.aspx?";
//    if (!lower) {
//        lower = 0;
//    }
//    if (!upper) {
//        upper = 0;
//    }
//    if (lower == 0 && upper == 0) {
//        $a("至少需要一个价格范围。");
//        jLower.focus();
//        return;
//    }
//    if (lower > 0 && upper > 0) {
//        url += "PriceLower=" + lower + "&PriceUpper=" + upper;
//    } else if (lower > 0) {
//        url += "PriceUpper=" + lower;
//    } else if (upper > 0) {
//        url += "PriceLower=" + upper;
//    }
//    location.href = url;
//}
function copyUrl(_mark) {
    var jLayer = $j("div_nsw_copy_url");
    var s = location.href;

    if (jLayer.length == 0) {
        var sHtml = "<div id='div_nsw_copy_url'>"
                + "<h1><a href='javascript:void(0)' onclick=\"$(this).parent().parent().fadeOut(80);hideFullBg('div_nsw_copy_url_bg')\"><img src='" + SKIN_PATH + "img/ico9_close.gif' /></a>拷贝链接地址</h1>"
                + "<div class='cont'>"
                + "<div>拷贝本URL从您的博客或者网站链接到本" + (_mark == "product" ? "产品" : "文章") + "</div>"
                + "<textarea>" + s + "</textarea>"
                + "<div><input type='button' value='拷贝地址' onclick='copyArticleUrl()' class='b13' /></div>"
                + "</div>"
                + "</div>";
        $(document.body).append(sHtml);
    }
    setCM("div_nsw_copy_url");
    relocation("div_nsw_copy_url");
    showFullBg("div_nsw_copy_url_bg");
}
function copyArticleUrl() {
    var s = $("#div_nsw_copy_url .cont textarea").val();
    window.clipboardData.setData("Text", s);
    $a("本网页地址已复制到粘帖板。", 1);
}


function initImages(oid) {
    var fmt = "<li {$co$}><a   href={$path$} target=\"_blank\"><img longdesc={$path$} src={$path$}  ></a></li>";
    var oHtml = "";
    for (var i = 0; i < ARR_IMG_PATH.length; ++i) {
        if (i == 0) {
            oHtml = fmt.replace(/\{\$co\$\}/ig, "class=now").replace(/\{\$path\$\}/ig, ARR_IMG_PATH[i]);

        }
        else {
            oHtml += fmt.replace(/\{\$path\$\}/ig, ARR_IMG_PATH[i]);
        }
    }
    $("#img_list").html(oHtml);
}

function setSelectedImg(src) {
    $(src).parent().find("a").removeClass("cur");
    $(src).addClass("cur");
}
function viewBigImage(oid) {
    var curPath = window.location.host;
    var url = "/product/gallery.aspx?oid=" + oid;
    if (curPath != "undefined") {
        url += "&selectedpath=http://" + curPath;
    }
    window.open(url);
}
function switchImage(src) {
    var jImgA = $(".MagicZoom");
    var jMainImg = jImgA.find("img:eq(0)");
    var jMainImg2 = $(".MagicZoomBigImageCont img");
    var targetPath = $(src).find("img").attr("srcimg");
    jImgA.attr("href", targetPath);
    jMainImg.attr("src", targetPath);

    jMainImg2.attr("src", targetPath);
    // alert(targetPath);


    //    $("#ulImgs>li>a").removeClass("cur");
    //    $(src).addClass("cur").blur();
    $j("btnShowOrgiImg").click(function () {
        window.open(targetPath, "orgiImg");
    });
}
function initViewPhoto() {
    $j("imgBig").attr("src", $("#ulPhotos>li>a>img").attr("src"));
    $("#ulPhotos>li>a:eq(0)").addClass("cur");
    resetNextPrevious($("#ulPhotos>li>a:eq(0)").get());
}
function viewPhoto(src) {
    $j("imgBig").attr("src", $(src).find("img").attr("src"));
    $("#ulPhotos>li>a").removeClass("cur");
    $(src).addClass("cur").blur();
    resetNextPrevious(src);
}
function resetNextPrevious(curObj) {
    var jPre = $(curObj).parent().prev();
    if (jPre.length == 0) {
        jPre = $("#ulPhotos>li:last");
    }
    var jNext = $(curObj).parent().next();
    if (jNext.length == 0) {
        jNext = $("#ulPhotos>li:first");
    }

    $j("btnPrev").removeAttr("onclick").click(function () {
        viewPhoto(jPre.find("a").get());
    });
    $j("btnNext").removeAttr("onclick").click(function () {
        viewPhoto(jNext.find("a").get());
    });
}
function mailArticle(objType, oid) {
    var jCntr = $j("mailArticle");
    if (jCntr.length == 0) {
        var sHtml = "<div id='mailArticle'><iframe src='/private/SendNewsToYourFriends.aspx?oid=" + oid + "' frameborder='0'></iframe></div>";
        $(document.body).append(sHtml);
    }
    setCM('mailArticle');
    showFullBg("mailArticle_bg", null, null, null, null, null, function () { $("#mailArticle iframe").css("visibility", "visible"); });
    relocation("mailArticle");
}
function mailProduct(objType, oid) {
    $j("mailArticle").html("<iframe src='/private/SendProductToYourFriends.aspx?oid=" + oid + "' frameborder='0'></iframe>");
    setCM('mailArticle');
    showFullBg("mailArticle_bg", null, null, null, null, null, function () { $("#mailArticle iframe").css("visibility", "visible"); });
    relocation("mailArticle");
}

function mailDownload(objType, oid) {
    $j("mailArticle").html("<iframe src='/private/SendDownloadToYourFriends.aspx?oid=" + oid + "' frameborder='0'></iframe>");
    setCM('mailArticle');
    showFullBg("mailArticle_bg", null, null, null, null, null, function () { $("#mailArticle iframe").css("visibility", "visible"); });
    relocation("mailArticle");
}

function hideMailAtricle() {
    $(top.document.getElementById("mailArticle")).fadeOut(80);
    $(top.document.getElementById("mailArticle_bg")).fadeOut(80);
    top.showDdl();
}
function contractExtend(src, skinPath) {
    var jSrc = $(src);
    var jDiv = jSrc.parent().next();
    var alt;
    var icon;
    if (jSrc.attr("alt") == "收缩") {
        alt = "展开";
        icon = "img/ico15_.gif";
        jDiv.slideUp(80);
    } else {
        alt = "收缩";
        icon = "img/ico15.gif";
        jDiv.slideDown(80);
    }
    jSrc.attr({ src: skinPath + icon, alt: alt });
}
function showLayer(elmId, bgElmId, behavior) {
    setCM(elmId);
    relocation(elmId);
    showFullBg(bgElmId, null, null, null, null, null, behavior);
}
function hideLayer(elmId, bgElmId) {
    $j(elmId).fadeOut(80);
    hideFullBg(bgElmId);
}
//function showAdvanNewsSearch() {
//    $j("div_nsw_news_advan_cntr").find("iframe").attr("src", "/news/AdvanSearch.aspx");
//    showLayer('div_nsw_news_advan_cntr', 'div_nsw_news_advan_bg', function() { $j("div_nsw_news_advan_cntr").find("iframe").css("visibility", "visible"); });
//}
function hideAdvanNewsSearch() {
    $(top.document).find("#div_nsw_news_advan_cntr").fadeOut(80);
    $(top.document).find("#div_nsw_news_advan_bg").fadeOut(80);
    top.showDdl();
}
function advanNewsSearch() {
    var url = "/search/news.aspx?type=";
    url += $g("rdoFuzzy").checked ? "1" : "2";
    top.location.href = SearchObjectByGet("ddlFields,tg|ddlNewsColumns2,sid|txtKwd,kwd|txtStartDate,start|txtEndDate,end", url, true);
}
function contractExtendProdColumn(src, _skin) {
    var jSrc = $(src);
    var jDiv = jSrc.parent().parent().next();
    var alt;
    var icon;
    if (jSrc.attr("alt") == "收缩") {
        alt = "展开";
        icon = "img/ico14.gif";
        jDiv.slideUp(80);
    } else {
        alt = "收缩";
        icon = "img/ico13.gif";
        jDiv.slideDown(80);
    }
    jSrc.attr({ src: _skin + icon, alt: alt });
}
function resetOrderList(urlPara) {
    var pos = urlPara.lastIndexOf('/');
    urlPara = urlPara.substring(pos + 1);
    var opts = $j("ddlOrderBy").find("option");
    opts.each(function (i) {
        if ($(opts[i]).attr("value") == urlPara) {
            $(opts[i]).attr("selected", "selected");
        }
    });
}
function initNextPre() {
    var jA = $j("pagerMain").find("a[class=oran_pg_pp]");
    if (jA.length == 0) {
        $j("btnPrePage").click(function () { $a("这已是第一页。"); });

    } else {
        var sHref = jA.attr("href");
        $j("btnPrePage").click(function () {
            location.href = sHref;
        });
    }
    var jA_2 = $j("pagerMain").find("a[class=oran_pg_np]");
    if (jA_2.length == 0) {
        $j("btnNextPage").click(function () { $a("这已是最后一页。"); });

    } else {
        var sHref_2 = jA_2.attr("href");
        $j("btnNextPage").click(function () {
            location.href = sHref_2;
        });
    }
}
function increaseScroll(elmId) {
    var i = 1;
    var intVal1 = setInterval(function () { if (i > 320) window.clearInterval(intVal1); $g("img_list").scrollLeft += 14; i += 14; }, 1);
}
function decreaseScroll(elmId) {
    var i = 1;
    var intVal1 = setInterval(function () { if (i > 320) window.clearInterval(intVal1); $g("img_list").scrollLeft -= 14; i += 14; }, 1);
}
function payadScroll(hiddenId, shownId, maxId) {
    var jShown = $j("payad_" + shownId);
    var jHdden = $j("payad_" + hiddenId);
    if (jShown.length == 0) {
        jShown = $j("payad_" + maxId);
    }
    jHdden.fadeOut("80", function () {
        jShown.show();
    });
}
////显示报告对话框
//function showReport(src) {
//    var jCnrt = $j("RPT_cntr");
//    if (jCnrt.length == 0) {
//        var sHtml = "<div class=\"reports\" id=\"RPT_cntr\">"
//                + "<h1><a href=\"javascript:void(0)\" onclick=\"$closeLayer('RPT_cntr','RPT____BG')\" class=\"close2\"><img src=\"" + SKIN_PATH + "img/close2.gif\" alt=\"关闭\" title=\"关闭\" /></a>报告/纠错/举报</h1>"
//                + "<table id=\"RPT_tab\">"
//                + "<tr>"
//                + "<th>被报告网站标题：</th>"
//                + "<td><input type=\"text\" size=\"40\" disabled=\"disabled\" value=\"" + document.title + "\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>被报告网址：</th>"
//                + "<td><input type=\"text\" size=\"40\" disabled=\"disabled\" value=\"" + document.URL + "\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>* 报告类型：</th>"
//                + "<td id=\"RPT_tdCats\"></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>联系人：</th>"
//                + "<td><input type=\"text\" size=\"10\" id=\"RPT_txtContact\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>电子邮箱地址：</th>"
//                + "<td><input type=\"text\" size=\"30\" id=\"RPT_txtEmail\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>报告内容简要描述：</th>"
//                + "<td><textarea style=\"width:230px;height:80px;\" id=\"RPT_txtShortDesc\"></textarea></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>&nbsp;</th>"
//                + "<td>"
//                + "<input type=\"button\"  value=\"关闭\" class=\"b18 fr\" onclick=\"$('#RPT_cntr>h1>a').click()\" /> "
//                + "<input type=\"button\"  value=\"提交\" class=\"b15\" onclick=\"sendReprots(this)\" /> "
//                + "</td>"
//                + "</tr>"
//                + "</table>"
//                + "</div>";
//        $(document.body).append(sHtml);
//        fillReportCategories();
//    } //end if
//    jCnrt.show();
//    showFullBg("RPT____BG", null, null, null, null, null, function() { $j("RPT_cats").css("visibility", "visible"); });
//    setCM("RPT_cntr");
//    relocation("RPT_cntr");
//}
////显示留言对话框
//function showLeaveword(src) {
//    var jCnrt = $j("LEAVEWORD_cntr");
//    if (jCnrt.length == 0) {
//        var sHtml = "<div class=\"reports\" id=\"LEAVEWORD_cntr\">"
//                + "<h1><a href=\"javascript:void(0)\" onclick=\"$closeLayer('LEAVEWORD_cntr','LEAVEWORD____BG')\" class=\"close2\"><img src=\"" + SKIN_PATH + "img/close2.gif\" alt=\"关闭\" title=\"关闭\" /></a>留言</h1>"
//                + "<table id=\"LEAVEWORD_tab\">"
//                + "<tr>"
//                + "<th>* 标题：</th>"
//                + "<td><input type=\"text\" size=\"40\" id=\"LEAVEWORD_txtTitle\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>* 联系人：</th>"
//                + "<td><input type=\"text\" size=\"10\" id=\"LEAVEWORD_txtContact\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>联系电话：</th>"
//                + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtTel\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>手机号码：</th>"
//                + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtMobile\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>* 电子邮箱地址：</th>"
//                + "<td><input type=\"text\" size=\"30\" id=\"LEAVEWORD_txtEmail\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>* 留言分类：</th>"
//                + "<td id=\"LEAVEWORD_tdCats\"></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>留言内容：</th>"
//                + "<td><textarea style=\"width:230px;height:80px;\" id=\"LEAVEWORD_txtShortDesc\"></textarea></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>&nbsp;</th>"
//                + "<td>"
//                + "<input type=\"button\"  value=\"关闭\" class=\"b18 fr\" onclick=\"$('#LEAVEWORD_cntr>h1>a').click()\" /> "
//                + "<input type=\"button\"  value=\"提交\" class=\"b15\" onclick=\"sendLeaveword(this)\" /> "

//                + "</td>"
//                + "</tr>"
//                + "</table>"
//                + "</div>";
//        $(document.body).append(sHtml);
//        fillLeavewordCategories();
//    } //end if
//    jCnrt.show();
//    showFullBg("LEAVEWORD____BG", null, null, null, null, null, function() { $j("LEAVEWORD_cats").css("visibility", "visible"); });
//    setCM("LEAVEWORD_cntr");
//    relocation("LEAVEWORD_cntr");
//}
////显示直接付款对话框
//function showDirectPay(src) {
//    var jCnrt = $j("DIR_PAY_cntr");
//    if (jCnrt.length == 0) {
//        var sHtml = "<div class=\"reports\" id=\"DIR_PAY_cntr\">"
//                + "<h1><a href=\"javascript:void(0)\" onclick=\"$closeLayer('DIR_PAY_cntr','DIR_PAY____BG')\" class=\"close2\"><img src=\"" + SKIN_PATH + "img/close2.gif\" alt=\"关闭\" title=\"关闭\" /></a>付款</h1>"
//                + "<table id=\"DIR_PAY_tab\" style=\"background:url(" + SKIN_PATH + "img/Pay_ico.gif) no-repeat right top;width:400px;\">"
//                + "<tr>"
//                + "<tr>"
//                + "<th>* 付款方式：</th>"
//                + "<td><select id=\"DIR_PAY_ddlPayment\"><option value=\"\">请选择</option>"
//                + "<option value=\"alipay\">支付宝</option>"
//                + "<option value=\"99bill\">快钱</option>"
//                + "</select>"
//                + "</td>"
//                + "</tr>"
//                + "<th>* 付款人：</th>"
//                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtPayer\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>* 电子邮箱地址：</th>"
//                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtEmail\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>联系电话：</th>"
//                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtTel\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>手机号码：</th>"
//                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtMobile\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>我公司业务员姓名：</th>"
//                + "<td><input type=\"text\" size=\"20\" id=\"DIR_PAY_txtSalesManName\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>* 付款金额：</th>"
//                + "<td><input type=\"text\" size=\"10\" id=\"DIR_PAY_txtMoney\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>* 款项用途：</th>"
//                + "<td><input type=\"text\" size=\"40\" id=\"DIR_PAY_txtUse\" /></td>"
//                + "</tr>"
//                + "<tr>"
//                + "<th>&nbsp;</th>"
//                + "<td>"
//                + "<input type=\"button\"  value=\"关闭\" class=\"b18 fr\" onclick=\"$('#DIR_PAY_cntr>h1>a').click()\" /> "
//                + "<input type=\"button\"  value=\"提交\" class=\"b15\" onclick=\"directPay(this)\" /> "
//                + "</td>"
//                + "</tr>"
//                + "</table>"
//                + "</div>";
//        $(document.body).append(sHtml);
//    } //end if
//    jCnrt.show();
//    showFullBg("DIR_PAY____BG", null, null, null, null, null, function() { $j("DIR_PAY_ddlPayment").css("visibility", "visible"); });
//    setCM("DIR_PAY_cntr");
//    relocation("DIR_PAY_cntr");
//}

//在top对象里关闭层
function closeTopLayer(layerId) {
    var j = $(top.document).find("#" + layerId);
    j.fadeOut();
    top.hideFullBg();
}
function getObjectOffset(src) {
    var jSrc = $(src);
    var offset = jSrc.offset();
    var obj = { top: offset.top, left: offset.left, bottom: offset.top + jSrc.height(), right: offset.left + jSrc.width() };
    return obj;
}
/********************
* 根据当前方案ID，使产品中心左边选择对应的分类
********************/
function productSelectCurrentPosition(SID) {
    var lis = $(".pleft .pnav").find("a");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).attr("sid") == SID) {
            $(lis[i]).addClass("cur");
            $(lis[i]).parent(".pnav").parent("li").addClass("cur");
            break;
        }
    }

    var lis = $(".pleft ul li").find("a");
    for (var i = 0; i < lis.length; ++i) {
        if ($(lis[i]).attr("sid") == SID) {
            $(lis[i]).parent("li").addClass("cur");
            break;
        }
    }
}


//切换产品详细页选项卡
function switchAttrTab(src) {
    var jSrc = $(src);
    if (jSrc.attr("class") == "cur") {
        return;
    }
    var targetItem = jSrc.attr("item_name");
    $j("div__detail").hide();
    $j("div__attr").hide();
    $j("div__" + targetItem).show();
    $(".prod_tab").find("a").removeClass("cur");
    jSrc.addClass("cur");
}

//切换产品详细页扩展标签选项卡
function switchExtendAttrTab(src, n) {
    var jSrc = src;
    var temp = src.substring(src.length - 1, src.length);
    for (var i = 0; i < n; i++) {
        var tab = "detailvalue" + i;
        var ttab = "detail" + i;
        if (temp == i) {
            $j(tab).show();
            $j(ttab).addClass("status_on");
        }
        else {
            $j(tab).hide();
            $j(ttab).removeClass();
        }

    }
}

//切换产品标签内容分页
function switchExtendContentTab(src, n, m) {
    var jSrc = src;
    var temp = src.substring(src.length - 1, src.length);
    for (var i = 0; i < n; i++) {
        var tab = "contentvalue" + m + i;
        var ttab = "content" + m + i;
        if (temp == i) {
            $j(tab).show();
            $j(ttab).addClass("cur");
        }
        else {
            $j(tab).hide();
            $j(ttab).removeClass();
        }

    }
} 


//填加友情连接
function AddApply(src) {
    var s_Type = 0; // document.getElementById("TxtType").selectedIndex;
    var s_Url = $tv("TxtUrl");
    var s_Name = $tv("TxtName");
    //var s_PhotoPath = $tv("TxtPhotoPath");
    var s_Content = $tv("TxtMsg");
    var s_UserName = $tv("TxtUserName");
    var s_Phone = $tv("TxtTel");
    var s_Email = $tv("TxtEmail");
    var s_QQ = $tv("TxtQQ");

    if (s_Url == "" || s_Url == "http://") {
        $a("请输入网址！", "TxtUrl");
        return;
    }
    if (s_Name == "") {
        $a("请输入网站名称！", "TxtName");
        return;
    }
    if (s_Content.length > 400) {
        $a("网站简况不能大于400字！", "txtUsername");
        return;
    }
    $.post("/ajax.ashx?action=apply&t=" + Math.random(), {
        Type: s_Type,
        Url: s_Url,
        Name: s_Name,
        //PhotoPath: s_PhotoPath,
        Content: s_Content,
        UserName: s_UserName,
        Phone: s_Phone,
        Email: s_Email,
        QQ: s_QQ
    },
       function (msg) {
           if (gav(msg, "state") == "1") {
               $a(gav(msg, "msg"));

           }
           else {
               $a(gav(msg, "msg"));
           }
           ;
       });
}

   //网站整体主导航选中样式  !!!!!!!!!主导航链接地址要小写,切勿大写!!!!!!!!!
   $(function () {
       /*如果没有各栏目的中心页面(如产品的中心页面index.aspx),
       *就指定一个默认的替代导航选中
       *一般用的最多的是资讯
       */

       var newsDefault = "".toLowerCase();
       var productDefault = "".toLowerCase();
       var agentDefault = "".toLowerCase();
       var helpDefault = "".toLowerCase();
       var projectDefault = "".toLowerCase();
       var downloadDefault = "".toLowerCase();
       /*面包屑导航的判断
       *
       */
       var $plc = $("div.rtop");

       var $plc2 = $("div.ntop");

       var $tmp = $plc.size() ? $plc : $plc2;


       var $location = $tmp; //$tmp.size() ? $tmp : $pro;

       //主导航的父级DIV
       var $menu = $("div.hddown");
       //面包屑导航的超链接
       var $info = $location.find("a");
       //面包屑导航超链接的数量
       var count = $info.size();

       //判断MARK是否存在
       if (!MARK) {
           MARK = "";
       }

       //循环面包屑导航 倒序
       for (var i = count - 1; i >= 0; i--) {
           //取链接地址
           var current = $info.eq(i).attr("href");
           //取文本     

           var txt = $.trim($info.eq(i).text());

           //截取"/"后面的链接
           current = current.substring(current.lastIndexOf("/") + 1);

           //如果截取到是空的话,一般就是最后一次循环还没有匹配到主导航的样式
           if (current == "" || current == undefined) {

               //判断MARK
               //并查看是取默认MARK 还是取之前定义好的替代栏目导航
               switch (MARK) {
                   case "product":
                       current = productDefault ? productDefault : MARK;

                       break;
                   case "news":
                       current = newsDefault ? newsDefault : MARK;
                       break;
                   case "help":
                       current = helpDefault ? helpDefault : MARK;
                       break;
                   default:
                       current = MARK;
                       break;
               }
           }


           //主导航的匹配链接
           var $a = $("div.hddown a[href*='" + current + "']");

           //主导航的匹配文字  [一般情况下是没有用的,有时候会碰到说是这个文字,但是链接确是另外一个,但是导航选中还是要加在文字上面]
           //比如 二级分类是成功案例,但是它下面还有一个三级分类是经典案例,主导航上的是二级分类确标着三级分类的链接,这个文字就有用了
           //况且这里还要先判断文字再判断链接

           var $t = $("div.hddown a:contains('" + txt + "')");


           //最后一次循环txt是首页,往往主导航的第一个都是**首页,所以要判断一下
           //判断文字
           if ($t.size() && txt != "首页") {

               $t.parent("li").addClass("cur").siblings("li").removeClass("cur");
               return;
           } else if ($a.size()) { //判断链接

               $a.eq(0).parent("li").addClass("cur").siblings("li").removeClass("cur");
               return;
           }
       }

       //如果都没有主导航选中,给MARK加链接   各栏目首页 主要是产品首页没有面包屑导航,没有办法判断
       if (!$("div.hddown li.cur").size()) {

           $("div.hddown a[href*='" + MARK + "']").parent("li").addClass("cur").siblings("li").removeClass("cur");
           //如果还没有主导航选中,给第一个加样式
           if (!$("div.hddown li.cur").size()) {

               //$("div.hddown li:first").addClass("cur").siblings("li").removeClass("cur");
           }
       } else {
       }

   });






$(function () {
 $('.rtTop').hide();
    $('.rtTop h4 img').hover(function () {
        $(this).stop().animate({ "top": "-43px" }, 200)
    }, function () {
        $(this).stop().animate({ "top": "0" }, 200)
    })
    $(window).scroll(function () {
        var st = $(document).scrollTop();
        if (st > 500) {
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



$(function () {
    $(".pro_c_s .list").hover(function () {
    //$(this).find('img').stop().animate({ width: '110%', height: '110%', marginLeft: '-5%', marginTop: '-5%' }, 500);
    $(this).find('.til').stop().animate({ paddingTop: 20 }).css({ "background": "#dc001f", "color": "#fff" });

}, function () {
   // $(this).find('img').stop().animate({ width: '100%', height: '100%', marginLeft: '0%', marginTop: '0%' }, 500);
    $(this).find('.til').stop().animate({ paddingTop: 10 }).css({ "background": "#fff", "color": "#333" });
})

});


$(function () {
    $(".pro_c_s_i .list").hover(function () {
        //$(this).find('img').stop().animate({ width: '110%', height: '110%', marginLeft: '-5%', marginTop: '-5%' }, 500);
        $(this).find('.til').stop().animate({ paddingTop: 20 }).css({ "background": "#dc001f", "color": "#fff" });

    }, function () {
        //$(this).find('img').stop().animate({ width: '100%', height: '100%', marginLeft: '5%', marginTop: '5%' }, 500);
        $(this).find('.til').stop().animate({ paddingTop: 10 }).css({ "background": "#fff", "color": "#333" });
    })

});



//应聘
function AddJobApply(src) {
    var oid = $("#hidoid").val();
    //alert(oid);
    var s_Name = $("#txtName").val();
    var s_Phone = $("#txtphone").val();
    var s_Email = $("#txtemail").val();
    var s_path = $("#imgPhotoPath_txt").val();
    var s_desc = $("#txtdesc").val();
    var err = "";
    if (s_Name == "" || s_Name == "姓名：") {
        $a("请填写联系人");
        return false;
    }
    var ptns = /^\d{11,13}$/;
    //       if (s_Phone == "" || s_Phone == "电话：") {
    //            alert("<li>电话号码不可为空</li>");
    //       }
    if (!ptns.test(s_Phone)) {
        $a("电话号码错误" + s_Phone); return false;
    }
    if (s_path.length == "" || s_path.indexOf("/UploadFiles/Others/") == -1) {
        $a("请上传简历"); return false;
    }
    //       if (err.length > 0) {
    //           $a(err);
    //           return;
    //       }
    showProc(src);
    $.post("/ajax.ashx?action=Jobapply&t=" + Math.random(), {
        oid: oid,
        path: s_path,
        Name: s_Name,
        desc: s_desc,
        Phone: s_Phone,
        Email: s_Email

    },
       function (msg) {
           if (gav(msg, "state") == "1") {
               $a("投递成功");
               $("#txtName").val("姓名：");
               $("#txtphone").val("电话：");
               $("#txtemail").val("邮箱：");
               $("#imgPhotoPath_txt").val("");
               $("#txtdesc").val("备注：");
           }
           else {
               $a(msg);
           }
           showProc(src, false);
       });
}

function uploadFile(src, elmId, txt, toggle, folder, srcFilenameElmId, isSingle, targetFilePath) {
    if (elmId == null)
        elmId = "divFu";
    var url = "/Job/Upload.aspx?"
    url += "cntr=" + elmId;
    url += "&txt=" + txt;
    if (toggle)
        url += "&toggle=yes";
    if (folder != null)
        url += "&folder=" + folder;
    if (srcFilenameElmId != null && srcFilenameElmId.length > 0) {
        url += "&srcfilenameelmid=" + srcFilenameElmId;
    }
    if (isSingle) {
        url += "&single=yes";
    }
    if (targetFilePath) {
        url += "&targetFilePath=" + targetFilePath;
    }
    $j(elmId).html("<iframe src='" + url + "' frameborder='0' style='width:100%;height:100%'></iframe>")
    console.log(elmId);
    $j(elmId).css({ left: "375px", top: "86px" }).show();
}