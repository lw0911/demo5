var H3C = H3C || {};
H3C.isWeiXinBrowser = function() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
    } else {
        return false;
    }
}
var SendEmail = function(subject) {
    var sendEmailUrl = "http://" + location.hostname + "/cn/Aspx/ContractMe/Default.aspx";
    subject = escape(subject);
    var url = escape(window.location.href);
    sendEmailUrl = sendEmailUrl + "?subject=" + subject + "&url=" + url;
    window.open(sendEmailUrl, "send", "left=300,top=120,status=no,scrollbars=no,resizable=no,width=500,height=500");
}
var addQR = function() {
    var htmlArray = [];
    htmlArray.push('<div class="jiathis_style_32x32 suface">');
    htmlArray.push('<a class="jiathis_button_weixin wx"><img src="/cn/tres/WebUI/images/tf_11.png" ></a>');
    htmlArray.push('</div>');
    htmlArray.push('<script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=1370485270555516" charset="utf-8"></scr' + 'ipt>');
    var qrhtml = htmlArray.join('');
    $('#shareQR').html(qrhtml);
}
var addBaiduAnalytics = function() {
    var _hmt = _hmt || [];
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?df7237ab1ce22c31bbe68ebd1817c1c4";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
}
var addBaiduLinkPush = function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
}
var addGoogleAnalytics = function() {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-92574041-1', 'auto');
  ga('send', 'pageview');
}
var wxshare = function(){
    var b_inner = H3C.isWeiXinBrowser();
    if (b_inner) {
        var share = '';
        var _head = $('head:eq(0)');
        share += '<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"> </sc' + 'ript>\r\n';
        share += '<script type="text/javascript">\r\n';
        share += 'var title = "' + $('title', _head).html() + '";\r\n';
        share += 'var desc = "' + $('meta[name="description"]', _head).attr('content') + '";\r\n';
        share += 'var link = "' + window.location.href + '";\r\n';
        if(typeof (imgUrl)!=='undefined'){
            share +=  'var imgUrl ="' + imgUrl + '";\r\n';
        }
        else{
            share +=  'var imgUrl = "http://www.h3c.com/cn/tres/WebUI/images/h3c-wxshare-logo.jpg";\r\n';
        }
        share += '</sc' + 'ript>\r\n';
        share += '<script type="text/javascript" src="http://share.h3c.com/share/jssdk.js"></scr' + 'ipt>'
        $('body').append(share);
    }
}
$(document).ready(function() {
    var jiathis_config = {
        title: "",
        summary: "",
        pic: ""
    }
    if (H3C.internet) {
        addQR();
        addBaiduAnalytics();
        addBaiduLinkPush();
        addGoogleAnalytics();
        wxshare();
    } //else {
        // var img = new Image;
        // img.onload = function() {
        //     addQR();
        //     addBaiduAnalytics();
        //     addBaiduLinkPush();
        //     addGoogleAnalytics();
        // };
        // img.src = 'http://www.baidu.com/img/bdlogo.png?r=' + Math.random();
    //}
    //setTimeout(loadBDResult, 10);
});
var SetFeedBackUrl = function(obj) {
    window.scrollBy(0, 100000);
} 
+ function documentCenterMessyCode() {
    var url = window.location.href.toLowerCase();
    if (url.indexOf('/document_center/') > 0) {
        var wordSection1 = $('.WordSection1');
        var wordSection2 = $('.WordSection2');
        var section1 = $('.Section1');
        var section2 = $('.Section2');
        if (wordSection1.length == 1) {
            var style = $('.WordSection1').attr('style');
            if (style) {
                var p = style.indexOf(' ');
                style = style.substring(0, p);
                $('.WordSection1').attr('style', style);
            }
        }
        if (wordSection2.length == 1) {
            var style = $('.WordSection2').attr('style');
            if (style) {
                var p = style.indexOf(' ');
                style = style.substring(0, p);
                $('.WordSection2').attr('style', style);
            }
        }
        if (section1.length == 1) {
            var style = $('.Section1').attr('style');
            if (style) {
                var p = style.indexOf(' ');
                style = style.substring(0, p);
                $('.Section1').attr('style', style);
            }
        }
        if (section2.length == 1) {
            var style = $('.Section2').attr('style');
            if (style) {
                var p = style.indexOf(' ');
                style = style.substring(0, p);
                $('.Section2').attr('style', style);
            }
        }
    }
}();

