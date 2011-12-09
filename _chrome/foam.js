(function ( w, $, undefined ) {

	$(document).ready(function () {
		$('.vigilance-consent').each(function () {
			var $this = $(this),
				$checkbox = $this.find('input[type="checkbox"]'),
				$button = $this.find('input[type="submit"]');

			$checkbox.on('click', function () {
				$button.prop( 'disabled', !this.checked );
			});
			$button.prop('disabled', !$checkbox[0].checked );
		});
	});

} ( this, this.jQuery ));
