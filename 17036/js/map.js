$(function(){

	/*==============MAP START==============*/

	var searchDown = $('.searchDown'),
		maptxt = $('.maptxt'),
		regions = $(".regions"),
		regions_tabs = $(".region-level-tabs"),
		area_tabs= $(".area-level-tabs"),
		mapselect = $('.mapselect'),
		address_temp;

	maptxt.click(function(){
		searchDown.toggle();
	})

	$.ajax({
		url:"../storejson/store.json"/*tpa=http://www.cn/wcs/Tpl/home/default/storejson/store.json*/,
		dataType: "json",
		success: function(data){
			
			findFirst(data);
		
			area_tabs.delegate('li', 'click', function(){
				$(this).addClass('current').siblings().removeClass('current');
				var index = $(this).index();
				if(index == 0){
					regions_tabs.children('li').eq(0).addClass('current').siblings().removeClass('current');
					findThird(data);
				}else if(index == 1){
					findSecond(data);
					regions_tabs.children('li').eq(0).addClass('current').siblings().removeClass('current');
					regions_tabs.children('li:gt(1)').hide();
					
					findPlace(data, [1], $(this).attr('data-level'));
				
				}
			})
			
			regions.delegate('li', 'click', function(){
				$(this).addClass('current').siblings().removeClass('current');
				//0-0-0
				//console.log($(this).attr('data-level').split('-'))
				
				findPlace(data, $(this).attr('data-level').split('-'));
			})

			regions_tabs.children('li').click(function(){
				$(this).addClass('current').siblings().removeClass('current');
				var index = $(this).index();
				var tabLength=index+1;
			
				if(regions_tabs.children('li').eq(0).text()=="常用市"){
					if(index == 0){
						findFourth(data);
					}else if(index == 1){
						regions_tabs.children('li:gt(1)').hide();
						findPlace(data, [0], $(this).attr('data-level'));
					}
				}
				else if(regions_tabs.children('li').eq(0).text()!="常用市"){
					
					if(index == 0){
						findSecond(data);
						findPlace(data, [1], $(this).attr('data-level'));
					}else if(index == 1){
						regions_tabs.children('li:gt(1)').hide();
						findPlace(data, [1], $(this).attr('data-level'));
					}
					
				}
				
				
			})
			

			/* 20150925
			var url = location.href;
			var _index = url.indexOf('?id=');	
			var arr = (_index == -1) ? "0-7-0-8".split('-') : url.slice(_index + 4).split('-');				
			regions_tabs.children('li').eq(1).trigger('click');
			for(var i=1; i<arr.length; i++){
				regions.children('li[data-level=' + arr.slice(0, i+1).join('-') + ']').trigger('click');
			}
			*/
			
			var url = location.href;
			var _index = url.indexOf('?id=');
			var tempArea = "0-7-0-8";
			
			var arr = (_index == -1) ? tempArea.split('-') : url.slice(_index + 4).split('-');				
			regions_tabs.children('li').eq(1).trigger('click');
			for(var i=1; i<arr.length; i++){
				regions.children('li[data-level=' + arr.slice(0, i+1).join('-') + ']').trigger('click');
			}
			
			

			
			if(history.replaceState && _index == -1 ){
				history.replaceState(null, "页面标题", window.location.href + '?id=' + tempArea);
			}

			
		}
	});

	function findFirst(data){
		regions_tabs.children('li').eq(1).removeAttr('data-level').html('省/直辖市').end().end().children('li:gt(1)').hide();
		regions.empty();
		findCom(data);
		
	}
	function findSecond(data){
			regions_tabs.children('li').eq(0).removeAttr('data-level').html('港澳台').end().end().children('li:gt(0)').hide();
			regions.empty();
		}
	
	function findThird(data){
		
		regions_tabs.children('li').eq(0).removeAttr('data-level').html('常用市');
		regions_tabs.children('li').eq(1).show().removeAttr('data-level').html('省/直辖市');
		regions.empty();
		findCom(data);
	}
	function findFourth(data){
		regions_tabs.children('li').eq(0).addClass('current').siblings().removeClass('current');
		regions_tabs.children('li').eq(1).removeAttr('data-level').html('省/直辖市').end().end().children('li:gt(1)').hide();
		regions.empty();
		findCom(data);
		
	}
	
	

	

	function findCom(obj){
		var v;
		for(v in obj){
			if(typeof obj[v] == "object"){
				findCom(obj[v]);
			}else if(v == "com"){
				regions.append('<li data-level="' + obj.level + '">' + obj.name + '</li>');
			}
		}
	}

	function findPlace(obj, level, cur){
		
		//console.log(level)    ["0", "0", "0", "0"]  "0-0-0-0"
		
		
		var data_temp,
			data_in = obj,
			level_len = level.length;


		if(level_len == 4){
			var txt = [];
			searchDown.hide();
			for(var i=0; i<level_len; i++){
				if(i){
					txt.push(data_in[level[i]].name);					
				}
				data_in = data_in[level[i]].children;
			}
		
			
			$.ajax({
				//url:"http://www.cn/wcs/Tpl/home/default/js/js/test2.json", //console.log(level.join('-'))
				url:"/wcs/Tpl/home/default/storejson/" + level.join('-') + ".json",
				dataType: "json",
				success: function(data_info){
					mapselect.empty();
					for(var i = 0; i< data_info.length; i++){
						mapselect.append('<option>' + data_info[i][2] + '</option>');
					}

					var map = new BMap.Map("allmap"),
						marker = [];

					map.centerAndZoom(new BMap.Point(data_info[0][0], data_info[0][1]), 15);

					for(var i=0;i<data_info.length;i++){
						marker[i] = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));
						var content = data_info[i][2] + '<br>' + data_info[i][3] + '<br>' + data_info[i][4];
						map.addOverlay(marker[i]);
						addClickHandler(content,marker[i]);
					}

					function addClickHandler(content,marker){
						marker.addEventListener("click",function(e){
							var p = e.target;
							var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
							var infoWindow = new BMap.InfoWindow(content);
							map.openInfoWindow(infoWindow,point);
						});
					}

					marker[0].dispatchEvent('click');
					mapselect.change(function(){
						var p = marker[mapselect.children('option:selected').index()];
						p.dispatchEvent('click');
						
						var address = address_temp + data_info[mapselect.children('option:selected').index()][3];
						var linkurl = 'http://map.baidu.com/mobile/webapp/place/list/qt=s&wd=' + address + '/vt=map';
						$('#gethere').attr('href',linkurl);
					})
					
					var address = address_temp + data_info[mapselect.children('option:selected').index()][3];
					var linkurl = 'http://map.baidu.com/mobile/webapp/place/list/qt=s&wd=' + address + '/vt=map';
					$('#gethere').attr('href',linkurl);
					
						/*20150925*/
					if(history.replaceState){
						var href = window.location.href;
						history.replaceState(null, "周黑鸭", href.slice(0, href.indexOf('?id='))  + '?id=' + level.join('-'));	
					}/*20150925*/
					
				}
			})
			
			//console.log(txt)
			maptxt.val(txt.join("-"));
			
			address_temp = txt.join("");
			
			return;
		}
//end
		
		regions.empty();

		for(var i=0; i<level_len; i++){
			data_temp = data_in[level[i]];
			
			data_in = data_in[level[i]].children;
			
		}

		if(level_len != 1){
			regions_tabs.children('li').eq(level_len-1).attr('data-level',data_temp.level).html(data_temp.name).show().addClass('current').siblings().removeClass('current');
		}

		for(var i=0; i<data_in.length; i++){
			regions.append('<li data-level="' + data_in[i].level + '">' + data_in[i].name + '</li>');
		}

		if(cur){
			regions.children('li[data-level=' + cur + ']').addClass('current');
		}
	}
	
	
	
	
	
	
	
	/*==============MAP END==============*/
	
});