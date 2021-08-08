
//发送邮件
function send_email() {
    
        if (!(/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/).test($("input[name=name]").val().trim())) {
            alert("请输入正确的邮箱");
            $("input[name=name]").focus();
            return false;
        }
        $.get("/ashx/send_email.ashx", { name: $("input[name=name]").val().trim() }, function (data) {
            if (data == "success") {
                var time_ = 60;
                var mytime = window.setInterval(function () {
                    $(".sendemail_").hide();
                    $(".sendemail_fason").show();
                    time_ = time_ - 1;
                    if (time_ >= 0) {
                        $(".sendemail_fason").html("还剩" + time_ + "秒,可重新发送!");
                    }
                    else {
                        clearInterval(mytime);
                        $(".sendemail_fason").html("还剩60秒,可重新发送!");
                        $(".sendemail_").show().html("重新发送");
                        $(".sendemail_fason").hide();
                    }
                },1000)
                ; 
            }
            else
                alert(data);
        })
}
//注册
function register() {
    if (reg_check()) {
        $.get("/ashx/register.ashx", $("#register_form").serialize(), function (data) {
            if (data == "success") {
                alert("注册成功");
                window.location.href = "/login.html";
            }
            else
                alert(data);
        })
    }
}

function reg_check() {
    if ($("input[name=name]").val().trim() == "") {
        alert("请输入用户名");
        $("input[name=name]").focus();
        return false;
    }

    if ($("input[name=pwd]").val().trim() == "") {
        alert("请输入密码");
        $("input[name=pwd]").focus();
        return false;
    }
    if ($("input[name=repwd]").val().trim() == "") {
        alert("请输入确认密码");
        $("input[name=repwd]").focus();
        return false;
    }
    if ($("input[name=pwd]").val().trim() != $("input[name=repwd]").val().trim()) {
        alert("两次输入的密码不一致，请重新输入");
        $("input[name=repwd]").focus();
        return false;
    }
    if ($("input[name=yzm]").val().trim() == "") {
        alert("请输入验证码");
        $("input[name=yzm]").focus();
        return false;
    }

    return true;
}
//验证码
function reloadcode() {
    $(".code_info").attr("src", "/ashx/verify_code.ashx?" + Math.random());
}
//登录
function login() {
    $.get("/ashx/login.ashx", $("#login_form").serialize(), function (data) {
        if (data == "success")
            window.location.href = "/member/index.html";
        else
            alert(data);
    })
}
$(function () {
    //刷新验证码
    $(".code_info").click(function () {
        $(".code_info").attr("src", "/ashx/verify_code.ashx?" + Math.random());
    });
    
    //零售商登录
    $("#l_submit").submit(function () {
        if ($("input[name=lname]").val().trim() == "") {
            alert("请输入用户名");
            $("input[name=lname]").focus();
            return false;
        }
        if ($("input[name=lpwd]").val().trim() == "") {
            alert("请输入密码");
            $("input[name=lpwd]").focus();
            return false;
        }
        if ($("input[name=lcode]").val().trim() == "") {
            alert("请输入验证码");
            $("input[name=lcode]").focus();
            return false;
        }
        $.ajax({
            type: 'post',
            url: '/ashx/fcAjax.ashx?actions=lLogin',
            data: $("#l_submit").serialize(),
            success: function (data) {
                switch (data) {
                    case "0":
                        alert("账号或密码错误");
                        break;
                    case "1":
                        alert("登录成功");
                        location.href = '/member/index.html';
                        break;
                    case "3":
                        alert("验证码错误");
                        break;
                    case "4":
                        alert("请先填写信息");
                        break;
                    default:
                        break;

                }
            },
            error: function () { alert("登录失败"); return false; }
        });
        return false;
    });

    //供应商登录
    $("#g_submit").submit(function () {
        if ($("input[name=gname]").val().trim() == "") {
            alert("请输入用户名");
            $("input[name=lname]").focus();
            return false;
        }
        if ($("input[name=gpwd]").val().trim() == "") {
            alert("请输入密码");
            $("input[name=lpwd]").focus();
            return false;
        }
        if ($("input[name=gcode]").val().trim() == "") {
            alert("请输入验证码");
            $("input[name=gcode]").focus();
            return false;
        }
        $.ajax({
            type: 'post',
            url: '/ashx/fcAjax.ashx?actions=gLogin',
            data: $("#g_submit").serialize(),
            success: function (data) {
                switch (data) {
                    case "0":
                        alert("账号或密码错误");
                        break;
                    case "1":
                        location.href = '/member/center.html';
                        alert("登录成功");
                        break;
                    case "3":
                        alert("验证码错误");
                        break;
                    case "4":
                        alert("请先填写信息");
                        break;
                    default:
                        break;

                }
            },
            error: function () { alert("登录失败"); return false; }
        });
        return false;
    });
   
});