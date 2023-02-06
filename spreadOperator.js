"use strict"

// let a = 5,
// 	b = a; // копия обьекта

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
// 	a: 5,
// 	b: 1
// }

// const copy = obj; //ссылка на существующий обьект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

//функция, которая будет создавать новый обьект, перебирая старый
function copy(mainObj) {
	let objCopy = {};

	let key;
	for (key in mainObj) {
		objCopy[key] = mainObj[key];
	}

	return objCopy;
}

const numbers = {
	a: 2,
	b: 5,
	c: {
		x: 7,
		y: 4
	}
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);


const add = {
	d: 17,
	e: 20
}

//assign - добавить к обьекту другой обьект. Создав независимую копию
const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

//clone array with function slice()
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'faedsdwdasfw'
console.log(newArray);
console.log(oldArray);


//оператор разварота. spread
const video = ['youtube', 'vimeo', 'rutube'],
		blog = ['wordpress', 'livejournal', 'blogger'],
		internet = [...video, ...blog, 'vk', 'facebook'];

		console.log(internet);



//Передать елементы в функцию из массива
function log(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}		

const num = [2, 5, 7];

log (...num);


const array = ['a', 'b'];

const newAarray = [...array];

const q = {
	one: 1,
	two: 2
}

const newQ = {...q}; 