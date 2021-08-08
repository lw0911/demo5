$(function () {
    $.ajax({
        type: 'post',
        dataType:'json',
        url: '/ashx/fcAjax.ashx?actions=MemberIs',
        data: $("#l_submit").serialize(),
        success: function (data) {
            if (data.username == "0") {}
            else {
                $(".dd4").html("<a href=\"/member/" + data.urlname + "\">" + data.username + "</a> |");
                $(".dd3").html("<a href=\"/Exit.aspx\">退出</a>");
            }
        },
        error: function () {  return false; }
    });
    return false;
});