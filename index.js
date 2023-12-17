// script.js

let playerScore = 0;
let computerScore = 0;

document.getElementById("rock").addEventListener("click", function () {
    playRound("rock");
});

document.getElementById("paper").addEventListener("click", function () {
    playRound("paper");
});

document.getElementById("scissors").addEventListener("click", function () {
    playRound("scissors");
});

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        displayResult("It's a tie! Play again.");
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        displayResult(`You win! ${playerSelection} beats ${computerSelection}.`);
        playerScore++;
    } else {
        displayResult(`You lose! ${computerSelection} beats ${playerSelection}.`);
        computerScore++;
    }

    updateScore();
    checkWinner();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function displayResult(message) {
    document.getElementById("result").textContent = message;
}

function updateScore() {
    document.getElementById("score").textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
}

function checkWinner() {
    if (playerScore === 5) {
        displayResult("Congratulations! You win the game.");
        resetGame();
    } else if (computerScore === 5) {
        displayResult("Sorry, you lose the game.");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
}