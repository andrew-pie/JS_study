// Rest собирает остальные елементы в массив
const log = function(a, b, ...rest) {
	console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

// if basis undefined, than use 2
function calcOrDouble(number, basis = 2) {
	// // Старый стандарт. Назначать значение стандартное, если не прийдет basis, то использовать 2
	// basis = basis || 2;
	console.log(number * basis);
}

calcOrDouble(3);