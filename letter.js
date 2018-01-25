// Contains a constructor, Letter. This constructor 
//should be able to either display an underlying character 
//or a blank placeholder (such as an underscore), depending 
//on whether or not the user has guessed the letter. 
//That means the constructor should define:
function Letter() {
	var self = this;
	// A string value to store the underlying character for the letter
	this.lString = "";
	// A boolean value that stores whether that letter has been guessed yet
	this.guessed = false;

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
// A function that takes a character as an argument and 
//checks it against the underlying character, updating 
//the stored boolean value to true if it was guessed correctly

module.exports = Letter;