const Turn = require('./Turn')

class Round {
	constructor(deck) {
		this.round = deck
		this.turns = 0
		this.incorrectGuesses = []
		this.currentTurn = null
	}
	takeTurn(guess, card) {
		this.currentTurn = new Turn(guess, card)
		this.turns++
		this.currentTurn.evaluateGuess(guess)
		if(this.currentTurn.evaluateGuess(guess) === false) {
			this.incorrectGuesses.push(this.currentTurn.card.id)
			return this.currentTurn.giveFeedback()
		} else {
			return this.currentTurn.giveFeedback()
		}
	}
	returnCurrentCard() {
		return this.round.deck[0]
	}
}

module.exports = Round