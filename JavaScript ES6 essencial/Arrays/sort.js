/*
	O método sort() ordena arrays,
	recebe uma callback que recebe dois elementos.
		
	retorno: é o próprio array ordenado.
		
	Obs: a ordenação padrão é de acordo com o código unicode.
*/		

let array = [1, 10, 40, 2, 2, 4, 3];

console.log('********** EXEMPLO 1 **********');

//ele ordena corretamente alguns, não todos.
array.sort();
console.log('Padrão: ', array);


//ordenando em ordem crescente
array.sort( (item1, item2) => {
	return item1 - item2; 
});
console.log('Ordem Crescente: ', array);


//ordenando em ordem decrescente
array.sort( (item1, item2) => {
	return item2 - item1; 
});
console.log('Ordem Decrescente: ', array);

/*
	Veja que para ordenar basta subtrair,
	se é crescente ou decrescente você define
	pela ordem da subtração.

	São três resultados possíveis(item - item):
		resultado = 0,
		resultado > 0,
		resultado < 0.

	Se for 0 a posição dos dois elementos não mudam.
	Se for > 0 o item1 é colocado depois do item2.
	Se for < 0 o item1 é colocado antes do item2.
*/


console.log('\n********** EXEMPLO 2 **********\n');

let letras = ['c', 'a', 'b', 'd', 'E', 'A'];

//As maiúsculas não são ordenadas em relação as minúsculas
letras.sort();
console.log(letras);

/*
	Vamos resolver isso passando todas para lower case.
	Para isso vamos passar a função de callback.
*/

letras.sort((a, b) => {
	a = a.toLowerCase();
	b = b.toLowerCase();

	if (a > b)  return  1;
	if (a < b)  return -1;

	return 0;

});

console.log('\n', letras);

//obs: ver método String.prototype.localeCompare().





