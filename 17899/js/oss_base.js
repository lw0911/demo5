/////////////////////////////////////////////////////////////////////////////////
/// version 1.0.1
/// date    2007-3-13
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
/// Extended String
/////////////////////////////////////////////////////////////////////////////////
String.prototype.getByteLength = function()
{
	var bytes=0,i=0;
	for (; i<this.length; ++i,++bytes) {
		if ( this.charCodeAt(i) > 255 ) {
				++bytes;
		}
	}
	return bytes;
}

//查找有多少个双字节字符
String.prototype.getDwordNum=function()
{
    return this.getByteLength()-this.length;
}

//查找有多少个汉字字符
String.prototype.getChineseNum=function()
{
    return this.length-this.replace(/[\u4e00-\u9fa5]/g,"").length;
}

String.prototype.cutChinese = function(iMaxBytes,sSuffix)
{
    if(isNaN(iMaxBytes)) return this;
    if(this.getByteLength()<=iMaxBytes) return this;
	var i=0, bytes=0;
	for (; i<this.length && bytes<iMaxBytes; ++i,++bytes) {
		if ( this.charCodeAt(i) > 255 ) {
				++bytes;
		}
	}
	sSuffix=sSuffix||"";
	return (bytes-iMaxBytes==1?this.substr(0,i-1):this.substr(0,i))+sSuffix;
}

String.prototype.trimLeft = function()
{
    return this.replace(/^\s+/,"");
}

String.prototype.trimRight = function()
{
    return this.replace(/\s+$/,"");
}

String.prototype.trim = function()
{
    return this.trimLeft().trimRight();
}

String.prototype.replaceAll = function(sFrom, sTo)
{
    return this.split(sFrom).join(sTo);
}

String.prototype.replacePairs = function()
{
    var s = this;
    for (var i=0; i<arguments.length; ++i) {
        s = s.replaceAll(arguments[i][0], arguments[i][1]);
    }
    return s;
}

String.prototype.toHtml = function()
{
    return this.replacePairs.apply(this, String.prototype.toHtml.CONVERT_ARRAY);
}
String.prototype.toHtml.CONVERT_ARRAY =
[
    ["&", "&#38;"],
    [" ", "&#32;"],
    ["'", "&#39;"], 
    ["\"", "&#34;"],
    ["/", "&#47;"],
    ["<", "&#60;"],
    [">", "&#62;"],
    ["\\", "&#92;"],
    ["\n", "<br />"],
    ["\r", ""]
];
    
String.prototype.toInputValue = function()
{
    return this.replacePairs.apply(this, String.prototype.toInputValue.CONVERT_ARRAY);
}
String.prototype.toInputValue.CONVERT_ARRAY =
[
    ["&", "&#38;"],
    [" ", "&#32;"],
    ["'", "&#39;"],
    ["\"", "&#34;"],
    ["/", "&#47;"],
    ["<", "&#60;"],
    [">", "&#62;"],
    ["\\", "&#92;"],
    ["\n", ""],
    ["\r", ""]       
];

String.prototype.toTextArea = function()
{
    return this.replacePairs.apply(this, String.prototype.toTextArea.CONVERT_ARRAY);
}
String.prototype.toTextArea.CONVERT_ARRAY =
[
    ["&", "&#38;"],
    ["'", "&#39;"],
    ["\"", "&#34;"],
    ["/", "&#47;"],
    ["<", "&#60;"],
    [">", "&#62;"],
    ["\\", "&#92;"]
];

String.prototype.encode=function()
{
    return this.replace(/[\x00-\xFF]/g, function(c){
            if(c.charCodeAt(0)<0x80) {
                return escape(c);
            }
            else {
                return "%"+c.charCodeAt(0).toString(16).toUpperCase();
            }
        });
}

String.prototype.decode=function()
{
    return unescape(this);
}

// 校验邮箱地址
String.prototype.isMail=function()
{
    return /^(?:[\w-]+\.?)*[\w-]+@(?:[\w-]+\.)+[\w]{2,3}$/.test(this);    
}

