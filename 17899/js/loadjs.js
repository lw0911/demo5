var FBrowser=new Object();
FBrowser.isIE=((navigator.userAgent.indexOf('MSIE')==-1)?false:true);
FBrowser.isIE7=((FBrowser.isIE&&window.XMLHttpRequest)?true:false);
FBrowser.isIE6=((FBrowser.isIE&&!window.XMLHttpRequest&&window.ActiveXObject)?true:false);
FBrowser.isFirefox=((navigator.userAgent.indexOf('Firefox')==-1)?false:true);
FBrowser.isOpera=((navigator.userAgent.indexOf('Opera')==-1)?false:true);
function FloadJS(url,sucfn,failfn){
    var h=document.getElementsByTagName('HEAD').item(0);
    var js=document.createElement("script");
    js.type="text/javascript";
    js.onerror=function(){
        if('function'==typeof(failfn))
            failfn();
        js=null;
    }
    if(FBrowser.isIE){
        js.onreadystatechange=function(){
            if(this.readyState.toLowerCase()!="complete"&&this.readyState.toLowerCase()!="loaded") return;
            if(this.$funExeced!=true&&'function'==typeof(sucfn)){
                this.$funExeced=true;
                h.removeChild( js );
                sucfn();
            }
            js=null;
        }
    }
    /*else if(FBrowser.isOpera){
       // if('function'==typeof(sucfn))   sucfn();
    }*/
    else{
        js.onload=function(){
            if('function'==typeof(sucfn))  {sucfn();h.removeChild( js );}
            js=null;
        }
    }
    js.src=url;
    h.appendChild(js);
    //if(FBrowser.isOpera && 'function'==typeof(sucfn))   {sucfn();h.removeChild( js );}
}/*  |xGv00|bc90a4beab01b556cf45cf4090728b7f */