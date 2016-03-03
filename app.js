var main = function() {
	$('.hamburger').click(function(){
		$('.navmenu').toggleClass('hidden-xs');
	});

	var controller = new ScrollMagic.Controller();
	var scene = new ScrollMagic.Scene()
		.setPin("#sidepin")
		.addIndicators()
		.addTo(controller);
}

$(document).ready(main);