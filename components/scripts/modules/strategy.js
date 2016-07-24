// remap jQuery to $
(function($){
	'use strict'
    var scroll = $(window).scrollTop();
    var middle = $(window).height() / 2;
    var outClass = 'out';
    var $steps = $('.strategy li');
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
