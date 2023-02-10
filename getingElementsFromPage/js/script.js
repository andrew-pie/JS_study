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