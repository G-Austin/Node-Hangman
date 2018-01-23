var Letter = function(ltr) {
	//store the actual letter
	this.letter = ltr;
	//boolean if the letter can be shown
	this.appear = false;

	this.letterRender = function() {
		if (this.letter == ' '){
			this.appear = true;
			return ' ';
		} if (this.appear === false) {
			return ' _ ';
		} else {
			return this.letter;
		}
	};
};

module.exports = Letter;