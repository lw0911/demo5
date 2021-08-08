$(function() {
	//表单
	inp=$(".text,textarea");
	inp.bind("onfocus",function(){
		var df=$(this).attr("default");
		$(this).css("color","#000")
		if($(this).val()==df)
		{
			$(this).val("");
		}
	});
	inp.bind("onblur",function(){
		var df=$(this).attr("default");
		if($(this).val()=="")
		{
			$(this).val(df);
			$(this).css("color","#a9a9a9")
		}
	});
	
	//导航
	//$('.home #nav li>.nava').hover(function(){
	//	$(this).stop().animate({'margin-left':'-5px'},'fast').animate({'margin-left':'5px'},'fast').animate({'margin-left':'-5px'},'fast').animate({'margin-left':'5px'},'fast')
	//},function(){$(this).stop().animate({'margin-left':'0'})})
		$(".nav1").mousemove(function(event){
			$(this).find('.navUL').css("display","block");
			event.stopPropagation();
		});
		$(".nav1").mouseleave(function(event){
			$(this).find('.navUL').css("display","none");
			event.stopPropagation();
		});
		$(".ny-navLI").mousemove(function(event){
			$(this).find(".ny-navUL").css("display","block");
			event.stopPropagation();
		});
		$(".ny-navLI").mouseleave(function(event){
			$(this).find(".ny-navUL").css("display","none");
			event.stopPropagation();
		});
	//大事件
	if($(".size").length>0)
	{
		$(".size").responsiveSlides({
        auto: true,
        pager: true,
        nav: true,
        speed: 10,
        maxwidth: 1920
   		 });
	}
	
	//店铺
	if($("#slide-list").length>0)
		{
			$("#slide-list").scrollable({vertical:false,size:1,items:"#slide-list div",loop:true,prev:"#slide-prev",next:"#slide-next"}).autoscroll({autoplay:true,interval:3000 }).navigator({navi:"#slide-tray",naviItem:'li',activeClass:"active"});
		}

	//保证
	$('.quality li').hover(function(){$(this).children('p').stop().fadeToggle('slow');});
	
	//新闻
	$('#col-news li').hover(function(){$(this).toggleClass('active');});

	//产品分类
	$('#pro-assort li').hover(function(index)
	{
		i=$(this).index();
		$(this).parent().children().removeClass('curr').eq(i).addClass("curr");
	});
	//产品
	$('.pro-show>li').hover(function()
	{
		$(this).stop().animate({'top':'-5px'},'fast')
	},function(){$(this).stop().animate({'top':'0px'})});

	//左侧店铺
	if($("#xx-list").length>0)
	{
		var ShowPre1 = new ShowPre({box:"xx-list",Pre:"xx-prev",Next:"xx-next",numIco:"xx-btn",loop:1,auto:1});
	}
	//APP
	/*$('.app_click').hover(function(){
		$('.app_img').toggle('fast');
	})*/
	
	  $("a[rel='ad_load_store']").fancybox({"transitionIn":"elastic","transitionOut":"elastic","titlePosition":"over","titleFormat": function(title, currentArray, currentIndex, currentOpts) {return "<span id=\"fancybox-title-over\">"+(title.length?"&nbsp;"+title:"")+"</span>";}});
});

/*滚动框架*/
function Sld(a){
	var sld=document.getElementById(a);
	var oul=sld.getElementsByTagName("ul")[0];	
	var oli=oul.getElementsByTagName("li");
	a.timer=null;
	ispeed=-1;
	oul.innerHTML+=oul.innerHTML;
	oul.style.width = (184)*oli.length +'px';
	a.timer=setInterval(move,30)
	function move()
	{
		oul.style.left=oul.offsetLeft+ispeed+'px';
		if(oul.offsetLeft<-oul.offsetWidth/2)
		{
				oul.style.left='0px'
		}
		else if(oul.offsetLeft>0)
		{
			oul.style.left=-oul.offsetWidth/2+'px';
		}
	};
	oul.onmouseover=function()
	{
		ispeed=0
	};
	oul.onmouseout=function()
	{
		ispeed=-1
	}
	return a.timer;
};