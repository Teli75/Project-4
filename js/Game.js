/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
    this.missed = 0;
    //phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
    this.phrases = [new Phrase('Life is like a box of CHOCOLATES'), new Phrase('I am a table tennis champion'), new Phrase('Working for Intuit is a dream come true'), new Phrase('The early bird gets the work'), new Phrase ('if it were easy everyone would do it')];


    //activePhrase:
    //This is the Phrase object that’s currently in play.
    //The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from
    //a call to the getRandomPhrase() method.
    this.activePhrase = null;
    //look up video on how to set a property
  }

  //hides the start screen overlay, calls the getRandomPhrase();
  startGame() {
    /**
     * Selects random phrase from phrases property
     * @return {Object} Phrase object chosen to be used
     */
    getRandomPhrase();

    //sets the activePhrase property with the chosen phrase
    //It also adds that phrase to the board by calling the
    //addPhraseToDisplay() method on the activePhrase property.
  }

  //randomly retrieves one of the phrases stored in the phrases array and returns it.
  getRandomPhrase() {
    //returns a phrase object
    let randomNum = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomNum];
  }

  //checks if button clicked matches a letter in phrase
  handleInteraction() {
    // This method should:
    //Disable the selected letter’s onscreen keyboard button.
  }

  //removed a life from scoreboard by replacing hearts
  removeLife() {
    //replace liveHeart with lostHeart
    //increments the missed property
    //if( missedGuess > 5){
    gameOver();
  }

  //Checks if all letters have been revealed
  checkForWin() {}

  //displays original start screen and updates h1 with approrpiate message
  gameOver() {
    //replaces the overlay start CSS class with either the WIN or LOSE class
  }
}
