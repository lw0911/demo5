// JavaScript Document


//刷新验证码
function changeAuthCode() {
	var num = 	new Date().getTime();
	var rand = Math.round(Math.random() * 10000);
	num = num + rand;
	$('#ver_code').css('visibility','visible');
	if ($("#vdimgck")[0]) {
		$("#vdimgck")[0].src = "include/vdimgck.php@tag=.jpg" + num;
	}
	return false;	
}


function nTabs(thisObj,Num){
if(thisObj.className == "active")return;
var tabObj = thisObj.parentNode.id;
var tabList = document.getElementById(tabObj).getElementsByTagName("li");
for(i=0; i <tabList.length; i++)
{
  if (i == Num)
  {
   thisObj.className = "on"; 
      document.getElementById(tabObj+"_Content"+i).style.display = "block";
  }else{
   tabList[i].className = ""; 
   document.getElementById(tabObj+"_Content"+i).style.display = "none";
  }
} 
}
// 弹窗
    function popup() {
        //var thistop=$(this).offset().top;//获取当前位置的top
        //var maskHeight = $(document).height();//文档的总高度
        var maskWidth = $(window).width(); //窗口的宽度		
        var maskHeight = $(window).height(); //窗口高度		
        var popTop = (maskHeight / 2) - ($('#pop_box').height() / 2);
        var popLeft = (maskWidth / 2) - ($('#pop_box').width() / 2);
        $('#pop_box').css({ top: popTop, left: popLeft }).slideDown(600);
    }

    function submitData() {
        if (xxg()) {
            // 获取xml扩展字段信息
            var xmlInfoDoc = CreateXmlDocument("root");
            var rootNode = xmlInfoDoc.documentElement;

            // 申请目的
            var adviceAim = "";
            $(":checked[name='aim']").each(function () {
                adviceAim += $(this).val() + ",";
            });
            if (adviceAim.length > 0) {
                adviceAim = adviceAim.substring(0, adviceAim.length - 1);
            }
            AddXmlNode(xmlInfoDoc, "申请目的", adviceAim, rootNode);
            var xmlStr = ConvertXmlDocToXmlString(xmlInfoDoc);
            saveCustomInfo("form1", xmlStr);
        }
    }

    function sendSMs() {
        if (form1.txtPhone.value == "" || form1.txtPhone.value == "您的个人手机号") {
                alert("您没有填手机号码");
                document.form1.txtPhone.focus();
                return false;
            }
            if (form1.txtPhone.value.length < 11 || form1.txtPhone.value.length > 13) {
                alert("手机号码格式不正确");
                document.form1.txtPhone.focus();
                return false;
            }
            if(form1.validate.value == ""){
            	alert("请填写图形验证码");
            	document.form1.validate.focus();
            	return false;
            }
			$.post("ck_validation.php",
			    {
			      validate:form1.validate.value
			    },
			    function(data){
			      if(data == "0"){
					alert("图形验证码错误，请重新填写！");
					document.form1.validate.focus();
					return false;

				}else{
					sendPhoneSMS(form1.txtPhone.value);
				}
			    })
    }   
// 顶部微信扫扫
    function showwx() {
        document.getElementById("hishop_wx").style.display = "block";
    }
    function closewx() {
        document.getElementById("hishop_wx").style.display = "none";
    }