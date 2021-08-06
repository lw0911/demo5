//导航
$(function () {
    $('.nav li').hover(function () {
        $(this).find('.hide_nav').animate({ 'opacity': '1' }, '500');
    }, function () {
        $(this).find('.hide_nav').animate({ 'opacity': '0' }, '500');
    })

});
