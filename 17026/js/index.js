/*
 * JavaScript For Long Cai index
 * 
 * @author : LJay
 * @Email : ljay88@vip.qq.com
 * @date : 20141023
 *
 *  Copyright 2014 longcai.com
 */
if(!!document.createElement("canvas").getContext){$.getScript("templates/default/js/cav.js",function(){var t={width:1.5,height:1.5,depth:10,segments:12,slices:6,xRange:0.8,yRange:0.1,zRange:1,ambient:"#525252",diffuse:"#FFFFFF",speed:0.0002};var G={count:2,xyScalar:1,zOffset:100,ambient:"#18bbff",diffuse:"#00486b",speed:0.001,gravity:1200,dampening:0.95,minLimit:10,maxLimit:null,minDistance:20,maxDistance:400,autopilot:false,draw:false,bounds:CAV.Vector3.create(),step:CAV.Vector3.create(Math.randomInRange(0.2,1),Math.randomInRange(0.2,1),Math.randomInRange(0.2,1))};var m="canvas";var E="svg";var x={renderer:m};var i,n=Date.now();var L=CAV.Vector3.create();var k=CAV.Vector3.create();var z=document.getElementById("banner1");var w=document.getElementById("banner1-con");var D,I,h,q,y;var g;var r;var canvas_h=z.offsetWidth*990/1900;function C(){F();p();s();B();v();K(z.offsetWidth,canvas_h);o()}function F(){g=new CAV.CanvasRenderer();H(x.renderer)}function H(N){if(D){w.removeChild(D.element)}switch(N){case m:D=g;break}D.setSize(z.offsetWidth,canvas_h);w.appendChild(D.element)}function p(){I=new CAV.Scene()}function s(){I.remove(h);D.clear();q=new CAV.Plane(t.width*D.width,t.height*D.height,t.segments,t.slices);y=new CAV.Material(t.ambient,t.diffuse);h=new CAV.Mesh(q,y);I.add(h);var N,O;for(N=q.vertices.length-1;N>=0;N--){O=q.vertices[N];O.anchor=CAV.Vector3.clone(O.position);O.step=CAV.Vector3.create(Math.randomInRange(0.2,1),Math.randomInRange(0.2,1),Math.randomInRange(0.2,1));O.time=Math.randomInRange(0,Math.PIM2)}}function B(){var O,N;for(O=I.lights.length-1;O>=0;O--){N=I.lights[O];I.remove(N)}D.clear();for(O=0;O<G.count;O++){N=new CAV.Light(G.ambient,G.diffuse);N.ambientHex=N.ambient.format();N.diffuseHex=N.diffuse.format();I.add(N);N.mass=Math.randomInRange(0.5,1);N.velocity=CAV.Vector3.create();N.acceleration=CAV.Vector3.create();N.force=CAV.Vector3.create()}}function K(O,N){D.setSize(O,N);CAV.Vector3.set(L,D.halfWidth,D.halfHeight);s()}function o(){i=Date.now()-n;u();M();requestAnimationFrame(o)}function u(){var Q,P,O,R,T,V,U,S=t.depth/2;CAV.Vector3.copy(G.bounds,L);CAV.Vector3.multiplyScalar(G.bounds,G.xyScalar);CAV.Vector3.setZ(k,G.zOffset);for(R=I.lights.length-1;R>=0;R--){T=I.lights[R];CAV.Vector3.setZ(T.position,G.zOffset);var N=Math.clamp(CAV.Vector3.distanceSquared(T.position,k),G.minDistance,G.maxDistance);var W=G.gravity*T.mass/N;CAV.Vector3.subtractVectors(T.force,k,T.position);CAV.Vector3.normalise(T.force);CAV.Vector3.multiplyScalar(T.force,W);CAV.Vector3.set(T.acceleration);CAV.Vector3.add(T.acceleration,T.force);CAV.Vector3.add(T.velocity,T.acceleration);CAV.Vector3.multiplyScalar(T.velocity,G.dampening);CAV.Vector3.limit(T.velocity,G.minLimit,G.maxLimit);CAV.Vector3.add(T.position,T.velocity)}for(V=q.vertices.length-1;V>=0;V--){U=q.vertices[V];Q=Math.sin(U.time+U.step[0]*i*t.speed);P=Math.cos(U.time+U.step[1]*i*t.speed);O=Math.sin(U.time+U.step[2]*i*t.speed);CAV.Vector3.set(U.position,t.xRange*q.segmentWidth*Q,t.yRange*q.sliceHeight*P,t.zRange*S*O-S);CAV.Vector3.add(U.position,U.anchor)}q.dirty=true}function M(){D.render(I)}function J(O){var Q,N,S=O;var P=function(T){for(Q=0,l=I.lights.length;Q<l;Q++){N=I.lights[Q];N.ambient.set(T);N.ambientHex=N.ambient.format()}};var R=function(T){for(Q=0,l=I.lights.length;Q<l;Q++){N=I.lights[Q];N.diffuse.set(T);N.diffuseHex=N.diffuse.format()}};return{set:function(){P(S[0]);R(S[1])}}}function v(){window.addEventListener("resize",j)}function A(N){CAV.Vector3.set(k,N.x,D.height-N.y);CAV.Vector3.subtract(k,L)}function j(N){K(z.offsetWidth,canvas_h);M()}C();$("canvas").css("margin-top","-100px")})};
$(function(){
	//导航
	$("#nav>ul>li>a").hover(function(){
		$(this).children("div").stop(true).animate({marginTop:'-22px'},300)
		},function(){
			$(this).children("div").stop(true).animate({marginTop:0},300)
			})
	//主营
	$(".busi_list01").hover(function(){
		var $a = $(this).children('.busi_pic01').find("a"),
			class_n = $a.attr('data-class');
		$a.addClass(class_n+'h'+'  busi_list01img');
		if(navigator.userAgent.indexOf("MSIE")>0){
			if(navigator.userAgent.indexOf("MSIE 9.0")>0){
				$a.animate({borderSpacing:-360},{step:function(now,fx){
					$(this).css('-ms-transform','rotate('+now+'deg)');
					}})
				}
			}
		},function(){
			var $a = $(this).children('.busi_pic01').find("a"),
				class_n = $a.attr('data-class');
			$a.removeClass(class_n+'h'+'  busi_list01img');
			})
	//实力展示
	var lc={useEasing:!0,useGrouping:!0,separator:",",decimal:"."};$.getScript("templates/default/js/countUp.min.js",function(a){cachecount=a;var count_num1=$("#count_1").attr("data-num"),count_num2=$("#count_2").attr("data-num"),count_num3=$("#count_3").attr("data-num"),count_num4=$("#count_4").attr("data-num"),d=new countUp("count_1",0,count_num1,0,2.5,lc),e=new countUp("count_2",0,count_num2,0,2.5,lc),f=new countUp("count_3",0,count_num3,0,2.5,lc),g=new countUp("count_4",0,count_num4,0,2.5,lc);h=function(){d.start(),e.start(),f.start(),g.start()};k=function(){d.reset(),e.reset(),f.reset(),g.reset()};var I=null;$(".stre_video").scrollfire({offset:0,topOffset:100,bottomOffset:100,onBottomIn:function(){I=setTimeout(function(){h()},500)}})});
	//我们的客户
	$(window).scroll(function(){
		var docViewTop = $(window).scrollTop(),
			win_h = $(window).height();
		/*if(docViewTop>554){
			$('.pf').show(2000);
			}else{
				$('.pf').hide(2000);
				}*/
		var $news_listcon = $("#news_listcon");
		if(docViewTop <= $news_listcon.offset().top + $news_listcon.outerHeight(true) && docViewTop+win_h >= $news_listcon.offset().top + $news_listcon.outerHeight(true)){
			$news_listcon.find('li').eq(0).addClass('animated bounceInLeft');
			$news_listcon.find('li').eq(1).addClass('animated bounceInRight');
			$news_listcon.find('li').eq(2).addClass('animated bounceInLeft');
			}else{
				$news_listcon.find('li').eq(0).removeClass('animated bounceInLeft');
				$news_listcon.find('li').eq(1).removeClass('animated bounceInRight');
				$news_listcon.find('li').eq(2).removeClass('animated bounceInLeft');
				}

		var $cus_bg = $("#cus_bg"),
			$li = $cus_bg.find('li'),
			len = $li.length,
			customerindex = -1;
		if(docViewTop > $("#customer").offset().top-$("#customer").outerHeight(true)/2 && docViewTop < $("#customer").offset().top+$("#customer").outerHeight(true)){
			customer(customerindex);
			}else{
				$("#customer_ul>li").find('div').stop(true).css("margin-bottom",'0px');
				}
		function customer(k){
			k = k + 1;
			$li.eq(k).find('div').stop(true).animate({marginBottom:'109px'},60,function(){customer(k)})
			if(k>28){return}
			}
		var $contactus = $("#contactus"),
			contactus_h = $contactus.outerHeight(true)/2;
		if(docViewTop > $contactus.offset().top-contactus_h){
			$contactus.children().addClass('animated scaleSmall');
			}else{
				$contactus.children().removeClass('animated scaleSmall');
				}
		if(docViewTop > $("#other_bg").offset().top-$("#other_bg").outerHeight(true)/2 && docViewTop < $("#other_bg").offset().top+$("#other_bg").outerHeight(true)){
			var $other_bg_li = $("#other_bg>div>ul>li");
			$other_bg_li.eq(0).addClass('animated bounceInLeft');
			$other_bg_li.eq(1).addClass('animated bounceInLeft');
			$other_bg_li.eq(2).addClass('animated bounceInLeft');
			$other_bg_li.eq(3).addClass('animated bounceInRight');
			$other_bg_li.eq(4).addClass('animated bounceInRight');
			$other_bg_li.eq(5).addClass('animated bounceInRight');
			}else{
				var $other_bg_li = $("#other_bg>div>ul>li");
				$other_bg_li.eq(0).removeClass('animated bounceInLeft');
				$other_bg_li.eq(1).removeClass('animated bounceInLeft');
				$other_bg_li.eq(2).removeClass('animated bounceInLeft');
				$other_bg_li.eq(3).removeClass('animated bounceInRight');
				$other_bg_li.eq(4).removeClass('animated bounceInRight');
				$other_bg_li.eq(5).removeClass('animated bounceInRight');
				}
		if(docViewTop > $("#other_bg").offset().top-$("#other_bg").outerHeight(true)/3 && docViewTop < $("#other_bg").offset().top+$("#other_bg").outerHeight(true)){
			var $other_bg_li = $("#other_bg>div>ul>li");
			$other_bg_li.eq(6).addClass('animated bounceInLeft');
			$other_bg_li.eq(7).addClass('animated bounceInLeft');
			$other_bg_li.eq(8).addClass('animated bounceInLeft');
			}else{
				var $other_bg_li = $("#other_bg>div>ul>li");
				$other_bg_li.eq(6).removeClass('animated bounceInLeft');
				$other_bg_li.eq(7).removeClass('animated bounceInLeft');
				$other_bg_li.eq(8).removeClass('animated bounceInLeft');
				}
		/*分布与实力*/
            var $distr = $("#distr"),
			distr_h = $distr.height();
		if ($distr.offset().top + distr_h*3/4 >= docViewTop && docViewTop + win_h - (distr_h/4) >= $distr.offset().top + distr_h/4){
			map_animate('#map_line1',180);
			map_animate('#map_line2',173);
			map_animate('#map_line3',235);
			map_animate('#map_line4',240);
			map_animate('#map_line5',301);
			map_animate('#map_line6',313);
			map_animate('#map_line7',310);
			$('#map').stop(true).animate({top:'374px',opacity:1},500,function(){
					map_animate_pro('#pro_sx',500);
					map_animate_pro('#pro_dl',670);
					map_animate_pro('#pro_hlj',875);
					
					map_animate_sxcity('#city_ty',600);
					map_animate_sxcity('#city_xz',600);
					map_animate_sxcity('#city_cz',515);
					map_animate_sxcity('#city_lf',457);
					map_animate_sxcity('#city_dt',470);
					map_animate_sxcity('#city_yc',400);
					map_animate_sxcity('#city_ll',410);
					map_animate_sxcity('#city_sz',370);
					map_animate_sxcity('#city_jc',310);
					map_animate_sxcity('#city_yq',350);
					map_animate_sxcity('#city_jz',465);
					
					map_animate_dlcity('#city_as',680);
					map_animate_dlcity('#city_yk',690);
					map_animate_dlcity('#city_fx',705);
					map_animate_dlcity('#city_pj',765);
					map_animate_dlcity('#city_ly',720);
					
					map_animate_hljcity('#city_harbin',795);
					map_animate_hljcity('#city_mdj',890);
					map_animate_hljcity('#city_dq',780);
					map_animate_hljcity('#city_jms',860);
					map_animate_hljcity('#city_hg',880);
					map_animate_hljcity('#city_jx',950);
					map_animate_hljcity('#city_hh',920);
					map_animate_hljcity('#city_sys',910);
					map_animate_hljcity('#city_qqhr',970);
					map_animate_hljcity('#city_ych',945);
					map_animate_hljcity('#city_sh',960);
				setTimeout(function(){
					$('#red_flag1').stop(true).animate({bottom:'180px'},100,function(){
						$('#red_flag2').stop(true).animate({bottom:'215px'},100,function(){
							$('#red_flag3').stop(true).animate({bottom:'300px'},100)
							})
						})
					},2000);
				})
			}else{
				map_reset();
				}
		function map_animate(o,v){
			$(o).stop(true).animate({bottom:v+'px',opacity:1},500);
			}
		function map_animate_pro(o,v){
			$(o).stop(true).animate({left:v+'px'},500);
			}
		function map_animate_sxcity(o,v){
			$(o).stop(true).animate({left:v+'px'},700);
			}
		function map_animate_dlcity(o,v){
			$(o).stop(true).animate({left:v+'px'},900);
			}
		function map_animate_hljcity(o,v){
			$(o).stop(true).animate({left:v+'px'},1100);
			}
		function map_reset(){
			$('#map').css({'top':'-340px','opacity':0});
			$('.point_white_line').css('bottom','-380px');
			$('.red_flag').css('bottom','-100px');
			$('.map_province').css('left','-120px');
			$('.map_city').css('left','1350px');
			}
		/*分布与实力End*/
		})
	$("#customer_ul>li").hover(function(){
		$(this).find('img').addClass('animated flipInY');
		},function(){
			$(this).find('img').removeClass('animated flipInY');
			})
	$("a[href*=#index_top],a[href*=#index_busi],a[href*=#index_stre],a[href*=#index_news],a[href*=#index_case],a[href*=#index_other],a[href*=#index_honor],a[href*=#distr],a[href*=#customer],a[href*=#index_contactus]").click(function(){
        if (location.pathname.replace(/^\//, ') == this.pathname.replace(/^\//, ') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $("[name=' + this.hash.slice(1) + ']");
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $("html,body").animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });
	/*荣誉*/
	//滚动特效类定义
	var $sidescroll=(function(){var $rows=$("#ss-container > div.ss-row"),$rowsViewport,$rowsOutViewport,$win=$(window),winSize={},anim=false,scollPageSpeed=2000,scollPageEasing="easeInOutExpo",hasPerspective=false,perspective=hasPerspective&&Modernizr.csstransforms3d,init=function(){getWinSize();initEvents();defineViewport();setViewportRows();if(perspective){$rows.css({"-webkit-perspective":600,"-webkit-perspective-origin":"50% 0%"})}$rowsViewport.find("a.ss-circle").addClass("ss-circle-deco");placeRows()},defineViewport=function(){$.extend($.expr[":"],{inviewport:function(el){if($(el).offset().top<winSize.height){return true}return false}})},setViewportRows=function(){$rowsViewport=$rows.filter(":inviewport");$rowsOutViewport=$rows.not($rowsViewport)},getWinSize=function(){winSize.width=$win.width();winSize.height=$win.height()},initEvents=function(){$(window).on({"resize.Scrolling":function(event){getWinSize();setViewportRows();$rows.find("a.ss-circle").removeClass("ss-circle-deco");$rowsViewport.each(function(){$(this).find("div.ss-left").css({left:"0%"}).end().find("div.ss-right").css({right:"0%"}).end().find("a.ss-circle").addClass("ss-circle-deco")})},"scroll.Scrolling":function(event){if(anim){return false}anim=true;setTimeout(function(){placeRows();anim=false},10)}})},placeRows=function(){var winscroll=$win.scrollTop(),winCenter=winSize.height/1.4+winscroll;$rowsOutViewport.each(function(i){var $row=$(this),$rowL=$row.find("div.ss-left"),$rowR=$row.find("div.ss-right"),rowT=$row.offset().top;if(rowT>winSize.height+winscroll){if(perspective){$rowL.css({"-webkit-transform":"translate3d(-75%, 0, 0) rotateY(-90deg) translate3d(-75%, 0, 0)","opacity":0});$rowR.css({"-webkit-transform":"translate3d(75%, 0, 0) rotateY(90deg) translate3d(75%, 0, 0)","opacity":0})}else{$rowL.css({left:"-50%"});$rowR.css({right:"-50%"})}}else{var rowH=$row.height(),factor=(((rowT+rowH/2)-winCenter)/(winSize.height/2+rowH/2)),val=Math.max(factor*50,0);if(val<=0){if(!$row.data("pointer")){$row.data("pointer",true);$row.find(".ss-circle").addClass("ss-circle-deco")}}else{if($row.data("pointer")){$row.data("pointer",false);$row.find(".ss-circle").removeClass("ss-circle-deco")}}if(perspective){var t=Math.max(factor*75,0),r=Math.max(factor*90,0),o=Math.min(Math.abs(factor-1),1);$rowL.css({"-webkit-transform":"translate3d(-"+t+"%, 0, 0) rotateY(-"+r+"deg) translate3d(-"+t+"%, 0, 0)","opacity":o});$rowR.css({"-webkit-transform":"translate3d("+t+"%, 0, 0) rotateY("+r+"deg) translate3d("+t+"%, 0, 0)","opacity":o})}else{$rowL.css({left:-val+"%"});$rowR.css({right:-val+"%"})}}})};return{init:init}})();$sidescroll.init();var H=$(window).width()/2-80;if(H){$(".ss-left").css("width",H);$(".ss-right").css("width",H-10)}$(window).resize(function(e){var H=$(window).width()/2-80;if(H){$(".ss-left").css("width",H);$(".ss-right").css("width",H-10)}});
	/*荣誉 End*/
	/*banner特效*/
	var $banner_li=$("#banner>ul>li"),nav_s ='',banner_h=$banner_li.eq(0).height(),banner_len=$banner_li.length,banner_i=0,time=8000,auto=null,play=function(){moving(banner_i);banner_i++;if(banner_i==banner_len){banner_i=0}};for(i=1;i<=banner_len;i++){nav_s = nav_s + "<span></span>";}$(".banner_nav").append(nav_s);$(".banner_nav span").hover(function(){moving($(this).index());clearInterval(auto)},function(){auto=setInterval(play,time)});function moving(k){$(".banner_nav span").eq(k).addClass("banner_nav_h").siblings().removeClass("banner_nav_h");$banner_li.eq(k).css("height","450px").siblings().css("height",0);banner_animate(k)}play();auto=setInterval(play,time);function banner_animate(i){banner_reset();switch(i){case 0:$("#banner1-con-1t1").animate({top:"90px"},1000,"easeInQuart");$("#banner1-con-1t2").animate({right:"45px"},1600,"swing");$("#banner1-con-1t3").animate({top:"279px"},1000,"jswing");$("#banner1-con-1m").animate({left:"49px"},1600,function(){$("#banner1-con-1m1").animate({top:"179px"},1000).addClass("animated rotateIn");$("#banner1-con-1m2").animate({left:"161px"},1000).addClass("animated rotateIn");$("#banner1-con-1m3").animate({left:"152px"},1000).addClass("animated rotateIn");$("#banner1-con-1m4").animate({top:"57px"},1000).addClass("animated rotateIn")});break;case 1:$("#banner2-con-pc").animate({top:"61px",right:"99px",width:"468px",height:"345px"},1000,function(){$("#banner2-con-pad").animate({top:"230px"},1000);$("#banner2-con-touch").animate({bottom:0},1000,function(){$("#banner2-con-t1").animate({left:"42px"},500);$("#banner2-con-t2").animate({left:"32px"},500,function(){$("#banner2-con-t3").animate({left:"154px"},500);$("#banner2-con-t4").animate({left:"111px"},500,function(){$("#banner2-con-t5").animate({left:"43px"},500);$("#banner2-con-t6").animate({left:"40px"},500,function(){$("#banner2-con-view").animate({left:"35px"},1000,function(){$(this).addClass("animated flipInY")})})})})})});break;case 2:$("#banner3-con-t1").animate({top:"66px"},500,function(){$("#banner3-con-t2").animate({top:"116px"},500,function(){$("#banner3-con-t3").animate({top:"178px"},500,function(){$("#banner3-con-zj").animate({top:"208px"},500,function(){$("#banner3-con-bbg").animate({top:"281px"},500,function(){$("#banner3-con-b4").animate({left:"701px"},300,function(){$("#banner3-con-b3").animate({left:"581px"},300,function(){$("#banner3-con-b2").animate({left:"467px"},300,function(){$("#banner3-con-b1").animate({left:"302px"},300)})})})})})})});$("#banner3-con-app").animate({top:"153px"},2000)});break;case 3:$("#banner4-con-shop").animate({top:"123px"},1000,"easeInQuart");$("#banner4-con-p1").animate({left:"632px"},1000,function(){$("#banner4-con-p2").animate({left:"632px"},1000,function(){$("#banner4-con-p3").animate({left:"632px"},1000)})});$("#banner4-con-pc-view").animate({top:"115px",left:"133px",width:"329px",height:"230px"},500,function(){$("#banner4-con-pc-view-page").animate({marginTop:"-430px"},1500,function(){$("#banner4-con-phone").animate({bottom:0},1000,function(){$("#banner4-con-phone-view").animate({top:"188px",left:"429px",width:"101px",height:"179px"},500,function(){$("#banner4-con-phone-view-page").animate({marginTop:"-245px"},1500,function(){$("#banner4-con-tip").animate({top:"42px"},1000,"easeInQuart")})})})})});break;default:}}function banner_reset(){$("#banner1-con-1t1").css("top","-79px");$("#banner1-con-1t2").css("right","-545px");$("#banner1-con-1t3").css("top","450px");$("#banner1-con-1m").css("left","-574px");$("#banner1-con-1m1").css("top","450px").removeClass("animated rotateIn");$("#banner1-con-1m2").css("left","-238px").removeClass("animated rotateIn");$("#banner1-con-1m3").css("left","-213px").removeClass("animated rotateIn");$("#banner1-con-1m4").css("top","-108px").removeClass("animated rotateIn");$("#banner2-con-pc").css({"top":"233px","right":"333px","height":"0","width":"0"}).removeClass("animated banner2-con-pc");$("#banner2-con-pad").css("top","450px");$("#banner2-con-touch").css("bottom","-257px");$("#banner2-con-t1").css("left","-400px");$("#banner2-con-t2").css("left","-350px");$("#banner2-con-t3").css("left","-460px");$("#banner2-con-t4").css("left","-510px");$("#banner2-con-t5").css("left","-370px");$("#banner2-con-t6").css("left","-330px");$("#banner2-con-view").css("left","-152px").removeClass("animated flipInY");$("#banner3-con-t1").css("top","-24px");$("#banner3-con-t2").css("top","-75px");$("#banner3-con-app").css("top","-50px");$("#banner3-con-t3").css("top","-24px");$("#banner3-con-zj").css("top","-18px");$("#banner3-con-bbg").css("top","450px");$("#banner3-con-b4").css("left","-203px");$("#banner3-con-b3").css("left","-191px");$("#banner3-con-b2").css("left","-227px");$("#banner3-con-b1").css("left","-285px");$("#banner4-con-shop").css("top","-85px");$("#banner4-con-p1").css("left","1200px");$("#banner4-con-p2").css("left","1200px");$("#banner4-con-p3").css("left","1200px");$("#banner4-con-pc-view").css({"left":"298px","top":"230px","width":0,"height":0});$("#banner4-con-pc-view-page").css("margin-top",0);
$("#banner4-con-phone").css("bottom","-278px");$("#banner4-con-phone-view").css({"left":"480px","top":"278px","width":0,"height":0});$("#banner4-con-phone-view-page").css("margin-top",0);$("#banner4-con-tip").css("top","-87px")};
	/*banner特效End*/
	/*案例切换*/
	$("#case_list>ul>li>a").click(function(){
		$('.case_list').find('a').removeClass('case_list_hover');
		$(this).addClass('case_list_hover');
		var i = $(this).parent().index();
		$(".case_pro").hide(800);
		$("#case_pro"+i).show(800);
		})
	/*案例切换End*/
})