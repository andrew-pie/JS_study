"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
	health: 400,
	armor: 100,
	sayHello: function() {
		console.log("Hello");
	}
};

//Создать обьект джон и наследовать данные от солдата. (2 новый метод)
const jonh = Object.create(soldier);

//Установка прототипа, чтобы к Джону применялись все значения с солдата
//Устаревший формат
jonh.__proto__ = soldier;

//Новый формат. Установить прототип Джону от солдата
Object.setPrototypeOf(jonh, soldier);

console.log(jonh.armor);