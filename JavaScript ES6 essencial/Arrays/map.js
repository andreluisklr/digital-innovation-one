/*
	-map é um método de array que recebe uma função de callback como argumento,
	nessa função é disponibilizado o valor, índice e o próprio array, essa função é executada 
	para cada item/valor do array.
	-o retorno é um novo array do mesmo tamanho do original.
	-você precisa retornar um valor
*/

console.log('\n****** EXEMPLO 1 ******\n')

//Vamos pegar o valor e adicionar 1, é importante retornar;

let numeros = [44, 100, 55, 1, 39, 0];

let resultado = numeros.map(function(valor, indice, array){
	return valor+1;
})

console.log('Original: ', numeros, '\nMap: ', resultado)


console.log('\n\n****** EXEMPLO 2 ******\n')

/*
Temos um array de objetos que representam pessoas,
vamos extrair somente os nomes das pessoas.
*/

let pessoas = [
	{
		nome: 'Maria da Graça',
		idade: 54
	},
	{
		nome: 'José da Silva',
		idade: 73
	},
	{
		nome: 'Joana Mendonça',
		idade: 26
	}
]

let nomes = pessoas.map(function(valor, indice, array){
	return valor.nome;
})

console.log('Nomes: ', nomes);


console.log('\n\n****** EXEMPLO 3 ******\n')

/*
	Temos alguns usuários, mas a estrutura não está legal,
	vamos criar um array de objetos a partir deste array de arrays:
*/

let usuarios = [
	[
		['usuario', 'Joanzinho'],
		['senha',   '123456']
	],
	[
		['usuario', 'Mariazinha'],
		['senha',   'mariazinha123']
	],
	[
		['usuario', 'Jubileu'],
		['senha',   '2021renatinhateamo']
	]
]

let usuariosMap = usuarios.map(function(valor, indice, array){
	return {
		usuario: valor[0][1],
		senha: valor[1][1]
	}
})

console.log('Original: ',usuarios, '\n')
console.log('Map: ', usuariosMap)