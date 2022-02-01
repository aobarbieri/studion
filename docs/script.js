$(document).ready(() => {
	// Menu
	$('.navbar__menu-btn').on('click', function () {
		$('.navbar__links').toggleClass('active');
		$(this).find('i').toggleClass('fa-bars');
		$(this).find('i').toggleClass('fa-times');
	});

	// Slider Carousel
	$('.slider').slick({
		autoplay: true,
		prevArrow: '<button type="button" class="slick-prev slider__prev-arrow">Previous</button>;',
		nextArrow: '<button type="button" class="slick-next slider__next-arrow">Next</button>;',
	});
});

//Tickets count
setInterval(() => {
	const counterSpan = document.querySelector('.counter__number--tickets');

	const currentNumber = parseInt(counterSpan.innerHTML);
	counterSpan.innerHTML = currentNumber + 1;
}, 2000);
