
$(document).ready(function() {

    // nav
    nav();

})

var idx;
var arr_offsetX = [0, 144, 233, 345, 400, 450];

function nav() {

    $(".topNavList a").hover(function() {

        idx = $(".topNavList a").index(this);

        $(".subNavWrapper").show();
        $(".activeLeft").show();
        $(".activeRight").show();

        var offsetXArrow = $(".topNavList a").eq(idx).position().left - 455;
        var w = $(".topNavList a").eq(idx).width() + 22;

        $(".topNavList a").eq(idx).addClass("activeTopNav");
        $(".activeLeft").css("left", offsetXArrow+'px');
        $(".activeRight").css("left", offsetXArrow+w+'px');

        $(".subNavSet div").eq(idx).show();

        if (idx == 0 || idx == 1 || idx == 3 || idx == 5) {
            $(".subNavSet .subNav").eq(idx).find("ul").css("width", "132px");
            $(".subNavSet .features").eq(idx).css("left", "195px");
        } else {
            $(".subNavSet .subNav").eq(idx).find("ul").css("width", "292px");
            $(".subNavSet .features").eq(idx).css("left", "315px");
        };

    }, function() {
        
        $(".subNavWrapper").hide();
        $(".activeLeft").hide();
        $(".activeRight").hide();

        $(".topNavList a").eq(idx).removeClass("activeTopNav");

        $(".subNavSet div").eq(idx).hide();

    })

    $(".subNavSet div").hover(function() {
        $(".subNavWrapper").show();
        $(".topNavList a").eq(idx).addClass("activeTopNav");
        $(".activeLeft").show();
        $(".activeRight").show();
        $(this).show();

    }, function() {
        $(".subNavWrapper").hide();
        $(".activeLeft").hide();
        $(".topNavList a").eq(idx).removeClass("activeTopNav");
        $(".activeRight").hide();
        $(this).hide();

    })

}