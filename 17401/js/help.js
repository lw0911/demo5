// JavaScript Document
$(document).ready(function(){
	   
   $('.quesList').click(function(){
	     $(this).find('.quesList_titt').toggleClass('actives');
		 $(this).find('.quesList_huifu').slideToggle();
	})
})