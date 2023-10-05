/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    //this.phrases = [];
    this.activePhrase = null;
    //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
    //phrases: an array of five Phrase objects to use with the game. A phrase should only include letters and spaces— no numbers, punctuation or other special characters.
    //activePhrase:
    //This is the Phrase object that’s currently in play.
    //The initial value is null. Within the startGame() method, this property will be set to the Phrase object returned from
    //a call to the getRandomPhrase() method.
  }

  //hides the start screen overlay, calls the getRandomPhrase();
  startGame() {
    // functino to get phrase object
    getRandomPhrase();
    //sets the activePhrase property with the chosen phrase
    //It also adds that phrase to the board by calling the
    //addPhraseToDisplay() method on the activePhrase property.
  }

  //randomly retrieves one of the phrases stored in the phrases array and returns it.
  getRandomPhrase() {
    //returns a phrase object
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
