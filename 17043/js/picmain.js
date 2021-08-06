// JavaScript Document
$(document).ready(function(){ 
  if($("#imgs").width() > 830){ 
    $("#imgs").attr("width", 830); 
  } 
  if($('.article_cont_box').find('img')){ 
    $('.article_cont_box').find('img').each(function(index, element){ 
      if($(this).width() > 830){ 
        $(this).attr("width", 830); 
      } 
    }); 
  } 
}); 