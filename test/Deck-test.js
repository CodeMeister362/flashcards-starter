const chai = require('chai');
const expect = chai.expect;
const Turn = require('../src/Turn')
const Card = require('../src/Card')
const Deck = require('../src/Deck')

describe('Deck', () => {

	beforeEach(() => {
		card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter')
		card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder')
		card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald')
		deck = new Deck([card1, card2, card3])
	})

	it('should count the cards in the deck', () => {
		expect(deck.countCards()).to.equal(3)
	})
})