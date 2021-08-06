var Login = {
	init: function() {
		this.initNode();
		this.showNotice();
		this.initAnimation();
		this.addEvent();
	},
	baseURL : 'http://www.jreader.cn:1224/',
	initNode: function() { // 初始化节点
		this.$account = $('#j-account');
		this.$pwd = $('#j-secret');
		this.$errorMsg = $('#j-errorMsg');
		this.$loginBtn = $('#j-loginBtn');
		this.$footer = $('#footer');
	},
	initAnimation: function() { // 添加动画
		var $wrapper = $('#j-wrapper'),
			wrapperClass = $wrapper.attr('class');
		$wrapper.addClass('fadeInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$(this).removeClass().addClass(wrapperClass);
		});
	},
	showNotice: function() {
		var browser = this.getBrowser(),
			temp = browser.split(' '),
			appname = temp[0],
			version = temp[1]; 
	},
	addEvent: function() { // 绑定事件
		var that = this;
		this.$loginBtn.on('click', this.validate.bind(this));
		$(document).on('keydown', function(e) {
			var ev = e || window.event;
			if(ev.keyCode === 13) {
				that.validate();
			}
		});
	},
	validate: function() { // 登录验证
		var that = this,
			account = $.trim(that.$account.val()),
			pwd = that.$pwd.val(),
			errorMsg = '';
		if(account.length === 0) {
			errorMsg = '帐号不能为空';
			this.$account.focus();
		} else if(!pwd || pwd.length < 6) {
			errorMsg = '密码长度至少6位';
			this.$pwd.focus();
		}else if( !$("#dragEle").attr("validate") ){
			errorMsg = '请拖动滑块验证';
		}else {
			that.$loginBtn.html('登录中...').attr('disabled', 'disabled');
			that.$loginBtn.html('登录').removeAttr('disabled');
			var params = {
				'username': account,
				'pwd': hex_md5(pwd),
			};
			$.ajax({
				type: "get",
				url: that.baseURL+"api/organization_account/Login",
				data: params,
				async: true,
				success: function(res) {
					var res = JSON.parse(res);
					if(res.Result===1){
						layer.msg('登录成功');
						$.ajax({
							type:"post",
							data:{
								  username : account,
	                              password :account,
	                              grant_type:'password'
							},
							url:that.baseURL+"token",
							async:true,
							success:function(response){

								$.ajax({
									type:"get",
									url:that.baseURL+"token/login",
									data:{
			                        	key: res.Data.account,
			                        	value: 'bearer ' + response.access_token
			                      	},
									async:true,
									success:function(){
										 sessionStorage.setItem("username",res.Data.account);    
	                              sessionStorage.setItem("access_token",response.access_token);
	                              sessionStorage.setItem("token_type",response.token_type);   
 sessionStorage.setItem("userid", res.Data.id);  
	                              sessionStorage.setItem("account",res.Data.account);  
	                              sessionStorage.setItem("belongRole",res.Data.belongRole);  
	                              sessionStorage.setItem("name",res.Data.title);  
	                              sessionStorage.setItem("organization",res.Data.organization); 
								  location.href = 'http://www.jreader.cn/jy/#/table'
									}
								});
								 
							}							
						});
					}else{
						layer.msg(res.Msg);
					}
				}
			});
		}
		that.$errorMsg.html(errorMsg).removeClass('hide'); // 显示错误信息
		return false;
	},
	//这里做了个伪登录方式（实际上是把accid，token带到下个页面连SDK在做鉴权）
	//一般应用服务器的应用会有自己的登录接口
	requestLogin: function(account, pwd) {
		setCookie('uid', account.toLocaleLowerCase());
		//自己的appkey就不用加密了
		// setCookie('sdktoken',pwd);
		setCookie('sdktoken', MD5(pwd));
		window.location.href = '/webdemo/main.html';
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
			},
			ua = window.navigator.userAgent.toLowerCase();
		if(/(msie|firefox|opera|chrome|netscape)\D+(\d[\d.]*)/.test(ua)) {
			browser[RegExp.$1] = true;
			browser.appname = RegExp.$1;
			browser.version = RegExp.$2;
		} else if(/version\D+(\d[\d.]*).*safari/.test(ua)) { // safari
			browser.safari = true;
			browser.appname = 'safari';
			browser.version = RegExp.$2;
		}
		return browser.appname + ' ' + browser.version;
	}
};
Login.init();
//初始化邮箱补全
$(function(){
	$.AutoComplete('#j-account');
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
                if(oX < 30){
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
