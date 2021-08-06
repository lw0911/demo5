var isLogin = false;
var isWaiting = false;
var isWaitingLogin = false;
var isWaitingLogin2 = false;
var isWaitingReg = false;
var InterValObjLogin; //timer变量，控制时间
var InterValObjLogin2; //timer变量，控制时间
var InterValObjReg; //timer变量，控制时间
var curTimeSLogin = 0; //当前剩余秒数
var curTimeSlogin2 = 0; //当前剩余秒数
var curTimeSReg = 0; //当前剩余秒数

function register() {
    if (isLogin) {
        return false;
    }

    var mobile = $('#rr-p-username').val();
    var password = $('#rr-p-password').val();
    var code = $('#r-p-verify-code').val();

    if (mobile == null || mobile == '') {
        alert('手机号不能为空');
        return false;
    }
    password = checkPassWord(password);
    if (password === false) {
        return false;
    }

    if (code == null || code == '') {
        alert('验证码不能为空');
        return false;
    }

    if ($('#r-dialog-p-protocol').prop('checked') == false) {
        alert('请阅读并接受用户协议和隐私政策');
        return false;
    }

    $.ajax({
        type: 'post',
        url: '/user/ajax/reg',
        data: {m: mobile, p: password, c: code, cps_id: getCookie('from_cps_id')},
        dataType: 'JSON',
        beforeSend: function (xhr) {
            isLogin = true;
        },
        success: function (res) {
            if (res.code > 0) {
                alert('注册成功');
                window.location.reload();
            } else {
                alert(res.msg);
            }
            isLogin = false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + '->' + errorThrown);
            isLogin = false;
        }
    });
}

function checkLoginParam(checkbox) {
    if (isLogin) {
        return false;
    }

    var ajaxData;
    var auto_login = 0;

    if ($('#' + checkbox).prop('checked') == true) {
        auto_login = 1;
    }

    var login_type = 'pwd_login';
    if ($("#phoneForm").is(":hidden") == false && $("#accountForm").is(":hidden") == true) {
        login_type = 'sms_login';
    }

    if (login_type === 'pwd_login') {
        var username = $('#userName').val();
        var password = $('#userPass').val();
        if (username == null || username == '') {
            alert('账号/手机号不能为空');
            return false;
        }
        password = checkPassWord(password);
        if (password === false) {
            return false;
        }

        ajaxData = {
            u: username,
            p: password,
            lt: login_type,
            al: auto_login,
            uid: getUuid(),
        };
    } else if (login_type === 'sms_login') {
        var username = $('#phoneText').val();
        var code = $('#codeText').val();
        if (username == null || username == '') {
            alert('手机号不能为空');
            return false;
        }
        if (code == null || code == '') {
            alert('验证码不能为空');
            return false;
        }
        ajaxData = {
            u: username,
            c: code,
            lt: login_type,
            al: auto_login,
            uid: getUuid(),
        };
    } else {
        return false;
    }

    doLogin(ajaxData);
}

function checkLoginParam2(login_type, input1, input2, checkbox) {
    if (isLogin) {
        return false;
    }

    var ajaxData;
    var auto_login = 0;
    if ($('#' + checkbox).prop('checked') == true) {
        auto_login = 1;
    }

    if (login_type === 'pwd_login') {
        var username = $('#' + input1).val();
        var password = $('#' + input2).val();
        if (username == null || username == '') {
            alert('账号/手机号不能为空');
            return false;
        }
        password = checkPassWord(password);
        if (password === false) {
            return false;
        }

        ajaxData = {
            u: username,
            p: password,
            lt: login_type,
            al: auto_login,
            uid: getUuid(),
        };
    } else if (login_type === 'sms_login') {
        var username = $('#' + input1).val();
        var code = $('#' + input2).val();
        if (username == null || username == '') {
            alert('手机号不能为空');
            return false;
        }
        if (code == null || code == '') {
            alert('验证码不能为空');
            return false;
        }
        ajaxData = {
            u: username,
            c: code,
            lt: login_type,
            al: auto_login,
            uid: getUuid(),
        };
    } else {
        return false;
    }

    doLogin(ajaxData);
}

function doLogin(ajaxData) {
    $.ajax({
        type: 'post',
        url: '/user/ajax/login',
        data: ajaxData,
        dataType: 'JSON',
        beforeSend: function (xhr) {
            isLogin = true;
        },
        success: function (res) {
            if (res.code > 0) {
                window.location.reload();
            } else if (res.code == -30) {
                alert(res.msg);
                if ($('#r-dialog').is(":hidden")) {
                    $('#phoneTabMenu').click();
                    $('#gd_forget').click();
                } else {
                    $('#forgotPsw3').click();
                }
            } else {
                alert(res.msg);
            }
            isLogin = false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + '->' + errorThrown);
            isLogin = false;
        }
    });
}

