/*
forEach é um método de arrays, ele recebe 
uma função de callback como argumento,
para cada item ele executa essa função.

Na função de callback, será disponibilizado
o valor do índice, o índice e o array respectivamente.
*/ 

let nossoArray = ['Dona Maria', 999, 12, 'Joana'];

console.log('\n***** EXEMPLO 1 *****\n')

//Exibindo os valores, índices e o array.

nossoArray.forEach(function(valor, indice, array){
	console.log('------------------------------------');
	console.log('valor: ',  valor);
	console.log('índice: ', indice);
	console.log(array);
	console.log('------------------------------------\n\n');
})

console.log('\n***** EXEMPLO 2 *****\n')

//Vamos copiar as strings para um array, e os numeros para outro.

let numeros = [];
let strings = [];

nossoArray.forEach(function(valor, indice, array){
	if(typeof valor == 'number') numeros.push(valor);
	if(typeof valor == 'string') strings.push(valor);
});

console.log(numeros);
console.log(strings);
console.log('\nnão modificamos nosso array:')
console.log(nossoArray)


console.log('\n\n***** EXEMPLO 3 *****\n')

//Vou criar outro array:
let nossosNumeros = [55,0, -1, 100,-3, 0, -90, 80, 0]

let positivos = [];
let negativos = [];
let neutros = [];

/*
Vamos copiar os positivos,os negativos e os neutros
para os arrays correspondentes.
*/

nossosNumeros.forEach(function(valor, indice, array){
	if( valor > 0 )  positivos.push(valor);
	if( valor < 0 )  negativos.push(valor);
	if( valor == 0 ) neutros.push(valor);
})

console.log('positivos: ', positivos, 'Qtd: ', positivos.length);
console.log('negativos: ', negativos, 'Qtd: ', negativos.length);
console.log('neutros: ', neutros, 'Qtd: ', neutros.length);
console.log('\narray original: ', nossosNumeros)










