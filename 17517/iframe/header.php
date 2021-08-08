<?php 
	require_once("../a1a0xcfgp2/lib.generaluser.php");
	$smallid=30;
	$sql = "select * from $tablepro_class where rootid=$smallid order by pos desc";
	$result = mysql_query($sql);  
	//循环输出  
	while($list_class = mysql_fetch_array($result)){  
	    $pro_class[] = $list_class;
	} 
 ?>
	<div class="w1200">
			<!-- logo部分 -->
			<div class="logo">
				<a href="../index.php">
					<img src="../images/logo.png">
				</a>
			</div>
			<!-- 菜单部分 -->
			<div class="menu">
				<ul>
					<li class="menu_total">
						<a href="../index.php" class="menu_a">网站首页</a>
					</li>
					<li class="menu_total">
						<a href="../about/introduce.html" class="menu_a">关于我们</a>
						<ul class="menu_drop">
							<li><a href="../about/introduce.html">企业介绍</a></li>
							<li><a href="../about/qualificate.html">公司资质</a></li>
							<li><a href="../about/architecte.html">公司架构</a></li>
							<li><a href="../about/team.html">团队介绍</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="../join/policy.html" class="menu_a">VR加盟</a>
						<ul class="menu_drop">
							<li><a href="../join/policy.html">招商政策</a></li>
							<li><a href="../join/project.html">项目分析</a></li>
							<li><a href="../join/cost.html">成本分析</a></li>
							<li><a href="../join/return.html">回报分析</a></li>
							<li><a href="../join/process.html">加盟流程</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="../equip/list.php" class="menu_a">VR设备</a>
						<ul class="menu_drop">
							<li><a href="../equip/list.php">VR设备</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="../pro/list.php" class="menu_a">VR游戏</a>
						<ul class="menu_drop">
							<?php foreach ($pro_class as $k => $v): ?>
								<li><a href="../pro/list.php?classid=<?php echo $v['classid'];?>" class="<?php if($v['classid'] == $classid){?><?php echo 'on' ?><?php } ?>"><?php echo $v['classname'] ?></a></li>
							<?php endforeach; ?>
						</ul>
					</li>
					<li class="menu_total">
						<a href="../video/list.html" class="menu_a">VR视频</a>
						<ul class="menu_drop">
							<li><a href="../video/list.html">VR视频</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="../news/list.php" class="menu_a">新闻中心</a>
						<ul class="menu_drop">
							<li><a href="../news/list.php">公司新闻</a></li>
							<li><a href="../news/list.php?classid=2">行业新闻</a></li>
						</ul>
					</li>
					<li class="menu_total">
						<a href="../contact/contact.html" class="menu_a">联系我们</a>
						<ul class="menu_drop">
							<li><a href="../contact/contact.html">联系我们</a></li>
						</ul>
					</li>
				</ul>
			</div>
			<!-- 联系电话 -->
			<div class="tel">
				<p>咨询热线<br/><span>XXX</span></p>
			</div>
		</div>		