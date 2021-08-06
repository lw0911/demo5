function A(url, param, success, error) {
	if (url[0] != '/') {
		url = '/' + url;
	}
	var ajax = {type: "POST", url: url, dataType: 'json'};
	if (param) ajax.data = param;
	ajax.success = function(data) {
		if (data.no == 0) {
			if (success) success(data.data);
		} else {
			if (error) error(data.no, data.msg);
		}
	};
	if (error) {
		ajax.error = function() {
			error(500, '访问网络失败，请检查您的网络连接并重试');
		}
	}
	$.ajax(ajax);
}


var L={
	success : function(){
		AYS.main.head.loginSuccess();
	},
	logout : function(){
		AYS.main.head.loginout();
	},
	close : function(){
		AYS.main.head.loginClose();
	},
	goStep : function(index,step){
		AYS.main.head.goStep(index,step);
	}
};


var Q = {
	init: function() {
		$('#head .vivo-search form input.data_q').keyup(Q.check);
	},
	last_val: false,
	wait_intval: false,
	query: function() {
		Q.wait_intval = false;
		var q = Q.last_val;
		var params = {q:q};
		A('qsearch', params, function(data) {
			if (!data || data.length == 0 || q != Q.last_val) {
				return;
			}
			var html = '';
			var info = [];
			for (var i in data) {
				var p = data[i];
				if (p.type == 'keywords') {
					html += '<li><a class="cl" href="#"><b><img src="' +p.image+ '" width="60" height="60"></b><h2></h2><p></p><span>快速查看</span></a></li>';
					info.push([p.url, p.name, p.desc]);
				} else {
					html += '<li><a class="cl" href="#"><b><img src="' +p.image+ '" width="60" height="60"></b><h2></h2><p></p><span>快速查看</span></a></li>';
					html += '<li><a class="cl" href="#"><b><img src="/images/qk-results-dlico.png" width="60" height="60"></b><h2></h2><p></p><span>快速查看</span></a></li>';
					info.push([p.url, p.name, p.desc]);
					info.push([p.download_url, p.name, '固件、Funtouch OS、视频、使用教程、等等。']);
				}
			}
			$('#head .vivo-search .qk-results ul').html(html);
			var lis = $('#head .vivo-search .qk-results ul li');
			for (var i = 0; i < info.length; ++i) {
				var j = lis.eq(i);
				j.find('a').attr('href', info[i][0]);
				j.find('h2').text(info[i][1]);
				j.find('p').text(info[i][2]);
			}
			$('#head .vivo-search .qk-results').show();
			$('#head .vivo-search .qk-results .other-results a').attr('href', '/search?'+$.param({q:q}));
		}, function() {});
	},
	check: function() {
		$('#head .vivo-search .qk-results').hide();
		var q = $.trim($('#head .vivo-search form input.data_q').val());
		if (q == Q.last_val) {
			return;
		}
		Q.last_val = q;
		if (q == '') {
			return;
		}
		if (Q.wait_intval) clearTimeout(Q.wait_intval);
		Q.wait_intval = setTimeout(Q.query, 300);
	}
};
$(document).ready(Q.init);

