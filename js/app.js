/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


//Instantiate a new instance of the Game class to initiate the games functionality


const resetButton = document.querySelector('#btn__reset');

let game;
//console.log(resetButton);
resetButton.addEventListener('click', (event) => {
    game = new Game();
    game.startGame();
   
});

const letterButton = document.querySelector('#qwerty');
    //handleInteraction() is called when buttons are clicked
    letterButton.addEventListener('click', (e) => {
        const buttonClicked = e.target;
        if (buttonClicked){
          game.handleInteraction(buttonClicked);
        }
    });

//Event delegation can also be used in order to avoid having to add an event listener to each individual 
//keyboard button.
// Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.

//Resetting the gameboard between games
//To reset the game, complete the following steps: * Remove all li elements from the Phrase ul element. * Enable all of the onscreen keyboard buttons
// and update each to use the key CSS class, and not use the chosen or wrong CSS classes. 
//* Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.



// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: ${phrase.phrase} `);
//     };

//const game = new Game();

// game.startGame();
// console.log(game.phrases);
// console.log(`Active phrase - phrase: ${game.activePhrase.phrase})`);

// logPhrase(game.getRandomPhrase());
// game.activePhrase = game.getRandomPhrase();
// const testReturn = game.activePhrase.addPhraseToDisplay();
// console.log(testReturn);







