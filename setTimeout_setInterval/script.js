// const timerId = setTimeout(function() {
// 	console.log('Hello');
// }, 2000);

const btn = document.querySelector('.btn');
let timerId,
	i = 0;

function myAnimation() {
	const elem = document.querySelector('.box');
	let pos = 0;

	const id = setInterval(frame, 10);
	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		}
	}
}

btn.addEventListener('click', myAnimation);

// function logger() {
// 	if (i === 3) {
// 		//сбросить таймер
// 		clearInterval(timerId);
// 	}
// 	console.log('text');
// 	i++;
// }

// //Рекурсивный метод запуска. Почти как setInterval. счетчик запускается после завершения функции
// const id = setTimeout (function log() {
// 	console.log('Hello');
// 	id = setTimeout(log, 500)
// }, 500);