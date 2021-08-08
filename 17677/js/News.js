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
function getpic(param) {
    if (param.length > 5) {
        return param;
    }
    else {
        return "../src/images/news_img.jpg"/*tpa=http://XXX/src/images/news_img.jpg*/;
    }
}


Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,                 //月份 
        "d+": this.getDate(),                    //日 
        "h+": this.getHours(),                   //小时 
        "m+": this.getMinutes(),                 //分 
        "s+": this.getSeconds(),                 //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}
function getDateDay(stringTime) {
    var myDate = new Date(stringTime);
    return myDate.getDate();
}
function getDateDate(stringTime) {
    var myDate = new Date(stringTime);
    return new Date(myDate).format("yyyy-MM");
}
//留言板

$(function () {

    $.extend({
        getTag: function () {
            $.getJSON(
                "../inc/getClasslist.ashx"/*tpa=http://XXX/inc/getClasslist.ashx*/,
                {
                    classid: 1
                },
                function (data) {
                    var oul = $("#classid");
                    oul.html("");
                    $.each(data, function (i) {
                        oul.append("<a href='javascript:;' classid='" + data[i].Class_ID + "' rel='classid'>" + data[i].Class_Name + "</a>");
                    });
                }
            );
        },
        getData: function () {
            layer.load(1);
            $.getJSON(
                "http://XXX/inc/GetNewsList.ashx",
                {
                    currentPage: $("#currentPage").text(),
                    classid: $("#ClassID").val(),
                },
                function (json) {
                    //  $("#cases").html("");
                    var jsonLength = 0;
                    $.each(json, function (i) {
                        jsonLength++;
                        $("#newsList").append("<ul class='wow fadeInUp'>"+
    	"<li><a href='http://XXX/Detail/" + json[i].c_id + "' target='_blank'>" +
        	"<div class='date'><strong>" + getDateDay(json[i].c_Posttime) + "</strong><em>" + getDateDate(json[i].c_Posttime) + "</em></div>" +
            "<div class=\"images\"><img src='" +getpic(json[i].c_Titpic) + "' alt=\"news\"></div>"+
"</a>"+
        "</li>"+
        "<li>"+
        	"<a href='http://XXX/Detail/" + json[i].c_id + "' target='_blank'>" +
        	"<h2>" + json[i].c_Title + "</h2>"+
            "<p>" + json[i].c_Otherinfo + "</p>" +
            "</a>"+
        "</li>"+
    "</ul>" );
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
        requestid = "2";
    }
    $("a[rel='classid']").each(function () {
        if ($(this).attr("classid") == requestid) {
            $(this).addClass(" active");
        }
    });
  //  $.getTag();
    $.getData();

    $("a[rel='classid']").live("click", function () {
        $("#ClassID").val($(this).attr("classid"));
        $("#currentPage").text(1);
        $("a[rel='classid']").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("classid active");
        $("#newsList").html("");
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
        var bot = 50; //bot是底部距离的高度
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