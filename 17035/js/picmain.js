$(document).ready(function(){ 
  if($("#imgs").width() > 700){ 
    $("#imgs").attr("width", 700); 
  } 
  if($('.cpzsny').find('img')){ 
    $('.cpzsny').find('img').each(function(index, element){ 
      if($(this).width() > 680){ 
        $(this).attr("width", 680); 
      } 
    }); 
  } 
}); 
