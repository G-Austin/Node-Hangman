function Word(selectedWord) {
	var self = this;
	this.letters = selectedWord.split('')
	// var lettersLength = this.letters.length
	var underscores = []
	for (var i = 0; i < this.letters.length; i++) {
		underscores.push('_ ')
	}
	//console.log('underscores', underscores);
	var blankWord = underscores.join('');
	console.log('blankWord', blankWord);
}

module.exports = Word;