//校验普通电话、传真号码：可以“+”开头，除数字外，可含有“-”
String.prototype.isTel=function()
{
    return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/.test(this);
}

//校验手机号码：必须以数字开头，除数字外，可含有“-”
String.prototype.isMobile=function()
{
    return /^1[3458]\d{9}$/.test(this);
}

//校验邮政编码
String.prototype.isZipCode=function()
{
    return /^(\d){6}$/.test(this);
}

String.prototype.isIDCard=function()
{
    var C15ToC18=function(c15) {
        var cId=c15.substring(0,6)+"19"+c15.substring(6,15);
        var strJiaoYan  =[  "1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];
        var intQuan =[7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
        var intTemp=0;
        for(i = 0; i < cId.length ; i++)
        intTemp +=  cId.substring(i, i + 1)  * intQuan[i];  
        intTemp %= 11;
        cId+=strJiaoYan[intTemp];
        return cId;
    }
    var Is18IDCard=function(IDNum) {
        var aCity={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外"};
    
        var iSum=0,info="",sID=IDNum;
        if(!/^\d{17}(\d|x)$/i.test(sID)) {
            return false;
        }
        sID=sID.replace(/x$/i,"a");
    
        if(aCity[parseInt(sID.substr(0,2))]==null) {
            return false;
        }
        
        var sBirthday=sID.substr(6,4)+"-"+Number(sID.substr(10,2))+"-"+Number(sID.substr(12,2));
        var d=new Date(sBirthday.replace(/-/g,"/"))
        
        if(sBirthday!=(d.getFullYear()+"-"+ (d.getMonth()+1) + "-" + d.getDate()))return false;
        
        for(var i = 17;i>=0;i --) iSum += (Math.pow(2,i) % 11) * parseInt(sID.charAt(17 - i),11)
        
        if(iSum%11!=1)return false;
        return true;
    }
    
    return this.length==15 ? Is18IDCard(C15ToC18(this)) : Is18IDCard(this);
}

//是否全是数字
String.prototype.isAllNum=function()
{
    return /^\d+$/.test(this);
}

//效验整数
String.prototype.isInt=function(iMin,iMax)
{
    if(!isFinite(this)) {
        return false;
    }
    if(!/^[+-]?\d+$/.test(this)) {
        return false;   
    }
    if(iMin!=undefined && parseInt(this)<parseInt(iMin)) {
        return false;
    }
    if(iMax!=undefined && parseInt(this)>parseInt(iMax)) {
        return false;
    }    
    return true;
}

//效验浮点数
String.prototype.isFloat=function(fMin,fMax)
{
    if(!isFinite(this)) {
        return false;
    }
    if(fMin!=undefined && parseFloat(this)<parseFloat(fMin)) {
        return false;
    }
    if(fMax!=undefined && parseFloat(this)>parseFloat(fMax)) {
        return false;
    }
    return true;
}

//是否全部是中文
String.prototype.isChinese=function()
{
    return this.getChineseNum()==this.length?true:false;
}

String.prototype.isEnglish=function()
{
    return /^[A-Za-z]+$/.test(this);
}

String.prototype.isURL=function()
{
    return /^http:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/.test(this);
}

String.prototype.isQQ=function()
{
    return /^[1-9]\d{4,9}$/.test(this) && parseInt(this)<=4294967294;   
}

String.prototype.isEmpty=function()
{
    return this.length==0?true:false;
}

/////////////////////////////////////////////////////////////////////////////////
/// Extended Date
/////////////////////////////////////////////////////////////////////////////////
Date.prototype.toShortDateString=function()
{
    var a=[];
    a.push(this.getFullYear());
    a.push(this.getMonth()+1);
    a.push(this.getDate());
    return a.join("-");
}

Date.prototype.toShortTimeString=Date.prototype.toLocaleTimeString;

Date.prototype.toShortString=function()
{
    return this.toShortDateString()+" "+this.toShortTimeString();
}

/////////////////////////////////////////////////////////////////////////////////
/// Extended Array
/////////////////////////////////////////////////////////////////////////////////
Array.prototype.clone=function()
{
    var a=[];
    for(var i=0; i<this.length; ++i) {
        a.push(this[i]);
    }
    return a;
}

/////////////////////////////////////////////////////////////////////////////////
/// URLUtil 
/////////////////////////////////////////////////////////////////////////////////
function URLUtil(sURL)
{
    this.hostname = (sURL.indexOf("://")==-1?
        (/^([^/:\?#]*)(?::|\/|$|\?|#)/.test(sURL)?RegExp["$1"]:""):
        (/:\/\/([^/:\?#]*)(?::|\/|$|\?|#)/.test(sURL)?RegExp["$1"]:"")).decode();
    this.hash = (/(#.*)/.test(sURL)?RegExp["$1"]:"").decode();
    this.protocol = (/^(.*?:)\/\//.test(sURL)?RegExp["$1"]:"").decode();
    this.port = (/[^:]*?:(\d{1,5})(\/|$)/.test(sURL)?RegExp["$1"]:"").decode();
    this.pathname = (sURL.indexOf("://")==-1?
        (/(\/[^#\?]*)/.test(sURL)?RegExp["$1"]:""):
        (/:\/\/.*?(\/[^\?#]*)/.test(sURL)?RegExp["$1"]:"")).decode();
    this._paramMap = this._parseParam(/\?(.*?)($|#)/.test(sURL)?RegExp["$1"]:"");
}

URLUtil.prototype._parseParam=function(sParams)
{
    var paramMap={};
    if(sParams.length>0) {
        var paramArray = sParams.split("&");
        for(var i=0;i<paramArray.length;++i) {
            var paramPair=paramArray[i].split("=");
            paramPair[0]=paramPair[0].decode();
            paramPair[1]=paramPair[1]?paramPair[1].decode():"";
            if(!paramMap[paramPair[0]]) {
                paramMap[paramPair[0]] = new Array(paramPair[1]);
            }
            else {
                paramMap[paramPair[0]].push(paramPair[1]);
            }
        }
    }
    return paramMap;
}

URLUtil.prototype.toString=function()
{
    var url="";
    if (this.protocol.length!=0) {
        url += this.protocol;
        url += "//";
    }
    url += this.hostname;
    if (this.port.length!=0){
        url += ":"
        url += this.port;
    }
    url += this.pathname;
    
    var pairArray=[];
    for (var i in this._paramMap) {
        for (var j=0;j<this._paramMap[i].length;++j){
            pairArray.push(i.encode()+"="+this._paramMap[i][j].encode());
        }
    }
    if(pairArray.length>0) {
        url += "?";
        url += pairArray.join("&");
    }

    url += this.hash;
    return url;
}

URLUtil.prototype.getParam=function(sName,sDefaultValue)
{
    return this._paramMap[sName]?this._paramMap[sName][0]:sDefaultValue||null;
}

URLUtil.prototype.getMultiParam=function(sName,sDefaultValue)
{
    return this._paramMap[sName]?this._paramMap[sName]:sDefaultValue||null;
}

URLUtil.prototype.setParam=function(sName, sValue)
{
    this.removeParam(sName).addParam(sName,sValue);
    return this;    
}

URLUtil.prototype.addParam=function(sName)
{
    if(!this._paramMap[sName]) {
        this._paramMap[sName] = [];
    }
    for(var i=1;i<arguments.length;++i) {
        this._paramMap[sName].unshift(arguments[i].toString());
    }
    return this;
}

URLUtil.prototype.removeParam=function(sName)
{
    delete this._paramMap[sName];
    return this;    
}

URLUtil.prototype.removeAllParams=function()
{
    this._paramMap = {};
    return this;    
}

if(!window.URL) {
    var URL=new URLUtil(location.href);
}

/////////////////////////////////////////////////////////////////////////////////
/// Cookie
/////////////////////////////////////////////////////////////////////////////////
if (!window.Cookie) {
  var Cookie = new Object();
}

Cookie.set = function(sName,sValue,iExpireSec,sDomain,sPath,bSecure)
{
    if(sName==undefined) {
        return;
    }
    if(sValue==undefined) {
        sValue="";
    }
    var oCookieArray = [sName+"="+escape(sValue)];
    if(!isNaN(iExpireSec)){
        var oDate = new Date();
        oDate.setTime(oDate.getTime()+iExpireSec*1000);
        oCookieArray.push("expires=" + oDate.toGMTString());
    }
	if(sDomain!=undefined){
		oCookieArray.push("domain="+sDomain);
	}
	if(sPath!=undefined){
	    oCookieArray.push("path="+sPath);
	}
	if(bSecure){
	    oCookieArray.push("secure");
	}
    document.cookie=oCookieArray.join("; ");
}

Cookie.get = function(sName,sDefaultValue)
{
    var sRE = "(?:; |^)" + sName + "=([^;]*);?";
    var oRE = new RegExp(sRE);
    
    if (oRE.test(document.cookie)) {
        return unescape(RegExp["$1"]);
    } else {
        return sDefaultValue||"";
    }
}

Cookie.clear = function(sName)
{
    var oDate = new Date();
    Cookie.set(sName,"", -oDate.getTime()/1000,"qq.com","/");
}

if(typeof setCookie == "undefined") var setCookie=Cookie.set;
if(typeof getCookie == "undefined") var getCookie=Cookie.get;
if(typeof clearCookie == "undefined") var clearCookie=Cookie.clear;
if(typeof deleteCookie == "undefined") var deleteCookie=clearCookie;


/////////////////////////////////////////////////////////////////////////////////
/// Validator
/////////////////////////////////////////////////////////////////////////////////

if (!Validator){
    var Validator = new Object();
}

Validator.DEFAULT_ERROR_HANDLER=function(elem, errmsg)
{
    alert(errmsg);    
    elem.focus();
}

Validator.VALIDATE_FUN =
{
    text: function(form,elem,desc,require,errmsg) {     // _min _max _data_type
        if ( elem.value.isEmpty() ) {
            if ( require ) {
                Validator.DEFAULT_ERROR_HANDLER(elem, "请填写"+desc);
                return false;                
            }
            else {
                return true;
            }
        }

        var data_type = elem.getAttribute("_data_type");    
        var checkData = Validator.VALIDATE_FUN.text.DATA_CHECK_FUN[data_type] || Validator.VALIDATE_FUN.text.DATA_CHECK_FUN["_default"];
        
        if (!checkData(elem.value)) {
            Validator.DEFAULT_ERROR_HANDLER(elem, errmsg||desc+"格式不正确");
            return false;
        }

        var min = elem.getAttribute("_min") || 0;
        var max = elem.getAttribute("_max") || Number.MAX_VALUE;
        
        var checkRange = Validator.VALIDATE_FUN.text.RANGE_CHECK_FUN[data_type] || Validator.VALIDATE_FUN.text.RANGE_CHECK_FUN["_default"];
        var r = checkRange(elem.value, min, max);
        if (!r.isEmpty()) {
            Validator.DEFAULT_ERROR_HANDLER(elem, errmsg||desc+r);
            return false;
        }
  
        return true;
    },
    
    file: function(form,elem,desc,require,errmsg) {     // _suffix
        if ( elem.value.isEmpty()) {
            if ( require ) {
                Validator.DEFAULT_ERROR_HANDLER(elem, "请上传"+desc);
                return false;     
            }
            else {
                return true;                   
            }
        }
        
        var suffix = elem.getAttribute("_suffix");
        if ( suffix == null ) {
            return true;
        }
        suffix = suffix.toLowerCase().split("|");
        var file_suffix = elem.value.substr(elem.value.lastIndexOf(".")+1).toLowerCase();
        
        for (var i=0;i<suffix.length;++i) {
            if ( file_suffix == suffix[i] ) {
                return true;   
            }
        }
        
        Validator.DEFAULT_ERROR_HANDLER(elem, errmsg||desc+"格式不正确");
        return false;
    },
    
    radio: function(form,elem,desc,require,errmsg) {
        if(!require) {
            return true;
        }
        
        var check_num=0;
        for(var i=0;i<form[elem.name].length;++i) {
            if ( form[elem.name][i].checked ) {
                ++check_num;
            }
        }
        
        if(!check_num) {
            Validator.DEFAULT_ERROR_HANDLER(elem, "请选择"+desc);
            return false;
        }
        return true;
    },
    
    "select-one": function(form,elem,desc,require,errmsg) {
        if (!require) {
            return true;
        }

        if (!elem.value.isEmpty()) {
            return true;
        }
        
        Validator.DEFAULT_ERROR_HANDLER(elem, "请选择"+desc);
        return false;
    },
  
    checkbox: function(form,elem,desc,require,errmsg) {     //_min _max  
        if(!require) {
            return true;
        }
         
        if(!form[elem.name].length) {
            form[elem.name].length=1;
        }
        
        if ( form[elem.name].length==1 ) {
            form[elem.name][0]={value:elem.value, checked:elem.checked};          
        }

        var check_num=0;
        for(var i=0;i<form[elem.name].length;++i) {
            if ( form[elem.name][i].checked ) {
                ++check_num;
            }
        }        
        
        if(!check_num) {
            Validator.DEFAULT_ERROR_HANDLER(elem, "请选择"+desc);
            return false;            
        }

        var min = elem.getAttribute("_min") || 0;
        var max = elem.getAttribute("_max") || Number.MAX_VALUE;        
        
        if (check_num<min) {
            Validator.DEFAULT_ERROR_HANDLER(elem, desc+"不得少于"+min+"项");
            return false;              
        }
        if (check_num>max) {
            Validator.DEFAULT_ERROR_HANDLER(elem, desc+"不得多于"+max+"项");
            return false;              
        }
        return true;
    },
    
    _default: function() {
        return true;
    }
}

Validator.VALIDATE_FUN.password=Validator.VALIDATE_FUN.text;
Validator.VALIDATE_FUN.textarea=Validator.VALIDATE_FUN.text;


Validator.VALIDATE_FUN.text.DATA_CHECK_FUN =
{
    email: function(v) {
        return v.isEmail();
    },

    tel: function(v) {
        return v.isTel();
    },
    
    mobile: function(v) {
        return v.isMobile();
    },
    
    zip_code: function(v) {
        return v.isZipCode();
    },
    
    id_card: function(v) {
        return v.isIDCard();
    },
    
    num: function(v) {
        return v.isAllNum();
    },

    int: function(v) {
        return v.isInt(); 
    },

    float: function(v) {
        return v.isFloat();
    },
    
    chinese: function(v) {
        return v.isChinese();   
    },
    
    english: function(v) {
        return v.isEnglish();   
    },
    
    qq: function(v) {
        return v.isQQ();   
    },
    
    url: function(v) {
        return v.isURL();
    },

    _default: function(v) {
        return true;
    }
}

Validator.VALIDATE_FUN.text.RANGE_CHECK_FUN =
{
    int: function(v, min, max) {
        var i_v=parseInt(v);
        if(i_v<min ) {
            return "不得小于"+min;
        }
        if(i_v>max) {
            return "不得大于"+max;
        }
        return "";
    },
    
    float: function(v, min, max) {
        var f_v=parseFloat(v);
        if(f_v<min ) {
            return "不得小于"+min;
        }
        if(f_v>max) {
            return "不得大于"+max;
        }
        return "";
    },    
    
    _default : function(v, min, max) {
        var len = v.getByteLength();
        if ( len<min ) {
            return "长度不得少于"+min+"个字节";
        }
        if ( len>max ) {
            return "长度不得多于"+max+"个字节";
        }
        return "";
    }
}

Validator.VALIDATE_FUN.text.RANGE_CHECK_FUN.qq=Validator.VALIDATE_FUN.text.RANGE_CHECK_FUN.int;


Validator.validate=function(theForm)
{
    var count = theForm.elements.length;   
    for(var i=0;i<count;i++){
        var elem = theForm.elements[i];

        var validate_fun = Validator.VALIDATE_FUN[elem.type] || Validator.VALIDATE_FUN["_default"];

        var required = false;
        
        if ( elem.getAttribute("_require")==null && elem.getAttribute("_required")!=null &&
                    (elem.getAttribute("_required")=="" || elem.getAttribute("_required")!="false") )
        {
            required = true;
        }
        if ( elem.getAttribute("_required")==null && elem.getAttribute("_require")!=null &&
                    ( elem.getAttribute("_require")=="" || elem.getAttribute("_require")!="false" ) )
        {
            required = true;                            
        }

        if (!validate_fun(theForm,elem,elem.getAttribute("_desc"),required,elem.getAttribute("_errmsg"))) {
            return false;
        }
    }
    return true;
}

/////////////////////////////////////////////////////////////////////////////////
/// PageRoller
/////////////////////////////////////////////////////////////////////////////////
var PageRoller=function(allpage, nowpage_name, location)
{
    this.nowpage_name = nowpage_name || PageRoller.DEFAULT_NOWPAGE_NAME;
    this.location = location || window.location;

    var url = new URLUtil(this._getReadLocation());

    this.nowpage = parseInt(url.getParam(this.nowpage_name))||0;
    this.allpage = parseInt(allpage)||1;

    if (this.allpage < 1) {
        this.allpage = 1;
    }
    if (this.nowpage < 0) {
        this.nowpage=0;
    }
    if (this.nowpage>=this.allpage ) {
        this.nowpage = this.allpage -1 ;
    }
}

PageRoller.DEFAULT_NOWPAGE_NAME = "page";

PageRoller.DEFAULT_CALLBACK_HANDLER = function(newpage, nowpage, allpage)
{
    if ( nowpage==newpage ) {
        if (newpage==0) {
            alert("已经是第一页了");
            return false; 
        }
        if (newpage==allpage-1) {
            alert("已经是最后一页了");
            return false;         
        }
    }
    return true;
}

PageRoller.prototype._getReadLocation=function()
{
    if(this.location.href!=undefined) {
        return this.location.href;
    }
    if(this.location.src!=undefined) {
        return this.location.src;
    }
    return this.location;
}

PageRoller.prototype.gotoPage=function(new_page, no_cache, call_back_handler)
{
    new_page = parseInt(new_page)||0;
    call_back_handler = call_back_handler || PageRoller.DEFAULT_CALLBACK_HANDLER;    

    if ( new_page < 0 ) {
        new_page = 0;
    }
    else if ( new_page>=this.allpage ) {
        new_page = this.allpage - 1;
    }
    
    if (call_back_handler(new_page, this.nowpage, this.allpage)==false) {
        return;
    }
    
    var url = new URLUtil(this._getReadLocation());
    this.nowpage = new_page;
    url.setParam(this.nowpage_name, this.nowpage);
    url.setParam("totalpage" ,this.allpage);
    if (no_cache==true) {
        var date = new Date();
        url.setParam("_patch_time", date.getTime());
    }
    else {
        url.removeParam("_patch_time");
    }

    if(this.location.href!=undefined) {
        this.location.href=url.toString();
    }
    if(this.location.src!=undefined) {
        this.location.src=url.toString();
    }
    this.location=url.toString();
    return;
}

PageRoller.prototype.go=function(relative_page, no_cache, call_back_handler)
{
    relative_page = parseInt(relative_page)||0;    
    return this.gotoPage(this.nowpage+relative_page, no_cache, call_back_handler);
}

PageRoller.prototype.back=function(no_cache, call_back_handler)
{
    return this.go(-1, no_cache, call_back_handler);
}

PageRoller.prototype.forward=function(no_cache, call_back_handler)
{
    return this.go(1, no_cache, call_back_handler);
}

PageRoller.prototype.previous = PageRoller.prototype.back;
PageRoller.prototype.next = PageRoller.prototype.forward;

PageRoller.prototype.getNowPage=function()
{
    return this.nowpage;
}

PageRoller.prototype.getAllPage=function()
{
    return this.allpage;
}

PageRoller.prototype.getLocation=function()
{
    return this.location;   
}

PageRoller.prototype.toString=function()
{
    return this._getReadLocation();
}

PageRoller.PAGE_INPUT_HANDLER=function(e,v)
{
    if (e.keyCode==13) {
        PageRoller.DEFAULT_PAGER.INSTANCE.gotoPage(v-1);
    }    
}

PageRoller.DEFAULT_PAGER = function(allpage,nowpage_name)
{
    PageRoller.DEFAULT_PAGER.INSTANCE = new PageRoller(allpage,nowpage_name);
    var Pager = PageRoller.DEFAULT_PAGER.INSTANCE;

    document.write('第'+ (Pager.getNowPage()+1) + '/' + Pager.getAllPage()+'页 &nbsp;&nbsp;&nbsp;');
    if (Pager.getNowPage()!=0)
        document.write('<a href="javascript:PageRoller.DEFAULT_PAGER.INSTANCE.back();">上一页</a>&nbsp;');
    if (Pager.getNowPage()+1!=Pager.getAllPage())
        document.write('<a href="javascript:PageRoller.DEFAULT_PAGER.INSTANCE.forward();">下一页</a>&nbsp;');
    document.write('<input id="_default_pager_input" type="text" size="4" maxlength="5" onkeyup="PageRoller.PAGE_INPUT_HANDLER(event,this.value)">');
    document.write('<a href="javascript:PageRoller.DEFAULT_PAGER.INSTANCE.gotoPage(document.getElementById(\'_default_pager_input\').value-1);">GO</a>');
}

/////////////////////////////////////////////////////////////////////////////////
// MultiSelect
// 推荐使用MultiSelect.create()来生成对象，参数不变
// handle_array   [handle_select1, handle_select2, ...]
// opt_data_array [opt_data1, opt_data2, ... ]
// opt_data       {t:text, v:value, s:selected, opt_data_array:[opt_data_array] }
// custom_onchange_fun_array [customer_onchange_fun1, customer_onchange_fun2, ...] 参数可选
/////////////////////////////////////////////////////////////////////////////////
var MultiSelect=function(select_array, opt_data_array, ext_opt_data_array, custom_onchange_fun_array)
{
    if ( select_array instanceof Array && select_array.length > 0 ) {

        this.select = select_array[0];
        this.left_selects = [];
        for (var i=1; i<select_array.length; ++i) {
            this.left_selects.push(select_array[i]);
        }

        this.opt_data_array = opt_data_array || [];
        this.ext_opt_data_array = ext_opt_data_array || [];
        
        if ( !custom_onchange_fun_array ) {
            custom_onchange_fun_array = [];
            for ( var i=0;i<select_array.length;++i ) {
                custom_onchange_fun_array.push(select_array[i].onchange || function(){} );
            }
        }

        this.custom_onchange_fun = custom_onchange_fun_array[0];
        this.left_custom_funs = [];
        for (var i=1; i<custom_onchange_fun_array.length; ++i) {
            this.left_custom_funs.push(custom_onchange_fun_array[i]);
        }

        this.init();
    }
}

MultiSelect.create=function(select_array, opt_data_array, ext_data_array, custom_onchange_fun_array)
{
    var obj = new MultiSelect(select_array, opt_data_array, ext_data_array, custom_onchange_fun_array);
    MultiSelect["_OBJ_"+MultiSelect._OBJECT_NUM++] = obj;
    return obj;
}

MultiSelect._OBJECT_NUM = 0;

MultiSelect.prototype.init=function()
{
    this._initOption();

    if ( this.left_selects.length>0 ) {
        this._initOnchangeHandler();
    }

    if ( this.select.onchange ) {
        this.select.onchange(0,1);
    }
    return;
}

MultiSelect.prototype.getSelectByIndex=function(index)
{
    if (index == 0) {
        return this;   
    }
    if (this.left_selects.length==0) {
        return null
    }
    return this.next.getSelectByIndex(index-1);
}

MultiSelect.prototype.getSelectByHandle=function(select_handle)
{
    if (select_handle==this.select) {
        return this;
    }
    if (this.left_selects.length==0) {
        return null;
    }
    return this.next.getSelectByHandle(select_handle);
}

MultiSelect.prototype._initOption=function()
{
    this.select.length = 0;
    
    //var opt_fragment = document.createDocumentFragment();
    //this._createOptionDom(this.ext_opt_data_array, opt_fragment);
    //this._createOptionDom(this.opt_data_array, opt_fragment);
    //this.select.appendChild(opt_fragment);
    
    this._createOption(this.ext_opt_data_array);
    this._createOption(this.opt_data_array);
}  

MultiSelect.prototype._createOptionDom=function(opt_data_array, opt_fragment)
{
    for ( var i=0; i<opt_data_array.length; ++i ) {
 
        var opt_data = opt_data_array[i];
        var o = document.createElement("option");

        if ( opt_data.t==undefined || opt_data.t==null ) {
            opt_data.t="";
        }
        
        if ( opt_data.v==undefined || opt_data.v==null ) {
            opt_data.v=opt_data.t;
        }
        o.setAttribute("value", opt_data.v);

        if ( opt_data.s ) {
            o.setAttribute("selected", true);
        }

        var t = document.createTextNode(opt_data.t);
        o.appendChild(t);
        opt_fragment.appendChild(o);
    }
}

MultiSelect.prototype._createOption=function(opt_data_array)
{
    for ( var i=0; i<opt_data_array.length; ++i ) {
 
        var opt_data = opt_data_array[i];

        if ( opt_data.t==undefined || opt_data.t==null ) {
            opt_data.t="";
        }
        
        if ( opt_data.v==undefined || opt_data.v==null ) {
            opt_data.v=opt_data.t;
        }

        this.select.options[this.select.length] = new Option(opt_data.t, opt_data.v, false, (opt_data.s==true ) );
    }
}

MultiSelect.CALL_TYPE = {};
MultiSelect.CALL_TYPE.INIT = 0;     // 初始化调用
MultiSelect.CALL_TYPE.PROGRAM = 1;  // 页面中显式调用select.onchange()
MultiSelect.CALL_TYPE.BROWSER = 2;  // 用户触发的onchange事件时调用

MultiSelect.prototype._initOnchangeHandler=function()
{
    var this_multi_select = this;
    var select_handle = this_multi_select.select;
    var custom_onchange_fun = this_multi_select.custom_onchange_fun;

    select_handle.onchange = function(event,init) {
        
        event = window.event || event;
        var call_type = MultiSelect.CALL_TYPE.INIT;

        if ( !init ) {
            if ( !event ) {
                call_type = MultiSelect.CALL_TYPE.PROGRAM;
            }
            else {
                call_type = MultiSelect.CALL_TYPE.BROWSER;
            }
        }

        var args = {
            event: event,
            select: select_handle,            
            call_type: call_type,
            multi_select: this_multi_select
        };

        if ( custom_onchange_fun(args)==false ) {
            return;
        }

        this_multi_select.next = new MultiSelect(this_multi_select.left_selects, 
                                                              this_multi_select._getNextSelectOptArray(select_handle.value),
                                                              this_multi_select._getNextExtSelectOptArray(select_handle.value),
                                                              this_multi_select.left_custom_funs);
    }
}

MultiSelect.prototype._getNextSelectOptArray=function(value)
{
    for ( var i=0; i<this.opt_data_array.length; ++i ) {
        if ( this.opt_data_array[i].v == value ) {
            return this.opt_data_array[i].opt_data_array;
        }
    }
    return [];
}

MultiSelect.prototype._getNextExtSelectOptArray=function(value)
{
    for ( var i=0; i<this.ext_opt_data_array.length; ++i ) {
        if ( this.ext_opt_data_array[i].v == value ) {
            return this.ext_opt_data_array[i].opt_data_array;
        }
    }
    
    if ( this.ext_opt_data_array.length <= 0 ) {
        return [];
    }
    return this.ext_opt_data_array[0].opt_data_array || [];
}


/*  |xGv00|4667f8824809eac1d28f7ef7ab3e430d */