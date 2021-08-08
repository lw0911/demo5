$(function(){
	var time = 7;	//进度条时间，以秒为单位，越小越快

	var $progressBar, $bar, $elem, isPause, tick, percentTime;

	
	$('#owl-demo-four').owlCarousel({
		slideSpeed:500,
		paginationSpeed:1000,
		rewindSpeed:0,
		singleItem: true,
		afterMove: moved,
		autoPlay:true,
		startDragging: pauseOnDragging,
		autoHeight: true
	});
	

	function progressBar(elem){
		$elem = elem;
		buildProgressBar();
		start();
	}

	function buildProgressBar(){
		$progressBar = $('<div>',{
			id:'progressBar'
		});
		$bar = $('<div>',{
			id:'bar'
		});
		$progressBar.append($bar).insertAfter($elem.children().eq(0));
	}

	function start(){
		percentTime = 0;
		isPause = false;
		tick = setInterval(interval, 10);
	}

	function interval(){
		if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
				width: percentTime+'%'
			});
			if(percentTime >= 100){
				$elem.trigger('owl.next')
			}
		}
	}

	function pauseOnDragging(){
		isPause = true;
	}

	function moved(){
		clearTimeout(tick);
		start();
	}

	$elem.on('mouseover',function(){
		isPause = true;
	})

	$elem.on('mouseout',function(){
		isPause = false;
	});
});