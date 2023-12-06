document.addEventListener("DOMContentLoaded", () => {

	document.querySelector('.main--header__text .h1').innerHTML = document.querySelector('.h1').innerHTML.replace('Technological', '<span style="color:#00226C">Technological</span>');

	let openRequest = document.querySelectorAll('.open--requestAquote');

	openRequest.forEach( (modal) => {
		let modalRequest = document.querySelector('.modal--requestAquote');
		modal.addEventListener('click', () => {
			modalRequest.classList.add('active');
			document.querySelector('body').classList.add('hidden');
		});
		modalRequest.addEventListener("click", (event) => {
			if (!event.target.closest('.modal--requestAquote.active .modal--wrapper') && !event.target.closest('.modal--close')) {
				modalRequest.classList.remove('active');
				document.querySelector('body').classList.remove('hidden');
				event.stopPropagation();
			}
		});
	});

	let modalClose = document.querySelectorAll(".modal--close");
	modalClose.forEach(close => {
		close.addEventListener('click', () => {
			const modal = close.closest('.modal');
			// Проверяем, есть ли у модального окна класс active
			if (modal.classList.contains('active')) {
				// Скрываем модальное окно
				modal.classList.remove('active');
				document.querySelector('body').classList.remove('hidden');
			}
		});
	});

	const splideElementGallery = document.querySelector('.splide--gallery');
	if (splideElementGallery) {
		const splideGallery = new Splide( '.splide--gallery', {
			type: 'loop',
			width: '100%',
			gap: '50px',
			perPage: 3,
			speed: '900',
		} );
	
		splideGallery.mount();
	}

});

// $(function() {

// 	// Custom JS

// });
