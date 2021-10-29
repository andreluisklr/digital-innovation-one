/*
Arrays 1:
push, pop, unshift, shift, splice.
*/

//Isto é um array: 

let meuArray = ['Maria', 77]; 

//podemos adicionar items ao final do array:
meuArray.push('um dado qualquer');
console.log('\n push: podemos adicionar items ao final do array:\n', meuArray);

//podemos excluir o último item do array:
meuArray.pop();
console.log('\n pop: podemos excluir o último item do array:\n', meuArray)

//podemos adicionar items no inicio do array:
meuArray.unshift(['a, b, c'], 44);
console.log('\n unshift: adicionar items no inicio do array:\n', meuArray);

//excluindo o primeiro item do array:
meuArray.shift();
console.log('\n shift: excluindo o primeiro item do array:\n', meuArray);


/*
Para excluir ou adicionar em qualquer posição 
usamos o método splice.

splice(índice, quantidadeParaExcluir, ...itemsParaAdicionar)
*/

//vou adicionar a string 'José' depois de 'Maria'
meuArray.splice(2, 0, 'José');
console.log('\n splice: "José" depois de "Maria":\n', meuArray);

//vou excluir o primeiro item
meuArray.splice(0, 1);
console.log('\n splice: excluir o primeiro item:\n', meuArray);

//excluindo o último item
meuArray.splice(-1, 1);
console.log('\n splice: excluindo o último item:\n', meuArray);

//adicionando no final do array
meuArray.splice(meuArray.length, 0, 'Joana', 'Fernando')
console.log('\n splice: adicionando no final do array:\n', meuArray)

