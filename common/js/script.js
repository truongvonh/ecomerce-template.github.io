$('select').on('change', function() {
	if ($(this).val()) {
		return $(this).css('color', 'rgb(71, 71, 71)');
	} else {
		return $(this).css('color', '#b2b2b2');
	}
});

var input = document.querySelector('#phone');
window.intlTelInput(input, {
	utilsScript: 'js/utils.js',
});

function swipeNavigate() {
	let dropdown = $('#navbarNavDropdown');
	let body = $('body');
	let toggleButton = $('.toggle-menubar');

	toggleButton.click(function(event) {
		dropdown.addClass('active');
		body.addClass('active');
	});

	$('.ic-close').click(function(event) {
		dropdown.removeClass('active');
		body.removeClass('active');
	});
}

swipeNavigate();
