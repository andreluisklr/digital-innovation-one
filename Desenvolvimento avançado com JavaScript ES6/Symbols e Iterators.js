/*
	Symbol e iterator.
*/

console.log('********** EXEMPLO 1 **********')

let simbolo = Symbol('meu Simbolo');

let objeto = {
	[simbolo]: 55,
	outraProp: 'prop'
}

console.log(simbolo);
console.log(objeto);
console.log(objeto.simbolo)
console.log(objeto[simbolo]);


console.log('\n********** EXEMPLO 2 **********')

let iterator = {
	values: [1, 10, 20, 30,'a'],
	[Symbol.iterator](){
		let i = -1;

		return {
			next: () => {
				i++;
				return {value: this.values[i], done: i == this.values.length}
			} 
		}
	}
};

console.log('for of: ')
for(let value of iterator){
	console.log(value);
}


console.log('\nspread operator: ')
console.log(...iterator)












