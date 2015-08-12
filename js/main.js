$(document).ready(function(){
	resizeDiv();
	$("body").on("contextmenu", "img", function(e) {
  		return false;
	});
});

window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	vpw = $(window).width();
	vph = $(window).height();
	$('.header').css({'height': vph + 'px'});
}

function fadeIn() {
	$('body').fadeIn(1500);
}