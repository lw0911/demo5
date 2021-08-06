
jQuery.statcookie = function (name, value, options) { if (typeof value != 'undefined') { options = options || {}; if (value === null) { value = ''; options.expires = -1; } var expires = ''; if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) { var date; if (typeof options.expires == 'number') { date = new Date(); date.setTime(date.getTime() + (options.expires * 1000)); } else { date = options.expires; } expires = '; expires=' + date.toUTCString(); } var path = options.path ? '; path=' + options.path : ''; var domain = options.domain ? '; domain=' + options.domain : ''; var secure = options.secure ? '; secure' : ''; document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join(''); } else { var cookieValue = null; if (document.cookie && document.cookie != '') { var cookies = document.cookie.split(';'); for (var i = 0; i < cookies.length; i++) { var cookie = jQuery.trim(cookies[i]); if (cookie.substring(0, name.length + 1) == (name + '=')) { cookieValue = decodeURIComponent(cookie.substring(name.length + 1)); break; } } } return cookieValue; } };
jQuery.myPlugin={Client:function(){var a={ie:0,webkit:0,gecko:0,opera:0,khtml:0};var b={se360:0,se:0,maxthon:0,qq:0,tt:0,theworld:0,cometbrowser:0,greenbrowser:0,ie:0,chrome:0,netscape:0,firefox:0,opera:0,safari:0,konq:0};var c=navigator.userAgent.toLowerCase();for(var d in a){if(typeof d==='string'){var e='gecko'===d?/rv:([\w.]+)/:RegExp(d+'[ \/]([\w.]+)');if(e.test(c)){a.version=window.opera?window.opera.version():RegExp.$1;a[d]=parseFloat(a.version);a.type=d;break}}};for(var d in b){if(typeof d==='string'){var e=null;switch(d){case'se360':e=/360se(?:[ \/]([\w.]+))?/;break;case'se':e=/se ([\w.]+)/;break;case'qq':e=/qqbrowser\/([\w.]+)/;break;case'tt':e=/tencenttraveler ([\w.]+)/;break;case'safari':e=/version\/([\w.]+)/;break;case'konq':e=/konqueror\/([\w.]+)/;break;case'netscape':e=/navigator\/([\w.]+)/;break;default:e=RegExp(d+'(?:[ \/]([\w.]+))?')};if(e.test(c)){b.metversion=window.opera?window.opera.version():RegExp.$1?RegExp.$1:'';b[d]=parseFloat(b.metversion);b.type=d;break}}};return{engine:a,metshell:b}}};
function broversion(){
	var bro=jQuery.myPlugin.Client();
		t=bro.metshell.type;
		v=bro.metshell.metversion;
		//bro=t=='ie'?t+v:t;
		if(t=='ie'&&v==''){
			e=/ie(?:[ \/]([\w.]+))?/;	
			v=e.exec(navigator.userAgent.toLowerCase())[1];
		}
		bro=t=='ie'?t+v:t;
		if(typeof window.external !='undefined' && typeof window.external.twGetRunPath!='unknown'&& typeof window.external.twGetRunPath!='undefined'){
			var r=external.twGetRunPath();
			if(r&&r.toLowerCase().indexOf('360se') > -1) bro='se360';
		}
		if(t=='ie'&&typeof external.addChannel=='undefined'){
			bro='se360';
		}
	return bro;
}
function forcook(cd,u){
	cd = cd.split(',');
	cdm=cd.length;
	for(var i=0;i < cdm;i++){
		if(u!='' && cd[i]==u)return false;
	}
	return true;
}
function metstat(){
	var url=encodeURIComponent(window.location.href),lurl=encodeURIComponent(document.referrer),cookm=jQuery.statcookie('recordurl'),myDate = new Date();
	var dt = Date.UTC(myDate.getFullYear(),myDate.getMonth(),myDate.getDay(),myDate.getHours(),myDate.getMinutes(),myDate.getSeconds())/1000;
	var xt = Date.UTC(myDate.getFullYear(),myDate.getMonth(),myDate.getDay(),23,59,59)/1000;
	var ctime = xt - dt;
	//if(!cookm || forcook(cookm,url)){
		var cks = cookm?cookm:'';
		var cok = cookm?1:0;
		jQuery.statcookie('recordurl',cks+','+url, {expires: ctime, path: '/'});
		var murl ='../include/stat/stat.php?type=submit';
			murl+='&ip=125.113.130.155';
			murl+='&url='+url;
			murl+='&lurl='+lurl;
			murl+='&cook='+cok;
			murl+='&d=25--cn';
			murl+='&browser='+broversion();
			murl+='&jsoncallback=?';
		//$.ajax({ type: 'POST', url: murl });
		jQuery.getJSON(murl);
	//}
}
metstat();
			