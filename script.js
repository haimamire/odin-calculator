const body = document.querySelector("body");
const displayDiv = document.querySelector(".display");

// Current operation variables
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";
const errorMsg = "BRUH"

// Button selectors
const numberButtons = document.querySelectorAll(".number");
const decimalButton = document.querySelector("#decimal-button");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal-button");
const backspaceButton = document.querySelector("#backspace-button");
const clearButton = document.querySelector("#clear-button");

// Checker functions
function isEmpty(value) {
    return value === "" ? true : false;
}
function isOperationIncomplete() {
    if (firstNumber === "" || operator === "" || secondNumber === "") return true;
    return false;
}
function containsDecimal(number) {
    return number
        .split("")
        .includes(".");
}

// Basic operation functions
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
    if (b == 0) return errorMsg;
    return Math.round((parseFloat(a) / parseFloat(b)) * 100) / 100;
}

// Main functions
function addNumber(selectedNumber) {
    if (!isEmpty(result)) {
        clearEverything();
        result = "";
    }

    if (isEmpty(firstNumber) || isEmpty(operator)) {
        firstNumber += selectedNumber;

    } else {
        secondNumber += selectedNumber;
    }
    displayContent();
}
function addDecimal() {
    if (!isEmpty(firstNumber)) {
        if (isEmpty(operator) && !containsDecimal(firstNumber)) {
            firstNumber += ".";
            displayContent();
        } else if (!isEmpty(operator) && !isEmpty(secondNumber) && !containsDecimal(secondNumber)) {
            secondNumber += ".";
            displayContent();
        }
    }
}
function addOperator(selectedOperator) {
    if (!isEmpty(result) && result !== errorMsg) {
        firstNumber = result.toString();
        result = "";
    }
    if (!isEmpty(firstNumber) && isEmpty(operator)) {
        operator = selectedOperator;

        displayContent();
    }
}
function operate() {
    if (!isOperationIncomplete()) {
        switch(operator) {
            case "+":
                result = sum(firstNumber, secondNumber);
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
        result = result.toString();
        clearEverything();
        displayContent();
    }
}

// Display and clear functions
function displayContent() {
    let content = isEmpty(firstNumber) ? result : `${firstNumber}${operator}${secondNumber}`;
    if (content.length > 16) {
        content = content.substring(0, 16) + "…";
    }
    displayDiv.textContent = content;
}
function clearEverything() {
    firstNumber = "";
    operator = "";
    secondNumber = "";

    displayDiv.textContent = "";
}
function clearLastInput() {
    if (isEmpty(firstNumber)) return;

    if (isEmpty(operator)) {
        firstNumber = firstNumber.slice(0, firstNumber.length - 1);
    } else if (isEmpty(secondNumber)) {
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
        (e) => addNumber(e.target.id)
    )
});

operatorButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => addOperator(e.target.textContent)
    )
});

decimalButton.addEventListener("click",() => addDecimal());

equalButton.addEventListener("click", () => operate());

backspaceButton.addEventListener("click", () => clearLastInput());

clearButton.addEventListener("click", () => clearEverything());

// Keyboard event listeners
body.addEventListener(
    "keydown",
    (e) => {
        if (e.key !== " ") {
            if (0 <= +e.key && +e.key <= 9) {
                addNumber(e.key);
            } else if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
                addOperator(e.key);
            } else {
                switch (e.key) {
                    case ".":
                        addDecimal();
                        break;
                    case "Enter":
                        operate();
                        break;
                    case "Backspace":
                        clearLastInput();
                        break;
                    case "Escape":
                        clearEverything();
                        break;
                }
            }
        }
    }
)