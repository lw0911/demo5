$(function () {
    $("#feedback").submit(function () {
        if (typeof Feedback == "undefined") {
            $.getScript("/ajax/Feedback.ashx", function () {
                var model = {};
                model = getModel();
                if (!model)
                    return false;
                Feedback.Add(model, function (res) {
                    if (res && res.value) {
                        layer.msg("提交成功");
                        $("#reset").click();
                        return false;
                    }
                    layer.msg("提交失败");
                    return false;
                })
            })
        }
        else {
            var model = {};
            model = getModel();
            if (!model)
                return false;
            Feedback.Add(model, function (res) {
                if (res && res.value) {
                    layer.msg("提交成功");
                    $("#reset").click();
                    return false;
                }
                layer.msg("提交失败");
                return false;
            })
        }
        return false;
    })
    
})
function getModel() {
    var model = {};
    model.ClassId = 40;
    model.Ver = "cn";
    model.IsLock = 0;
    model.Title = $("#name").val();
    model.Name = model.Title;
    model.Phone = $("#phone").val();
    model.Email = $("#email").val();
    model.Address = $("#address").val();
    model.Content = $("#content").val();
    if (model.Name == "") {
        layer.msg("请输入您的称呼");
        return false;
    }
    //if (model.Phone == "") {
    //    layer.msg("请输入您的电话");
    //    return false;
    //}
    //if (!checkPhone(model.Phone)) {
    //    layer.msg("输入的电话格式不正确");
    //    return false;
    //}
    if (model.Email == "") {
        layer.msg("请输入您的Email");
        return false;
    }
    if (!checkEmail(model.Email)) {
        layer.msg("输入的Email格式不正确");
        return false;
    }
    //if (model.Address == "") {
    //    layer.msg("请输入您的地址");
    //    return false;
    //}
    if (model.Content == "") {
        layer.msg("请输入留言内容");
        return false;
    }
    return model;
}
//验证手机号
function checkPhone(strPhone) {
    if (typeof strPhone == "undefined")
        return false;
    var telReg = !!strPhone.match(/^(0|86|17951)?(13[0-9]|15[012356789]|17[0678]|18[0-9]|14[57])[0-9]{8}$/);
    //如果手机号码不能通过验证
    if (telReg == false) {
        return false;
    }
    else
        return true;

}
//验证邮箱
function checkEmail(str) {
    var re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/
    if (re.test(str)) {
        return true;
    } else {
        return false;
    }
}