const choices = ["rock", "paper", "scissors"];
const results = [];
let computerSelection;

function getComputerChoice() {
  const computerHand = choices[Math.floor(Math.random() * choices.length)];
  return computerHand;
}

function compareHands(playerSelection, computerSelection = getComputerChoice()) {

  if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
    
    return `You've won! ${playerSelection} beats ${computerSelection}`

  } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {

    return `You've lost! ${playerSelection} loses to ${computerSelection}`

  } else {

    return `It's a tie! You both chose ${playerSelection}`
  }
}

function game() {

  for (let i = 1; i <= 5; i++) {
    
    results.push(compareHands(playerSelection, computerSelection));
    console.log(results[i-1]);
  }
}

game();


