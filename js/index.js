$(document).ready(function(){
	var scrolllink = $('.scroll');
	//smooth scrolling code

	scrolllink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop:$(this.hash).offset().top
		},1000);
	});

	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		if (scroll>30) {
			$('.nav').addClass('nave');
		}
		else{
			$('.nav').removeClass('nave');
		}
	});

	$('#toggle_icon').click(function(){
		$('ul').toggle(700);
	});

	$('#modale').click(function(){
		$('.modal_container').css({'visibility':'visible'});
	});

	$('.close_modal').click(function(){
		$('.modal_container').css({'visibility':'hidden'});
	});

});