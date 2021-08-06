var GameStart = function() {
    $("#Game").html('<div class="commentary-title"><div class="title">玩家评论<a href="javascript:;" class="more">更多(<em class="comment_count">0</em>)</a></div></div><ul class="commentary-content" id="reviewsList"></ul><div class="game-box"><a href="http://app.3733.com" target="_blank">下载3733游戏盒，参与更多精彩评论(<em class="comment_count"></em>条)</a></div>');
    nextPage();

};
function nextPage(e) {
    var h = $("#Game #reviewsList");
    e = $("#Game").attr("data-id");
    var k = void 0 === e ? window.location.pathname: e;
    $.ajax({
        url: hostUrl + "/api_comment/index.html?mark_title=" + k + "&page=" + e,
        data: {},
        type: "POST",
        dataType: "jsonp",
        jsonp: "callbackparam",
        success: function(a) {
            var e = a.data;
            var offcial_class;
            if (1 == a.code) {
                a = "";
                var flag = true;
                for (var c = e.data, m = c.length, b = 0; b < m; b++) {
                    if (c[b].username == '游戏指引_GameFAQ') {
                        offcial_class = 'official';
                    } else {
                        offcial_class = '';
                    }
                    // 判断是否有聊天图片
                    var comment_imgs = '';
                    if ("" != c[b].image_url_arr) {
                        for (var f = 0; f < c[b].image_url_arr.length; f++) {
                            comment_imgs += '<img class="small-img" src="' + c[b].image_url_arr[f] + '"  alt="">';
                        }
                    }

                    // 判断是否有回复
                    var comment_reply = '';
                    if (0 !== c[b].childData.length) {
                        if (flag) {
                            flag = false;
                        }
                        for (var f = c[b].childData.length, d = 0; d < f; d++) {
                            comment_reply += `<li class="children-container">
                                                <div class="children-icon">
                                                    <img src="${c[b].childData[d].avatar}" alt="">
                                                </div>
                                                <div class="children-detail">
                                                    <div class="children-name">${c[b].childData[d].atName}</div>
                                                    <div class="children-bodyer">${c[b].childData[d].content}</div>
                                                </div>
                                            </li>`;
                        }
                    }
                    a += `<li class="commentary-container" id="floor_${c[b].floor_count}">
                            <div class="head-icon">
                                <img src="${c[b].avatar}" alt="">
                            </div>
                            <div class="commentary-detail">
                                <div class="commentary-header">
                                    <span class="username">${c[b].username}</span>
                                    <span class="date"></span>
                                </div>
                                <div class="commentary-score">
                                    <span class="star"></span>
                                    <span class="number">${c[b].floor_count}楼</span>
                                </div>
                                <div class="commentary-bodyer">
                                    ${c[b].content}
                                    ${comment_imgs}
                                </div>
                                <div class="commentary-footer">
                                    <div class="reply">
                                        <i></i>
                                        <span class="number" onclick="show_reply(${c[b].floor_count})">回复(${c[b].child_count})</span>
                                    </div>
                                </div>
                                <ul class="children-commentary" style="display:none;">
                                    ${comment_reply}
                                </ul>
                            </div>
                        </li>`
                }
                h.append(a);
                $(".comment_count").html(e.count);
            }
        }
    })
}
function nextPageChild(e, h, k, a) {
    // var l = $(e).siblings(".list-unstyled").last(),
    var l = $(e).parents('.taptap-comments').find('ul');
    c = $(e).attr("data-id");
    $.ajax({
        url: hostUrl + "/api_comment/commentChildData.html",
        data: {
            source_id: k,
            com_id: a,
            type: h,
            page: c
        },
        type: "POST",
        dataType: "jsonp",
        jsonp: "callbackparam",
        success: function(a) {
            if (1 == a.code) {
                var b = "",
                f = a.data.length;
                a = a.data;
                for (var d = 0; d < f; d++) {
                    if (a[d].username == '游戏指引_GameFAQ') {
                        var offcial_class = 'official';
                    } else {
                        var offcial_class = '';
                    }
                    b += '<li class="taptap-comment-item '+offcial_class+'"><a href="javascript:;" class="comment-item-avatar img-circle male"><img src="' + a[d].avatar + '"></a><div class="comment-item-text"><div class="item-text-header"><span class="taptap-user"><a href="javascript:;" class="taptap-user-name" rel="nofollow">' + a[d].username + '</a></span></div><div class="item-text-body">'
                    "" != a[d].atName && (b += '<div class="contentAt">@' + a[d].atName + "&nbsp; &nbsp;</div>");
                    b += a[d].content;
                    if ("" != a[d].image_url_arr)
                        for (var g = 0; g < a[d].image_url_arr.length; g++)
                            b += '<img class="small-img" src="' + a[d].image_url_arr[g] + '"  alt="">';
                    b += "</div>";
                    b += "</div></li>"
                }
                // l.after(b);
                l.append(b);
                $(e).attr("data-id", parseInt(c) + 1)
            } else $(e).attr("onclick", ""),
            $(e).html(a.msg)
        }
    })
}

function show_reply(id){
    $obj = $('#floor_' + id)
    var reply_body = $obj.find('ul');
    if (reply_body.is(':hidden')) {
        reply_body.show();
    } else {
        reply_body.hide();
    }
}
setTimeout(GameStart(), 500);
