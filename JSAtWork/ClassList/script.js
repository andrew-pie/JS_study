const btns = document.querySelectorAll('button'),
	//выбираем родителя
	wrapper = document.querySelector('.btn-block');

// //Получить количество классов
// console.log(btns[0].classList.length);

// //Получить класс
// console.log(btns[0].classList.item(0));

// //Добавить класс
// console.log(btns[1].classList.add('red'));

// //Удалить класс
// console.log(btns[0].classList.remove('blue'));

// //Если класс есть в елементе - удалить. Если нет - добавить
// console.log(btns[0].classList.toggle('blue'));

// //Проверить наличие класса в елементе
// if (btns[1].classList.contains('red')) {
// 	console.log('red');
// }

btns[0].addEventListener('click', () => {
	// if (!btns[1].classList.contains('red')) {
	// 	btns[1].classList.add('red');
	// } else {
	// 	btns[1].classList.remove('red');
	// }

	btns[1].classList.toggle('red');
});

//не использовать classNsme.Так как это строка
// console.log(btns[0].className);

// делигирование событий с родителя на всех потомков
wrapper.addEventListener('click', (event) => {
	if (event.target && event.target.matches("button.red")) {
		console.log('Hello');
	}
});

//Второй вариант деллигирования - не работает с динамично добавленными елементами
// btns.forEach(btn => {
// 	btn.addEventListener('click', () => {
// 		console.log('Hello');
// 	});
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);