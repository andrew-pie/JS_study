'use strict'

// let user = { name: 'Ivan' };

// let map = new WeakMap();
// map.set(user, 'data');

// user = null;

// console.log(map);

let cache = new WeakMap();

function cahcheUser(user) {
	if (!cache.has(user)) {
		cache.set(user, Date.now());
	}

	return cache.get(user);
}

let lena = { name: 'Elena' };
let alex = { name: 'Alex' };

cahcheUser(lena);
cahcheUser(alex);

lena = null;

console.log(cache.has(lena));
console.log(cache.has(alex));

let messages = [
	{ text: 'hello', from: 'John' },
	{ text: 'world', from: 'Alex' },
	{ text: '...', from: 'M' },
];

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

messages.shift();
console.log(readMessages.has(messages[0]));

