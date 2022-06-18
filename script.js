// Rock Paper Scissors

// three choices Rock, Paper or Scissors
// Rock beats Scissors, Paper beats rock, scissors beats paper

// Begin with a function called computer play
// the computer picks between rock paper and scissors and returns the value that they pick

var gameStateMsg = " "
const gameInfoElement = document.getElementById("gameState")

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

    // clean up the if statement for the win, lose, invalid
    if (playerSelection == computerSelection) {
       return gameStateMsg = `You both played ${playerSelection} this game is a tie.`;
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock" ) || (playerSelection == "scissors" && computerSelection == "paper")) {
       return gameStateMsg = winMessage;
    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")) {
       return gameStateMsg = loseMessage
    } else {
       return gameStateMsg = `${playerSelection} is not a valid input`;
    }
}

// the game function that will track our games
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Chose your weapon! Rock, Paper or Scissors?")
        let computerSelection = computerPlay();
        console.log(playRound(computerSelection, playerSelection));
    }
}

game();

/* const playerSelection = "RocK";
const computerSelection = computerPlay();
console.log(playRound(computerSelection, playerSelection)); */