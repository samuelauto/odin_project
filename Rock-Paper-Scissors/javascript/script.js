
let humanScore = 0;
let computerScore = 0;
let humanSelection;
let computerSelection;
let buttonId;
let iterator = 0;
const buttons = document.querySelectorAll("button");

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
            case "1": humanSelection = 'rock';
                      iterator++;
                      playRound();
            case "2": humanSelection = "paper";
                      iterator++;
                      playRound();
            case "3": humanSelection = "scissors";
                      iterator++;
                      playRound();
        }
    });
});


function playRound(){

    computerSelection = getComputerChoice()
    humanSelection = humanSelection.toLowerCase()

    if (humanSelection === "rock"){
        switch(computerSelection){
            case "rock": alert("Empate")
            case "paper": computerScore++
                          alert("La computadora escogio papel, gana la computadora")
            case "scissors": humanScore++
                             alert("La computadora escogio tijeras,ganaste")
        }
    }
    else if(humanSelection === "paper"){
        switch(computerSelection){
            case "paper": alert("Empate")
            case "scissors": computerScore++
                             alert("La computadora escogio tijera, gana la computadora")
            case "rock": humanScore++
                         alert("La computadora escogio piedra, ganaste")
        }
    }
    else{
        switch(computerSelection){
            case "scissors": alert("Empate")
            case "rock": computerScore++
                         alert("La computadora escogio tijera, gana la computadora")
            case "paper": humanScore++
                          alert("La computadora escogio papel, ganaste")
        }
    }

    if(iterator === 5){
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
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         console.log(playRound(humanSelection,computerSelection))   
//     }
//     if (humanScore > computerScore){
//         alert("Felicidades eres el ganador con "+humanScore.toString()+" puntos"
//     }
//     else if(humanScore<computerScore){
//         alert("Oh, te ha ganado la computadora con "+computerScore.toString()+" puntos"
//     }
//     else{
//         alert("Han quedado empatados con: "+humanScore.toString()+" puntos"
//     }

// }

