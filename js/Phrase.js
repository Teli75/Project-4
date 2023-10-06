/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    //this.phrase = phrase.toLowerCase();
    //this.phrase = phrase.map(phrase => phrase.toLowerCase());
    this.phrase = phrase.toString().toLowerCase();
  }

  /**
   * Display phrase on game board
   */
 
  addPhraseToDisplay() {
    const splitPhrase = this.phrase.split("");

    const listContainer = document.querySelector("#phrase");
    let html = "";
    for (let i = 0; i < splitPhrase.length; i++) {
      if (splitPhrase[i] == " ") {
        html = `
        <li class="space"></li>`;
      } else {
        html = `
      
      <li class="letter">${splitPhrase[i]} </li>`;
      }

      listContainer.insertAdjacentHTML("beforeend", html);
    }
    
  }

  /**
   * Checks if passed letter is in phrase
   * *@param (string) letter = Letter to check
   */
  checkLetter() {
    const splitPhrase = this.phrase.split("");

    for (let i = 0; i < splitPhrase; i++) {
      if (buttonClicked.innerHTML == splitPhrase[i]) {
        //callShowMatchedLetter
      } else {
        //call remove life method
      }
    }
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter() {
    //select all DOM elements that have css classname that matches selected letter and replace each
    //selected element's hide CSS class with show CSS class.
    /*`showMatchedLetter()`: Reveals the letter(s) on the board that matches the
player's selection. To reveal the matching letter(s), select all of the letter DOM
elements that have a CSS class name that matches the selected letter and
replace each selected
  } */
  }
}
