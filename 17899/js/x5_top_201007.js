(function(o){if(window.attachEvent){window.attachEvent("onload",o);}else{window.addEventListener("load",o,false);};})(function(){

	var d=document,

	m=d.createElement("div"),

	r=String(new Date()).split(":")[1],

	l=function(u,y){

		var s=d.createElement(y);

		if(y=="script"){s.src=u;s.type="text/javascript";s.setAttribute("charset","gb2312");}

		else{s.href=u;s.rel="stylesheet";s.type="text/css";};

		d.getElementsByTagName("head")[0].appendChild(s);

	};

	//�����޸�ost.cssΪ���Բ�Ʒ��css��ַ

	l("http://ossweb-img.qq.com/images/js/top_js/x5/ost.css?v="+r,"link");

	m.className="ost ost_bg";

	m.style.cssText="position:absolute;top:-500px;";

	m.innerHTML=['<ul class="ost_b">',

	//�����޸ĸ������ӣ���ָ����ťͳ�ƴ��루����޸�gg.js��

		'<li class="ost_tg ost_bg"><a href="http://www.htmlsucai.com" target="_blank" class="ost_blnk" onclick="pgvSendClick({hottag:\'act.title.logo\'});">��Ѷ��Ϸ</a></li>',

		'<li class="ost_gg ost_bg"><a href="http://www.htmlsucai.com" id="ost_gg" target="_blank" class="ost_blnk" onclick="pgvSendClick({hottag:\'act.title.index\'});">���ʻ</a></li>',

		'<li class="ost_i">',

			'<p class="ost_t ost_bg"><a href="http://www.htmlsucai.com" target="_blank" class="ost_lnk" onclick="pgvSendClick({hottag:\'act.title.back\'});">���ع�����ҳ</a></p>',

			'<p class="ost_gl">',

				'<a href="http://www.htmlsucai.com" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.dl\'});">��Ϸ����</a>',

				'<a href="http://www.htmlsucai.com" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.cz\'});">��ֵ��ȯ</a>',

				'<a href="http://www.htmlsucai.com" target="_blank" class="ost_lnk ost_ldc" onclick="pgvSendClick({hottag:\'act.title.vip\'});">��ͨ����</a>',

			'</p>',

		'</li>',

	'</ul>'].join("");

	d.body.appendChild(m);

	d.body.style.paddingTop="42px";

	l("http://ossweb-img.qq.com/images/js/top_js/x5/gg.js?v="+r,"script");

});/*  |xGv00|68b06be74496b803a5f3288c2f802221 */