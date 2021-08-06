var curpage = 1;
; (function (jQuery) {
    jQuery.fn.LoadMore = function (opt) {
        var curpage = opt.curpage;
        console.log(curpage);
        var totalpage = opt.totalpage;
        var con = opt.con;
        var url = opt.url;
        if (totalpage == "undefined")
            totalpage = 0;
        //this.css("background", "#ffaa00");

        if (1 >= totalpage)
            this.hide();
        else {
            this.wrap("<div id='page'></div>");
            $.getScript("/js/laypage/laypage.js", function () {
                laypage({
                    cont: $('#page'), //容器。值支持id名、原生dom对象，jquery对象,
                    pages: totalpage, //总页数
                    skip: false, //是否开启跳页
                    curr: curpage,
                    skin: '#2eb04b',
                    formatUrl: url,
                    groups: 10 //连续显示分页数
                });
            });
            return this;
            this.click(function () {
                curpage += 1;
                if (curpage > totalpage) {
                    this.hide();
                } else {
                    $.ajax({
                        url: url.replace("{page}", "_page_" + curpage),
                        success: function (res) {
                            $(con).append($(res).find(count).children());
                        }
                    });
                }
            });
        }
    }
    jQuery.fn.LoadMoreAjax = function (opt) {
        var totalpage = opt.totalpage;
        var con = opt.con;
        var url = opt.url;
        if (totalpage == "undefined")
            totalpage = 0;
        var this_ = this;
        //this.css("background", "#ffaa00");
        if (curpage >= totalpage)
            this_.hide();
        else {
            this_.click(function () {
                curpage += 1;
                if (curpage >= totalpage) {
                    this_.hide();
                } else
                    this_.show();
                if (typeof opt.fun != "undefined" && opt.fun != null && $(".keywords").val() != "") {
                    var fun = eval(opt.fun);
                    new fun(curpage);
                    return false;
                }
                {
                    $.ajax({
                        url: url.replace("{page}", "_page_" + curpage),
                        success: function (res) {
                            finished = true;
                            $(con).append($(res).find(con).children());
                            try{
                                var fun = eval(opt.afterfun);
                                new fun();
                            }catch(e){}
                        }
                    });
                }
            });
        }
    }
})(jQuery);