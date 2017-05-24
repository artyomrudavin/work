// повесить обработчик событий
// при клике - создавать html, и вставлять в DOM


(function($) {

	$.fn.fancybox = function(options) {

		var defaults = {
			overlayColor: 'black',
			fontSize: '13px'
		};

		var settings = $.extend(defaults, options); // перезатерает совпавшие значения, новые просто дописывает

		var $link = this;
		var $body = $('body');
		var $modal;
		var $overlay;


		function showModal(e) {
			var href = $link.attr('href');
			$modal = $('<div class="fancybox-modal"><img src="' + href + '"><p style="font-size: ' + settings.fontSize + ';">some text</p></div>');
			$overlay = $('<div class="fancybox-overlay"></div>');
			$overlay.css({
				'background-color': settings.overlayColor
			});

			e.preventDefault();

			$body.append($overlay);
			$body.append($modal);
			$overlay.one('click', hideModal);
		}

		function hideModal() {

			$modal.remove(); // предлагал hide
			$overlay.remove();

		}

		$link.on('click', showModal);

		return this;
	}



})(jQuery);
