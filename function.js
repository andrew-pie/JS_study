"use strict";

let num = 20;

//создать функцию с именем showFirstMessage
function showFirstMessage(text) {
	console.log(text);
	let num = 10;
	console.log(num);
}

//вызвать функцию
showFirstMessage("Hello world");
console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));


function ret() {
	let num = 50;

	//


	return num;
}

const anotherNum = ret();
console.log(anotherNum);


const logger = function () {
	console.log("hello");
};

logger();

// стрелочная функция
// const calc = (a, b) => { return a + b };


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
	return curr * amount;
}

function promotion(result) {
	console.log(result * discount);
	//если нет return, то функция выводит return undefined

}

//вызвать функцию и передать результат новой функции
const res = convert(500, usdCurr)
promotion(res);

function test() {
	for (let i = 0; i < 5; i++) {
		console.log(i);
		if (i === 3) return
	}
	console.log('done')
}

test();


function doNothing() { };
console.log(doNothing() === undefined);


// 1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
// Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". В решении вызывать функцию не нужно, программа сделает это за вас.
// P.S. возвращать - это использовать ключевое слово return.
// P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

// Место для первой задачи
function sayHello(name) {
	return `Привет, ${name}!`;
}


// Место для второй задачи
function returnNeighboringNumbers(num) {
	return [num - 1, num, num + 1];
}

// Место для третьей задачи


function getMathResult(a, b) {
	if (typeof b != "number" || b <= 0) {
		console.log("false");
		return a
	} else {
		let stringNew = '';
		for (let i = 1; i <= b; i++) {
			if (i === b) {
				stringNew += a * i;
			} else {


				stringNew += a * i + "---";
			}
		}
		console.log(stringNew);
		return stringNew
	}
}

getMathResult(5, 3);