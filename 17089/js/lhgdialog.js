;(function($,window,undefined){var _ie6=window.ActiveXObject&&!window.XMLHttpRequest,_fn=function(){},_count=0,_rurl=/^url:/,_singleton,onKeyDown,document=window.document,expando='JDG'+(+new Date),dialogTpl='<table class="ui_border">'+'<tbody>'+'<tr>'+'<td class="ui_lt"></td>'+'<td class="ui_t"></td>'+'<td class="ui_rt"></td>'+'</tr>'+'<tr>'+'<td class="ui_l"></td>'+'<td class="ui_c">'+'<div class="ui_inner">'+'<table class="ui_dialog">'+'<tbody>'+'<tr>'+'<td colspan="2">'+'<div class="ui_title_bar">'+'<div class="ui_title" unselectable="on"></div>'+'<div class="ui_title_buttons">'+'<a class="ui_min" href="javascript:void(0);" title="\u6700\u5C0F\u5316"><b class="ui_min_b"></b></a>'+'<a class="ui_max" href="javascript:void(0);" title="\u6700\u5927\u5316"><b class="ui_max_b"></b></a>'+'<a class="ui_res" href="javascript:void(0);" title="\u8FD8\u539F"><b class="ui_res_b"></b><b class="ui_res_t"></b></a>'+'<a class="ui_close" href="javascript:void(0);" title="\u5173\u95ED(esc\u952E)">\xd7</a>'+'</div>'+'</div>'+'</td>'+'</tr>'+'<tr>'+'<td class="ui_icon"></td>'+'<td class="ui_main">'+'<div class="ui_content"></div>'+'</td>'+'</tr>'+'<tr>'+'<td colspan="2">'+'<div class="ui_buttons"></div>'+'</td>'+'</tr>'+'</tbody>'+'</table>'+'</div>'+'</td>'+'<td class="ui_r"></td>'+'</tr>'+'<tr>'+'<td class="ui_lb"></td>'+'<td class="ui_b"></td>'+'<td class="ui_rb"></td>'+'</tr>'+'</tbody>'+'</table>',_args,_path=(function(script,i,me)
{var l=script.length;for(;i<l;i++)
{me=!!document.querySelector?script[i].src:script[i].getAttribute('src',4);if(me.substr(me.lastIndexOf('/')).indexOf('lhgdialog')!==-1)
break;}
me=me.split('?');_args=me[1];return me[0].substr(0,me[0].lastIndexOf('/')+ 1);})(document.getElementsByTagName('script'),0),_getArgs=function(name)
{if(_args)
{var p=_args.split('&'),i=0,l=p.length,a;for(;i<l;i++)
{a=p[i].split('=');if(name===a[0])return a[1];}}
return null;},_skin=_getArgs('skin')||'default',_doc,_top=(function(w)
{try{_doc=w['top'].document;_doc.getElementsByTagName;}catch(e){_doc=w.document;return w;};if(_getArgs('self')==='true'||_doc.getElementsByTagName('frameset').length>0)
{_doc=w.document;return w;}
return w['top'];})(window),_root=_doc.documentElement,_doctype=_doc.compatMode==='BackCompat';_$doc=$(_doc),_$top=$(_top),_$html=$(_doc.getElementsByTagName('html')[0]);try{_doc.execCommand('BackgroundImageCache',false,true);}catch(e){};(function(style){if(!style)
{var head=_doc.getElementsByTagName('head')[0],link=_doc.createElement('link');link.href=_path+'skins/'+ _skin+'.css';link.rel='stylesheet';link.id='lhgdialoglink';head.insertBefore(link,head.firstChild);}})(_doc.getElementById('lhgdialoglink'));_ie6&&(function(bg){if(_$html.css(bg)!=='fixed')
{_$html.css({zoom:1,backgroundImage:'url(about:blank)',backgroundAttachment:'fixed'});}})('backgroundAttachment');var lhgdialog=function(config)
{config=config||{};var api,setting=lhgdialog.setting;for(var i in setting)
{if(config[i]===undefined)config[i]=setting[i];}
config.id=config.id||expando+ _count;api=lhgdialog.list[config.id];if(api)return api.zindex().focus();config.button=config.button||[];config.ok&&config.button.push({id:'ok',name:config.okVal,callback:config.ok,focus:config.focus});config.cancel&&config.button.push({id:'cancel',name:config.cancelVal,callback:config.cancel});lhgdialog.setting.zIndex=config.zIndex;_count++;return lhgdialog.list[config.id]=_singleton?_singleton._init(config):new lhgdialog.fn._init(config);};lhgdialog.fn=lhgdialog.prototype={constructor:lhgdialog,_init:function(config)
{var that=this,DOM,content=config.content,isIfr=_rurl.test(content);that.opener=window;that.config=config;that.DOM=DOM=that.DOM||that._getDOM();that.closed=false;that.data=config.data;if(config.icon&&!isIfr)
{config.min=false;config.max=false;DOM.icon[0].style.display='';DOM.icon[0].innerHTML='<img src="'+ config.path+'skins/icons/'+ config.icon+'" class="ui_icon_bg"/>';}
else
DOM.icon[0].style.display='none';DOM.wrap.addClass(config.skin);DOM.rb[0].style.cursor=config.resize?'se-resize':'auto';DOM.title[0].style.cursor=config.drag?'move':'auto';DOM.max[0].style.display=config.max?'inline-block':'none';DOM.min[0].style.display=config.min?'inline-block':'none';DOM.close[0].style.display=config.cancel===false?'none':'inline-block';DOM.content[0].style.padding=config.padding;that.button.apply(that,config.button);that.title(config.title).content(content,true,isIfr).size(config.width,config.height).position(config.left,config.top).time(config.time)
[config.show?'show':'hide'](true).zindex();config.focus&&that.focus();config.lock&&that.lock();that._ie6PngFix()._addEvent();_singleton=null;if(!isIfr&&config.init)
config.init.call(that,window);return that;},button:function()
{var that=this,DOM=that.DOM,buttons=DOM.buttons[0],focusButton='ui_state_highlight',listeners=that._listeners=that._listeners||{},ags=[].slice.call(arguments),i=0,item,value,id,isNewButton,button;for(;i<ags.length;i++)
{item=ags[i];value=item.name;id=item.id||value;isNewButton=!listeners[id];button=!isNewButton?listeners[id].elem:_doc.createElement('input');button.type='button';if(!listeners[id])
listeners[id]={};if(value)
button.value=value;if(item.callback)
listeners[id].callback=item.callback;if(item.focus)
{that._focus&&that._focus.removeClass(focusButton);that._focus=$(button).addClass(focusButton);that.focus();}
button[expando+'callback']=id;button.disabled=!!item.disabled;if(isNewButton)
{listeners[id].elem=button;buttons.appendChild(button);}}
buttons.style.display=ags.length?'':'none';that._ie6SelectFix();return that;},title:function(text)
{if(text===undefined)return this;var DOM=this.DOM,border=DOM.border,title=DOM.title[0];if(text===false)
{title.style.display='none';title.innerHTML='';border.addClass('ui_state_tips');}
else
{title.style.display='';title.innerHTML=text;border.removeClass('ui_state_tips');};return this;},content:function(msg,add,frm)
{if(msg===undefined)return this;var that=this,DOM=that.DOM,wrap=DOM.wrap[0],width=wrap.offsetWidth,height=wrap.offsetHeight,left=parseInt(wrap.style.left),top=parseInt(wrap.style.top),cssWidth=wrap.style.width,$content=DOM.content,loading=lhgdialog.setting.content;if(frm)
{$content[0].innerHTML=loading;that._iframe(msg.split('url:')[1]);}
else
$content.html(msg);if(!add)
{width=wrap.offsetWidth- width;height=wrap.offsetHeight- height;left=left- width/2;top=top- height/2;wrap.style.left=Math.max(left,0)+'px';wrap.style.top=Math.max(top,0)+'px';if(cssWidth&&cssWidth!=='auto')
wrap.style.width=wrap.offsetWidth+'px';that._autoPositionType();}
that._ie6SelectFix();return that;},size:function(width,height)
{var that=this,DOM=that.DOM,wrap=DOM.wrap[0],style=DOM.main[0].style;wrap.style.width='auto';if(typeof width==='number')
width=width+'px';if(typeof height==='number')
height=height+'px';style.width=width;style.height=height;if(width!=='auto')
wrap.style.width=wrap.offsetWidth+'px';that._ie6SelectFix();return that;},position:function(left,top)
{var that=this,config=that.config,wrap=that.DOM.wrap[0],style=wrap.style,isFixed=_ie6?false:config.fixed,ie6Fixed=_ie6&&config.fixed,docLeft=_$top.scrollLeft(),docTop=_$top.scrollTop(),dl=isFixed?0:docLeft,dt=isFixed?0:docTop,ww=_$top.width(),wh=_$top.height(),ow=wrap.offsetWidth,oh=wrap.offsetHeight;if(left||left===0)
{that._left=left.toString().indexOf('%')!==-1?left:null;left=that._toNumber(left,ww- ow);if(typeof left==='number')
{left=ie6Fixed?(left+=docLeft):left+ dl;left=Math.max(left,dl)+'px';}
style.left=left;}
if(top||top===0)
{that._top=top.toString().indexOf('%')!==-1?top:null;top=that._toNumber(top,wh- oh);if(typeof top==='number')
{top=ie6Fixed?(top+=docTop):top+ dt;top=Math.max(top,dt)+'px';}
style.top=top;}
if(left!==undefined&&top!==undefined)
that._autoPositionType();return that;},time:function(second,callback)
{var that=this,timer=that._timer;timer&&clearTimeout(timer);callback&&callback.call(that);if(second)
{that._timer=setTimeout(function(){that._click('cancel');},1000*second);}
return that;},show:function(args)
{this.DOM.wrap[0].style.visibility='visible';this.DOM.border.addClass('ui_state_visible');if(!args&&this._lock)
$('#ldg_lockmask',_doc)[0].style.display='';return this;},hide:function(args)
{this.DOM.wrap[0].style.visibility='hidden';this.DOM.border.removeClass('ui_state_visible');if(!args&&this._lock)
$('#ldg_lockmask',_doc)[0].style.display='none';return this;},zindex:function()
{var that=this,DOM=that.DOM,load=that._load,top=lhgdialog.focus,index=lhgdialog.setting.zIndex++;DOM.wrap[0].style.zIndex=index;top&&top.DOM.border.removeClass('ui_state_focus');lhgdialog.focus=that;DOM.border.addClass('ui_state_focus');if(load&&load.style.zIndex)
load.style.display='none';if(top&&top!==that&&top.iframe)
top._load.style.display='';return that;},focus:function()
{try{elemFocus=this._focus&&this._focus[0]||this.DOM.close[0];elemFocus&&elemFocus.focus();}catch(e){};return this;},lock:function()
{var that=this,frm,index=lhgdialog.setting.zIndex- 1,config=that.config,mask=$('#ldg_lockmask',_doc)[0],style=mask?mask.style:'',positionType=_ie6?'absolute':'fixed';if(!mask)
{frm='<iframe src="javascript:\'\'" style="width:100%;height:100%;position:absolute;'+'top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>';mask=_doc.createElement('div');mask.id='ldg_lockmask';mask.style.cssText='position:'+ positionType+';left:0;top:0;width:100%;height:100%;overflow:hidden;';style=mask.style;if(_ie6)mask.innerHTML=frm;_doc.body.appendChild(mask);}
if(positionType==='absolute')
{style.width=_$top.width();style.height=_$top.height();style.top=_$top.scrollTop();style.left=_$top.scrollLeft();that._setFixed(mask);}
style.zIndex=index;style.display='';that.zindex();that.DOM.border.addClass('ui_state_lock');that._lock=true;return that;},unlock:function()
{var that=this,config=that.config,mask=$('#ldg_lockmask',_doc)[0];if(mask&&that._lock)
{if(config.parent&&config.parent._lock)
{var index=config.parent.DOM.wrap[0].style.zIndex;mask.style.zIndex=parseInt(index,10)- 1;}
else
mask.style.display='none';that.DOM.border.removeClass('ui_state_lock');}
that._lock=false;return that;},close:function()
{var that=this,DOM=that.DOM,wrap=DOM.wrap,list=lhgdialog.list,fn=that.config.close;that.time();if(that.iframe)
{if(typeof fn==='function'&&fn.call(that,that.iframe.contentWindow,window)===false)
return that;$(that.iframe).unbind('load',that._fmLoad).attr('src',"javascript:''").remove();DOM.content.removeClass('ui_state_full');if(that._frmTimer)clearTimeout(that._frmTimer);}
else
{if(typeof fn==='function'&&fn.call(that,window)===false)
return that;}
that.unlock();if(that._maxState)
{_$html.removeClass('ui_lock_scroll');DOM.res[0].style.display='none';}
if(lhgdialog.focus===that)lhgdialog.focus=null;that._removeEvent();delete list[that.config.id];if(_singleton)
wrap.remove();else
{_singleton=that;if(that._minState)
{DOM.main[0].style.display='';DOM.buttons[0].style.display='';DOM.dialog[0].style.width='';}
DOM.wrap[0].style.cssText='left:0;top:0;';DOM.wrap[0].className='';DOM.border.removeClass('ui_state_focus');DOM.title[0].innerHTML='';DOM.content.html('');DOM.icon[0].innerHTML='';DOM.buttons[0].innerHTML='';that.hide(true)._setAbsolute();for(var i in that)
{if(that.hasOwnProperty(i)&&i!=='DOM')delete that[i];};}
that.closed=true;return that;},max:function()
{var that=this,maxSize,DOM=that.DOM,wrapStyle=DOM.wrap[0].style,mainStyle=DOM.main[0].style,rbStyle=DOM.rb[0].style,titleStyle=DOM.title[0].style,config=that.config,top=_$top.scrollTop(),left=_$top.scrollLeft();if(!that._maxState)
{_$html.addClass('ui_lock_scroll');if(that._minState)
that.min();that._or={t:wrapStyle.top,l:wrapStyle.left,w:mainStyle.width,h:mainStyle.height,d:config.drag,r:config.resize,rc:rbStyle.cursor,tc:titleStyle.cursor};wrapStyle.top=top+'px';wrapStyle.left=left+'px';maxSize=that._maxSize();that.size(maxSize.w,maxSize.h)._setAbsolute();if(_ie6&&_doctype)
wrapStyle.width=_$top.width()+'px';config.drag=false;config.resize=false;rbStyle.cursor='auto';titleStyle.cursor='auto';DOM.max[0].style.display='none';DOM.res[0].style.display='inline-block';that._maxState=true;}
else
{_$html.removeClass('ui_lock_scroll');wrapStyle.top=that._or.t;wrapStyle.left=that._or.l;that.size(that._or.w,that._or.h)._autoPositionType();config.drag=that._or.d;config.resize=that._or.r;rbStyle.cursor=that._or.rc;titleStyle.cursor=that._or.tc;DOM.res[0].style.display='none';DOM.max[0].style.display='inline-block';delete that._or;that._maxState=false;}
return that;},min:function()
{var that=this,DOM=that.DOM,main=DOM.main[0].style,buttons=DOM.buttons[0].style,dialog=DOM.dialog[0].style,rb=DOM.rb[0].style.cursor,resize=that.config.resize;if(!that._minState)
{if(that._maxState)
that.max();that._minRz={rzs:resize,btn:buttons.display};main.display='none';buttons.display='none';dialog.width=main.width;rb.cursor='auto';resize=false;that._minState=true;}
else
{main.display='';buttons.display=that._minRz.btn;dialog.width='';resize=that._minRz;rb.cursor=that._minRz.rzs?'se-resize':'auto';delete that._minRz;that._minState=false;}
that._ie6SelectFix();return that;},get:function(id,object)
{if(lhgdialog.list[id])
{if(object===1)
return lhgdialog.list[id];else
return lhgdialog.list[id].content||null;}
return null;},reload:function(win,url,callback)
{win=win||window;try{win.location.href=url?url:win.location.href;}
catch(e){url=this.iframe.src;$(this.iframe).attr('src',url);};callback&&callback.call(this);return this;},_iframe:function(url)
{var that=this,iframe,$iframe,iwin,$idoc,$ibody,iWidth,iHeight,$content=that.DOM.content,config=that.config,loading=that._load=$('.ui_loading',$content[0])[0],initCss='position:absolute;left:-9999em;border:none 0;background:transparent',loadCss='width:100%;height:100%;border:none 0;';if(config.cache===false)
{var ts=(new Date).getTime(),ret=url.replace(/([?&])_=[^&]*/,'$1_='+ ts);url=ret+((ret===url)?(/\?/.test(url)?'&':'?')+'_='+ ts:'');}
iframe=that.iframe=_doc.createElement('iframe');iframe.name=config.id;iframe.style.cssText=initCss;iframe.setAttribute('frameborder',0,0);$iframe=$(iframe);$content[0].appendChild(iframe);that._frmTimer=setTimeout(function(){$iframe.attr('src',url);},1);var load=that._fmLoad=function()
{$content.addClass('ui_state_full');var DOM=that.DOM,ltSize,lt=DOM.lt[0].offsetHeight,main=DOM.main[0].style;loading.style.cssText='display:none;position:absolute;background:#FFF;opacity:0;'+'filter:alpha(opacity=0);z-index:1;width:'+ main.width+';height:'+ main.height+';';try{iwin=that.content=iframe.contentWindow;$idoc=$(iwin.document);$ibody=$(iwin.document.body);}catch(e){iframe.style.cssText=loadCss;return;}
iWidth=config.width==='auto'?$idoc.width()+(_ie6?0:parseInt($ibody.css('marginLeft'))):config.width;iHeight=config.height==='auto'?$idoc.height():config.height;setTimeout(function(){iframe.style.cssText=loadCss;},0);if(!that._maxState)
{that.size(iWidth,iHeight).position(config.left,config.top);}
loading.style.width=main.width;loading.style.height=main.height;config.init&&config.init.call(that,iwin,_top);};that.iframe.api=that;$iframe.bind('load',load);},_getDOM:function()
{var wrap=_doc.createElement('div'),body=_doc.body;wrap.style.cssText='position:absolute;left:0;top:0;visibility:hidden;';wrap.innerHTML=dialogTpl;var name,i=0,DOM={wrap:$(wrap)},els=wrap.getElementsByTagName('*'),len=els.length;for(;i<len;i++)
{name=els[i].className.split('ui_')[1];if(name)DOM[name]=$(els[i]);};body.insertBefore(wrap,body.firstChild);return DOM;},_toNumber:function(thisValue,maxValue)
{if(typeof thisValue==='number')
return thisValue;if(thisValue.indexOf('%')!==-1)
thisValue=parseInt(maxValue*thisValue.split('%')[0]/100);return thisValue;},_maxSize:function()
{var that=this,DOM=that.DOM,wrap=DOM.wrap[0],main=DOM.main[0],maxWidth,maxHeight;maxWidth=_$top.width()- wrap.offsetWidth+ main.offsetWidth;maxHeight=_$top.height()- wrap.offsetHeight+ main.offsetHeight;return{w:maxWidth,h:maxHeight};},_ie6PngFix:function()
{if(_ie6)
{var i=0,elem,png,pngPath,runtimeStyle,path=lhgdialog.setting.path+'/skins/',list=this.DOM.wrap[0].getElementsByTagName('*');for(;i<list.length;i++)
{elem=list[i];png=elem.currentStyle['png'];if(png)
{pngPath=path+ png;runtimeStyle=elem.runtimeStyle;runtimeStyle.backgroundImage='none';runtimeStyle.filter="progid:DXImageTransform.Microsoft."+"AlphaImageLoader(src='"+ pngPath+"',sizingMethod='scale')";};}}
return this;},_ie6SelectFix:_ie6?function(){var $wrap=this.DOM.wrap,wrap=$wrap[0],expando=expando+'iframeMask',iframe=$wrap[expando],width=wrap.offsetWidth,height=wrap.offsetHeight;width=width+'px';height=height+'px';if(iframe)
{iframe.style.width=width;iframe.style.height=height;}else{iframe=wrap.appendChild(_doc.createElement('iframe'));$wrap[expando]=iframe;iframe.src="javascript:''";iframe.style.cssText='position:absolute;z-index:-1;left:0;top:0;'
+'filter:alpha(opacity=0);width:'+ width+';height:'+ height;}}:_fn,_autoPositionType:function()
{this[this.config.fixed?'_setFixed':'_setAbsolute']();},_setFixed:function(el)
{var style=el?el.style:this.DOM.wrap[0].style;if(_ie6)
{var sLeft=_$top.scrollLeft(),sTop=_$top.scrollTop(),left=parseInt(style.left)- sLeft,top=parseInt(style.top)- sTop,txt=_doctype?'this.ownerDocument.body':'this.ownerDocument.documentElement';this._setAbsolute();style.setExpression('left',txt+'.scrollLeft +'+ left);style.setExpression('top',txt+'.scrollTop +'+ top);}
else
style.position='fixed';},_setAbsolute:function()
{var style=this.DOM.wrap[0].style;if(_ie6)
{style.removeExpression('left');style.removeExpression('top');}
style.position='absolute';},_click:function(name)
{var that=this,fn=that._listeners[name]&&that._listeners[name].callback;return typeof fn!=='function'||fn.call(that,window)!==false?that.close():that;},_reset:function()
{var test=!!window.ActiveXObject,newSize,that=this,tw=_$top.width(),tt=_$top.height(),oldSize=that._winSize||tw*tt,oldWidth=that._lockDocW||tw,left=that._left,top=that._top;if(test)
{if(that._lock&&_ie6)
$('#ldg_lockmask',_doc).css({width:tw+'px',height:tt+ 17+'px'});newWidth=that._lockDocW=tw;newSize=that._winSize=tw*tt;if(oldSize===newSize)return;};if(that._maxState)
{var size=that._maxSize();that.size(size.w,size.h);}
if(test&&Math.abs(oldWidth- newWidth)===17)return;if(left||top)
that.position(left,top);},_addEvent:function()
{var resizeTimer,that=this,config=that.config,DOM=that.DOM;that._winResize=function()
{resizeTimer&&clearTimeout(resizeTimer);resizeTimer=setTimeout(function()
{that._reset();},140);};_$top.bind('resize',that._winResize);DOM.wrap.bind('click',function(event){var target=event.target,callbackID;if(target.disabled)return false;if(target===DOM.close[0])
{that._click('cancel');return false;}
else if(target===DOM.max[0]||target===DOM.res[0]||target===DOM.max_b[0]||target===DOM.res_b[0]||target===DOM.res_t[0])
{that.max();return false;}
else if(target===DOM.min[0]||target===DOM.min_b[0])
{that.min();return false;}
else
{callbackID=target[expando+'callback'];callbackID&&that._click(callbackID);}}).bind('mousedown',function(event){that.zindex();var target=event.target;if(config.drag!==false&&target===DOM.title[0]||config.resize!==false&&target===DOM.rb[0])
{_use(event);return false;}});if(config.max)
DOM.title.bind('dblclick',function(){that.max();return false;});},_removeEvent:function()
{var that=this,DOM=that.DOM;DOM.wrap.unbind();DOM.title.unbind();_$top.unbind('resize',that._winResize);}};lhgdialog.fn._init.prototype=lhgdialog.fn;lhgdialog.focus=null;lhgdialog.list={};onKeyDown=function(event)
{var target=event.target,api=lhgdialog.focus,keyCode=event.keyCode;if(!api||!api.config.esc||api.config.cancel===false)return;keyCode===27&&api._click(api.config.cancelVal);};_$doc.bind('keydown',onKeyDown);_top!=window&&$(window).bind('unload',function()
{var list=lhgdialog.list;for(var i in list)
{if(list[i])
list[i].close();}
_singleton&&_singleton.DOM.wrap.remove();_$doc.unbind('keydown',onKeyDown);$('#ldg_lockmask',_doc)[0]&&$('#ldg_lockmask',_doc).remove();$('#ldg_dragmask',_doc)[0]&&$('#ldg_dragmask',_doc).remove();});lhgdialog.setting={content:'<div class="ui_loading"><span>loading...</span></div>',title:'\u89C6\u7A97 ',button:null,ok:null,cancel:null,init:null,close:null,okVal:'\u786E\u5B9A',cancelVal:'\u53D6\u6D88',skin:'',esc:true,show:true,width:'auto',height:'auto',icon:null,path:_path,lock:false,focus:true,parent:null,padding:'10px',fixed:false,left:'50%',top:'38.2%',max:true,min:true,zIndex:1976,resize:true,drag:true,cache:true,data:null,extendDrag:false};var _use,_isSetCapture='setCapture'in _root,_isLosecapture='onlosecapture'in _root;lhgdialog.dragEvent={onstart:_fn,start:function(event)
{var that=lhgdialog.dragEvent;_$doc.bind('mousemove',that.move).bind('mouseup',that.end);that._sClientX=event.clientX;that._sClientY=event.clientY;that.onstart(event.clientX,event.clientY);return false;},onmove:_fn,move:function(event)
{var that=lhgdialog.dragEvent;that.onmove(event.clientX- that._sClientX,event.clientY- that._sClientY);return false;},onend:_fn,end:function(event)
{var that=lhgdialog.dragEvent;_$doc.unbind('mousemove',that.move).unbind('mouseup',that.end);that.onend(event.clientX,event.clientY);return false;}};_use=function(event)
{var limit,startWidth,startHeight,startLeft,startTop,isResize,api=lhgdialog.focus,config=api.config,DOM=api.DOM,wrap=DOM.wrap[0],title=DOM.title,main=DOM.main[0],_dragEvent=lhgdialog.dragEvent,clsSelect='getSelection'in _top?function(){_top.getSelection().removeAllRanges();}:function(){try{_doc.selection.empty();}catch(e){};};_dragEvent.onstart=function(x,y)
{if(isResize)
{startWidth=main.offsetWidth;startHeight=main.offsetHeight;}
else
{startLeft=wrap.offsetLeft;startTop=wrap.offsetTop;};_$doc.bind('dblclick',_dragEvent.end);!_ie6&&_isLosecapture?title.bind('losecapture',_dragEvent.end):_$top.bind('blur',_dragEvent.end);_isSetCapture&&title[0].setCapture();DOM.border.addClass('ui_state_drag');api.focus();};_dragEvent.onmove=function(x,y)
{if(isResize)
{var wrapStyle=wrap.style,style=main.style,width=x+ startWidth,height=y+ startHeight;wrapStyle.width='auto';config.width=style.width=Math.max(0,width)+'px';wrapStyle.width=wrap.offsetWidth+'px';config.height=style.height=Math.max(0,height)+'px';api._load&&$(api._load).css({width:style.width,height:style.height});}
else
{var style=wrap.style,left=x+ startLeft,top=y+ startTop;config.left=Math.max(limit.minX,Math.min(limit.maxX,left));config.top=Math.max(limit.minY,Math.min(limit.maxY,top));style.left=config.left+'px';style.top=config.top+'px';}
clsSelect();};_dragEvent.onend=function(x,y)
{_$doc.unbind('dblclick',_dragEvent.end);!_ie6&&_isLosecapture?title.unbind('losecapture',_dragEvent.end):_$top.unbind('blur',_dragEvent.end);_isSetCapture&&title[0].releaseCapture();_ie6&&api._autoPositionType();DOM.border.removeClass('ui_state_drag');};isResize=event.target===DOM.rb[0]?true:false;limit=(function(fixed)
{var ow=wrap.offsetWidth,oh=title[0].offsetHeight||20,ww=_$top.width(),wh=_$top.height(),dl=fixed?0:_$top.scrollLeft(),dt=fixed?0:_$top.scrollTop();maxX=ww- ow+ dl;maxY=wh- oh+ dt;return{minX:dl,minY:dt,maxX:maxX,maxY:maxY};})(wrap.style.position==='fixed');_dragEvent.start(event);};$(function(){setTimeout(function()
{if(_count)return;lhgdialog({left:'-9999em',time:9,fixed:false,lock:false,focus:false});},150);lhgdialog.setting.extendDrag&&(function(dragEvent){var mask=_doc.createElement('div'),style=mask.style,positionType=_ie6?'absolute':'fixed';mask.id='ldg_dragmask';style.cssText='display:none;position:'+ positionType+';left:0;top:0;width:100%;height:100%;'
+'cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF;pointer-events:none;';_doc.body.appendChild(mask);dragEvent._start=dragEvent.start;dragEvent._end=dragEvent.end;dragEvent.start=function()
{var api=lhgdialog.focus,main=api.DOM.main[0],iframe=api.iframe;dragEvent._start.apply(this,arguments);style.display='block';style.zIndex=lhgdialog.setting.zIndex+ 3;if(positionType==='absolute')
{style.width=_$top.width()+'px';style.height=_$top.height()+'px';style.left=_$doc.scrollLeft()+'px';style.top=_$doc.scrollTop()+'px';};if(iframe&&main.offsetWidth*main.offsetHeight>307200)
main.style.visibility='hidden';};dragEvent.end=function()
{var api=lhgdialog.focus;dragEvent._end.apply(this,arguments);style.display='none';if(api)api.DOM.main[0].style.visibility='visible';};})(lhgdialog.dragEvent);});$.fn.dialog=function()
{var config=arguments;this.bind('click',function(){lhgdialog.apply(this,config);return false;});return this;};window.lhgdialog=$.dialog=lhgdialog;})(this.jQuery||this.lhgcore,this);;(function($,lhgdialog,undefined){var _zIndex=function()
{return lhgdialog.setting.zIndex;};lhgdialog.alert=function(content,callback,parent)
{return lhgdialog({title:'警告',id:'Alert',zIndex:_zIndex(),icon:'alert.gif',fixed:true,lock:true,content:content,ok:true,resize:false,close:callback,parent:parent||null});};lhgdialog.confirm=function(content,yes,no,parent)
{return lhgdialog({title:'确认',id:'confirm.gif',zIndex:_zIndex(),icon:'confirm.gif',fixed:true,lock:true,content:content,resize:false,parent:parent||null,ok:function(here){return yes.call(this,here);},cancel:function(here){return no&&no.call(this,here);}});};lhgdialog.prompt=function(content,yes,value,parent)
{value=value||'';var input;return lhgdialog({title:'提问',id:'Prompt',zIndex:_zIndex(),icon:'prompt.gif',fixed:true,lock:true,parent:parent||null,content:['<div style="margin-bottom:5px;font-size:12px">',content,'</div>','<div>','<input value="',value,'" style="width:18em;padding:6px 4px" />','</div>'].join(''),init:function(){input=this.DOM.content[0].getElementsByTagName('input')[0];input.select();input.focus();},ok:function(here){return yes&&yes.call(this,input.value,here);},cancel:true});};lhgdialog.tips=function(content,time,icon,callback)
{var reIcon=icon?function(){this.DOM.icon[0].innerHTML='<img src="'+ this.config.path+'skins/icons/'+ icon+'" class="ui_icon_bg"/>';this.DOM.icon[0].style.display='';if(callback)this.config.close=callback;}:function(){this.DOM.icon[0].style.display='none';if(callback)this.config.close=callback;};return lhgdialog({id:'Tips',zIndex:_zIndex(),title:false,cancel:false,fixed:true,lock:false,resize:false}).content(content).time(time||1.5,reIcon);};})(this.jQuery||this.lhgcore,this.lhgdialog);