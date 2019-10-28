$(document).ready(function() {
	clickCounter();
});

function clickCounter() {
	var value = parseInt($('.js-get-value').val());
	$('.js-increment').click(function() {
		$(this)
			.siblings('.js-get-value')
			.val((value += 1));
	});

	$('.js-decrement').click(function() {
		$(this)
			.siblings('.js-get-value')
			.val((value -= 1));
	});
}
