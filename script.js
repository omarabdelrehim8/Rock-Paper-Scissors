const choices = ["rock", "paper", "scissors"];

  //player's choice buttons
const rockBtn = document.querySelector("#rock-btn");
const paperBtn = document.querySelector("#paper-btn");
const scissorsBtn = document.querySelector("#scissors-btn");
const playerLogo = document.querySelector("#playerLogo");


  //player's hearts
const playerHeart1 = document.querySelector("#player-heart1");
const playerHeart2 = document.querySelector("#player-heart2");
const playerHeart3 = document.querySelector("#player-heart3");
const playerHeart4 = document.querySelector("#player-heart4");
const playerHeart5 = document.querySelector("#player-heart5");
const playerHealthBar = [playerHeart1, playerHeart2, playerHeart3, playerHeart4, playerHeart5]
let i = 4;
const playerHC = document.querySelector("#playerHC");
const playerResultTxt = document.querySelector("#playerResultTxt");
const buttonsContainer = document.querySelector(".buttons-container")

  //computer's hearts
const computerHeart1 = document.querySelector("#computer-heart1");
const computerHeart2 = document.querySelector("#computer-heart2");
const computerHeart3 = document.querySelector("#computer-heart3");
const computerHeart4 = document.querySelector("#computer-heart4");
const computerHeart5 = document.querySelector("#computer-heart5");
const computerHealthBar = [computerHeart1, computerHeart2, computerHeart3, computerHeart4, computerHeart5]
let j = 4;
const aiLogo = document.querySelector("#aiLogo")
const computerHC = document.querySelector("#computerHC")
const computerResultTxt = document.querySelector("#computerResultTxt")

const questionMark = document.querySelector("#questionMark");



rockBtn.addEventListener("click", () => {
  const playerSelection = "rock";
  let computerSelection = getComputerChoice();
  compareHands(playerSelection, computerSelection);
  finalResult ();
})

paperBtn.addEventListener("click", () => {
  const playerSelection = "paper";
  let computerSelection = getComputerChoice();
  compareHands(playerSelection, computerSelection);
  finalResult ();
})

scissorsBtn.addEventListener("click", () => {
  const playerSelection = "scissors";
  let computerSelection = getComputerChoice();
  compareHands(playerSelection, computerSelection);
  finalResult ();
})

function getComputerChoice() {
  const computerHand = choices[Math.floor(Math.random() * choices.length)];

  if (computerHand === "rock") {
    questionMark.src = "asteroid.png";
  } else if (computerHand === "paper") {
    questionMark.src = "toilet-paper.png";
  } else {
    questionMark.src = "chainsaw.png";
  }
  return computerHand;
}


function compareHands(playerSelection, computerSelection) {

  if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
    
    computerHealthBar[j].style.display = "none";
    j--;

  } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {

    playerHealthBar[i].style.display = "none";
    i--;

  } else {

    return;
  }
}

function finalResult() {
  if (i + 1 === 0) {
    playerLogo.src = "grave.png";
    playerResultTxt.textContent = "YOU LOST!\r\n YOU GOT OWNED BY AN AI ☹️";
    playerHC.setAttribute("style", "padding: 4px 0px 10px 0px")
    playerResultTxt.setAttribute("style", "color: white; font-family: 'Bagel Fat One';text-align: center; font-size: 19px; white-space: pre-line;")
    buttonsContainer.style.cssText = "pointer-events: none;"
  
  } else if (j + 1 === 0) {
    aiLogo.src = "trash-can.png";
    computerResultTxt.textContent = "YOU WON!\r\n🎊 CONGRATULATIONS 🎊";
    computerHC.setAttribute("style", "padding: 4px 0px 10px 0px")
    computerResultTxt.setAttribute("style", "color: white; font-family: 'Bagel Fat One';text-align: center; font-size: 19px; white-space: pre-line;")
    buttonsContainer.style.cssText = "pointer-events: none;"
  }

}

 