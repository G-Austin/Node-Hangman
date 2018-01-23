var wordsArray = require('./wordsArray.js');
var Word = require('./Word.js');

function Game() {
	var self = this;
	console.log("self", self);

	this.play = function() {
		this.guessCount = 10;
	};

	this.grabWord = function() { 
		var selectedWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
		console.log("selectedWord", selectedWord);
		this.currentWord = new Word(selectedWord);
	};
	

}
var game = new Game();
game.play();
game.grabWord();