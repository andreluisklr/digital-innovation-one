class CustomError extends Error{
	constructor({message, data}){
		super(message);
		this.data = data;
	}
}
	
try{
	const name = 'Maria';

	const myError = new CustomError({
		message: 'Custom message on custom error',
		data: {
			type: 'Server error'
		}
	});

	throw myError;
}catch(err){
	console.log('Error: ', err);
}finally{
	console.log('outro log...');
}



