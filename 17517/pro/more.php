<?php 
    require_once("../../a1a0xcfgp2/lib.generaluser.php");

    $query_sql = "select * from $tableproduct where classid=$classid order by id desc limit 100";  
    $result_lt = mysql_query($query_sql);  
    //循环输出  
    while($list = mysql_fetch_array($result_lt)){  
        echo "<li class='wow animated fadeInUp'>";
        echo "<a href=".$weburl."/sj/pro/display.php?id=".$list['id'].">";
        echo "<img src=".$weburl."/a1a0fi0les/".$list['imageurl'].">";
        echo "<p>".$list['name']."</p>";
        echo "<div class='contain_game_star'>";
        echo "<span>惊恐指数：</span>";
        echo "<em></em><em></em><em></em><em></em><em></em>";
        echo "</div></a></li>";
    } 




 ?>