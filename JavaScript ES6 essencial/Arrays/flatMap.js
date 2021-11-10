/*
	O método flatMap recebe uma callback.
	Ele é uma mistura do método map e flat.
	Primeiro ele mapeia seu array, depois aplica o flat com depth 1.

	retorno: um array com os elementos resultantes da callback passados pelo flat(1).
*/


let numeros = [1, 5, 9, 22];


console.log('********** EXEMPLO 1 **********');

let resultado = numeros.flatMap( (numero) => {
	return numero;
});

console.log(resultado);


console.log('\n********** EXEMPLO 2 **********');

resultado = numeros.flatMap( (numero) => {
	return [numero];
});

console.log(resultado);


console.log('\n********** EXEMPLO 3 **********');

resultado = numeros.flatMap( (numero) => {
	return [[numero]];
});

console.log(resultado);
