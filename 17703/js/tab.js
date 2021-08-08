$(function () {

    $(".index-showlist a").hover(function () {
        showlistHover($(this));
    });

    var showlistHover = function ($a)
    {
        var $this = $a;
        $(".index-showlist a").attr("class", "");
        $this.attr("class", "index-showactive");
        $(".tab_kc").css("display", "none");
        $(".tab_kc").eq($this.index()).css("display", "block");
    }

    $(".index-list   ul  li .a-list a").click(function () {
        var $this = $(this);
        showlistHover($(".index-showlist a").eq($this.index()));
    })
})
