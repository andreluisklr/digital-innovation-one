class Math{
	sum(n1, n2, callback){
		setTimeout(() => {
			callback(n1 + n2);
		}, 2000);	
	}

	multiply(n1, n2){
		return n1 * n2;
	}

	printSum(req, res, a, b){
		res.load('index', a + b);
	}
}

module.exports = Math;
