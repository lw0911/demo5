function getParameter(param) {
    var query = window.location.search;
    var iLen = param.length;
    var iStart = query.indexOf(param);
    if (iStart == -1)
        return "";
    iStart += iLen + 1;
    var iEnd = query.indexOf("&", iStart);
    if (iEnd == -1)
        return query.substring(iStart);
    return query.substring(iStart, iEnd);
}
function GetViewPage(cid,param) {
    if (param == "2" || param == "3"|| param == "5") {
        return "Preview_Mob/" + cid;
    }
    else {
        return "Preview_PC/" + cid;
    }
}
$(function () {

    $.extend({
        getTag: function () {
            $.getJSON(
                "../inc/gettag.ashx"/*tpa=http://XXX/inc/gettag.ashx*/,
                {
                    classid: $("#ClassID").val(),
                    tag: $("#Tag").val()
                },
                function (data) {
                    var oul = $("#classtag");
                    oul.html("");
                    oul.append("<a href='javascript:;' class='active'  tagid='0' rel='tagid' >所有标签</a> ");
                    $.each(data, function (i) {
                        oul.append("<a href='javascript:;' tagid='" + data[i].id + "' rel='tagid'>" + data[i].Tag_Name + "</a>");
                    });
                }
            );
        },
        getData: function () {
            layer.load(1);
            $.getJSON(
                "http://XXX/inc/GetCase.ashx",
                {
                    currentPage: $("#currentPage").text(),
                    classid: $("#ClassID").val(),
                    tag: $("#Tag").val()
                },
                function (json) {
                    //  $("#cases").html("");
                    var jsonLength = 0;
                    $.each(json, function (i) {
                        jsonLength++;
                        $("#cases").append(
                            "<li class='wow fadeInUp'>"
+ "<a href='http://XXX/" + GetViewPage(json[i].c_id, json[i].c_Parentid) + "'  target='_blank'>"
+ "<figcaption><p><strong>VIEW</strong>DETAIL</p></figcaption>"
+ "<img onerror=\"'this.src='../src/images/case_img_3.jpg'/*tpa=http://XXX/src/images/case_img_3.jpg*/\"  src='" + json[i].c_Titpic + "'  alt='case'>"
+ "</a>"
+ "<h2>" + json[i].c_Title + "</h2>"
+ "<p>" + json[i].c_Keyword + "</p>"
+ "</li>"
                         );
                    });
                    if (jsonLength == 0) {
                        //  $("#cases").append("<li class='wow fadeInUp'>已经是最后一页没有数据</li>");
                        layer.msg('已经是最后一页没有数据');
                    }
                }
            );
            layer.closeAll('loading');
        }, //.Net JSON序列化 DateTime => /Date(568051200000+0800)/ 此处将 /Date(568051200000+0800)/ => "yyyy-mm-dd"形式
        changeType: function (dt) {
            var msdateRe = /\/Date\((\d+)((\+|\-)\d+)?\)\//;
            if (dt == undefined || dt == null) {
                return null;
            }
            if (dt.substring(0, 1) == '/') {
                if (dt.match(msdateRe).length > 1) {
                    var birthday = new Date(parseInt(dt.replace(msdateRe, '$1')));
                    return birthday.getFullYear() + "-"
                            + (birthday.getMonth() + 1) + "-" + birthday.getDate();
                }
                return Date.parse(dt);
            }
        }
    });
    //初始化信息
    var requestid = getParameter("classid");
    if (requestid.length > 0) {
        $("#ClassID").val(requestid);//classid active
    }
    else {
        requestid = "0";
    }
    $("a[rel='classid']").each(function () {
        if ($(this).attr("classid") == requestid) {
            $(this).addClass("classid active");
        }
        else {
            $(this).removeClass("active");
        }
    });
    $.getTag();
    $.getData();

    $("a[rel='classid']").click(function () {
        $("#currentPage").text(1);
        $("#cases").html("");
        $("#ClassID").val($(this).attr("classid"));
        $.getData();
    });

    $("a[rel='tagid']").live("click", function () {
        $("#Tag").val($(this).attr("tagid"));
        $("#currentPage").text(1);
        $("a[rel='tagid']").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("classid active");
        $("#cases").html("");
        $.getData();
    });
    //首页
    $("#firstPage").click(function () {
        $("#currentPage").text(1);
        $.getData();
    });

    //上一页
    $("#prePage").click(function () {
        var prePaged = parseInt($("#currentPage").text()) - 1;
        $("#currentPage").text(prePaged <= 1 ? 1 : prePaged);
        $.getData();
    });

    //下一页
    $("#nextPage").click(function () {
        var nextPaged = parseInt($("#currentPage").text()) + 1;
        var sumPage = parseInt($("#countPage").text());
        $("#currentPage").text(nextPaged >= sumPage ? sumPage : nextPaged);
        $.getData();
    });
     var tur = true;
     function ReLoad() {
      
         //$(window).scrollTop()这个方法是当前滚动条滚动的距离
         //$(window).height()获取当前窗体的高度
         //$(document).height()获取当前文档的高度
         var bot = 350; //bot是底部距离的高度
         if ((bot + $(window).scrollTop()) >= ($(document).height() - $(window).height())) {
             //当底部基本距离+滚动的高度〉=文档的高度-窗体的高度时；
             //我们需要去异步加载数据了
             layer.load(1);
             setTimeout(function () {
                 layer.closeAll('loading');
             }, 500);
             var nextPaged = parseInt($("#currentPage").text()) + 1;
             var sumPage = parseInt($("#countPage").text());
             $("#currentPage").text(nextPaged >= sumPage ? sumPage : nextPaged);
             $.getData();
         }
         tur = true;
     }
    $(window).scroll(function () {
        if (tur) {
            setTimeout(ReLoad, 500); tur = false;
        } else { }
    });
});