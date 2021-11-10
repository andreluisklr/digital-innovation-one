/*
	O método flat recebe um inteiro
    que define a profundidade dos arrays aninhados.

	Ele retorna um novo array, com os arrays aninhados concatenados.

	Se não especificar um valor como argumento para a profundidade,
	o padrão será 1.

	depth = profundidade.
*/

console.log('********** EXEMPLO 1 **********');

let array1 = [1, 2, ['a', 'b', 'c']];

console.log('Antes: \n', array1 );
console.log('Depois(depth 1): \n', array1.flat() );


console.log('\n********** EXEMPLO 2 **********');

let array2 = [[10, 20, ['ba', 'be', 'bi']], 30, 40];

console.log('Antes: \n', array2 );
console.log('Depois(flat depth 1): \n', array2.flat() );
console.log('Depois(flat depth 2): \n', array2.flat(2) );
