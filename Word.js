//Contains a constructor, Word that depends on the 
//Letter constructor. This is used to create an object 
//representing the current word the user is attempting to guess. 
//That means the constructor should define:

// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

var Letter = require('./Letter.js')

function Word(selectedWord) {
	var self = this;
	this.word = selectedWord;
	this.letterArray = [];
	this.letters = selectedWord.split('');
	// var lettersLength = this.letters.length
	var underscores = []
	for (var i = 0; i < this.letters.length; i++) {
		underscores.push('_ ')
	}
	//console.log('underscores', underscores);
	var blankWord = underscores.join('');
	console.log('blankWord', blankWord);

	this.getLets = function() {
	    //populate the collection above with new Letter objects
	    for(var i = 0; i < this.word.length; i++){
	      var newLetter = new Letter(this.letters[i]);
	      this.letters.push(newLetter);
    	}
	};	

	this.checkWord = function() {
		if (this.letters.every(function(inquirerResponse) {
			return inquirerResponse.appear === true;
		})) {
			this.wordFound = true;
				return true;
		}
	};

	this.checkGuessedLetter = function (guessedLetter) {
		var whatToReturn = 0

		this.letterArray.forEach(function(inquirerResponse) {
			if (inquirerResponse.letterArray === guessedLetter) {
				inquirerResponse.appear = true;
				whatToReturn++
			}
		})

		return whatToReturn;
	}

	this.renderWord = function() {
		var display = '';

		this.letterArray.forEach(function(inquirerResponse) {
			var currentLetter = inquirerResponse.letterRender();
			display += currentLetter
		})
		return display
	}
}	

module.exports = Word;