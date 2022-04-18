let play = ['Rock', 'Paper', 'Scissors'];
let scorePlayer = 0;
let scoreComputer = 0;


function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)]
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        displayScore.textContent = `It's a draw!\n Score: ${scorePlayer} vs ${scoreComputer}`;
    }
    else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        scorePlayer++;
        displayScore.textContent = `You win! Rock beats Scissors!\n Score: ${scorePlayer} vs ${scoreComputer}`;
        return scorePlayer;
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper") {
        scoreComputer++;
        displayScore.textContent = `You lose! Paper beats Rock!\n Score: ${scorePlayer} vs ${scoreComputer}`;
        return scoreComputer;
    }
    else if (playerSelection === "Paper" && computerSelection === "Rock") {
        scorePlayer++;
        displayScore.textContent = `You win! Paper beats Rocks!\n Score: ${scorePlayer} vs ${scoreComputer}`;
        return scorePlayer;
    }
    else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        scoreComputer++;
        displayScore.textContent = `You lose! Scissors beat Paper!\n Score: ${scorePlayer} vs ${scoreComputer}`;
        return scoreComputer;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        scorePlayer++;
        displayScore.textContent = `You win! Scissors beat Paper!\n Score: ${scorePlayer} vs ${scoreComputer}`;
        return scorePlayer;
    }
    else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        scoreComputer++;
        displayScore.textContent = `You lose! Rock beats Scissors!\n Score: ${scorePlayer} vs ${scoreComputer}`;
        return scoreComputer;
    }
}

function results() {
    if (scorePlayer === 5 && scorePlayer>scoreComputer) {
        displayScore.textContent = `Congrats! You won the game! Final score is ${scorePlayer} & ${scoreComputer}`
    } else if (scoreComputer === 5 && scoreComputer>scorePlayer) {
        displayScore.textContent = `Sorry, you lose! Better luck next time! Final score is ${scorePlayer} & ${scoreComputer}`
    } 
}

const rock = document.getElementById('rock')
const paper = document.getElementById('paper')
const scissors = document.getElementById('scissors')

var displayScore = document.getElementById('results');




rock.addEventListener('click',function() {
    let computerSelection = computerPlay(play);
    let playerSelection = 'Rock';
    playRound(playerSelection, computerSelection)
    results(scorePlayer, scoreComputer)
})

paper.addEventListener('click',function(){
    let computerSelection = computerPlay(play);
    let playerSelection = 'Paper';
    playRound(playerSelection, computerSelection)
    results(scorePlayer, scoreComputer)
})
scissors.addEventListener('click',() => {
    let computerSelection = computerPlay(play);
    let playerSelection = 'Scissors';
    playRound(playerSelection, computerSelection)
    results(scorePlayer, scoreComputer)
})


results();