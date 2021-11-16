/*
	Callback e Promise.
*/

//********** CALLBACK **********
function transformarTexto(string){
	function caixaAlta(callback){
		setTimeout(() => {
			callback(string.toUpperCase());
		}, 3000)
	}

	caixaAlta((output) => {
		console.log('********** EXEMPLO 1: Callback **********')
		console.log(output)	
	});
}

transformarTexto('Maria da Silva!');


//********** PROMISE **********
function espacarTexto(string){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let output = [...string].join(' ');
			resolve(output);
		}, 3000)		
	})
}

espacarTexto('olá galera!!')
	.then((result) => {
		console.log('\n********** EXEMPLO 2: Promise **********');
		console.log(result)
	});



