$(document).ready(function () {
	svg4everybody({});

	$('a[data-rel^=lightcase]').lightcase();

	$('.hide-nav').on('click', function () {
		$(this).toggleClass('active')
		$('.header__nav').slideToggle('fast')
	})

	let reviews = new Swiper('.reviews', {
		watchSlidesProgress: true,
		watchSlidesVisibility: true,
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},

			565: {
				slidesPerView: 2,
				spaceBetween: 10,
			},


			767: {
				slidesPerView: 3,
				spaceBetween: 10,
			}
		}
	})

	$(".js-scroll-to-form").click(function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id = $(this).attr('href'),
			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({ scrollTop: top }, 1000);
	});
});