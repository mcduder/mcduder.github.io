$(document).ready(function(){
	resizeDiv();
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