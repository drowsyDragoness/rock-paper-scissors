let playerScore = 0
let computerScore = 0
let playerSelection = prompt('Type ROCK, PAPER, or SCISSORS').toUpperCase();
let computerSelection;

// Random choice generator

function getRandomChoice() {
    let randomNumber = Math.floor((Math.random() * 3));
    switch (randomNumber) {
        case 0:
            return 'ROCK';
        case 1:
            return 'PAPER';
        case 2:
            return 'SCISSORS';
    }
}

// Game logic

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return computerScore++;
        } else {
            return playerScore++;
        }
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return playerScore++;
        } else {
            return computerScore++;
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return computerScore++;
        } else {
            return playerScore++;
        }
    }
}

computerSelection = getRandomChoice();

playRound(playerSelection, computerSelection);

console.log(`You chose: ${playerSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(`Your score: ${playerScore}`);
console.log(`Computer score: ${computerScore}`);