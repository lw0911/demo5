<% @ Page language="c#" %>
<script Language="c#" runat="server">
string thecode;
public void Page_Load()
 {
   thecode=Request.QueryString["code"];
   if(!IsNum(thecode))
    {
      thecode="无效的查询码";
    }
 }
private bool IsNum(string str)
 {
  string str1="0123456789";
  if(str=="" ||   str==null)
   {
    return false;
   }

  for(int i=0;i<str.Length;i++)
   {
    if(str1.IndexOf(str[i])==-1)
     {
       return false;
     }
   }
  return true;
 }
</script>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>提交成功!</title>
<meta name="Author" content="XXX" />
<meta http-equiv="X-UA-Compatible" content="IE=7" />
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<style type="text/css">
html,body{height:100%}
body,div,ul,li,table,p,h1,form,legend,fieldset,input button,select,textarea,button{margin:0px;padding:0px;font-family:inherit;font-size:inherit;}
body{word-wrap:break-word;text-align:center;font:12px/1.6em Verdana,Helvetica,Arial,sans-serif;color:#333333;}
table{border-collapse:collapse;border-spacing:0;margin:0 auto 0 auto;text-align:center}
a{color:#333333;text-decoration:underline;}
a:hover{text-decoration:none;}
div{line-height:25px;padding:5 0 5px 0}
</style>
</head>
<body>
<table border="0" align="center" cellpadding="0" cellspacing="0" style="width:500px;height:100%;">
  <tr>
    <td height=100% align="center" valign="center">
      <div align="left"><img src=images/suc.png></div>
      <div align="left">请记住您的信息查询码：<span style="color:#ff0000;font-size:18px"><%=thecode%></span>，通过此编码可查询您提交的信息处理进度！</div>
      <div align="left" style="padding:15px 0 0 0"><a href="<%=Request.QueryString["to"]%>#">请点击这里返回提交页面</a></div>
    </td>
 </tr>
</table>
</body>
</html>