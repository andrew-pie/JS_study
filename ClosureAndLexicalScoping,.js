"use strict"

// let number = 5; debugger

// function logNumber() {
// 	let number = 4; debugger
// 	console.log(number);
// }

// number = 6;

// logNumber(); debugger

// number = 8;

// logNumber(); debugger

function createCounter() {
	let counter = 0;

	const myFunction = function () {
		counter = counter + 1;
		return counter;
	}

	return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

//num будет существовать только внутри фигурных скобок цикла или функции. Внешне он не выносится
for (let i = 0; i < 9; i++) {
	for (let j = 0; j < 9; j++) {
		let num = 3;
	}
}
