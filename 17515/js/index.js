(function(){
	jQuery(".box9 .scrollDiv").slide({mainCell:".bd ol",autoPlay:true,effect:"topMarquee",vis:12,interTime:50,trigger:"click"});
	window.onload = function () {
		try {
			var i, et = document.getElementById('tags').childNodes;
			for (i in et) {
				et[i].nodeName == 'A' && et[i].addEventListener('click', function (e) {
					e.preventDefault();
				});
			}

			TagCanvas.Start('myCanvas', 'tags', {
				// textColour: '#222',
				outlineColour: '#fff',
				reverse: true,
				depth: 0.5,
				dragControl: true,
				decel:0.95,
				maxSpeed: 0.05,
				initial: [-0.2, 0],
				lock: 100
			});
		} catch (e) {
			// something went wrong, hide the canvas container
			//document.getElementById('myCanvasContainer').style.display = 'none';
		}
	};
})();