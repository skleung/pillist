$(document).ready(function($) { 
	$('#home') .css({'min-height': $(window).height() +'px'}); 
});

$(".scroll").click(function(event){
	event.preventDefault();
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];
	var target_offset = $("#" + trgt).offset();
	var target_top = target_offset.top;

	//goto that anchor by setting the body scroll top to anchor top
	$('html, body').animate({scrollTop: target_top}, 400);
});

$(".focus").click(function(event){
	console.log('clicked');
	event.preventDefault();
	var target_offset = this.offset();
	var target_top = target_offset.top - 100;

	//goto that anchor by setting the body scroll top to anchor top
	$('html, body').animate({scrollTop: target_top}, 400);
});

