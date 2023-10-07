/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//Instantiate a new instance of the Game class to initiate the games functionality
const resetButton = document.querySelector("#btn__reset");

let game;
//console.log(resetButton);
resetButton.addEventListener("click", (event) => {
  resetBoard();
  game = new Game();
  game.startGame();
});

const letterButton = document.querySelector("#qwerty");
//handleInteraction() is called when buttons are clicked
letterButton.addEventListener("click", (e) => {
    const chosenLetter = e.target;
  if (chosenLetter.tagName === "BUTTON") {
    
    if (chosenLetter) {
      game.handleInteraction(chosenLetter);
    }
  }
});

//Event delegation can also be used in order to avoid having to add an event listener to each individual
//keyboard button.
// Clicking the space between and around the onscreen keyboard buttons should not result in the handleInteraction() method being called.

//Resetting the gameboard between games
//To reset the game, complete the following steps: * Remove all li elements from the Phrase ul element. * Enable all of the onscreen keyboard buttons
// and update each to use the key CSS class, and not use the chosen or wrong CSS classes.
//* Reset all of the heart images (i.e. the player's lives) in the scoreboard at the bottom of the gameboard to display the liveHeart.png image.

function resetBoard() {
  const startScreenOverlay = document.querySelector("#overlay");
  startScreenOverlay.classList.remove("win");
  startScreenOverlay.classList.remove("lose");
  startScreenOverlay.classList.add("start");
  const ulElement = document.querySelector("#phrase ul");
  ulElement.innerHTML = "";

  const keyboard = document.querySelectorAll(".key");

  keyboard.forEach((key) => {
    key.classList.remove("wrong");
    key.classList.remove("chosen");
    key.removeAttribute("disabled");
  });

  const hearts = document.querySelectorAll(".tries");
  hearts.forEach((heart) => {
    heart.src = "images/liveHeart.png";
  });
}
