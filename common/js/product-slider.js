$(function() {
	let dealsSlider = $('.deal-product-slider');
	let recentSlider = $('.recent-product');
	let categorySlider = $('.category-product-slider');

	// initial slider
	displaySliderDesktop(dealsSlider, false);
	displaySliderDesktop(recentSlider, true);
	displaySliderDesktop(categorySlider, true);

	// on resize and change orient device
	detectScreenSlider(dealsSlider);
	detectScreenSlider(recentSlider);
	detectScreenSlider(categorySlider);
});

function detectScreenSlider(slider, isVariableWidth) {
	$(window).on('load resize orientationchange', function() {
		let widthWindow = $(window).width();
		let breakPoint = 768;
		if (widthWindow > breakPoint) {
			slider.slick('unslick');
			displaySliderDesktop(slider, isVariableWidth);
		} else {
			slider.slick('unslick');
			displaySliderMobile(slider);
		}
	});
}

function displaySliderMobile(slider) {
	slider.slick({
		rows: 2,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToShow: 2,
		slidesToScroll: 2,
		swipe: true,
	});
}

function displaySliderDesktop(slider, isVariableWidth) {
	slider.slick({
		dots: true,
		arrows: false,
		infinite: false,
		speed: 800,
		slidesToShow: 4,
		rows: 0,
		variableWidth: isVariableWidth,
		slidesToScroll: 4,
	});
}
