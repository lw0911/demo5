/**
 * Created by 曾荣 on 2016/9/25.
 */

var artElement = "<div class='col-lg-4 col-md-3 col-sm-4'>" +
                    "<a href=''><img src='images/1.png' title='' alt=''></a>" +
                    "<div class='art-info'>"+
                        "<h4><a href=''>OrgChart组织架构图控件</a></h4>" +
                        "<small>jQuery OrgChart 是一个用来绘制组织结构图的 jQuery 插件。 可以自己定加载自己想要的组织架构，通过json的形式</small>" +
                    "</div>" +
                    "<div class='art-fields'>" +
                        "<i class='fa fa-list-ul'></i>&nbsp;<span>jQuery插件</span>" +
                    "</div>" +
                    "<div class='art-stars'>" +
                        "<i class='fa fa-eye'></i> <span class='eye'>&nbsp;105</span>" +
                        "<i class='fa fa-heart'></i> <span class='star'>&nbsp;105</span> " +
                        "<div class='art-author'>" +
                            "<a href='' data-toggle='tooltip' data-placement='top' data-original-title='笨笨熊喜欢吃饼干' data-container='#article'><i class='fa fa-user-secret'></i> </a>" +
                        "</div>" +
                    "</div>" +
                 "</div>";



$('#view-more').click(function (){
    $(this).html('加载中...');
    // $(this).attr('disabled', true);
    for(var i = 0; i < 2; i++){
        $('#art').append(artElement);
    }
});





