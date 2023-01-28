"use strict";

const str = "test";
const arr = [1, 2, 3];

//количество елементов в строке и в масиве
console.log(str.length);
console.log(arr.length);

console.log(str[2]);

//в верхний регистр. Метож не изменяет старое значение, а просто выводит новое
console.log(str.toUpperCase());
console.log(str.toLowerCase());

const fruit = "Some fruit";

//вывести положение елемента в строке
console.log(fruit.indexOf("fruit"));

//методы взаимодействия со строками
const logg = "Hello world";
//Отрезать кусочек слова
console.log(logg.slice(6, 11));
console.log(logg.slice(6));

console.log(logg.substring(6, 11));

//Методы для работы с числами
const num = 12.2;
console.log(Math.round(num));

const test = "12.2px";
//перевести число в другую систему исчесления (даже строку можно перевести)
console.log(parseInt(test));
// 12

console.log(parseFloat(test));
// 12.2

