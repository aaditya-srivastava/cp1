$(function(){



	$('.wrapper .first').on('click', '.left', function(){
		$('.upper.first').addClass('hide');
		$('.upper.second').removeClass('hide');
		$('.button-part .arrived').removeClass('hide');
	});

	$('.button-part').on('click', '.arrived', function(){
		$(this).addClass('hide');
		$('.button-part .loaded').removeClass('hide');
		$('.first-timer').addClass('hide');
		$('.second-timer').removeClass('hide');
	});

	$('.button-part').on('click', '.loaded', function(){
		$(this).addClass('hide');
		$('.button-part .reached').removeClass('hide');
		$('ul.status-chain li.loaded').removeClass('to-do').addClass('done');


		$('.wrapper.style1').css('display', 'none');
		$('.time-to-travel').css('display', 'none');
		$('.button-part').addClass('hide');
		$('.invoice-section').removeClass('hide');
		$('.invoice-button').removeClass('hide');

	});

	$('.button-part').on('click', '.reached', function(){
		$(this).addClass('hide');
		$('.button-part .unloaded').removeClass('hide');
		$('ul.status-chain li.reached').removeClass('to-do').addClass('done');
	});

	$('.button-part').on('click', '.unloaded', function(){
		$(this).addClass('hide');
		$('.button-part .finish').removeClass('hide');
		$('ul.status-chain li.unloaded').removeClass('to-do').addClass('done');
	});

	// $('.button-part').on('click', '.invoice', function(){
	// 	$(this).addClass('hide');
	// 	$('.button-part .invoice').removeClass('hide');
	// 	// remove this later | just for debugging
	// 	$('ul.status-chain li.invoice').removeClass('to-do').addClass('done');
	// });

	$('.button-part').on('click', '.finish', function(){
		// $(this).addClass('hide');
		// $('.button-part .finish').removeClass('hide');

		$('#wrapper').addClass('hide');
		$('.enjoy').removeClass('hide');

		$('.cart-value').addClass('hide');
	});

	$('.button-part').on('click', '.finish', function(){
		$('#wrapper').addClass('hide');
		$('.enjoy').removeClass('hide');
	});


	$('.invoice-button').on('click', '.next', function(){
		$(this).addClass('hide');
		$('.invoice-button .locking').removeClass('hide');

		$('.invoice-section').addClass('hide');
		$('.lock-section').removeClass('hide');
	});

	$('.invoice-button').on('click', '.locking', function(){
		$(this).addClass('hide');
		

		$('.wrapper.style1').css('display', 'block');
		$('.time-to-travel').css('display', 'block');
		$('.button-part').removeClass('hide');
		$('.invoice-button').addClass('hide');
		$('.lock-section').addClass('hide');
		
	});

	$('.googleimage').on('click', 'img', function(){
		$('.popup').css('display', 'block');
	});

	$('.popup').on('click', '.close', function(){
		$('.popup').css('display', 'none');
	});


});