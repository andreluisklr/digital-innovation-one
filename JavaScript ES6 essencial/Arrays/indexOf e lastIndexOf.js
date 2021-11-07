/*
	O método indexOf recebe como primeiro argumento o valor que você deseja procurar,
	você também pode passar como segundo parâmetro o índice para começar a procura.
	O retorno do indexOf é o índice da primeira ocorrência desse valor em um determinado array.

	Se o valor não for encontrado -1 é retornado.
*/


let array = ['Maria', 67, 'João', 89, 'Maria', 10, 67, 'Maria'];


console.log('********** EXEMPLO 1 **********');

console.log('Índice da string João: ', array.indexOf('João') );
console.log('Índice do número 89: ', array.indexOf(89) );
console.log('Índice da string Maria: ', array.indexOf('Maria') );
console.log('valor não encontrado retorna -1: ', array.indexOf(900) )


console.log('\n********** EXEMPLO 2 **********');

/*
	Veja que o método indexOf, retorna o índice da primeira ocorrência.
	
	Nós podemos usar outro método que funciona da mesma maneira,
	a diferença é que ele irá retornar o índice da última ocorrência,	
	se tiver mais de uma.

	O método é este: lastIndexOf().

	Veja que os nomes dos métodos já nos diz oque ele faz.
*/

console.log('Índice da string João: ', array.lastIndexOf('João') );
console.log('Índice do número 89: ', array.lastIndexOf(89) );
console.log('Índice da string Maria: ', array.lastIndexOf('Maria') );

console.log('valor não encontrado retorna -1: ', array.indexOf('Brasil') )






















/*
function encontrar(valor){
	let index = array.indexOf(valor, 4);

 	if(index == -1){
		return 'Nada encontrado!';
	}

	return index;
}
*/
