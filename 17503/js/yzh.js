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


/**
 * 表单提交
 * @param idname
 */
function form_submit(idname){

    $("#"+idname).submit(function () {
        var self = $(this);
        $.post(self.attr("action"), self.serialize(), success, "json");
        return false;

        function success(data) {
            if (data.status == 1) {
                layer.msg(data.info, {
                    icon: 1,
                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
                }, function(){
                    $('#'+idname)[0].reset();
                });
            } else {
                layer.msg(data.info, {
                    icon: 2,
                    time: 2000 //2秒关闭（如果不配置，默认是3秒）
                });
            }
        }
    });
}

/**
 * JavaScript脚本实现回到页面顶部示例
 * @param acceleration 速度
 * @param stime 时间间隔 (毫秒)
 **/
function gotoTop(acceleration,stime) {
    acceleration = acceleration || 0.1;
    stime = stime || 10;
    var x1 = 0;
    var y1 = 0;
    var x2 = 0;
    var y2 = 0;
    var x3 = 0;
    var y3 = 0;
    if (document.documentElement) {
        x1 = document.documentElement.scrollLeft || 0;
        y1 = document.documentElement.scrollTop || 0;
    }
    if (document.body) {
        x2 = document.body.scrollLeft || 0;
        y2 = document.body.scrollTop || 0;
    }
    var x3 = window.scrollX || 0;
    var y3 = window.scrollY || 0;

    // 滚动条到页面顶部的水平距离
    var x = Math.max(x1, Math.max(x2, x3));
    // 滚动条到页面顶部的垂直距离
    var y = Math.max(y1, Math.max(y2, y3));

    // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
    var speeding = 1 + acceleration;
    window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));

    // 如果距离不为零, 继续调用函数
    if(x > 0 || y > 0) {
        var run = "gotoTop(" + acceleration + ", " + stime + ")";
        window.setTimeout(run, stime);
    }
}