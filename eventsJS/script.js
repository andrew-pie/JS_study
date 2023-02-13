//Такой метод почти не используется в проектах
// const btn = document.querySelector('button');

// btn.onclick = function () {
// 	alert('Click');
// };

const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');

btn.addEventListener('click', () => {
	alert('Click');
});

let i = 0;
const deleteElement = (e) => {
	console.log(e.target);
	console.log(e.type);
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
};

//удалить елемент
// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

//применить событие для всех кнопок 1 раз
btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, { once: true });
});

const link = document.querySelector('a');

//отменить привычное событие браузера. Например, чтобы не переходило по ссылке
link.addEventListener('click', function (event) {
	event.preventDefault();

	console.log(event.target);
});