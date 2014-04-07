$(document).ready(function($) { 
	$('.landing-background') .css({'min-height': $(window).height() +'px'});
	$('#home').css({'min-height': $(window).height() +'px'});
	// $('#about').css({'min-height': $(window).height() +'px'});

	// $('#about-top').css({'height': ($(window).height()-$(".about-options").height()) +'px'});
	$('.option-wrapper') .css({'min-height': $(".show").height() +'px'});
});

$(window).resize(function() { 
	$('.landing-background').css({'min-height': $(window).height() +'px'});
	// $('#about').css({'min-height': $(window).height() +'px'});
	$('#home').css({'min-height': $(window).height() +'px'});
	// $('#about-top').css({'height': ($(window).height()-$(".about-options").height()) +'px'});
	$('.option-wrapper') .css({'min-height': $(".show").height() +'px'});
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
	$(".show").fadeOut();
	$(".show").removeClass("show");
	$("#"+trgt).addClass("show");
	$('.option-wrapper') .css({'min-height': $(".show").height() +'px'});
	$("#"+trgt).fadeIn();
	$(".active").removeClass("active");
	$("#"+trgt+"-tab").addClass("active");

	
	var target_offset = $(".about-options").offset();
	var target_top = target_offset.top;

	//goto that anchor by setting the body scroll top to anchor top
	$('html, body').animate({scrollTop: target_top}, 400);
});
