$(function () {
    $('#phone').val("");
    $('#passWord').val("");
    $("#txtValidNumber").val("");
    $('#messCode').val("");

    $('#phone').blur(function () { BlurTelNo(false); });
    $('#passWord').blur(function () { BlurPwd(false); });
    $('#txtValidNumber').blur(function () { BlurImgCode(); });
    $('#messCode').blur(function () { BlurCode(false); });

    //用bind这种方式，否则unbind不起作用
    $("#btnReg").bind("click", function () { RegSubmit($("#btnReg")); });
    $("#btnSendMsg").bind("click", function () { sendMobileValidSMSCode(); });
});
//获取注册来源
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}

//重新加载验证码
function reloadCode(urlString) {
    $("#imgVcode").attr("src", urlString + "?id=" + Math.random());
}

//校验手机号码
function BlurTelNo(isSubmit) {
    var result = false;
    var td = "#dvPhoneError";
    var phoneNumber = $("#phone").val();
    if ($.trim(phoneNumber) != "" && $.trim(phoneNumber) != "请输入手机号码") {
        if (isMobile(phoneNumber)) {
            $(td).html("");
            result = true;
        }
        else {
            $(td).html("输入手机号码格式不正确");
            result = false;
            //$("#phone").focus();
        }
        return result;
    }
    else {
        if (isSubmit == true) {
            $(td).html("手机号码不能为空");
            //$("#phone").focus();
        }
        else {
            $(td).html("");
            //不是提交注册,置为空
        }
        return false;
    }
}

//校验密码
function BlurPwd(isSubmit) {
    var txt = "#passWord";
    var td = "#dvPwdError";
    var passwordValue = $(txt).val();

    if (passwordValue.indexOf(" ") > -1) {
        $(td).html("密码不允许含有空格");
        //$(txt).focus();
        return false;
    }

    if ($.trim(passwordValue) != "" && $.trim(passwordValue) != "密码由6-16个字符(字母+数字)") {
        if (/^.*?[\d]+.*$/.test(passwordValue) && /^.*?[A-Za-z].*$/.test(passwordValue) && /^.{6,16}$/.test(passwordValue)) {
            $(td).html("");
            return true;
        }
        else {
            $(td).html("密码格式错误，必须为6-16个字符（包含字母+数字）");
            //$(txt).focus();
            return false;
        }
    }
    else {
        if (isSubmit == true) {
            $(td).html("密码不能为空");
            //$(txt).focus();
        }
        else {
            $(td).html("");
            //不是提交注册,置为空
        }

        return false;
    }
}

/*图形验证码验证*/
function BlurImgCode(isGet) {
    var imgCode = $("#txtValidNumber").val();
    if ($.trim(imgCode) == "") {
        if (isGet == true) {
            $("#dvValidNumber").text("图形验证码不能为空");
            $("#dvValidNumber").show();
            //$("#txtValidNumber").focus();
        }
        else {
        }
        return false;
    }
    else {
        //$("#dvValidNumber").hide();
        return true;
    }
}

//检验 手机验证码
function BlurCode(isSubmit) {
    var td = "#dvCodeError";
    var messCode = $("#messCode").val();
    var pat = new RegExp("^[0-9]{6}$", "i");

    if ($.trim(messCode) != "" && $.trim(messCode) != "手机验证码") {
        if (!pat.test(messCode)) {//格式不正确
            $(td).html("验证码错误,请重新输入");
            //$("#messCode").focus();
            return false;
        }
        else {
            $(td).html("");
            return true;
        }
    }
    else {
        if (isSubmit == true) {
            $(td).html("请输入验证码");
            //$("#messCode").focus();
        }
        else {
            $(td).html("");
        }

        return false;
    }
}

/*团贷网注册协议*/
function checkagree() {
    if ($('#agreexieyi').is(':checked')) {
        return true;
    }
    else {
        alert("注册成为团贷网会员，一定要同意团贷网协议");
        $("#agreexieyi").attr("checked", "checked");
        return false;
    }
}

//提交注册
function RegSubmit(ctrl) {
    if (BlurTelNo(true) && BlurPwd(true) && BlurImgCode(true) && BlurCode(true)) {
        $(ctrl).unbind("click");
        var vOldBtnRegText = $("#btnReg").html();
        $("#btnReg").html("正在提交注册信息...");
        //调整注册来源，由原来的from，增加一个tdfrom
        var dec = GetQueryString("tdfrom");

        if (dec == "" || dec == null) {
            dec = GetQueryString("from");
        }
        if (dec == "" || dec == null) {
            dec = GetQueryString("extra");
        }
        if (dec == "" || dec == null || dec == "null") {
            dec = getCookie("tdfrom");
            if (dec == "" || dec == null || dec == "null") {
                dec = "tgPCRegister";
            }
        }
        var regFrom = "";
        if (isFromWps()) {
            regFrom = "wps_" + GetQueryString("extra") + "_" + GetQueryString("userid");
        }
        else {
            regFrom = dec;
        }

        $.ajax({
            async: false,
            url: "/ajaxhander/Register.ashx",
            dataType: "json",
            type: "POST",
            data: {
                Action: "User_Insert_Phone",
                t: $("#phone").val(),
                p: $("#passWord").val(),
                c: $("#messCode").val(),
                f: regFrom,
                e: GetQueryString("extendkey"),
                u: GetQueryString("userid"),
                d: dec
            },
            success: function (returnJsonData) {
                if (returnJsonData.result == 1) {
                    sa.track('RegisterSuccess', { tdfrom: dec, SourceChannel: GetQueryString("tdsource"), PlatformName: "团贷网", PlatformType: 'web' });
                    if (dec != '' && dec.indexOf("bdjj-p") >= 0) {
                        window.location.href = "/web/success/index.aspx?tdfrom=" + dec;
                    } else {
                        window.location.href = "success.aspx?tdfrom=" + dec;
                    }
                }
                else {
                    $("#dvCodeError").html(returnJsonData.message);
                    $("#btnReg").html(vOldBtnRegText);
                    $("#btnReg").bind("click", function () { RegSubmit($("#btnReg")); });
                }

            },
            error: function () {
                $("#btnReg").html(vOldBtnRegText);
                $("#btnReg").bind("click", function () { RegSubmit($("#btnReg")); });
            }
        });
    }
}


