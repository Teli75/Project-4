/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
   this.missed = 0;
    //phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
    this.phrases = [
      new Phrase("Life is like a box of CHOCOLATES"),
      new Phrase("I am a table tennis champion"),
      new Phrase("Thank you Intuit and AnitaB"),
      new Phrase("The early bird gets the work"),
      new Phrase("if it were easy everyone would do it"),
    ];

    //the Phrase object returned from a call to the getRandomPhrase() method.
    this.activePhrase = null;
  }


  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const startScreenOverlay = document.querySelector('#overlay');
    console.log(startScreenOverlay);
    //startScreenOverlay.hidden = true; don't understand why hidden property doesn't work
    startScreenOverlay.style.display= 'none';
   this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
   
  }
  /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
  
  getRandomPhrase() {
    //returns a phrase object
    let randomNum = Math.floor(Math.random() * this.phrases.length);
    console.log(this.phrases[randomNum]);
    return this.phrases[randomNum];
  }

  //checks if button clicked matches a letter in phrase
  handleInteraction(buttonClicked) {
    console.log('handleInteraction');
    game.activePhrase.checkLetter(buttonClicked);
    ////Disable the selected letter’s onscreen keyboard button, so that letter can't be chosen again.
    //if(checkLetter) is true{
      //add chosen class to keyboard button
      //call showMatchedLeter()
      //call checkForWin();
    //} else {
      //add wrong class to the keyboard button
      //call removeLife();

    //}

    
  }

  //removed a life from scoreboard by replacing hearts
  removeLife() {
    //replace liveHeart with lostHeart
    //increments the missed property
    //if( missedGuess > 5){
    gameOver();
    this.startGame.style.display='block';
  }

  //Checks if all letters have been revealed
  checkForWin() {
    //if (win){
      //gameOver();
   // }
  }

  //displays original start screen and updates h1 with approrpiate message
  gameOver() {
    //replaces the overlay start CSS class with either the WIN or LOSE class
  }
}
