const films = [
	{
		name: 'Titanic',
		rating: 9
	},
	{
		name: 'Die hard 5',
		rating: 5
	},
	{
		name: 'Matrix',
		rating: 8
	},
	{
		name: 'Some bad film',
		rating: 4
	}
];

// function showGoodFilms(arr) {
// 	return arr.filter(film => film.rating >= 8);
// }

// showGoodFilms(films);

// function showListOfFilms(arr) {
// 	let listOfFilms = arr.map(arr => arr.name);
// 	listOfFilms = listOfFilms.reduce((sum, current) => `${sum}, ${current}`);
// 	return listOfFilms;
// }

// showListOfFilms(films);

function setFilmsIds(arr) {
return arr.map((film, i) => {
	film.id = i;
	return film;
});
}
console.log(setFilmsIds(films));


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
return arr.every(film => film.id || film.id === 0 ? true : false);
}

// Task 2 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)
// Пример:
// getPositiveIncomeAmount(funds) => 13300
// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.
// Пример:
// getTotalIncomeAmount(funds) => -500

console.log(checkFilms(tranformedArray));


const funds = [
	{amount: -1400},
	{amount: 2400},
	{amount: -1000},
	{amount: 500},
	{amount: 10400},
	{amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
	return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0)
}

getPositiveIncomeAmount(funds);

const getTotalIncomeAmount = (data) => {
	return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
}

getTotalIncomeAmount(funds);