
//切换视频清晰度
function videoSourceChoose(_this){
	var myVideo = document.getElementById("myVideo");
	var url = myVideo.currentSrc;
	
	if($(_this).text() == "切换为标清"){
		$(_this).text("切换为高清");
		url = url.substring(0,url.length-4)+"_small.mp4";	//视频地址
	}else{
		$(_this).text("切换为标清");
		url = url.substring(0,url.length-10)+".mp4";	//视频地址
	}
	var nowsTime = myVideo.currentTime;	//视频播放时间

	$("#myVideo").find("source").attr("src",url).attr("autoplay","true");
	myVideo.load();
	myVideo.play();
	myVideo.currentTime = nowsTime;
}
//多视频播放功能
function showModal(url){
	var str = '<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
	    '<div class="modal-dialog">'+
	        '<div class="modal-content">'+
	            '<div class="modal-body videoModal">'+
	                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>'+
	                '<video id="myVideo" style="width:100%" controls preload>'+
				        '<source src="'+url+'" type="video/mp4" codecs="avc1.42E01E,mp4a.40.2">'+
						'<!--[if IE 8]>'+
				            '<embed src="'+url+'" style="width:100%" autostart="false"/>'+
						'<![endif]-->'+
	               	'</video>'+
	                '<a href="javascript:void(0)" onclick="videoSourceChoose(this)">切换为标清</a>'+
	            '</div>'+
	        '</div>'+
	    '</div>'+
	'</div>';
	$("body").append(str);
	/*模态框样式改造*/
	//当模态框对用户可见时触发（将等待 CSS 过渡效果完成）。
	$('#myModal').on('shown.bs.modal', function () {
		var win_w = $(window).width();
		var modal_h = $(this).find(".modal-dialog").height();
		
		$(this).find(".modal-dialog").animate({
		    marginTop:(-1)*(modal_h/2)+"px",
		    top:"50%"
		},500,function(){
			var ua = navigator.userAgent.toLowerCase();
			var isIE = ua.indexOf("msie")>-1;
			var safariVersion;
			//判断是否为ie，在获取版本号
			if(isIE){
			    safariVersion =  ua.match(/msie ([\d.]+)/)[1];
				if(safariVersion == 9.0 || safariVersion == 8.0 || safariVersion == 7.0){
			        // 进行你所要的操作
//			        alert("IE789测试弹窗")
			        $("#myModal").find(".modal-dialog").css("margin-top","50px").css("top","0");
				}
			}
		});
	})
	$('#myModal').on('hide.bs.modal', function () {
		var myVideo = document.getElementById("myVideo");
		var DEFAULT_VERSION = 8.0;
		var ua = navigator.userAgent.toLowerCase();
		var isIE = ua.indexOf("msie")>-1;
		var safariVersion;
		//判断是否为ie，在获取版本号
		if(isIE){
	        safariVersion =  ua.match(/msie ([\d.]+)/)[1];
	        if(safariVersion != DEFAULT_VERSION ){
				myVideo.pause();
			}else{
				location.href = "/";
			}
		}else{
			myVideo.pause();
		}
		
		$(this).remove();
	})
	$('#myModal').modal('show');
}
