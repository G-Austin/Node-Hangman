function Letter(abc) {
	this.letter = abc;
	this.appear = false;

	// A function that returns the underlying character
	//if the letter has been guessed, or a placeholder
	//(like an underscore) if the letter has not been guessed
	this.letterRender = function() {
    	if(this.letter == ' '){ /*renders a blank as it is*/
      	//makes sure that when the function checks if the word is found doesn't read the blank as false.
      	this.appear = true;
      		return '  ';
    	} if (this.appear === false) { /*if it doesn't appear, it returns a ' _ '*/
      		return ' _ ';
    	} else { /*otherwise it just appears as itself*/
      		return this.letter;
    	}
	};
};

module.exports = Letter;
