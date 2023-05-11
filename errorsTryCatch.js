'use strict';

// if try code okay, that script end. If error - we will go to catch part
// finally complete all time
try {
	console.log('Normal');
	console.log(a);
	console.log('result');
} catch(error) {
	console.log(error.name);
	console.log(error.message);
	console.log(error.stack);
} finally {
	console.log('finally')
}

console.log('Still normal');