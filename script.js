let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choice = Math.floor((Math.random() * 3) + 1);;
    if (choice == 1)
        return "Rock";
    if (choice == 2)
        return "Paper";
    if (choice == 3)
        return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    
    if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
        console.log("It's a tie!")
        return 0;
    }
    else if (computerSelection.toUpperCase() == "SCISSORS" && playerSelection.toUpperCase() == "PAPER" || computerSelection.toUpperCase() == "ROCK" && playerSelection.toUpperCase() == "SCISSORS" || computerSelection.toUpperCase() == "PAPER" && playerSelection.toUpperCase() == "ROCK") {
        ++computerScore;
        console.log("The Computer Won This Round!")
        return -1;
    }
    else if (playerSelection.toUpperCase() == "SCISSORS" && computerSelection.toUpperCase() == "PAPER" || playerSelection.toUpperCase() == "ROCK" && computerSelection.toUpperCase() == "SCISSORS" || playerSelection.toUpperCase() == "PAPER" && computerSelection.toUpperCase() == "ROCK") {
        ++computerScore;
        console.log("You Won This Round!")
        return 1;
    }
    else
    console.log("Invalid Input!");
}

function game() {
    let score = 0;
    for (; playerScore < 5 || computerScore < 5; playerScore++, computerScore++) 
    {

        let playerSelection = window.prompt("Rock, Paper or Scissors");
        let computerSelection = computerPlay();
        score += playRound(playerSelection, computerSelection);
    }
        if (score > 0)
            console.log("You won the game.");
        else
            console.log("You lost.");
}
game();


