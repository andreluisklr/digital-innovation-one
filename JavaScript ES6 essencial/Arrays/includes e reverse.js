/*
	Método includes: Verifica se determinado dado existe no array,
	você pode passar como segundo parâmetro o index para começar a busca.
	
	Método reverse:  Inverte os items do array. 
*/

let numeros = [1, 2, 3, 4, 5];


console.log('********** EXEMPLO 1 **********');
//INCLUDES

let retorno = numeros.includes(1);
console.log(retorno);

retorno = numeros.includes(10);
console.log(retorno);


console.log('********** EXEMPLO 2 **********');
//REVERSE

let invertido = numeros.reverse();
console.log(invertido);

console.log( ['a', 'b', 'c'].reverse() )

