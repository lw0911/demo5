<div class="banner">
	<div class="banner-list">
		<ul>
			<li style="background:url(images/banner.jpg) no-repeat; background-size:cover;"></li>
			<li style="background:url(images/banner.jpg) no-repeat; background-size:cover;"></li>
			<li style="background:url(images/banner.jpg) no-repeat; background-size:cover;"></li>
			<li style="background:url(images/banner.jpg) no-repeat; background-size:cover;"></li>
		</ul>
	</div>
	<div class="hd"><ul></ul></div>
</div>
<script type="text/javascript">
	$(".banner").slide({
		mainCell: '.banner-list ul',
		titCell: '.hd ul',
		effect: 'fold',
		autoPage: true,
		autoPlay: true,
		delayTime: 1000,
		interTime: 5000
	});
</script>