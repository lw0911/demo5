var register = {
	init: function() {
		this.initNode();
		this.addEvent();
		this.initAnimation();
		this.checkUser();
	},
	initNode: function() {	// 初始化节点
		this.$username = $('#username');
		this.$pwd = $('#password');
		this.$confirmPassowrd = $('#confirmPassowrd');
		this.$errorMsg = $('#errorMsg');
		this.$submit = $('#submit');
	},
	checkUser:function(){
		//检测用户是否被注册	
		var that = this;
		var errorMsg = '';
		that.$errorMsg.addClass('hide');
		var check = function(){
			$.ajax({
				type:"get",
				url:"http://www.jreader.cn:1224/api/organization/account/CheckAccount",
				data:{"account": $.trim( that.$username.val() ) },
				async:true,
				success:function(res){
					var res = JSON.parse( res );
					if( res.Result ==1 ){
							errorMsg ='邮箱已经被注册'
							that.$errorMsg.html(errorMsg).removeClass('hide');
					}
				}
			});
		}	
		this.$username.on('blur',function(){
			check();
		})	
	},	
	initAnimation: function() {	// 添加动画
		var $wrapper = $('#j-wrapper'),
			wrapperClass = $wrapper.attr('class');
		$wrapper.addClass('fadeInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass().addClass(wrapperClass);
		});
	},
	addEvent: function() {	// 绑定事件
		var that = this;
		this.$submit.on('click', this.validate.bind(this));
		$(document).on('keydown', function(e) {
			var ev = e || window.event;
			if (ev.keyCode === 13) {
				that.validate();
			}
		});
	},
	validate: function() {	
		this.$errorMsg.addClass('hide');
		var emailRe = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
		var that = this,
			username = $.trim(this.$username.val()),
			pwd = this.$pwd.val(),
			confirmPassowrd = $.trim(this.$confirmPassowrd.val()),
			errorMsg = '',
		 	regStatus = '';
		(function(){
			$.ajax({
				type:"get",
				url:"http://www.jreader.cn:1224/api/organization/account/CheckAccount",
				data:{"account": $.trim( that.$username.val() ) },
				async:false,
				success:function(res){
					var res = JSON.parse( res );
					regStatus = res.Result;
				}
			});
		})();
		if (username.length === 0) {
			errorMsg = '帐号不能为空';
			this.$username.focus();
		}else if(!emailRe.test(username) ){
			errorMsg = '邮箱格式不正确';
			this.$username.focus();
		}else if(regStatus==1){
			errorMsg = '邮箱已经被注册';
			this.$username.focus();
		}else if (!pwd || pwd.length < 6) {
			errorMsg = '密码为6~20位字母或者数字';
			this.$pwd.focus();
		}else if(!confirmPassowrd || confirmPassowrd.length < 6){
			errorMsg = '确认密码为6~20位字母或者数字';
			this.$confirmPassowrd.focus();
		}else if(pwd!=confirmPassowrd){
			errorMsg = '两次密码输入不一致';
		}else if( !$("#dragEle").attr("validate") ){
			errorMsg = '请拖动滑块验证';
		}else {
			this.$submit.html('注册中...').attr('disabled', 'disabled');
			this.doRegister(username,pwd);
			return;
			this.$submit.html('注册').removeAttr('disabled');
		}
		this.$errorMsg.html(errorMsg).removeClass('hide');  // 显示错误信息
		return false;
	},
	doRegister: function(username,pwd) {
		var that = this;
		var params = {
			'email': username,
			'pwd':pwd,
		};
		$.ajax({
			url: 'http://www.jreader.cn:1224/api/organization/account/SendEmail',
			type: 'get',
			data: params,
			contentType: 'application/x-www-form-urlencoded',
			success: function(data) {
				var data = JSON.parse( data );
				if (  data.Result === 1) {	
					location.href= encodeURI ( 'active.html?mailTo='+username+'');
				}else{
					that.$errorMsg.html(data.errmsg).removeClass('hide');
					that.$submit.html('注册').removeAttr('disabled');
				}
			},
			error: function() {
				that.$errorMsg.html('请求失败，请重试');
			}
		});
	},
	/**
	* 获取浏览器的名称和版本号信息
	*/
	getBrowser: function() {
		var browser = {
			msie: false,
			firefox: false,
			opera: false,
			safari: false,
			chrome: false,
			netscape: false,
			appname: 'unknown',
			version: 0
		}, ua = window.navigator.userAgent.toLowerCase();
		if (/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(ua)) {
			browser[RegExp.$1] = true;
			browser.appname = RegExp.$1;
			browser.version = RegExp.$2;
		} else if (/version\D+(\d[\d.]*).*safari/.test(ua)){ // safari
			browser.safari = true;
			browser.appname = 'safari';
			browser.version = RegExp.$2;
		}
		return browser.appname + ' ' + browser.version;
	}
};
register.init();

$(function(){
	$.AutoComplete('#username');
	//同意条款
	$("#chk").click(function(){
		if( !$("#chk").is(":checked") ){
			$("#submit").attr('disabled','disabled')
		}else if( $("#chk").is(":checked") ) {
			$("#submit").removeAttr('disabled','')
		}
	})	
	//滑块验证码
	function DragValidate (dargEle,msgEle){
        var dragging = false;//滑块拖动标识
        var iX;
        dargEle.mousedown(function(e) {
            msgEle.text("");
            dragging = true;
            iX = e.clientX; //获取初始坐标
        });
        $(document).mousemove(function(e) {
            if (dragging) {
                var e = e || window.event;
                var oX = e.clientX - iX;
                if(oX < 90){
                    return false;
                };
                if(oX >= 330){//容器宽度+10
                    oX = 320;
                    return false;
                };
                dargEle.width(oX + "px");
                return false;
            };
        });
        $(document).mouseup(function(e) {
            var width = dargEle.width();
            if(width < 320){
                dargEle.width("80px");
                msgEle.text(">>拖动滑块验证<<");
            }else{
                dargEle.attr("validate","true").text("验证成功！").unbind("mousedown");
            };
            dragging = false;
        });
    };
	//初始化滑块验证码
    DragValidate($("#dragEle"),$(".tips"));
})
