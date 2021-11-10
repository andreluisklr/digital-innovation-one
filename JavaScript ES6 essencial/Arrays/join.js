/*
	O método join junta os elementos de um array
 	em uma string e retorna essa string.

	Se você chamar o join sem um argumento,
	ele irá juntar os elementos separando-os 
	com vírgula.

	Se você chamar o método passando 
	uma string vazia, os elementos serão
	juntados sem nenhum separador, ficarão
	todos 'colados'.
*/


let array = [2, 3, 5];

console.log( array.join() );

console.log( array.join('') );

console.log( array.join('-') );



