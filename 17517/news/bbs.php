<?
header("Content-type: text/html; charset=utf-8"); 
require_once("../a1a0xcfgp2/lib.generaluser.php");
require_once("../a1a0xcfgp2/lib/MyInterface.php");
session_start();
extract($_GET);
if($action=="add")
{
	$MyInterface = new MyInterface();
	$date=date("Y-m-d H:i:s"); 
	$postarrays = array_addslashes($_POST);
	extract($postarrays);
	if(!$username)
	{
		$MyInterface->goback("姓名不能为空");
	}
	if(!$phone)
	{
		$MyInterface->goback("电话不能为空");
	}
	if(!$content)
	{
		$MyInterface->goback("留言内容不能为空");
	}
	/*if($code != $_SESSION['checkcode'])
	{
		$MyInterface->goback("请输入正确的验证码");
	}*/
	$content = str_replace( "onerror","ononerroror", $content );
	$content = str_replace( "location.href","locationhref", $content);
	$chkStr = $title.$address.$content;
	if($MyInterface->blockList($chkStr))
	{
		$MyInterface->goback("请正常提交");
	}
  $reply = $_POST['reply'];
	$query="INSERT INTO $tableguestbook ( `id` , `name` , `sex` , `title` ,`email`, `content` , `dateandtime` , `phone` , `address`,`ip`,`reply` ) 
	 VALUES ( NULL , '$username', '$sex', '$title','$email', '$content', '$date', '$phone', '$address','".$_SERVER['REMOTE_ADDR']."','$reply')";
	$result = mysql_query($query) or die(mysql_error());
	//$_SESSION['checkcode'] = rand(1000,9999);
	echo "<script>alert('留言成功');window.location='".$_SERVER['HTTP_REFERER']."';</script>";
}
?><!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>在线留言-水荷塘-蒸汽石锅鱼</title>
<link rel="stylesheet" type="text/css" href="../css/index.css"/>
<link rel="stylesheet" type="text/css" href="../css/erjiye.css"/>

