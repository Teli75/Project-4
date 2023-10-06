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
    console.log(listContainer);
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
  checkLetter(buttonClicked) {
    console.log("checkLetter()");
    console.log(`button clicked innerHTML ${buttonClicked}`);
    

    // const listContainer = document.querySelectorAll("#phrase ul li");
    // console.log(listContainer);
    // const listArray = [...listContainer];
    // console.log(listArray);
    // listArray.forEach((listItem) => {
    //   console.log(listItem.innerHTML);
    //   if (buttonClicked.innerHTML.trim().includes(listItem.innerHTML.trim())) {
    //     console.log("button matches phrase character");
    //   }
    // });

    if (this.phrase.includes(buttonClicked)){
      return true;
    } else {
      return false;
    }
    
  }

  /**
   * Displays passed letter on screen after a match is found
   * @param (string) letter - Letter to display
   */
  showMatchedLetter(matchingLetter) {
    
     const listContainer = document.querySelectorAll("#phrase ul li");
    console.log(listContainer);
    const listArray = [...listContainer];
    console.log(listArray);
    listArray.forEach((listItem) => {
      console.log(listItem.innerText);
      console.log(`mathcing letter ${matchingLetter.innerText}`);
      if (matchingLetter.innerText === listItem.innerText) {
        console.log("button matches phrase character");
      }
    });

    // for (let i = 0; splitPhrase.length; i++) {
    //   console.log(`matchingLetters ${matchingLetters}`);
    // }

    //iterate through the li elements looking for the letter that matches the letter button clicked
    //select all DOM elements that have css classname that matches selected letter and
    //replace each selected element's hide CSS class with show CSS class.
    /*`showMatchedLetter()`: Reveals the letter(s) on the board that matches the
player's selection. To reveal the matching letter(s), select all of the letter DOM
elements that have a CSS class name that matches the selected letter and
replace each selected
  } */
  }
}
