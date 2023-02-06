const family = [];

function showFamily(arr) {
	let str = '';

	arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

	arr.forEach(member => {
		str += `${member} `
	});

	return str;
}

console.log(showFamily(family));





const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
	arr.forEach(city => {
		console.log(city.toLowerCase())
	})
}

standardizeStrings(favoriteCities);



const someString = 'This is some strange string';

function reverse(str) {
	// if (typeof str === 'string') {
	// 	let stringArr = str.split("");
	// 	const reversed = stringArr.reverse();

	// 	// by default string.replace in JavaScript will only replace the first matching value 
	// 	//it finds. Adding the /g will mean that all of the matching values are replaced.
	// 	let newString = reversed.toString().replace(/,/g, "");
	// 	console.log(newString);

	// 	return newString;
	// } else {
	// 	let errorMessage = "Ошибка!";
	// 	return errorMessage
	// }

	if (typeof(str) !== 'string') {
		return "Ошибка!";
  }
  // Самый оптимальный вариант решения
  return str.split('').reverse().join('');
}

reverse(someString);




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
	if (arr.length === 0) {
		return "Нет доступных валют";
	} 
	let text = "Доступные валюты:" + "\n";

	for (let i = 0; i<arr.length; i++) {
		if (arr[i] === missingCurr) {
			break;
		}
		text += arr[i] + "\n";
	}
	console.log(text);
	return text;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');