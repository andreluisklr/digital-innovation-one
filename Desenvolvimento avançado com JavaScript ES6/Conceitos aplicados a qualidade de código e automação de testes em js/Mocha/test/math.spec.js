/*
	Mocha + Chai + Sinon
*/

const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Math class', function() {
	it('Sum two numbers', function(done) {
		const math = new Math();
		this.timeout(5000);

		math.sum(5, 5, value => {
			//assert.equal(value, 10);
			expect(value).to.equal(10);
			done();
		});
	});

	it('Multiply two numbers', function(){
		const math = new Math();

		//assert.equal(math.multiply(5, 5), 25);
		expect(math.multiply(5, 5)).to.equal(25);
	});

	it('Calls req with sum and index values', function(){
		const req = {};
		const res = {
			load: sinon.spy()
		};
		const math = new Math();
		
		math.printSum(req, res, 5, 5);
		
		expect(res.load.args[0][0]).to.equal('index');
	})
});
