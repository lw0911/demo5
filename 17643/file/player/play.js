//CKplayer 5.4 简易封装js，感谢作者捻灯（ckplayer.com）的辛勤劳动。
(function(a) {
	typeof a.C == "undefined" && (a.C = function() {
		var a = /msie/.test(navigator.userAgent.toLowerCase()),
		b = function(a, b) {
			if (b && typeof b == "object") for (var c in b) a[c] = b[c];
			return a
		},
		c = function(c, d, e, f, g, h) {
			var i = "file/player/play.swf",
			j = b({
				f: "file/player/url.php?u=[$pat]",
				p: 1,
				v: 85,
				i: "",
				d: "",
				u: "",
				l: "",
				r: "",
				t: 0,
				e: 3,
				a: "",
				s: 1,
				c: 0,
				x: "file/player/config.xml",
				b: "#000000",
				o: 0
			},
			j);
			arguments[1] || (d = "myvideo"),
			arguments[2] || (e = "600"),
			arguments[3] || (f = "485"),
			h = b({
				id: "ck" + d,
				width: e,
				height: f
			},
			h),
			g = b({
				allowfullscreen: "true",
				allowscriptaccess: "always"
			},
			g);
			var k, l, m, n = [];
			if (c) {
				if (typeof c == "object") {
					for (m in c) j[m] = c[m];
					for (m in j) n.push(m + "=" + encodeURIComponent(j[m]));
					j.o > 0 ? (k = "", i = j.f) : k = n.join("&")
				} else k = String(c);
				g.flashvars = k
			}
			l = "<object ",
			l += a ? 'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ': 'type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" data="' + i + '" ';
			for (m in h) l += m + '="' + h[m] + '" ';
			l += a ? '><param name="movie" value="' + i + '" />': ">";
			for (m in g) l += '<param name="' + m + '" value="' + g[m] + '" />';
			l += "</object>";
			var o = document.getElementById(String(d));
			return o ? o.innerHTML = l: document.write(l),
			l
		};
		return {
			K: function() {
				return c.apply(this, arguments)
			}
		}
	} ())
})(window)

function show_video(ykid){
	var video_obj=document.getElementById("video_show");
	var video_ct=document.getElementById("video_content");
	video_ct.innerHTML="";
	C.K({a:ykid},"video_content","480","410","skin2");
	video_obj.style.display="block";
	var top = document.documentElement.scrollTop+document.body.scrollTop;
	video_obj.style.top =(document.documentElement.clientHeight-video_obj.offsetHeight)/2+top+"px";
	video_obj.style.left =(document.documentElement.scrollWidth-video_obj.scrollWidth)/2+"px";
	popCoverDiv();
}

//关闭DIV层
function login_close(){
    document.getElementById('video_show').style.display = 'none';
    document.getElementById("cover_div").style.display = 'none';
	document.getElementById("video_content").innerHTML="";
}

function getBodySize(){
	var bodySize = [];
	with(document.documentElement) {
		bodySize[0] = (scrollWidth>clientWidth)?scrollWidth:clientWidth;
		bodySize[1] = (scrollHeight>clientHeight)?scrollHeight:clientHeight;
	}
	return bodySize;
}

function isIE(){
   return (document.all && window.ActiveXObject && !window.opera) ? true : false;
}

function popCoverDiv(){
	if (document.getElementById("cover_div")){
		document.getElementById("cover_div").style.display = 'block';
	}else{	
		var coverDiv=document.createElement('div');
		document.body.appendChild(coverDiv);
		coverDiv.id='cover_div';
		with(coverDiv.style){
			position = 'absolute';
			background = '#CCCCCC';
			left = '0px';
			top = '0px';
			var bodySize = getBodySize();
			width = bodySize[0] + 'px'
			height = bodySize[1] + 'px';
			zIndex = 0;
			if (isIE()){
				filter="Alpha(Opacity=60)";//IE逆境
			}else{
				opacity = 0.6;
			}
		}
	}
}