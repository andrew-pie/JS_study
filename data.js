'use strict'

// const now = new Date(2023, 3, 3, 20);

// //Время начинается с 1970 года
// const now = new Date(0);

const now = new Date();

//запарсить с елемента дату
const Date.parse()

//Установить время
console.log(now.setHours(18));

console.log(now.setHours(18));

// //Получить год в формате 4 цифр
// console.log(now.getFullYear());

// //Получить месяц
// console.log(now.getMonth());

// //Получить день
// console.log(now.getDate());

// //Получить день недели
// console.log(now.getDay());

// //Получить время по utc
// console.log(now.getUTCHours());

// //Получить разницу между utc и нашим часовым поясом
// console.log(now.getTimezoneOffset());

let start = new Date();

for (let i = 0; i < 100000; i++) {
	let some = i ** 3;
}

let end = new Date();

console.log(`Цикл отработал за ${end - start} миллисекунд`);