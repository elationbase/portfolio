// remap jQuery to $
(function($){
	'use strict'
    var scroll = $(window).scrollTop(),
		middle = $(window).height() / 2,
		outClass = 'out',
		$steps = $('.strategy li, .section__parallax');

    $steps.addClass(outClass);

    var strategy = function() {
        scroll = $(window).scrollTop();
        $steps.each(function(){
            var offset = $(this).offset().top;
            if( (offset - scroll) <= middle ) {
                if ($(this).hasClass(outClass)) {
                    $(this).removeClass(outClass);
                }
            } else {
                $(this).addClass(outClass);
            }
        });
    }

	var init = function() {
		strategy();
	}

	$(document).ready(init);
    $(window).on('scroll', strategy);

})(window.jQuery);
