$(function () {
    //zoom
    $(window).resize(function () {
        $('[zoom-width][zoom-heigh]:visible').each(function () { $(this).height($(this).width() * parseInt($(this).attr('zoom-heigh')) / parseInt($(this).attr('zoom-width'))); });
    }).resize();
    //end

    //g_content img
    $('.g_content img').each(function () { $(this).width('auto').height('auto'); });
    //end

    //menu
    $('.g_header .main .top_r .daohang .menu,.g_header .main .top_r .nav .close').click(function () {
        var n = $('.g_header .main .top_r .nav');
        n.hasClass('show') ? n.removeClass('show') : n.addClass('show');
        return false;
    });
    //end


    //$('.des .list > li .box').click(function () {
    //	var n = $('.des .list .des_li');
    //	n.hasClass('show') ? n.removeClass('show') : n.addClass('show');
    //	return false;
    //});
    //tool
    $('.g_tool .top').click(function () { $('html,body').animate({ scrollTop: 0 }, 300); return false; });
    //end
});