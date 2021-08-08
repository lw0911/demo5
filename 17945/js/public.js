$(function () {

});
//²Ëµ¥ÇÐ»»
function setMenu(name, conname, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = $("#" + name + i);
        var con = $("#" + conname + i);
        if (i == cursel) {
            if (menu.hasClass("hover")) {
                menu.removeClass("hover");
                con.css("display", "none");
            } else {
                menu.addClass("hover");
                con.css("display", "block");
            }
        } else {
            menu.removeClass("hover");
            con.css("display", "none");
        }
    }
}
//tabÇÐ»»
function setTab(name, conname, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = $("#" + name + i);
        var con = $("#" + conname + i);
        if (i == cursel) {
            menu.addClass("hover");
            con.css("display", "block");
        } else {
            menu.removeClass("hover");
            con.css("display", "none");
        }
    }
}
