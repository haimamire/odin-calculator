// Current operation
let firstNumber = "";
let operator = "";
let secondNumber = "";
let result = "";
const errorMsg = "BRUH"

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
    if (b == 0) return errorMsg;
    return Math.round((parseFloat(a) / parseFloat(b)) * 100) / 100;
}

function operate() {
    if (!isOperationIncomplete()) {
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

function displayContent() {
    if (isEmpty(firstNumber)) {
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
        (e) => {
            if (!isEmpty(result)) {
                clearEverything();
                result = "";
            }

            const selectedNumber = e.target.id;
            if (isEmpty(firstNumber) || isEmpty(operator)) {
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
            if (!isEmpty(result) && result !== errorMsg) {
                firstNumber = result.toString();
                result = "";
            }

            const selectedOperator = e.target.textContent;
            if (!isEmpty(firstNumber) && isEmpty(operator)) {
                operator = selectedOperator;

                displayContent();
            }
        }
    )
});

decimalButton.addEventListener(
    "click",
    () => {
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
);

equalButton.addEventListener("click", () => operate());

backspaceButton.addEventListener("click", () => clearLastInput());

clearButton.addEventListener("click", () => clearEverything());