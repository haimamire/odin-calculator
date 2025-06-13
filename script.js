let currentOperation = {
    firstNumber: "",
    operator: "",
    secondNumber: ""
}

const displayDiv = document.querySelector(".display");

// Math buttons selectors
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector("#equal-button");


// Basic operations
function sum(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function substract(a, b) {
    return parseFloat(a) - parseFloat(b);
}
function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}
function divide(a, b) {
    if (b == 0) return "BRUH";
    return Math.round((parseFloat(a) / parseFloat(b)) * 100) / 100;
}

function isOperationEmpty() {
    for (const key in currentOperation) {
        if (currentOperation[key] === "") return true;
    }
    return false;
}

function display(displayContent) {
    displayDiv.textContent += displayContent;
}
function clearDisplay() {
    displayDiv.textContent = "";
}

// Event listeners
numberButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => {
            if (currentOperation.firstNumber === "" || currentOperation.operator === "") {
                currentOperation.firstNumber += e.target.id;

            } else {
                currentOperation.secondNumber += e.target.id;
            }
            display(e.target.id);
        }
    )
});

operatorButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => {
            if (currentOperation.firstNumber !== "" && currentOperation.operator === "") {
                currentOperation.operator = e.target.textContent;

                display(e.target.textContent);
            }
        }
    )
});

equalButton.addEventListener(
    "click",
    (e) => {
        if (!isOperationEmpty()) {
            let firstNumber = currentOperation.firstNumber;
            let operator = currentOperation.operator;
            let secondNumber = currentOperation.secondNumber;
            let result;

            switch(operator) {
                case "+":
                    result = sum(firstNumber, secondNumber)
                    break;
                case "-":
                    result = substract(firstNumber, secondNumber);
                    break;
                case "*":
                    result = multiply(firstNumber, secondNumber);
                    break;
                case "/":
                    result = divide(firstNumber, secondNumber);
                    break;
            }
            clearDisplay();
            display(result);
        }
    }
)