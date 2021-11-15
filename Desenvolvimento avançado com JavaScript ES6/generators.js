/*
	Generators
*/

console.log('********** EXEMPLO 1 **********');

function* func(valor){
	console.log('Generator');
	yield 100
	
	yield 200
}

let gen = func();

console.log(func)
console.log(gen,'\n');

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


console.log('\n********** EXEMPLO 2 **********');

function* loop(valor){
	for(let i = 1; i <= valor;i++){
		yield i
	}
}

const gene = loop(5);

console.log(gene.next())
console.log(gene.next())
console.log(gene.next())
console.log(gene.next())
console.log(gene.next())
console.log(gene.next())



console.log('\n********** EXEMPLO 3 **********');

const objeto = {
	values: [200, 300, 400, 700],
	*[Symbol.iterator](){
		for(let i = 0; i < this.values.length; i++){
			yield this.values[i]
		}
	}
}

let iterar = objeto[Symbol.iterator]();
console.log(iterar.next())
console.log(iterar.next())
console.log(iterar.next())
console.log(iterar.next())
console.log(iterar.next())




