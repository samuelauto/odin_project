
let humanScore = 0
let computerScore = 0
let humanSelection
let computerSelection

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3)
    if (choice === 0){
        return "rock"
    }
    else if(choice === 1){
        return "paper"
    }
    else {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Seleccione su opcion(rock,paper,scissors")
    selection = choice.toLowerCase()
    while (true){
        if (selection !=="rock" && selection!=="paper" && selection !=="scissors"){
            choice = prompt("eligio mal(rock,paper,scissors")
        }
        else{
            break
        }
    }
    return choice
}

function playRound(humanSelection,computerSelection){

    humanSelection = getHumanChoice()
    computerSelection = getComputerChoice()
    humanSelection = humanSelection.toLowerCase()

    if (humanSelection === "rock"){
        switch(computerSelection){
            case "rock": return "Empate"
            case "paper": computerScore++
                          return "La computadora escogio papel, gana la computadora"
            case "scissors": humanScore++
                             return "La computadora escogio tijeras,ganaste"
        }
    }
    else if(humanSelection === "paper"){
        switch(computerSelection){
            case "paper": return "Empate"
            case "scissors": computerScore++
                             return "La computadora escogio tijera, gana la computadora"
            case "rock": humanScore++
                         return "La computadora escogio piedra, ganaste"
        }
    }
    else{
        switch(computerSelection){
            case "scissors": return "Empate"
            case "rock": computerScore++
                         return "La computadora escogio tijera, gana la computadora"
            case "paper": humanScore++
                          return "La computadora escogio papel, ganaste"
        }
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(humanSelection,computerSelection))   
    }
    if (humanScore > computerScore){
        return "Felicidades eres el ganador con "+humanScore.toString()+" puntos"
    }
    else if(humanScore<computerScore){
        return "Oh, te ha ganado la computadora con "+computerScore.toString()+" puntos"
    }
    else{
        return "Han quedado empatados con: "+humanScore.toString()+" puntos"
    }

}

console.log(playGame())
