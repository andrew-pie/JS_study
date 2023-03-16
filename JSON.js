"use strict"

const persone = {
	name: 'Alex',
	tel: '+380967403095',
	parents: {
		mom: 'Olga',
		dad: 'Mike'
	}
};

console.log(JSON.stringify(persone));

// Создание глубокого клона. Превращение обьекта в формат JSON и распарсит его назад в обьект. 
// Чтобы первый обьект не изменялся при изменении второго, который копирует его значения 
const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);