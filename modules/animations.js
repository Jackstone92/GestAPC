// Using jQuery library to add CSS to menu and Start-up Animations //

var wishToClose = false;


//animate.css function//
//D. Eden, 'Animate.css' ('Usage'), 2011. [Online]. https://github.com/daneden/animate.css/blob/master/README.md.//
$.fn.extend({
	animateCss: function (animationName) {
			var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			this.addClass('animated ' + animationName).one(animationEnd, function() {
					$(this).removeClass('animated ' + animationName);
			});
	}
});

// ========== Title ============ //
function titleAnimationsIn() {
  //css delays and duration changes//
  $('.titleBackground').css({
    '-webkit-animation-duration' : '1s',
    '-moz-animation-duration' : '1s',
    '-o-animation-duration' : '1s',

    '-webkit-animation-delay' : '0s',
    '-moz-animation-delay' : '0s',
    '-o-animation-delay' : '0s'
  });

  $('.titleLogo').css({
    '-webkit-animation-duration' : '0.5s',
    '-moz-animation-duration' : '0.5s',
    '-o-animation-duration' : '0.5s',

    '-webkit-animation-delay' : '0.5s',
    '-moz-animation-delay' : '0.5s',
    '-o-animation-delay' : '0.5s'
  });

  $('.titleTitle').css({
    '-webkit-animation-duration' : '1.8s',
    '-moz-animation-duration' : '1.8s',
    '-o-animation-duration' : '1.8s',

    '-webkit-animation-delay' : '0.5s',
    '-moz-animation-delay' : '0.5s',
    '-o-animation-delay' : '0.5s'
  });

  $('.titleCTA').css({
    '-webkit-animation-duration' : '1s',
    '-moz-animation-duration' : '1s',
    '-o-animation-duration' : '1s',

    '-webkit-animation-delay' : '1.5s',
    '-moz-animation-delay' : '1.5s',
    '-o-animation-delay' : '1.5s'
  });
  //animations//
  $('.titleBackground').animateCss('fadeIn');
  $('.titleLogo').animateCss('fadeInUpBig');
  $('.titleTitle').animateCss('zoomIn');
  $('.titleCTA').animateCss('fadeInLeft');
}

// ========================= //

function titleAnimationsOut() {
  //css delays and duration changes//
  $('.titleLogo, .titleTitle, .titleCTA').css({
    '-webkit-animation-duration' : '1s',
    '-moz-animation-duration' : '1s',
    '-o-animation-duration' : '1s',

    '-webkit-animation-delay' : '0s',
    '-moz-animation-delay' : '0s',
    '-o-animation-delay' : '0s'
  });

  //animations//
  $('.titleLogo').animateCss('fadeOut');
  $('.titleTitle').animateCss('zoomOut');
  $('.titleCTA').animateCss('fadeOutLeft');
  window.setTimeout(titleWrapperDisplayNone, 1000);
}

function titleWrapperDisplayNone() {
  $('#titleWrapper').css('display', 'none');
  $('#warningWrapper').css('display', 'block');
}
// ========== Title End ============ //

// ========== Warning ============ //
function warningAnimationsIn() {
  //css delays and duration changes//
  $('.warningText').css({
    '-webkit-animation-duration' : '2s',
    '-moz-animation-duration' : '2s',
    '-o-animation-duration' : '2s',

    '-webkit-animation-delay' : '0s',
    '-moz-animation-delay' : '0s',
    '-o-animation-delay' : '0s'
  });

  $('.warningMic').css({
    '-webkit-animation-duration' : '0.5s',
    '-moz-animation-duration' : '0.5s',
    '-o-animation-duration' : '0.5s',

    '-webkit-animation-delay' : '1s',
    '-moz-animation-delay' : '1s',
    '-o-animation-delay' : '1s'
  });
  $('.warningWebcam').css({
    '-webkit-animation-duration' : '0.5s',
    '-moz-animation-duration' : '0.5s',
    '-o-animation-duration' : '0.5s',

    '-webkit-animation-delay' : '1s',
    '-moz-animation-delay' : '1s',
    '-o-animation-delay' : '1s'
  });
  //animations//
  $('.warningText').animateCss('fadeInDown');
  $('.warningMic').animateCss('fadeInLeft');
  $('.warningWebcam').animateCss('fadeInRight');
}

