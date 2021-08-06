$(document).ready(function(){ 
  if($("#imgs").width() > 870){ 
    $("#imgs").attr("width", 870); 
  } 
  if($('.abouts').find('img')){ 
    $('.abouts').find('img').each(function(index, element){ 
      if($(this).width() > 870){ 
        $(this).attr("width", 870); 
      } 
    }); 
  } 
}); 