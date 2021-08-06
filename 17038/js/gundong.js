// JavaScript Document
var adsdls = new ScrollPicleft();
        adsdls.scrollContId = "Scrolls"; // 内容容器ID""
        adsdls.arrLeftId = "LeftIDdls"; //左箭头ID
        adsdls.arrRightId = "RightIDdls"; //右箭头ID
        adsdls.frameWidth = 1200; //显示框宽度
        adsdls.pageWidth = 405; //翻页宽度
        adsdls.speed = 10; //移动速度(单位毫秒，越小越快)
        adsdls.space = 10; //每次移动像素(单位px，越大越快)
        adsdls.autoPlay = true; //自动播放
        adsdls.autoPlayTime = 2; //自动播放间隔时间(秒)
        adsdls.initialize(); //初始化		
		
		
		
var adsdls1 = new ScrollPicleft();
        adsdls1.scrollContId = "Scrolls1"; // 内容容器ID""
        adsdls1.arrLeftId = "LeftIDdls1"; //左箭头ID
        adsdls1.arrRightId = "RightIDdls1"; //右箭头ID
        adsdls1.frameWidth = 1200; //显示框宽度
        adsdls1.pageWidth = 405; //翻页宽度
        adsdls1.speed = 10; //移动速度(单位毫秒，越小越快)
        adsdls1.space = 10; //每次移动像素(单位px，越大越快)
        adsdls1.autoPlay = true; //自动播放
        adsdls1.autoPlayTime = 2; //自动播放间隔时间(秒)
        adsdls1.initialize(); //初始化
		
		
		

    var Bianyuan = {
    //添加事件2(DOM-保证this指向对象是obj)
    addEvent : function(obj, type, fn){
    if (obj.attachEvent){
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn](window.event);}
    obj.attachEvent('on'+type, obj[type+fn]);
    }else{
    obj.addEventListener(type, fn, false);
    }
    },
    //获取id元素
    $ : function(id){
    return document.getElementById(id);
    },
    //取得浏览器可视区size
    getBrowserSize : function(){
    var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;
    if (typeof pageWidth != "number"){
    if (document.compatMode == "CSS1Compat"){
    pageWidth =  document.documentElement.clientWidth;
    pageHeight =  document.documentElement.clientHeight;
    } else{
    pageWidth =  document.body.clientWidth;
    pageWidth =  document.body.clientHeight;
    }
    }
    //ie减去17滚动条宽度
    if(!window.ActiveXObject){
    pageWidth -= 17;
    }
    return {
    width : pageWidth,
    height : pageHeight
    }
    },
    //获取滚动条高度
    getPageScroll : function(){
    var yScroll;
    if (self.pageYOffset) {
    yScroll = self.pageYOffset;
    } else if (document.documentElement && document.documentElement.scrollTop){
    yScroll = document.documentElement.scrollTop;
    } else if (document.body) {
    yScroll = document.body.scrollTop;
    }
    return yScroll;
    }
    }
    function scrollBar(scrollId, dir, headHeight, footHeight, areaWidth, o){
    //滚动框宽高
    var scrollBar = Bianyuan.$(scrollId),
    barWidth = scrollBar.offsetWidth,
    barHeight = scrollBar.offsetHeight;
    //可视区宽高
    var pageWidth = Bianyuan.getBrowserSize().width,
    pageHeight = Bianyuan.getBrowserSize().height;
    //内容宽高
    var widthMore = document.documentElement.scrollWidth,
    heightMore = document.body.scrollHeight||(document.documentElement.scrollHeight);
    //最大宽高
    var maxWidth = Math.max(pageWidth, widthMore),
    maxHeight = Math.max(pageHeight, heightMore);
    scrollBar.style.position = 'absolute';
    //设置top--假设滚动框高度小于整个页面高度，如果大于直接将其隐藏
    if (maxHeight < (barHeight + footHeight + footHeight + 4)){
    scrollBar.style.display = 'none';
    }else{
    //不挡顶部---如果想改距顶高度，改下边的第一个2值
    scrollBar.style.top = Bianyuan.getPageScroll() + headHeight + 2 + 'px';
    //不挡底部
    if ((heightMore - Bianyuan.getPageScroll() - barHeight) <= footHeight){
    scrollBar.style.top = heightMore - footHeight - barHeight - 2 + 'px';
    }
    }
    //无视主体内容-左右
    if (dir == 'left' && areaWidth == 1){
    scrollBar.style.left = 2 + 'px';
    }else if (dir == 'right' && areaWidth == 1){
    scrollBar.style.left = maxWidth - barWidth - 2 + 'px';
    //根据主体内容宽-左右
    }else if (dir == 'left' && areaWidth != 1){
    if (pageWidth >= (barWidth*2 + areaWidth + 4)){
    scrollBar.style.left = (pageWidth - areaWidth)/2 - barWidth - 2 + 'px';
    }else{
    scrollBar.style.left = 2 + 'px';
    }
    }else if (dir == 'right' && areaWidth != 1){
    if (pageWidth >= (barWidth*2 + areaWidth + 4)){
    scrollBar.style.left = (pageWidth - areaWidth)/2 + areaWidth + 2 + 'px';
    }else{
    scrollBar.style.left = maxWidth - barWidth - 2 + 'px';
    }
    }

    //改变窗口大小或滚动条滚动
    resizeWindow(scrollId, dir, headHeight, footHeight, areaWidth, o);
    }
    function resizeWindow(scrollId, dir, headHeight, footHeight, areaWidth, o){
    window.onresize = function(){scrollBar(scrollId, dir, headHeight, footHeight, areaWidth, o);}
    window.onscroll = function(){scrollBar(scrollId, dir, headHeight, footHeight, areaWidth, o);}
    }

	function setTabta(nameid){
        document.getElementById("name-"+nameid).style.display='block'
		} 
		function setTabta2(nameid){
        document.getElementById("name-"+nameid).style.display='none'
		} 
	  	  function setTab(name,cursel,n){
		  for(i=1;i<=n;i++){
		  var menu=document.getElementById(name+i);
		  var con=document.getElementById("con_"+name+"_"+i);
		  menu.className=i==cursel?"hover":"";
		  con.style.display=i==cursel?"block":"none";
		 }
	}
	
        function click_a(divDisplay)
        {
            if(document.getElementById(divDisplay).style.display != "none")
            {
               document.getElementById(divDisplay).style.display = "none";
            }
            else
            {
               
				document.getElementById(divDisplay).style.display = "block";
            }
        }	