function warningAnimationsOut() {
  //css delays and duration changes//
  $('.warningText, .warningMic, .warningWebcam').css({
    '-webkit-animation-duration' : '1s',
    '-moz-animation-duration' : '1s',
    '-o-animation-duration' : '1s',

    '-webkit-animation-delay' : '0s',
    '-moz-animation-delay' : '0s',
    '-o-animation-delay' : '0s'
  });

  //animations//
  $('.warningText').animateCss('fadeOutUp');
  $('.warningMic').animateCss('fadeOutLeft');
  $('.warningWebcam').animateCss('fadeOutRight');
  window.setTimeout(warningWrapperDisplayNone, 1000);
}

function warningWrapperDisplayNone() {
  $('#warningWrapper').css('display', 'none');
	$('#instructions1Wrapper').css('display', 'block');
}
// ========== Warning End ============ //

// ========== Instructions1 ============ //
function instructions1AnimationsIn() {
	//css delays and duration changes//
	$('.instructions1Background').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '0s',
		'-moz-animation-delay' : '0s',
		'-o-animation-delay' : '0s',

		'-webkit-transition': '1s ease-in-out',
		'-moz-transition': '1s ease-in-out',
		'-ms-transition': '1s ease-in-out',
		'-o-transition': '1s ease-in-out',
		'transition' : '1s ease-in-out',

		'-webkit-filter' : 'brightness(0.2)',
		'filter' : 'brightness(0.2)'
	});

	$('.instructions1Popup1, .instructions1Arrow1').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '1s',
		'-moz-animation-delay' : '1s',
		'-o-animation-delay' : '1s'
	});

	$('.instructions1Popup2, .instructions1Arrow2').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '2s',
		'-moz-animation-delay' : '2s',
		'-o-animation-delay' : '2s'
	});

	$('.instructions1Popup3, .instructions1Arrow3').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '3s',
		'-moz-animation-delay' : '3s',
		'-o-animation-delay' : '3s'
	});

	$('.instructions1Popup4, .instructions1Arrow4').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '4s',
		'-moz-animation-delay' : '4s',
		'-o-animation-delay' : '4s'
	});

	$('.instructions1Popup5, .instructions1Arrow5').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '5s',
		'-moz-animation-delay' : '5s',
		'-o-animation-delay' : '5s'
	});

	//animations//
	$('.instructions1Popup1, .instructions1Arrow1, .instructions1Popup2, .instructions1Arrow2, .instructions1Popup3, .instructions1Arrow3, .instructions1Popup4, .instructions1Arrow4, .instructions1Popup5, .instructions1Arrow5').animateCss('fadeIn');
	$('.instructions1Arrow1').animateCss('fadeIn');
}

function instructions1AnimationsOut() {
	//css delays and duration changes//
	$('.instructions1Background, .instructions1Popup1, .instructions1Arrow1, .instructions1Popup2, .instructions1Arrow2, .instructions1Popup3, .instructions1Arrow3, .instructions1Popup4, .instructions1Arrow4, .instructions1Popup5, .instructions1Arrow5').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '0s',
		'-moz-animation-delay' : '0s',
		'-o-animation-delay' : '0s'
	});

	//animations//
	$('.instructions1Background, .instructions1Popup1, .instructions1Arrow1, .instructions1Popup2, .instructions1Arrow2, .instructions1Popup3, .instructions1Arrow3, .instructions1Popup4, .instructions1Arrow4, .instructions1Popup5, .instructions1Arrow5').animateCss('fadeOut');

	window.setTimeout(instructions1WrapperDisplayNone, 1000);
}

function instructions1WrapperDisplayNone() {
  $('#instructions1Wrapper').css('display', 'none');
	$('#instructions2Wrapper').css('display', 'block');
}
// ========== Instructions1 End ============ //

// ========== Instructions2 ============ //
function instructions2AnimationsIn() {
	//css delays and duration changes//
	$('.instructions2Background').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '0s',
		'-moz-animation-delay' : '0s',
		'-o-animation-delay' : '0s',

		'-webkit-transition': '1s ease-in-out',
		'-moz-transition': '1s ease-in-out',
		'-ms-transition': '1s ease-in-out',
		'-o-transition': '1s ease-in-out',
		'transition' : '1s ease-in-out',

		'-webkit-filter' : 'brightness(0.2)',
		'filter' : 'brightness(0.2)'
	});

	$('.instructions2Popup1, .instructions2Arrow1, .instructions2Arrow11').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '1s',
		'-moz-animation-delay' : '1s',
		'-o-animation-delay' : '1s'
	});

	$('.instructions2Popup2, .instructions2Arrow2').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '2s',
		'-moz-animation-delay' : '2s',
		'-o-animation-delay' : '2s'
	});

	$('.instructions2Popup3, .instructions2Arrow3').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '3s',
		'-moz-animation-delay' : '3s',
		'-o-animation-delay' : '3s'
	});

	//animations//
	$('.instructions2Background, .instructions2Popup1, .instructions2Arrow1, .instructions2Arrow11, .instructions2Popup2, .instructions2Arrow2, .instructions2Popup3, .instructions2Arrow3').animateCss('fadeIn');
}

