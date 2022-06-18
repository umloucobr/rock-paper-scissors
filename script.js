let g_playerScore = 0;
let g_computerScore = 0;
let g_score = 0;

function computerPlay() {
    let choice = Math.floor((Math.random() * 3) + 1);;
    if (choice == 1) {
        return "Rock";
    }
    else if (choice == 2) {
        return "Paper";
    }
    else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        console.log("It's a tie!")
        return 0;
    }
    else if (computerSelection.toUpperCase() == "SCISSORS" && playerSelection.toUpperCase() == "PAPER" || computerSelection.toUpperCase() == "ROCK" && playerSelection.toUpperCase() == "SCISSORS" || computerSelection.toUpperCase() == "PAPER" && playerSelection.toUpperCase() == "ROCK") {
        ++g_computerScore;
        --g_score;
        console.log("The Computer Won This Round!")
        return 0;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER" || playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS" || playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
        ++g_playerScore;
        ++g_score;
        console.log("You Won This Round!")
        return 0;
    }
    else {
    console.log("Invalid Input!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Rock, Paper or Scissors");
        let computerSelection = computerPlay();
	    playRound(playerSelection, computerSelection);
    }
    if (g_score > 0) {
        console.log("You won the game.");
    }
    else {
        console.log("You lost.");
    }
}
game();


