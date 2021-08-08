function getlisturl(tourl){
	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
	var browser = navigator.userAgent.toLowerCase();
	for (var i=0; i<mobileAgent.length; i++){ 
		if (browser.indexOf(mobileAgent[i])!=-1){ 
			//var tourl="";
			if(location.href.match("csaist.cn")){
				if(location.href.indexOf("?jj")>0)
					tourl=tourl.replace("csaist.cn","csaist.cn").replace("allstc.com","csaist.cn").replace("yyaist.cn","csaist.cn").replace("hyaist.cn","csaist.cn").replace("cdaist.cn","csaist.cn").replace("hnaiya.com","csaist.cn")+"?refurl="+location.search;
				else
					tourl=tourl.replace("csaist.cn","csaist.cn").replace("allstc.com","csaist.cn").replace("yyaist.cn","csaist.cn").replace("hyaist.cn","csaist.cn").replace("cdaist.cn","csaist.cn").replace("hnaiya.com","csaist.cn");
			}
			if(location.href.match("allstc.com")){
				if(location.href.indexOf("?jj")>0)
					tourl=tourl.replace("csaist.cn","allstc.com").replace("allstc.com","allstc.com").replace("yyaist.cn","allstc.com").replace("hyaist.cn","allstc.com").replace("cdaist.cn","allstc.com").replace("hnaiya.com","allstc.com")+"?refurl="+location.search;
				else
					tourl=tourl.replace("csaist.cn","allstc.com").replace("allstc.com","allstc.com").replace("yyaist.cn","allstc.com").replace("hyaist.cn","allstc.com").replace("cdaist.cn","allstc.com").replace("hnaiya.com","allstc.com");
			}
			if(location.href.match("yyaist.cn")){
				if(location.href.indexOf("?jj")>0)
					tourl=tourl.replace("csaist.cn","yyaist.cn").replace("allstc.com","yyaist.cn").replace("yyaist.cn","yyaist.cn").replace("hyaist.cn","yyaist.cn").replace("cdaist.cn","yyaist.cn").replace("hnaiya.com","yyaist.cn")+"?refurl="+location.search;
				else
					tourl=tourl.replace("csaist.cn","yyaist.cn").replace("allstc.com","yyaist.cn").replace("yyaist.cn","yyaist.cn").replace("hyaist.cn","yyaist.cn").replace("cdaist.cn","yyaist.cn").replace("hnaiya.com","yyaist.cn");
			}
			if(location.href.match("hyaist.cn")){
				if(location.href.indexOf("?jj")>0)
					tourl=tourl.replace("csaist.cn","hyaist.cn").replace("allstc.com","hyaist.cn").replace("yyaist.cn","hyaist.cn").replace("hyaist.cn","hyaist.cn").replace("cdaist.cn","hyaist.cn").replace("hnaiya.com","hyaist.cn")+"?refurl="+location.search;
				else
					tourl=tourl.replace("csaist.cn","hyaist.cn").replace("allstc.com","hyaist.cn").replace("yyaist.cn","hyaist.cn").replace("hyaist.cn","hyaist.cn").replace("cdaist.cn","hyaist.cn").replace("hnaiya.com","hyaist.cn");
			}
			if(location.href.match("cdaist.cn")){
				if(location.href.indexOf("?jj")>0)
					tourl=tourl.replace("csaist.cn","cdaist.cn").replace("allstc.com","cdaist.cn").replace("yyaist.cn","cdaist.cn").replace("hyaist.cn","cdaist.cn").replace("cdaist.cn","cdaist.cn").replace("hnaiya.com","cdaist.cn")+"?refurl="+location.search;
				else
					tourl=tourl.replace("csaist.cn","cdaist.cn").replace("allstc.com","cdaist.cn").replace("yyaist.cn","cdaist.cn").replace("hyaist.cn","cdaist.cn").replace("cdaist.cn","cdaist.cn").replace("hnaiya.com","cdaist.cn");
			}
			if(location.href.match("hnaiya.com")){
				if(location.href.indexOf("?jj")>0)
					tourl=tourl.replace("csaist.cn","hnaiya.com").replace("allstc.com","hnaiya.com").replace("yyaist.cn","hnaiya.com").replace("hyaist.cn","hnaiya.com").replace("cdaist.cn","hnaiya.com").replace("hnaiya.com","hnaiya.com")+"?refurl="+location.search;
				else
					tourl=tourl.replace("csaist.cn","hnaiya.com").replace("allstc.com","hnaiya.com").replace("yyaist.cn","hnaiya.com").replace("hyaist.cn","hnaiya.com").replace("cdaist.cn","hnaiya.com").replace("hnaiya.com","hnaiya.com");
			}
			location.href=tourl;
			break;
		} 
	}
}

function getpageurl(id){
	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
	var browser = navigator.userAgent.toLowerCase(); 
	var isMobile = false;
	for (var i=0; i<mobileAgent.length; i++){ 
		if (browser.indexOf(mobileAgent[i])!=-1){ 
			isMobile = true; 
			//alert(mobileAgent[i]); 
			if(location.href.match(".csaist.cn"))
			{
				tourl ="http://m.csaist.cn/article.php?aid="+id+(location.search?"&refurl="+location.search:"");
			}
			if(location.href.match(".allstc.com"))
			{
				tourl ="http://m.allstc.com/article.php?aid="+id+(location.search?"&refurl="+location.search:"");
			}
			if(location.href.match(".yyaist.cn"))
			{
				tourl ="http://m.yyaist.cn/article.php?aid="+id+(location.search?"&refurl="+location.search:"");
			}
			if(location.href.match(".hyaist.cn"))
			{
				tourl ="http://m.hyaist.cn/article.php?aid="+id+(location.search?"&refurl="+location.search:"");
			}
			if(location.href.match(".cdaist.cn"))
			{
				tourl ="http://m.cdaist.cn/article.php?aid="+id+(location.search?"&refurl="+location.search:"");
			}
			if(location.href.match(".hnaiya.com"))
			{
				tourl ="http://m.hnaiya.com/article.php?aid="+id+(location.search?"&refurl="+location.search:"");
			}
			if(location.href.match(".zzaist.cn"))
			{
				tourl ="http://m.zzaist.cn/article.php?aid="+id+(location.search?"&refurl="+location.search:"");
			}
			location.href = tourl;
			break;
		} 
	}
}

function getzhuantiurl(tourl){
	var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
	var browser = navigator.userAgent.toLowerCase(); 
	var isMobile = false; 
	for (var i=0; i<mobileAgent.length; i++){ 
		if (browser.indexOf(mobileAgent[i])!=-1){ 
			isMobile = true;
			if(tourl=="")
			{
				var tourl="http://"+location.host.replace("www","m");
			}
			location.href =tourl;
			break;
		} 
	} 
}