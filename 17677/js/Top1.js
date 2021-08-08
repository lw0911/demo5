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
$(function () {

    $.extend({
        GetTop1: function () {
            $.getJSON(
                "../inc/Top1.ashx"/*tpa=http://www.Tiunion.com.cn/inc/Top1.ashx*/,
                {
                    classid: 1
                },
                function (data) {
                    var oul = $("#top1");
                    oul.html("");
                    $.each(data, function (i) {
                        oul.append("<div><span>" + getDateDay(data[i].c_Posttime) + "</span>" + getDateDate(data[i].c_Posttime) + "</div>" +
                "<h3><a href='http://XXX/Detail/" + data[i].c_id + "' target='_blank'>" + data[i].c_Title + "</a></h3>" +
                "<p>" + data[i].c_Keyword + "</p> " +
                "<a class=\"enter\" href='http://XXX/Detail/" + data[i].c_id + "' target='_blank'>more</a>");
                    });
                }
            );
        }
    });
    $.GetTop1();
});