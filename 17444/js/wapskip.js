//移动设备访问跳转
function is_mobile() {
 var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
 var u = navigator.userAgent;
 //if (null == u) {
 // return true;
 //}
 var result = regex_match.exec(u);
 if (null == result) {
  return false
 } else {
  return true
 }
}
//alert(is_mobile());
if (is_mobile()) {
  document.location.href= 'http://wap.hfyjy.com/'; 
  /*var url =document.location.href;
  if(url=='http://www.hfyjy.com/'){
  document.location.href= 'http://wap.hfyjy.com/';
  }
  else if(url=='http://www.hfyjy.cn/'){
  document.location.href= 'http://wap.hfyjy.cn/';
  }
  else if(url=='http://www.hfyjy.net/'){
  document.location.href= 'http://wap.hfyjy.net/';
  }
  else if(url=='http://www.hfyjy.com.cn/'){
  document.location.href= 'http://wap.hfyjy.com.cn/';
  }*/
}


