// Rock Paper Scissors

// three choices Rock, Paper or Scissors
// Rock beats Scissors, Paper beats rock, scissors beats paper

// Begin with a function called computer play
// the computer picks between rock paper and scissors and returns the value that they pick

let gameStateMsg = " ";
let round = 0;
let computerScore = 0;
let playerScore = 0;

const roundInfoElement = document.getElementById("roundInfo");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playAgainBtn = document.getElementById("playAgain");

const computerScoreInfo = document.getElementById("computerScore");
const playerScoreInfo = document.getElementById("playerScore");

const gameInfo = document.getElementById("gameInfo");
const modal = document.getElementById("modal");

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
        gameStateMsg = `You both played ${playerSelection} this game is a tie.`;
        round += 1;
    } else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "paper" && computerSelection == "rock" ) || (playerSelection == "scissors" && computerSelection == "paper")) {
        gameStateMsg = winMessage;
        round += 1;
        playerScore += 1;
    } else if ((computerSelection == "rock" && playerSelection == "scissors") || (computerSelection == "paper" && playerSelection == "rock") || (computerSelection == "scissors" && playerSelection == "paper")) {
        gameStateMsg = loseMessage
        round += 1;
        computerScore += 1;
    } else {
        gameStateMsg = `${playerSelection} is not a valid input`;
    }
}

function updateState() {
    roundInfoElement.textContent = ` Round ${round} of 5! ${gameStateMsg}`;
    computerScoreInfo.textContent = `${computerScore}`;
    playerScoreInfo.textContent = `${playerScore}`;
    
}

function updateGameInfo() {
    if (playerScore == computerScore) {
        gameInfo.textContent = "You and the Computer tied this round, would you like to play again?"
    } else if (playerScore > computerScore) {
        gameInfo.textContent = "Congratulations you won this time!"
    } else if (computerScore > playerScore) {
        gameInfo.textContent = "You lost to the Computer. Play again?"
    }
}

function isGameOver() {
    if (round >= 5) {
        updateGameInfo();
        modal.classList.add("modal-shown");
        modal.classList.remove("modal-hidden");
     } 

     return
}

rockBtn.addEventListener("click", () => handleClick('Rock'));
paperBtn.addEventListener("click", () => handleClick('Paper'));
scissorsBtn.addEventListener("click", () => handleClick('Scissors'));
playAgainBtn.addEventListener("click", () => reset());

function handleClick(playerSelection) {
    isGameOver();
   const computerSelection = computerPlay();
   playRound(computerSelection, playerSelection);
   updateState();
   console.log("round played");
   isGameOver();
}

function reset() {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    updateState();
    modal.classList.add("modal-hidden");
    modal.classList.remove("modal-shown");
    roundInfoElement.textContent = "CHose your weapon."
}


/*
// the game function that will track our games
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Chose your weapon! Rock, Paper or Scissors?")
        let computerSelection = computerPlay();
        console.log(playRound(computerSelection, playerSelection));
    }
} */

// game();