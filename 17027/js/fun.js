//滚动触发
function scrollact(e,fix){
	if(!fix){fix=0;}
	if($(window).scrollTop()+Math.abs($(window).height()-$(e).height())>=+$(e).offset().top-fix){
		return true;
	}
}

//弹出层
function showlayer(e){
	$(e).css({marginTop:$(e).outerHeight()*-0.5});
	$(e).show();
	$(".shadow").fadeIn(300);
}
function hidelayer(e){
	$(e).hide();
	$(".shadow").fadeOut(300);
}

//自动调整底部,配合相应class
function autofoot(){
	var wh=$(window).height();
	var dh=$(document.body).height();
	if($("#footer").attr("class")=="footb"){
		dh=$(document.body).height()+$("#footer").height();;
	}
	if(wh>dh){
		$("#footer").addClass("footb");
	}
	else{
		$("#footer").removeClass("footb");
	}
}

//根据dom的w和h属性配合type进行尺寸及定位的计算
function autodiv(e,type){
	$(e).each(function(index, element) {
		if(type=="h"){
            $(this).width("100%");
			$(this).height($(this).width()/$(this).attr("w")*$(this).attr("h"));
        }
		if(type=="v"){
			$(this).height("100%");
			$(this).width($(this).height()/$(this).attr("h")*$(this).attr("w"));
		}
		if(type=="c"){
			$(this).width($(this).parent().width()/$(this).parent().attr("w")*$(this).attr("w"));
			$(this).height($(this).parent().height()/$(this).parent().attr("h")*$(this).attr("h"));
			$(this).css("left",$(this).parent().width()/$(this).parent().attr("w")*$(this).attr("l"));
			$(this).css("top",$(this).parent().height()/$(this).parent().attr("h")*$(this).attr("t"));
		}
	});
}

//根据参数使图片自适应并剧中
function autoimg(e,w,h){
	var img = new Image();
	img.src=$(e).attr("src");
	
	img.onload=function(){
		w1=img.width;
		h1=img.height;
		if((w/h)<(w1/h1)){
			if(w1>w){$(e).width(w);}
			$(e).css("margin-top",(h-$(e).height())*0.5);
		}
		else{
			if(h1>h){$(e).height(h);}
			else{$(e).css("margin-top",(h-h1)*0.5);}
		}
	}
	if((w/h)<(img.width/img.height)){
		if(img.width>w){$(e).width(w);}
		$(e).css("margin-top",(h-$(e).height())*0.5);
	}
	else{
		if(img.height>h){$(e).height(h);}
		else{$(e).css("margin-top",(h-img.height)*0.5);}
	}
}

//调整图片充满容器
function autoimg1(e){
	var img = new Image();
	img.src=$(e).attr("src");
	img.onload=function(){
		w1=img.width;
		h1=img.height;
		if($(e).parent().width()/$(e).parent().height()>=w1/h1){
			$(e).css({width:"100%",height:"auto"});
		}
		else{
			$(e).css({height:"100%",width:"auto"});
		}
	}
	if($(e).parent().width()/$(e).parent().height()>=$(e).width()/$(e).height()){
			$(e).css({width:"100%",height:"auto"});
	}
	else{
		$(e).css({height:"100%",width:"auto"});
	}
}

//鼠标滑过时增加指定的class
function hover(e,classname,child){
	if(classname==undefined){classname="hover";}
	if(child==undefined){
		$(e).hover(
			function(){$(this).addClass(classname);},
			function(){$(this).removeClass(classname);}
		);
	}
	else{
		$(e).hover(
			function(){$(this).find(child).addClass(classname);},
			function(){$(this).find(child).removeClass(classname);}
		);
	}
}

//建立下拉列表功能
function selector(e){
	$(e).each(function(){
		s=$(this);
		s.click(function(){
			s.find("ul").show();
		});
		s.mouseleave(function(){
			s.find("ul").hide();
		});
		s.find("li").click(function(){
			s.find("input").val($(this).text());
			s.find("ul").hide();
		});
	});
}

//新tab切换
function tabdiv(tab,div,event,speed){
	speed=isNaN(speed)?0:speed;
	$(div).each(function(index, element) {
        $(this).attr("idx",index);
    });
	$(tab).each(function(index, element) {
        $(this).bind(event,function(){
			$(tab).removeClass("now");
			$(this).addClass("now");
			$(div+"[idx='"+index+"']").fadeIn(speed);
			$(div+"[idx!='"+index+"']").hide();
		});
    });
}

