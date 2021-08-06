var acc_host='accwww10.53kf.com';var companyid='72057476';var hz6d_guest_ip='183.39.199.56';var ipstr='%E5%B9%BF%E4%B8%9C%E7%9C%81%E6%B7%B1%E5%9C%B3%E5%B8%82%5B%E7%94%B5%E4%BF%A1%5D';var ipContinent='%E4%BA%9A%E6%B4%B2';var in_timestamp='1503901915450';var hz6d_guest_id='10269602277005';var style_id= '1';var hz6d_alias_host='http://www10.53kf.com';
/* 
    变量：
    acc_host        acc.www4.53kf.com
    companyid       72034819
    hz6d_guest_ip   125.120.149.68
    ipstr           浙江省杭州市[电信]
    in_timestamp    time()      1445841152695
    hz6d_guest_id   66518726610
    style_id        2
    hz6d_alias_host http://www4.53kf.com


var acc_host       	= '';
var companyid    	= '';
var hz6d_guest_ip	= '';
var ipstr        	= '';
var in_timestamp    = '';
var hz6d_guest_id   = '';
var style_id        = '';
var hz6d_alias_host = '';
*/

in_timestamp = parseInt(in_timestamp/1000);
var http_pro = (document.location.protocol == 'https:')?'https://':'http://';
onliner_zdfq = 0;
(function(window, undefined) {
	var w = window,
		d = document,
		dd = d.documentElement,
		db = d.body,// db kf.php在head中时获取不到 
		head = d.head || d.getElementsByTagName("head")[0] || dd,
		isStrict = d.compatMode == "CSS1Compat",
		m = Math.max,
		ua = navigator.userAgent,
		np = navigator.platform,
		EN = w.encodeURIComponent,
		DE = w.decodeURIComponent;

	var $53 = function(id) {return d.getElementById(id) ? d.getElementById(id) : null};
	$53.version = '1.0.0';
	$53.global = {};
	$53.getKFscript = function(){
		if (typeof $53.global[''] == 'undefined' || $53.global[''] == null) {
			var scripts = document.getElementsByTagName('script'), len = scripts.length, i = 0;
			for(;i<len;i++){
				if (/kf\.php/img.test(scripts[i].src)) {
					$53.global[''] = scripts[i];
					break;
				}
			}
		}
		return $53.global[''];
	};
	$53.ready = (function(){
		var ie = !!(window.attachEvent && !window.opera),
			wk = /webkit\/(\d+)/i.test(navigator.userAgent) && (RegExp.$1 < 525),
			fn = [],
			run = function () {isReady = true; for (var i = 0; i < fn.length; i++) fn[i](); },
			d = document,
			isReady = false;
		return function (f) {
			if (d.body) {f();return;}
			if (isReady) {f();return;}
			if (!ie && !wk && d.addEventListener) return d.addEventListener('DOMContentLoaded', f, false);
			if (fn.push(f) > 1) return;
			if (ie) {
				(function () {
					if (!isReady) {	
						try { d.documentElement.doScroll('left'); run(); }
						catch (err) { setTimeout(arguments.callee, 0); }
					}
				})();
			} else if (wk) {
				var t = setInterval(function () {
					if (/^(loaded|complete)$/.test(d.readyState))
						clearInterval(t), run();
				}, 0);
			}
		};
	})();
	$53.forEach = function(enumerable, iterator, context) {
		var i, n, t;
		if (typeof iterator == "function" && enumerable) {
			// Array or ArrayLike or NodeList or String or ArrayBuffer
			n = typeof enumerable.length == "number" ? enumerable.length: enumerable.byteLength;
			if (typeof n == "number") {
				if (Object.prototype.toString.call(enumerable) === "[object Function]") {
					return enumerable;
				}
				for (i = 0; i < n; i++) {
					t = enumerable[i];
					t === undefined && (t = enumerable.charAt && enumerable.charAt(i));
					iterator.call(context || null, t, i, enumerable);
				}
				// enumerable is number
			} else if (typeof enumerable == "number") {
				for (i = 0; i < enumerable; i++) {
					iterator.call(context || null, i, i, i);
				}
				// enumerable is json
			} else if (typeof enumerable == "object") {
				for (i in enumerable) {
					if (enumerable.hasOwnProperty(i)) {
						iterator.call(context || null, enumerable[i], i, enumerable);
					}
				}
			}
		}
		return enumerable;
	};
	$53.type = (function() {
		var objectType = {},
			nodeType = [, "HTMLElement", "Attribute", "Text", , , , , "Comment", "Document", , "DocumentFragment", ],
			str = "Array Boolean Date Error Function Number RegExp String",
			retryType = {
				'object': 1,
				'function': '1'
			},
			toString = objectType.toString;
		$53.forEach(str.split(" "), function(name) {
			objectType["[object " + name + "]"] = name.toLowerCase();
			$53["is" + name] = function(unknow) {
				return $53.type(unknow) == name.toLowerCase();
			}
		});
		return function(unknow) {
			var s = typeof unknow;
			return ! retryType[s] ? s: unknow == null ? "null": unknow._type_ || objectType[toString.call(unknow)] || nodeType[unknow.nodeType] || (unknow == unknow.window ? "Window": "") || "object";
		};
	})();
    
	$53.isObject = function(unknow) {
		return typeof unknow === "function" || (typeof unknow === "object" && unknow != null)
	};
    
	$53.isPlainObject = function(unknow) {
		var key, hasOwnProperty = Object.prototype.hasOwnProperty;

		if ($53.type(unknow) != "object") {
			return false;
		}
		if (unknow.constructor && !hasOwnProperty.call(unknow, "constructor") && !hasOwnProperty.call(unknow.constructor.prototype, "isPrototypeOf")) {
			return false;
		}
		for (key in unknow) {}
		return key === undefined || hasOwnProperty.call(unknow, key);
	};
	$53.kfextend = function(depthClone, object) {
		var second, options, key, src, copy, i = 1,
		n = arguments.length,
		result = depthClone || {},
		copyIsArray, clone;
		$53.isBoolean(depthClone) && (i = 2) && (result = object || {}); ! $53.isObject(result) && (result = {});
		for (; i < n; i++) {
			options = arguments[i];
			if ($53.isObject(options)) {
				for (key in options) {
					src = result[key];
					copy = options[key];
					if (src === copy) {
						continue;
					}
					if ($53.isBoolean(depthClone) && depthClone && copy && ($53.isPlainObject(copy) || (copyIsArray = $53.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && $53.isArray(src) ? src: [];
						} else {
							clone = src && $53.isPlainObject(src) ? src: {};
						}
						result[key] = $53.kfextend(depthClone, clone, copy);
					} else if (copy !== undefined) {
						result[key] = copy;
					}
				}
			}
		}
		return result;
	}
	$53.kfextend($53, {
		$: function(id) {
			return d.getElementById(id) ? d.getElementById(id) : null;
		},
		EN: EN,
		DE: DE,
		isStrict: isStrict,
		counter:1,     //计数器
		data: function(key, value) {
			if(typeof value == 'undefined') {
				return $53.global[key] === undefined ? null : $53.global[key];
			} else {
				$53.global[key] = value;
			}
		},
		trim: function(text) {
			//return text == null ? "": (text + "").replace(new RegExp('(^[\\\\s\\\\t\\\\xa0\\\\u3000\\\\uFEFF]+)|([\\\\u3000\\\\xa0\\\\s\\\\t\\\\uFEFF]+\\x24)', 'g'), '');
            return text == null ? "": (text + "").replace(new RegExp('(^[\\s\\t\\xa0\\u3000\\uFEFF]+)|([\\u3000\\xa0\\s\\t\\uFEFF]+\x24)', 'g'), '');
		},
		getOs: function() {
			var allOs = ['iphone', 'android', 'macos', 'linux', 'win2008', 'win8', 'win7', 'winvista', 'win98', 'win2000', 'win2003', 'winxp', 'os_other'];
			var isWin = (np == "Win32") || (np == "Windows") || (np == "Win64");
			if (isWin) {
				var winos = {
					'win98': '(Win98)|(Windows 98)',
					'win2000': '(Windows NT 5.0)|(Windows 2000)',
					'winxp': '(Windows NT 5.1)|(Windows XP)',
					'win2003': '(Windows NT 5.2)|(Windows 2003)',
					'win7': '(Windows NT 6.1)|(Windows 7)',
					'winvista': '(Windows NT 6.0)|(Windows Vista)',
					'win8': '(Windows NT 6.2)|(Windows 8)',
					'win2008': '(Windows NT 6.1)|(Windows 2008)'
				};
				for (var i in winos) {
					if (winos.hasOwnProperty(i) && (new RegExp(winos[i], 'i')).test(ua)) return i;
				}
			}
			var isMac = (np == "Mac68K") || (np == "MacPPC") || (np == "Macintosh") || (np == "MacIntel");
			if (isMac) return "macos";
			if ((np == "X11") && !isWin && !isMac) return "unix";
			if ((np.toLowerCase() + ua.toLowerCase()).indexOf('iphone') > -1) return 'iphone';
			if (np.toLowerCase().indexOf("linux") > -1 && ua.toLowerCase().indexOf('android') > -1) return 'android';
			if (np.indexOf("Linux") > -1) return "linux";
			return "os_other";
		},
        isMobile: function() {
            var userAgentInfo = navigator.userAgent;
            var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"];
            var flag = 'n';
            for (var v = 0; v < Agents.length; v++) {
                if (userAgentInfo.indexOf(Agents[v]) > 0) {
                    flag = 'y';
                    break;
                }
            }
            return flag;    
        },
        getUrlParam: function() {
            var url = location.search; 
            var theRequest = new Object();
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                strs = str.split("&");
                for(var i = 0; i < strs.length; i ++) {
                    theRequest[strs[i].split("=")[0]]=strs[i].split("=")[1];
                }
            }
            return theRequest;   
        },
		getBrowser: function() {
			var browsers = {
				'sogou': 'sogou',
				'maxthon': 'maxthon',
				'opera': 'opera',
				'qq': 'tencent',
				'uc': 'uc',
				'360': '360',
				'firefox': 'firefox',
				'chrome': 'chrome',
				'safari': 'safari',
				'ie10': 'msie 10',
				'ie9': 'msie 9',
				'ie8': 'msie 8',
				'ie7': 'msie 7',
				'ie6': 'msie 6',
				'ie5': 'msie 5'
			};
			for (var i in browsers) {
				if (browsers.hasOwnProperty(i) && (new RegExp(browsers[i], 'i')).test(ua)) return i;
			}
			return 'ua_other';
		},
		getScreen: function() {
			return screen.width + "_" + screen.height;
		},
		setCookie: function(key,value,options) {
			if (!$53.isCookieKey(key)) {return;}
			options = options || {};
			var expires = options.expires;
			if ('number' == typeof options.expires) {
				expires = new Date();
				expires.setTime(expires.getTime() + options.expires*1000);
			}
			document.cookie = key + "=" + EN(value)
			+ (options.path ? "; path=" + options.path : "")
			+ (expires ? "; expires=" + expires.toUTCString() : "")
			+ ("; domain=" + (options.domain ? options.domain : location.hostname))
			+ (options.secure ? "; secure" : "");
		},
		getCookie: function(key) {
			if ($53.isCookieKey(key)) {
				var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)'), result = reg.exec(document.cookie);
				if (result) {
					var value = (result[2] === undefined || result[2] === null) ? '' : result[2];
				}
			}
			if ('string' == typeof value) {
				return DE(value);
			}
			return '';
		},
		isCookieKey:function(key) {
		//	return (new RegExp('^[^\\\\x00-\\\\x20\\\\x7f\\\\(\\\\)<>@,;:\\\\\\\\\\\\"\\\\[\\\\]\\\\?=\\\\{\\\\}\\\\/\\\\u0080-\\\\uffff]+\\x24')).test(key);
            return (new RegExp('^[^\\x00-\\x20\\x7f\\(\\)<>@,;:\\\\\\"\\[\\]\\?=\\{\\}\\/\\u0080-\\uffff]+\x24')).test(key);
		},
		setKfCookie:function(data){       //设置主域名53kf.com下的cookie   data为二维数组  [['name1','张三',0],['name2','李四',3600]]   第三个参数为过期时间  0：回话  -1：永久  时间戳：过期时间
			var _this = this;
			var url = "//tb.53kf.com/code/ck/";
			var param = new Array();
			for (var i=0;i<data.length;i++){
				var ck = data[i];
				for(var j=0;j<ck.length;j++){
				    param.push(encodeURIComponent(ck[j]));
				}
			}
			var param_str = param.join('/');
			url += param_str;
			var id = 'kf_script_'+_this.counter;
			_this.createScript(id,url);
			_this.counter++;
		},
		getWH: function() { // 获取窗口可用大小 
			return {
				W: (isStrict ? dd: d.body).clientWidth,
				H: (isStrict ? dd: d.body).clientHeight
			};
		},
		getSWH: function() { // 获取屏幕分辨率的大小
			return {
				W: screen.width,
				H: screen.height
			};
		},
		getS: function() {// 获取滚动距离 
			return {
				L: m(dd.scrollLeft, d.body.scrollLeft),
				T: m(dd.scrollTop, d.body.scrollTop)
			};
		},
		htmlDecode: function(text) {
			return text.replace(/&amp;/g, '&').replace(/&quot;/g, '\"').replace(/&#039;/g, '\'').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&douhao/g, ",").replace(/&jinghao/g, '#');
		},
		creElm: function(o, t, a, loc) {
			loc = loc || 0;
			var b = d.createElement(t || 'div'), c = (a || d.body || dd);
			for (var p in o) {
				if (!o.hasOwnProperty(p)) continue;
				p == 'style' ? b[p].cssText = o[p] : b[p] = o[p];
				if(p == 'id' && $53(o[p])) $53(o[p]).parentNode.removeChild($53(o[p]));
			}
			if (!loc) return c.insertBefore(b, c.firstChild);
			else return $53.insertAfter(b, c.lastChild);
		},
		insertAfter: function(newEl, targetEl)
		{
			var parentEl = targetEl.parentNode;
			if(parentEl.lastChild == targetEl)
			{
				return parentEl.appendChild(newEl);
			}else
			{
				return parentEl.insertBefore(newEl,targetEl.nextSibling);
			}
		},
		createScript: function(id,url){
			$53.creElm({
				'id':id == '' ? 'hz6d_script_' + Math.random() : id,
				'src':url,
				'charset':'utf-8'
			},'script',head);
		},
		before: function(html, elem){
			var frag = d.createDocumentFragment(), div=d.createElement('div');
			div.innerHTML = html;
			frag.appendChild(div);
			return (elem.parentNode || d.body || dd).insertBefore(div.firstChild.cloneNode(true), elem);
			frag = null;
		},
		after: function(html, elem){
			var frag = d.createDocumentFragment(), div=d.createElement('div');
			div.innerHTML = html;
			frag.appendChild(div);
			return $53.insertAfter(div.firstChild.cloneNode(true), elem);
			frag = null;
		},
		insertFixed: function(html){ // 图标嵌入固定模式用 //
			$53.ready(function(){
				var script = $53.getKFscript(), elem = null;
				if (script.parentNode == head) elem = $53.before(html, d.body.firstChild);
				else elem = $53.after(html, script);
			});
		},
		getTimeTo24: function(){
			//get senconds time from now to tomorrow 00:00
			var d1 = new Date(),
				d2 = new Date();
			d1.setDate(d1.getDate() + 1);
			d1.setHours(0);
			d1.setMinutes(0);
			d1.setSeconds(0);
			return (d1.getTime() - d2.getTime())/1000;
		},
		json2str : function(json,code){
			var arr = [];
			var encode =  code == 'urlencode' ? $53.EN : function(data){return data};
			for(var i in json) {
				if (json.hasOwnProperty(i)) {
					arr.push(i + '=' + encode(json[i]));
				}
			}
			return arr.join('&');
		},
		addEvent : function( obj, type, fn ) {
			if ( obj.attachEvent ) {
				obj['e'+type+fn] = fn;
				obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
				obj.attachEvent( 'on'+type, obj[type+fn] );
			} else {
				obj.addEventListener( type, fn, false );
			}
		},
		removeEvent : function( obj, type, fn ) {
			if ( obj.detachEvent ) {
				obj.detachEvent( 'on'+type, obj[type+fn] );
				obj[type+fn] = null;
			} else {
				obj.removeEventListener( type, fn, false );
			}
		}
	});
    //对外开放接口
    $53.kfextend($53, {
		$: function(id) {
			return d.getElementById(id) ? d.getElementById(id) : null;
		},
		EN: EN,
		DE: DE,
		isStrict: isStrict,
		online : 'false',
		terminal : 'pc',
		openurl : '',
		workers : [],
		groups : [],
		groupIds : [],
		popParam : '',
		apiArr : [],
		uuid : '',
		host : '',
		sign : '',
		createApi:function(){
			var api = new _53API(this.online,this.terminal,this.openurl,this.workers,this.groups,this.groupIds);
			this.apiArr.push(api);
			return api;
		},
		setOnline : function(online){
			this.online = online;
		},
		setUrl : function(url){
			this.openurl = url;
		},
		setTerminal : function(terminal){
			if(terminal == 'mobile'){
				this.terminal = 'mobile';
			}
		},
		setWorkers : function(workers){
			this.workers = workers;
		},
		setGroups : function(groups){
			this.groups = groups;
			for(var i=0;i<groups.length;i++){
				this.groupIds[i] = groups[i].group_id;
			}
		},
		getPopParam : function(){
			var re = this.popParam;
			this.popParam = '';
			return re;
		},
		setPopParam : function(param){
			this.popParam = param;
		},
		callMsg : function(){
			for(var i=0;i<this.apiArr.length;i++){
				this.apiArr[i].callMsg();
			}
		},
		setUuid:function(uuid){
			this.uuid = uuid;
		},
		getUuid:function(){
			return this.uuid;
		},
		setHost:function(host){
			this.host = host;
		},
		setSign:function(sign){
			this.sign = sign;
		},
		sendData:function(type,data){
			var _this = this;
			var id = 'kf_script_'+_this.counter;
			var url = '//'+_this.host+'/kfapi.php?company_id='+companyid+'&id='+encodeURIComponent(_this.uuid)+'&type='+encodeURIComponent(type)+'&data='+encodeURIComponent(data)+'&sign='+encodeURIComponent(_this.sign);
			_this.createScript(id,url);
			_this.counter++;
		}
	});
	function _53API(online,terminal,openurl,workers,groups,groupIds){
		this.online = online,
		this.terminal = terminal,
		this.openurl = openurl,
		this.workers = workers,
		this.groups = groups,
		this.groupIds = groupIds,
		this.paramArr = ['cmd','type','group_id','worker_id','msg_callback','mtalk','stat_id','member','id','name'],
		this.param = {},
		this.callMsg = function(){},    //来消息回调函数
		this.setPopParam = function(param){
			$53.setPopParam(param);
		},
		this.checkGroup = function(group_id){
			var _this = this;
			var groupIds = group_id.split(',');
			for(var i=0;i<groupIds.length;i++){
				if(_this.groupIds.indexOf(groupIds[i]) < 0){
					return false
				}
			}
			return true;
		},
		this.push = function(key,value){     //添加参数
			var _this = this;
			if(_this.paramArr.indexOf(key) < 0){
				return _this.reback('401','error param');
			}
			if(key == 'msg_callback'){
				if((typeof value) == 'function'){
					_this.callMsg = value;
				}else{
					return _this.reback('402','msg_callback must be a function');
				}
			}else{
				value = $53.trim(value);
				if(value == ''){
					return _this.reback('403','error value');
				}
				if(key == 'group_id' && _this.checkGroup(value) === false){
					return _this.reback('404','unknown group_id');
				}
				_this.param[key] = value;
			}
			return _this.reback('201','success',false);
		},
		this.query = function(){    //执行命令
			var _this = this;
			switch(_this.param.cmd){
				case 'kfclient':
				    if(_this.param.type != 'new' && _this.param.type != 'popup'){
				    	return _this.reback('501','error type');
				    }
				    var group_id = $53.trim(_this.param.group_id);
				    var worker_id = $53.trim(_this.param.worker_id);
				    if(group_id != '' && worker_id != '' && !(_this.terminal == 'mobile' && _this.param.type == 'popup')){
				    	return _this.reback('503','worker_id and group_id can only choose one ');
				    }
				    var zdkf_type = 1;
				    var kf = worker_id;
				    if(group_id != ''){
				    	zdkf_type = 3;
				    	kf = group_id;
				    }
				    _this.openkf(_this.param.type,zdkf_type,kf);
				    return _this.reback('201','success');
					break;
				case 'mtalk':
					var group_id = $53.trim(_this.param.group_id);
				    var worker_id = $53.trim(_this.param.worker_id);
				    if(_this.terminal != 'mobile'){
				    	return _this.reback('301','error terminal');
				    }
				    if(group_id != '' && worker_id != ''){
				    	return _this.reback('303','worker_id and group_id can only choose one ');
				    }
				    var zdkf_type = 1;
				    var kf = worker_id;
				    if(group_id != ''){
				    	zdkf_type = 3;
				    	kf = group_id;
				    }
				    _this.talk(_this.param.type,zdkf_type,kf);
				    return _this.reback('201','success');
					break;
				case 'member':
					var id = $53.trim(_this.param.id);
					var name = $53.trim(_this.param.name);
					var script_id = 'kf_script_guest';
					var url = hz6d_alias_host+'/kfapi_guest.php?company_id='+companyid+'&u_cust_id='+id+'&u_cust_name='+name;
					$53.createScript(script_id,url);
					break;	
				case 'status':
					return _this.reback('201',_this.online);
					break;
				case 'grouplist':
					return _this.reback('201',_this.groups);
					break;
				case 'workerlist':
					return _this.reback('201',_this.workers);
					break;
				case 'jzl':
				case 'mxsj':
				case 'xsgl':
					var data = $53.trim(_this.param.stat_id);
					_this.saveData(_this.param.cmd,data);
					break;
				default:
					return _this.reback('601','error cmd');
					break;
			}
		},
		this.talk = function(type,zdkf_type,kf){
			var _this = this;
			var param = kf != '' ? ('&zdkf_type='+zdkf_type+'&kf='+kf) : '';
			if(_this.terminal == 'mobile'){
				_this.setPopParam(param);
				change_kf_openurl();
			}
		},
		this.openkf = function(type,zdkf_type,kf){
			var _this = this;
			var param = kf != '' ? ('&zdkf_type='+zdkf_type+'&kf='+kf) : '';
			if(type == 'new'){
				var url = _this.openurl+param;
				if(_this.terminal == 'pc'){
					window.open(url,"_blank","height=470,width=702,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable=yes,scrollbars=no,location=no,titlebar=no");
				}else{
					location.href = url;
				}
			}else{
				if(_this.terminal == 'pc'){
					_this.setPopParam(param);
					hz6d_startReautoTimer2(3);
				}else{
					show_mobile_chat();
				}
			}
		},
		this.saveData = function(type,data){
			$53.sendData(type,data);
		},
		this.openUrl = function(url,resize){    //内部调用接口 用来点击打开咨询页面
			window.open(url,"_blank","height=470,width=702,top=200,left=200,status=yes,toolbar=no,menubar=no,resizable="+resize+",scrollbars=no,location=no,titlebar=no");
		},
		this.reback = function(code,info,clear){   //返回信息
			var _this = this;
			var data = {};
			if(code == '201'){
				data = {code:code,cmd:_this.param.cmd,info:info};
			}else{
				data = {code:code,info:info};
			}
			if(clear !== false){
				_this.param = {};    //清空参数
			}
			return data;
		}
	}
	// window.open 方法重写 
	// 支持ie/ff/chrome/safari/opera 
	var _open = window.open;
	window.open = function(sURL, sName, sFeatures, bReplace) {
		if (sURL == undefined) {
			sURL = ''
		}
		if (sName == undefined) {
			sName = ""
		}
		if (sFeatures == undefined) {
			sFeatures = ""
		}
		if (bReplace == undefined) {
			bReplace = false
		}
		if (/webCompany.php|webClientMin.php/.test(sURL)) {
			sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
		} else if ('$zdyurl' != '') {
			var _zdyurl = '$zdyurl';
			if (sURL.indexOf(_zdyurl) > -1) {
				sURL += '&timeStamp=' + new Date().getTime() + '&ucust_id=' + $53.EN($53.getCookie('ucust_id'));
			}
		}
		try{sURL = sURL.replace('&referer={hz6d_referer}',hz6d_referer);}catch(e){}
		var win = _open(sURL, sName, sFeatures, bReplace);
		return win;
	}
	window.$53 = $53;
})(window);


