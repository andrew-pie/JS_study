"use strict";

const arr = [2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
	return a - b;
}

//arr.lentgh = last index in array +1
// console.log(arr.length);

//перебор массива
arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} внутри массива ${arr}`);
});

// //delete last element from array
// arr.pop();

// //add element to array
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

for (let value of arr) {
	console.log(value);
}


// сформировать массив на основании строки
const str = prompt("", "");
const products = str.split(", ");
//стортировка
products.sort();
console.log(products);

// сформировать строку на основании массива
console.log(products.join('; '));