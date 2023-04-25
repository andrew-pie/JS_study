'use strict';

// //old
// new ReqExp('pattern', 'flags');

// //new
// /pattern/f

// const ans = prompt('Type your name');

// const reg = /n/ig;

// //true or false
// console.log(reg.test(ans));

// \d - цифрыб \w - буквы, \s - пробелы

//flags: i - big and small, g - global, m
//you can combine flags

//search give number of element
// console.log(ans.search(reg));

// //match give array
// console.log(ans.match(reg));

// const pass = prompt('Password');

// // . - all elements replace for * 
// console.log(pass.replace(/./g, "*"));

// \. - will search not all, but only . (экранирование)

// console.log('12-34-56'.replace(/-/g, ':'));

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i));
//R2D2

// \D - не числа, \W - не буквы