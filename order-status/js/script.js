jQuery(document).ready(function($) {
	// animation couner number
	// $('.counter').counterUp({
	// 	delay: 10,
	// 	time: 1000,
	// });

	// increment and decrement number on list product
	// var clickCounter = () => {
	//   var value = parseInt($("#js-get-value").val());
	//   $('.js-increment').click(function() {
	//     $(this).next().val(value += 1);
	//   });

	//   $('.js-decrement').click(function() {
	//     $(this).next().val(value -= 1);
	//   });
	// }
	// clickCounter();
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
