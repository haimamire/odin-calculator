const displayDiv = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");

// Operator selectors
const operatorButtons = document.querySelectorAll(".operator");

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

function displayResult(displayContent) {
    displayDiv.textContent = displayContent;
}

numberButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => {
            if (currentOperation.firstNumber === "" || currentOperation.operator === "") {
                currentOperation.firstNumber += e.target.id;
            } else {
                currentOperation.secondNumber += e.target.id;
            }
        }
    )
});


// Save first number and operator when an operator button is pressed
operatorButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => {
            if (currentOperation.firstNumber !== "" && currentOperation.operator === "") {
                currentOperation.operator = e.target.textContent;
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

            switch(operator) {
                case "+":
                    displayResult(
                        sum(firstNumber, secondNumber)
                    );
                    break;
                case "-":
                    displayResult(
                        substract(firstNumber, secondNumber)
                    );
                    break;
                case "*":
                    displayResult(
                        multiply(firstNumber, secondNumber)
                    );
                    break;
                case "/":
                    displayResult(
                        divide(firstNumber, secondNumber)
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
