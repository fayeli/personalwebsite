var main = function() {
	$('.hamburger').click(function(){
		$('.navmenu').toggleClass('hidden-xs');
	});
}

$(document).ready(main);