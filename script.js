const dot = document.querySelector(".dot");

const percent = document.querySelector(".percent");
const multiply = document.querySelector(".multiply");
const add = document.querySelector(".add");
const root = document.querySelector(".root");
const divide = document.querySelector(".divide");
const subtract = document.querySelector(".subtract");
const equals = document.querySelector(".equals");

const screen = document.querySelector("#curr-input");
const buttons = document.querySelectorAll(".buttons");
const inputButtons = document.querySelectorAll(".input-buttons");
const numerical = document.querySelectorAll(".numerical");
const operators = document.querySelectorAll(".operators");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.borderColor = "";
    })
});

numerical.forEach(number => {
    number.addEventListener("click", () => {
        screen.innerText += number.innerText;
        if (screen.innerText.length > 15) return screen.innerText = "Error";
    });
});

let firstOperand = "";
let secondOperand = "";
let operator = "";

// add = function(first)