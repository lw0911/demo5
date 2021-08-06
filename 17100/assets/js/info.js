var register = {
	init: function() {
		this.initNode();
		this.addEvent();
		this.initAnimation();
		this.accExpire();
		this.accOnly();
	},
	initNode: function() { // 初始化节点
		this.$companyName = $('#companyName');
		this.$organizationCode = $('#organizationCode');
		this.$contacts = $('#contacts');
		this.$contactPhone = $('#contactPhone');
		this.$address = $('#address');
		this.$p = $('#p');
		this.$c = $('#c');
		this.$a = $('#a');
		this.$errorMsg = $('#errorMsg');
		this.$submit = $('#submit');
	},
	initAnimation: function() { // 添加动画
		var $wrapper = $('#j-wrapper'),
			wrapperClass = $wrapper.attr('class');
		$wrapper.addClass('fadeInDown animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
			$(this).removeClass().addClass(wrapperClass);
		});
	},
	addEvent: function() { // 绑定事件
		var that = this;
		this.$submit.on('click', this.validate.bind(this));
		$(document).on('keydown', function(e) {
			var ev = e || window.event;
			if(ev.keyCode === 13) {
				that.validate();
			}
		});
	},
	GetQueryString : function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if(r != null) return unescape(r[2]);
		return null;
	},
	formatDate: function(dates) {
			var zero = function(str) {
				return str = str < 10 ? "0" + str : str
			};
			if(!dates) return;
			var dateTrim = dates.replace("/Date(", "").replace(")/", ""),
				d = new Date(Number(dateTrim)),
				year = d.getFullYear(),
				month = d.getMonth() + 1,
				date = d.getDate(),
				hour = d.getHours(),
				minute = d.getMinutes(),
				second = d.getSeconds();
			return year + "-" + zero(month) + "-" + zero(date) ;
	},
	accExpire:function(){
		var that = this,
		key = CryptoJS.enc.Utf8.parse("1qaz2wsx3edc4rfv"), 
		st = that.GetQueryString('st'),
		stDecrypt = CryptoJS.AES.decrypt(st, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}),
		s = CryptoJS.enc.Utf8.stringify(stDecrypt).toString();
		var isExpire = new Date().getTime() - s > 86400000;
		if(isExpire){
			layer.msg('验证邮箱已经过期,请重新注册!');
			setTimeout(function(){
				location.href='register.html';
			},3000)
		}		
	},
	accOnly:function(){
		var that = this,
		acc = that.GetQueryString('email'),
		key = CryptoJS.enc.Utf8.parse("1qaz2wsx3edc4rfv"),
		accDecrypt = CryptoJS.AES.decrypt(acc, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}),  
		account = CryptoJS.enc.Utf8.stringify(accDecrypt).toString(),
		regStatus = '';
		(function(){
			$.ajax({
				type:"get",
				url:"http://www.jreader.cn:1224/api/organization/account/CheckAccount",
				data:{"account": account },
				async:false,
				success:function(res){
					var res = JSON.parse( res );
					regStatus = res.Result;
				}
			});
		})();
		if(regStatus==1){
			layer.msg('账户信息已经存在,请直接登录');
			setTimeout(function(){
				location.href='login.html';
			},3000)	
		}
	},	
	validate: function() {
		var that = this,
		acc = that.GetQueryString('email'),
		pwd = that.GetQueryString('pwd'),
		st = that.GetQueryString('st'),
		key = CryptoJS.enc.Utf8.parse("1qaz2wsx3edc4rfv"), 
		accDecrypt = CryptoJS.AES.decrypt(acc, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}),  
		pwdDecrypt = CryptoJS.AES.decrypt(pwd, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}),
		stDecrypt = CryptoJS.AES.decrypt(st, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}),
		account = CryptoJS.enc.Utf8.stringify(accDecrypt).toString(),
		password = CryptoJS.enc.Utf8.stringify(pwdDecrypt).toString();
		s = CryptoJS.enc.Utf8.stringify(stDecrypt).toString();
		this.$errorMsg.addClass('hide');
		var emailRe = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
		var phoneRe = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/;
		var that = this,
			companyName  = $.trim(this.$companyName.val()),
			organizationCode  = $.trim(this.$organizationCode.val()),
			contacts  = $.trim(this.$contacts.val()),
			contactPhone  = $.trim(this.$contactPhone.val()),
			address  = $.trim(this.$address.val()),
			p  = $.trim(this.$p.val()),
			c  = $.trim(this.$c.val()),
			a  = $.trim(this.$a.val()),
			errorMsg = '';
			var add = p+c+a +address;
		if(companyName.length === 0) {
			errorMsg = '请填写企业名称';
			this.$companyName.focus();
		} else if(organizationCode.length === 0) {
			errorMsg = '请填写机构码';
			this.$organizationCode.focus();
		} else if(contacts.length === 0) {
			errorMsg = '请填写机构联系人';
			this.$contacts.focus();
		} else if(contactPhone.length === 0) {
			errorMsg = '请填写机构联系方式';
			this.$contactPhone.focus();
		}else if(!phoneRe.test(contactPhone) ){
			errorMsg = '联系方式格式有误(只能座机或者手机号)';
			this.$contactPhone.focus();
		}
		else if( p ===" " || a ==="" ){
			errorMsg = '请选择城市';
		} else if(address.length === 0) {
			errorMsg = '请填写详细地址';
			this.$address.focus();
		}else {
			this.$submit.html('提交中...').attr('disabled', 'disabled');
			this.doRegister( account, hex_md5(password),companyName,organizationCode,contacts,contactPhone,add );
			return;
			this.$submit.html('注册').removeAttr('disabled');
		}
		this.$errorMsg.html(errorMsg).removeClass('hide');    // 显示错误信息
		return false;
	},
	doRegister: function(account, password,companyName,organizationCode,contacts,contactPhone,address) {
		console.log(account);
		console.log(password);
		console.log(organizationCode);
		console.log(companyName);
		console.log(organizationCode);
		console.log(contacts);
		console.log(contactPhone);
		console.log(address);
		var that = this;
		$.ajax({
			url: 'http://www.jreader.cn:1224/api/organization/account/Resgister',
			type: 'get',
			data: {
				 "organization_account.account": account,
				 "organization_account.password":password,
				 "organization_account.organization":organizationCode,
				 "organization.title": encodeURI(companyName), 
				 "organization.code": organizationCode,
				 "organization.LinkPerson": encodeURI(contacts),
				 "organization.LinkPhone": contactPhone,
				 "organization.LinkAddress": encodeURI(address)
			},
			success: function(data) {
				var data = JSON.parse(data);
				if(data.Result === 1) {
				$.ajax({
				type:"post",
				url:"http://www.jreader.cn:1224/api/Account/Register",
				data:{
				        Email:account,
					Password:account,
					ConfirmPassword:account
					},
				success:function(){
				layer.msg('信息提交成功,请等待审核!');
				setTimeout(function(){
					location.href = 'login.html';
				},3000)
					
				}
				});
				} else {
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
register.init();