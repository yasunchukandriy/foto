(function($) {
		 Drupal.behaviors.EnterPress = {
			attach: function(context, settings) {
					$('body').keypress(function(event){
							 if ( event.keyCode == 13)
										event.preventDefault();
							 });
					if ($('.views-row .views-field.views-field-field-add-video-computer video').length > 0) {
						if ($('.views-row .views-field.views-field-field-add-video-computer video').attr('controls')) {
				      $('.views-row .views-field.views-field-field-add-video-computer video').removeAttr('controls');
				    }
					}
					if ($('.views-row .views-field.views-field-field-video-with-computer video').length > 0) {
						if ($('.views-row .views-field.views-field-field-video-with-computer video').attr('controls')) {
				      $('.views-row .views-field.views-field-field-video-with-computer video').removeAttr('controls');
				    }
					}
			}
		 };
		 
})(jQuery);