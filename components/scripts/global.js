// remap jQuery to $
(function($){

	var getHoverDir = function( $element, x, y ) {
		// console.log( x + ", " + y );
		var w = $element.width(),
			h = $element.height(),
			x = ( x - $element.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
			y = ( y - $element.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
		// console.log ( "direction> " + direction );
		return direction;
	}



	var itemEnter;
	var itemLeave;
	var info = '.info-container';
	var dir;

	var prortfolioHover = function () {
		$('.col a').on('mouseenter', function(event) {
			itemEnter = $(this);
			dir = getHoverDir( $(this), event.pageX, event.pageY );
			itemEnter.find(info).css({transition: 'none;'});
			switch(dir) {
				case 0:
					itemEnter.find(info).css({
						transition: 'none',
						transform: 'translateY(-100%) translateX(0)',
						MozTransform: 'translateY(-100%) translateX(0)',
						WebkitTransform: 'translateY(-100%) translateX(0)',
						msTransform: 'translateY(-100%) translateX(0)'
					});
					break;
				case 1:
					itemEnter.find(info).css({
						transition: 'none',
						transform: 'translateX(100%) translateY(0)',
						MozTransform: 'translateX(100%) translateY(0)',
						WebkitTransform: 'translateX(100%) translateY(0)',
						msTransform: 'translateX(100%) translateY(0)'
					});
					break;
				case 2:
					itemEnter.find(info).css({
						transition: 'none',
						transform: 'translateX(-100%) translateY(0)',
						MozTransform: 'translateX(-100%) translateY(0)',
						WebkitTransform: 'translateX(-100%) translateY(0)',
						msTransform: 'translateX(-100%) translateY(0)'
					});
					break;
				case 3:
					itemEnter.find(info).css({
						transition: 'none',
						transform: 'translateX(-100%) translateY(0)',
						MozTransform: 'translateX(-100%) translateY(0)',
						WebkitTransform: 'translateX(-100%) translateY(0)',
						msTransform: 'translateX(-100%) translateY(0)'
					});
					break;
				default:
					break;
			}

			setTimeout(function() {
				if ( itemEnter !== null ) {
					itemEnter.find(info).css({
						transition: 'all 0.6s ease',
						transform: 'translateX(0) translateY(0)',
						MozTransform: 'translateX(0) translateY(0)',
						WebkitTransform: 'translateX(0) translateY(0)',
						msTransform: 'translateX(0) translateY(0)'
					});
				}
				itemEnter = null;
			}, 30 );

		});

		$('.col a').on( 'mouseleave', function( event ) {
			itemLeave = $( this );
			dir = getHoverDir( $(this), event.pageX, event.pageY );
			switch(dir) {
				case 0:
					itemLeave.find(info).css({
						transform: 'translateY(-100%) translateX(0)',
						MozTransform: 'translateY(-100%) translateX(0)',
						WebkitTransform: 'translateY(-100%) translateX(0)',
						msTransform: 'translateY(-100%) translateX(0)'
					});
					break;
				case 1:
					itemLeave.find(info).css({
						transform: 'translateX(100%) translateY(0)',
						MozTransform: 'translateX(100%) translateY(0)',
						WebkitTransform: 'translateX(100%) translateY(0)',
						msTransform: 'translateX(100%) translateY(0)'
					});
					break;
				case 2:
					itemLeave.find(info).css({
						transform: 'translateY(100%) translateX(0)',
						MozTransform: 'translateY(100%) translateX(0)',
						WebkitTransform: 'translateY(100%) translateX(0)',
						msTransform: 'translateY(100%) translateX(0)'
					});
					break;
				case 3:
					itemLeave.find(info).css({
						transform: 'translateX(-100%) translateY(0)',
						MozTransform: 'translateX(-100%) translateY(0)',
						WebkitTransform: 'translateX(-100%) translateY(0)',
						msTransform: 'translateX(-100%) translateY(0)'
					});
					break;
				default:
					break;
			}
		});
	}


	/*
		Stick elements
	*/
	var winTop = $(window).scrollTop();
	var stickClass = 'js-stick-on';
	var offset, pos;

	var addStick = function(offset) {

		winTop = $(window).scrollTop();

		$('.js-stick-ele').each(function() {

			offset = $(this).data('offset');
			pos = $(this).position().top - winTop;

			if (pos < offset) {
				if (!$(this).hasClass(stickClass)) {
					$(this).addClass(stickClass);
				}
			} else {
				if ($(this).hasClass(stickClass)) {
					$(this).removeClass(stickClass);
				}
			}
		});
	};

	var init = function() {
		prortfolioHover ();
		$(window).on('scroll', addStick);
	}


	/* trigger when page is ready */
	$(document).ready(init);


	/* optional triggers

	$(window).load(function() {

	});

	$(window).resize(function() {

	});

	*/

})(window.jQuery);
