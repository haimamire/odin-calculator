const displayDiv = document.querySelector(".display");

// Numbers
const button1 = document.querySelector("#one");

// Operators
const sumButton = document.querySelector("#sum-button")

const equalButton = document.querySelector("#equal-button");

let currentOperation = {
    firstNumber: undefined,
    operator: "",
    secondNumber: undefined
}

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

function displayResult(displayContent) {
    displayDiv.textContent = displayContent;
}


// Save first number and operator when an operator button is pressed
sumButton.addEventListener(
    "click",
    (e) => {
        if (currentOperation.firstNumber === undefined) {
            alert("undefined");
        } else {
            currentOperation.operator = "+";
        }
        console.table(currentOperation);
    }
)
    // If empty return message and clear everything
// When = button is pressed, save second number and call operate function
    // If empty return just first number
// Switch case and call respective operation functions
// Return value, call displayResult function
