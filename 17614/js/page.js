$(function(){
	
	//地图
	var chart = echarts.init(document.getElementById('guizhous'));
		    chart.setOption({
		        series: [{
		            type: 'map',
		            map: 'guizhou'
		        }]
		    });
		    
		     chart.on('mouseover', function (params) {
		   		$("#guizimg").hide();
		    	$(".guizhoubg li").eq(params.dataIndex).show().siblings().hide();
				
			});	
			
		    
		    chart.on('click', function (params) {
		    // 控制台打印数据的名称
//		    console.log(params)
		    	$(".guizAlte").show().children(".listConter").eq(params.dataIndex).show().siblings().hide();
			});	
			
			
		$(".clickBtn").click(function(){
			$(this).parent().hide().parents(".guizAlte").hide();
			$("#guizimg").show();
			$(".guizhoubg li").hide();
		});
		
		$(".imgTal li").click(function(){
			var index=$(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(this).parent().siblings(".textTel").children("li").eq(index).addClass("active").siblings().removeClass("active");
		});
		
		
		
		//
})