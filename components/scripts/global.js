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
				break;
			case 1:
				$ele.find(info).addClass('hover-right');
				break;
			case 2:
				$ele.find(info).addClass('hover-bottom');
				break;
			case 3:
				$ele.find(info).addClass('hover-left');
				break;
			default:
				break;
		}
	}

	var portfolioHover = function () {
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
	var offset, offsetTop, pos;

	var addStick = function(offset) {

		winTop = $(window).scrollTop();

		$('.js-stick-ele').each(function() {

			offset = $(this).data('offset'),
			pos = $(this).position().top - winTop,
			offsetTop = $(this).offset().top;

			if (pos < offset) {
				if ($(this).hasClass(stickClass) && offsetTop + offset < winTop) {
					$(this).removeClass(stickClass);
				} else {
					if (!$(this).hasClass(stickClass)) {
						$(this).addClass(stickClass);
					}
				}
			}

			console.log (offsetTop + offset);
			console.log ('------------');
			console.log(winTop);
		});
	};

	var scrollPercent,
		projectH = $('.project-pages').height(),
		winH = $(window).height();
	var scrollBar = function () {
		scrollPercent = Math.floor( ( $(window).scrollTop() / (projectH - winH) ) * 100 );
		$('.js-scroll-bar').css('width', scrollPercent + '%');
	}




	var init = function() {
		portfolioHover();
		scrollBar();
		//startHero();
	}

	var scroll = function() {
		addStick();
		scrollBar();
		//startHero();
	}

	var resizeVars = function() {
		winTop = $(window).scrollTop(),
		projectH = $('.project-pages').height(),
		winH = $(window).height()
	}



	/* trigger when page is ready */
	$(document).ready(init);
	$(window).on('scroll', scroll);
	$(window).on('sesize', resizeVars);

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
