'use strict';

// // Old options
// const num = new Number(3);
// const num = new Function(3);
// console.log(num);

// ES5 standart. At ES6 use Classes 
// Function User become constructor and create objects
function User(name, id) {
	// Create users
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function () {
		console.log(`Hello ${this.name}`);
	};
}

User.prototype.exit = function(name) {
	console.log(`User ${this.name} exit`);
};

// Its object
const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);