//Exemplo simples sem currying.
//Função recebe dois numeros, e retorna a multiplicação.

/*
function multiplique(numero1, numero2){
	return numero1 * numero2;
}

console.log('2x2', multiplique(2, 2))
*/


/*Com currying, a função recebe um numero e retorna outra função
para receber o próximo numero, que enfim retorna a multiplicação*/

/*
OBS: Aqui temos outros conceitos em ação, por exemplo, closure e funções de primeira classe.

-funções podem ser atribuídas a variáveis, constantes, retornadas por outras funções.
-a função anônima retornada faz um fechamento/closure do escopo externo,
 registrando assim o parâmetro 'numero1'.
*/

function multiplique(numero1){
	return function(numero2){
		return numero1*numero2;
	}
}

//Uma forma de utilizar a função
console.log('2x2',multiplique(2)(2))
console.log('10x2',multiplique(10)(2))


console.log('----------------------------------------')

//Outra forma
const multiplique2Por = multiplique(2);
const multiplique10Por = multiplique(10);

console.log('2x5',multiplique2Por(5))
console.log('2x100',multiplique2Por(100))

console.log('10x5',multiplique10Por(5))
console.log('10x100',multiplique10Por(100))



/*
Curryng é quando você retorna uma função para cada parâmetro da função,
ou seja, cada função irá receber somente um argumento.
*/

