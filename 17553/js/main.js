$(function() {
    $(document).on("click", ".vr_news_tab button", function() {
        var index = $(this).index();
        $(this).addClass('active').siblings('button').removeClass('active');
        $('.vr_news_content .row').eq(index).show().siblings('.row').hide();
    });
});