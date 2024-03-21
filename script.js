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

const clearBtn = document.querySelector(".clear");
const deleteBtn = document.querySelector(".delete");

const currInput = document.querySelector("#curr-input");
const currOperation = document.querySelector("#curr-operation")

let firstOperand = "";
let secondOperand = "";
let score = "";
let currOperator = currOperation.textContent.slice(this.length - 1).toString();

errorReset = function() {
    if (currInput.innerText.includes("Error") 
    || currInput.innerText.includes("NaN")) {
        currInput.innerText = "";
        currOperation.innerText = "";
        currOperator = null;
    }
}

inputTooLongError = function (x) {
    if (x.innerText.length > 15) currInput.innerText = "Error";    
}

numerical.forEach(number => {
    number.addEventListener("click", () => {
        errorReset();
        if (currInput.innerText === "0"
        || currInput.innerText === "00") currInput.innerText = "";
        currInput.innerText += number.innerText;
        inputTooLongError(currInput);
    });    
});

dot.addEventListener("click", () => {
    errorReset();
    if (!currInput.innerText.includes(".")) {
        return currInput.innerText += dot.innerText; 
    }   
});

operators.forEach(operator => {
    operator.addEventListener("click", () => {
        errorReset();
        currOperator = operator.innerText;
        let botScreenValue = currInput;
        if (currInput.innerText === "Error") currInput.innerText = "";
        if (currInput.innerText !== "") {
            currOperation.innerText = botScreenValue.innerText + " " + currOperator;
        } else {
            x = currOperation.innerText; 
            currOperation.innerText = x.slice(0, -1) + currOperator; 
        }
        if (currOperation.innerText !== "") currInput.innerText = "";

        // if (currOperation.innerText.slice(this.length -1) !== ""
        // || currOperation.innerText.slice(this.length -1) !== " "
        // || currOperation.innerText.slice(this.length -1) === NaN){
        //     let x = currInput.innerText;
        //     firstOperand = +(currOperation.textContent.slice(0, -2));
        //     secondOperand = +(x);
        //     score = operate(currOperator);
        //     currOperation.innerText = currInput.innerText;
        //     currInput.innerText = currOperation.innerText;
        // }
    });
});

const oper_Percentage = function(firstOperand, secondOperand) {
    return (firstOperand / 100) * secondOperand;}
const oper_Root = function(firstOperand, secondOperand) {
    return firstOperand ** (1 / secondOperand);}
const oper_Add = function(firstOperand, secondOperand) {
    return firstOperand + secondOperand;}
const oper_Subtract = function(firstOperand, secondOperand) {
    return firstOperand - secondOperand;}
const oper_Multiply = function(firstOperand, secondOperand) {
    return firstOperand * secondOperand;}
const oper_Divide = function(firstOperand, secondOperand) {
    return secondOperand === 0? alert("Can't divide by zero!") : firstOperand / secondOperand;}

const operate = function(currOperator) {
    if (currOperator === "%") return oper_Percentage(firstOperand, secondOperand);
    if (currOperator === "√") return oper_Root(firstOperand, secondOperand);
    if (currOperator === "+") return oper_Add(firstOperand, secondOperand);
    if (currOperator === "-") return oper_Subtract(firstOperand, secondOperand);
    if (currOperator === "×") return oper_Multiply(firstOperand, secondOperand);
    if (currOperator === "÷") return oper_Divide(firstOperand, secondOperand);
}

clear = clearBtn.addEventListener("click", () => {
    currOperation.innerText = "";
    currInput.innerText = "0";
    currOperator.innerText = null;
});

backspace = deleteBtn.addEventListener("click", () => {
    if (currInput.innerText.includes("Error")
    || currInput.innerText.includes("NaN")
    || currInput.innerText === ""
    || currInput.innerText === "0"
    || currInput.innerText.length === 1) {
        currInput.innerText = "0";
    } else {
        currInput.innerText = currInput.innerText.slice(0, -1);
    }
});

singleOperation = equals.addEventListener("click", () => {
    errorReset();
    if (currOperation.innerText === "") {
        currOperation.innerText = currInput.innerText;
        currOperation.innerText += " =";
    } else if (!currOperation.innerText.includes("=")) {
        let botScreenValue = currInput.innerText;
        firstOperand = +(currOperation.textContent.slice(0, -2));
        secondOperand = +(botScreenValue);
        score = operate(currOperator);
        currOperation.innerText += " " + botScreenValue + " =";
    }
    currInput.innerText = Math.round(score *10000) / 10000;
    inputTooLongError(currInput);
});

