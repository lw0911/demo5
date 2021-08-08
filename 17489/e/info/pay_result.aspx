<% @ Page language="c#" %>
<script language="c#" runat="server">
 string Get_Url(string Type)
  {
    return "/e/member/index.aspx?s="+Request.QueryString["s"]+"&type="+Type;
  }
private bool IsNum(string str)
 {
  if(string.IsNullOrEmpty(str)){return false;}
  int rv=0;
  if(Int32.TryParse(str,out rv))
   {
    return true;  
   }
  else
   {
    return false;
   }
 }

</script>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>支付结果页面!</title>
<meta name="Author" content="XXX" />
<meta http-equiv="X-UA-Compatible" content="IE=7" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<style type="text/css">
html,body{height:100%}
body,div,ul,li,table,p,h1,form,legend,fieldset,input button,select,textarea,button{margin:0px;padding:0px;font-family:inherit;font-size:inherit;}
body{word-wrap:break-word;text-align:center;font:12px/1.6em Verdana,Helvetica,Arial,sans-serif;color:#333333;}
table{border-collapse:collapse;border-spacing:0;margin:0px auto 0px auto;text-align:center}
a{color:#333333;text-decoration:none;}
a:hover{text-decoration:underline;}
div{line-height:25px;padding:5 0 5px 0}
.bd{font-weight:bold}
</style>
</head>
<body>
<%
if(IsNum(Request.QueryString["s"]) && Request.QueryString["pay_no"]!=null){
PageAdmin.Member_Valicate MCheck=new PageAdmin.Member_Valicate();
MCheck.Member_Check(true,int.Parse(Request.QueryString["s"]));
string R_Url=Request.QueryString["r_url"];
if(string.IsNullOrEmpty(R_Url))
 {
   R_Url=Get_Url("mem_fnclst");
 }
else
 {
   R_Url=Server.UrlDecode(R_Url);
 }
%>
<table border="0" align="center" cellpadding="0" cellspacing="0" style="width:500px;height:100%;">
  <tr>
    <td height=100% align="center" valign="center">
      <div align="center">
 <TABLE border=0 align="center" cellPadding=5 cellSpacing=0>
   <tr>
       <td align="left"><img src="images/paysuc.png" border=0"></td>
   </tr>

   <TR> 
      <TD vAlign=top align="left"><span class="bd">充值金额：</span><span style="color:#ff0000;Font-Size:13px;font-weight:bold">￥<%=Server.HtmlEncode(Request.QueryString["pay_amount"])%></span></TD>
   </TR>

   <TR>   
      <TD vAlign=top align="left"><span class="bd">支付订单号：</span><%=Server.HtmlEncode(Request.QueryString["pay_no"])%></TD>
   </TR>

   <TR> 
     <TD vAlign=top align="left"><span class="bd">支付平台：</span><%=Server.HtmlEncode(Request.QueryString["pay_type"])%></TD>
   </TR>

   <TR> 
      <TD vAlign=top align="left"><span class="bd">支付时间：</span><%=DateTime.Now.ToString("yyyy-MM-dd HH:mm")%></TD>
   </TR>	

    <TR> 
      <TD vAlign=top align="left"><img src="images/loading.gif" style="width:16px;height:16px;vertical-align:middle"> <a href="<%=R_Url%>">页面自动转向中，如果长时间没有反应，请点击这里跳转！</a></TD>
   </TR>			
 </TABLE>
<script language="javascript">
 var T=3;
function ds()
 {
   if(T==1)
    {
       location.href="<%=R_Url%>";
    }
   T--;
 }
setInterval("ds()", 1000);
</script>

    </td>
 </tr>
</table>
<%
}
else
{
 Response.Redirect(Get_Url("mem_fnclst"));
}
%>
</body>
</html>