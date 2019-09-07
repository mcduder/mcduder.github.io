$(document).ready(function(){
	resizeDiv();
	$("body").on("contextmenu", "img", function(e) {
  		return false;
	});
	console.log('yes');
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

function s(option) {
	let e = document.getElementById(option);
	console.log(option);
	e.scrollIntoView();
}

function min() {
	let x = document.getElementById('navbar');
	if (x.className === 'navbar') {
		x.className += " responsive";
	} else {
		x.className = "navbar";
	}
}