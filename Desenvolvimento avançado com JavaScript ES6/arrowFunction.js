/*
	Arrow function:

	-Se 1 parâmetro e nada mais,  pode omitir os parênteses.
	-Se uma expressão/linha de código, pode omitir o return.
	-Não pode ser usada como função construtora.
	-Não sofre hoisting.
*/

let somar = (numero1, numero2) => {
	return numero1 + numero2;
}
console.log('2 + 2 = ', somar(2, 2));


somar = (numero1, numero2) => numero1 + numero2;
console.log('5 + 10 = ', somar(5, 10))


let eco = string => string;
console.log(eco('Maria da Silva'));