//tab切换，最多支持30个
function showdiv(id,idx,fade){
	if(!fade)fade=0;
	for(var i=1;i<30;i++){
		if($("#div"+id+i)){
			$("#div"+id+i).hide();
		}
		if($("#tab"+id+i)){
			$("#tab"+id+i).removeClass("now");
		}
	}
	$("#tab"+id+idx).addClass("now");
	if(!fade){
		$("#div"+id+idx).show();
	}
	else{
		$("#div"+id+idx).fadeIn(fade);
	}
}

//原生tab切换
function showdiv1(id,idx){
	for(var i=1;i<30;i++){
		if(document.getElementById("div"+id+i)){
			document.getElementById("div"+id+i).style.display="none";
		}
		if(document.getElementById("tab"+id+i)){
			document.getElementById("tab"+id+i).className=document.getElementById("tab"+id+i).className.replace("now","");
		}
	}
	document.getElementById("tab"+id+idx).className=document.getElementById("tab"+id+idx).className+" now";
	if(document.getElementById("div"+id+idx)){
		document.getElementById("div"+id+idx).style.display="";
	}
}

//数字初始化效果
function numshow(e,t){
	if(t=="")t=1;
	var stv1;
	var x=parseInt($(e).text());
	var y=0;
	if(x>=100){
		var z=parseInt(x/100);
		var t=10*t;
	}
	else{
		var z=1;
		t=150*t;
	}
	var stv1=setInterval(function(){
		y=y+z;
		$(e).text(y);
		if(y+z>=x){
			$(e).text(x);
			clearInterval(stv1);
		}
	},t);	
}

//获取日期
function getdate(e){
	var day="";
	var month="";
	var ampm="";
	var ampmhour="";
	var myweekday="";
	var year="";
	mydate=new Date();
	myweekday=mydate.getDay();
	mymonth=mydate.getMonth()+1;
	myday= mydate.getDate();
	myyear= mydate.getYear();
	year=(myyear > 200) ? myyear : 1900 + myyear;
	if(myweekday == 0)
	weekday=" 星期日 ";
	else if(myweekday == 1)
	weekday=" 星期一 ";
	else if(myweekday == 2)
	weekday=" 星期二 ";
	else if(myweekday == 3)
	weekday=" 星期三 ";
	else if(myweekday == 4)
	weekday=" 星期四 ";
	else if(myweekday == 5)
	weekday=" 星期五 ";
	else if(myweekday == 6)
	weekday=" 星期六 ";
	$(e).text(year+"年"+mymonth+"月"+myday+"日 "+weekday)
}

//设置cookie
function setCookie(c_name,value,expiredays){
	var exdate=new Date()
	exdate.setDate(exdate.getDate()+expiredays)
	document.cookie=c_name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
}

function getCookie(c_name){
	if(document.cookie.length>0){
		c_start=document.cookie.indexOf(c_name + "=")
		if(c_start!=-1){ 
			c_start=c_start + c_name.length+1 
			c_end=document.cookie.indexOf(";",c_start)
			if(c_end==-1)c_end=document.cookie.length;
			return unescape(document.cookie.substring(c_start,c_end))
		}
	}
	return "";
}

//是否支持html5
function ishtml5(){
	if(typeof(Worker)!=="undefined"){
		return true;
	}
	else{
		return false;
	}	
}

//是否支持css3
function isCss3(style) {
	var prefix = ['webkit', 'Moz', 'ms', 'o'],
	i,
	humpString = [],
	htmlStyle = document.documentElement.style,
	_toHumb = function(string) {
		return string.replace(/-(\w)/g,
		function($0, $1) {
			return $1.toUpperCase();
		});
	};

	for (i in prefix) humpString.push(_toHumb(prefix[i] + '-' + style));

	humpString.push(_toHumb(style));

	for (i in humpString) if (humpString[i] in htmlStyle) return true;

	return false;
}

//下拉展开，待修改
function showslider(id,e,cname){
	if(!cname){cname="act";}
	if(!$(id).attr("h")){$(id).attr("h",$(id).height());}
	$(id).children().wrapAll("<div class='bd'></div>");
	
	if($(id).height()==$(id).attr("h") && $(id).height()<$(id).find(".bd").height()){
		$(id).animate({height:$(id).find(".bd").height()});
	}
	else{
		$(id).animate({height:$(id).attr("h")});
	}
	if($(e).attr("class").match(cname)){
		$(e).removeClass(cname);
	}
	else{
		$(e).addClass(cname);
	}
}

