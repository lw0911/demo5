<?php 
error_reporting(E_ALL^E_NOTICE);
$classid='';
if (empty($classid)) {
	$classid=$_GET['classid'];
}
  
?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>XXX</title>
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="../css/style.css">
	<link rel="stylesheet" type="text/css" href="../css/animate.css">
	<script type="text/javascript" src="../js/jquery1.42.min.js"></script>
	<script type="text/javascript" src="../js/wow.min.js"></script>
	<script type="text/javascript" src="../js/jz.js"></script>
	<script type="text/javascript">new WOW().init();</script>
	<script language="javascript" src="../a1a0jsdata/newslist1.js"></script>
	<script language="javascript" src="../a1a0jsdata/newslist2.js"></script>
	<script language="javascript" src="../a1a0jsdata/newslisthelper.js"></script>
</head>
<body>
	<!-- 头部导航 -->
	<div class="header" id="header_box">

	</div>
	<!-- banner -->
	<div class="banner">
		<img src="../images/banner_02.png">
	</div>
	<!-- 导航 -->
	<div class="navigate wow animated fadeInLeft">
		<div class="w1200">
			<span>您的位置：</span>
			<a href="../index.php">首页</a>>
			<a href="list.php">新闻中心</a>>
			<a href="list.php?classid=2">
				<?php if(empty($classid)){ ?><?php echo '公司新闻' ?><?php }else{ ?>
				<?php echo "行业新闻"; ?>
				<?php } ?>
			</a>
		</div>
	</div>
	<!-- 内容部分 -->
	<div class="contain w1200">
		<div class="contain_tit wow animated fadeInRight">
			<h2>新闻中心<span>NEWS CENTER</span></h2>
			<div class="ficat">
				<a href="list.php" class="<?php if(empty($classid)){ ?><?php echo 'on' ?><?php } ?>">公司新闻</a>
				<a href="list.php?classid=2" class="<?php if($classid == 2){ ?><?php echo 'on' ?><?php } ?>">行业新闻</a>
			</div>
		</div>
		<!-- 左侧内容 -->
		<div id="divclassname" style="display:none;"></div>
		<div class="left-contain wow animated fadeInUp">
			<div class="news_list" id="divnewslist">
				<div class="news_list_item">
					<a href="{/$link/}">
						<div class="news_img">
							<img src="../a1a0fi0les/{/$path/}">
						</div>
						<div class="news_txt">
							<h2><em></em>{/$title/}</h2>
							<p>{/$keywords/}...</p>
							<div class="news_icon">
								<span>{/$date/}</span>
								<span>{/$num/}次</span>
							</div>
						</div>
					</a>
				</div>
			</div>
			<!-- 分页 -->
			<div class="page" id="divshowpage">
		<!-- 		<a href="">上一页</a>
				<a href="" class="on">1</a>
				<a href="">2</a>
				<a href="">3</a>
				<a href="">4</a>
				<a href="">5</a>
				<a href="">下一页</a> -->
			</div>
		</div>
		<!-- 右侧内容 -->
		<div class="right-contain wow animated fadeInDown">
			
		</div>
	</div>
	<!-- footer部分 -->
	<div class="footer wow animated fadeInUp">
		
	</div>
	<div class="record">
		<div class="w1200">
			<span class="fl">版权所有 XXX信息技术有限公司</span>
			<span class="fr">ALL RIGHTS RESERVED 沪 ICP 备 XXX 号 - 10</span>
		</div>
	</div>
</body>
</html>