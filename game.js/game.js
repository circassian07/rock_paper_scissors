function computerPlay(play) {
    return play[Math.floor(Math.random()*play.length)]
}

let play = ['Rock', 'Paper', 'Scissors'];
console.log(computerPlay(play));