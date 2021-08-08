<?php 

    $upfile=$_FILES["text1"];  
//获取数组里面的值  
    $name=$upfile["name"];//上传文件的文件名  
    $type=$upfile["type"];//上传文件的类型  
    $size=$upfile["size"];//上传文件的大小  
    $tmp_name=$upfile["tmp_name"];//上传文件的临时存放路径  
	$n="D:\\".time().'_'.$name;
	
    $bool=move_uploaded_file($tmp_name,$n); 
   if($bool)
   {
	  echo $name;
	}
 //-------------------------文件上传

 /*  $dir=$_SERVER['DOCUMENT_ROOT'].'/book/upload/';
   $up='upload/'; //相对路径
   $upfm=$_FILES["up_img"];

    $name=$upfm["name"];//上传文件的文件名  
    $type=$upfm["type"];//上传文件的类型  
    $size=$upfm["size"];//上传文件的大小  
    $tmp_name=$upfm["tmp_name"];//上传文件的临时存放路径
	$n=$up.time().'_K_'.$name;    
   $bool=move_uploaded_file($tmp_name,$n); 
   if($bool)
   {
	   $arr['status']=1;
	   $arr['name']=$n;
	   echo json_encode($arr);
	}*/