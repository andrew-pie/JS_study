window.addEventListener('DOMContentLoaded', () => {

	//Tabs

	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {

		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		//если клик содержит елемент, который нам нужен, то выполняем функцию
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					//спываем все табы
					hideTabContent();
					//открываем нужный нам таб (i)
					showTabContent(i);
				}
			});
		}
	});

	// Timer

	//Створюємо дату кінця акції
	const deadline = '2024-03-30';

	//Переводимо отримані мс в різні величини
	function getTimeRemaining(endtime) {
		let days, hours, minutes, seconds;
		//парсимо дату з стрічки і розраховуємо час до кінця акції
		const t = Date.parse(endtime) - Date.parse(new Date());

		//Перевірка якщо акція вже пройшла, то встановити таймер в 0 і не запускати відлік і розрахунки
		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / (1000 * 60 * 60 * 24)),
				hours = Math.floor((t / (1000 * 60 * 60) % 24)),
				minutes = Math.floor((t / 1000 / 60) % 60),
				seconds = Math.floor((t / 1000) % 60);
		}
		//вертаємо це як об'єкт	
		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	//Добавить 0 в начало, когда число меньше 10
	function getZero(num) {
		if (num >= 0 && num < 10) {
			return `0${num}`;
		} else {
			return num;
		}
	}

	//отримуємо html щоб замінити наші дані
	function setClock(selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		//викликаємо функцію, щоб не було затримки в 1 секунду при завантаженні сторінки, яка вказана в інтервалі оновлення
		updateClock();

		// Створюємо фукнцію, яка оновлює таймер
		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			//Якщо час нижче 0, акція закінчилася, то зупиняємо таймер
			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	//Викликаємо фукнцію
	setClock('.timer', deadline);


	// Модальное окно

	// const modalTrigger = document.querySelector('[data-modal'),
	// 	modal = document.querySelector('.modal'),
	// 	modalCloseBtn = document.querySelector('[data-close]');

	// modalTrigger.addEventListener('click', () => {
	// 	modal.classList.add('show');
	// 	modal.classList.remove('hide');
	// });

	// Получем елементы со страницы
	const modal = document.querySelector('.modal');
	const openModalBtn = document.querySelectorAll('[data-modal]');

	//открываем окно
	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		// // 2 вариант
		// modal.classList.toggle('show');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	// закрываем окно
	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		// // 2 вариант
		// modal.classList.toggle('hide');
		document.body.style.overflow = '';
	}

	// Привязать кнопку к нескольким елементам
	openModalBtn.forEach(btn => {
		btn.addEventListener('click', openModal);
	});


	// close modal window on click in free space
	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			closeModal();
		}
	});

	// close modal with ESC button
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('show')) {
			closeModal();
		}
	});

	// // open modal after 5 sec
	const modalTimerId = setTimeout(openModal, 50000);

	function showModalByScroll() {
		if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	//open modal at page bottom
	window.addEventListener('scroll', showModalByScroll);

	// Classes for cards
	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector, ...classes) {
			this.src = src;
			this.alt = alt;
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.classes = classes;
			this.parent = document.querySelector(parentSelector);
			this.transfer = 37;
			this.changeToUAH();
		}

		changeToUAH() {
			this.price = this.price * this.transfer;
		}

		render() {
			const element = document.createElement('div');
			if (this.classes.length === 0) {
				this.element = 'menu__item';
				element.classList.add(this.element);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}

			element.innerHTML = `
					<img src=${this.src} alt=${this.alt} />
					<h3 class="menu__item-subtitle">${this.title}</h3>
					<div class="menu__item-descr">
					${this.descr}
					</div>
					<div class="menu__item-divider"></div>
					<div class="menu__item-price">
						<div class="menu__item-cost">Цена:</div>
						<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
					</div>
			`;
			this.parent.append(element);
		}
	}

	const getResource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	// // create cards v1
	// getResource('http://localhost:3000/menu')
	// 	.then(data => {
	// 		// get data from db about cards
	// 		data.forEach(({ img, altimg, title, descr, price }) => {
	// 			//create new card and render
	// 			new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
	// 		});
	// 	});

	// // create cards v2
	// getResource('http://localhost:3000/menu')
	// 	.then(data => createCard(data));

	// create cards with axios
	axios.get('http://localhost:3000/menu')
		.then(data => {
			data.data.forEach(({ img, altimg, title, descr, price }) => {
				//create new card and render
				new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
			});
		});

	// function createCard(data) {
	// 	data.forEach(({ img, altimg, title, descr, price }) => {
	// 		const element = document.createElement('div');
	// 		price = price * 38;

	// 		element.classList.add('menu__item');

	// 		element.innerHTML = `
	// 			<img src=${img} alt=${altimg} />
	// 			<h3 class="menu__item-subtitle">${title}</h3>
	// 			<div class="menu__item-descr">
	// 			${descr}
	// 			</div>
	// 			<div class="menu__item-divider"></div>
	// 			<div class="menu__item-price">
	// 				<div class="menu__item-cost">Цена:</div>
	// 				<div class="menu__item-total"><span>${price}</span> грн/день</div>
	// 			</div>
	// 			`;

	// 		document.querySelector('.menu .container').append(element);
	// 	});
	// }

	// Forms

	const forms = document.querySelectorAll('form');
	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Thank you!',
		failure: 'Something get wrong'
	};

	// Подвязываем функцию под формы
	forms.forEach(item => {
		bindPostData(item);
	});

	// async - что в коде используется асинхронный код, await - код, выполнение которого нужно дождаться
	// This function is used to send a POST request to the specified URL with the provided data
	const postData = async (url, data) => {
		// Sends a request to the specified URL with the specified options
		let res = await fetch(url, {
			method: "POST", // Sets the HTTP request method to POST
			headers: { // Specifies that the request body is in JSON format
				'Content-Type': 'application/json'
			},
			body: data // Adds the provided data to the request body
		});

		return await res.json(); // Returns the response as JSON
	};


	// function postData(form) {
	// 	form.addEventListener('submit', (e) => {
	// 		// Отменяем стандартное поведение браузера
	// 		e.preventDefault();

	// 		// Сообщение пользователю про загрузку на сервер
	// 		const statusMessage = document.createElement('img');
	// 		statusMessage.src = message.loading;
	// 		statusMessage.style.cssText = `
	// 			display: block;
	// 			margin: 0 auto;
	// 		`;
	// 		form.insertAdjacentElement('afterend', statusMessage);

	// 		// Делаем http запрос к сепвепу
	// 		const request = new XMLHttpRequest();
	// 		request.open('POST', 'server.php');

	// 		// Создаем переменную, в которой будем отправлять информацию
	// 		request.setRequestHeader('Content-type', 'application/json');
	// 		const formData = new FormData(form);

	// 		//конвертировать Formdata в обычный обьект
	// 		const object = {};
	// 		formData.forEach(function (value, key) {
	// 			object[key] = value;
	// 		});

	// 		//Конвертируем данные в json
	// 		const json = JSON.stringify(object);

	// 		// Отправить запрос
	// 		request.send(json);

	// 		// Проверяем дошел ли запрос на сервер
	// 		request.addEventListener('load', () => {
	// 			if (request.status === 200) {
	// 				console.log(request.response);
	// 				showThanksModal(message.success);
	// 				form.reset();
	// 				statusMessage.remove();
	// 			} else {
	// 				showThanksModal(message.failure);
	// 			}
	// 		});
	// 	});
	// }

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			// Отменяем стандартное поведение браузера
			e.preventDefault();

			// Сообщение пользователю про загрузку на сервер
			let statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessage);

			// Создаем переменную, в которой будем отправлять информацию
			const formData = new FormData(form);

			//конвертировать Formdata в обычный обьект
			// .enteries() - сформировать массив с массивами
			// .fromEntries - с массмва в обьект
			// JSON.stringify - с обьекта в JSON
			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			// Отправить запрос
			// Делаем http запрос к сепвепу
			postData('http://localhost:3000/requests', json)
				.then(data => {
					console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				}).catch(() => {
					showThanksModal(message.failure);
				}).finally(() => {
					form.reset();
				});
		});
	}


	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div class="modal__close" data-close>x</div>
				<div class="modal__title">${message}</div>
			</div>
		`;

		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal();
		}, 4000);
	}

	fetch('http://localhost:3000/menu')
		.then(data => data.json())
		.then(res => console.log(res));

	// fetch('https://jsonplaceholder.typicode.com/posts', {
	// 	method: "POST",
	// 	body: JSON.stringify({ name: 'Alex' }),
	// 	headers: {
	// 		'Content-type': 'application/json'
	// 	}
	// })
	// 	//convert JSON responce from server to js object
	// 	.then(response => response.json())
	// 	.then(json => console.log(json));


	// Slider v1 easy

	// 	const slides = document.querySelectorAll('.offer__slide'),
	// 		prev = document.querySelector('.offer__slider-prev'),
	// 		next = document.querySelector('.offer__slider-next'),
	// 		total = document.querySelector('#total'),
	// 		current = document.querySelector('#current');
	// 	let slideIndex = 1;

	// 	showSlides(slideIndex);

	// 	//смена счетчика
	// 	if (slides.length < 10) {
	// 		total.textContent = `0${slides.length}`;
	// 	} else {
	// 		total.textContent = slides.length;
	// 	}

	// 	function showSlides(n) {
	// 		// go to first slide after last
	// 		if (n > slides.length) {
	// 			slideIndex = 1;
	// 		}

	// 		// go to last slide after first
	// 		if (n < 1) {
	// 			slideIndex = slides.length;
	// 		}

	// 		slides.forEach(item => item.style.display = 'none');

	// 		slides[slideIndex - 1].style.display = 'block';

	// 		//смена числа активного слайда
	// 		if (slides.length < 10) {
	// 			current.textContent = `0${slideIndex}`;
	// 		} else {
	// 			current.textContent = slideIndex;
	// 		}
	// 	}

	// 	function plusSlides(n) {
	// 		showSlides(slideIndex += n);
	// 	}

	// 	prev.addEventListener('click', () => {
	// 		plusSlides(-1);
	// 	});

	// 	next.addEventListener('click', () => {
	// 		plusSlides(1);
	// 	});


	// Slider v2 

	const slides = document.querySelectorAll('.offer__slide'),
		slider = document.querySelector('.offer__slider'),
		prev = document.querySelector('.offer__slider-prev'),
		next = document.querySelector('.offer__slider-next'),
		total = document.querySelector('#total'),
		current = document.querySelector('#current'),
		slidesWrapper = document.querySelector('.offer__slider-wrapper'),
		slidesField = document.querySelector('.offer__slider-inner'),
		width = window.getComputedStyle(slidesWrapper).width;

	let slideIndex = 1;
	let offset = 0;

	//смена счетчика
	if (slides.length < 10) {
		total.textContent = `0${slides.length}`;
		current.textContent = `0${slideIndex}`;
	} else {
		total.textContent = slides.length;
		current.textContent = slideIndex;
	}

	slidesField.style.width = 100 * slides.length + '%';
	slidesField.style.display = 'flex';
	slidesField.style.transition = '0.5s all';

	slidesWrapper.style.overflow = 'hidden';

	slides.forEach(slide => {
		slide.style.width = width;
	});

	slider.style.position = 'relative';

	const indicators = document.createElement('ol'),
		dots = [];

	indicators.classList.add('carousel-indicators');
	indicators.style.cssText = `
		position: absolute;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 15;
		display: flex;
		justify-content: center;
		margin-right: 15%;
		margin-left: 15%;
		list-style: none;
	`;
	slider.append(indicators);

	for (let i = 0; i < slides.length; i++) {
		const dot = document.createElement('li');
		dot.setAttribute('data-slide-to', i + 1);
		dot.style.cssText = `
			box-sizing: content-box;
			flex: 0 1 auto;
			width: 30px;
			height: 6px;
			margin-right: 3px;
			margin-left: 3px;
			cursor: pointer;
			background-color: #fff;
			background-clip: padding-box;
			border-top: 10px solid transparent;
			border-bottom: 10px solid transparent;
			opacity: 0.5;
			transition: opacity 0.6s ease;
		`;
		if (i == 0) {
			dot.style.opacity = 1;
		}
		indicators.append(dot);
		dots.push(dot);
	}

	function deleteNotDigits(str) {
		return +str.replace(/\D/g, '');
	}

	function changeDotsOpacity() {
		dots.forEach(dot => dot.style.opacity = '.5');
		dots[slideIndex - 1].style.opacity = 1;
	}

	next.addEventListener('click', () => {
		if (offset == deleteNotDigits(width) * (slides.length - 1)) {
			offset = 0;
		} else {
			offset += deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == slides.length) {
			slideIndex = 1;
		} else {
			slideIndex++;
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		changeDotsOpacity();
	});


	prev.addEventListener('click', () => {
		if (offset == 0) {
			offset = deleteNotDigits(width) * (slides.length - 1);
		} else {
			offset -= deleteNotDigits(width);
		}

		slidesField.style.transform = `translateX(-${offset}px)`;

		if (slideIndex == 1) {
			slideIndex = slides.length;
		} else {
			slideIndex--;
		}

		if (slides.length < 10) {
			current.textContent = `0${slideIndex}`;
		} else {
			current.textContent = slideIndex;
		}

		changeDotsOpacity();
	});

	dots.forEach(dot => {
		dot.addEventListener('click', (e) => {
			const slideTo = e.target.getAttribute('data-slide-to');

			slideIndex = slideTo;
			offset = deleteNotDigits(width) * (slideTo - 1);

			slidesField.style.transform = `translateX(-${offset}px)`;

			if (slides.length < 10) {
				current.textContent = `0${slideIndex}`;
			} else {
				current.textContent = slideIndex;
			}

			changeDotsOpacity();
		});
	});

	// Calc

	const result = document.querySelector('.calculating__result span');
	let sex = 'female',
		height, weight, age,
		ratio = 1.375;

	function calcTotal() {
		if (!sex || !height || !weight || !age || !ratio) {
			result.textContent = '____';
			return;
		}

		if (sex === 'female') {
			result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
		} else {
			result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
		}
	}

	calcTotal();

	function getStaticInformation(parentSelector, activeClass) {
		// get all divs from parrent
		const elements = document.querySelectorAll(`${parentSelector} div`);

		elements.forEach(elem => {
			elem.addEventListener('click', (e) => {
				if (e.target.getAttribute('data-ratio')) {
					ratio = +e.target.getAttribute('data-ratio')
				} else {
					sex = e.target.getAttribute('id');
				}

				elements.forEach(elem => {
					// delete green class from all elements
					elem.classList.remove(activeClass);
				});

				// add green color to active element
				e.target.classList.add(activeClass);

				calcTotal();
			});
		});
	}

	getStaticInformation('#gender', 'calculating__choose-item_active');
	getStaticInformation('.calculating__choose_big', 'calculating__choose-item_active');

	function getDynamicInformation(selector) {
		const input = document.querySelector(selector);

		input.addEventListener('input', () => {
			// check what id user input
			switch (input.getAttribute('id')) {
				case 'height':
					height = +input.value;
					break;
				case 'weight':
					weight = +input.value;
					break;
				case 'age':
					age = +input.value;
					break;
			}

			calcTotal();
		});
	}

	getDynamicInformation('#height');
	getDynamicInformation('#weight');
	getDynamicInformation('#age');
});