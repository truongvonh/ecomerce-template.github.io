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
