<?php 

require_once("../a1a0xcfgp2/lib.generaluser.php");
$query_sql = "select * from $tablelink order by id desc";  
$result_lt = mysql_query($query_sql);  
//循环输出  
while($list = mysql_fetch_array($result_lt)){  
    $news_list[] = $list;
} 

$smallid=30;
$sql = "select * from $tablepro_class where rootid=$smallid order by pos desc";
$result = mysql_query($sql);  
//循环输出  
while($list_class = mysql_fetch_array($result)){  
    $pro_class[] = $list_class;
} 

 ?>
<div class="w1200">
	<div class="foot_menu wow animated fadeInLeft">
		<dl>
			<dt><em></em>关于我们</dt>
			<dd><a href="../about/introduce.html">企业介绍</a></dd>
			<dd><a href="../about/qualificate.html">公司资质</a></dd>
			<dd><a href="../about/architecte.html">公司架构</a></dd>
			<dd><a href="../about/team.html">团队介绍</a></dd>
		</dl>
		<dl>
			<dt><em></em>VR加盟</dt>
			<dd><a href="../join/policy.html">招商政策</a></dd>
			<dd><a href="../join/project.html">项目分析</a></dd>
			<dd><a href="../join/cost.html">成本分析</a></dd>
			<dd><a href="../join/return.html">回报分析</a></dd>
			<dd><a href="../join/process.html">加盟流程</a></dd>
		</dl>
		<dl>
			<dt><em></em>VR设备</dt>
			<dd><a href="../equip/list.php">VR设备</a></dd>
		</dl>
		<dl>
			<dt><em></em>VR游戏</dt>
            	<?php foreach ($pro_class as $k => $v): ?>
					<dd><a href="../pro/list.php?classid=<?php echo $v['classid'];?>" class="<?php if($v['classid'] == $classid){?><?php echo 'on' ?><?php } ?>"><?php echo $v['classname'] ?></a></dd>
				<?php endforeach; ?>
		</dl>
		<dl>
			<dt><em></em>VR视频</dt>
			<dd><a href="../video/list.html">VR视频</a></dd>
		</dl>
		<dl>
			<dt><em></em>新闻中心</dt>
			<dd><a href="../news/list.php">公司新闻</a></dd>
			<dd><a href="../news/list.php?classid=2">行业新闻</a></dd>
		</dl>
		<dl>
			<dt><em></em>联系我们</dt>
			<dd><a href="../contact/contact.html">联系我们</a></dd>
		</dl>
	</div>
	<div class="foot_code wow animated fadeInRight">
		<div class="foot_code_item fr">
			<img src="../images/code.jpg">
			<p>扫一扫关注我们</p>
		</div>
	</div>
</div>
<div class="clear"></div>
<div class="foot_link">
	<div class="w1200">
		<span>友情链接：</span>
		<?php if(!empty($news_list)):?>
			<?php foreach ($news_list as $k => $v):?>
				<a href="<?php echo $v['url']; ?>"><?php echo $v['address']; ?></a>
			<?php endforeach; ?>
		<?php endif; ?>
	</div>
</div>