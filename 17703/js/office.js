/**
 * Created by Administrator on 2016/1/6.
 */
$(function() {
    $(".index-showlist a").each(function(j) {
        var num = j + 1;
        $(this).hover(function() {
            $(".index-showlist a").attr("class", "");
            $(this).attr("class", "index-showactive");
            for (var i = 1; i <= 4; i++) {
                $("#tab_kc" + i).css("display", "none");
            }
            $("#tab_kc" + num).css("display", "block");
        });
    });
})