/*!
 * SuperSlide v2.0 
 * 轻松解决网站大部分特效展示问题
 * 详尽信息请看官网：http://www.SuperSlide2.com/
 *
 * Copyright 2011-2013, 大话主席
 *
 * 请尊重原创，保留头部版权
 * 在保留版权的前提下可应用于个人或商业用途
 */
(function(a){a.fn.slide=function(b){return a.fn.slide.defaults={effect:"fade",autoPlay:!1,delayTime:500,interTime:2000,triggerTime:150,defaultIndex:0,titCell:".hd li",mainCell:".bd",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"on",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"linear",startFun:null,endFun:null,switchLoad:null},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=c.effect,e=a(c.prevCell,a(this)),f=a(c.nextCell,a(this)),g=a(c.pageStateCell,a(this)),h=a(c.titCell,a(this)),i=h.size(),j=a(c.mainCell,a(this)),k=j.children().size(),l=c.switchLoad;if(null!=c.targetCell)var m=a(c.targetCell,a(this));var n=parseInt(c.defaultIndex),o=parseInt(c.delayTime),p=parseInt(c.interTime);parseInt(c.triggerTime);var r=parseInt(c.scroll),s=parseInt(c.vis),t="false"==c.autoPlay||0==c.autoPlay?!1:!0,u="false"==c.opp||0==c.opp?!1:!0,v="false"==c.autoPage||0==c.autoPage?!1:!0,w="false"==c.pnLoop||0==c.pnLoop?!1:!0,x=0,y=0,z=0,A=0,B=c.easing,C=null,D=n;if(0==i&&(i=k),v){var E=k-s;i=1+parseInt(0!=E%r?E/r+1:E/r),0>=i&&(i=1),h.html("");for(var F=0;i>F;F++)h.append("<li>"+(F+1)+"</li>");var h=a("li",h)}if(j.children().each(function(){a(this).width()>z&&(z=a(this).width(),y=a(this).outerWidth(!0)),a(this).height()>A&&(A=a(this).height(),x=a(this).outerHeight(!0))}),k>=s)switch(d){case"fold":j.css({position:"relative",width:y,height:x}).children().css({position:"absolute",width:z,left:0,top:0,display:"none"});break;case"top":j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+s*x+'px"></div>').css({position:"relative",padding:"0",margin:"0"}).children().css({height:A});break;case"left":j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+s*y+'px"></div>').css({width:k*y,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:z});break;case"leftLoop":case"leftMarquee":j.children().clone().appendTo(j).clone().prependTo(j),j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+s*y+'px"></div>').css({width:3*k*y,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-k*y}).children().css({"float":"left",width:z});break;case"topLoop":case"topMarquee":j.children().clone().appendTo(j).clone().prependTo(j),j.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+s*x+'px"></div>').css({height:3*k*x,position:"relative",padding:"0",margin:"0",top:-k*x}).children().css({height:A})}var G=function(){a.isFunction(c.startFun)&&c.startFun(n,i)},H=function(){a.isFunction(c.endFun)&&c.endFun(n,i)},I=function(b){b.eq(n).find("img").each(function(){a(this).attr(l)!==void 0&&a(this).attr("src",a(this).attr(l)).removeAttr(l)})},J=function(a){if(D!=n||a||"leftMarquee"==d||"topMarquee"==d){switch(d){case"fade":case"fold":case"top":case"left":n>=i?n=0:0>n&&(n=i-1);break;case"leftMarquee":case"topMarquee":n>=1?n=1:0>=n&&(n=0);break;case"leftLoop":case"topLoop":var b=n-D;i>2&&b==-(i-1)&&(b=1),i>2&&b==i-1&&(b=-1);var p=Math.abs(b*r);n>=i?n=0:0>n&&(n=i-1)}if(G(),null!=l&&I(j.children()),m&&(null!=l&&I(m),m.hide().eq(n).animate({opacity:"show"},o,function(){j[0]||H()})),k>=s)switch(d){case"fade":j.children().stop(!0,!0).eq(n).animate({opacity:"show"},o,B,function(){H()}).siblings().hide();break;case"fold":j.children().stop(!0,!0).eq(n).animate({opacity:"show"},o,B,function(){H()}).siblings().animate({opacity:"hide"},o,B);break;case"top":j.stop(!0,!1).animate({top:-n*r*x},o,B,function(){H()});break;case"left":j.stop(!0,!1).animate({left:-n*r*y},o,B,function(){H()});break;case"leftLoop":0>b?j.stop(!0,!0).animate({left:-(k-p)*y},o,B,function(){for(var a=0;p>a;a++)j.children().last().prependTo(j);j.css("left",-k*y),H()}):j.stop(!0,!0).animate({left:-(k+p)*y},o,B,function(){for(var a=0;p>a;a++)j.children().first().appendTo(j);j.css("left",-k*y),H()});break;case"topLoop":0>b?j.stop(!0,!0).animate({top:-(k-p)*x},o,B,function(){for(var a=0;p>a;a++)j.children().last().prependTo(j);j.css("top",-k*x),H()}):j.stop(!0,!0).animate({top:-(k+p)*x},o,B,function(){for(var a=0;p>a;a++)j.children().first().appendTo(j);j.css("top",-k*x),H()});break;case"leftMarquee":var q=j.css("left").replace("px","");0==n?j.animate({left:++q},0,function(){if(j.css("left").replace("px","")>=0){for(var a=0;k>a;a++)j.children().last().prependTo(j);j.css("left",-k*y)}}):j.animate({left:--q},0,function(){if(2*-k*y>=j.css("left").replace("px","")){for(var a=0;k>a;a++)j.children().first().appendTo(j);j.css("left",-k*y)}});break;case"topMarquee":var t=j.css("top").replace("px","");0==n?j.animate({top:++t},0,function(){if(j.css("top").replace("px","")>=0){for(var a=0;k>a;a++)j.children().last().prependTo(j);j.css("top",-k*x)}}):j.animate({top:--t},0,function(){if(2*-k*x>=j.css("top").replace("px","")){for(var a=0;k>a;a++)j.children().first().appendTo(j);j.css("top",-k*x)}})}h.removeClass(c.titOnClassName).eq(n).addClass(c.titOnClassName),D=n,0==w&&(f.removeClass("nextStop"),e.removeClass("prevStop"),0==n?e.addClass("prevStop"):n==i-1&&f.addClass("nextStop")),g.html("<span>"+(n+1)+"</span>/"+i)}};J(!0),t&&("leftMarquee"==d||"topMarquee"==d?(u?n--:n++,C=setInterval(J,p),j.hover(function(){t&&clearInterval(C)},function(){t&&(clearInterval(C),C=setInterval(J,p))})):(C=setInterval(function(){u?n--:n++,J()},p),a(this).hover(function(){t&&clearInterval(C)},function(){t&&(clearInterval(C),C=setInterval(function(){u?n--:n++,J()},p))})));var K;"mouseover"==c.trigger?h.hover(function(){n=h.index(this),K=window.setTimeout(J,c.triggerTime)},function(){clearTimeout(K)}):h.click(function(){n=h.index(this),J()}),f.click(function(){(1==w||n!=i-1)&&(n++,J())}),e.click(function(){(1==w||0!=n)&&(n--,J())})})}})(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return 1>(b/=e/2)?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:1>(b/=e/2)?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return 1>(b/=e/2)?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),Math.abs(d)>h){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),1>(b/=e/2)?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return 1/2.75>(b/=e)?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});