var arr=[{"name":"雕刻凹版+安全线技术","url":"security-1.html"},
         {"name":"塑膜定位全息揭开技术","url":"security-1.html"},
         {"name":"尖端纳米光谱技术","url":"security-1.html"},
         {"name":"S21CODE+镜面综合防伪技术","url":"security-1.html"},
         {"name":"核径迹防伪技术","url":"security-1.html"},
         {"name":"局部洗铝技术","url":"security-1.html"},
         {"name":"嵌入激光彩色二维码技术","url":"security-1.html"},
         {"name":"揭开式纸质防伪技术","url":"security-1.html"},
         {"name":"防解开留底防伪技术","url":"security-1.html"},
         {"name":"刮开式纸质防伪技术","url":"security-1.html"},
         {"name":"塑膜揭刮双效防伪技术","url":"security-1.html"},
         {"name":"二维码防伪平台","url":"system-1.html"},
         {"name":"物流防窜货管理系统","url":"system-1.html"},
         {"name":"生产赋码关联管理系统","url":"system-1.html"},
         {"name":"产品质量追溯系统","url":"system-1.html"},
         {"name":"中国防伪溯源管理平台","url":"system-1.html"},
         {"name":"一物一码微信营销系统","url":"system-1.html"},
         {"name":"化妆品行业防窜货解决方案","url":"solve-1.html"},
         {"name":"白酒行业防窜货解决方案","url":"solve-1.html"},
         {"name":"农产品行业防窜货解决方案","url":"solve-1.html"},
         {"name":"日化行业","url":"solve-1.html"},
         {"name":"医药行业","url":"solve-1.html"},
         {"name":"母婴及乳制品行业","url":"solve-1.html"},
         {"name":"顾问式服务","url":"service-1.html"},
         {"name":"实施培训服务","url":"service-1.html"},
         {"name":"售后贴心服务","url":"service-1.html"},
         {"name":"公司简介","url":"about-1.html"},
         {"name":"联系我们","url":"about-2.html"},
         {"name":"加入我们","url":"about-3.html"},
         {"name":"行业资讯","url":"about-4.html"}
 ]



$(function(){
	var arrUrl="";
		
	$("#searchBtn").on("click",function(){
		var valS = $("#searchVal").val();
		for (var i=0;i<arr.length;i++) {
	//	console.log(arr[i].name);
		  var arrN = arr[i].name
		    for (var a=0;a<arrN.length;a++) {
		    	var arrNs = arrN.substr(a,valS.length);
		    	if(arrNs==valS){
		    		console.log(arr[i].url);
		    		arrUrl = arr[i].url
		    	}
		    }
		}
		location.href=arrUrl;
	})
})