var AYS = {
	init: function(c) {
		var c = c ? c : this;
		for (var i in c) {if (c[i] && c[i].init) {c[i].init();}}
	},
	html5 : function(){
		var thisBody = document.body || document.documentElement,
	    thisStyle = thisBody.style,
	    support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
		if(support!==undefined) {return true}else{return false}
	},
	scroll : function(n,speed){
		$("body,html").stop().animate({scrollTop:n},speed);
	},
    platform: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion,
            e=window.navigator.userAgent;
        var ieNub=999,browserName=false;
        var thisBody = document.body || document.documentElement,
	    thisStyle = thisBody.style,
	    support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined || thisStyle.MozTransition !== undefined || thisStyle.MsTransition !== undefined || thisStyle.OTransition !== undefined;
        support= support!==undefined ? true : false;
        
        if(e.indexOf("MSIE") >= 0){
            if(e.indexOf("MSIE 6.0")>0) ieNub=6;
            if(e.indexOf("MSIE 7.0")>0) ieNub=7;
            if(e.indexOf("MSIE 8.0")>0) ieNub=8;
            if(e.indexOf("MSIE 9.0")>0) ieNub=9;
            if(e.indexOf("MSIE 10.0")>0) ieNub=10;
            if(e.indexOf("MSIE 11.0")>0) ieNub=11;
            if(e.indexOf("MSIE 12.0")>0) ieNub=12;
            browserName='ie';
        }else{
            if (e.indexOf("Firefox") >= 0) browserName="firefox";
            if(e.indexOf("Safari") >= 0) browserName="safari";
            if(e.indexOf("Chrome") >= 0) browserName="chrome";
            if(e.indexOf("Opera") >= 0) browserName="opera";
        }
        return {
            trident: u.indexOf('Trident') > -1,
            presto: u.indexOf('Presto') > -1,
            webKit: u.indexOf('AppleWebKit') > -1,
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad: u.indexOf('iPad') > -1,
            webApp: u.indexOf('Safari') == -1,
            ismobile : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            html5: support,
            ie: ieNub,
            browser: browserName
        };
        
    }(),
    pf : function(){
        var ra='(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)';
        return {
            retina : window.devicePixelRatio > 1 ? true : window.matchMedia && window.matchMedia(ra).matches ? true : false
        }
    }(),
    cRetina : function(){
        var a=this;
        $('img[data-x2]').each(function(){
            if(a.pf.retina){
                $(this).attr({'src':$(this).attr('data-x2')}).removeAttr('data-x2');
            }else{
                $(this).removeAttr('data-x2');
            }
        });
    },
	browser : function(n){
        if(n){
            return AYS.platform.ie;
        }else{
            return AYS.platform.browser;
        }
	},
	iepng : function(){
		
		if(AYS.browser(1)==6){
			for(var j=0; j<document.images.length; j++)
			{
				var img = document.images[j];
				var imgName = img.src.toUpperCase();
				if (imgName.substring(imgName.length-3, imgName.length) == "PNG")
				{
				 var imgID = (img.id) ? "id='" + img.id + "' " : "";
				 var imgClass = (img.className) ? "class='" + img.className + "' " : "";
				 var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' ";
				 var imgAlt = (img.alt) ? "alt='" + img.alt + "' " : "alt='" + img.title + "' ";
				 var imgStyle = "display:inline-block;" + img.style.cssText;
				 if (img.align == "left") imgStyle = "float:left;" + imgStyle;
				 if (img.align == "right") imgStyle = "float:right;" + imgStyle;
				 if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle;
				 var strNewHTML = "<i " + imgID + imgClass + imgTitle +  " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'" + img.src + "\', sizingMethod='scale');\"></i>";
				 img.outerHTML = strNewHTML;
				 j = j-1;
				}
			}
		}
	},
    A2C : function(v,callback){
        $.get(
            '/qr2code',v,
            function(data,status){
                if(typeof callback === 'function') callback(data);
            }
        );
    },
	pageLoading : function(p){
		if(!AYS.html5() || !$("body").hasClass("load")){
			if(p && p.run) p.run();
			return;
		}
		var imgAll=[],
		imgTotal=curload=retried=per=0,
		imgcomplete = function(){
			per=parseInt(curload * 100.0 / imgTotal + 0.5);
			if(curload>=imgTotal){
				$("body").addClass("loaded").removeClass("load");
				if(p && p.run) p.run();
				return;
			}

			var imgurl=new Image();
			$(imgurl).load(function(){
				curload++;
				retried=0;
				setTimeout(imgcomplete,1);
			}).error(function(){
				retried++;
				if(retried<3){
					imgcomplete();
				}else{
					curload++;
					retried=0;
					setTimeout(imgcomplete,1);
				}
			});
			imgurl.src=imgAll[curload];
		};

		var s=0
		for(var j=0; j<document.images.length; j++){
			var imgEle=document.images[j];
			if(imgEle.src){
				imgAll.push(imgEle.src);
			}
		}
		imgTotal=imgAll.length;
		imgcomplete();
	},
	fullscreen : function(obj,t){
		if(!obj){return}
		var o= null || obj,
		el = document.documentElement,cl=document,rfs =el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen,cfs =cl.cancelFullScreen || cl.webkitCancelFullScreen || cl.mozCancelFullScreen;
		if(t){o.toggle(function(){rfs.call(el);t.text("退出");return false;},function(){cfs.call(cl);t.text("全屏");return false;});}else{o.on("dblclick", function() {rfs.call(el);return false;});}
	},
	gotop : function(){
		if($("#airbox").size()<=0) $("body").append("<div id='airbox'></div>");
		if($("#airbox #gotop").size()<=0) $("#airbox").prepend("<div id='gotop' style='display:none;'><a href='#' title='返回顶部'></a></div>");
		
		var gotop=$("#gotop");
		gotop.unbind('click','mouseenter','mouseleave');

		gotop.on({
			click : function(){
				AYS.scroll(0,600);
				return false;
			},
			mouseenter : function(){
				if(AYS.browser(1)<9){
					$(this).css({backgroundPosition:"0 -50px"});
				}
			},
			mouseleave : function(){
				if(AYS.browser(1)<9){
					$(this).css({backgroundPosition:"0 0"});
				}
			}
		},"a").appendTo();
        

		if(AYS.browser()!="ie" || AYS.browser(1)>9){
			//gotop.find("a").css({backgroundPosition:"0 -100px"});
		}

		var rz=function(){
			var curtop=$(this).scrollTop(),
				setH=$(this).height(),
				fixH=setH-100;


			if(curtop>500){
				if(gotop.hasClass("active")) return;
				gotop.addClass("active").css({display:"block",opacity:0}).stop().animate({opacity:1,top:fixH},200);
			}else{
				gotop.removeClass("active").stop().animate({opacity:0,top:setH},300,function(){
					$(this).css({display:"none"});
				});
			}
		};

		$(window).on({
			scroll : rz,
			resize : function(){
				if(gotop.hasClass("active")) gotop.css({top: $(this).height()-100});
			}
		}).scroll().resize();
	},
	video : function(url){
        
		if(url=="" || url=="#") return false;
		
		var w=h=0,resourseURL='',urlArr=[];
        var wp=$("#wrap").size()>0 ? $("#wrap") : $("body");
		if($("#video_layer").size()<=0){
			wp.append('<div id="video_layer" style="display:none;"><a class="close"></a><div class="video-obox"></div></div>');
		}
        
        var
        videoBox=$("#video_layer"),
		videoShow=videoBox.find(".video-obox"),
		closeBtn=videoBox.find("a.close");
        
        
        
		if(url.indexOf("#")!= -1){
			urlArr=url.split("#");
			resourseURL=urlArr[0];
			w=parseInt(urlArr[1]);
			h=parseInt(urlArr[2]);
		}else{
			resourseURL=url;
			w=720;
			h=480;
		}
        
        
        
        
        if(!AYS.platform.ismobile){
            videoCode='<span id="CuPlayer"/>';
            fixPos={width:w, height:h, marginTop:-h/2, marginLeft:-w/2};
            
            if (typeof SWFObject == 'undefined') {
                $('head').append('<script src="/js/swfobject.js"></script>');
                delay = 1000;
            }
            
            if (resourseURL.indexOf('.flv') != -1 || resourseURL.indexOf('.mp4') != -1) {
            	delay = 1000;
                var createVi = function () {
                        var so = new SWFObject("/js/CuPlayerMiniV3.swf", "CuPlayer", w, h, "9", "#000000");
                        so.addParam("allowfullscreen", "true");
                        so.addParam("allowscriptaccess", "always");
                        so.addParam("wmode", "opaque");
                        so.addParam("quality", "high");
                        so.addParam("salign", "lt");
                        so.addVariable("CuPlayerFile", resourseURL);
                        so.addVariable("CuPlayerShowImage", "true");
                        so.addVariable("CuPlayerWidth", w);
                        so.addVariable("CuPlayerHeight", h);
                        so.addVariable("CuPlayerAutoPlay", "true");
                        so.addVariable("CuPlayerAutoRepeat", "false");
                        so.addVariable("CuPlayerImage", "");
                        so.addVariable("CuPlayerShowControl", "true");
                        so.addVariable("CuPlayerAutoHideControl", "true");
                        so.addVariable("CuPlayerAutoHideTime", "6");
                        so.addVariable("CuPlayerVolume", "80");
                        so.addVariable("CuPlayerGetNext", "false");
                        so.addVariable("CuPlayerLogo",""); 
                        so.write("CuPlayer");
                    },
                    isloading = function () {
                        if (typeof SWFObject != 'undefined') {
                            createVi();
                            clearTimeout(tt);
                        } else {
                            tt = setTimeout(isloading, delay);
                        }
                    };
                var tt = setTimeout(isloading, delay);
            }else{
                videoCode='<iframe frameborder="0" width="' + w + '" height="' + h + '" src="' + resourseURL + '"></iframe>';
                fixPos={width:w, height:h, marginTop:-h/2, marginLeft:-w/2};
            }            
        }else if(resourseURL.indexOf('.mp4') != -1){
            videoCode='<video width="100%" height="100%" autoplay><source src="' + resourseURL + '" type="video/mp4"></video>';
            fixPos={width:'100%', height:'100%', marginTop:'', marginLeft:'', left:0, top:0};
        }
        videoBox
            .css({height:$(window).height()})
            .show()
            .find('.video-obox').css(fixPos).html('')
            .append(videoCode);
        
        closeBtn.off('click').click(function(){
            videoBox.hide();
            return false;
        });
        
        
            
        var resizeBox=function(){
            videoBox.css({height:$(window).height()});
        };
        $(window).on({
            resize : resizeBox
        });
        resizeBox();
        
        
        $(document).on({
            keydown : function(e){
                if(e.keyCode == 27){
                    if(videoBox.is(':visible')){
                        closeBtn.click();
                    }
                }
            }
        });
        
        
	}
};

