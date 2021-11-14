/*
	Destructuring.
*/

console.log('********** EXEMPLO 1 **********');

let numeros = [10, 50, 1000];

let [dez, cinquenta, mil] = numeros;

console.log(dez);
console.log(cinquenta);
console.log(mil);


console.log('\n********** EXEMPLO 2 **********');

let letras = ['aaaa', 'bbbb', 'cccc'];

let [a, b, c, d] = letras;
console.log(a, b, c, d);


console.log('\n********** EXEMPLO 3 **********');

let objeto = {
	nome: 'Maria',
	idade: 78
}

//O nome da variável deve corresponder um nome de propriedade
let {nome} = objeto;
console.log(nome)

//definir nome diferente
let {idade: outroNomeDeVariavel} = objeto;
console.log(outroNomeDeVariavel);


console.log('\n********** EXEMPLO 4 **********');

//Multi níveis

let obj = {
	array: [500]
}

let {array: [numero]} = obj;

console.log(numero);


console.log('\n********** EXEMPLO 5 **********');

//Destructuring com argumentos padrão.

let numbers = [50, 100];

function somar([a, b] = [0, 0]){
	return a + b;
}

console.log( somar(numbers) )







