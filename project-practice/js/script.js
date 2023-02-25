/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		poster = document.querySelector('.promo__bg'),
		genre = poster.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		addForm = document.querySelector('form.add'),
		addInput = addForm.querySelector('.adding__input'),
		checkbox = addForm.querySelector('[type="checkbox"]');

	addForm.addEventListener('submit', (event) => {
		event.preventDefault();

		const newFilm = addInput.value;
		//проверить отмечен ли чекбокс
		const favorite = checkbox.checked;

		if (newFilm) {

			if (newFilm.length > 21) {
				newFilm = `${newFilm.substring(0, 22)}...`;
			}

			//добавить фильм в обьект
			movieDB.movies.push(newFilm);
			//сортировать
			sortArr(movieDB.movies);

			createMovieList(movieDB.movies, movieList);
		};

		event.target.reset();

	});

	const deleteAdv = (arr) => {
		//Remove ads
		arr.forEach(item => {
			item.remove();
		});
	};

	// //2 вариант через функцию
	// adv.forEach(function (item){
	// eslint-disable-next-line linebreak-style
	// 	item.remove();
	// });

	const makeChanges = () => {
		//Изменить жанр
		genre.textContent = 'драма';

		//изменить задний фон
		poster.style.backgroundImage = 'url("img/bg.jpg")';
	};

	//одинаковая команда по добавлению
	// a = a + 1;
	// a += 1

	const sortArr = (arr) => {
		arr.sort();
	};

	function createMovieList(films, parent) {
		//Удалить елементы из страницы;
		parent.innerHTML = "";

		//Поместить елементы на страницу
		films.forEach((film, i) => {
			parent.innerHTML += `
			<li class="promo__interactive-item">${i + 1} ${film}
				<div class="delete"></div>
			</li>
	`;
		});
	}

	deleteAdv(adv);
	makeChanges();
	sortArr(movieDB.movies);
	createMovieList(movieDB.movies, movieList);

});