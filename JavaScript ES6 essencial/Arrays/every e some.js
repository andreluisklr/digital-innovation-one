/*
	Estes são os dois métodos que vamos ver:
	every(), some().	

	every e some recebem uma callback,
	que é executada para cada item do array.	

	O retorno da callback deve ser um booleano(false/true).
	 
	O retorno de every e some é um booleano.
*/

//Exemplos baseados neste array:
let alunos = [
	{
		nome: 'Maria',
		nota: 100
	},
	{
		nome: 'José',
		nota: 78
	},
	{
		nome: 'Joana',
		nota: 84
	}
]

console.log('********** EXEMPLO 1 **********');

/*
	Temos alguns alunos, vamos ver ser algum deles
	possui nota 100.
*/

let algumAlunoNota100 = alunos.some( (aluno) => {
	return aluno.nota == 100;
});

console.log('Temos alunos nota 100?', algumAlunoNota100 ? 'SIM':'NÃO');


console.log('\n********** EXEMPLO 2 **********');

/*
	Foi combinado que se todos os alunos tivessem nota superior ou igual a 60,
	eles poderiam ir ao passeio semanal.

	Vamos vericar com o método every.
*/

let todosAcimaDaMedia = alunos.every( (aluno) => {
	return aluno.nota >= 60; 
}); 

console.log('Eles irão para o passeio? ', todosAcimaDaMedia ? 'SIM': 'NÃO');




