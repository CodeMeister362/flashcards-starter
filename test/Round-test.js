const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')
const Round = require('../src/Round')

describe('Round', () => {

	beforeEach(() => {
		card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
		card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
		card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap')
		deck = new Deck([card1, card2, card3])
		round = new Round(deck)
	})

	it('should return current card', () => {
		expect(round.returnCurrentCard()).to.deep.equal({ 
			id: 1,
			question: 'What is Robbie\'s favorite animal',
			answers: ['sea otter', 'pug', 'capybara'],
			correctAnswer: 'sea otter'
		})
	})

	it('should count turns', () => {
		expect(round.turns).to.equal(0)
	})

	it('should store incorrect guesses', () => {
		expect(round.incorrectGuesses).to.deep.equal([])
	})

	it('should create a current turn property', () => {
		expect(round.currentTurn).to.equal(null)
	})

	it('should update current turn, turns and display correct or incorrect answer', () => {
		expect(round.takeTurn('sea otter', card1)).to.equal('correct!')
		expect(round.currentTurn).to.an.instanceOf(Turn)
		expect(round.takeTurn('spleen', card2)).to.equal('incorrect!')
		expect(round.turns).to.equal(2)
		expect(round.incorrectGuesses).to.deep.equal([14])
	})
	
	it('should return current card', () => {
		expect(round.returnCurrentCard()).to.equal({ 
			id: 12,
			question: 'What is Travis\'s favorite stress reliever?',
			answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
			correctAnswer: 'playing with bubble wrap'
		})
	})
})