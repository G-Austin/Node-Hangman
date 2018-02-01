var wordsArray = require('./wordsArray.js');
var Word = require('./Word.js');
var inquirer = require('inquirer');
var prompt = require('prompt')
var isLetter = require('is-letter')


// var letter
var guessedLetters = [];
var currentWord

function startGame() {
	console.log("===========================");
	console.log("Let's play Hangman!");

	inquirer.prompt([
		{
			name: 'play',
			type: 'confirm',
			message: 'Ready to play?'
		}
		]).then(function(answer) {
			console.log('=======================');
			if (answer.play) {
				console.log("Let's get started! You have 10 chances.")
				playGame();
			} else {
				console.log("Why are you even here then!?")
			}
		})
}

function playGame() {
	guessCount = 10
	guessedLetters = [];
	currentWord = new Word(wordsArray[Math.floor(Math.random() * wordsArray.length)]);	
	console.log('currentWord', currentWord);
	
	guessLetter();

};


function guessLetter() {
	console.log("guessLetter is running")	
	// if (game.play.guessCount > 0) {
	// console.log("Guess A Letter");
	inquirer.prompt([
		{
			name: "userGuess",
			type: "input",
			message: "Guess A Letter",
			validate: function(value) {
				if(isLetter(value)) {
					return true;
				} else {
					return false;
				}
			}
		}

		])
		.then(function(abc) {
			console.log('.then function is running');
			var letterReturned = (abc.userGuess).toLowerCase();
			var alreadyGuessed = false;
			for (var i = 0; i < guessedLetters.length; i++) {
				if(letterReturned === guessedLetters[i]) { 
					alreadyGuessed = true
				}
			}

			if (alreadyGuessed === false) {
				guessedLetters.push(letterReturned);
				var found = currentWord.checkGuessedLetter(letterReturned);
				console.log('==============================');
				if (found === 0) {
					guessCount--
					console.log("That's not a letter in the word ");
					console.log(currentWord.renderWord());
					console.log('Letters guessed: ', + guessedLetters);
					console.log('Guesses remaining: ', guessCount);
				} else {
					console.log("Correct!");
					if (currentWord.checkWord() === true) {
						console.log(currentWord.renderWord());
						console.log("You guessed: " + guessedLetters);
						console.log("Nice work! You win!");
						startGame();
					} else {
						console.log(currentWord.renderWord());
						console.log('Letters guessed: ' + guessedLetters);
						console.log('Incorrect guesses remaining: ' + guessCount)
					}
				}					
				
				if (guessCount > 0 && currentWord.wordFound === false) {
	                guessLetter();
	            } else if (guessCount === 0) {
	// if no more guesses, you lose           
	                console.log('The word you were trying to guess was: ' + currentWord.word)
	                console.log('\nSORRY.  TRY AGAIN...\n')
	                startGame()             
	            }
        	} else { 
// if previously guessed letter, promptUser()
            console.log("You've guessed that letter already, try again.")
            guessLetter();
        	}
		});

}; 
startGame();
