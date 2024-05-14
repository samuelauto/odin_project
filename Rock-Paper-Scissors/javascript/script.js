
let humanScore = 0;
let computerScore = 0;
let computerSelection;
let buttonId;
let iterator = 0;
const buttons = document.querySelectorAll("button");


//LOGICA DE SELECCION DE LA COMPUTADORA
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


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        switch(button.id){
            case "1": playRound("rock");
                      break;
            case "2": playRound("paper");
                      break;
            case "3": playRound("scissors")
                      break;
        }
    });
});


function playRound(humanSelection){
    iterator++

    //LOGICA DE SOLAMENTE JUGAR 5 RONDAS
    if(iterator == 5){
        iterator = 0
        humanPoints = humanScore
        computerPoints = computerScore
        humanScore = 0
        computerScore = 0
        if (humanPoints > computerPoints){
            alert("Felicidades eres el ganador con "+ humanPoints.toString()+" puntos")
        }
        else if(humanScore<computerPoints){
            alert("Oh, te ha ganado la computadora con "+ computerPoints.toString()+" puntos")
        }
        else{
            alert("Han quedado empatados con: "+humanPoints.toString()+" puntos")
        }        
    }

    //LOGICA DEL JUEGO
    else{
        computerSelection = getComputerChoice()
        humanSelection = humanSelection.toLowerCase()

        if (humanSelection == "rock"){
            switch(computerSelection){
                case "rock": alert("Empate")
                            break;
                case "paper": computerScore++
                            alert("La computadora escogio papel, gana la computadora")
                            break;
                case "scissors": humanScore++
                                alert("La computadora escogio tijeras,ganaste")
                                break;
            }
        }
        else if(humanSelection == "paper"){
            switch(computerSelection){
                case "paper": alert("Empate")
                            break;
                case "scissors": computerScore++
                                alert("La computadora escogio tijera, gana la computadora")
                                break;
                case "rock": humanScore++
                            alert("La computadora escogio piedra, ganaste")
                            break;
            }
        }
        else{ //humanSelection = scissors
            switch(computerSelection){
                case "scissors": alert("Empate")
                                break;
                case "rock": computerScore++
                            alert("La computadora escogio piedra, gana la computadora")
                            break;
                case "paper": humanScore++
                            alert("La computadora escogio papel, ganaste")
                            break;
            }
        }
    }   
}
