// remap jQuery to $
(function($){
	'use strict'

	var $this, dir;
	var info = '.info-container';
	$(info).addClass('hover-top no-transition');

	var getHoverDir = function( $ele, x, y ) {
		// console.log( x + ", " + y );
		var w = $ele.width(),
			h = $ele.height(),
			x = ( x - $ele.offset().left - ( w/2 )) * ( w > h ? ( h/w ) : 1 ),
			y = ( y - $ele.offset().top  - ( h/2 )) * ( h > w ? ( w/h ) : 1 ),
			direction = Math.round( ( ( ( Math.atan2(y, x) * (180 / Math.PI) ) + 180 ) / 90 ) + 3 ) % 4;
		return direction;
	}

	var hoverCase = function (dir, $ele) {
		switch(dir) {
			case 0:
				$ele.find(info).addClass('hover-top');
				console.log('top');
				break;
			case 1:
				$ele.find(info).addClass('hover-right');
				console.log('right');
				break;
			case 2:
				$ele.find(info).addClass('hover-bottom');
				console.log('bottom');
				break;
			case 3:
				$ele.find(info).addClass('hover-left');
				console.log('left');
				break;
			default:
				break;
		}
	}

	var prortfolioHover = function () {
		$('.col a').on('mouseenter', function(event) {
			$this = $(this);
			dir = getHoverDir( $this, event.pageX, event.pageY );
			$this.find(info).removeClass('hover-top hover-right hover-bottom hover-left').addClass('no-transition');
			hoverCase(dir, $this);
			setTimeout(function() {
				$this.find(info).removeClass('hover-top hover-right hover-bottom hover-left no-transition');
			},10);

		}).on( 'mouseleave', function( event ) {
			$this = $(this);
			dir = getHoverDir( $(this), event.pageX, event.pageY );
			$this.find(info).removeClass('hover-top hover-right hover-bottom hover-left');
			hoverCase(dir, $this);
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
		prortfolioHover();
		//startHero();
	}

	var scroll = function() {
		addStick();
		//startHero();
	}


	/* trigger when page is ready */
	$(document).ready(init);
	$(window).on('scroll', scroll);

	$(window).on('scroll', function () {
		//$('.hero').addClass('pt-page-scaleDown');
		//$('.intro').addClass('pt-page-moveFromBottom');
	});

	/* optional triggers

	$(window).load(function() {

	});

	$(window).resize(function() {

	});

	*/

})(window.jQuery);
