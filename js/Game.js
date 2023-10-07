/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
    this.missed = 0;
    this.phrases = [
      new Phrase("Not hot"),
      new Phrase("Joe Toe"),
      new Phrase("dot not"),
      new Phrase("fog jog"),
      new Phrase("sing song"),
    ];
    this.activePhrase = null;
  }

  /**
   * Begins game by selecting a random phrase and displaying it to user
   */
  startGame() {
    const startScreenOverlay = document.querySelector("#overlay");
    //startScreenOverlay.hidden = true; don't understand why hidden property doesn't work
    startScreenOverlay.style.display = "none";
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
  handleInteraction(chosenLetter) {
    const isLetterInPhrase = this.activePhrase.checkLetter(
      chosenLetter.innerHTML
    );

    if (isLetterInPhrase) {
      chosenLetter.classList.add("chosen");
      this.activePhrase.showMatchedLetter(chosenLetter.innerText);

      if (this.checkForWin()) {
        this.gameOver();
      }
    } else {
      chosenLetter.classList.add("wrong");
      this.removeLife();
    }
    chosenLetter.disabled = true;
  }

  /**
   * Increases the value of the missed property
   * Removes a life from the scoreboard
   * Checks if player has remaining lives and ends game if player is out
   */
  removeLife() {
    console.log(`start this.removeLife()`);
    const liveHeart = document.querySelector('img[src="images/liveHeart.png"]');
    
    if (liveHeart){
      liveHeart.src = "images/lostHeart.png"
    }
    this.missed += 1;
    if(this.missed >= 5 ){
      this.gameOver();
      console.log('game over');
    }
      

      //iterate through live hearts. If heart is live, change the src on the next sibling
    }



    //increments the missed property
    //if( missedGuess > 5){
    // gameOver();
    // this.startGame.style.display='block';
  

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */

  checkForWin() {
    const listContainer = document.querySelectorAll("#phrase ul li.letter");
    let allShown = true;

    // check each letter to see if it has the show class, mark allShown false if any do not
    listContainer.forEach((listItem) => {
      if (!listItem.classList.contains("show")) {
        allShown = false;
      }
    });

    // return based on allShown status
    return allShown;
  }

  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    //replaces the overlay start CSS class with either the WIN or LOSE class
    console.log("gameOver function has been entered");
  }
}
