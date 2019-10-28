$(document).ready(function() {
	renderVideoButton();
	initMap();
	toggleReadmoreContent();
});

function renderVideoButton() {
	var videoPlayButton,
		videoWrapper = document.getElementsByClassName('video-wrapper')[0],
		video = document.getElementsByTagName('video')[0],
		videoMethods = {
			renderVideoPlayButton: function() {
				if (videoWrapper.contains(video)) {
					this.formatVideoPlayButton();
					video.classList.add('has-media-controls-hidden');
					videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0];
					videoPlayButton.addEventListener('click', this.hideVideoPlayButton);
				}
			},

			formatVideoPlayButton: function() {
				videoWrapper.insertAdjacentHTML(
					'beforeend',
					'\
                <svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
                    <circle cx="100" cy="100" r="90" fill="none" stroke-width="15" stroke="#fff"/>\
                    <polygon points="70, 55 70, 145 145, 100" fill="#fff"/>\
                </svg>\
            ',
				);
			},

			hideVideoPlayButton: function() {
				video.play();
				videoWrapper.classList.add('no-after');
				videoPlayButton.classList.add('is-hidden');
				video.classList.remove('has-media-controls-hidden');
				video.setAttribute('controls', 'controls');
			},
		};
	videoMethods.renderVideoPlayButton();
}

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: { lat: 16.0472484, lng: 108.1716863 },
		mapTypeControl: false,
		disableDefaultUI: true,
		mapTypeControlOptions: {
			style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			mapTypeIds: ['roadmap', 'terrain'],
		},
	});
}

function toggleReadmoreContent() {
	$('.js-read-more').click(function(e) {
		// e.preventDefault();
		// alert('afaf');
		let self = $(this);

		let displayEl = $(this)
			.closest('.js-content-more')
			.find('.js-display-content-more');

		displayEl.toggle('fast', function() {
			if ($(this).is(':visible')) {
				self.text('Read less');
			} else {
				self.text('Read more');
			}
		});
	});
}
