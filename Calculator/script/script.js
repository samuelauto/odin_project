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
    if(firstOperand === null){
        if(displayValue === 0 || displayValue === '0'){
            displayValue = number;
            updateDisplay();
        }
        //2do numero luego de decir que operacion fue
        else if(displayValue===firstNumber){
        displayValue = number;
        updateDisplay();
        }
        else{
        displayValue+=number;
        updateDisplay();
        }
    }
    else{

    }
}



function operation(x,y,op){
    switch(op){
        case "+": return x+y;
        case "-": return x-y;
        case "*": return x*y;
        case "/": if(y === 0){return "Invalid"} else{return x/y}
    }
}