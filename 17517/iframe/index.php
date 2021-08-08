<?php 

    require_once("a1a0xcfgp2/lib.generaluser.php");
 	$query_sql = "select * from $tablenews order by id desc";  
    $result_lt = mysql_query($query_sql);  
    //循环输出  
    while($list = mysql_fetch_array($result_lt)){  
        $news_list[] = $list;
        $news_1 = array_slice($news_list,0,2);
		$news_2 = array_slice($news_list,2,2);
    } 

 ?>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>XXX</title>
	<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<script type="text/javascript" src="js/jquery1.42.min.js"></script>
	<script type="text/javascript" src="js/jquery.SuperSlide.2.1.1.js"></script>
	<script type="text/javascript" src="js/cpqh.js"></script>
	<script type="text/javascript" src="js/wow.min.js"></script>
	<script type="text/javascript">new WOW().init();</script>
</head>
<body>
	<!-- 头部导航 -->
	<div class="header">
		<div class="w1200">
			<!-- logo部分 -->
			<div class="logo">
				<a href="index.php">
					<img src="images/logo.png">
				</a>
			</div>
			<!-- 菜单部分 -->
			<div class="menu">
				<ul>
					<li class="menu_total">
						<a href="index.php" class="menu_a on">网站首页</a>
					</li>
					<li class="menu_total">
						<a href="about/introduce.html" class="menu_a">关于我们</a>
						<ul class="menu_drop">
							<li><a href="about/introduce.html">企业介绍</a></li>
							<li><a href="about/qualificate.html">公司资质</a></li>
							<li><a href="about/architecte.html">公司架构</a></li>
							<li><a href="about/team.html">团队介绍</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="join/policy.html" class="menu_a">VR加盟</a>
						<ul class="menu_drop">
							<li><a href="join/policy.html">招商政策</a></li>
							<li><a href="join/project.html">项目分析</a></li>
							<li><a href="join/cost.html">成本分析</a></li>
							<li><a href="join/return.html">回报分析</a></li>
							<li><a href="join/process.html">加盟流程</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="equip/list.php" class="menu_a">VR设备</a>
						<ul class="menu_drop">
							<li><a href="equip/list.php">VR设备</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="pro/list.php" class="menu_a">VR游戏</a>
						<ul class="menu_drop">
							<li><a href="pro/list.html">盒子英雄</a></li>
							<li><a href="pro/list.html">生化危机</a></li>
							<li><a href="pro/list.html">绝壁求生</a></li>
							<li><a href="pro/list.html">魂飞魄散</a></li>
							<li><a href="pro/list.html">绝命地铁</a></li>
							<li><a href="pro/list.html">白色惧塔</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="video/list.html" class="menu_a">VR视频</a>
						<ul class="menu_drop">
							<li><a href="video/list.html">VR视频</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="news/list.php" class="menu_a">新闻中心</a>
						<ul class="menu_drop">
							<li><a href="news/list.php">公司新闻</a></li>
							<li><a href="news/list.php?classid=2">行业新闻</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="contact/contact.html" class="menu_a">联系我们</a>
						<ul class="menu_drop">
							<li><a href="contact/contact.html">联系我们</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<script type="text/javascript">
				$(".menu_total").hover(function(){
					$(this).find(".menu_drop").stop().slideToggle();
				});
			</script>
			<!-- 联系电话 -->
			<div class="tel">
				<p>咨询热线<br/><span>XXX</span></p>
			</div>
		</div>		
	</div>
	<!-- banner -->
	<div class="banner">
		<div id="slideBox" class="slideBox">
			<div class="hd">
				<ul><li></li><li></li><li></li></ul>
			</div>
			<div class="bd">
				<ul>
					<li>
						<img src="images/banner_01.png" class="banner_total" />
						<div class="w1200">
							<div class="banner_icon wow animated bounceInDown">
								<p>致力于中国VR互动娱乐游戏开发</p>
								<p>支持中国VR游戏产业健康发展</p>
								<a href="contact/contact.html">我要咨询</a>
							</div>
						</div>						
					</li>
					<li>
						<img src="images/banner_01.png" class="banner_total"/>
						<div class="w1200">
							<div class="banner_icon wow animated bounceInDown">
								<p>致力于中国VR互动娱乐游戏开发</p>
								<p>支持中国VR游戏产业健康发展</p>
								<a href="contact/contact.html">我要咨询</a>
							</div>
						</div>
					</li>
					<li>
						<img src="images/banner_01.png" class="banner_total"/>
						<div class="w1200">
							<div class="banner_icon wow animated bounceInDown">
								<p>致力于中国VR互动娱乐游戏开发</p>
								<p>支持中国VR游戏产业健康发展</p>
								<a href="contact/contact.html">我要咨询</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<script type="text/javascript">
			jQuery(".slideBox").slide({mainCell:".bd ul",effect:"left",autoPlay:false});
		</script>
	</div>
	<!-- 关于我们 -->
	<div class="about">
		<div class="w1200">
			<div class="about_tit wow animated bounceInDown">
				<h2>关于我们</h2>
				<span></span>
				<p>ABOUT US</p>
			</div>
			<div class="about_img wow animated bounceInLeft">
				<img src="images/about_img01.png" class="about_icon01">
				<img src="images/about_img02.png" class="about_icon02">
				<em></em>
				<p>INTRODUCTION</p>
				<span></span>
			</div>
			<div class="about_txt wow animated bounceInRight">
				<h2>XXX信息技术有限公司</h2>
				<p>XXX信息技术有限公司成立于2004年4月，由多年从事游戏技术研发和具有资深运营管理行业经验的精英创立是国内最早从事手机游戏研发的企业之一，现有员工近150人，其中本科及以上学历占80%，研发人员超过100人。</p>
				<p>2012年着手进行VR研究，并开始实现VR与游戏的融合，经过长期的知识、技术的沉淀，现已研发出新一代VR沉浸式互动娱乐产品二十余款，具有世界先进水平，并为此创立自己的VR游戏品牌“VR+互娱地带”，以内容带动产品、以服务带动消费、以品牌带动市场为核心价值理念，致力于中国大陆的VR游戏市场的开发，以保证中国大陆...</p>
				<a href="about/introduce.html" class="more">查看更多→</a>
			</div>
		</div>
	</div> 
	<!-- 招商加盟 -->
	<div class="join">
		<div class="w1200">
			<div class="join_tit about_tit wow animated bounceInDown">
				<h2>招商加盟</h2>
				<span></span>
				<p>JOIN US</p>
				<p class="join_tit_txt">地方政府合作，商城、地产商合作，游乐场、主题公园合作</p>
			</div>
			<div class="join_con">
				<img src="images/join_img02.png" class="join_icon01 wow animated bounceInUp">
				<div class="join_icon02 wow animated bounceInLeft" data-wow-delay=".2s">
					<a href="join/policy.html">
						<h2>招商政策</h2>
						<span></span>
					</a>
				</div>
				<div class="join_icon03 wow animated bounceInLeft" data-wow-delay=".4s">
					<a href="join/project.html">
						<h2>项目分析</h2>
						<span></span>
					</a>
				</div>
				<div class="join_icon04 wow animated bounceInRight" data-wow-delay=".6s">
					<a href="join/cost.html">
						<h2>成本分析</h2>
						<span></span>
					</a>
				</div>
				<div class="join_icon05 wow animated bounceInRight" data-wow-delay=".8s">
					<a href="join/return.html">
						<h2>回报分析</h2>
						<span></span>
					</a>
				</div>
			</div>
		</div>
	</div>
	<!-- VR设备 -->
	<div class="equip">
		<div class="w1200">
			<div class="equip_tit about_tit wow animated flipInX">
				<h2>VR设备</h2>
				<span></span>
				<p>VR EQUIPMENT</p>
				<p class="equip_tit_txt">丰富的娱乐设备，体验不拘一格，让玩家流连忘返！</p>
			</div>
			<div class="equip_con wow animated fadeInUp">
				<div id="focus_Box"> 
			  		<span class="prev">&nbsp;</span> 
			  		<span class="next">&nbsp;</span>
				    <ul class="ul3d">
				  	  	<li>
				  	  		<a href="" class="img">
				  	  			<img src="images/equip_img01.png">
				  	  		</a>
						</li>
				  	  	<li>
				  	  		<a href="" class="img">
				  	  			<img src="images/equip_img02.png">
				  	  		</a>
						</li>
				  	  	<li>
				  	  		<a href="" class="img">
				  	  			<img src="images/equip_img03.png">
				  	  		</a>
						</li>
				    </ul>
				</div>
				<p style="text-align:center;"><a href="equip/list.php" class="more">查看更多→</a></p>
			</div>
		</div>
	</div>
	<!-- VR游戏 -->
	<div class="game">
		<div class="game_tit about_tit wow animated bounceInDown">
			<h2>VR游戏</h2>
			<span></span>
			<p>VR GAMES</p>
			<p class="game_tit_txt">强大的制作团队，丰富的游戏内容，让娱乐更精彩！</p>
		</div>
		<div class="game_con wow animated rubberBand">
			<img src="images/game_img02.png">
		</div>
		<a href="pro/list.html" class="more wow animated bounceInUp">查看更多→</a>
	</div>
	<!-- 新闻中心 -->
	<div class="news">
		<div class="w1200">
			<div class="equip_tit about_tit wow animated fadeInDown">
				<h2>新闻中心</h2>
				<span></span>
				<p>NEWS CENTER</p>
			</div>
			<div class="news_txt wow animated fadeInLeft">
				<?php if (!empty($news_1)): ?>
				<?php foreach ($news_1 as $k => $v): ?>
					<div class="news_item">
						<a href="<?php echo $weburl.'/a1a0html/news'.$v['id'].'.html';?>">
							<h2><em></em><?php echo $v['title']; ?></h2>
							<p><?php echo mb_substr(strip_tags($v['content']), 0,35); ?>...</p>
							<div class="news_icon">
								<span><?php echo mb_substr($v['dateandtime'],0,10); ?></span>
								<span><?php echo rand(300,500); ?>次</span>
							</div>
						</a>
					</div>
				<?php endforeach; ?>
				<?php endif; ?>
			</div>
			<div class="news_img wow animated fadeInRight">
					<div class="news_part fl">
						<a href="<?php echo $weburl.'/a1a0html/news'.$news_2[0]['id'].'.html';?>">
							<img src="<?php echo $weburl.'/a1a0fi0les/'.$news_2[0]['path'];?>">
							<p><?php echo mb_substr(strip_tags($news_2[0]['content']), 0,35,'utf-8'); ?>...</p>
							<div class="news_icon">
								<span><?php echo mb_substr($news_2[0]['dateandtime'],0,10); ?></span>
								<span><?php echo rand(300,500); ?>次</span>
							</div>
						</a>
					</div>
					<div class="news_part fr">
						<a href="<?php echo $weburl.'/a1a0html/news'.$news_2[1]['id'].'.html';?>">
							<img src="<?php echo $weburl.'/a1a0fi0les/'.$news_2[1]['path'];?>">
							<p><?php echo mb_substr(strip_tags($news_2[1]['content']), 0,35,'utf-8'); ?>...</p>
							<div class="news_icon">
								<span><?php echo mb_substr($news_2[1]['dateandtime'],0,10); ?></span>
								<span><?php echo rand(300,500); ?>次</span>
							</div>
						</a>
					</div>
			</div>
			<div class="clear"></div>
			<p style="text-align:center;"><a href="news/list.php" class="more animated fadeInUp">查看更多→</a></p>
		</div>
	</div>
	<!-- footer部分 -->
	<div class="footer">
		<div class="w1200">
			<div class="foot_menu wow animated fadeInLeft">
				<dl>
					<dt><em></em>关于我们</dt>
					<dd><a href="about/introduce.html">企业介绍</a></dd>
					<dd><a href="about/qualificate.html">公司资质</a></dd>
					<dd><a href="about/architecte.html">公司架构</a></dd>
					<dd><a href="about/team.html">团队介绍</a></dd>
				</dl>
				<dl>
					<dt><em></em>VR加盟</dt>
					<dd><a href="join/policy.html">招商政策</a></dd>
					<dd><a href="join/project.html">项目分析</a></dd>
					<dd><a href="join/cost.html">成本分析</a></dd>
					<dd><a href="join/return.html">回报分析</a></dd>
				</dl>
				<dl>
					<dt><em></em>VR设备</dt>
					<dd><a href="equip/list.php">VR设备</a></dd>
				</dl>
				<dl>
					<dt><em></em>VR游戏</dt>
					<dd><a href="pro/list.php">盒子英雄</a></dd>
					<dd><a href="pro/list.php">生化危机</a></dd>
					<dd><a href="pro/list.php">绝壁求生</a></dd>
					<dd><a href="pro/list.php">魂飞魄散</a></dd>
					<dd><a href="pro/list.php">绝命地铁</a></dd>
					<dd><a href="pro/list.php">白色惧塔</a></dd>
				</dl>
				<dl>
					<dt><em></em>VR视频</dt>
					<dd><a href="video/list.html">VR视频</a></dd>
				</dl>
				<dl>
					<dt><em></em>新闻中心</dt>
					<dd><a href="news/list.php">公司新闻</a></dd>
					<dd><a href="news/list.php">行业新闻</a></dd>
				</dl>
				<dl>
					<dt><em></em>联系我们</dt>
					<dd><a href="contact/contact.html">联系我们</a></dd>
				</dl>
			</div>
			<div class="foot_code wow animated fadeInRight">
				<div class="foot_code_item fr">
					<img src="images/code.jpg">
					<p>扫一扫关注我们</p>
				</div>
			</div>
		</div>
		<div class="clear"></div>
		<div class="foot_link">
			<div class="w1200">
				<span>友情链接：</span>
				<script type="text/javascript" src="a1a0jsdata/linklist.js"></script>
				<script language="javascript">		
				for ( i = 0 ;i < linklist.length && i<5; i ++ ){
				  document.write('<a href="'+linklist[i].url+'">'+linklist[i].address+'</a>');
				}
				</script>
			</div>
		</div>
	</div>
	<div class="record">
		<div class="w1200">
			<span class="fl">版权所有 &#169; 2020<sup>TM</sup> XXX信息技术有限公司</span>
			<span class="fr">ALL RIGHTS RESERVED 沪 ICP 备 XXX 号 - 10</span>
		</div>
	</div>
</body> 
<script type="text/javascript">
var url=window.location.href;
var parameter = '';
var url_j = url.split('?');
if(url_j){
	parameter = url_j[1];
}
var Cnet_floatCode = '<a href="hb/index.html" target="_blank"><img src="images/pf.png" border="0"></a>';
var Cnet_floatDelay = 25;
</script> 
<SCRIPT src="js/float.js" type="text/javascript"></SCRIPT>  
</html>