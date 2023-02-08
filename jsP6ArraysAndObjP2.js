"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
	arr.sort();
	console.log(arr);

	const gr1 = [];
	const gr2 = [];
	const gr3 = [];
	const gr4 = [];

	for (let i = 0; i < arr.length; i++) {
		if (i < 3) {
			gr1.push(arr[i]);
		} else if (i < 6) {
			gr2.push(arr[i]);
		} else if (i < 9) {
			gr3.push(arr[i]);
		} else {
			gr4.push(arr[i]);
		}
	}

	console.log(gr1, gr2, gr3, `Оставшиеся студенты: ${gr4.length === 0 ? '-' : gr4.join(', ')}`);

	return [gr1, gr2, gr3, `Оставшиеся студенты: ${gr4.length === 0 ? '-' : gr4.join(', ')}`];
}

sortStudentsByGroups(students);