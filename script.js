const displayDiv = document.querySelector(".display");

// Number selectors
const oneButton = document.querySelector("#one");

// Operator selectors
const sumButton = document.querySelector("#sum-button")

const equalButton = document.querySelector("#equal-button");

let currentOperation = {
    firstNumber: undefined,
    operator: undefined,
    secondNumber: undefined
}

// Basic operations
function sum(a, b) {
    return a + b;
}
function substract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) return "BRUH";
    return Math.round((a / b) * 100) / 100;
}

function isOperationEmpty() {
    for (const key in currentOperation) {
        if (currentOperation[key] === undefined) return true;
    }
    return false;
}

function displayResult(displayContent) {
    displayDiv.textContent = displayContent;
}

oneButton.addEventListener(
    "click",
    (e) => {
        if (currentOperation.firstNumber === undefined) {
            currentOperation.firstNumber = 1;
        } else {
            currentOperation.secondNumber = 1;
        }
    }
)

// Save first number and operator when an operator button is pressed
sumButton.addEventListener(
    "click",
    (e) => {
        if (currentOperation.firstNumber === undefined) {

        } else {
            currentOperation.operator = "+";
        }
    }
)

console.log(isOperationEmpty());

// equalButton.addEventListener(
//     "click",
//     (e) => {
//         if ()
//     }
// )
    // If empty return message and clear everything
// When = button is pressed, save second number and call operate function
    // If empty return just first number
// Switch case and call respective operation functions
// Return value, call displayResult function
