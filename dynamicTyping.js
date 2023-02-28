"use strict"

// To string

// 1)
console.log(typeof(String(null)));
console.log(typeof(String(4)));

// 2) конкретинация - сложение строки с чем-то
// При сложении со строкой у нас получается строка
console.log(typeof(5 + ''));

const num = 5;

//старая вариация без бектиков
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4')));

// 2) унарный + (более удобный)
console.log(typeof(+'5'));

// 3)
console.log(typeof(parseInt("15px", 10)));


let answ = +prompt("Hello", "");


// To boolean

//false: 0, '', null, undefined, NaN; Все остальное будет true 
//1)
let switcher = null;

//если switcher = false - условие не выполняется
if (switcher) {
	console.log('Working...');
}

switcher = 1;

// 1 == true, условие выполнится
if (switcher) {
	console.log('Working...');
}

// 2)
console.log(typeof(Boolean('4')));

// 3)
// This code logs the type of data (in this case it will log 'boolean')
console.log(typeof(!!"4444"));