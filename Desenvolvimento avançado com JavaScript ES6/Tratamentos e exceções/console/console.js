console.log('Black text');
console.warn('Yellow text with alert');
console.error('Red error text');

console.trace();

console.group('My group');
	console.log('Info inside group');
	console.log('More info inside group');
console.groupEnd('My group');

console.table(['João de Oliveira', 'Rafael de Souzas'])

console.log('%c styled log', 'color: blue')


console.time('Log time');
setTimeout( () => {
	console.timeEnd('Log time');
});



