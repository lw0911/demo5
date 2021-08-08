
$(document).ready(function () {
    LunBo1();
    LunBo2();
});
//bannerÂÖ²¥Í¼
function LunBo1() {
    var slideA = slide($("#side"), 5000);
    setTimeout(slideA, 2000);
    function slide(Mobj, s) {//»ÃµÆÆ¬
        var n = 0;
        var obj = Mobj.find(".m").children("li");
        var select_obj;
        var leng = obj.length - 1;
        var intA;
        var curClass = "cur";

        childrenLi()
        obj.css({ display: "none" });
        obj.eq(n).fadeIn("slow");
        select_obj.eq(n).addClass(curClass);
        select_obj.mouseover(function () {
            var i = n;
            //alert(n);
            n = $(this).index();
            select_obj.eq(i).removeClass(curClass);
            select_obj.eq(n).addClass(curClass);
            obj.eq(i).fadeOut("slow");
            obj.eq(n).fadeIn("slow");
        });
        function childrenLi() {
            var str = '<li class="cur">1</li>';
            for (i = 2; i <= Mobj.find(".m").children("li").length; i++) {
                str += '<li>' + i + '</li>'
            }
            Mobj.find(".s").html(str);
            select_obj = Mobj.find(".s").children("li");

        }
        function slide_main() {
            if (n < leng) {
                select_obj.eq(n).removeClass(curClass);
                obj.eq(n).fadeOut("slow");
                n = n + 1;
                select_obj.eq(n).addClass(curClass);
                obj.eq(n).fadeIn("slow");
            }
            else {
                select_obj.eq(n).removeClass(curClass);
                obj.eq(n).fadeOut("slow");
                n = 0;
                select_obj.eq(n).addClass(curClass);
                obj.eq(n).fadeIn("slow");
            }
        }
        function setI() { clearInterval(intA); intA = setInterval(slide_main, s) }
        Mobj.hover(function () { clearInterval(intA); }, function () { clearInterval(intA); intA = setInterval(slide_main, s); })
        return setI;
    };
}
function LunBo2() {
    var slideA = slide($("#side2"), 5000);
    setTimeout(slideA, 2000);
    function slide(Mobj, s) {//»ÃµÆÆ¬
        var n = 0;
        var obj = Mobj.find(".m2").children("li");
        var select_obj;
        var leng = obj.length - 1;
        var intA;
        var curClass = "cur";

        childrenLi()
        obj.css({ display: "none" });
        obj.eq(n).fadeIn("slow");
        select_obj.eq(n).addClass(curClass);
        select_obj.mouseover(function () {
            var i = n;
            //alert(n);
            n = $(this).index();
            select_obj.eq(i).removeClass(curClass);
            select_obj.eq(n).addClass(curClass);
            obj.eq(i).fadeOut("slow");
            obj.eq(n).fadeIn("slow");
        });
        function childrenLi() {
            var str = '<li class="cur">1</li>';
            for (i = 2; i <= Mobj.find(".m2").children("li").length; i++) {
                str += '<li>' + i + '</li>'
            }
            Mobj.find(".s").html(str);
            select_obj = Mobj.find(".s2").children("li");

        }
        function slide_main() {
            if (n < leng) {
                select_obj.eq(n).removeClass(curClass);
                obj.eq(n).fadeOut("slow");
                n = n + 1;
                select_obj.eq(n).addClass(curClass);
                obj.eq(n).fadeIn("slow");
            }
            else {
                select_obj.eq(n).removeClass(curClass);
                obj.eq(n).fadeOut("slow");
                n = 0;
                select_obj.eq(n).addClass(curClass);
                obj.eq(n).fadeIn("slow");
            }
        }
        function setI() { clearInterval(intA); intA = setInterval(slide_main, s) }
        Mobj.hover(function () { clearInterval(intA); }, function () { clearInterval(intA); intA = setInterval(slide_main, s); })
        return setI;
    };
}