+ function documentCenterTable() {
    var url = window.location.href.toLowerCase();
    if (url.indexOf('/document_center/') > 0) {
        var wordSection1 = $('.WordSection1');
        var wordSection2 = $('.WordSection2');
        var wordSection3 = $('.WordSection3');
        var wordSection4 = $('.WordSection4');
        var section2 = $('.Section2');
        if (wordSection1.length == 1) {
            $('.WordSection1').find('table').each(function() {
                if($(this).parent()[0].tagName.toLowerCase()!='td'){
                    $(this).css('width', $(this).attr('width')+'px');
                }
            });
        }
        if (wordSection2.length == 1) {
            $('.WordSection2').find('table').each(function() {
                if($(this).parent()[0].tagName.toLowerCase()!='td'){
                    $(this).css('width', $(this).attr('width')+'px');
                }
            });
        }
        if (wordSection3.length == 1) {
            $('.WordSection3').find('table').each(function() {
                if($(this).parent()[0].tagName.toLowerCase()!='td'){
                    $(this).css('width', $(this).attr('width')+'px');
                }
            });
        }
         if (wordSection4.length == 1) {
            $('.WordSection4').find('table').each(function() {
                if($(this).parent()[0].tagName.toLowerCase()!='td'){
                    $(this).css('width', $(this).attr('width')+'px');
                }
            });
        }
        if (section2.length == 1) {
            $('#documentContent').find('table').each(function() {
                if($(this).parent()[0].tagName.toLowerCase()!='td'){
                    $(this).css('width', $(this).attr('width')+'px');
                }
            });
        }
    }
}(); 
// + function documentCenterAnchor() {
//     var url = window.location.href.toLowerCase();
//     if (url.indexOf('/document_center/') > 0) {
//         $('a').each(function() {
//             var href = $(this).attr('href');
//             if (href && href.indexOf('#') == 0) {
//                 var anchor = href.substr(1);
//                 $(this).bind('click', function(event) {
//                     var offset_top = $('a[name=' + anchor + ']').offset().top;
//                     window.scroll(0, offset_top - 70);
//                     return false;
//                 });
//             }
//         });
//     }
// }();
+ function trackDownload(){
    var url = window.location.href.toLowerCase();
    if (url.indexOf('/products___technology/') > 0) {
        $('.proddown>a').each(function(index, el) {
            $(this).on('click',function() {
                var file=$(this).attr('title');
                file = file.substring(0,file.indexOf('.pdf'))+'.pdf';
                var attid = $(this).attr('href').split('?')[1];
                _hmt.push(['_trackEvent','彩页下载',title,attid])
            })
        });
    }
    // if(url.indexOf('/document_center/')>0){
    //     $('.dc-default a,.downloadsmall a').each(function(index, el) {
    //         $(this).on('click',function() {
    //             var file=$(this).attr('title');
    //             var attid = $(this).attr('href').split('?')[1];
    //             _hmt.push(['_trackEvent','手册下载',file,attid])
    //         })
    //     });
    // }
    // if(url.indexOf('_30005_')>0){
    //     $('.downloadsmall a').each(function(index, el) {
    //         $(this).on('click',function() {
    //             var file=$('meta[name=keywords]').attr("content")+'|'+$('h3').html()+'|'+$('.dc-default>p:first').html() ;
    //             var attid = $(this).attr('href').split('?')[1];
    //             _hmt.push(['_trackEvent','手册下载',file,attid])
    //         })
    //     });
    // }
    $('.track_download').each(function(index, el) {
        $(this).on('click',function() {
            var file=$(this).html();
            var attid = $(this).attr('href').split('?')[1];
            _hmt.push(['_trackEvent','手册下载',file,attid])
        });
    });
}();
$(".mobileread").hover(function() {
    $(this).siblings(".mobileqrcode").show();
}, function() {
    $(this).siblings(".mobileqrcode").hide();
});
with (document) {  	                       
	if(H3C.getCookie("USER_ID").length>0)                          
	{                                                          
		$('.log').html("<span>欢迎</span> <a href='/cn/My_H3C/' class='red' title='点此进入“我的H3C”'>"+H3C.getCookie("USER_ID")+"</a>&nbsp;|&nbsp;<a href='/cn/My_H3C/Commen_User/My_ProfileCenter/' title='修改您的个人信息、密码'>修改信息</a>&nbsp;|&nbsp;<a href='/cn/Aspx/Home/Login/LogOutPage.aspx?backurl="+window.location.href+"' title='退出登录'>退出&nbsp;</a>");        
	}                                  
}