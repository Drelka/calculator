const dot = document.querySelector(".dot");

const percent = document.querySelector(".percent");
const multiply = document.querySelector(".multiply");
const add = document.querySelector(".add");
const root = document.querySelector(".root");
const divide = document.querySelector(".divide");
const subtract = document.querySelector(".subtract");
const equals = document.querySelector(".equals");

const buttons = document.querySelectorAll(".buttons");
const inputButtons = document.querySelectorAll(".input-buttons");
const numerical = document.querySelectorAll(".numerical");
const operators = document.querySelectorAll(".operators");

const currInput = document.querySelector("#curr-input");
const currOperation = document.querySelector("#curr-operation")

let firstOperand = "";
let secondOperand = "";
let currOperator = null;
let score = "";

errorReset = function() {
    if (currInput.innerText === "Error") currInput.innerText = "";
}

inputTooLongError = function (x) {
    if (x.innerText.length > 15) currInput.innerText = "Error";    
}

numerical.forEach(number => {
    number.addEventListener("click", () => {
        errorReset();
        currInput.innerText += number.innerText;
        inputTooLongError(currInput);
    });    
});

dot.addEventListener("click", () => {
    if (!currInput.innerText.includes(".")) {
        return currInput.innerText += dot.innerText; 
    }   
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        currOperator = operator.innerText;
        let botScreenValue = currInput;
        if (currInput.innerText !== "") {
            console.log(currInput.innerText.toString());
            currOperation.innerText = botScreenValue.innerText + " " + currOperator;
        } else {
            x = currOperation.innerText; 
            currOperation.innerText = x.slice(0, -1) + currOperator; 
        }
        if (currOperation.innerText !== "") currInput.innerText = "";
    });
});

const percentageOperation = function(firstOperand, secondOperand) {
    return (firstOperand / 100) * secondOperand;
}    

const rootOperation = function(firstOperand, secondOperand) {
    return firstOperand ** (1 / secondOperand);
}    

const addOperation = function(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}    

const subtractOperation = function(firstOperand, secondOperand) {
    return firstOperand - secondOperand;
}    

const multiplyOperation = function(firstOperand, secondOperand) {
    return firstOperand * secondOperand;
}    

const divideOperation = function(firstOperand, secondOperand) {
    return secondOperand === 0? alert("Can't divide by zero!") : firstOperand / secondOperand;
}    


const operate = function(currOperator) {
    if (currOperator === "%") return percentageOperation(firstOperand, secondOperand);
    if (currOperator === "√") return rootOperation(firstOperand, secondOperand);
    if (currOperator === "+") return addOperation(firstOperand, secondOperand);
    if (currOperator === "-") return subtractOperation(firstOperand, secondOperand);
    if (currOperator === "×") return multiplyOperation(firstOperand, secondOperand);
    if (currOperator === "÷") return divideOperation(firstOperand, secondOperand);
}

singleOperation = equals.addEventListener("click", () => {
    
    if (!currOperation.innerText.includes("=")) {
        let botScreenValue = currInput.innerText;
        
        firstOperand = +(currOperation.textContent.slice(0, -2));
        secondOperand = +(botScreenValue);
        currOperator = currOperation.textContent.slice(this.length - 1).toString();
        
        score = operate(currOperator);
        currOperation.innerText += " " + botScreenValue + " =";
    }
    currInput.innerText = Math.round(score *10000) / 10000;
    inputTooLongError(currInput);
});