AYS.share = {
    init : function(){
        
    },
	url: function(type, content, url, image, des) {
        
		switch(type) {
			case 'weibo':
				return AYS.share.weibo_url(content, url, image, des);
			case 'douban':
				return AYS.share.douban_url(content, url, image, des);
			case 'renren':
				return AYS.share.renren_url(content, url, image, des);
			case 'tencentweibo':
				return AYS.share.tencentweibo_url(content, url, image, des);
			case 'qzone':
				return AYS.share.qzone_url(content, url, image, des);
			case 'kaixin':
				return AYS.share.kaixin_url(content, url, image, des);
			case '163weibo':
				return AYS.share.t163weibo(content, url, image, des);
			case 'sohu':
				return AYS.share.sohu(content, url, image, des);
			case 'msn':
				return AYS.share.msn(content, url, image, des);
			default:
				return false;
		}
	},

	t163weibo: function(content, url, image) {
		var param = {info: content + ' ' + url};
		if (image) {
			param['images'] = image;
			param['togImg'] = true;
		}
		return 'http://t.163.com/article/user/checkLogin.do?' + $.param(param);
	},

	weibo_url: function(content, url, image) {
		var param = {title: content + ' ' + url};
		if (image) {
			param['pic'] = encodeURI(image);
		}
		return 'http://service.weibo.com/share/share.php?' + $.param(param);
	},

	renren_url: function(content, url, image, des) {
        var rrShareParam = {
            resourceUrl : url,
            srcUrl : '',
            pic : image,
            title : content,
            description : des
        };
        return 'http://widget.renren.com/dialog/share?' + $.param(rrShareParam);
	},

	qzone_url: function(content, url, image, des) {
		var param = {title: content};
		if (url) {
			param['url'] = url;
		}
		if (image) {
			param['pics'] = image;
		}
		return 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?' + $.param(param);
	},

	douban_url: function(content, url, image) {
		var param = {title: content};
		if (url) {
			param['url'] = url;
		}
		if (image) {
			param['pic'] = image;
		}
		return 'http://www.douban.com/recommend/?' + $.param(param);
	},

	tencentweibo_url: function(content, url, image) {
		var param = {title: content};
		if (url) {
			param['url'] = url;
		}
		if (image) {
			param['pic'] = image;
		}
		return 'http://v.t.qq.com/share/share.php?' + $.param(param);
	},

	kaixin_url: function(content, url, image) {
		var param = {rtitle: content};
		if (url) {
			param['rurl'] = url;
		}
		if (image) {
			param['pic'] = image;
		}
		return 'http://www.kaixin001.com/repaste/share.php?' + $.param(param);
	},

	sohu: function(content, url, image) {
		var param = {title: content};
		if (url) {
			param['url'] = url;
		}
		if (image) {
			param['pic'] = image;
		}
		return 'http://t.sohu.com/third/post.jsp?' + $.param(param);
	},

	msn: function(content, url, image) {
		var param = {title: content};
		if (url) {
			param['url'] = url;
		}
		if (image) {
			param['screenshot '] = image;
		}
		return 'http://profile.live.com/badge?' + $.param(param);
	},
	weichat : function(imgUrl,lineLink,descContent,shareTitle,appid){
        
        
        // 微信分享的数据
            var wxData = {
                imgUrl : imgUrl,
                lineLink : lineLink,
                descContent : descContent,
                shareTitle : shareTitle
            };
        
        
//            wx.config({
//                debug : true
//            });
            
//            console.log(wxData.shareTitle,wxData.descContent,wxData.lineLink,wxData.imgUrl);
        
            wx.ready(function(){

                //            分享给朋友 imgUrl,lineLink,descContent,shareTitle
                wx.onMenuShareAppMessage({
                    title: wxData.shareTitle,
                    desc: wxData.descContent,
                    link: wxData.lineLink,
                    imgUrl: wxData.imgUrl,
                    trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                        //                    alert('用户点击发送给朋友');
                    },
                    success: function (res) {
                        //                    alert('已分享');
                    },
                    cancel: function (res) {
                        //                    alert('已取消');
                    },
                    fail: function (res) {
                        //                    alert(JSON.stringify(res));
                    }
                });

                //            分享到朋友圈
                wx.onMenuShareTimeline({
                    title: wxData.shareTitle,
                    link: wxData.lineLink,
                    imgUrl: wxData.imgUrl,
                    trigger: function (res) {
                        // 不要尝试在trigger中使用ajax异步请求修改本次分享的内容，因为客户端分享操作是一个同步操作，这时候使用ajax的回包会还没有返回
                        //                    alert('用户点击分享到朋友圈');
                    },
                    success: function (res) {
                        //                    alert('已分享');
                    },
                    cancel: function (res) {
                        //                    alert('已取消');
                    },
                    fail: function (res) {
                        //                    alert(JSON.stringify(res));
                    }
                });

                //            分享到QQ
                wx.onMenuShareQQ({
                    title: wxData.shareTitle,
                    desc: wxData.descContent,
                    link: wxData.lineLink,
                    imgUrl: wxData.imgUrl,
                    trigger: function (res) {
                        //                    alert('用户点击分享到QQ');
                    },
                    complete: function (res) {
                        //                    alert(JSON.stringify(res));
                    },
                    success: function (res) {
                        //                    alert('已分享');
                    },
                    cancel: function (res) {
                        //                    alert('已取消');
                    },
                    fail: function (res) {
                        //                    alert(JSON.stringify(res));
                    }
                });

                //            分享到微博
                wx.onMenuShareWeibo({
                    title: wxData.shareTitle,
                    desc: wxData.descContent,
                    link: wxData.lineLink,
                    imgUrl: wxData.imgUrl,
                    trigger: function (res) {
                        //                    alert('用户点击分享到微博');
                    },
                    complete: function (res) {
                        //                    alert(JSON.stringify(res));
                    },
                    success: function (res) {
                        //                    alert('已分享');
                    },
                    cancel: function (res) {
                        //                    alert('已取消');
                    },
                    fail: function (res) {
                        //                    alert(JSON.stringify(res));
                    }
                });
                
            });

	}
};

