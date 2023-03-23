const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn')
const Card = require('../src/Card')

describe ('Turn', () => {

	beforeEach(() => {
		 card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
		 turn = new Turn('pug', card);
	})

	it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

	it('should be an instance of Turn', () => {
		expect(turn).to.be.an.instanceOf(Turn)
	})

	it('should return the users guess', () => {
		turn.returnGuess()
		expect(turn.guess).to.equal('pug')
	})

	it('should return the card', () => {
		turn.returnCard()
		expect(turn.card).to.deep.equal({ 
			id: 1,
		  question: 'What is Robbie\'s favorite animal',
		  answers: ['sea otter', 'pug', 'capybara'],
		  correctAnswer: 'sea otter'
		})
	})

	it('should evaluate guesses to false or true', () => {
		expect(turn.evaluateGuess()).to.equal(false)
	})

	it('should say if guess was correct or incorrect', () => {
		expect(turn.giveFeedback()).to.equal('incorrect!')
	})
})