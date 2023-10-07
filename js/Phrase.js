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

    const listContainer = document.querySelector("#phrase ul");
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
  checkLetter(chosenLetter) {
    if (this.phrase.includes(chosenLetter)) {
      return true;
    } else {
      return false;
    }
  }
  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(chosenLetter) {
    const listContainer = document.querySelectorAll("#phrase ul li");
    const listArray = [...listContainer];

    listArray.forEach((listItem) => {
      if (chosenLetter === listItem.innerText) {

        listItem.classList.add("show");
      }
    });
  }
}