var timer = null;
var leftsecond = 60; //倒计时
//获取手机验证码
function sendMobileValidSMSCode() {

    var phoneNumber = $("#phone").val();
    if (phoneNumber == "") {
        $("#dvPhoneError").html("手机号码不能为空");
        $("#dvPhoneError").show();
        //$("#dvPhoneError").focus();
        return;
    }

    if (!BlurImgCode(true)) {
        //$("#txtValidNumber").focus();
        return;
    }

    $("#dvCodeError").html("");
    var validCode = $("#txtValidNumber").val();
    $("#btnSendMsg").unbind();
    if (isMobile(phoneNumber)) {
        $("#btnSendMsg").html("短信发送中...");
        $("#dvPhoneError").html("");
        $.ajax({
            async: false,
            type: 'POST',
            url: "/ajaxhander/SendCode.ashx",
            dataType: "json",
            data: {
                Action: "GetPhoneRegCode",
                t: phoneNumber,
                v: validCode
            },
            success: function (returnJsonData) {
                var result = returnJsonData.result;
                if (returnJsonData.result == "1") {
                    clearInterval(timer);
                    leftsecond = 60;
                    timer = setInterval(setLeftTime, 1000, "1");
                    $("#phone").attr("readonly", true);
                }
                else {
                    switch (result) {
                        case "0":
                        case "-1":
                        case "-2":
                        case "-3":
                        case "-4":
                        case "-5":
                        case "-6":
                            if (result == "-1" || result == "-2") {
                                $("#dvValidNumber").show();
                                $("#dvValidNumber").html(returnJsonData.message);
                            }
                            else {
                                $("#dvCodeError").html(returnJsonData.message);
                            }
                            reloadCode('/ajaxhander/ValidateCode.ashx')
                            $("#btnSendMsg").bind("click", function () {
                                sendMobileValidSMSCode();
                            });
                            $("#phone").removeAttr("readonly");
                            $("#btnSendMsg").html("获取验证码");
                            $("#txtValidNumber").val("");
                            //$("#txtValidNumber").focus();
                            break;
                        case "-7":
                        case "-8":
                            $("#dvPhoneError").html(returnJsonData.message);
                            reloadCode('/ajaxhander/ValidateCode.ashx')
                            $("#btnSendMsg").bind("click", function () {
                                sendMobileValidSMSCode();
                            });
                            $("#phone").removeAttr("readonly");
                            $("#btnSendMsg").html("获取验证码");
                            $("#txtValidNumber").val("");
                            //$("#txtValidNumber").focus();
                            break;
                        case "-180"://未够180秒
                            var seconds = returnJsonData.message.split("_")[1];
                            $("#dvCodeError").html("发送太频繁，请在" + seconds + "秒后可重发");
                            reloadCode('/ajaxhander/ValidateCode.ashx')
                            leftsecond = seconds;
                            clearInterval(timer);
                            timer = setInterval(setLeftTime, 1000, "1");
                            $("#phone").attr("readonly", true);
                            $("#txtValidNumber").val("");
                            //$("#txtValidNumber").focus();
                            break;
                        case "-190":
                            $("#dvCodeError").html("今天发送次数过多,请明天再试");
                            reloadCode('/ajaxhander/ValidateCode.ashx')
                            $("#btnSendMsg").bind("click", function () {
                                sendMobileValidSMSCode();
                            });
                            $("#phone").removeAttr("readonly");
                            $("#btnSendMsg").html("获取验证码");
                            break;
                        default:
                            $("#dvCodeError").html("刷新页面重试");
                            reloadCode('/ajaxhander/ValidateCode.ashx')
                            $("#btnSendMsg").bind("click", function () {
                                sendMobileValidSMSCode();
                            });
                            $("#phone").removeAttr("readonly");
                            $("#btnSendMsg").html("获取验证码");
                            break;
                    }
                }
            },
            error: function () {
                $("#dvCodeError").html("刷新页面重试");
                reloadCode('/ajaxhander/ValidateCode.ashx')
                $("#btnSendMsg").bind("click", function () {
                    sendMobileValidSMSCode();
                });
                $("#phone").removeAttr("readonly");
                $("#btnSendMsg").html("获取验证码");
            }
        });
    }
    else {
        $("#btnSendMsg").bind("click", function () {
            sendMobileValidSMSCode();
        });
    }
}

function setLeftTime() {
    var second = Math.floor(leftsecond);
    $("#btnSendMsg").html(second + "秒后可重发");
    leftsecond--;
    if (leftsecond < 1) {
        $("#btnSendMsg").html("获取验证码");
        clearInterval(timer);
        leftsecond = 60;
        try {
            $("#btnSendMsg").bind("click", function () { sendMobileValidSMSCode(); });
            $("#phone").removeAttr("readonly");
        } catch (E) { }
        return;
    }
}

//判断是否从wps来的
function isFromWps() {
    var userId = GetQueryString("userid");
    if (userId == null || userId == "") {
        return false;
    }
    var tdFrom = GetQueryString("extra");
    if (tdFrom == null || tdFrom == "") {
        return false;
    }
    if (tdFrom.indexOf("H95BCwDvM") <= -1) {
        return false;
    }
    return true;
}