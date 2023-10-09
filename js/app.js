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

  const hearts = document.querySelectorAll(".tries img");
  hearts.forEach((heart) => {
  const lostHeart = document.querySelector('img[src="images/lostHeart.png"]');
  if (lostHeart) {
    lostHeart.src = "images/liveHeart.png";
  }
});
  // const hearts = document.querySelectorAll(".tries img");
  // hearts.forEach((heart) => {
    // if (heart.tagname === 'IMG'){
    // heart.removeAttribute("src");
    //   heart.setAttribute('src', "images/liveHeart.png");
  //});
}
