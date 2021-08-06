$(function () {
    $('#yanz').click(function () {
        $('#fo_dlg_qgame_1,#fo_ovl_qgame_1,#gmshow').show();
    })
    $('.gm_close').click(function () {
        $('#fo_dlg_qgame_1,#fo_ovl_qgame_1').hide();
    })
    $(".bn2").click(function () {
        $('.qqsearch').show();
        $('.qqresult').hide();
        $('.qqno').hide();
        $('.qqyes').hide();
    })

    var gmarr = ['2852506281', '2852506282', '2852506283', '2852506284', '2852377900', '2852377901', '2852377902','3276882360','2486634061','1258866406','2272617285','2478499726','2484381892','3359164045','3366249611'];
    $('#togm').click(function () {
        var _gm = $('#s_qq').val();
        var res = $.inArray(_gm, gmarr);
        if (res == -1) {
            $('.qqsearch').hide();
            $('.qqresult').show();
            $('.qqno').show();
            $('.qqyes').hide();
        } else {
            $('.qqsearch').hide();
            $('.qqresult').show();
            $('.qqyes').show();
            $('.qqno').hide();
        }

    })


    $('.name').click(function () {
        $(this).siblings('div').removeClass('aniHide').addClass('aniBlow').fadeIn();
    })
    $('.t-title span').click(function () {
        $(this).parent().parent().removeClass('aniBlow').addClass('aniHide').fadeOut();
    })




})