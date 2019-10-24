$(function() {
	$(window).on('load resize orientationchange', function() {
		console.log('$(window).width()', $(window).width());
		let widthWindow = $(window).width();
		let breakPoint = 992;
		if (widthWindow > breakPoint) {
			$('.slider-nav').slick('unslick');
			rototeSlider(true);
		} else {
			$('.slider-nav').slick('unslick');
			rototeSlider(false);
		}
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		variableWidth: false,
		asNavFor: '.slider-nav',
		infinite: false,
	});
	rototeSlider(false);
	renderCountDown();
	customNumberInput();
	swipeNavigate();
});

function rototeSlider(vertical) {
	$('.slider-nav').slick({
		slidesToShow: 3, // 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		// variableWidth: true,
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		vertical: vertical,
		infinite: true,
	});
}

function customNumberInput() {
	var spins = document.getElementsByClassName('custom-input-number');
	for (var i = 0, len = spins.length; i < len; i++) {
		var spin = spins[i],
			span = spin.getElementsByTagName('span'),
			input = spin.getElementsByTagName('input')[0];

		input.onchange = function() {
			input.value = +input.value || 0;
		};
		span[0].onclick = function() {
			input.value = Math.max(0, input.value - 1);
		};
		span[1].onclick = function() {
			input.value -= -1;
		};
	}
}

function renderCountDown() {
	$('#clock-countdown')
		.countdown('2020/10/10')
		.on('update.countdown', function(event) {
			var $this = $(this).html(
				event.strftime(
					'' +
						`
						<div class="group-btn d-flex flex-column align-items-center fz-14 text-capitalize">
							<button 
								class="btn d-flex align-items-center justify-content-center btn-outline-secondary font-weight-bold text-danger mo-font">
								%-d
							</button>
							day%!d 
						</div>
					` +
						`
						<div class="p-2"> : </div>
					` +
						`
						<div class="group-btn d-flex flex-column align-items-center fz-14 text-capitalize">
							<button 
								class="btn d-flex align-items-center justify-content-center btn-outline-secondary font-weight-bold text-danger mo-font">
								%H
							</button>
							Hours
						</div>
					` +
						`
						<div class="p-2"> : </div>
					` +
						`
						<div class="group-btn d-flex flex-column align-items-center fz-14 text-capitalize">
							<button 
								class="btn d-flex align-items-center justify-content-center btn-outline-secondary font-weight-bold text-danger mo-font">
								%M
							</button>
							Minutes
						</div>
					` +
						`
						<div class="p-2"> : </div>
					` +
						`
						<div class="group-btn d-flex flex-column align-items-center fz-14 text-capitalize">
							<button 
								class="btn d-flex align-items-center justify-content-center btn-outline-secondary font-weight-bold text-danger mo-font">
								%S
							</button>
							Seconds
						</div>
					`,
				),
			);
		});
}

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