<!--手风琴 start-->
<script type="text/javascript" src="../js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript" src="../js/jquery.SuperSlide.2.1.1.js"></script>
<!--手风琴 end-->
<style>
.header{ width:100%; min-width:1250px; height:536px; margin:0 auto;}
.banner{ width:100%; min-width:1250px; height:536px; margin:0 auto; background:url(../images/banner/banner2.jpg) no-repeat center;}
.a6 {margin-top:150px;}
.right_inner2 {min-height:903px;margin-top:15px;}
.right_inner2 ul li{ border-bottom:1px #996600 dashed; line-height:35px;}
.right_inner2 ul li a:hover{ color:#001b96}
.right_inner2 a{ color:#6d6d6d;}
.right_inner2 h1{ width:581px; border-bottom:1px solid #b4b4b4; font-size:16px; text-align:center; margin-bottom:10px;}
.right_inner2 li span{ float:right; color:#870500;}
.a1{height:200px}
.right_inner { width:900px; margin:0 auto; padding-bottom:20px;}
.right_inner ul li{ border-bottom:1px #996600 dashed; line-height:45px;}
.right_inner ul li a:hover{ color:#c39d5f;}
.right_inner a{ color:#000;}
.right_inner h1{ width:581px; border-bottom:1px solid #b4b4b4; font-size:16px; text-align:center; margin-bottom:10px;}
.right_inner li span{ float:right; color:#870500;}
.cc{font-size:16px; color:#000; line-height:30px; border-bottom:1px dashed #666; text-align:center}
#smll_pic{ float:left; margin-left:5px;}
table td{ height:35px;}
</style>
</head>

<body>
<div class="header">
	
    <div class="banner">
    	<iframe marginwidth="0"  marginheight="0" src="../iframe/nav.html" style="position:fixed;" frameborder="0" noresize="noResize" width="100%" min-width="1250" scrolling="No"  height="190" allowtransparency=true></iframe>
    	<iframe marginwidth="0"  marginheight="0" src="../iframe/header.html" frameborder="0" noresize="noResize" width="100%" min-width="1250" scrolling="No"  height="536" allowtransparency=true></iframe>
    </div>
</div>

<div class="geduan"></div>
<!--
<div class="erdh">
	<div class="er4" style="width:610px;">
    	
    		<ul>
            	<li class="li1"><img src="../images/ly.png" /></li>
                <li class="li2"><a href="#">在线留言</a></li>
           </ul>
    </div>
</div>

<div class="geduan"></div>
-->
<div class="ab1">
	<div class="abb1">
    	<div id="sideMenu">
     <div class="h3bottom">
     	<div class="h3bb">
        	<div class="ptop"><img src="../images/ly.gif" /></div>
          	<div class="pbot">
            	<div class="pl"><img src="../images/gd2anniu2.png" /></div>
                <div class="pc">
                  <h1 style="text-align:center; line-height:45px; color:#c39d5f; font-size:24px; font-weight:inherit; margin-top:17px;">在线留言</h1>
                <img style=" margin-left:45px; " src="../images/xian.gif" width="835" height="26">
                <table width="835" border="0" style=" color:#FFF; margin-left:41px;">
     <tr>
          <td><table width="100%" height="600" border="0" cellpadding="0" cellspacing="0" class="hei12"  style="padding-left:5px;">
        <tr>
          <td valign="top">
		  
		                 <table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td height="36" align="center"></td>
                </tr>
              </table>
            <form action="bbs.php?action=add" method="post" name="form1" id="form1">
                <table width="100%"  border="0" cellpadding="4" cellspacing="1" bgcolor="#ffffff"  class="white12">
                  <tr >
                    <td height="30" align="center" bgcolor="#30180C"><strong>姓&nbsp;&nbsp;&nbsp;&nbsp;名:</strong></td>
                    <td width="84%" height="30" align="left" bgcolor="#30180C"  class="STYLE2">&nbsp;<input name="username" type="text" class="input" size="25" />&nbsp;&nbsp;电&nbsp;&nbsp;&nbsp;&nbsp;话：<input name="title" type="text" class="input" size="25" /></td>
                  </tr>
                  <tr >
                    <td height="30" align="center" bgcolor="#8B543E"><strong>地&nbsp;&nbsp;&nbsp;&nbsp;址:</strong></td>
                    <td width="84%" height="30" align="left" bgcolor="#8B543E"  class="STYLE2">&nbsp;<input name="address" type="text" class="input" size="60" /></td>
                  </tr>
                  <tr >
                    <td height="30" align="center" bgcolor="#B36C4F"><strong>电&nbsp;&nbsp;&nbsp;&nbsp;话:</strong></td>
                    <td width="84%" height="30" align="left" bgcolor="#B36C4F"  class="STYLE2">&nbsp;<input name="phone" type="text" class="input" size="60" /></td>
                  </tr>
                  <tr >
                    <td height="30" align="center" bgcolor="#8B543E"><strong>邮&nbsp;&nbsp;&nbsp;&nbsp;箱:</strong></td>
                    <td width="84%" height="30" align="left" bgcolor="#8B543E"  class="STYLE2">&nbsp;<input name="email" type="text" class="input" size="60" /></td>
                  </tr>
                  <tr >
                    <td height="30" align="center" bgcolor="#B36C4F"><strong>性&nbsp;&nbsp;&nbsp;&nbsp;别:</strong></td>
                    <td width="84%" height="30" align="left" bgcolor="#B36C4F"  class="STYLE2">&nbsp;&nbsp;&nbsp;&nbsp;男：<input name="sex" type="radio" class="input1" value="男" checked="checked" />  &nbsp;&nbsp;&nbsp;&nbsp; 女：<input name="sex" type="radio" class="input1" value="女" /></td>
                  </tr>
                  <tr >
                    <td height="30" align="center" bgcolor="#8B543E"><strong>主&nbsp;&nbsp;&nbsp;&nbsp;题:</strong></td>
                    <td width="84%" height="30" align="left" bgcolor="#8B543E"  class="STYLE2">&nbsp;<input name="title" type="text" class="input" size="60" /></td>
                  </tr>
                  <tr >
                    <td align="center" valign="middle" bgcolor="#B36C4F"><strong>留&nbsp;&nbsp;&nbsp;&nbsp;言:</strong></td>
                    <td style="padding:10px 0 10px 5px;;" align="left" bgcolor="#B36C4F"><strong>
                      <textarea name="content" cols="60" rows="10" class="input"></textarea>
                    </strong></td>
                  </tr>
                 
                  <tr bgcolor="#a5c89f" >
                    <td height="50" colspan="2" align="center" bgcolor="#30180C"><table width="57%" border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                          <td align="center"><input name="提交" type="submit" value="提交留言" style="height:26px;">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input name="botton" type="reset" value="重新填写" style="height:26px;"></td>
                        </tr>
                    </table></td>
                  </tr>
                </table>
            </form></td>
        </tr>
      </table></td>

     </tr>
</table>
                
                
                
                
              
<div class="main2_right" style=" margin-top:20px;">
  <div class="right_inner">
             		
                
              </div>
              <div class="clear"></div>
        </div>
                
                
              </div>
                <div class="pr"><img src="../images/gd2anniu2.png" /></div>
            </div>
          </div>
     </div>
</div>
<!-- sideMenu End --> 

<script type="text/javascript">
  jQuery("#sideMenu").slide({
	  titCell:"h2", //鼠标触发对象
	  targetCell:"div", //与titCell一一对应，第n个titCell控制第n个targetCell的显示隐藏
	  effect:"slideDown", //targetCell下拉效果
	  delayTime:700 , //效果时间
	  triggerTime:150, //鼠标延迟触发时间（默认150）
	  defaultPlay:true,//默认是否执行效果（默认true）
	  trigger:"mouseover",
	 // returnDefault:true //鼠标从.sideMen移走后返回默认状态（默认false）
	  easing:"easeOutElastic"
	  });
</script>
    </div>
</div>
<div class="gongdong" style=" width:100%; min-width:1250px; height:275px;"><iframe marginwidth="0"  marginheight="0" src="../iframe/dianmian.html" frameborder="0" noresize="noResize" width="100%" scrolling="No"  height="275" allowtransparency=true></iframe></div>
<div class="geduan"></div>
<div class="joinusbbb">
     <div class="joinbbb">
          <iframe marginwidth="0"  marginheight="0" src="../iframe/joinus2.html" frameborder="0" noresize="noResize" width="1250" scrolling="No"  height="705" allowtransparency=true></iframe>
     </div>
</div>
<div class="geduan"></div>
<div class="footer">
     <div class="f1">
          <iframe marginwidth="0"  marginheight="0" src="../iframe/footer.html" frameborder="0" noresize="noResize" width="1250" scrolling="No"  height="190" allowtransparency=true></iframe>
     </div>
</div>


</body>
</html>