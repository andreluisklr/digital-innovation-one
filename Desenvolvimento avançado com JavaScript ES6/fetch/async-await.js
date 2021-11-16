async function request(){
	let response = await fetch('https://jsonplaceholder.typicode.com/todos/1'); 
	let data 	 = await response.json();

	return data;
}

request()
	.then((data) => {
		console.log(data);	
	})
	.catch((error) => {
		console.log(error)
	});
