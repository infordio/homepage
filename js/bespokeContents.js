var bespokeContents = new function() {
	'use strict';

	var themes,
	selectedThemeIndex,
	selectComponentIndex,
	deck,
	count = 0;

	this.init = function() {
		deck = bespoke.from('article');
		initThemeSwitching();
	};

	function initThemeSwitching() {
		themes = [
		          'carousel',
		          'classic',
		          'carousel',
		          'cube'
//		          'coverflow',		          
//		          'concave',
		          
		          ];

		selectedThemeIndex = 0;
		selectComponentIndex = 0;
		initInstructions();
//		initKeys();
		initSlideGestures();
//		initThemeGestures();
		selectTheme(0);
	}

	function initInstructions() {
		if (isTouch()) {
//			document.getElementById('input-method').innerHTML = 'Swipe up and down';
		}
	}

//	function initKeys() {
//		if (/Firefox/.test(navigator.userAgent)) {
//			document.addEventListener('keydown', function(e) {
//				if (e.which >= 37 && e.which <= 40) {
//					e.preventDefault();
//				}
//			});
//		}
//
//		document.addEventListener('keydown', function(e) {
//			var key = e.which;
//
//			key === 37 && deck.prev();
//			(key === 32 || key === 39) && deck.next();
//
//			key === 38 && prevTheme();
//			key === 40 && nextTheme();
//
//		});
//	}

	function initSlideGestures() {
		var main = document.getElementById('bespokeContents'),
		startPosition,
		delta,

		singleTouch = function(fn) {
			return function(e) {
				e.touches.length === 1 && fn(e, e.touches[0].pageX);
			};
		},

		touchstart = singleTouch(function(e, position) {
			startPosition = position;
			delta = 0;
		}),

		touchmove = singleTouch(function(e, position) {
			delta = position - startPosition;
		}),

		touchend = function(e) {
			if (Math.abs(delta) < 50) {
				return;
			}
			
			e.preventDefault();

			delta > 0 ? deck.prev() : deck.next();
		};

		main.addEventListener('touchstart', touchstart);
		main.addEventListener('touchmove', touchmove);
		main.addEventListener('touchend', touchend);
	}

//	function initThemeGestures() {
//		var startPosition,
//		delta,
//
//		singleTouch = function(fn, preventDefault) {
//			return function(e) {
//				if (preventDefault) {
//					e.preventDefault();
//				}
//				e.touches.length === 1 && fn(e.touches[0].pageY);
//			};
//		};
//
//		document.addEventListener('touchstart', singleTouch(function(position) {
//			startPosition = position;
//			delta = 0;
//		}));
//
//		document.addEventListener('touchmove', singleTouch(function(position) {
//			delta = position - startPosition;
//		}, true));
//
//		document.addEventListener('touchend', function() {
//			if (Math.abs(delta) < 100) {
//				return;
//			}
//
//			delta > 0 ? prevTheme() : nextTheme();
//		});
//	}

	function selectTheme(index) {
		var theme = themes[index];
		document.getElementById('bespoke_main').className = theme;
		selectedThemeIndex = index;
	}

	function nextTheme() {
		offsetSelectedTheme(1);
	}

	function prevTheme() {
		offsetSelectedTheme(-1);
	}

	function selectSection(index) {
		var currentComponent = $(".content" + selectedThemeIndex);
		var nextComponent = $(".content" + index);

		currentComponent.fadeOut(500);
		nextComponent.fadeIn(500);

	}

	function offsetSelectedTheme(n) {
		var id = modulo(selectedThemeIndex + n, themes.length);
		var currentComponent = $(".content" + selectedThemeIndex);
		var nextComponent = $(".content" + id);

		currentComponent.fadeOut(500);
		nextComponent.fadeIn(500);
		selectTheme(id);
	}

	this.prevButton = function(n) {
		count++;
		var previd = modulo(count, themes.length);
		var currentComponent = $(".content" + selectComponentIndex);
		var nextComponent = $(".content" + n);

		document.getElementById("rookieButton0").disabled = "";
		document.getElementById("rookieButton1").disabled = "";
		document.getElementById("rookieButton2").disabled = "";
		document.getElementById("rookieButton"+n).disabled = "disabled";

		selectComponentIndex = n;
		currentComponent.fadeOut(500);
		nextComponent.fadeIn(500);
		selectTheme(previd);
	}

	function isTouch() {
		return !!('ontouchstart' in window) || navigator.msMaxTouchPoints;
	}

	function modulo(num, n) {
		return ((num % n) + n) % n;
	}
	
		$(function () {
			$("body").on("click", ".bespoke-parent" , function(eo){
				var clickPoint = eo.pageX;
				var innerWindthSize = window.innerWidth;
				clickPoint > innerWindthSize / 2 ? deck.next() : deck.prev();
			});
		});

};