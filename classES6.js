'use strict';

// Класс
class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	// Метод
	calcArea() {
		return this.height * this.width;
	}
}

// Класс, который наследует свойства и методы большой предыдущий
class ColoredRectangleWithText extends Rectangle {
	constructor(height, width, text, bgColor) {
		//Перенести елементы с родителя. Должен быть на 1 месте
		super(height, width);
		this.text = text;
		this.bgColor = bgColor;
	}
	
	showMyProps() {
		console.log(`Text: ${this.text}, color: ${this.bgColor}`);
	}
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world', 'red');

div.showMyProps();
console.log(div.calcArea());

// Переменная с обьектом
const square = new Rectangle(10, 10);
const long = new Rectangle(20,100);

console.log(square.calcArea());
console.log(long.calcArea());