$(function(){
	$('.i_ma li:nth-child(3n)').css('margin-right',0);
	$('.video li:nth-child(3n)').css('margin-right',0);
	$('.pro .pro_l dl:nth-child(2n)').css('margin-right',0);
	$('.scd_m .news:last-child').css('border',0);
	
	$('.s_nava li a').click(function(){
		$(this).parent('li').siblings('li').removeClass('on');
		$(this).parent('li').addClass('on');
	});
})
// JavaScript Document
function b(){	
	t = parseInt(x.css('top'));
	y.css('top','19px');	
	x.animate({top: t - 19 + 'px'},'slow');	//19为每个li的高度
	if(Math.abs(t) == h-19){ //19为每个li的高度
		y.animate({top:'0px'},'slow');
		z=x;
		x=y;
		y=z;
	}
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
}
$(document).ready(function(){
	$('.swap').html($('.news_li').html());
	x = $('.news_li');
	y = $('.swap');
	h = $('.news_li li').length * 19; //19为每个li的高度
	setTimeout(b,3000);//滚动间隔时间 现在是3秒
	
})
$(function() {
	$('#owl-demo').owlCarousel({
		items: 1,
		navigation: true,
		navigationText: ["上一个", "下一个"],
		autoPlay: true,
		stopOnHover: true
	}).hover(function() {
		$('.owl-buttons').show();
	}, function() {
		$('.owl-buttons').hide();
	});
});