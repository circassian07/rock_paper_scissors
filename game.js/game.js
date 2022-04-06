function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw!")
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {}
    else if (playerSelection === "Rock" && computerSelection === "Paper") {}
    else if (playerSelection === "Paper" && computerSelection === "Rock") {}
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {}
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {}
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {}
}

let play = ['Rock', 'Paper', 'Scissors'];
let computerSelection = computerPlay(play);
let playerSelection = prompt('Enter your pick: ');
console.log(computerSelection);
playRound(playerSelection, computerSelection);