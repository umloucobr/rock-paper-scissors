let g_playerScore = 0;
let g_computerScore = 0;
let g_score = 0;
let g_roundsPlayed = 1;

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
    
    if (playerSelection == computerSelection) {
        document.getElementsByClassName("outputp")[0].innerHTML = "It's a tie!";
        console.log("It's a tie!")
        return 0;
    }
    else if (computerSelection == "SCISSORS" && playerSelection == "PAPER" || computerSelection == "ROCK" && playerSelection == "SCISSORS" || computerSelection == "PAPER" && playerSelection == "ROCK") {
        document.getElementsByClassName("outputp")[0].innerHTML = "The computer won this round!";
        ++g_computerScore;
        --g_score;
        console.log("The computer won this round!")
        return 0;
    }
    else if (playerSelection == "SCISSORS" && computerSelection == "PAPER" || playerSelection == "ROCK" && computerSelection == "SCISSORS" || playerSelection == "PAPER" && computerSelection == "ROCK") {
        document.getElementsByClassName("outputp")[0].innerHTML = "You won this round!";
        ++g_playerScore;
        ++g_score;
        console.log("You won this round!")
        return 0;
    }
    else {
    console.log("Invalid Input!");
    }
}

function game(playerSelection) {
    let computerSelection = computerPlay();
	playRound(playerSelection, computerSelection);

    if (g_roundsPlayed >= 5 && g_score > 0) {
        document.getElementsByClassName("outputp")[0].innerHTML = "You have won, congratulations :D!";
        console.log("You have won the game.");
    }
    else if (g_roundsPlayed >= 5 && g_score === 0) {    
        document.getElementsByClassName("outputp")[0].innerHTML = "The game ended in a tie!";   
        console.log("It is a tie.");
    }
    else if (g_roundsPlayed >= 5 && g_score < 0) {
        document.getElementsByClassName("outputp")[0].innerHTML = "You have sadly lost the game :(.";
        console.log("You have lost.");
    }
}

function getRock(){
    let playerSelection = "ROCK";
    game(playerSelection);
    g_roundsPlayed += 1;
}

function getPaper(){
    let playerSelection = "PAPER";
    game(playerSelection);
    g_roundsPlayed += 1;
}

function getScissors(){
    let playerSelection = "SCISSORS";
    game(playerSelection);
    g_roundsPlayed += 1;
}


