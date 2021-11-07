/*
	O findIndex é praticamente o find, 
	a principal diferença é que ele retorna o índice
	que satisfaz uma condição ao invés do valor em si.

	Se nada satisfazer a condição -1 é retornado.
*/

//Todos os exemplos terão como base este array:
let valores = [55, 100, 'a', 'maria', 222, 44, 300];


console.log('********** EXEMPLO 1 **********');

//Encontrar o índice do primeiro valor maior que 100.

let indexDoValorMaiorQue100 = valores.findIndex( (valor, index, array) => {
		return valor > 100;
});

console.log('Índice do primeiro valor maior que 100: ', indexDoValorMaiorQue100, '\n');


console.log('********** EXEMPLO 2 **********');

//Econtrar o índice da primeira string.

let primeiraStringDoArray = valores.findIndex( (valor, index, array) => {
	return typeof valor == 'string';
});

console.log('Índice da primeira string: ', primeiraStringDoArray, '\n');


console.log('********** EXEMPLO 3 **********');

//Index do primeiro número par que parece no Array

let indexDoPrimeiroNumeroPar = valores.findIndex( (valor, index, array) => {
	return valor % 2 == 0;
});

console.log('Índice do primeiro número par: ', indexDoPrimeiroNumeroPar, '\n');
