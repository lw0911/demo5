/**
 * Created by Administrator on 15-6-2.
 */
$(document).ready(function() {
    $('.flexslider').flexslider({
        directionNav: true,
        pauseOnAction: false
    });
    $('.flex-direction-nav').hide();
    $('.flexslider').mouseover(function(){
        $('.flex-direction-nav').show();
    });
    $('.flexslider').mouseout(function(){
        $('.flex-direction-nav').hide();
    });

});