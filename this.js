'use strict';

// function showThis(a, b) {
// 	console.log(this);
// 	function sum() {
// 		console.log(this);
// 		return a + b;
// 	}

// 	console.log(sum());
// }
// showThis(4, 5);

// const obj = {
// 	a: 20,
// 	b: 15,
// 	sum: function () {
// 		function shout() {
// 			console.log(this);
// 		}
// 		shout();
// 	}
// };
// obj.sum();

// function User(name, id) {
// 	this.name = name;
// 	this.id = id;
// 	this.human = true;
// 	this.hello = function() {
// 		console.log("hello! " + this.name);
// 	};
// }
// let ivan = new User('Ivan', 23);

function sayName(surname) {
	console.log(this);
	console.log(this.name + surname);
}

const user = {
	name: 'John'
};

//функция приобрела контекст через методы ниже, и теперь она выполняетс япо 2 правилу
//Синтаксис через запятую
sayName.call(user, 'Smoth');
//Синтаксис через запятую в массиве
sayName.apply(user, ['Smith']);

function count(num) {
	return this*num;
}

// Bind create new function
const double = count.bind(2);
console.log(double(3));
console.log(double(13));

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this: call, apply, bind
