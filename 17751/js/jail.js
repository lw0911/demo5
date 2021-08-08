﻿(function(name,definition){var theModule=definition(jQuery),hasDefine=typeof define==="function"&&define.amd;if(hasDefine){define(name,["jquery"],theModule)}else{(this.jQuery||this.$||this)[name]=theModule}}("jail",function($){var $window=$(window),defaults={id:"jail",timeout:1,effect:false,speed:400,triggerElement:null,offset:0,event:"load",callback:null,callbackAfterEachImage:null,placeholder:false,loadHiddenImages:false},currentStack=[],isCallbackDone=false;$.jail=function(elems,opts){var elements=elems||{},options=$.extend({},defaults,opts);$.jail.prototype.init(elements,options);if(/^(load|scroll)/.test(options.event)){$.jail.prototype.later.call(elements,options)}else{$.jail.prototype.onEvent.call(elements,options)}};$.jail.prototype.init=function(elements,options){elements.data("triggerElem",(options.triggerElement)?$(options.triggerElement):$window);if(!!options.placeholder){elements.each(function(){$(this).attr("src",options.placeholder)})}};$.jail.prototype.onEvent=function(options){var images=this;if(!!options.triggerElement){_bindEvent(options,images)}else{images.on(options.event+"."+options.id,{options:options,images:images},function(e){var $img=$(this),options=e.data.options,images=e.data.images;currentStack=$.extend({},images);_loadImage(options,$img);$(e.currentTarget).unbind(e.type+"."+options.id)})}};$.jail.prototype.later=function(options){var images=this;setTimeout(function(){currentStack=$.extend({},images);images.each(function(){_loadImageIfVisible(options,this,images)});options.event="scroll";_bindEvent(options,images)},options.timeout)};function _bindEvent(options,images){var triggerElem=false;if(!!images){triggerElem=images.data("triggerElem")}if(!!triggerElem&&typeof triggerElem.on==="function"){triggerElem.on(options.event+"."+options.id,{options:options,images:images},_bufferedEventListener);$window.on("resize."+options.id,{options:options,images:images},_bufferedEventListener)}}function _purgeStack(stack){var i=0;if(stack.length===0){return}while(true){if(i===stack.length){break}else{if($(stack[i]).attr("data-src")){i++}else{stack.splice(i,1)}}}}function _bufferedEventListener(e){var images=e.data.images,options=e.data.options;if(images.data("poller")){return}images.data("poller",setTimeout(function(){currentStack=$.extend({},images);_purgeStack(currentStack);$(currentStack).each(function(){if(this===window){return}_loadImageIfVisible(options,this,currentStack)});if(_isAllImagesLoaded(currentStack)){$(e.currentTarget).unbind(e.type+"."+options.id);return}else{if(options.event!=="scroll"){var container=(/scroll/i.test(options.event))?images.data("triggerElem"):$window;options.event="scroll";images.data("triggerElem",container);_bindEvent(options,$(currentStack))}}images.data("poller",null)},options.timeout))}function _isAllImagesLoaded(images){var bool=true;$(images).each(function(){if(!!$(this).attr("data-src")){bool=false}});return bool}function _loadImageIfVisible(options,image,images){var $img=$(image),container=(/scroll/i.test(options.event))?images.data("triggerElem"):$window,isVisible=true;if(!options.loadHiddenImages){isVisible=_isVisibleInContainer($img,container,options)&&$img.is(":visible")}if(isVisible&&_isInTheScreen(container,$img,options.offset)){_loadImage(options,$img)}}function _isInTheScreen($ct,$img,optionOffset){var is_ct_window=$ct[0]===window,ct_offset=(is_ct_window?{top:0,left:0}:$ct.offset()),ct_top=ct_offset.top+(is_ct_window?$ct.scrollTop():0),ct_left=ct_offset.left+(is_ct_window?$ct.scrollLeft():0),ct_right=ct_left+$ct.width(),ct_bottom=ct_top+$ct.height(),img_offset=$img.offset(),img_width=$img.width(),img_height=$img.height();return(ct_top-optionOffset)<=(img_offset.top+img_height)&&(ct_bottom+optionOffset)>=img_offset.top&&(ct_left-optionOffset)<=(img_offset.left+img_width)&&(ct_right+optionOffset)>=img_offset.left}function _loadImage(options,$img){var cache=new Image();cache.onload=function(){$img.hide().attr("src",cache.src);$img.removeAttr("data-src");if(options.effect){if(options.speed){$img[options.effect](options.speed)}else{$img[options.effect]()}$img.css("opacity",1);$img.show()}else{$img.show()}_purgeStack(currentStack);if(!!options.callbackAfterEachImage){options.callbackAfterEachImage.call(this,$img,options)}if(_isAllImagesLoaded(currentStack)&&!!options.callback&&!isCallbackDone){options.callback.call($.jail,options);isCallbackDone=true}};cache.onerror=function(){if(!("error" in options)){return}var args=Array.prototype.slice.call(arguments,0);args=[$img,options].concat(args);options.error.apply($.jail,args)};cache.src=$img.attr("data-src")}function _isVisibleInContainer($img,container,options){var parent=$img.parent(),isVisible=true;while(parent.length&&parent.get(0).nodeName.toUpperCase()!=="BODY"){if(parent.css("overflow")==="hidden"){if(!_isInTheScreen(parent,$img,options.offset)){isVisible=false;break}}else{if(parent.css("overflow")==="scroll"){if(!_isInTheScreen(parent,$img,options.offset)){isVisible=false;$(currentStack).data("triggerElem",parent);
options.event="scroll";_bindEvent(options,$(currentStack));break}}}if(parent.css("visibility")==="hidden"||$img.css("visibility")==="hidden"){isVisible=false;break}if(container!==$window&&parent===container){break}parent=parent.parent()}return isVisible}$.fn.jail=function(options){new $.jail(this,options);currentStack=[];return this};return $.jail}));