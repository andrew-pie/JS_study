'use strict';

class User {
	constructor(name, age) {
		this.name = name;
		this._age = age;
	}

	// We also can add new object property. With # it will be private 
	#surname = 'Pyrozhok';

	say = () => {
		console.log(`Username: ${this.name} ${this.#surname}, age ${this._age}`);
	}

	// only with get method you can get userAge, because this parameter was reated inside function
	get age() {
		return this._age;
	}

	set age(age) {
		if (typeof age === 'number' && age > 0 && age < 110) {
			this._age = age;
		} else {
			console.log('invalid value')
		}
	}
}

const andrii = new User('Andrii', 22);
console.log(andrii.surname);
andrii.say();