window.addEventListener('DOMContentLoaded', () => {

	//Tabs

	const tabs = document.querySelectorAll('.tabheader__item'),
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
	const deadline = '2023-03-11';

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
	const closeModalBtn = document.querySelector('[data-close]');

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

	closeModalBtn.addEventListener('click', closeModal);

	// close modal window on click in free space
	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
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
	// const modalTimerId = setTimeout(openModal, 5000);

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

	// Создаем обьект и вызываем метод рендер. Обьект после выполнения исчезнет
	new MenuCard(
		"img/tabs/vegy.jpg",
		"vegy",
		'Меню "Фитнес"',
		'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
		9,
		'.menu .container',
	).render();

	new MenuCard(
		"img/tabs/elite.jpg",
		"elite",
		'Меню “Премиум”',
		'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
		14,
		'.menu .container',
		'menu__item',
		'big'
	).render();

	new MenuCard(
		"img/tabs/post.jpg",
		"post",
		'Меню "Постное"',
		' Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
		21,
		'.menu .container',
		'menu__item',
		'big'
	).render();

});