

var dialogUrl = "";
///打开tempContent层
function OpenDialogContent(title, content, width, height, type) { dialogUrl = art.dialog({ title: title, content: content, width: width, height: height, fixed: true, drag: false, lock: true }); }
///打开子页面
function OpenDialogUrl(url, title, width, height, type, data1, data2, onCloseCallback) { art.dialog.data('data1', data1); art.dialog.data('data2', data2); dialogUrl = art.dialog.open(url, { title: title, width: width, height: height, data: data1, fixed: true, drag: true, lock: true, close: onCloseCallback }); }
///关闭子页面
function CloseDialog() { dialogUrl.close(); }
///成功/失败/警告提示:tips
function tips(p_content) { art.dialog({ title: '操作提示', content: p_content, width: 400, height: 80 }, function () { }); }
function tipsFun(p_content, myFun) { art.dialog({ title: '操作提示', content: p_content, width: 400, height: 80, close: myFun }, myFun); }
function tips_en(p_content) { art.dialog({ title: 'Operation Tips', content: p_content, width: 400, height: 80 }, function () { }); }
function tipsFun_en(p_content, myFun) { art.dialog({ title: 'Operation Tips', content: p_content, width: 400, height: 80 }, myFun); }
///删除提示：deltete
function del(msg, fun) { art.dialog.confirm(msg, fun); }
///操作提示：confirm
function confirm(msg, fun, language) {
    var title = "消息";
    var okVal = "确定";
    var cancelVal = "取消";
    switch (language) {
        case "cn":
            title = "消息";
            okVal = "确定";
            cancelVal = "取消";
            break;
        case "en":
            title = "Message";
            okVal = "Ok";
            cancelVal = "Cancel";
            break;
        case "ru":
            title = "новости";
            okVal = "определить";
            cancelVal = "отменен";
            break;
        case "ko":
            title = "뉴스";
            okVal = "결정";
            cancelVal = "취소";
            break;
        default:
            title = "消息";
            okVal = "确定";
            cancelVal = "取消";
            break;
    }
    art.dialog({
        title: title,
        content: msg,
        okVal: okVal,
        ok: fun,
        cancelVal: cancelVal,
        cancel: true //为true等价于function(){}
    });
}
///输入操作:prompt
function prompt(msg, fun) { art.dialog.prompt(msg, fun); }
///右下角提示框：notice
function notice(title, width, height, content, icon, time) { art.dialog.notice({ title: title, width: width, content: content, icon: icon, time: time }); }
///锁屏
function lock(content, fun) {
    art.dialog({
        lock: true,
        background: '#FFF', // 背景色
        opacity: 0.8,	// 透明度
        content: content,
        icon: 'error',
        ok: fun,
        cancel: fun
    });
}

function openArtDialog(url, _id, _title, _width, _height, left, top) {
    art.dialog.open(url, {
        id: _id,
        title: _title,
        width: _width,
        height: _height,
        left: left + '%',
        top: top + '%',
        background: '#000000',
        opacity: 0.1,
        drag: false,
        lock: true,
        resize: false,
        close: function () { }
    }, false);
}

//刷新当前页面
function Reload() {
    window.location.reload();
}
