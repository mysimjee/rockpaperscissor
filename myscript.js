let winner

class player {
    constructor(name, move) {
        this.name = name;
        this.move = move;
    }
}

let person1 = new player("Player 1", "Undecided")
document.getElementById('rock').addEventListener("click", assignrock)
document.getElementById('paper').addEventListener("click", assignpaper)
document.getElementById('scissor').addEventListener("click", assignscissor)


let person2 = new player("Player 2", "Undecided")
document.getElementById('rock2').addEventListener("click", assignrock1)
document.getElementById('paper2').addEventListener("click", assignpaper1)
document.getElementById('scissor2').addEventListener("click", assignscissor1)


function assignrock() {
    let rock = document.getElementById('rock').value
    person1.move = rock
    console.log(person1)
}


function assignpaper() {
    let paper = document.getElementById('paper').value
    person1.move = paper
    console.log(person1)
}

function assignscissor() {
    let scissor = document.getElementById('scissor').value
    person1.move = scissor
    console.log(person1)
}


function assignrock1() {
    let rock1 = document.getElementById('rock').value
    person2.move = rock1
    console.log(person2)
    play()
}


function assignpaper1() {
    let paper1 = document.getElementById('paper').value
    person2.move = paper1
    console.log(person2)
    play()
}

function assignscissor1() {
    let scissor1 = document.getElementById('scissor').value
    person2.move = scissor1
    console.log(person2)
    play()
}
let player1won = document.getElementById('player1won')
player1won.style.visibility = "hidden"
let wa = "Who Win: "
let brk = "<br> <br> "
var result = document.getElementById('whowin')
function play() {
    if (person1.move == person2.move) {
        winner = "Tie"
        result.innerHTML = brk + wa + winner

    } else if (person1.move == "Rock" && person2.move =="Paper") {
        winner = "Player 2"
        result.innerHTML = brk + wa + winner
    } else if (person1.move == "Rock" && person2.move =="Scissor") {
        winner = "Player 1"
        result.innerHTML = brk + wa + winner
        player1won.play()
    } else if (person1.move == "Paper" && person2.move =="Rock") {
        winner = "Player 2"
        result.innerHTML = brk + wa + winner
    } else if (person1.move == "Paper" && person2.move =="Scissor") {
        winner = "Player 2"
        result.innerHTML = brk + wa + winner
    } else if (person1.move == "Scissor" && person2.move =="Rock") {
        winner = "Player 2"
        result.innerHTML = brk + wa + winner
    } else if (person1.move == "Scissor" && person2.move =="Paper") {
        winner = "Player 1"
        result.innerHTML = brk + wa + winner
    }
    return (winner)
}