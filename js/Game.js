/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    //missed: used to track the number of missed guesses by the player. The initial value is 0, since no guesses have been made at the start of the game.
    this.missed = 0;
    this.phrases = [
      new Phrase("Life is like a box of CHOCOLATES"),
      new Phrase("I am a table tennis champion"),
      new Phrase("Thank you Intuit and AnitaB"),
      new Phrase("The early bird gets the work"),
      new Phrase("if it were easy everyone would do it"),
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
        //do something
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
    //replace liveHeart with lostHeart
    //let hearts = document.querySelector('img');
    //increments the missed property
    //if( missedGuess > 5){
    // gameOver();
    // this.startGame.style.display='block';
  }

  /**
   * Checks for winning move
   * @return {boolean} True if game has been won, false if game wasn't won
   */
  checkForWin() {
    //iterate through list items in the ul to see if they all have the show class
    const listContainer = document.querySelectorAll("#phrase ul li");
    const listArray = [...listContainer];
    console.log(listArray);
    //const filteredArray = listArray.filter(listItem => {listItem.classList.contains("letter")});
    //const filteredArray = listArray.filter(listItem => {listItem.show});
    //console.log(filteredArray);

    //if (listItem.classList.contains("show"))
    

    listArray.forEach(listItem =>{
      console.log(listItem);
    });
    // let counter= 0;
    // filteredArray.forEach( listItem => {
    //   if(listItem.classList.contains('show')){
    //     console.log(listItem)
    //     counter += 1;
    //   }
    // });
    // console.log(counter);
    // console.log(filteredArray.length);
    //   if (counter == filteredArray.length){
    //     console.log("You Win");
    //   }
  }
  /**
   * Displays game over message
   * @param {boolean} gameWon - Whether or not the user won the game
   */
  gameOver(gameWon) {
    //replaces the overlay start CSS class with either the WIN or LOSE class
  }
}
