/*
	O método reduce() recebe uma callback como primeiro argumento,	
	e como segundo argumento o valor inicial do primeiro argumento(acumulador) da callback.
	
	O segundo argumento é opcional.
*/



let inteiros = [50, 20, 100, 2, 5, 5];


/*
	Se não fornecer o segundo argumento para o método reduce(),
	o acumulador irá começar com o primeiro item do array e o valorAtual
	irá começar com o segundo item do array.

	É importante retornar um valor para que seja colocado no acumulador.
*/

console.log('********** EXEMPLO 1 **********\n');
console.log('Se não retornar, o resultado é este: ')

let result = inteiros.reduce( (acumulador, valorAtual, index, array) => {
	console.log('acumulador: ', acumulador, 'valorAtual: ',valorAtual);
});

console.log('result: ', result);


console.log('\n********** EXEMPLO 2 **********\n');

console.log('Retornando, o resultado é este: ')

result = inteiros.reduce( (acumulador, valorAtual, index, array) => {
	console.log('acumulador: ', acumulador, 'valorAtual: ',valorAtual);
	return valorAtual;
});

console.log(result);


console.log('\n********** EXEMPLO 3 **********\n');

console.log('Somando os números do array')
//Vamos colocar um valor inicial 0 para o acumulador.
//Então o valorInicial é o primeiro item do array.
//Podemos somar os números

result = inteiros.reduce( (acumulador, valorAtual) => {
	//log para ver oque está acontecendo.
	console.log(acumulador,'+',valorAtual)
	return acumulador+valorAtual;
}, 0);

console.log('resultado: ', result);




