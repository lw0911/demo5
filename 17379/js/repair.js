
function Submit() {
    var proNo = $("#ddlProNo").val();
    var buyTime = $("#txtBuyTime").val();
    var content = $("#txtContent").val();
    var name = $("#txtName").val();
    var phone = $("#txtPhone").val();
    var province = $("#drp_Province").val();
    var city = $("#drp_City").val();
    var area = $("#drp_Area").val();
    var adress = $("#txtAddress").val();

    var reProNo = fcSelectNull(proNo, "产品型号", "ReProNo");
    var reBuyTime = fcNull(buyTime, "购买时间", "ReBuyTime");
    var reContent = fcNull(content, "故障描述", "ReContent");
    var reName = fcRealName(name,   "ReName");
    var rePhone = fcMobile(phone,   "RePhone");
    var reProvince = fcSelectNull(province, "省份", "ReProvince");
    var reCity = fcSelectNull(city, "城市", "ReCity");
    //var reArea = fcSelectNull(area, "城市", "ReArea");
    var reAdress = fcAdressNull(adress, "详细地址", "ReAdress");

    if (reProNo && reBuyTime && reContent && reName && rePhone && reProvince && reCity   && reAdress) {
        $.post("/ashx/Area.ashx", { action: "addLeaveWord", proNo: proNo, buyTime: buyTime, content: content, name: name, phone: phone, province: province, city: city,   adress: adress, rd: Math.random(1) }, function (data) {
            if (data.error == 0) {
                alert("您提交成功，等待我们的答复！")
                location.href = "repair.aspx";
            } else {
                alert(data.errormsg);
            }
        }, "json");
        return false;
    } else {
        return false;
    }
    return false;
}
function bindCity() {
    $.ajax({
        type: "POST",
        url: "/ashx/Area.ashx",
        data: { "action": "City", "Provinceid": $("#drp_Province").val() },
        async: false,
        error: function (request) {
            alert("异常");
        },
        success: function (data) {
            $("#drp_City").html(data);
        }
    });
}
function bindArea() {
    $.ajax({
        type: "POST",
        url: "/ashx/Area.ashx",
        data: { "action": "District", "Cityid": $("#drp_City").val() },
        async: false,
        error: function (request) {
            alert("异常");
        },
        success: function (data) {
            $("#drp_Area").html(data);
        }
    });
}
function fcNull(_ac, txt, re) {
    if (_ac == "") {
        $("#" + re).html("必填");
        //$("#" + re).html(txt + "不能为空！");
        return false;
    } else {
        $("#" + re).html("");
        return true;
    }
}
function fcAdressNull(_ac, txt, re) {
    if (_ac == "" || _ac == "详细地址") {
        $("#" + re).html("必填");
       // $("#" + re).html(txt + "不能为空！");
        return false;
    } else {
        $("#" + re).html("");
        return true;
    }
}
function fcSelectNull(_ac, txt, re) {
    if (_ac == "-1") {
        $("#" + re).html("必填");
       // $("#" + re).html(txt + "不能为空！");
        return false;
    } else {
        $("#" + re).html("");
        return true;
    }
}
function fcRealName(_Name, acName) {
    if (_Name == "") {
        $("#ReName").html("必填");
       // $("#ReName").html("姓名不能为空！");
        return false;
    } else if (!FormatRealName(_Name)) {
        // $("#ReName").html("姓名由2-5个汉字或字母或数字组成！");
        $("#ReName").html("姓名由2-5个字符组成");
        return false;
    } else {
        $("#ReName").html("");
        return true;
    }
}
function fcMobile(_Mobile, acName) {
    if (_Mobile == "") {
        $("#RePhone").html("必填");
       // $("#RePhone").html("手机号码不能为空！");
        return false;
    } else if (!FormatMobile(_Mobile)) {
        $("#RePhone").html("格式不正确");
        return false;
    } else {
        $("#RePhone").html("");
        return true;
    }
}
function FormatMobile(mobile) {
    if (mobile.length != 11) {
        return false;
    }
    var patten = /^1[3|4|5|8][0-9]\d{4,8}$/;
    return patten.test(mobile);
}
function FormatRealName(Names) {
    if (Names.length < 2 || Names.length > 5) {
        return false;
    }
    var patten = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/; ///[\W]/g;
    return patten.test(Names);
}