window.onload = function () {
    var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom: 12,
        center: [113.2640400849, 23.1597642778]
    });
//地图内容
    map.setFeatures(['bg', 'building', 'road', 'point'])
//地图空间
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.MapType'],
        function () {
            map.addControl(new AMap.ToolBar());

            map.addControl(new AMap.Scale());
        });
//覆盖物
    var marker = new AMap.Marker({
        position: [113.2640400849, 23.1597642778]
    });
    marker.setMap(map);
    var circle = new AMap.Circle({
        center: [113.2640400849, 23.1597642778],
        radius: 50,
        fillOpacity: 0.2,
        strokeWeight: 1
    })
    circle.setMap(map);
//自定义窗体
    var infowindow;
    var infoWindowContent = '<div class="infowindow-content">广州市白云区机场路18号利好商业大厦</div>';
    map.plugin('AMap.AdvancedInfoWindow', function () {
        infowindow = new AMap.AdvancedInfoWindow({
            panel: 'panel',
            placeSearch: true,
            asOrigin: true,
            asDestination: true,
            content: infoWindowContent
        });
        infowindow.open(map, [113.2640400849,23.1597642778]);
    });

//汽车路线规划
  
}
