var newsLeft=428;
var newsMarginLeft=84;
var newsScreenmun=3;
/*screen*/
screenWidth=$(window).width();
if(screenWidth>=1200){

}else if(screenWidth>=1024&&screenWidth<1200){
	newsLeft=350;
	newsMarginLeft=70;
}else if(screenWidth>=640&&screenWidth<1024){
	newsLeft=418;
	newsMarginLeft=0;
	newsScreenmun=1;
}else if(screenWidth>=320&&screenWidth<640){
	newsLeft=209;
	newsMarginLeft=0;
	newsScreenmun=1;
}

