/*首页产品展示插件*/
eval(function(E,I,A,D,J,K,L,H){function C(A){return A<62?String.fromCharCode(A+=A<26?65:A<52?71:-4):A<63?'_':A<64?'$':C(A>>6)+C(A&63)}while(A>0)K[C(D--)]=I[--A];function N(A){return K[A]==L[A]?A:K[A]}if(''.replace(/^/,String)){var M=E.match(J),B=M[0],F=E.split(J),G=0;if(E.indexOf(F[0]))F=[''].concat(F);do{H[A++]=F[G++];H[A++]=N(B)}while(B=M[G]);H[A++]=F[G]||'';return H.join('')}return E.replace(J,N)}('(z(O){O.8=O.8||{};O.8={U:{Bj:"K",BI:"current",7:L,BV:"Bt",Bc:L.M,Bx:"Bq",l:M,x:M,BO:L.B0,Bl:"swing",5:k,2:k,By:k,_:Bg,4:Bg,T:k},BH:z(O,N){A[O]=N}};R A={"Bq":z(N,O){W.6().BU();W.$(N).show();O.i()},ajax:z(N,O){W.6().first().load(W.9().BE(N).BZ("c"),O)}};z N(G,B,F){R E=W,D=O(W),C,N=G.q-M;O.X(F,z(N,A){P(O.Bo(A))D.a(N,A)});O.r(W,{j:z(H,B){R N=G.BE(H);P(v H=="string"&&H.Bi("#","")){N=G.filter("[c*="+H.Bi("#","")+"]");H=BQ.max(N.index(),L)}B=B||O.Event();B.e="_";D.y(B,[H]);P(B.Bh())p;A[F.Bx].i(E,H,z(){B.e="4";D.y(B,[H])});B.e="onStart";D.y(B,[H]);P(B.Bh())p;C=H;G.removeClass(F.BI);N.Bd(F.BI);p E},u:z(){p F},9:z(){p G},6:z(){p B},$:z(O){p E.6().o(O*F.l,(O+M)*F.l)},Bu:z(){p C},f:z(O){P(B.s().BN(":BF")||B.q<=F.x)p E;P(v O=="BB"){P(O<L)p F.5?E.j(N):E;Z P(O>N)p F.5?E.j(L):E;Z p E.j(O)}Z p E.j()},d:z(){p E.f(C+M)},Ba:z(){p E.f(C-M)},a:z(O,N){D.a(O,N);p E},Bp:z(O){D.Bp(O);p E},_:z(O){p W.a("_",O)},4:z(O){p W.a("4",O)},BK:z(O){}});R H;G.X(z(N){P(F.BV==="Bt")O(W).a({mouseenter:z(O){P(N!==C)H=BD(z(){E.j(N,O)},F.Bc*b)},mouseleave:z(){Br(H)}});Z O(W).a("j",z(O){P(N!==C)E.j(N,O);p k})});P(Bm.Bn)E.j(Bm.Bn);Z P(F.7===L||F.7>L)E.j(F.7);B.BM("K[c^=#]").j(z(N){E.j(O(W).BZ("c"),N)});P(F.By)B.S("cursor","pointer").j(z(){E.d();p k})}O.Q.8=z(C,E){R B=W.BE(v E=="BB"?E:L).g("8");P(B)p B;P(O.Bo(E))E={_:E};R A=O.r({},O.8.U),D=W.q;E=O.r(A,E);W.X(z(I){R F=O(W),A=C.jquery?C:F.Bv(C);P(!A.q)A=D==M?O(C):F.s().BM(C);R H=F.BM(E.Bj);P(!H.q){R G=BQ.ceil(A.q/E.l);for(I=M;I<=G;I++)O("<K>",{c:"javascript:void(L);",target:"_self",text:I}).appendTo(F);H=F.Bv("K")}B=new N(H,A,E);F.g("8",B)});p E.T?B:W}})(w);(z(N){R O=N.8;O.t=O.t||{};O.t.3={U:{3:Y,1:Bb,Bk:Y,T:k}};N.Q.3=z(C){P(v C=="BB")C={1:C};R B=N.r({},O.t.3.U),A;N.r(B,C);W.X(z(){R D=N(W).8();P(D)A=D;R C,E,O=Y;D.BP=z(){P(C)p;O=k;C=setInterval(z(){D.d()},B.1*b);D.d()};D.BG=z(){C=clearInterval(C)};D.Bs=z(){D.BG();O=Y};P(B.Bk)D.6().hover(z(){D.BG();Br(E)},z(){P(!O)E=BD(D.BP,B.1*b)});P(B.3)BD(D.BP,B.1*b)});p B.T?A:W}})(w);(z(O){O.Q.carousel=z(){W.X(z(){R F=O(W).8(),G=F.u(),D=F.6(),A=D.s(),B=F.9().q-M,H=D.o(L,G.l),J=D.o(B*G.l),N=G.2?J.0().V:J.0().h,E=G.2?"V":"h",C=D.q>G.x,I=L;D.S("0","relative").X(z(){I+=G.2?O(W).outerHeight(Y):O(W).outerWidth(Y)});P(C&&J.q<G.x)A.append(D.o(L,G.x).BX().Bd("BX"));O.r(F,{f:z(O){P(A.BN(":BF")||!C)p W;P(O<L){W.BC(Y);p W.j(B)}Z P(O>B){W.BC(k);p W.j(L)}Z p W.j(O)},BC:z(A){R N=A?J:H;O.X(N,z(){O(W).S(E,A?-I:I+"Bw")})},BK:z(C){R B=C?J:H;O.X(B,z(){O(W).S(E,"0px")});A.S(E,C?-N:L+"Bw")}})});p W}})(w);(z(N){N.Q.m=z(O){p W[O?"a":"y"]("m",O)};N.n.special.m={setup:z(){N.n.add(W,A,O,{})},teardown:z(){N.n.remove(W,A,O)}};R A=!N.Bf.mozilla?"BL":"Bz"+(N.Bf.version<"M.B1"?" Be":"");z O(O){switch(O.e){BJ"Be":p N.r(O.g,{BY:O.BY,BW:O.BW,BR:O.BR,BS:O.BS});BJ"Bz":N.r(O,O.g);O.BA=-O.detail/Bb;BT;BJ"BL":O.BA=O.wheelDelta/120;BT}O.e="m";p N.n.handle.i(W,O,O.BA)}N.Q.BL=z(){W.X(z(){R O=N(W).8();O.6().s().m(z(N,A){P(A<L)O.d();Z O.Ba();p k})});p W}})(w);O.8.BH("fade",z(D,N){R A=W,C=A.u(),O=A.6(),B=A.$(D);O.BU();B.fadeIn(C.BO*b,N)});O.8.BH("scroll",z(I,A){R D=W,G=D.u(),F=D.$(I),O=D.6().s(),C=D.Bu(),E=D.9().q-M,N=(C===L&&I===E)||(C===E&&I===L),H=(C===L&&I===E)?Y:k,B=G.2?{V:-F.0().V}:{h:-F.0().h};P(O.BN(":BF"))O.Bs(Y);O.animate(B,G.BO*b,G.Bl,z(){A.i();P(N)D.BK(H)})})','a|0|1|_|$|if|fn|var|css|api|cfg|top|this|each|true|else|bind|1000|href|next|type|move|data|left|call|click|false|steps|wheel|event|slice|return|length|extend|parent|plugin|getCfg|typeof|jQuery|visible|trigger|function|position|interval|vertical|autoplay|onSwitch|circular|getPanels|initIndex|switchable|getTriggers|beforeSwitch|getVisiblePanel|delta|number|adjustPosition|setTimeout|eq|animated|pause|addEffect|currentCls|case|resetPosition|mousewheel|find|is|speed|play|Math|pageX|pageY|break|hide|triggerType|clientY|clone|clientX|attr|prev|3|delay|addClass|mousemove|browser|null|isDefaultPrevented|replace|triggers|autopause|easing|location|hash|isFunction|unbind|default|clearTimeout|stop|mouse|getIndex|children|px|effect|panelSwitch|DOMMouseScroll|7|9'.split('|'),108,117,/[\w\$]+/g,{},{},[]));
/*模板定义函数*/
function proxy(dom,lei,type){
	if(dom){
		dom.hover(function(){
			$(this).addClass(lei);
			if(type==1){
				if($(this).find('.sub').length>0){
					$(this).find('.sub').show()
				}
				else{
					$(this).addClass(lei+'er')
				}
			}
		}
		,function(){
			$(this).removeClass(lei);
			if(type==1){
				if($(this).find('.sub').length>0){
					$(this).find('.sub').hide()
				}
				else{
					$(this).removeClass(lei+'er');
				}
			}
		})
	}
}
function navnow(dom,part2,part3,part4,none){
	var li=dom.find(".navnow dt[id*='part2_']");
	var dl=li.next("dd.sub");
	if(none)dl.hide();
	if(part2.next("dd.sub").length>0)part2.next("dd.sub").show();
	if(part3.length>0)part3.parent('dd.sub').show();
	if(part4.length>0)part4.parent('dd.sub').show();
	li.bind('click',function(){
		var fdl=$(this).next("dd.sub");
		if(fdl.length>0){
			fdl.is(':hidden')?fdl.show():fdl.hide();
			fdl.is(':hidden')?$(this).removeClass('launched'):$(this).addClass('launched');
		}
	})
}
function partnav(c2,c3,c4,jsok){
	var part2=$('#part2_'+c2);
	var part3=$('#part3_'+c3);
	var part4=$('#part4_'+c4);
	if(part2)part2.addClass('on');
	if(part3)part3.addClass('on');
	if(part4)part4.addClass('on');
	if(jsok!=0)navnow($('#sidebar'),part2,part3,part4);
}
function productlist(dom,l){
	var w=dom.width();
	var p=((w/l)-dom.find('li').width())/2;
	if(p<0)p=0;
	dom.find('li').css("margin","0px "+p+"px");
}
/*自定义函数结束*/
//以下为执行代码
//$("nav li:first").addClass('myCorner').attr({'data-corner':'tl 5px'});//圆角
//$("nav li:last").addClass('myCorner').attr({'data-corner':'tr 5px'});//圆角
$("#web_logo,nav ul li a").bind("focus",function(){if(this.blur)this.blur();});//IE
proxy($("nav ul li[class!='line']"),'hover');//鼠标经过导航
if(module==10001){
	$('.dl-jqrun dl').each(function(){//首页成功案例区块排版
		var dt = $(this).find('dt');
		var dd = $(this).find('dd');
		var wt = $(this).width()-dt.width();
			dd.width(wt);
		var ht = dt.height()>dd.height()?dt.height():dd.height();
			dd.height(ht);
			dt.height(ht);
	});
	metHeight($(".contour-1"));//等高
	metHeight($(".contour-2"));
	//产品展示
	if($("#indexcar ol li").size()>0){
		$("#indexcar li h3").width($("#indexcar li img").width());
		$("#indexcar li").height($("#indexcar li").height());
		$("#indexcar ol").height($("#indexcar li").height());
		$("#indexcar").height($("#indexcar ol").height());
		var listnum = $("#indexcar").attr('data-listnum');
		productlist($("#indexcar"),listnum);
		$("#trigger").switchable("#indexcar > ol > li", {
			triggerType: "click",effect: "scroll",steps:1,visible:listnum
		}).autoplay().carousel();
		var api4 = $("#trigger").switchable();
		$("#car_next").click(function(){api4.next();});
		$("#car_prev").click(function(){api4.prev();});
	}
}else{
	var csnow=$("#sidebar").attr('data-csnow'),class3=$("#sidebar").attr('data-class3'),class4=$("#sidebar").attr('data-class4'),jsok=$("#sidebar").attr('data-jsok');
	partnav(csnow,class3,class4,jsok);//侧栏导航点击展开隐藏
}