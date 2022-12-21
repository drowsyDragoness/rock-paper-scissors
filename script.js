let playerScore = 0
let computerScore = 0

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

function playRound() {
    let playerSelection = prompt('Type ROCK, PAPER, or SCISSORS').toUpperCase();
    let computerSelection = getRandomChoice();
    console.log(`You chose ${playerSelection}`);
    console.log(`Computer chose ${computerSelection}`);

    if (playerSelection === computerSelection) {
        return console.log('It\'s a tie!');
    } else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
            return computerScore++;
        } else {
            console.log(`${playerSelection} beats ${computerSelection}. You win!`);
            return playerScore++;
        }
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            console.log(`${playerSelection} beats ${computerSelection}. You win!`);
            return playerScore++;
        } else {
            console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
            return computerScore++;
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            console.log(`${computerSelection} beats ${playerSelection}. You lose!`);
            return computerScore++;
        } else {
            console.log(`${playerSelection} beats ${computerSelection}. You win!`);
            return playerScore++;
        }
    }
}

// Gameplay loop

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

console.log('Game over! Play again?');
}

game();

