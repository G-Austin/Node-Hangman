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
	this.wordFound = false;
  //get letters and push to letterArray
	this.getLetters = function() {
	    //populate the collection above with new Letter objects
	    for(var i = 0; i < this.word.length; i++){
	      var newLetter = new Letter(this.word[i]);
	      this.letterArray.push(newLetter);
    	}
	};

	this.checkWord = function() {
		if (this.letterArray.every(function(inquirerResponse) {
			return inquirerResponse.appear === true;
		})) {
			this.wordFound = true;
				return true;
		}
	};

	this.checkGuessedLetter = function (guessedLetter) {
		var whatToReturn = 0

		this.letterArray.forEach(function(abc) {
			if (abc.letter === guessedLetter) {
				abc.appear = true;
				whatToReturn++
			}
		})
		//if guessLetter matches Letter the letter should be shown
		return whatToReturn;
	}

	this.renderWord = function() {
		var display = '';

		this.letterArray.forEach(function(abc) {
			var currentLetter = abc.letterRender();
			display += currentLetter
		})
		return display
	}
}

module.exports = Word;
