function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw!")
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors!");
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats Rock!");
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rocks!");
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beat Paper!");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beat Paper!");
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats Scissors!");
    }
}

let play = ['Rock', 'Paper', 'Scissors'];
let computerSelection = computerPlay(play);
let playerSelection = prompt('Enter your pick: ');
let scorePlayer = 0;
let scoreComputer = 0;
console.log(computerSelection);
playRound(playerSelection, computerSelection);