/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    //this.phrase = phrase.toLowerCase();
    //this.phrase = phrase.map(phrase => phrase.toLowerCase());
    this.phrase = phrase.toString().toLowerCase();
    this.testVariable = "cow";
  }

/**
 * Display phrase on game board
 */
  addPhraseToDisplay() {
    //const splitPhrase = this.activePhrase.split("");
    //const splitPhrase = 'test splitPhrase';
    return `test addPhraseToDisplay`;
   
    //const letters = document.querySelector('#phrase');
    
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


