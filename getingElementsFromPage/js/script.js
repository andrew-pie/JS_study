'use strict';

//Получить елемент
const box = document.getElementById('box');

console.log(box);

//html collection like array
const btns = document.getElementsByTagName('button');
//использовать вторуб кнопку за индексом 1
console.log(btns[1]);

const circles = document.getElementsByClassName('circle');
console.log(circles);


//современные методы
//css селектор помещаем
const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
	console.log(item);
});

const oneHart = document.querySelector('.heart');
console.log(oneHart);

const wrapper = document.querySelector('.wrapper');

//Менять стиль js в CSS
box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
	item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');
//берем тег body и в конец добавляем div
document.body.append(div);

//по другому запись того же
wrapper.append(div);

// wrapper.appendChild(div);

//ставит див вначале класса
wrapper.prepend(div);

//поместить перед первым сердечком квадрат
hearts[0].before(div);

//поместить после первого сердечка квадрат
hearts[0].after(div);

//Удалить елемент
circles[0].remove();

//cтарый метод
// wrapper.removeChild(hearts[1]);

//заменить один елемент другим
hearts[0].replaceWith(circles[0]);

//старый метож
// wrapper.insertBefore(div, hearts[0]);

//cтарый метод
// wrapper.replaceChild(circles[0], hearts[0]);

//передать текст или html структуру
div.innerHTML = "<h1>Hello world</h1>";
//только текст передать
div.textContent = 'Hello';

div.insertAdjacentHTML('beforeBegin', '<h2>Hello</h2>');