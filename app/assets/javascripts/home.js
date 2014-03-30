$(document).ready(function($) { 
	$('.landing-background') .css({'min-height': $(window).height() +'px'});
	$('#home') .css({'min-height': $(window).height() +'px'});
	$('.option-wrapper') .css({'min-height': $(window).height() +'px'});
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

$(".about-option").click(function(event){
	event.preventDefault();
	var full_url = this.href;
	var parts = full_url.split("#");
	var trgt = parts[1];


	var target_offset = $(".about-options").offset();
	var target_top = target_offset.top;

	//goto that anchor by setting the body scroll top to anchor top
	$('html, body').animate({scrollTop: target_top}, 400);
});