function instructions2AnimationsOut() {
	//css delays and duration changes//
	$('.instructions2Background, .instructions2Popup1, .instructions2Arrow1, .instructions2Arrow11, .instructions2Popup2, .instructions2Arrow2, .instructions2Popup3, .instructions2Arrow3').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '1s',
		'-moz-animation-delay' : '1s',
		'-o-animation-delay' : '1s'
	});

	//animations//
	$('.instructions2Background, .instructions2Popup1, .instructions2Arrow1, .instructions2Arrow11, .instructions2Popup2, .instructions2Arrow2, .instructions2Popup3, .instructions2Arrow3').animateCss('fadeOut');

	window.setTimeout(instructions2WrapperDisplayNone, 1000);
}

function instructions2WrapperDisplayNone() {
$('#instructions2Wrapper').css('display', 'none');
$('#keyboardLayoutWrapper').css('display', 'block');
}
// ========== Instructions2 End ============ //

// ========== KeyboardLayout ============ //
function keyboardLayoutAnimationsIn() {
	//css delays and duration changes//
	$('.keyboardLayoutBackground').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '0s',
		'-moz-animation-delay' : '0s',
		'-o-animation-delay' : '0s',

		'-webkit-transition': '1s ease-in-out',
		'-moz-transition': '1s ease-in-out',
		'-ms-transition': '1s ease-in-out',
		'-o-transition': '1s ease-in-out',
		'transition' : '1s ease-in-out'
	});

	$('.keyboardLayoutKeyboardPic').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '0.5s',
		'-moz-animation-delay' : '0.5s',
		'-o-animation-delay' : '0.5s'
	});

	$('.keyboardLayoutTitle').css({
		'-webkit-animation-duration' : '0.5s',
		'-moz-animation-duration' : '0.5s',
		'-o-animation-duration' : '0.5s',

		'-webkit-animation-delay' : '0.8s',
		'-moz-animation-delay' : '0.8s',
		'-o-animation-delay' : '0.8s'
	});

	$('.keyboardLayoutText1, .keyboardLayoutArrow1').css({
		'-webkit-animation-duration' : '0.5s',
		'-moz-animation-duration' : '0.5s',
		'-o-animation-duration' : '0.5s',

		'-webkit-animation-delay' : '1s',
		'-moz-animation-delay' : '1s',
		'-o-animation-delay' : '1s'
	});

	$('.keyboardLayoutText2, .keyboardLayoutArrow2').css({
		'-webkit-animation-duration' : '0.5s',
		'-moz-animation-duration' : '0.5s',
		'-o-animation-duration' : '0.5s',

		'-webkit-animation-delay' : '1.2s',
		'-moz-animation-delay' : '1.2s',
		'-o-animation-delay' : '1.2s'
	});

	$('.keyboardLayoutText3, .keyboardLayoutArrow3').css({
		'-webkit-animation-duration' : '0.5s',
		'-moz-animation-duration' : '0.5s',
		'-o-animation-duration' : '0.5s',

		'-webkit-animation-delay' : '1.4s',
		'-moz-animation-delay' : '1.4s',
		'-o-animation-delay' : '1.4s'
	});

	$('.keyboardLayoutText4, .keyboardLayoutArrow4').css({
		'-webkit-animation-duration' : '0.5s',
		'-moz-animation-duration' : '0.5s',
		'-o-animation-duration' : '0.5s',

		'-webkit-animation-delay' : '1.6s',
		'-moz-animation-delay' : '1.6s',
		'-o-animation-delay' : '1.6s'
	});

	$('.keyboardLayoutText5, .keyboardLayoutArrow5').css({
		'-webkit-animation-duration' : '0.5s',
		'-moz-animation-duration' : '0.5s',
		'-o-animation-duration' : '0.5s',

		'-webkit-animation-delay' : '1.8s',
		'-moz-animation-delay' : '1.8s',
		'-o-animation-delay' : '1.8s'
	});

	//animations//
	$('.keyboardLayoutBackground, .keyboardLayoutKeyboardPic, .keyboardLayoutTitle, .keyboardLayoutText1, .keyboardLayoutArrow1, .keyboardLayoutText2, .keyboardLayoutArrow2, .keyboardLayoutText3, .keyboardLayoutArrow3, .keyboardLayoutText4, .keyboardLayoutArrow4, .keyboardLayoutText5, .keyboardLayoutArrow5').animateCss('fadeIn');
}

