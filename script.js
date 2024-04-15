const choices = ['rock', 'paper', 'scissors'];
const playerChoiceImg = document.getElementById("player-img");
const computerChoiceImg = document.getElementById("computer-img");
const gameResult = document.getElementById("game-result");

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function () {
        const playerSelection = this.id;
        playRound(playerSelection);
    });
});

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    displayChoice(playerSelection, playerChoiceImg);
    displayChoice(computerSelection, computerChoiceImg);

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
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function displayChoice(choice, element) {
    element.src = `${choice}.png`;
}

function displayResult(message) {
    document.getElementById("result").textContent = message;
}

function updateScore() {
    document.getElementById("score").textContent = `Score: Player ${playerScore} - ${computerScore} Computer`;
}

function checkWinner() {
    if (playerScore === 5) {
        gameResult.textContent = "Congratulations! You win the game.";
        resetGame();
    } else if (computerScore === 5) {
        gameResult.textContent = "Sorry, you lose the game.";
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    setTimeout(() => {
        gameResult.textContent = "";
        document.getElementById("result").textContent = "";
        playerChoiceImg.src = "";
        computerChoiceImg.src = "";
    }, 3000);
}
