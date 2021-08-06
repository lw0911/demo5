/*
本代码由js代码网收集并编辑整理;
尊重他人劳动成果;
转载请保留js代码网链接 - www.jsdaima.com
*/
myFocus.extend({//*********************tqq******************
	mF_sd_tqq:function(par,F){
		var box=F.$(par.id),msgs=F.$c('msgs',box),n=F.$$_('li',msgs).length;
		//PLAY
		eval(F.switchMF(function(){
			var last=F.$$_('li',msgs)[n-1],lastH=last.offsetHeight;
			F.slide(msgs,{marginTop:lastH},800,'easeOut',function(){
				msgs.insertBefore(last,msgs.firstChild);
				F.setOpa(last,0);
				msgs.style.marginTop=0+'px';
				F.fadeIn(last);
			});
		}));
	}
});