'use strict';

// console.log('Request data...');

// const req = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		console.log('Preparing data...');

// 		const product = {
// 			name: 'tv',
// 			price: 2000
// 		};

// 		//if success return product
// 		resolve(product);
// 	}, 2000);
// });

// //if success we send data get
// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'Order';
// 			resolve(product);
// 		}, 2000);
// 	});
// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then((data) => {
// 	console.log(data);
// 	// catch will be done when error happend
// }).catch(() => {
// 	console.error('Error');
// }).finally(() =>{
// 	console.log('Finally');
// });

const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time);
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms'));

// // Выполняет действие, когда все промисы выполняться
// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });

// выполняет дейтствия, когда 1 промис выполнился
Promise.race([test(1000), test(2000)]).then(() => {
	console.log('All');
});

