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

    const listContainer = document.querySelector('#phrase');

    for (let i=0; i< splitPhrase.length; i++){
      console.log(i);
      const html = `
      <li class="hide">${i} </li>`
    
     listContainer.insertAdjacentElement("beforeend", html);
    }
    
    //return splitPhrase;
   
  }


  //Checks if letter selected by the player matches a letter in phrase
  checkLetter() {
    return 'test';
  }

  //reveals matching letters
  showMatchedLetter() {
    //select all DOM elements that have css classname that matches selected letter and replace each
    //selected element's hide CSS class with show CSS class.
  }
}


