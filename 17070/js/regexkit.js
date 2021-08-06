/**
 * @returns {RegexKit}
 */
/**
 * @returns {RegexKit}
 */
function  RegexKit(){
	/**
	 * 数字验证规则
	 */
	var reg_digital=/^\d{1,}$/;
	/**
	 * 匹配非数字开始的字符
	 */
	var reg_non_numeric=/\D.*$/g;
	/**
	 * 匹配全部是0的字符串
	 */
	var reg_zero=/^0+$/;
	/**
	 * 正数验证（正整数和正小数）
	 */
	var reg_positive_digital=/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/;
	/**
	 * 手机号格式校验
	 */
	var reg_mobile_format = /0?(13|14|15|17|18)[0-9]{9}/;
	/**
	 * 座机验证规则
	 */
	var reg_cordedtelephones = /(^\(0\d{2}\)[- ]?\d{8}([-]?\d{4})?$|^0\d{2}[- ]?\d{8}([-]?\d{4})?$|^\(0\d{3}\)[-]?\d{7}([-]?\d{4})?$|^0\d{3}[-]?\d{7}([-]?\d{4})?$|^\d{7,8}([-]?\d{4})?$){1}/;
	/**
	 * 移动号码位数验证规则
	 */
	var  reg_mobile = /(^0?\d{11}$)/;
	/**
	 * 邮政编码验证规则
	 */
	var reg_post_code = /(^\d{6}$)/; 
	/**
	 * 邮箱验证规则
	 */
	var reg_email = /^\w+[@].*[.]\w+$/;
	/**
	 * URL 验证
	 */
	var reg_url =/^((http:\/\/)?|(https:\/\/)?)\w{1,}[.]\w{1,}[.]?\w+([?]\\w+[=]?.*)?/;
	
	
	/**
	 * 验证是否是数字
	 */
	this.matchDigital=function(inputValue){
		if(inputValue==undefined || ""==inputValue || inputValue.length==0){
			return false;
		}
		return reg_digital.test(inputValue);
	};
	/**
	 * 验证是否是正数（正整数或者正小数）
	 */
	this.matchPositiveDigital=function(inputValue){
		if(inputValue==undefined || ""==inputValue || inputValue.length==0){
			return false;
		}
		return reg_positive_digital.test(inputValue);
	};
	/**
	 * 验证是否是正数（正整数或者正小数）
	 */
	this.matchMobileFormat=function(inputValue){
		if(inputValue==undefined || ""==inputValue || inputValue.length==0){
			return false;
		}
		return reg_mobile_format.test(inputValue);
	};
	/**
	 * 座机号码验证
	 * 座机号码 支持格式： 区号+电话号码+分机号码： {3}{8}{4}:
	 *            (xxx)-xxxxxxxx,(xxx)xxxxxxxx,xxx-xxxxxxxx,xxxxxxxxxxx, {4}{7}
	 *            (xxxx)-xxxxxxx,(xxxx)xxxxxxx,xxxx-xxxxxxx xxxxxxxxxxx 电话号码：
	 *            xxxxxxx,xxxxxxx
	 */
	this.matchCordedTelephones =function(cordedTelephonesNumber){
		if (cordedTelephonesNumber == undefined || ""==cordedTelephonesNumber	|| cordedTelephonesNumber.length<7||cordedTelephonesNumber.length>19) {
			return false;
		}
		return reg_cordedtelephones.test(cordedTelephonesNumber);
	};
	/**
	 * 移动电话号码
	 */
	this.matchMobile = function(mobileNumber){
		if (mobileNumber == undefined ||""==mobileNumber||mobileNumber.length<11||mobileNumber.length>12) {
			return false;
		}
		return reg_mobile.test(mobileNumber);
	};
	/**
	 * 邮编验证
	 */
	this.matchPostcode= function(postCode){
		if (postCode == undefined || ""==postCode|| postCode.length!=6) {
			return false;
		}
		return reg_post_code.test(postCode);
	};
	/**
	 *规则符合 座机号码或者移动电话号码
	 */
	this.matchPhoneNumber = function(phoneNumber){
		return  this.matchCordedTelephones(phoneNumber)||this.matchMobile(phoneNumber);
	};
	this.matchEmail = function(email){
		if (email == undefined || ""==email	|| email.length<4) {
			return false;
		}
		return reg_email.test(email);
	};
	this.matchURL = function(url){
		if (url == undefined || ""==url	|| url.length<9) {
			return false;
		}
		return reg_url.test(url);
	};
	/**
	 * 验证身份证
	 */
	this.matchIDNO = function(num){
		num = num.toUpperCase();  
        //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。   
         if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(num)))   
         { 
//              alert('输入的身份证号长度不对，或者号码不符合规定。'); 
             return false; 
        } 
		//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
		//下面分别分析出生日期和校验位 
		var len, re; 
		len = num.length; 
		if (len == 15) 
		{ 
		re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/); 
		var arrSplit = num.match(re); 
		
		//检查生日日期是否正确 
		var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]); 
		var bGoodDay; 
		bGoodDay = (dtmBirth.getYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4])); 
		if (!bGoodDay) 
		{ 
//		         alert('输入的身份证号里出生日期不对！');   
		          return false; 
		} 
		else 
		{ 
		//将15位身份证转成18位 
		//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
         var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
          var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
          var nTemp = 0, i;   
           num = num.substr(0, 6) + '19' + num.substr(6, num.length - 6); 
          for(i = 0; i < 17; i ++) 
         { 
               nTemp += num.substr(i, 1) * arrInt[i]; 
          } 
          num += arrCh[nTemp % 11];   
           return num;   
		}   
		} 
		if (len == 18) 
		{ 
		re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/); 
		var arrSplit = num.match(re); 
		
		//检查生日日期是否正确 
		var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]); 
		var bGoodDay; 
		bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4])); 
		if (!bGoodDay) 
		{ 
//		alert(dtmBirth.getYear()); 
//		alert(arrSplit[2]); 
//		alert('输入的身份证号里出生日期不对！'); 
		return false; 
		} 
		else 
		{ 
		//检验18位身份证的校验码是否正确。 
		//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。 
		var valnum; 
		var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
		var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'); 
		var nTemp = 0, i; 
		for(i = 0; i < 17; i ++) 
		{ 
		nTemp += num.substr(i, 1) * arrInt[i]; 
		} 
		valnum = arrCh[nTemp % 11]; 
		if (valnum != num.substr(17, 1)) 
		{ 
//		alert('18位身份证的校验码不正确！应该为：' + valnum); 
		return false; 
		} 
		return num; 
		} 
		} 
		return false; 
	};
	/**
	 * str 需要替换的字符串
	 * replaceStr 符合规则的部分替换的内容
	 * 如 传入('111e222','');后返回111
	 * */
	this.replaceNonNumeric=function(str,replaceStr){
		try {
			return str.replace(reg_non_numeric,replaceStr);
		} catch (e) {
			return '';
		}
	};
	/**
	 * 匹配全部是0的字符串
	 * */
	this.matchZero=function(str){
		try {
			return reg_zero.test(str);
		} catch (e) {
			return false;
		}
	};
}
/**
 * 调用方法 
 * var reg = new  RegexKit();
	*reg.matchCordedTelephones(cordedTelephonesNumber);
	*reg.matchMobile(mobileNumber);
	*reg.matchPostcode(postCode);
	*reg.matchPhoneNumber(phoneNumber);
 */

