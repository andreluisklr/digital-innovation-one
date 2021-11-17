/*
	Event Emitter.
*/

const EventEmitter = require('events');
const emitter = new EventEmitter();


emitter.on('User logged', data => {
	console.log(data);
});

emitter.emit('User logged', 'Olá Mundo!!!');
