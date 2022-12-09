let winner

class player {
    constructor(name, move) {
        this.name = name;
        this.move = move;
    }
}

class score {
    constructor() {
        this.scorenumber = 0
    }
}


let score1 = new score()
let score2 = new score()

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
        increasescore()
    } else if (person1.move == "Rock" && person2.move =="Scissor") {
        winner = "Player 1"
        result.innerHTML = brk + wa + winner
        player1won.play()
        increasescore()

    } else if (person1.move == "Paper" && person2.move =="Rock") {
        winner = "Player 2"
        result.innerHTML = brk + wa + winner
        increasescore()

    } else if (person1.move == "Paper" && person2.move =="Scissor") {
        winner = "Player 2"
        result.innerHTML = brk + wa + winner
        increasescore()

    } else if (person1.move == "Scissor" && person2.move =="Rock") {
        winner = "Player 2"
        result.innerHTML = brk + wa + winner
        increasescore()

    } else if (person1.move == "Scissor" && person2.move =="Paper") {
        winner = "Player 1"
        result.innerHTML = brk + wa + winner
        increasescore()
    }
    return (winner)
}

function increasescore() {
    if (winner == "Player 1") {
        let p1s = document.getElementById('playeronescore')
        score1.scorenumber += 1
        p1s.innerText = score1.scorenumber

    } else if (winner == "Player 2") {
        let p2s = document.getElementById('playertwoscore')
        score2.scorenumber += 1
        p2s.innerText = score2.scorenumber
    }
}




function computerchoice() {  
    let availablechoices = ["Rock", "Paper", "Scissor"]
    let computerchoices = availablechoices[Math.floor(Math.random() * availablechoices.length)]
    return computerchoices
}

let computerplayer = new player("Computer", "Paper")
let hhour = document.getElementById("hour")
let ssecond = document.getElementById("second")
let mminute = document.getElementById("minute")
let hour = 0
let minute = 0
let second = 0
let startcounting = true
let countup = [hour, minute, second]
let timer = async function timer() {
    if (startcounting) {
        second++
        ssecond.innerText = second


        if (second == 60) {
            minute++
            second = 0
            mminute.innerText = minute + ':'
        }

        if (minute == 60) {
            hour++
            minute = 0
            hhour.innerText = hour + ':'
        }

    }

}

let checktimer = new Promise (function(resolve, reject) {
    let x= "Timer Reset"
    let y = "Timer Failed"
    if (startcounting) {
        resolve(x)
    } else {
        reject(y)
    }
})

document.getElementById("reset").addEventListener('click', reset)
function reset() {  
    window.location.reload()
    checktimer.then(
        function(value) {
            window.alert(value +  "\n" + "Click Ok to Start Game")
        }
    ).catch(
        function(value) {
            window.alert(value)
        }
    )
}

setInterval(timer, 1000)




function computerplay() {
    switch (computerplayer.move) {
        case "Rock":
            if (person1.move == "Rock") {
                winner = "Tie"
                console.log(winner)
            } else if (person1.move == "Paper") {
                winner = "Player 1"
                console.log(winner)
            } else if (person1.move == "Scissor") {
                winner = "Computer"
                console.log(winner)
            };

        case "Paper":
            if (person1.move == "Rock") {
                winner = computerplayer.names
                console.log(winner)
            } else if (person1.move == "Paper") {
                winner = "Tie"
                console.log(winner)
            } else if (person1.move == "scissor") {
                winner = "Player 1"
                console.log(winner)
            };


    }
}