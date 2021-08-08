<?php 
require_once("../a1a0xcfgp2/lib.generaluser.php");

$smallid=30;
$sql = "select * from $tablepro_class where rootid=$smallid order by pos desc";
$result = mysql_query($sql);  
//循环输出  
while($list_class = mysql_fetch_array($result)){  
    $pro_class[] = $list_class;
} 


$id = $_GET['id'];
$sql01 = "select * from $tableproduct where id=$id";
$result01 = mysql_query($sql01);  
//循环输出  
while($list_class01 = mysql_fetch_object($result01)){  
    $pro_data = $list_class01;
} 

// print_r($pro_data);die;
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
			<a href="">首页</a>>
			<a href="">VR游戏</a>
		</div>
	</div>
	<!-- 内容部分 -->
	<div class="contain w1200">
		<div class="contain_tit wow animated fadeInRight">
			<h2>VR游戏<span>VR GAMES</span></h2>
			<div class="ficat">
			   <?php foreach ($pro_class as $k => $v): ?>
					<a href="list.php?classid=<?php echo $v['classid'];?>" class="<?php if($v['classid'] == $classid){?><?php echo 'on' ?><?php } ?>"><?php echo $v['classname'] ?></a>
				<?php endforeach; ?>
			</div>
		</div>
		<!-- 左侧内容 -->
		<div class="left-contain wow animated fadeInUp">
			<div class="game_detail">
				<div class="game_detail_img">
					<img src="<?php echo '../a1a0fi0les/'.$pro_data->imageurl ?>">
				</div>
				<div class="game_detail_txt">
					<h2><?php echo $pro_data->name; ?></h2>
					<div class="contain_game_star">
						<span>高空挑战指数：</span>
						<?php for ($i=1; $i<= $pro_data->keywords; $i++) { 
											 echo '<em></em>'.'<span style="display:none;">'.$i.'</span>';
						} ?>
					</div>
					<p class="mrt20">游戏定位：中型恐怖互动体感</p>
					<p>游戏人数：<?=$pro_data->procode?>人</p>
					<p>适合对象：<?=$pro_data->marketprice?>岁以上</p>
					<p>游戏特色：<?=$pro_data->memprice?></p>
					<p class="mrt20">平均时间：<?=$pro_data->danwei?></p>
				</div>
				<div class="clear"></div>
				<div class="game_detail_info">
					<?=$pro_data->content?>
				</div>
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