function keyboardLayoutAnimationsOut() {
	//css delays and duration changes//
	$('.keyboardLayoutBackground, .keyboardLayoutKeyboardPic, .keyboardLayoutTitle, .keyboardLayoutText1, .keyboardLayoutArrow1, .keyboardLayoutText2, .keyboardLayoutArrow2, .keyboardLayoutText3, .keyboardLayoutArrow3, .keyboardLayoutText4, .keyboardLayoutArrow4, .keyboardLayoutText5, .keyboardLayoutArrow5').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '1s',
		'-moz-animation-delay' : '1s',
		'-o-animation-delay' : '1s'
	});

	//animations//
	$('.keyboardLayoutBackground, .keyboardLayoutKeyboardPic, .keyboardLayoutTitle, .keyboardLayoutText1, .keyboardLayoutArrow1, .keyboardLayoutText2, .keyboardLayoutArrow2, .keyboardLayoutText3, .keyboardLayoutArrow3, .keyboardLayoutText4, .keyboardLayoutArrow4, .keyboardLayoutText5, .keyboardLayoutArrow5').animateCss('fadeOut');

	window.setTimeout(keyboardLayoutWrapperDisplayNone, 1000);
}

function keyboardLayoutWrapperDisplayNone() {
	$('#keyboardLayoutWrapper').css('display', 'none');
	state = 1;
}


// ========== KeyboardLayout End ============ //

// ========== End ============ //


// ========== Menu Animations Start ============= //

function menuAnimateIn() {
	//css delays and duration changes//
	$('.menuTitleBackground, .menuCloseBtn').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '0s',
		'-moz-animation-delay' : '0s',
		'-o-animation-delay' : '0s'
	});

	$('.menuTitleLogo, .menuTitleTitle, #mainMenuNav, .keyboardControlsMenuLink, .getInTouchMenuLink, .menuKeyboardControlsTitle, .menuKeyboardControlsPic, .menuGetInTouchTitle, .menuGetInTouchSubtitle, .menuGetInTouchEmail').css({
		'-webkit-animation-duration' : '1s',
		'-moz-animation-duration' : '1s',
		'-o-animation-duration' : '1s',

		'-webkit-animation-delay' : '0.5s',
		'-moz-animation-delay' : '0.5s',
		'-o-animation-delay' : '0.5s'
	});

	//Animations//
	$('.menuCloseBtn, .menuTitleBackground').animateCss('fadeIn');
	$('.menuTitleLogo, .menuTitleTitle').animateCss('fadeInUp');
	$('#mainMenuNav, .keyboardControlsMenuLink, .getInTouchMenuLink').animateCss('fadeInLeft');
}


// Menu Start//
function menuInit() {
	if(state === 2 && $('#mainMenuWrapper').css('display', 'none') && wishToClose === false) {
		$('#mainMenuWrapper').css('display', 'block');
		menuAnimateIn();
	} else if(wishToClose === true){
		$('#mainMenuWrapper, #menuKeyboardControls, #menuGetInTouch').css('display', 'none');
		$('#menuTitleWrapper').css('display', 'block');
		wishToClose = false;
		state = 1;
	}

	$('.keyboardControlsMenuLink').click(function() {
		$('#menuTitleWrapper, #menuGetInTouch').css('display', 'none');

		$('#menuKeyboardControls').css('display', 'block');
		return false;
	});

	$('.getInTouchMenuLink').click(function() {
		$('#menuTitleWrapper, #menuKeyboardControls').css('display', 'none');

		$('#menuGetInTouch').css('display', 'block');
		return false;
	});

	//Exit Menu Start//
	$('.menuCloseBtn').click(function() {
		wishToClose = true;
	});
	//Exit Menu End//
}
// Menu End //

// On Application Start-up, begin titleAnimations until state = 1 and application becomes available to control //
$(document).ready(function() {
	titleAnimationsIn();

	$('#titleWrapper').click(function() {
		titleAnimationsOut();
		window.setTimeout(warningAnimationsIn, 1000);
	});

	$('#warningWrapper').click(function() {
		warningAnimationsOut();
		window.setTimeout(instructions1AnimationsIn, 1000);
	});

	$('#instructions1Wrapper').click(function() {
		instructions1AnimationsOut();
		window.setTimeout(instructions2AnimationsIn, 1000);
	});

	$('#instructions2Wrapper').click(function() {
		instructions2AnimationsOut();
			window.setTimeout(keyboardLayoutAnimationsIn, 1000);
	});

	$('#keyboardLayoutWrapper').click(function() {
		keyboardLayoutAnimationsOut();
	});
});
