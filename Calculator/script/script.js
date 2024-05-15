//Orden
//1. Obtener los valores de los botones 
//2. Ilustrar el numero tocado en el display
//2. Obtener la operacion matematica a realizar
//3. Realizar Operacion
//4. Ilustrar en el display el resultado
//5. A;adido, la concatenacion de operaciones me va dando el resultado de cada operacion

let result = 0;
let displayValue = 0;
let firstNumber = null;
let secondNumber = null;
let firstOperand = null;
let secondOperand = null;
const buttons = document.querySelectorAll("button");

function updateDisplay(){
   const display = document.querySelector(".display")
   display.innerText = displayValue
   if(displayValue > 9){
    display.innerText = displayValue.substring(0,9);
   }
}

updateDisplay();

buttons.forEach((button) => {
    button.addEventListener("click", function(){
        if(button.classList.contains('number')){
            inputNumber(button.value);
        }
        else{
            inputOperand(button.value);
        }
    });
});

function inputNumber(number) {
    //1er numero
    if(firstOperand === null){
        if(displayValue === 0 || displayValue === '0'){
            displayValue = number;
            updateDisplay();
        }
        //Concatenacion de Operacion,el result pasa a ser firstNumber
        else if(displayValue===firstNumber){
        displayValue = number;
        updateDisplay();
        }
        else{
        //1er numero de mas de una cifra
        displayValue+=number;
        updateDisplay();
        }
    }
    else{
        if(displayValue === firstNumber){
            //2do numero
            displayValue = number;
            updateDisplay();
        }
        else{
            //2do numero de mas de una cifra
            displayValue+=number;
            updateDisplay();
        }
    }
}

function inputOperand(operand){
    if(operand === "back" || operand === "clear" || operand === "sign" || operand === "dot" || operand === "equal"){
        specialButton(operand);
    }
    if (firstOperand === null){
        firstOperand = operand;
        firstNumber = displayValue;
    }
    //logica de concatenacion de operaciones
    else if(firstOperand !== null && secondOperand === null){
        secondOperand = operand;
        secondNumber = displayValue;
        result = operation(Number(firstNumber),Number(secondNumber),firstOperand);
        console.log(result)
        //displayValue = roundResult(result,15).toString();
        displayValue = result;
        updateDisplay();
        firstNumber = displayValue;
        //Hasta ese punto se obtuvo el resultado de la primera operacion
    }
    else if(firstOperand !== null && secondOperand !== null){
        secondNumber = displayValue;
        result = operation(Number(firstNumber),Number(secondNumber),secondOperand);
        displayValue = roundResult(result,15).toString();
        updateDisplay();
        firstNumber = displayValue;
    }
    else{
        displayValue = '0';
        updateDisplay();
    }

}


function specialButton(operand){
    return "0";
}

function operation(x,y,op){
    switch(op){
        case "+": return x+y;
        case "-": return x-y;
        case "*": return x*y;
        case "/": if(y === 0){return "Invalid"} else{return x/y};
        case "%": return (x*y)/100;
    }
}

function roundResult(num,places){
    return parseFloat(Math.round(num + 'e' + places) + 'e-' + places);
}