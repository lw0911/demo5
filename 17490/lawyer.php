<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=Edge">
<title>广东XXX律师事务所</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script type="text/javascript" src="js/jquery-1.11.3.min.js"></script>
<script type="text/javascript" src="js/jquery.SuperSlide.js"></script>	
</head>
<body>
<div class="inner-banner">
	<div style="height: 400px;; background:url(images/banner2.jpg) no-repeat center top; background-size: cover;"></div>
</div>
<div class="nav-bar">
	<div class="nav">
		<div class="logo"><a href="index.php"><img src="images/logo.jpg" alt=""></a></div>
		<ul class="navbar-nav">
			<li><a href="about.php">关于XXX</a></li>
			<li><a href="lawyer.php" class="active">XXX律师</a></li>
			<li><a href="news.php">XXX新闻</a></li>
			<li><a href="case.php">XXX案例</a></li>
			<li><a href="business.php">业务范围</a></li>
			<li><a href="client.php">服务客户</a></li>
			<li><a href="newlaw.php">新法速递</a></li>
			<li><a href="contact.php">联系我们</a></li>
		</ul>
		<div class="icon-bar">
			<a href="javascript:;" class="icon-weixin"></a>
			<a href="javascript:;" class="icon-sina"></a>
			<a href="javascript:;" class="icon-email"></a>
			<a href="javascript:;" class="icon-phone"></a>
		</div>
		<span class="clearfix"></span>
	</div>
</div>
<!--main主体-->
<div class="main">
	<div class="here">
		<a href="index.php">首页</a>&nbsp;&nbsp;&gt;&nbsp;&nbsp;<a href="lawyer.php">XXX律师</a>
	</div>
	<div class="common-block">
		<div class="lawyer-main">
			<div class="lawyer-photo"><img src="images/lawyer1.jpg" width="500" height="500" alt=""></div>
			<div class="lawyer-info">
				<div class="lawyer-name">蒋  勇</div>
				<div class="english-name">Jiang Yong</div>
				<div class="partner">首席合伙人</div>
				<div class="lawyer-word">
					<p>XXX律师事务所的主任合伙人</p>
					<p>创办并领导XXX致力成为中国最值得尊重和信赖的律师事务所</p>
					<p>追求极致</p>
				</div>
				<div class="lawyer-contact phone">XXX</div>
				<div class="lawyer-contact email">XXX</div>
			</div>
		</div>
		<div class="lawyer-tit">尽我们所能，不辜负你的信赖</div>
		<p class="our-best">我们尽心尽力工作，只为让商业领域的争议解决变得更加尽善尽美。通过高效的团队协同，严谨的流程设计和不计成本的时间投入，您将见证我们在每个案件的每个细节里如何精雕细琢。从优秀到卓越，我们孜孜不倦，力求每一次开庭都近乎无懈可击——因为我们始终坚信，这不仅是您的托付，也是我们的作品。</p>
		<div class="lawyer-list"><!--此处使用Ajax实现类似于翻页-->
			<div class="lawyer-item">
				<div class="small"><img src="images/lawyer2.jpg" width="305" height="305" alt=""></div>
				<div class="small-info">
					<div class="lawyer-name">蒋  勇</div>
					<div class="english-name">Jiang Yong</div>
					<div class="small-word">
						<p>XXX律师事务所的主任合伙人</p>
						<p>成为中国最值得尊重和信赖的律师事务所</p>
					</div>
					<div class="small-contact phone1">XXX</div>
					<div class="small-contact email1">XXX</div>
				</div>
			</div>
			<div class="lawyer-item">
				<div class="small"><img src="images/lawyer2.jpg" width="305" height="305" alt=""></div>
				<div class="small-info">
					<div class="lawyer-name">蒋  勇</div>
					<div class="english-name">Jiang Yong</div>
					<div class="small-word">
						<p>XXX律师事务所的主任合伙人</p>
						<p>成为中国最值得尊重和信赖的律师事务所</p>
					</div>
					<div class="small-contact phone1">XXX</div>
					<div class="small-contact email1">XXX</div>
				</div>
			</div>
			<div class="lawyer-item">
				<div class="small"><img src="images/lawyer2.jpg" width="305" height="305" alt=""></div>
				<div class="small-info">
					<div class="lawyer-name">蒋  勇</div>
					<div class="english-name">Jiang Yong</div>
					<div class="small-word">
						<p>XXX律师事务所的主任合伙人</p>
						<p>成为中国最值得尊重和信赖的律师事务所</p>
					</div>
					<div class="small-contact phone1">XXX</div>
					<div class="small-contact email1">XXX</div>
				</div>
			</div>
		</div>
		<?php include('page.php'); ?>
	</div>
	<span class="clearfix"></span>
</div>
<?php include('footer.php'); ?>	
</body>
</html>