// PC official website

AYS.main = {
	init : function(){
		AYS.init(AYS.main);
		// AYS.main.fixcontain();
//		AYS.iepng();
//		if(AYS.browser(1)==6){setTimeout(function(){$("[href]").focus(function() {this.blur()})},1000)}
		jQuery.easing.def="easeOutCubic";
		$("img").mousedown(function(e){return false});
        AYS.cRetina();
		if($('#gotop').size()<=0) AYS.gotop();
	},
	fixcontain: function(){
		if($("#contain").size()<=0) return;
		$(window).resize(function(){
			var wh=$(this).height(),vw=$("#wrap"),ct=$("#contain"),hd=$("#header"),fd=$("#footer");
			if(wh<vw.height()) return;
			ct.css({height:wh-hd.height()-fd.height()});
		}).resize();
	}
};

AYS.main.head = {
	init : function(){
		AYS.main.head.loginReg();

		var headBox=$("#head"),
		navBox=headBox.find(".vivo-nav"),
		navList=navBox.find("ul"),
		quickProduct=headBox.find(".vivo-menu-series"),
		quickComm=headBox.find(".vivo-menu-community"),
		searchBox=headBox.find(".vivo-search"),
		searchInput=searchBox.find("input"),
		searchBtn=navBox.find(".search-user a.search"),
		loginBtn=navBox.find(".search-user a.user"),
		loginMenu=headBox.find(".vivo-menu-user"),
		closeSearchBtn=searchBox.find("a.close"),
		isSearchClose=true,
		isMenuEnter=isCommEnter=false;

		closeSearchBtn.css({opacity:0});
		searchBox.on({
			mouseenter : function(){
				closeSearchBtn.animate({opacity:1},300);
			},
			mouseleave : function(){
				closeSearchBtn.animate({opacity:0},300);
			}
		});

		searchBtn.on("click",function(){
			if(isSearchClose){
				searchBox.children().css({opacity:0});
				searchBox.css({display:"block",height:0}).stop().animate({height:80},300);
				searchBox.children().stop().delay(300).animate({opacity:1},500);
				searchInput.focus().val("");
				$(this).addClass("current");
				isSearchClose=false;
			}else{
				searchBox.stop().animate({height:0},300,function(){
					$(this).css({display:"none"});
					isSearchClose=true;
				});
				$(this).removeClass("current");
			}
			return false;
		});
		closeSearchBtn.on("click",function(){
			searchBtn.click();
			return false;
		});

		var isuserMenu=false;
		loginBtn.on({
			click :function(){
				if($(this).attr("href")!="#") return;
				if($(this).hasClass("logined") || $("#loginreg_layer").size()<=0) return false;
				if(searchBox.is(":visible")) searchBtn.click(); //close search
				if($("#video_layer") && $("#video_layer").is(":visible")) $("#video_layer").find("a.close").click(); //close video
				
				$("#loginreg_layer").css({display:"block",marginTop:-$(window).height()}).stop().animate({marginTop:0},500,function(){
					$("#wrap").css({display:"none"});
					$("#loginreg_layer").find(".lr-title .btn-box a").first().click();
				});
				return false;
			},
			mouseenter : function(){
				if(!$(this).hasClass("logined")) return false;
				loginMenu.css({display:"block",opacity:0,marginTop:-20}).stop().animate({marginTop:0,opacity:1},300);
			},
			mouseleave : function(){
				if(!$(this).hasClass("logined")) return false;
				var t=setTimeout(function(){
					if(isuserMenu) return false;
					loginMenu.stop().animate({opacity:0},300,function(){
						$(this).css({display:"none"});
					});
				},300);
			}
		});
		loginMenu.on({
			mouseenter : function(){
				isuserMenu=true;
			},
			mouseleave : function(){
				isuserMenu=false;
				loginMenu.stop().animate({opacity:0},300,function(){
					$(this).css({display:"none"});
				});
			}
		}).on({
			click : function(){
				loginMenu.mouseleave();
			}
		},"dl dd a");

		// 社区导航快捷菜单
		// navList.on({
		// 	mouseenter : function(){
		// 		var space= isSearchClose ? 0 : 80;
		// 		quickComm.css({display:"block",opacity:0,top:(60+space-20),zIndex:99}).stop().animate({opacity:1,top:(60+space)},300);
		// 		$(this).addClass("active");
		// 	},
		// 	mouseleave : function(){
		// 		var ths=$(this);
		// 		var f=setTimeout(function(){
		// 			if(!isCommEnter){
		// 				ths.removeClass("active");
		// 				quickComm.stop().animate({opacity:0},500,function(){
		// 					$(this).css({display:"none"});
		// 					isCommEnter=false;
		// 				});
		// 			}
		// 		},200);
		// 	}
		// },"li.community");
		// quickComm.on({		
		// 	mouseenter : function(){
		// 		isCommEnter=true;
		// 	},
		// 	mouseleave : function(){
		// 		navList.parent().find("li.community").removeClass("active");
		// 		$(this).stop().animate({opacity:0},500,function(){
		// 			$(this).css({display:"none"});
		// 			isCommEnter=false;
		// 		});
		// 	}
		// });

		if($("body").hasClass("products")) return;
		navList.on({
			mouseenter : function(){
				var space= isSearchClose ? 0 : 80;
				quickProduct.css({display:"block",opacity:0,top:(60+space-20),zIndex:99}).stop().animate({opacity:1,top:(60+space)},300);
				$(this).addClass("active");
			},
			mouseleave : function(){
				var ths=$(this);
				var f=setTimeout(function(){
					if(!isMenuEnter){
						ths.removeClass("active");
						quickProduct.stop().animate({opacity:0},500,function(){
							$(this).css({display:"none"});
							isMenuEnter=false;
						});
					}
				},200);
			}
		},"li.product");
		quickProduct.on({		
			mouseenter : function(){
				isMenuEnter=true;
			},
			mouseleave : function(){
				navList.parent().find("li.product").removeClass("active");
				$(this).stop().animate({opacity:0},500,function(){
					$(this).css({display:"none"});
					isMenuEnter=false;
				});
			}
		});
	},
	loginReg : function(){
		var loginReg=$("#loginreg_layer"),
		lrTitle=loginReg.find(".lr-title"),
		closeBtn=lrTitle.find("a.close"),
		lrBox=loginReg.find(".lr-box"),
		loginSwitchBtn=lrTitle.find(".btn-box"),
		loginBox=lrBox.find(".fieldset"),
		loginMethodBox=loginBox.find(".fieldset-fill .fieldset-section"),
		loginCornerIco=lrTitle.find("em"),
		lrOtherMethod=loginBox.find(".other-method"),
		winH=0;


		loginSwitchBtn.find("a").on({
			mouseenter : function(){
				var th=$(this);
				loginCornerIco.stop().animate({left:th.offset().left+(th.width()/2)-19},500);
			},
			mouseleave : function(){
				loginCornerIco.stop().animate({left:loginSwitchBtn.find("a.current").offset().left+(loginSwitchBtn.find("a.current").width()/2)-19},500);
			},
			click : function(){
				var th=$(this);
				if(th.hasClass("current")) return false;
				th.addClass("current").siblings().removeClass("current");
				loginCornerIco.stop().animate({left:loginSwitchBtn.find("a.current").offset().left+(loginSwitchBtn.find("a.current").width()/2)-19},500);

				if(!lrOtherMethod.is(":visible")) lrOtherMethod.css({display:"block",opacity:0}).stop().delay(300).animate({opacity:1},500);
				if(!loginBox.is(":visible")){
					loginBox.siblings().stop().animate({opacity:0},300,function(){
						$(this).css({display:"none"});
						loginBox.stop().css({display:"block",opacity:0}).animate({opacity:1},500);
					});
				}

				loginMethodBox.eq(th.index()).css({display:"block",zIndex:10,opacity:0}).stop().delay(300).animate({opacity:1},500)
				.siblings().css({zIndex:1}).stop().delay(0).animate({opacity:0},500,function(){
					$(this).css({display:"none"});
				});

				return false;
			}
		});

		if($("body").hasClass("loginreg")){
			loginSwitchBtn.find("a").first().click();
		}
		if($("body").hasClass("emailsuccess")){
			AYS.main.head.goStep(2,".emailver-tips");
		}



		closeBtn.click(function(){
			if($("body").hasClass("loginreg")) return;
			loginReg.stop().animate({marginTop:-winH},500,function(){
				lrBox.children("div").first().css({opacity:1,display:"block",zIndex:10}).siblings().css({opacity:0,display:"none",zIndex:1});
				lrBox.children("div").find("input").val("");
				$(this).css({display:"none"});
			});
			$("#wrap").css({display:"block"});
			return false;
		});

		var r=function(){
			winH=$(window).height();
			lrTitle.css({height:winH/2 - 60});
			lrBox.css({height:winH/2 + 60});

			if($("body").hasClass("loginreg")) return;
			loginReg.css({height:winH-1});
		};
		$(window).resize("resize",r).resize();

	},
	loginSuccess : function(){
		var loginReg=$("#loginreg_layer"),
		lrTitle=loginReg.find(".lr-title"),
		closeBtn=lrTitle.find("a.close"),
		loginBtn=$(".vivo-nav .search-user a.user");

		loginBtn.addClass("logined");
		closeBtn.click();
		return false;
	},
	loginout : function(){
		var loginBtn=$(".vivo-nav .search-user a.user");
		loginBtn.find("b img").remove();
		loginBtn.removeClass("logined");
		return false;
	},
	loginClose : function(){
		$("#loginreg_layer .lr-title a.close").click();
		return false;
	},
	goStep : function(index,step){
		var loginReg=$("#loginreg_layer"),
		lrTitle=loginReg.find(".lr-title"),
		lrBox=loginReg.find(".lr-box"),
		loginSwitchBtn=lrTitle.find(".btn-box a");
		loginSwitchBtn.eq(index).click();

		if(!step) return false;
		var o=lrBox.find(step);
		o.siblings().stop().animate({opacity:0},300,function(){
			$(this).css({display:"none"});
			o.css({display:"block",opacity:0}).stop().animate({opacity:1},500);
		});
	}
};

AYS.main.foot = {
	init : function(){
		var footBox=$("#footer .vivo-footer"),
		snsBox=footBox.find(".vivo-sns-list"),
		weixin=snsBox.find("a.weixin"),
		weixinoverbox=snsBox.find(".vivo-weixin-overbox");

		weixin.on({
			mouseenter : function(){
				weixinoverbox.css({display:"block",opacity:0}).stop().animate({opacity:1},300);
			},
			mouseleave : function(){
				weixinoverbox.stop().animate({opacity:0},300,function(){
					$(this).css({display:"none",opacity:0});
				});
			},
			click : function(){
				return false;
			}
		});
	}
};

// Mobile version
AYS.mobile = {
	init : function(){
		AYS.init(AYS.mobile);
	}
};

// PC mall
AYS.mall = {
	init : function(){
		AYS.init(AYS.mall);
	}
};

// PC forum
AYS.forum = {
	init : function(){
		AYS.init(AYS.forum);
	}
};

// PC mobilephone's products
AYS.products = {
	init : function(){
		AYS.init(AYS.products);
	}
};



$(document).ready(function() {
	AYS.init();
});
