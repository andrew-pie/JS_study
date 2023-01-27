"use strict";

let num = 50;

while (num <= 55) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
	console.log(i);
}

for (let i = 1; i < 8; i++) {
	if (i === 6) {
		break
	}

	console.log(i);
}

//Циклы в циклах

for (let i = 0; i < 3; i++) {
	console.log(i);
	for (let j = 0; j < 3; j++) {
		console.log(j);
	}
}

// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++) {

// 	for (let j = 0; j < i; j++) {
// 		result += "*";
// 	}

// 	result += "\n"
// }

console.log(result);


first: for (let i = 0; i < 3; i++) {
	console.log("First level: ${i}");
	for (let j = 0; j < 3; j++) {
		console.log("Second level: ${j}");
		for (let k = 0; k < 3; k++) {
			if (k === 2) continue first;
			console.log("Third level: ${k}");
		}
	}
}

for (let i = 5; i <= 10; i++) {
	console.log(i);
}

for (let i = 20; i >= 14; i--) {
	console.log(i);
}

for (let i = 2; i <= 10; i += 2) {
	console.log(i);
}

for (let i = 2; i <= 16; i++) {
	if (i % 2 === 0) {
		continue;
	} else {
		console.log(i);
	}
}

let i = 2;
while (i <= 16) {
	if (i % 2 === 0) {
		i++;
		continue;
	} else {
		console.log(i);
	}
	i++;
}

const arrayOfNumbers = [];
for (i = 5; i <= 10; i++) {
	arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);

//rewrite array 
// Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

// Пишем решение вот тут

for (let i = 0; i < arr.length; i++) {
	result[i] = arr[i];
}
console.log(result);


//Rename array elements
const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
	console.log(typeof (data[i]));
	if (typeof (data[i]) === "number") {
		data[i] = data[i] * 2;
	} else if (typeof (data[i]) === "string") {
		data[i] = data[i] + " - done"
	}
}

for (i = 0; i < data.length; i++) {
	console.log(data[i])
}


// Разверните массив data наоборот при помощи цикла и запишите данные в массив result.
// Должно получиться: [ 'Homework', 20, 'Shopping', 10, 5 ]
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

let j = 0;
for (let i = data.length - 1; i >= 0; i--) {
	result[j] = data[i];
	j = j + 1;
}

for (i = 0; i < result.length; i++) {
	console.log(result[i])
}

// Create
//      *
//     ***
//    *****
//   *******
//  *********
// ***********

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней


for (let i = 0; i <= lines; i++) {

	for (let j = 0; j < lines - i; j++) {
		result += " ";
	}

	for (let j = 0; j < 2 * i + 1; j++) {
		result += "*";
	}

	result += "\n";

}

console.log(result);