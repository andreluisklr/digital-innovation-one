/*
	array.filter(callback);

	Callback deve retornar um booleano.
*/


console.log('********** EXEMPLO 1 **********\n');

let clientes = [
	{
		nome: 'Mariano da Costa',
		pontos: -50
	},
	{
		nome: 'Rosinha da Silva',
		pontos: 120
	},
	{
		nome: 'Lurdes de Matos Santos',
		pontos: 90
	},
	{
		nome: 'Severino Caloteiro de Souza',
		pontos: -100
	}
]

//Vamos filtrar os melhores clientes e os piores clientes.
//Acima de 0 é bom, abaixo de 0 ruim.

let melhoresClientes = clientes.filter( (cliente) => {
	return cliente.pontos > 0;
});

let pioresClientes = clientes.filter( (cliente) => {
	return cliente.pontos < 0;
});

console.log('Melhores Clientes: ', melhoresClientes);

console.log('\nPiores Clientes: ', pioresClientes);


console.log('\n********** EXEMPLO 2 **********\n');

//Vamos filtrar os numeros negativos e positivos.

let numerosInteiros = [-100, 500, -22, 3, 8, 9, -400];

/*
	Arrow function encurtada, um parâmetro não precisa de parênteses,
	uma linha de código não precisa de return.
*/

let positivos = numerosInteiros.filter(numero => numero > 0)
let negativos = numerosInteiros.filter(numero => numero < 0)

console.log('Positivos: ', positivos);
console.log('Negativos: ', negativos);


console.log('\n********** EXEMPLO 3 **********\n');

//Vamos filtrar palavras que tem 5 ou mais letras.

let palavras = ['Leão', 'Girafa', 'Camelo', 'Elefante', 'Sol', 'Ganso'];

let palavrasCom5OuMaisLetras = palavras.filter( palavra => palavra.length >= 5);

console.log(palavrasCom5OuMaisLetras);




