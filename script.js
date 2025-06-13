const displayDiv = document.querySelector(".display");

// Number selectors
const oneButton = document.querySelector("#one");

// Operator selectors
const sumButton = document.querySelector("#sum-button")

const equalButton = document.querySelector("#equal-button");

let currentOperation = {
    firstNumber: "",
    operator: "",
    secondNumber: ""
}

// Basic operations
function sum(a, b) {
    return parseFloat(a) + parseFloat(b);
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
        if (currentOperation[key] === "") return true;
    }
    return false;
}

function displayResult(displayContent) {
    displayDiv.textContent = displayContent;
}

oneButton.addEventListener(
    "click",
    (e) => {
        if (currentOperation.firstNumber === ""
            || currentOperation.operator === "") {
            currentOperation.firstNumber += "1";
        } else {
            currentOperation.secondNumber += "1";
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


equalButton.addEventListener(
    "click",
    (e) => {
        if (isOperationEmpty()) {

        } else {
            let firstNumber = currentOperation.firstNumber;
            let operator = currentOperation.operator;
            let secondNumber = currentOperation.secondNumber;

            switch(operator) {
                case "+":
                    displayResult(
                        sum(firstNumber, secondNumber)
                    );
                    break;
            }

        }
    }
)
    // If empty return message and clear everything
// When = button is pressed, save second number and call operate function
    // If empty return just first number
// Switch case and call respective operation functions
// Return value, call displayResult function
