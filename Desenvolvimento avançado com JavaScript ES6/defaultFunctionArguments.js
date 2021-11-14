/*
	Parâmetros predefinidos de funções.
*/


function somar(a, b){
	a = a || 0;
	b = b || 0;
	
	return a + b;
}
console.log('soma: ', somar(10));


function multiplicar(a, b){
	if(typeof a === 'undefined') a = 1;
	if(typeof b === 'undefined') b = 1;
	
	return a * b;
}
console.log('multiplicação: ', multiplicar(50));


function subtrair(a = 0, b = 0){
 	return a - b;
}
console.log('subtração: ', subtrair(10, 6))


function numberEco(number = Math.random()){
	return number;
}
console.log('Eco número: ', numberEco());

