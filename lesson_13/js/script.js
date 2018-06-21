$(document).ready(function(){

	$('.main_btna').on('click', function(){
		$('.overlay').fadeToggle('slow');
		$('.modal').slideDown('slow');
	});

 $('.main_btn').on('click', function(){
 	$('.overlay').fadeToggle('slow');
 	$('.modal').slideDown('slow');
 });

 $('.main_nav ul li:eq(1)').on('click', function(){
 	$('.overlay').fadeToggle('slow');
 	$('.modal').slideDown('slow');
 });

 $('.close').on('click', function(){
  	$('.overlay').fadeToggle('slow');
  	$('.modal').slideUp('slow');
 });

});