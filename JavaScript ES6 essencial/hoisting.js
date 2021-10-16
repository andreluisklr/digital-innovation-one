/*
Hoisting significa içamento/elevação, isso é um comportamento do javascript,
o javascript eleva ao topo do escopo as declarações de variáveis e funções. 

Acredito que os dois casos mais notórios é o hoisting das declarações das variáveis
com a palavra chave 'var' e das 'Declarações de funções'.

Irei mostrar um exemplo desses dois casos.
*/


//No console você irá ver undefined, por quê?
//o javascript fez isto com nosso código, veja abaixo:

/*
var minhaVariavel = undefined;

console.log(minhaVariavel); 

minhaVariavel = 'aqui estou declarando e atribuindo valor';
*/



console.log(minhaVariavel); 

var minhaVariavel = 'aqui estou declarando e atribuindo valor';




//isso acontece também com funções decladas desta forma:
minhaFuncao();

function minhaFuncao(){
	console.log('eu consigo executar esta função antes da sua declaração');
}


