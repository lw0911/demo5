$(document).ready(function () {
    //开服列表
    jQuery(".new-actives").slide({ mainCell: ".tab-bd-in", effect: "left", delayTime: 400, pnLoop: true, easing: "easeOutCubic" });

    //精品游戏
    $("#ppgame dd .pic").hover(function () {
        $(this).find(".X_bg,.pic_txt").stop().delay(50).animate({ "bottom": 0 }, 200);
    },
    function () {
        $(this).find(".X_bg,.pic_txt").stop().animate({ "bottom": -126 }, 200);      
    });
});

function showgame(gametype, tol, num) {
    $('#gamelist li').show();
    for (i = 0; i < $('.game').length; i++) {
        if ($('.game').eq(i).attr('gametype') != gametype) {
            $('.game').eq(i).hide();
        }
    }
    for (var i = 0; i <= tol; i++) {
        document.getElementById('li1-' + i).className = '';
    }
    document.getElementById('li1-' + num).className = 'on';
}
function showfirst(gamename, num) {
    $('.game').show();
    arr = gamename.split(',');
    for (i = 0; i < $('.game').length; i++) {
        if (jQuery.inArray($('.game').eq(i).attr('gamename').substr(0, 1), arr) == "-1") {
            $('.game').eq(i).hide();
        }
    }
    for (var i = 0; i <= 5; i++) {
        document.getElementById('li2-' + i).className = '';
    }
    document.getElementById('li2-' + num).className = 'on';
}
function showallgame(num, tol) {
    $('#gamelist li').show();
    for (var i = 0; i <= tol; i++) {
        document.getElementById('li' + num + '-' + i).className = '';
    }
    document.getElementById('li' + num + '-0').className = 'on';
}

$(function () {
    $(".hot_game li").hover(function () {
        $(this).find(".btn_over").show();
    },
                    function () {
                        $(this).find(".btn_over").hide();
                    });

});