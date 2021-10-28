//Isto é um objeto:

let umObjetoQualquer = {};  // vazio

/*
	Objetos contém propriedades e métodos.
	As funções dentro de um objeto são denominadas 'métodos'.
*/

//VAMOS VER ALGUMAS MANEIRAS DE CRIAR OBJETOS: 

//Objetos representando pessoas:

console.log('\n\n***EXEMPLO 1***')
let pessoa1 = {
	nome: 'Maria',
	idade: 66,
	digaola: function(){
		return 'Olá do(a) ' + this.nome;
	}
}

let pessoa2 = {
	nome: 'José',
	idade: 73,
	digaola: function(){
		return 'Olá do(a) ' + this.nome;
	}
}

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa1.digaola())
console.log(pessoa2.digaola())


//-----------------------------------------------

console.log('\n\n***EXEMPLO 2***')

//'Pessoa' é um modelo, a partir dele vamos criar nossas instancias/filhos.
function Pessoa(nome, idade){
	//this = instancia que está sendo criada.
	this.nome = nome;
	this.idade = idade;
}

//Criando um método que será compartilhado com as instacias/filhos.

/*
	Esta forma de declarar a função/método 'digaOla' é diferente do exemplo 1, 
	no exemplo 1 temos uma cópia em cada instancia, neste exemplo(2),
	temos uma função que é compartilhada por herança com todas as instacias.
*/

//Oque estiver dentro do objeto prototype será compartilhado com as instancias.
Pessoa.prototype.digaOla = function(){
		return 'Olá do(a) ' + this.nome;
}

let pessoa3 = new Pessoa('Joana', 45);
let pessoa4 = new Pessoa('Joãozinho', 86);


console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa3.digaOla())
console.log(pessoa4.digaOla())

//-----------------------------------------------

console.log('\n\n***EXEMPLO 3***')

//Utilizando açucar sintático ES6 - class
//Como Pessoa já está declarada vou criar outra classe/modelo, seguindo mesmo raciocínio...

class Animal{
	constructor(nome, duracaoVida, velocidade){
		this.nome = nome;
		this.duracaoVida = duracaoVida;
		this.velocidade =  velocidade;
	}

	imprimirNomeIdade(){
		return console.log(
					'\n\nNome: ' + this.nome + '\n' +
					'Duração de Vida: ' + this.duracaoVida  + '\n' +
				    'Velocidade: ' + this.velocidade + '\n\n'
				);
	}
}

let animal1 = new Animal('Leão', '10 – 15 anos', '80 km/h (máxima, em rajadas curtas)')
let animal2 = new Animal('Cachorro', '10 – 13 anos', 'pastor alemão : 48 km/h, galgo : 72 km/h')

console.log(animal1)
console.log(animal2)
animal1.imprimirNomeIdade();
animal2.imprimirNomeIdade();


//É só rodar pelo node ou incluir esse script em uma página html e ver no console