//弹出层居中，待修改
function divcenter(e,mintop){
	$(e).css({display:'block',top:-9999});
	var w=$(e).width();
	var h=$(e).height();
	var top,left;
	if($(window).height()>h){top=$(window).scrollTop()+($(window).height()-h)*0.5;}
	else{top=$(window).scrollTop()+mintop;}
	left=w*0.5*-1;
	return Array(top,left);
	
}
function divshow(e,mintop){
	var arr=divcenter(e,mintop);
	var top=arr[0];
	var left=arr[1];
	
	$(e).hide();
	$(e).css("top",top);
	$(e).css("margin-left",left);
	$(e).fadeIn();
}

//获取随机数
function GetRandomNum(Min,Max){   
	var Range = Max - Min;   
	var Rand = Math.random();   
	return(Min + Math.round(Rand * Range));
}

//初始化jquery时间插件
function loaddate(e,lang){
	if(lang=="zh"){
			$.datepicker.regional["zh-CN"] = { closeText: "关闭", prevText: "&#x3c;上月", nextText: "下月&#x3e;", currentText: "今天", monthNames: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], monthNamesShort: ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"], dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"], dayNamesMin: ["日", "一", "二", "三", "四", "五", "六"], weekHeader: "周", dateFormat: "yy-mm-dd", firstDay: 1, isRTL: !1, showMonthAfterYear: !0, yearSuffix: "年" }
			$.datepicker.setDefaults($.datepicker.regional["zh-CN"]);
	}
	else{
		$.datepicker.regional['en-GB'] = {
			closeText: 'Done',
			prevText: 'Prev',
			nextText: 'Next',
			currentText: 'Today',
			monthNames: ['January','February','March','April','May','June',
			'July','August','September','October','November','December'],
			monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
			dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
			weekHeader: 'Wk',
			dateFormat: 'dd/mm/yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''};
		$.datepicker.setDefaults($.datepicker.regional['en-GB']);
		$('#date').datepicker('option', $.datepicker.regional['en-GB']);
	}
	//var datePicker = $("#ctl00_BodyMain_txtDate").datepicker({
		//howOtherMonths: true,
		//selectOtherMonths: true            
	//});
	/*$( "#from" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		onClose: function( selectedDate ) {
			$( "#to" ).datepicker( "option", "minDate", selectedDate );
		}
	});
	$( "#to" ).datepicker({
		defaultDate: "+1w",
		changeMonth: true,
		numberOfMonths: 1,
		onClose: function( selectedDate ) {
			$( "#from" ).datepicker( "option", "maxDate", selectedDate );
		}
	});*/
	//$("#from").datepicker("option", "dateFormat", "yy-mm-dd");
	//$("#to").datepicker("option", "dateFormat", "yy-mm-dd");
}

//var t=new Date();
//var start=t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()
//var end="2015-03-27";
//$(".time p").html(countDate(start,end));

function countDate(start,end){
	//创建Date变量：
	start = Date.parse(start.replace(/-/g,"/"));
	var date1 = new Date(start); //开始时间
	end = Date.parse(end.replace(/-/g,"/"));
	var date2=new Date(end);    //结束时间
	var date3=date2.getTime()-date1.getTime()  //时间差的毫秒数
	
	//计算出相差天数
	var days=Math.floor(date3/(24*3600*1000));
	//计算出小时数
	var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
	var hours=Math.floor(leave1/(3600*1000));
	if(hours<10 && hours>=0){hours="0"+hours;}
	if(hours<0){hours="00";}
	//计算相差分钟数
	var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
	var minutes=Math.floor(leave2/(60*1000));
	if(minutes<10 && minutes>=0){minutes="0"+minutes;}
	if(minutes<0){minutes="00";}
	//计算相差秒数
	var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
	var seconds=Math.round(leave3/1000);
	if(seconds<10 && seconds>=0){seconds="0"+seconds;}
	if(seconds<0){seconds="00";}
	
	//var now=hours+":"+minutes+":"+seconds;
	//var now="<span>"+days+"</span>天&nbsp;&nbsp;<span>"+hours+"</span>小时&nbsp;&nbsp;<span>"+minutes+"</span>分";
	return now;
}

function mjump(url){
	var ua=navigator.userAgent.toLowerCase();
	if(ua.match(/iPad/i)=="ipad" || ua.match(/iphone/i)=="iphone" || ua.match(/android/i)=="android") { 
		location=url;
	}
}
