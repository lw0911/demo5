var Active = {
	init: function() {
		this.GetQueryString();
		this.activeAccount();
	},
	GetQueryString : function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	},
	activeAccount: function() { // 激活账号
		var MAILTYPE = this.GetQueryString('mailTo').split('@')[1];
		var p = 'http' || 'https';
		$("#activeBtn").on('click',function(){
			window.open(' '+p+'://mail.'+MAILTYPE +' ');
		})
	}
};
Active.init();