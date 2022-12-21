function getRandomChoice() {
    let i = Math.floor((Math.random() * 3));
    if (i === 0) {
        return "Rock";
    } else if (i === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 'It\'s a tie!';
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            return 'Paper beats Rock. You lose!';
        } else {
            return 'Rock beats Scissors. You win!';
        }
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Rock') {
            return 'Paper beats Rock. You win!';
        } else {
            return 'Scissors beats Paper. You lose!';
        }
    } else if (playerSelection === 'Scissors') {
        if (computerSelection === 'Rock') {
            return 'Rock beats Scissors. You lose!';
        } else {
            return 'Scissors beats Paper. You win!';
        }
    }
}


const playerSelection = getRandomChoice();
const computerSelection = getRandomChoice();

console.log(`You chose: ${playerSelection}`);
console.log(`Computer chose: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection))