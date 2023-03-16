'use strict'

const inputUah = document.querySelector('#uah'),
	inputUsd = document.querySelector('#usd');

inputUah.addEventListener('input', () => {
	const request = new XMLHttpRequest();

	// Отправить запрос на сервер
	request.open('GET', 'js/current.json');
	request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
	request.send();

	// отслеживает готовность запроса в данный момент
	request.addEventListener('load', () => {
		// если запрос пришел и код успешен, то можно дальше делать действия
		if (request.status === 200) {
			//Конвертируем в дата обычный код, который получили от сервера
			const data = JSON.parse(request.response);
			inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
		} else {
			inputUsd.value = "Something wrong";
		}
	});

	// событие, когда запрос польностью загрузился

	// status - коды полученные от сервера(404, 301 и тл)
	// ststus text - значение кода
	// response
	// redyState


});	