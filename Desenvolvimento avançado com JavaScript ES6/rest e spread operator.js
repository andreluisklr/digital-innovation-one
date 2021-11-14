/*
	Rest operator.
*/

console.log('********** Rest Operator **********');

function somarSemRest(){
	let resultado = 0;

	for(let i = 0; i < arguments.length; i++){
		resultado += arguments[i];
	}
	
	console.log(arguments);
	return resultado;
}
console.log(somarSemRest(1,2,3), '\n');


function somarComRest(...rest){
	console.log(rest);		
	return rest.reduce( (acc, value) => acc+value, 0);
}
console.log(somarComRest(1, 2 ,3));



/*
	Spread operator.

	Mais exemplos no javaScript ES6 essencial.
*/

console.log('\n********** Spread Operator **********');

let string = 'Olá Mundo!';
let spread = [...string];
console.log(spread);


let array1 = ['a', 'b', 'c'];
let array2 = [...array1, 'd', 'e', 'f'];
console.log(array2)




