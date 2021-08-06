var AYS = {
	i : 0,
	init: function(c) {
		var c = c ? c : AYS;
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
			}
		},"a").appendTo();
        

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
            fixPos={width:w, height:h, marginTop:-h/2+30, marginLeft:-w/2};
            
            if (typeof SWFObject == 'undefined') {
                $('head').append('<script src="/js/swfobject.js"></script>');
                delay = 1000;
            }
            if (resourseURL.indexOf('.flv') != -1 || resourseURL.indexOf('.mp4') != -1) {
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
                fixPos={width:w, height:h, marginTop:-h/2 +30, marginLeft:-w/2};
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
	}
};


AYS.main = {
	init : function(){
		AYS.init(AYS.main);
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

