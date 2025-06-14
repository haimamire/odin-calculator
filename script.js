// Current operation
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";

const displayDiv = document.querySelector(".display");
const backspaceButton = document.querySelector("#backspace-button");
const clearButton = document.querySelector("#clear-button");

// Math buttons selectors
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const decimalButton = document.querySelector("#decimal-button");
const equalButton = document.querySelector("#equal-button");

// Basic operations
function sum(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}
function divide(a, b) {
    if (b == 0) return "BRUH";
    return Math.round((parseFloat(a) / parseFloat(b)) * 100) / 100;
}

function operate() {
    if (!isOperationEmpty()) {
        switch(operator) {
            case "+":
                result = sum(firstNumber, secondNumber)
                break;
            case "-":
                result = subtract(firstNumber, secondNumber);
                break;
            case "*":
                result = multiply(firstNumber, secondNumber);
                break;
            case "/":
                result = divide(firstNumber, secondNumber);
                break;
        }
        clearEverything();
        displayContent();
    }
}

function isOperationEmpty() {
    if (firstNumber === "" || operator === "" || secondNumber === "") return true;
    return false;
}

function displayContent() {
    if (firstNumber === "") {
        displayDiv.textContent = result;
    } else {
        displayDiv.textContent = `${firstNumber}${operator}${secondNumber}`;
    }
}

function clearEverything() {
    firstNumber = "";
    operator = "";
    secondNumber = "";

    displayDiv.textContent = "";
}

function clearLastInput() {
    if (firstNumber === "") return;

    if (operator === "") {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    } else if (secondNumber === "") {
        operator = "";
    } else {
        secondNumber = secondNumber.slice(0, secondNumber.length - 1);
    }
    displayContent();
}

// Event listeners
numberButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => {
            if (result !== "") {
                clearEverything();
                result = "";
            }

            const selectedNumber = e.target.id;
            if (firstNumber === "" || operator === "") {
                firstNumber += selectedNumber;

            } else {
                secondNumber += selectedNumber;
            }
            displayContent();
        }
    )
});

operatorButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => {
            if (result !== "" && result !== "BRUH") {
                firstNumber = result.toString();
                result = "";
            }

            const selectedOperator = e.target.textContent;
            if (firstNumber !== "" && operator === "") {
                operator = selectedOperator;

                displayContent();
            }
        }
    )
});

equalButton.addEventListener("click", () => operate());

backspaceButton.addEventListener("click", () => clearLastInput());

clearButton.addEventListener("click", () => clearEverything());