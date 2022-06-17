// Rock Paper Scissors

// three choices Rock, Paper or Scissors
// Rock beats Scissors, Paper beats rock, scissors beats paper

// Begin with a function called computer play
// the computer picks between rock paper and scissors and returns the value that they pick

function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    
    if (random == 0 ) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(computerSelection, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    const winMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    const loseMessage = `You lose ${computerSelection} beats ${playerSelection}`;

    if (playerSelection == computerSelection) {
        return `You both played ${playerSelection} this game is a tie.`
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return winMessage;
    } else if (playerSelection == "paper" && computerSelection == "rock" ) {
        return winMessage;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return winMessage;
    } else if (computerSelection == "rock" && playerSelection == "scissors") {
        return loseMessage;
    } else if (computerSelection == "paper" && playerSelection == "rock") {
        return loseMessage;
    } else if (computerSelection == "scissors" && playerSelection == "paper") {
        return loseMessage;
    } else {
        return `${playerSelection} is not a valid input.`
    }
}

const playerSelection = "RocK";
const computerSelection = computerPlay();
console.log(playRound(computerSelection, playerSelection));