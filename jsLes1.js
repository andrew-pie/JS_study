"use strict";

a = 15;

let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

var name = "Ivan";


//Типы данных
number = 5;
console.log(4 / 0);
console.log("string" * 9);

const persone = "Alex";

const bool = true;

console.log(something); //null (когда нет чего-то)

let ung;
console.log(ung) //undefined

//object
const obj = {
	//свойства обьекта
	name: "John",
	age: 25,
	isMarried: false
}

//обращение к обьектам
console.log(obj.name); _

//Массив
let arr = ["plum.png", "orange.jpg", "apple.bmp", 6, {}, []];
//обращение к елементу массива (с 0 начинается)
console.log(arr[1]);

//массив - частный случай обьекта, а не отдельный тип данных

//ex after video 12
const storeName = "My store";
const storeDescription = {
	budget: 10000,
	employees: ["John", "Kate", "Andrii"],
	products: {
		ps4: 300,
		xbox: 250
	},
	open: true
}


// предупредить пользователя про что-то
alert("Hello");

//спросить пользователя о чем-то
const result = confirm("Are you here?");

// пользователь может напечатать что-то (тип данных. которые приходит данные- строка)
const answer = prompt("Вам есть 18?", "да/нет");
//проверить тип данных
typeof (answer);

//обьявляем массив
const answers = [];

//Спросить пользователя что-то и записать в массив
answers[0] = prompt("Как ваше имя?", "");
answers[1] = prompt("Как ваше фамилия?", "");
answers[2] = prompt("Сколько вам лет?", "");

//Команды для пользователя работают только внутри браузера. В vscode выводиться ошибка

//Интерполяция
const category = "toys";
console.log("https://someurl.com/" + category) //старая версия
console.log(`https://someurl.com/${category}/5`); //новая версия с интерполяцией (использовать косые кавычки))


//Операторы
// инкримент и дикримент
let incr = 10,
	decr = 10;

incr++; //увеличение на еденицу (постфиксная)
//	++incr; увеличение на еденицу (префиксная)
decr--; //уменьшить на еденицу


console.log(incr++); //постфиксная возвращает значение старое и потом его изменяет
console.log(++incr); //префиксная возвращает новое значение сразу

// % остаток от деления чисел
// = присваивание
// == сравнение
// === сравнение по типу данных - строгое сравнение
//&& - и (если все значение правдивые, то будет true)
// || - или или (если 1 елемент будет правдивым, то будет true)
// ! - оператор отрицания
