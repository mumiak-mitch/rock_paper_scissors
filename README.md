# Rock, Paper, Scissors Game with UI

## Overview

This is a classic Rock, Paper, Scissors game with an added user interface (UI). Players can now make their selections by clicking buttons for 'Rock', 'Paper', or 'Scissors' instead of typing their answers. The game keeps track of the running score and announces the winner once one player reaches 5 points.

## How to Play

1. Open the `index.html` file in a web browser.
2. Click on the 'Rock', 'Paper', or 'Scissors' buttons to make your selection for each round.
3. The results of each round and the running score will be displayed in the UI.
4. The game will announce the winner once either the player or the computer reaches 5 points.

## Game Logic

- The computer randomly selects 'Rock', 'Paper', or 'Scissors' for each round.
- Each round's winner is determined based on the classic Rock, Paper, Scissors rules.
- The game keeps track of the running score and displays it in the UI.
- The winner is announced once either the player or the computer reaches 5 points.

## Technologies Used

- JavaScript
- HTML
- CSS (for basic styling)

## Code Structure

- `script.js`: Contains the JavaScript code for the game, including event listeners for button clicks and game logic.
- `index.html`: HTML file with buttons for player selections and result display.
- `style` tag in `index.html`: Basic styling for buttons and result display.

## How to Run

- Open the `index.html` file in a web browser.
- Click on the buttons to make your selections and play the game.

## Game Flow

1. Clicking a button triggers the `playRound` function with the corresponding player selection.
2. The result of each round is displayed, and the running score is updated.
3. The game checks for a winner after each round, announcing the winner once a player reaches 5 points.
4. The game can be reset by refreshing the browser.
