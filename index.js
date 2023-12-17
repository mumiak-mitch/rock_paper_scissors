// Step 2: Get computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 3: Play a single round
function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Check for ties and re-play the round
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie! Play again.";
    }

    // Determine the winner of the round
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

// Step 4: Play a best-of-five game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice: Rock, Paper, or Scissors");
        const computerSelection = getComputerChoice();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // Update scores based on the result
        if (result.includes('win')) {
            playerScore++;
        } else if (result.includes('lose')) {
            computerScore++;
        }
    }

    // Determine the overall winner
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game.");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lose the game.");
    } else {
        console.log("It's a tie in the overall game.");
    }
}

// Start the game
game();