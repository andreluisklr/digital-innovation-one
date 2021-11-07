/*
	O método find de Array, irá retornar o valor do primeiro item
 	que satisfazer a condição da função de callback.
*/


console.log('********** EXEMPLO 1 **********');

/*
	Temos um array de números.
	Eu quero o primeiro número que é maior que 7.
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let resultado = numeros.find( function(numero, index, array){
	/*
		numero é maior que 7?
		Irá retornar false ou true.	
	*/

	return numero > 7;
});

console.log(resultado);


console.log('********** EXEMPLO 2 **********');

/*
	Temos um array com letras e números.
	Quero o primeiro número que for encontrado.
*/

let numerosLetras = ['a', 'b', 'c', 5, 'd', 10];

let numero = numerosLetras.find( function(numero, index, array){
	return typeof numero == 'number';
})

console.log(numero);


console.log('********** EXEMPLO 3 **********');

/*
	Temos um array com alguns alunos,
	cada aluno possui uma nota geral.

	Vamos saber se existe pelo menos um aluno com nota 100.

	Para cada aluno ele executará a função de callback,
	verificando se a nota do aluno é igual a 100.

	O primeiro aluno que tiver nota 100 é retornado.
*/

let alunos = [
	{
		nome: 'João',
		nota: 78
	},
	{
		nome: 'Karina',
		nota: 87
	},
	{
		nome: 'Maria',
		nota: 100
	}
]

let alunoNota100 = alunos.find(function(aluno, index, array){
	return aluno.nota == 100;
})

if(alunoNota100){
	console.log('Há pelo menos um aluno nota 100: ');
	console.log(alunoNota100);
}else{
	console.log('Não há aluno nota 100');
}




