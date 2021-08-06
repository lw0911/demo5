var Download = {
	init: function() {
		this.GetQueryString();
		this.downloadApp();
	},
	GetQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	},
	downloadApp: function() {     //下载
		var appReq = function(type) {
			$.ajax({
				type: "get",
				url: "http://www.jreader.cn:1224/api/tb_Version/CheckVersion?type=" + type + "",
				async: true,
				success: function(res) {
					var data = res.Data;
					if(type == 0) {
						$("#dl-azphone").attr("href","http://www.jreader.cn:1224/Upload/App/file/"+data.attachment)
					} else if(type == 1) {
						$("#dl-iphone").attr("href","http://www.jreader.cn:1224/Upload/App/file/"+data.attachment)	
					} else if(type == 5) {
						$("#dl-pc").attr("href","http://www.jreader.cn:1224/Upload/App/file/"+data.attachment)
					} else if(type == 3) {
						$("#dl-ipad").attr("href","http://www.jreader.cn:1224/Upload/App/file/"+data.attachment)
					} else if(type == 4) {
						$("#dl-azpad").attr("href","http://www.jreader.cn:1224/Upload/App/file/"+data.attachment)
					}
				}
			});
		}
		appReq(0);
		appReq(1);
		appReq(3);
		appReq(4);
		appReq(5);
	}
};

Download.init();