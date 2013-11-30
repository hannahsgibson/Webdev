



var FLAVOUR1 = {
	init: function() {
		$('#flavour1card').click(function() {
			$('.subcard').hide();
			$('#flavour1card').fadeTo(0,1);
			$('.card').animate({height:30}, 1000).not(document.getElementById('flavour1card')).fadeTo(500, 0.3);
			$('.flavour1').fadeTo(500, 1);
		});
	}
}

var FLAVOUR2 = {
	init: function() {
		$('#flavour2card').click(function() {
			$('.subcard').hide();
			$('#flavour2card').fadeTo(0,1);
			$('.card').animate({height:30}, 1000).not(document.getElementById('flavour2card')).fadeTo(500, 0.3);
			$('.flavour2').fadeTo(500, 1);
		});
	}
}

var FLAVOUR3 = {
	init: function() {
		$('#flavour3card').click(function() {
			$('.subcard').hide();
			$('#flavour3card').fadeTo(0,1);
			$('.card').animate({height:30}, 1000).not(document.getElementById('flavour3card')).fadeTo(500, 0.3);
			$('.flavour3').fadeTo(500, 1);
		});
	}
}

var FLAVOUR4 = {
	init: function() {
		$('#flavour4card').click(function() {
			$('.subcard').hide();
			$('#flavour4card').fadeTo(0,1);
			$('.card').animate({height:30}, 1000).not(document.getElementById('flavour4card')).fadeTo(500, 0.3);
			$('.flavour4').fadeTo(500, 1);
		});
	}
}

var FLAVOUR5 = {
	init: function() {
		$('#flavour5card').click(function() {
			$('.subcard').hide();
			$('#flavour5card').fadeTo(0,1);
			$('.card').animate({height:30}, 1000).not(document.getElementById('flavour5card')).fadeTo(500, 0.3);
			$('.flavour5').fadeTo(500, 1);
		});
	}
}

var FLAVOUR6 = {
	init: function() {
		$('#flavour6card').click(function() {
			$('.subcard').hide();
			$('#flavour6card').fadeTo(0,1);
			$('.card').animate({
				height:30,
				}, 1000).not(document.getElementById('flavour6card')).fadeTo(500, 0.3);
			$('.flavour6').fadeTo(500, 1);
		});
	}
}

var FLAVOUR7 = {
	init: function() {
		$('#flavour7card').click(function() {
			$('.subcard').hide();
			$('#flavour7card').fadeTo(0,1);
			$('.card').animate({height:30}, 1000).not(document.getElementById('flavour7card')).fadeTo(500, 0.3);
			$('.flavour7').fadeTo(500, 1);
		});
	}
}

var FLAVOUR8 = {
	init: function() {
		$('#flavour8card').click(function() {
			$('.subcard').hide();
			$('#flavour8card').fadeTo(0,1);
			$('.card').animate({height:30}, 1000).not(document.getElementById('flavour8card')).fadeTo(500, 0.3);
			$('.flavour8').fadeTo(500, 1);
		});
	}
}




$(document).ready(function() {
	$('.subcard').hide();
	FLAVOUR1.init();
	FLAVOUR2.init();
	FLAVOUR3.init();
	FLAVOUR4.init();
	FLAVOUR5.init();
	FLAVOUR6.init();
	FLAVOUR7.init();
	FLAVOUR8.init();
	// HOVERS.init();
});



// var HOVERS = {
// 	$(".subcard").on('mouseenter',function() {
// 	  $(this).css({"background","yellow"});
// 	});
// }

// var HOVERS = {
// 	$(".subcard").mouseover(function() {
// 	  $(".subcard").css("background","yellow");
// 	});
// }

//   $('span').on('mouseenter', function () {
//        $('#test').show();
//        $(this).css({
//            "text-decoration": "underline"
//        });

// var yes;
// $('.card').click(function () {
//     $(this).attr('id');
// });

// console.log(yes);

// $(document).ready(function(event) {
// $(".subcard").hover(function(){
//   $(".subcard").css("background","yellow");
// 	});
// });


// $('li').not(document.getElementById('notli'))
//   .css('background-color', 'red');

// function isFlavour(flavour){
// var flavourlist = [flavour1, flavour2, flavour3, flavour4, flavour5, flavour6, flavour7, flavour8];
// 	if ($.inArray(flavour, flavourlist) !== -1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// $("input").keypress(function(event){
// 	$('#justPressed').append(event.which);
// 	if(isVowel(event.which)) {
// 		event.preventDefault();
// 	}
// });



// if(click flavourX):
// - shrink all flavour cards
// - make all flavour cards except flavourx show
// - expand flavourX subcards