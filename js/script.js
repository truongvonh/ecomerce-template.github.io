$(function() {
	$('.main-carousel').carousel();

	$('.main-slider').slick({
		// autoplay: true,
		dots: true,
		arrows: false,
		adaptiveHeight: true,
	});

	$('.test-slider').slick();

	swipeNavigate();
});

function swipeNavigate() {
	$('#navbarNavDropdown').on('swiperight', function(event) {
		$(this).removeClass('active');
		$('body').removeClass('active');
	});

	$('.main-nav').on('swipeleft', function(event) {
		$('#navbarNavDropdown').addClass('active');
		$('body').addClass('active');
	});
}
