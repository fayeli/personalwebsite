var main = function() {
	$('.hamburger').click(function(){
		$('.navmenu').toggleClass('hidden-xs');
	});

	var controller = new ScrollMagic.Controller();
	var tween = new TimelineMax()
		.add([
			TweenMax.to("#sushiParallax .sushi1", 1, {y: "-225%", ease: Linear.easeNone}),
			TweenMax.to("#sushiParallax .sushi2", 1, {y: "-500%", ease: Linear.easeNone})
			]);

	var scene1 = new ScrollMagic.Scene({triggerElement: "#sushiParallax", duration: 2000})
		.setTween(tween)
		.setPin("#sushiParallax")
		.addIndicators()
		.addTo(controller);
}

$(document).ready(main);