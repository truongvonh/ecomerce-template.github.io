$(function() {
	$(window).on('load resize orientationchange', function() {
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
		infinite: true,
	});

	rototeSlider(false);
	renderCountDown();
});

$(document).ready(function() {
	$('.img-zoom-lens').remove();
	initZoomImage();
	$('.slider-nav').on('afterChange', function(event, slick, currentSlide) {
		if ($('.img-zoom-lens')[0]) $('.img-zoom-lens').remove();
		imageZoom(`img-hover-${currentSlide}`);
	});
});

function rototeSlider(vertical) {
	$('.slider-nav').slick({
		slidesToShow: 3, // 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		vertical: vertical,
		infinite: true,
	});
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

function initZoomImage() {
	imageZoom('img-hover-0');
}

function imageZoom(imgID) {
	var img, lens, result, cx, cy;
	img = document.getElementById(imgID);
	result = document.getElementById('myresult');
	/*create lens:*/
	lens = document.createElement('DIV');
	lens.setAttribute('class', 'img-zoom-lens');
	/*insert lens:*/
	img.parentElement.insertBefore(lens, img);
	/*calculate the ratio between result DIV and lens:*/
	cx = result.offsetWidth / lens.offsetWidth;
	cy = result.offsetHeight / lens.offsetHeight;
	/*set background properties for the result DIV:*/
	result.style.backgroundImage = "url('" + img.src + "')";
	result.style.backgroundSize = img.width * cx + 'px ' + img.height * cy + 'px';
	/*execute a function when someone moves the cursor over the image, or the lens:*/
	lens.addEventListener('mousemove', moveLens);
	img.addEventListener('mousemove', moveLens);
	/*and also for touch screens:*/
	lens.addEventListener('touchmove', moveLens);
	img.addEventListener('touchmove', moveLens);
	function moveLens(e) {
		var pos, x, y;
		/*prevent any other actions that may occur when moving over the image:*/
		e.preventDefault();
		/*get the cursor's x and y positions:*/
		pos = getCursorPos(e);
		/*calculate the position of the lens:*/
		x = pos.x - lens.offsetWidth / 2;
		y = pos.y - lens.offsetHeight / 2;
		/*prevent the lens from being positioned outside the image:*/
		if (x > img.width - lens.offsetWidth) {
			x = img.width - lens.offsetWidth;
		}
		if (x < 0) {
			x = 0;
		}
		if (y > img.height - lens.offsetHeight) {
			y = img.height - lens.offsetHeight;
		}
		if (y < 0) {
			y = 0;
		}
		/*set the position of the lens:*/
		lens.style.left = x + 'px';
		lens.style.top = y + 'px';
		/*display what the lens "sees":*/
		result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px';
	}
	function getCursorPos(e) {
		var a,
			x = 0,
			y = 0;
		e = e || window.event;
		/*get the x and y positions of the image:*/
		a = img.getBoundingClientRect();
		/*calculate the cursor's x and y coordinates, relative to the image:*/
		x = e.pageX - a.left;
		y = e.pageY - a.top;
		/*consider any page scrolling:*/
		x = x - window.pageXOffset;
		y = y - window.pageYOffset;
		return { x: x, y: y };
	}
}
