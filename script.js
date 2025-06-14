// Current operation
let firstNumber = "";
let operator = "";
let secondNumber = "";

const displayDiv = document.querySelector(".display");
const clearButton = document.querySelector("#clear-button");

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
    if (firstNumber === "" || operator === "" || secondNumber === "") return true;
    return false;
}

function display(content) {
    displayDiv.textContent += content;
}
function clearEverything() {
    firstNumber = "";
    operator = "";
    secondNumber = "";

    displayDiv.textContent = "";
}

// Event listeners
numberButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => {
            const selectedNumber = e.target.id;
            if (firstNumber === "" || operator === "") {
                firstNumber += selectedNumber;

            } else {
                secondNumber += selectedNumber;
            }
            display(selectedNumber);
        }
    )
});

operatorButtons.forEach(button => {
    button.addEventListener(
        "click",
        (e) => {
            const selectedOperator = e.target.textContent;
            if (firstNumber !== "" && operator === "") {
                operator = selectedOperator;

                display(selectedOperator);
            }
        }
    )
});

equalButton.addEventListener(
    "click",
    (e) => {
        if (!isOperationEmpty()) {
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
            clearEverything();
            display(result);

            firstNumber = result.toString();
        }
    }
);

clearButton.addEventListener("click", () => clearEverything());