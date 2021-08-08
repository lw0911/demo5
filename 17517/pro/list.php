<?php 
require_once("../a1a0xcfgp2/lib.generaluser.php");
 //获取classid
$classid  = $_GET['classid'];
//获取产品总条数
$query0 = "select count(*) from $tableproduct order by dateandtime desc";
$res0=mysql_query($query0);
$totalPage = mysql_fetch_row($res0);
//总共多少条产品
	$totalnews = $totalPage['0'];
	//每页有多少条产品
	$pagesize  =  12;
	//总共有多少页
	$totalPages = ceil($totalnews/$pagesize);
//当前页码
	$pages = $_GET['pages']?$_GET['pages']:1; 

	$prev = $pages-1;
	$next = $pages+1;

	//获取当前页码数据
	$offset = ($pages-1)*$pagesize;  
	if (empty($classid)) {
		$query_sql = "select * from $tableproduct where (classid=35 or classid=34 or classid=36 or classid=38 or classid=41 or classid=42 or classid=43) order by position desc limit $offset,$pagesize";
	} else {
		$query_sql = "select * from $tableproduct where classid=$classid order by position desc limit $offset,$pagesize";
	}
	  
$result_lt = mysql_query($query_sql);  
//循环输出  
while($list = mysql_fetch_array($result_lt)){  
    $pro_list[] = $list;
} 
$smallid=30;
$sql = "select * from $tablepro_class where rootid=$smallid order by pos desc";
$result = mysql_query($sql);  
//循环输出  
while($list_class = mysql_fetch_array($result)){  
    $pro_class[] = $list_class;
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
		<div class="contain_game wow animated fadeInUp">
			<ul>
			    <?php if(!empty($pro_list)):?>
						<?php foreach($pro_list as $k=>$v):?>
							<li>
								<a href="<?php echo '../pro/display.php?id='.$v['id'] ?>">
									<img src="<?php echo $weburl.'/a1a0fi0les/'.$v['imageurl'] ?>">
									<p><?php echo $v['name']; ?></p>
									<div class="contain_game_star">
										<span>惊恐指数：</span>
										<?php for ($i=1; $i<=$v['keywords']; $i++) { 
											 echo '<em></em>'.'<span style="display:none;">'.$i.'</span>';
										} ?>
									</div>
								</a>
							</li>
						<?php endforeach;?>
				<?php endif;?>
			</ul>
			<!-- 分页 -->
			<div class="page">
				<?php if($pages !=1) { ?>
							<a href="?pages=<?php echo $prev; ?>">上一页</a>
						<?php }else{ ?>
							<a href="javascript:;">上一页</a>
						<?php } ?>
						<?php 

							for ($i=1; $i <= $totalPages; $i++) { 
								 $p = $i==$pages ? 'on':'';
									echo "<a href='?pages=".$i."' class='ys ".$p."'>$i</a>";
							}
						 ?>
						<?php if($next <= $totalPages) { ?>
							<a href="?pages=<?php echo $next; ?>">下一页</a>
						<?php }else{ ?>
							<a href="javascript:;">下一页</a>
						<?php } ?>
			</div>
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