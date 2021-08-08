$(document).ready(function () {
    //点击头像显示设置
    $(".my-select").hover(function () {
        $(this).addClass("current");
    }, function () {
        $(this).removeClass("current");
    });
    //左边菜单滚动效果
    $('#divScroll').on('scroll', function () {
        $(".nano-slider").css("transform", "translate(0px, " + $('#divScroll').scrollTop() + "px)");
    });
    //折叠展开左侧一级菜单
    $("#navbutton-collapsed").click(function () {
        if ($("html").hasClass("left-sidebar-collapsed")) {
            $("html").removeClass("left-sidebar-collapsed");
            $("#navbutton-collapsed .glyphicon").removeClass("glyphicon-step-forward");
            $("#navbutton-collapsed .glyphicon").addClass("glyphicon-step-backward");
        } else {
            $("html").addClass("left-sidebar-collapsed");
            $("#navbutton-collapsed .glyphicon").addClass("glyphicon-step-forward");
            $("#navbutton-collapsed .glyphicon").removeClass("glyphicon-step-backward");
        }
    });
    //折叠展开左侧二级菜单
    $("#icon-zk-collapsed").click(function () {
        if ($("html").hasClass("left-sidebar-collapsed-two")) {
            $("html").removeClass("left-sidebar-collapsed-two");
        } else {
            $("html").addClass("left-sidebar-collapsed-two");
        }
    });
    //点击二级菜单显示样式
    $(".user_tab ul a").each(function () {
        $(this).click(function () {
            $(".user_tab li").removeClass("tab_onclick");
            $(this).children("li").addClass("tab_onclick");

            var iframeurl = $(this).attr("iframeurl");
            $("#framecon").attr("src", iframeurl);
        });
    });
    //右侧菜单导航
    $(".right-sidebar-toggle").click(function () {
        if ($("html").hasClass("right-sidebar-collapsed")) {
            $("html").removeClass("right-sidebar-collapsed");
            //$("html").removeClass("left-sidebar-collapsed");
        } else {
            $("html").addClass("right-sidebar-collapsed");
            $("html").addClass("left-sidebar-collapsed");
        }
    });


    //隐藏没有二级菜单的箭头(main)
    $(".arrimg").each(function () {

        if ($("#s_" + this.id.substr(4)).html() == "") {
            $(this).hide();
        }

        $("#xs_" + this.id.substr(4)).find(".arrimg").hide();
        //, function () {
        //    $("#s_" + this.id.substr(3)).show();
        //    $(this)[0].src = "images/arrowup.png";
        //}
        $(this).click(function () {
            if (!$(this).hasClass("ud")) {
                $(this).addClass("ud");
                $("#s_" + this.id.substr(4)).hide();
                $("#xs_" + this.id.substr(4)).hide();
                $(this)[0].src = "images/arrowdown.png";
            } else {
                $(this).removeClass("ud");
                $("#s_" + this.id.substr(4)).show();
                $("#xs_" + this.id.substr(4)).show();
                $(this)[0].src = "images/arrowup.png";
            }
        });
    });

    //发布时间
    $("input[name='fbtime']").each(function () {
        var date = new Date();
        var seperator1 = "-";
        var seperator2 = ":";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
                + " " + date.getHours() + seperator2 + date.getMinutes()
                + seperator2 + date.getSeconds();
        $(this).val(currentdate);
    });

    //修改密码事件
    $(".divPersonalInfo").click(function () {
        //一级菜单样式
        $(".nav-ul li").removeClass("active");
        $(".nav-ul .nav-li-3").addClass("active");
        //二级菜单样式:左侧
        $(".user_tab_left").removeClass("user_tab_left_show");
        $("#user_tab_left_3").addClass("user_tab_left_show");
        $("html").removeClass("left-sidebar-collapsed-two");
        ////二级菜单样式:右侧
        //$(".user_tab_right").removeClass("user_tab_right_show");
        //$("#user_tab_right_" + id + "").addClass("user_tab_right_show");

        //二级菜单默认显示第一个页面
        $("#user_tab_left_3").find("li").eq(2).addClass("tab_onclick");
        var iframeurl = $("#user_tab_left_3").find("a").attr("iframeurl");

        $("#framecon").attr("src", iframeurl);
    })

});
//点击一级菜单显示对应的二级菜单
function ClickShow(id) {
    //一级菜单样式
    $(".nav-ul li").removeClass("active");
    $(".nav-ul .nav-li-" + id + "").addClass("active");
    //二级菜单样式:左侧
    $(".user_tab_left").removeClass("user_tab_left_show");
    $("#user_tab_left_" + id + "").addClass("user_tab_left_show");
    $("html").removeClass("left-sidebar-collapsed-two");
    ////二级菜单样式:右侧
    //$(".user_tab_right").removeClass("user_tab_right_show");
    //$("#user_tab_right_" + id + "").addClass("user_tab_right_show");

    //二级菜单默认显示第一个页面
    $("#user_tab_left_" + id + "").find("li").eq(0).addClass("tab_onclick");
    var iframeurl = $("#user_tab_left_" + id + "").find("a").attr("iframeurl");

    $("#framecon").attr("src", iframeurl);
}

//控制iframe的高度
function SetIframeHeight(obj) {
    $(obj).contents().find("body").css("position", "relative"); //解决body元素有absolute绝对定位导致取不到body的高度
    setTimeout(function () {
        try {
            var mainheight = $(obj).get(0).contentWindow.document.body.scrollHeight;//网页正文全文高度
            $(obj).height(mainheight + 10);//在原来正文的基础上再加30px
        }
        catch (e) {
        }
    }, 500);
    setTimeout(function () {
        try {
            var mainheight = $(obj).get(0).contentWindow.document.body.scrollHeight;//网页正文全文高度
            $(obj).height(mainheight + 10);//在原来正文的基础上再加30px
        }
        catch (e) {
        }
    }, 1000);
}

//新增管理员账号页面选择账号类型
function ChangeAccount(obj) {
    if ($(obj).val() == 1) {
        $("#selAll").attr("checked", "checked");
        $("#addAcctablezone .list .authcheckbox").attr("checked", "checked");
		$("#addAcctablezone .list").hide();
		$("#addAcctablezone .listAll").show();
    } else {
        $("#selAll").removeAttr("checked");
        $("#addAcctablezone .list .authcheckbox").removeAttr("checked");
		$("#addAcctablezone .list").show();
		$("#addAcctablezone .listAll").hide();
    }
}
//新增管理员账号页面选择账号类型
function ChangeNav(obj,id) {
    if ($(obj).val() == 0) {
        $(".caozuo #folder_selcoltype_"+id+"").attr("disabled", "disabled");
		$(".caozuo #folder_selcoltype_"+id+"").val("");
    } else {
        $(".caozuo #folder_selcoltype_"+id+"").removeAttr("disabled");
		$(".caozuo #folder_selcoltype_"+id+"").val("");
    }
}
//弹出窗口
function MyWindowOpenSmallPage(url, width, height, name) {
    OpenDialogUrl(url, name, width, height, 1);
}


