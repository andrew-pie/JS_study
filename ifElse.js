"use strict";

if (4 == 9) {
	console.log("Ok!");
} else {
	console.log("Error");
}

const num = 50;

// if (num < 49) {
// 	console.log("Error");
// } else if (num > 100) {
// 	console.log("Много");
// } else {
// 	console.log("Ок!");
// }

// //If else 2 variant with ternar operator
// (num === 50) ? console.log("Ок!") : console.log("Error");

//Строгое сравнение
switch (num) {
	case 49:
		console.log("Неверно");
		break;
	case 100:
		console.log("Неверно");
		break;
	case 50:
		console.log("Верно!");
		break;
	default:
		console.log("Не в этот раз")
		break;
}