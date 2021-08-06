$(document).ready(function(){ 
  if($("#imgs").width() > 860){ 
    $("#imgs").attr("width", 860); 
  } 
  if($('.concomp').find('img')){ 
    $('.concomp').find('img').each(function(index, element){ 
      if($(this).width() > 860){ 
        $(this).attr("width", 860); 
      } 
    }); 
  } 
}); 