/* ↓图标相关函数↓ */
	
	function hz6d_html_replace(html)
	{   
	    if(html.indexOf('{hz6d_keyword}') == -1) {
           return html.replace(/%7Bhz6d_keyword%7D/gim, encodeURIComponent(hz6d_from_page_new) + "&tfrom=1"); 	       
	    }else{
	       return html.replace(/{hz6d_keyword}/gim, hz6d_from_page_new + "&tfrom=1");
	    }		
	}

	function hz6d_is_exist(html){
		if (typeof(hz6d_showContent)  == "function" && hz6d_showContent && typeof(hz6d_ID('hz6d_chatting_iframes')) != undefined){
			hz6d_showContent();
		}else{
			var new_clic = html.replace(/#liyc#/g,"\'");
			eval(decodeURIComponent(new_clic));
		}
	}
	function hz6d_is_exists(html,kf){
		if (typeof(hz6d_showContent)  == "function" && hz6d_showContent && typeof(hz6d_ID('hz6d_chatting_iframes')) != undefined){
			hz6d_showContent(kf);
		}else{
			eval(decodeURIComponent(html));
		}
	}
	// has defined <!DOCTYPE... > 

	function hasdoctype()
  {
		if (document.compatMode == "BackCompat")
		{
			ret = false;
		}
		else
		{
			ret = true;
		}
		return ret;
	}

	function detectBrowser()
	{
		var ret = "ie6"; // default
		var user_agent = navigator.userAgent;
		if (user_agent.indexOf("compatible") > -1)
		{
			if (user_agent.indexOf("MSIE 6.0") > -1)
			{
				ret = "ie6";
			}
			else if (user_agent.indexOf("MSIE 7.0") > -1)
			{
				ret = "ie7";
			}
			else if (user_agent.indexOf("MSIE 8.0") > -1)
			{
				ret = "ie8";
			}
			if (user_agent.indexOf("360") > -1)
			{
				ret = "360";
			}
		}
		else if (user_agent.indexOf("Gecko") > -1)
		{
			ret = "firefox";
		}
		if (user_agent.indexOf("TheWorld") > -1)
		{
			ret = "TheWorld";
		}
		return ret;
	}
	
	// 间距小于步进，则移动间距的距离 
	function smoothMove(start, end)
	{
		var step = Math.abs(end - start);
		var forword = end - start;
		if (step > 2)
		{
			step = Math.ceil(step * 0.2) * (forword / Math.abs(forword));
		}
		else
		{
			step = step * (forword / Math.abs(forword));
		}
		posi = start + step;
		if (step > 0)
		{
			if (posi > end) posi = end;
		}
		else
		{
			if (posi < end) posi = end;
		}
		return posi;
	}
	
	var hasdoctype = hasdoctype();
	var browser = detectBrowser();
	// 点击图标设置变量 

function setIsinvited()
{
	try
	{
		onliner_zdfq = 2;
		if (acc_autotype == 3)
		{
			document.cookie = "onliner_zdfq{$companyid}=" + onliner_zdfq;
		}
	}
	catch (e)
	{}
}
/* ↑图标相关函数↑ */

// 设置 新老访客 
function set53gidCookie(key,value,expire){
	$53.setCookie(key,value,{
		"expires":expire
	});
	switch(key){
		case '53gid2':
			// new visitor
			$53.setCookie('visitor_type','new');
			break;
		case '53gid0':
			$53.data('is_uv',1);
			break;
		case '53gid1':
			$53.data('is_rv',1);
			break;		
	}
}

if(!$53.getCookie('53gid2')) {
	set53gidCookie('53gid2',hz6d_guest_id,10*365*24*3600);
} else if($53.getCookie('53gid2')) {
	var hz6d_53gid2 = $53.getCookie('53gid2');
	// old visitor
	if(hz6d_guest_id == hz6d_53gid2){
		$53.setCookie('visitor_type','old');
    	hz6d_guest_id = $53.getCookie('53gid2'); 
	}else{
		set53gidCookie('53gid2',hz6d_guest_id,10*365*24*3600);
	}
}
// set my site uid -> crm
// set 53kf guest_id 设置UV 
if (!$53.getCookie('53gid0')){
	set53gidCookie('53gid0',hz6d_guest_id,$53.getTimeTo24());
} else if($53.getCookie('53gid2')){
	var hz6d_53gid0 = $53.getCookie('53gid0');
	if(hz6d_guest_id == hz6d_53gid0){
		$53.data('is_uv',0);
	}else{
		set53gidCookie('53gid0',hz6d_guest_id,$53.getTimeTo24());
	}
}
// 设置RV 
if (!$53.getCookie('53gid1')){
	set53gidCookie('53gid1',hz6d_guest_id,86400);
} else if($53.getCookie('53gid2')){
	var hz6d_53gid1= $53.getCookie('53gid1');
	if(hz6d_guest_id == hz6d_53gid1){
		$53.data('is_rv',0);
	}else{
		set53gidCookie('53gid1',hz6d_guest_id,86400);
	}
}

var is_revisit = 0;
if (!$53.getCookie('53revisit')) {
    $53.setCookie('53revisit',new Date().getTime(),{
		expires:10*365*24*3600,'path':'/'
	});       
} else {
    if((new Date().getTime() - $53.getCookie('53revisit')) > 86400000){
        is_revisit = 1;    
    }
}

// 获取访问的入口来源页面:搜索引擎/外部链接/直接输入 
var hz6d_from_page = $53.getCookie("53kf_"+companyid+"_keyword");
eval("var kf_"+companyid+"_keyword_ok=$53.getCookie('kf_"+companyid+"_keyword_ok');");
if (!eval("kf_"+companyid+"_keyword_ok"))
{   
    var hz6d_request = $53.getUrlParam();
    var hz6d_tglink = false;
    var search_engine_list = {'baidu':'wd=',
        'haosou':'q=',
        'sogou':'query=',
        'google':'q=',
        'youdao':'q=',
        'sm':'q='
		};
    if(hz6d_request['tgse'] && hz6d_request['tgkwd']){
	   hz6d_tglink = 'http://www.' + hz6d_request['tgse'] + '.com/s?' + search_engine_list[hz6d_request['tgse']] + decodeURIComponent(hz6d_request['tgkwd']);
    }
    if(hz6d_tglink){//是否是推广页面
        hz6d_from_page = hz6d_tglink;        
    }else{
        hz6d_from_page = document.referrer;    
    }
}
$53.data('page_referer',hz6d_from_page);
$53.setCookie("53kf_"+companyid+"_keyword",hz6d_from_page,{'path':'/'});
$53.setCookie("kf_"+companyid+"_keyword_ok",1,{'path':'/'});
hz6d_from_page_new = "&keyword=" + $53.EN(hz6d_from_page);
var acc_browser = $53.getBrowser();
var acc_os = $53.getOs();

function hz6d_sendACC() {
    var kh_status = 0;
    if(onliner_zdfq==3) { kh_status = 3; }
        var talk_page_tmp = window.location.href;
        if(talk_page_tmp.indexOf('hz6d{') != -1) {
            talk_page_tmp = talk_page_tmp.substring(0,talk_page_tmp.indexOf('hz6d{'));
        }
        var talk_page = window.encodeURIComponent(talk_page_tmp);
   // 	var kf_time = "$in_timestamp";
    	var time = new Date().getTime();
    	var curSecond = Math.floor(time/1000);
    	var page_title = document.title;								
    //	var url = "$http://$acc_host/sendacc.jsp?cmd=ACC&did=0&sid=12&company_id="+com_id+"&guest_id="+hz6d_guest_id+"&status="+kh_status+"&guest_name=&guest_ip="+ip+"&guest_ip_info="+guest_ip_info+"&from_page="+from_page+"&talk_page="+talk_page+"&kf_time="+kf_time+"&bto_id6d=-99&time="+time + '&ucust_id=' + $53.getCookie('ucust_id') + '&style=' + $style_id + '&is_mobile=n&visitor_type='+$53.getCookie('visitor_type')+'&is_uv='+$53.data('is_uv');
    	var url = http_pro + acc_host + "/sendacc.jsp?cmd=ACC&did=0&sid=12&company_id="+companyid+"&guest_id="+hz6d_guest_id+"&status="+kh_status+"&guest_name=&guest_ip="+$53.EN(hz6d_guest_ip)+"&guest_ip_info="+ipstr+"&from_page=" + $53.EN($53.getCookie("53kf_"+companyid+"_keyword")) +"&talk_page="+talk_page+"&kf_time="+in_timestamp+"&bto_id6d=-99&time="+time + '&ucust_id=' + $53.EN($53.getCookie('ucust_id')) + '&style='+style_id+'&is_mobile='+$53.isMobile()+'&visitor_type='+$53.getCookie('visitor_type')+'&is_uv='+$53.data('is_uv')+'&browser='+acc_browser+'&os='+acc_os+'&is_revisit='+is_revisit+"&page_title="+$53.EN(page_title);
  		$53.createScript("hz6d_send_acc", url);
        setTimeout("hz6d_sendACC()",20000);
}
if (companyid!=72157223)
hz6d_sendACC();

$53.data("workers",{"10191428":{"worker_id":"chh@china1baogao.com","bname":"","state":0},"10183887":{"worker_id":"lixinxi@china1baogao.com","bname":"","state":0},"10220418":{"worker_id":"kfb@china1baogao.com","bname":"张小姐","state":1},"10131934":{"worker_id":"amy@china1baogao.com","bname":"齐小姐","state":0},"10204461":{"worker_id":"kefu031@china1baogao.com","bname":"宋小姐","state":1},"10183886":{"worker_id":"wujing@china1baogao.com","bname":"","state":0},"10125603":{"worker_id":"wxy@china1baogao.com","bname":"王小姐","state":0},"10201212":{"worker_id":"linweihong@china1baogao.com","bname":"","state":0},"10070397":{"worker_id":"XXX","bname":"三胜客服","state":0}});$53.data("groups",{"110410":{"group_name":"客服部","workers":["10131934","10204461","10220418"]}});$53.data("area_shunt",{});
(function(window,undefined){
    var head=document.getElementsByTagName("head")[0];
    var kfscript1= document.createElement("script");
    kfscript1.src="http://www10.53kf.com/custom/72057476/mobile_icon_72057476_1.js?v=1501813562";
    var done1=false;
    kfscript1.onload=kfscript1.onreadystatechange=function(){
        if(!done1&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done1=true;
            kfscript1.onload=kfscript1.onreadystatechange=null;head.removeChild(kfscript1);
        }
    }
    head.appendChild(kfscript1);
    var kfscript2= document.createElement("script");
    kfscript2.src="http://www10.53kf.com/custom/72057476/mobile_invite_72057476_1.js?v=1490863899";
    var done2=false;
    kfscript2.onload=kfscript2.onreadystatechange=function(){
        if(!done2&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done2=true;
            kfscript2.onload=kfscript2.onreadystatechange=null;head.removeChild(kfscript2);
        }
    }
    head.appendChild(kfscript2);
    var kfscript3= document.createElement("script");
    kfscript3.src="http://www10.53kf.com/custom/72057476/assign_worker_72057476_1.js?v=1490263123";
    var done3=false;
    kfscript3.onload=kfscript3.onreadystatechange=function(){
        if(!done3&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){
            done3=true;
            kfscript3.onload=kfscript3.onreadystatechange=null;head.removeChild(kfscript3);
        }
    }
    head.appendChild(kfscript3);
})(window);
    
(function(window,document,talkHost,ipStr,ipContinent,companyId,styleId,undefined){
	/**
	*$53.data('workers')		工号信息
	*$53.data('groups')			分组信息
	*$53.data('page_referer')	访问来源
	*$53.data('mobile_icon')	手机图标设置
	*$53.data('mobile_invite')	手机邀请框设置
	*$53.data('assign_worker')	指定客服设置
	*$53.data('zdkf_type')		客服指定类型	1:指定工号 2:指定部门(已废弃) 3:指定分组
	*$53.data('kf')				具体指定客服
	*$53.data('is_online')		是否在线   		0:离线 1:在线
	*/
	/****************************************事件处理基类开始*************************************/
	function handler(){
		var _this = this;
		_this.app_name = '_53App';
		_this.ipStr = decodeURI(ipStr);
		_this.talkHost = talkHost;
		_this.isOnline = false;
		_this.companyId = companyId;
		_this.fromPage = $53.data('page_referer');
		_this.styleId = styleId;
	}
	handler.prototype.setSession = function(key,value){
		try{
			if(window.sessionStorage){
				sessionStorage.setItem(key,value);
			}else{
				$53.setCookie(key,value);
			}
		} catch (error) {
        	return false;
    	}
		
	}
	handler.prototype.getSession = function(key){
		try{
			if(window.sessionStorage){
				return sessionStorage.getItem(key);
			}else{
				$53.getCookie(key);
			}
		} catch (error) {
        	return false;
    	}
	}
	handler.prototype.getWorkerInfo = function(id6d){
		var workers = $53.data('workers');
		return workers[id6d];
	}
	/**
	*事件处理接口，具体功能由继承类实现
	*/
	handler.prototype.show = function(){}	//图标/邀请框显示
	handler.prototype.hide = function(){}	//图标/邀请框隐藏
	handler.prototype.talk = function(){}	//点击咨询
	handler.prototype.setMsgTip = function(obj){}	//来消息设置
	/****************************************事件处理基类结束*************************************/

	/****************************************手机图标类开始*************************************/
	function _53_mobile_icon(icon_set){
		var _this = this;
		_this.isOnline = $53.data('is_online') === '1' ? true:false;
		_this.iconElm = null;
		_this.on_is_open = icon_set.on_is_open;
		_this.on_left = icon_set.on_left;
		_this.on_top = icon_set.on_top;
		_this.on_content = icon_set.on_content;
		_this.off_is_open = icon_set.off_is_open;
		_this.off_left = icon_set.off_left;
		_this.off_top = icon_set.off_top;
		_this.off_content = icon_set.off_content;

		_this._53Api = $53.createApi();
		_this.init();
	}
	_53_mobile_icon.prototype = new handler();	//继承事件处理基类
	_53_mobile_icon.prototype.init = function(){
		var _this = this;
		_this.on_content = _this.formatContent(_this.on_content);
		_this.off_content = _this.formatContent(_this.off_content);
		_this.createIcon();
		if((_this.isOnline&&_this.on_is_open == 'yes')||(!_this.isOnline&&_this.off_is_open == 'yes')){
			_this.show();
		}
	}
	_53_mobile_icon.prototype.getOpenUrl = function(){
		var _this = this;
		var openUrl = _this.talkHost+'/m.php?cid='+_this.companyId+'&style='+_this.styleId+'&keyword='+encodeURIComponent(_this.fromPage)+'&referer='+encodeURIComponent(window.location.href)+'&guest_id='+encodeURIComponent($53.getCookie('53gid2'))+'&tpl='+encodeURIComponent($53.data('tpl'))+'&uid='+encodeURIComponent($53.data('api_uuid'))+'&u_stat_id='+encodeURIComponent($53.data('u_stat_id'))+'&talktitle='+encodeURIComponent(document.title)+'&tfrom=50';
		return openUrl;
	}
	_53_mobile_icon.prototype.show = function(){
		var _this = this;
		_this.iconElm.style.display = 'block';
		_this.setPosition();
	}
	_53_mobile_icon.prototype.hide = function(){
		var _this = this;
		_this.iconElm.style.display = 'none';
	}
	_53_mobile_icon.prototype.talk = function(params){
		var _this = this;
		_this.setSession(_this.companyId+'_invite_times',0);
		location.href = _this.getOpenUrl()+params;
	}
	_53_mobile_icon.prototype.setPosition = function(){
		var _this = this;
		var icon_left = _this.isOnline?_this.on_left:_this.off_left;
		var icon_bottom = 100-(_this.isOnline?_this.on_top:_this.off_top);
		var iconElm = _this.iconElm;
		var icon_width = iconElm.offsetWidth==0?iconElm.firstChild.offsetWidth:iconElm.offsetWidth;
		var icon_height = iconElm.offsetHeight==0?iconElm.firstChild.offsetHeight:iconElm.offsetHeight;
		var w = window.innerWidth; 
		var h= window.innerHeight; 
		if(iconElm.firstChild){
			iconElm.firstChild.style.marginLeft = '0px';
			iconElm.firstChild.style.marginTop = '0px';
			iconElm.style.height = icon_height+'px';
		}
		iconElm.style.left = (w-icon_width)*(icon_left/100)+'px';
		iconElm.style.bottom = (h-icon_height)*(icon_bottom/100)+'px';
	}
	_53_mobile_icon.prototype.createIcon = function(){
		var _this = this;
		$53.creElm({
			'style':'position:fixed;display:none;font-family:Microsoft YaHei,Arial;z-index:100000;width:auto;height:auto',
			'id':'mobile_icon_div',
			'innerHTML':_this.isOnline?_this.on_content:_this.off_content
		},'div');
		_this.iconElm = document.getElementById('mobile_icon_div');
	}
	_53_mobile_icon.prototype.formatContent = function(content){
		var _this = this;
		content = content.replace(/\.\.\//g,_this.talkHost+'/');
		content = content.replace(/class=".*?"/g,'');
		content = content.replace(/event="\{(.*?)\}"/g, function(match, contents){
				return _this.getEvent(contents.split('|'));
			}
		);
		return content;
	}
	_53_mobile_icon.prototype.setMsgTip = function(obj){
		var _this = this;
		var tipElm = obj.parentNode;
		tipElm.style.display = 'none';
		var msg_tip_count = 0;
		_this._53Api.push('msg_callback',function(){
			tipElm.style.display = 'block';
			msg_tip_count += 1;
			tipElm.innerHTML = msg_tip_count;
		});
	}
	_53_mobile_icon.prototype.getEvent = function(eventArr){
		var _this = this;
		var eventStr = '';
		switch(eventArr[0]){
			case 'close':
				eventStr = 'onclick="'+_this.app_name+'.hide(\'icon\');"';
				break;
			case 'talk':
				var params = '';
				if(eventArr[2] == 'group'){
					params += '&zdkf_type=3&kf='+eventArr[3];
				}else if(eventArr[2] == 'kf'){
					var workInfo = _this.getWorkerInfo(eventArr[3]);
					params += '&zdkf_type=1&kf='+$53.EN(workInfo['worker_id']);
				}else{
					params += '&zdkf_type='+$53.data('zdkf_type')+'&kf='+$53.EN($53.data('kf'));
				}
				eventStr = 'onclick="'+_this.app_name+'.talk(\'icon\',\''+params+'\');"';
				break;
			case 'qq':
				eventStr = 'onclick="location.href=\'mqqwpa://im/chat?chat_type=wpa&uin='+eventArr[1]+'&version=1&src_type=web&web_src=oicqzone.com\'"';
				break;
			case 'tel':
				eventStr = 'onclick="location.href=\'tel:'+eventArr[1]+'\'"';
				break;
			case 'msgTip':
				eventStr = '<img hidden src="about:blank" onerror="'+_this.app_name+'.setMsgTip(\'icon\',this)"/>';
				break;
			default:
				break;
		}
		return eventStr;
	}

	/****************************************手机图标类结束*************************************/
	
	/****************************************手机邀请框类开始***********************************/
	function _53_mobile_ivt(ivt_set){
		var _this = this;
		_this.isOnline = $53.data('is_online') === '1'?true:false;
		_this.ivtElm = null;
		_this.is_open = ivt_set.is_open;
		_this.invite_off = ivt_set.invite_off;
		_this.invite_left = ivt_set.invite_left;
		_this.invite_top = ivt_set.invite_top;
		_this.invite_area = ivt_set.invite_area;
		_this.fanfu_time = ivt_set.fanfu_time;
		_this.invite_times = ivt_set.invite_times;
		_this.page_times = ivt_set.page_times;
		_this.timeout = ivt_set.timeout;
		_this.ivt_content = ivt_set.content;
		_this.init();
	}
	_53_mobile_ivt.prototype = new handler();	//继承事件处理基类
	_53_mobile_ivt.prototype.init = function(){
		var _this = this;
		_this.ivt_content = _this.formatContent(_this.ivt_content);
		_this.createIvt();
		if(_this.getSession(_this.companyId+'_invite_times') == null){
			_this.setSession(_this.companyId+'_invite_times',_this.invite_times);
		}
		if(_this.is_open == 'yes'&&(_this.isOnline||(!_this.isOnline&&_this.invite_off == 'yes'))){
			setTimeout(function(){
				_this.show();
			},_this.timeout*1000)
		}
	}
	_53_mobile_ivt.prototype.createIvt = function(){
		var _this = this;
		$53.creElm({
			'style':'display:none;position:fixed;font-family:Microsoft YaHei,Arial;z-index:100000;',
			'id':'mobile_ivt_div',
			'innerHTML':_this.ivt_content
		},'div');
		_this.ivtElm = document.getElementById('mobile_ivt_div');
	}
	_53_mobile_ivt.prototype.getOpenUrl = function(){
		var _this = this;
		var openUrl = _this.talkHost+'/m.php?cid='+_this.companyId+'&style='+_this.styleId+'&keyword='+encodeURIComponent(_this.fromPage)+'&referer='+encodeURIComponent(window.location.href)+'&guest_id='+encodeURIComponent($53.getCookie('53gid2'))+'&tpl='+encodeURIComponent($53.data('tpl'))+'&uid='+encodeURIComponent($53.data('api_uuid'))+'&u_stat_id='+encodeURIComponent($53.data('u_stat_id'))+'&talktitle='+encodeURIComponent(document.title)+'&tfrom=51';
		return openUrl;
	}
	_53_mobile_ivt.prototype.formatContent = function(content){
		var _this = this;
		content = content.replace(/\.\.\//g,_this.talkHost+'/');
		content = content.replace(/class=".*?"/g,'');
		content = content.replace(/event="\{(.*?)\}"/g, function(match, contents){
				return _this.getEvent(contents.split('|'));
			}
		);
		return content;
	}
	_53_mobile_ivt.prototype.getEvent = function(eventArr){
		var _this = this;
		var eventStr = '';
		switch(eventArr[0]){
			case 'close':
				eventStr = 'onclick="'+_this.app_name+'.hide(\'invite\');"';
				break;
			case 'talk':
				var params = '';
				if(eventArr[2] == 'group'){
					params += '&zdkf_type=3&kf='+eventArr[3];
				}else if(eventArr[2] == 'kf'){
					var workInfo = _this.getWorkerInfo(eventArr[3]);
					params += '&zdkf_type=1&kf='+$53.EN(workInfo['worker_id']);
				}else{
					params += '&zdkf_type='+$53.data('zdkf_type')+'&kf='+$53.EN($53.data('kf'));
				}
				eventStr = 'onclick="'+_this.app_name+'.talk(\'invite\',\''+params+'\');"';
				break;
			case 'qq':
				eventStr = 'onclick="location.href=\'mqqwpa://im/chat?chat_type=wpa&uin='+eventArr[1]+'&version=1&src_type=web&web_src=oicqzone.com\'"';
				break;
			case 'tel':
				eventStr = 'onclick="location.href=\'tel:'+eventArr[1]+'\'"';
				break;
			default:
				break;
		}
		return eventStr;
	}
	_53_mobile_ivt.prototype.checkArea = function(){
		var _this = this;
		var ipStr = _this.ipStr;
		var setAreas = _this.invite_area.split(',');
		if(setAreas.length <= 0){
			return true;
		}
		var citys = [];
		for(var i in setAreas){
			citys = setAreas[i].split('.');
			if(citys.length >=1 && ipStr.indexOf(citys[1]) >=0){
				return true;
			}else if(citys.length == 1 && ipStr.indexOf(citys[0]) >=0){
				return true;
			}
		}
		return false;
	}
	_53_mobile_ivt.prototype.talk = function(params){
		var _this = this;
		_this.setSession(_this.companyId+'_invite_times',0);
		location.href = _this.getOpenUrl()+params;
	}
	_53_mobile_ivt.prototype.show = function(){
		var _this = this;
		if(_this.checkArea() === false){
			return false;
		}
		if(_this.page_times<=0){
			return false;
		}
		var invite_times = _this.getSession(_this.companyId+'_invite_times');
		if(invite_times == '' || invite_times <=0){
			return false;
		}
		_this.page_times--;
		invite_times--;
		_this.setSession(_this.companyId+'_invite_times',invite_times);
		_this.ivtElm.style.display = 'block';
		_this.setPosition();
	}
	_53_mobile_ivt.prototype.hide = function(){
		var _this = this;
		_this.ivtElm.style.display = 'none';
		if(_this.fanfu_time>0){
			setTimeout(function(){
				_this.show();
			},_this.fanfu_time*1000)
		}
	}
	_53_mobile_ivt.prototype.setPosition = function(){
		var _this = this;
		var invite_left = _this.invite_left;
		var invite_bottom = 100-_this.invite_top;
		var ivtElm = _this.ivtElm;
		var ivt_width = ivtElm.offsetWidth==0?ivtElm.firstChild.offsetWidth:ivtElm.offsetWidth;
		var ivt_height = ivtElm.offsetHeight==0?ivtElm.firstChild.offsetHeight:ivtElm.offsetHeight;
		var w = window.innerWidth; 
		var h= window.innerHeight; 
		ivtElm.firstChild.style.marginLeft = '0px';
		ivtElm.firstChild.style.marginTop = '0px';
		ivtElm.style.height = ivt_height+'px';
		ivtElm.style.left = (w-ivt_width)*(invite_left/100)+'px';
		ivtElm.style.bottom = (h-ivt_height)*(invite_bottom/100)+'px';
	}
	/****************************************手机邀请框类结束***********************************/
	
	/****************************************PC图标类开始***************************************/
	/**
	*目前只定义了接口，等新版PC图标上线后再实现具体功能
	*/	
	// function _53_pc_icon(icon_set){}
	// _53_pc_icon.prototype = new handler();	//继承事件处理基类
	/****************************************PC图标类结束***************************************/

	/****************************************PC邀请框类开始*************************************/
	/**
	*目前只定义了接口，等新版PC邀请框上线后再实现具体功能
	*/	
	// function _53_pc_ivt(ivt_set){}
	// _53_pc_ivt.prototype = new handler();	//继承事件处理基类
	/****************************************PC邀请框类结束*************************************/

	/****************************************应用主类开始*************************************/
	function _53App(){
		var _this = this;
		_this.ipStr = decodeURI(ipStr);
		_this.ipContinent = decodeURI(ipStr);
		_this.apps = [];

		_this.kfOnline = 0;			//是否有工号在线
		_this.workers = $53.data('workers');
		_this.groups = $53.data('groups');
		_this.workerStates = [];	//工号为key 在线状态为value
		_this.init();
	}
	_53App.prototype.init = function(){
		var _this = this;
		var assign_worker = $53.data('assign_worker');
		$53.data('zdkf_type',assign_worker.assignType == 'group'?'3':'1');
		$53.data('kf',assign_worker.workers == null ? '':assign_worker.workers);

		// _this.initWorkerStates();
		// _this.checkAreaShunt();
		// _this.checkOnline();

		if(_this.isMobile()){
			_this.initGroup();
			_this.initWorkerStates();
			_this.checkAreaShunt();
			_this.checkOnline();
			_this.setApp('icon',new _53_mobile_icon($53.data('mobile_icon')));
			_this.setApp('invite',new _53_mobile_ivt($53.data('mobile_invite')));
		}
		// else{
		// 	_this.apps['icon'] = new _53_pc_icon();
		// 	_this.apps['invite'] = new _53_pc_ivt();
		// }

		_this.clearCache();
	}
	_53App.prototype.initGroup = function(){
		var _this = this;
		var workers = _this.copyObject($53.data('workers'));
		var id6d = 0;
		for(var group_id in _this.groups){
			for (var i in _this.groups[group_id].workers){
				id6d = _this.groups[group_id].workers[i];
				if(workers[id6d] !== undefined){
					delete workers[id6d];
				}
			}
		}
		if(_this.isEmptyObject(workers) === false){
			_this.groups['0'] = {
				"group_name":"未分组",
				"workers":[]
			}
			for(var id6d in workers){	//未分组写入
				_this.groups['0'].workers.push(id6d);
			}
		}
	}
	_53App.prototype.checkAreaShunt = function(){
		var _this = this;
		var areaShunt = $53.data('area_shunt');
		var areaKf = [];
		var kfOnline = 0;
		var areaGroup = [];
		var groupOnline = 0;
		var areaSchedule = [];
		var scheduleOnline = 0;
		var areas = ["安徽", "北京", "重庆", "福建", "甘肃", "广东", "广西", "贵州", "海南", "河北", "黑龙江", "河南", "湖北", "湖南", "江苏", "江西", "吉林","辽宁", "宁夏", "内蒙古", "青海", "上海", "山西", "山东", "四川", "陕西", "天津", "西藏", "新疆", "云南", "浙江", "台湾", "香港", "澳门"];
		// var continents_arr = ["亚洲","欧洲","非洲","南美洲","北美洲","大洋洲","南极洲"];
		var ipAddr = "国外";
		for(var i in areas){
			if(_this.ipStr.indexOf(areas[i]) >= 0){
				ipAddr = _this.ipStr;
				break;
			}
		}
		for(var i in areaShunt){
			if(areaShunt[i]['kf_type'] == '1' && (ipAddr.indexOf(areaShunt[i]['area'])>=0 || _this.ipContinent.indexOf(areaShunt[i]['area'])>= 0)){
				areaKf.push(areaShunt[i]['kf'])
				if(kfOnline == 0 && _this.isWorkerOnline(areaShunt[i]['kf'],'worker_id')){
					kfOnline = 1;
				}
			}
			if(areaShunt[i]['kf_type'] == '2' && (ipAddr.indexOf(areaShunt[i]['area'])>=0 || _this.ipContinent.indexOf(areaShunt[i]['area'])>=0)){
				areaGroup.push(areaShunt[i]['kf'])
				if(groupOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])){
					groupOnline = 1;
				}
			}
			if(areaShunt[i]['kf_type'] == '4'){
				areaSchedule.push(areaShunt[i]['kf'])
				if(scheduleOnline == 0 && _this.isGroupOnline(areaShunt[i]['kf'])){
					scheduleOnline = 1;
				}
			}
		}
		if(kfOnline === 1){
			$53.data('zdkf_type','1');
			$53.data('kf',areaKf.join(','));
			$53.data('is_online','1');
			return;
		}
		if(groupOnline === 1){
			$53.data('zdkf_type','3');
			$53.data('kf',areaGroup.join(','));
			$53.data('is_online','1');
			return;
		}
		if(scheduleOnline === 1){
			$53.data('zdkf_type','3');
			$53.data('kf',areaSchedule.join(','));
			$53.data('is_online','1');
			return;
		}
		if(areaKf.length > 0){
			$53.data('zdkf_type','1');
			$53.data('kf',areaKf.join(','));
			$53.data('is_online','0');
			return;
		}
		if(areaGroup.length > 0){
			$53.data('zdkf_type','3');
			$53.data('kf',areaGroup.join(','));
			$53.data('is_online','0');
			return;
		}
		if(areaSchedule.length > 0){
			$53.data('zdkf_type','3');
			$53.data('kf',areaSchedule.join(','));
			$53.data('is_online','0');
			return;
		}
	}
	_53App.prototype.checkOnline = function(){
		var _this = this;
		if($53.data('is_online') !== null){		//区域分流已验证是否在线
			return;
		}
		var zdkf_type = $53.data('zdkf_type');
		var kf = $53.data('kf');
		if(kf == ''){
			$53.data('is_online',_this.kfOnline);
			return;
		}
		if(zdkf_type == '1'){
			kf = kf.split(',');
			for(var i in kf){
				if(_this.isWorkerOnline(kf[i],'worker_id')){
					$53.data('is_online','1');
					return;
				}
			}
			$53.data('is_online','0');
		}else{
			kf = kf.split(',');
			for(var i in kf){
				if(_this.isGroupOnline(kf[i])){
					$53.data('is_online','1');
					return;
				}
			}
			$53.data('is_online','0');
		}
	}
	//根据id6d或工号查询是否在线 默认以id6d查询
	_53App.prototype.isWorkerOnline = function(worker,type){
		var _this = this;
		if(type == 'worker_id'){
			return _this.workerStates[worker] == '1' ? true:false;
		}else{
			return _this.workers[worker]['state'] == '1' ? true:false;
		}
	}
	//查询分组是否在线
	_53App.prototype.isGroupOnline = function(groupId){
		var _this = this;
		var group = _this.groups[groupId];
		if(group == null){
			return false
		}
		if(typeof(group['state']) !== 'undefined'){
			return group['state'] == '1'?true:false;
		}
		var workers = group['workers'];
		for(var i in workers){
			if(_this.isWorkerOnline(workers[i])){
				_this.groups[groupId]['state'] = '1';
				return true;
			}
		}
		_this.groups[groupId]['state'] = '0';
		return false;
	}
	_53App.prototype.initWorkerStates = function(){
		var _this = this;
		var is_online = 0;
		for(var id6d in _this.workers){
			is_online = _this.workers[id6d]['state'];
			_this.workerStates[_this.workers[id6d]['worker_id']] = is_online;
			if(is_online == '1') _this.kfOnline = '1';
		}
	}
	_53App.prototype.clearCache = function(){
		var _this = this;
		_this.workers = null;
		_this.groups = null;
		_this.workerStates = null;
		$53.data('mobile_icon',null);
		$53.data('mobile_invite',null);
		$53.data('assign_worker',null);
	}
	_53App.prototype.isMobile = function(){
		var regex_match = /(nokia|iphone|android|motorola|^mot\-|softbank|foma|docomo|kddi|up\.browser|up\.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam\-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte\-|longcos|pantech|gionee|^sie\-|portalmmm|jig\s browser|hiptop|^ucweb|^benq|haier|^lct|opera\s*mobi|opera\*mini|320x320|240x320|176x220|ipad)/i;
		if(navigator.userAgent.match(regex_match)){
			return true;
		}
		return false;
	}
	_53App.prototype.getApp = function(name){
		var _this = this;
		return _this.apps[name];
	}
	_53App.prototype.setApp = function(name,app){
		var _this = this;
		_this.apps[name] = app;
	}
	_53App.prototype.copyObject = function(e) {  
		var _this = this;
		if(typeof(e) != 'object') return e;
		if(e == null) return e;
		var myNewObj = new Object();
		for(var i in e)
			myNewObj[i] = _this.copyObject(e[i]);
		return myNewObj; 
	}  
	_53App.prototype.isEmptyObject = function(e) {  
        var t;  
        for (t in e)  
            return !1;  
        return !0  
    }  


	_53App.prototype.show = function(type){
		var _this = this;
		_this.getApp(type).show();
	}
	_53App.prototype.hide = function(type){
		var _this = this;
		_this.getApp(type).hide();
	}
	_53App.prototype.talk = function(type,params){
		var _this = this;
		_this.getApp(type).talk(params);
	}
	_53App.prototype.setMsgTip = function(type,obj){
		var _this = this;
		_this.getApp(type).setMsgTip(obj);
	}
	/****************************************应用主类结束*************************************/
	function create53APP(){
		if($53.data('mobile_icon') == null || $53.data('mobile_invite') == null || $53.data('assign_worker') == null){
			setTimeout(function(){
				create53APP();
			},200);
			return;
		}
		window._53App = new _53App();
	}
	create53APP();
})(window,document,hz6d_alias_host,ipstr,ipContinent,companyid,style_id);
var head=document.getElementsByTagName("head")[0];var script=document.createElement("script");script.src="http://www10.53kf.com/kf_new.php?arg=10057476&style=1";var done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){done=true;script.onload=script.onreadystatechange=null;head.removeChild(script);}};head.appendChild(script);