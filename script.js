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

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'ROCK') {
        if (computerSelection === 'PAPER') {
            return 'PAPER beats ROCK. You lose!';
        } else {
            return 'ROCK beats SCISSORS. You win!';
        }
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            return 'PAPER beats ROCK. You win!';
        } else {
            return 'SCISSORS beats PAPER. You lose!';
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'ROCK') {
            return 'ROCK beats SCISSORS. You lose!';
        } else {
            return 'SCISSORS beats PAPER. You win!';
        }
    }
}


const playerSelection = getRandomChoice();
const computerSelection = getRandomChoice();

console.log(`You chose: ${playerSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection))