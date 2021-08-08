<!-- VR设备 -->
<?php 
require_once("../a1a0xcfgp2/lib.generaluser.php");
$query="select * from $tableproduct where classid=32 order by dateandtime desc limit 4";
$res=mysql_query($query);
while ($rs=mysql_fetch_array($res,MYSQL_ASSOC)) 
{	
	$sb_arr[]= $rs;
}

$query_zx="select * from $tablenews order by dateandtime desc limit 6";
$reszx=mysql_query($query_zx);
while ($rs1=mysql_fetch_array($reszx,MYSQL_ASSOC)) 
{	
	$zx_arr[]= $rs1;
}

?>
			<div class="contain_equip">
				<div class="contain_equip_tit">
					<h2>VR设备</h2>
				</div>
				<div class="contain_equip_con">
					<ul>
						<?php if(!empty($sb_arr)): ?>
							<?php foreach ($sb_arr as $k => $v):?>
								<li>
									<a href="">
										<img src="<?php echo $weburl.'/a1a0fi0les/'.$v['imageurl'] ?>">
										<span><?php echo $v['name']; ?></span>
									</a>
								</li>
							<?php endforeach; ?>
						<?php endif; ?>

					</ul>
				</div>
			</div>
			<!-- 最新资讯 -->
			<div class="contain_news">
				<div class="contain_equip_tit contain_news_tit">
					<h2>最新资讯</h2>
				</div>
				<div class="contain_news_con">
					<ul>
						<?php if(!empty($zx_arr)): ?>
							<?php foreach ($zx_arr as $k => $v):?>
								<li>
									<a href="<?php echo $weburl.'/a1a0html/news'.$v['id'].'.html' ?>">
										<em></em>
										<p><?php echo $v['title']; ?></p>
										<span><?php echo str_replace('2018-','',mb_substr($v['dateandtime'], 0,10)) ; ?></span>
									</a>
								</li>
							<?php endforeach; ?>
						<?php endif; ?>
					</ul>
				</div>
			</div>
			<!-- 资讯热线 -->
			<div class="contain_tel">
				<h2>咨询热线：</h2>
				<p class="contain_tel_num">XXX</p>
				<h2>招商热线：</h2>
				<p class="contain_tel_num">18002296776；13710039568</p>
				<p class="contain_tel_add">公 司 地 址：广东省广州市天河区天府路233号华建大厦A座15层</p>
				<p class="contain_tel_add">旗舰店地址：广东省广州市海珠区新港中路354号珠影星光城 星光侠VR+互娱地带</p>
				<img src="../images/equip_img08.png" class="contain_tel_pho">
			</div>