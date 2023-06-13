const choices = ["rock", "paper", "scissors"];
const playerSelection = prompt("Which sign do you want to play?");
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

    return `You're even! You both chose ${playerSelection}`
  }
}

function game() {

  for (let i = 1; i <= 5; i++) {
    
    results.push(compareHands(playerSelection, computerSelection));
    console.log(results[i-1]);
  }
}

game();


