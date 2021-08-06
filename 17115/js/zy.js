//TAB切换
var ROOT="";

function setcookie(name,value) {
    var Days = 30;
    var exp  = new Date();
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
}


function getcookie(name) {

    var arr = document.cookie.match(new RegExp("(^| )"+name+"=([^;]*)(;|$)"));

    if (arr != null) {
        return unescape(arr[2]);
    } else {
        return "";
    }
}

function delcookie(name) {

    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval=getCookie(name);

    if (cval!=null) document.cookie= name + "="+cval+";expires="+exp.toGMTString();
}

function resetVerifyCode() {

    var timenow = new Date().getTime();
    document.getElementById('verifyImage').src = ROOT+'/index.php?g=home&m=index&a=verify#'+timenow;
}


function showlogin(){

    var auth = getcookie('yzh_auth');

    if(auth != ''){
        $('#login_username').html(unescape(getcookie('ww_username')));
        $('#login_div').hide();
        $('.logined_div').show();
    }else{
        $('.logined_div').hide();
        $('#login_div').show();
    }
}

$(function(){
    showlogin();
});


function showon(obj,onobj,id){

    $(obj+' '+ onobj).click(function(){

        //$(this).parent().addClass('on').siblings().removeClass('on');

        if ($(this).parent().hasClass('on')) {
            $(this).parent().removeClass('on');
        } else {
            $(this).parent().addClass('on');
        }
    });

    if (id) {
        $('#catlist_'+id).parent().parent().addClass('on');
    }

}


//qq浮动
function Floaters() {

    this.delta=0.15;
    this.playid =null;
    this.items = [];
    this.addItem  = function(id,x,y,content) {

        var newItem = {};
        newItem.object = document.getElementById(id);

        if (x==0) {
            objw= newItem.object.offsetWidth;
            var body = (document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
            newItem.x = x = body.scrollLeft + (body.clientWidth - objw)/2;
            newItem.y = y;
        } else {
            newItem.x = x;
            newItem.y = y;
        }

        this.items[this.items.length] = newItem;
    }

    this.play = function(varname) {
        this.playid = setInterval(varname+'.plays()',30);
    }

    this.close = function(obj) {
        document.getElementById(obj).style.display='none';
        clearInterval(this.playid);
    }
}

Floaters.prototype.plays = function(){

    var diffY;

    if (document.documentElement && document.documentElement.scrollTop)
    {
        diffY = document.documentElement.scrollTop;
    }

    else if (document.body)
    {
        diffY = document.body.scrollTop;
    }else{}

    for(var i=0;i<this.items.length;i++) {

    var obj = this.items[i].object;
    var followObj_y = this.items[i].y;
    var total = diffY + followObj_y;

    if(this.items[i].x >= 0){
      obj.style['left'] = this.items[i].x+ 'px';
    }else{
      obj.style['right'] = Math.abs(this.items[i].x)+ 'px';
    }

    if(obj.offsetTop != total) {
      var oldy = (total - obj.offsetTop) * this.delta;
        newtop = obj.offsetTop + ( oldy>0?1:-1 ) * Math.ceil( Math.abs(oldy) );
      obj.style['top'] = newtop + 'px';
    }
  }
}


function changeorder(obj,moduleid,id,doit,ordercall){
  var objs  =  document.getElementById(obj);
  var datas={'moduleid':moduleid,'id': id,'num':objs.value};

  $.ajax({
    type:"POST",
    url:"/index.php?m=Order&a=ajax&do="+doit,
    data: datas,
    timeout:"4000",
    dataType:"JSON",
    success: function(data){
      if(data.data==1){
        ordercall.call(this,obj,moduleid,id,doit,data);
      }else{
        alert(doit + ' error'+data.msg);
      }
    },

    error:function(){
      alert("time out,try it");
    }
  });
}


function area_change(id,level,province,city,area,provinceid,cityid,areaid){
  var datas={'level':level,'provinceid':provinceid,'cityid':cityid,'areaid':areaid};
  $.ajax({
    type:"POST",
    url:"/index.php?m=ajax&a=area&id="+id,
    data: datas,
    timeout:"4000",
    dataType:"JSON",
    success: function(data){
      if(level==0){
        $('#'+province).html(data.province);
        $('#'+city).html(data.city);
        $('#'+area).html(data.area);
      }else if(level==1){
        $('#'+city).html(data.city);
        $('#'+area).html(data.area);
      }else if(level==2){
        $('#'+area).html(data.area);
      }
    },
    error:function(){
      alert("time out,try it");
    }
  });
}


function selectall(name) {
  if ($("#check_box").prop("checked")) {
    $("input[name='"+name+"']").each(function() {
      this.checked=true;
    });
  } else {
    $("input[name='"+name+"']").each(function() {
      this.checked=false;
    });
  }
}


function openwin(id,url,title,width,height,lock,yesdo,topurl){
    art.dialog.open(url, {
    id:id,
    title: title,
    lock:  lock,
    width: width,
    height: height,
    cancel: true,
    ok: function(){
            var iframeWin = this.iframe.contentWindow;
            var topWin = art.dialog.top;
            if (yesdo || topurl) {
                if (yesdo) {
                    yesdo.call(this,iframeWin, topWin);
                } else {
                    art.dialog.close();
                    topWin.location.href=topurl;
                }
            } else {
                var form = iframeWin.document.getElementById('dosubmit');form.click();
            }
            return false;
        }
    });
}

function showpicbox(url){
    art.dialog({
        padding: 2,
        title: 'Image',
        content: '<img src="'+url+'" />',
        lock: true
    });
}


/**
 * 成功提示
 * @param text 内容
 * @param title 标题
 */
function op_success(text, title) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-center",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr.success(text, title);
}
/**
 * 失败提示
 * @param text 内容
 * @param title 标题
 */
function op_error(text, title) {
    toastr.options = {
        "closeButton": true,
        "debug": false,
        "positionClass": "toast-center",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr.error(text, title);
}
/**
 * 信息提示
 * @param text 内容
 * @param title 标题
 */
function op_info(text, title) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "positionClass": "toast-center",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr.info(text, title);
}
/**
 * 警告提示
 * @param text 内容
 * @param title 标题
 */
function op_warning(text, title) {
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "positionClass": "toast-center",
        "onclick": null,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
    toastr.warning(text, title);
}

