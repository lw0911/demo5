var newsIndex=0;
$(function(){
	$(".mainContent .child").each(function(index, element) {
        newsChildAn(".mainContent .child:eq("+index+")");
    });
});

function newsChildAn(e){
	var dtime=newsIndex*0.2;
	anClasAdd(e,"newsChild",".6s",dtime+"s","ease-in-out","both");
	newsIndex++;
}