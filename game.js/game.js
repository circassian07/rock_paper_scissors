function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You win! Rock beats Scissors!");
        return scorePlayer++;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You lose! Paper beats Rock!");
        return scoreComputer++;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You win! Paper beats Rocks!");
        return scorePlayer++;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You lose! Scissors beat Paper!");
        return scoreComputer++;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You win! Scissors beat Paper!");
        return scorePlayer++;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You lose! Rock beats Scissors!");
        return scoreComputer++;
    }
}

function game() {
    for (let i=0;i<5;i++) {
        let computerSelection = computerPlay(play);
        let playerSelection = prompt('Enter your pick: ');
        console.log(computerSelection);
        playRound(playerSelection, computerSelection);
    }
}

function results() {
    if (scorePlayer>scoreComputer) {
        console.log(`Congrats! You won the game! Final score is ${scorePlayer} & ${scoreComputer}`)
    } else if (scoreComputer>scorePlayer) {
        console.log(`Sorry, you lose! Better luck next time! Final score is ${scorePlayer} & ${scoreComputer}`)
    }
}

let play = ['Rock', 'Paper', 'Scissors'];
let scorePlayer = 0;
let scoreComputer = 0;


game();
results();