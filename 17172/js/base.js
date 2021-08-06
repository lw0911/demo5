

$(function () {
    resizeAll();
    //$("#imgShopTip").css("left", $('#globalnav').offset().left + 442);
   // $("#globalheader").css("opacity", "0.9");
    window.onresize = function () {
        resizeAll();
    };

    $(".productImg").hover(function () {

        $(this).css("opacity", "0.90");

    }, function () {
        $(this).css("opacity", "1.0");
    });

    $(".productDetail").hover(function () {
        //alert("123");
        $(this).children(".productIntro").stop();
        $(this).children(".productIntro").animate({ top: "-10px" }, 150);

    }, function () {
        $(this).children(".productIntro").stop();
        $(this).children(".productIntro").animate({ top: "0px" }, 150);

    });


    $("#productDH tr td a img").hover(function () {

        var newHtml = $(this).attr("src").replace("png", "gif");
        $(this).attr("src", newHtml);

    }, function () {
        var newHtml = $(this).attr("src").replace("gif", "png");
        $(this).attr("src", newHtml);

    });

    $("#globalnav li:eq(1)").hover(function () {
        menuCheck.listHover();
        setTimeout(menuCheck.listCheck, 500);
        //onList = true;
        // if ($("#globalproductList").css("display") == "none") {
        //     $("#globalproductList").slideDown(300);
        // }
    }, function () {
        menuCheck.listOut();
        setTimeout(menuCheck.listCheck, 500);
        //onList = false;
        //setTimeout(checkList, 300);
    });

    $("#globalproductList").hover(function () {
        menuCheck.listHover();
        setTimeout(menuCheck.listCheck, 500);
    }, function () {
        menuCheck.listOut();
        setTimeout(menuCheck.listCheck, 500);
    });

});

function checkList() {
	//alert(onList);
	if(!onList)
	{
		$("#globalproductList").slideUp(300);
	}
}

function resizeAll() {
    //alert(document.documentElement.clientWidth);
	var moreWidth = "-"+(1920-document.documentElement.clientWidth)/2+"px";
	

	
}