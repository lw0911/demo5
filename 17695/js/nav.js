/**
 * Created by Administrator on 15-6-13.
 */
$(function(){
    $('.nav-width ul li').hover(function() {
        $('ul:first',this).css({
            visibility: 'visible'
        });
    }, function() {
        $('ul:first',this).css({
            visibility: 'hidden'
        });
    });
    $('.nav-width ul li ul li:has(ul)').find('a:first').append(' >');
})