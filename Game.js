var wordsArray = require('./wordsArray.js');
var Word = require('./Word.js');
var inquirer = require('inquirer');
var prompt = require('prompt')


function Game() {
	var self = this;
	//console.log("self", self);

	this.play = function() {
		this.guessCount = 10;
	};

	this.grabWord = function() { 
		var selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
		console.log("selectedWord", selectedWord);
		// this.currentWord = new Word(selectedWord);
		return new Word(selectedWord)
	};

	this.guessLetter = function() {
		console.log("game.guessLetter is running")	
		// if (game.play.guessCount > 0) {
			// console.log("Guess A Letter");
			inquirer.prompt([
			{
				name: "userGuess",
				type: "input",
				message: "Guess A Letter"
			}

			])
			.then(function(inquirerResponse) {
				if (inquirerResponse.userGuess === this.grabWord()) {//a letter in the word)
					console.log('inquirerResponse',inquirerResponse)
			}
			})

		console.log('input', type.input);
		// }
	} 
}
var game = new Game();
game.play();
game.grabWord();
game.guessLetter(); 
