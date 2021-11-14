/*
	Literais de objeto aprimorados.
*/

console.log('********** EXEMPLO 1 **********');

function digaOla(){
	return 'Olá';
}
let genero = 'masculino';

let pessoa = {
	nome: 'João',
	genero,
	digaOla
}
console.log(pessoa);


console.log('\n********** EXEMPLO 2 **********');

let calculadora = {
	somar(numero1, numero2){
		return numero1 + numero2;
	},

	subtrair(numero1, numero2){
		return numero1 - numero2;
	}
}
console.log('calculadora: ', calculadora.somar(5, 5));


console.log('\n********** EXEMPLO 3 **********');

let nomePropriedade = 'idade';

let animal = {
	nome: 'Cachorro',
	[nomePropriedade + '_animal'] : '5 anos'
}
console.log(animal);




