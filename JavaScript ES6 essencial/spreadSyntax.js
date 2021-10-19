//Algumas possibilidades de uso do spread operador.
console.log('\njuntar dados de arrays: ');
let array1 = [10, 20 ,30];
let array2 = [400, 500, 900];

let juntar = [...array1, ...array2];

console.log(juntar);

//----------------------------------------
console.log('\ncriar um array de letras: ');
let meuTexto = "Maria";

let arrayDeLetras = [...meuTexto];

console.log(arrayDeLetras);

//----------------------------------------
console.log('\nCopiar dados de um objeto: ')

let pessoa = {
	nome: 'joãozinho',
	idade: 72,
	gostos: [
		'carpir',
		'dançar forró'
	]
}

let copia = {...pessoa};

console.log(copia)

//----------------------------------------