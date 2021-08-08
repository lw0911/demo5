       document.domain = location.host.substring(location.host.indexOf(".") + 1, location.host.length);
 var date1;
 function showDiv() {
         if (window._gsTracker) {

             _gsTracker.trackEvent("Conversion", "Reg", "hqmkt");

         }
            $.blockUI({ message: "数据提交中，请稍等..." });
            //2013-5-13 by Joey 注意：配置注册成功以后的跳转页 必须配置成网络路径
            setTimeout("location.href='thanks.aspx'", 200); //设置成功以后的跳转页
        }

        function getField(fieldName, urlString) {
            if (urlString != null) {
                var typeQu = fieldName + "=";
                var urlEnd = urlString.indexOf(typeQu);
                if (urlEnd != -1) {
                    var paramsUrl = urlString.substring(urlEnd + typeQu.length);
                    var isEnd = paramsUrl.indexOf('&');
                    if (isEnd != -1) {
                        return paramsUrl.substring(0, isEnd);
                    }
                    else {
                        return paramsUrl;
                    }
                }
                else {
                    return "";
                }
            }
            else {
                return "";
            }
        };
        window.onbeforeunload = function () {
            return leave();
        };

        function leave() {
            var date2 = parseInt((new Date() - date1) / 1000);
            jQuery.support.cors = true;
            $.ajax({
                url: "http://regiframe.webinternational.com.cn/RegAPI.ashx?ADID=" + getField("ADID", location.href) + "&leavetime=" + date2,
                type: 'Post',
                dataType: "jsonp",
                jsonp: 'jsonpcallback',
                error: function (XMLHttpRequest, textStatus, errorThrown) {
                },
                success: function (data) {
                }, error: function (date111) {
                }
            });
        }

        //////////////////////////////////////////////////////////////////////////
        $(document).ready(function () {
            date1 = new Date();
            //短信参数，中心/区域先放着
            var cssurl = "http://regiframe.webinternational.com.cn/css/adDefault_v_1CMS.css"//css文件路径，只能放在regiframe域名下，不可修改; a
            var IsEmail = ""; //是否发送邮件 //默认打开  b
            var EmailStencil = "/EDM/default/activate.html"; //邮件模板路径，只能放在regiframe域名下，不可修改  c
            var Subscribe = ""; //是否显示订阅电子杂志开关 默认打开  d
            var IsSendMsg = ""; //是否默认发送成功短信。默认打开 e
            var str = "http://regiframe.webinternational.com.cn/AdDefaultCMS.aspx";
            //2013-5-29 自动识别
			var locationstr = location.href;
			var maskpath = locationstr.substring(0,locationstr.lastIndexOf("/"));
            var frameurl = maskpath + "/mask.aspx";
//			alert(frameurl);
//            var frameurl = "landingpage/mask.aspx";
            //var frameurl = "http://www.webinternational.com.cn/mask.html"; //重要：将http://www.webinternational.com.cn/mask.html改为自己网站域名下的mask.html
            str += "?ADID=" + getField("ADID", location.href) + "&CityID=" + getField("CityID", location.href) + "&a=" + cssurl + "&b=" + IsEmail + "&c=" + EmailStencil + "&e=" + IsSendMsg + "&furl=" + frameurl
            $('#Iframe1').attr("src", str);
        });