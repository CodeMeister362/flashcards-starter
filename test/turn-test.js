const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe ('Turn', () => {

	beforeEach(() => {
		card = new Card()
		turn0 = new Turn()
		turn1 = new Turn('guess', card)

	})

	it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

	it('should be an instance of Turn', () => {
		expect(turn0).to.be.an.instanceOf(Turn)
	})

	it('should have two arguments - a string and an object', () => {
		expect(turn1.guess).to.be.a('string')
		expect(turn1.card).to.be.an('object')
	})

	it('should have a method that returns the guess', () => {

		turn1.returnGuess()

		expect(turn1.guess).to.be.a('string')
	})

	it('should have a method that returns the Card object', () => {

		turn1.returnCard()

		expect(turn1.card).to.be.an('object')
	})
})