function checkSendCode(phone, type, btn) {
    if (btn == 'phoneSend') {
        if (isWaitingLogin) {
            return false;
        }
    } else if (btn == 'tj-r-btn-send') {
        if (isWaitingLogin2) {
            return false;
        }
    } else if (btn == 'r-sendcode') {
        if (isWaitingReg) {
            return false;
        }
    } else {
        return false;
    }

    sendMsgCode(phone, type, btn);
}

function sendMsgCode(phone, type, btn) {
    if (isWaiting) {
        return false;
    }
    var mobile = $('#' + phone).val();

    if (mobile == null || mobile == '') {
        alert('请先输入手机号！');
        return false;
    }

    $.ajax({
        type: 'post',
        url: '/sms/send',
        data: {m: mobile, t: type},
        dataType: 'JSON',
        beforeSend: function (xhr) {
            isWaiting = true;
        },
        success: function (res) {
            if (res.code > 0) {
                if (btn == 'phoneSend') {
                    isWaitingLogin = true;
                    curTimeSLogin = 60;
                    //首页登录
                    $("#phoneSend").text(curTimeSLogin + "s");
                    $("#phoneSend").removeClass('phone-send-unclick').addClass('phone-send-unclick');
                    InterValObjLogin = window.setInterval(SetRemainTimesLogin, 1000);
                } else if (btn == 'tj-r-btn-send') {
                    isWaitingLogin2 = true;
                    curTimeSlogin2 = 60;
                    //弹窗登录
                    $("#tj-r-btn-send").text(curTimeSlogin2 + "s");
                    InterValObjLogin2 = window.setInterval(SetRemainTimesLogin2, 1000);
                } else if (btn == 'r-sendcode') {
                    isWaitingReg = true;
                    curTimeSReg = 60;
                    //注册
                    $("#r-sendcode").text(curTimeSReg + "s");
                    InterValObjReg = window.setInterval(SetRemainTimesReg, 1000); //启动计时器，1秒执行一次
                }
            } else {
                alert(res.msg);
            }
            isWaiting = false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + '->' + errorThrown);
            isWaiting = false;
        }
    });
}

function certification() {
    if (isLogin) {
        return false;
    }

    var real_name = $('#real-name').val();
    var idcard = $('#idcard').val();

    if (real_name == null || real_name == '') {
        alert('真实姓名不能为空');
        return false;
    }
    if (idcard == null || idcard == '') {
        alert('身份证号不能为空');
        return false;
    }

    $.ajax({
        type: 'post',
        url: '/user/ajax/certification',
        data: {rm: real_name, ic: idcard},
        dataType: 'JSON',
        beforeSend: function (xhr) {
            isLogin = true;
        },
        success: function (res) {
            if (res.code > 0) {
                $('.register-success').show();
                window.location.reload();
            } else {
                alert(res.msg);
            }
            isLogin = false;
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(textStatus + '->' + errorThrown);
            isLogin = false;
        }
    });
}

//timer处理函数
function SetRemainTimesLogin() {
    if (curTimeSLogin == 0) {
        window.clearInterval(InterValObjLogin); //停止计时器
        isWaitingLogin = false;

        $("#phoneSend").text("重发");
        $("#phoneSend").removeClass('phone-send-unclick');
    } else {
        $("#phoneSend").text(curTimeSLogin + "s");
        curTimeSLogin--;
    }
}

function SetRemainTimesLogin2() {
    if (curTimeSlogin2 == 0) {
        window.clearInterval(InterValObjLogin2); //停止计时器
        isWaitingLogin2 = false;
        $("#tj-r-btn-send").text("重发");

    } else {
        $("#tj-r-btn-send").text(curTimeSlogin2 + "s");
        curTimeSlogin2--;
    }
}

function SetRemainTimesReg() {
    if (curTimeSReg == 0) {
        window.clearInterval(InterValObjReg); //停止计时器
        isWaitingReg = false;

        $("#r-sendcode").text("重新发送");
    } else {
        $("#r-sendcode").text(curTimeSReg + "s");
        curTimeSReg--;
    }
}

function checkLogin() {
    var u_user = getCookie('u_user');
    if (u_user == null || u_user == '') {
        if ($('#topToLog').length > 0) {
            $('#topToLog').click();
        } else {
            alert('请先登录');
        }
        return false;
    } else {
        return true;
    }
}