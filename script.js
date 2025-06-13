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

let userOperation = {
    firstNumber: 0,
    operator: "",
    secondNumber: 0
}

// console.log(divide(10, 3));

// Save first number and operator when an operator button is pressed
    // If empty return message and clear everything
// When = button is pressed, save second number and call operate function
    // If empty return just first number
// Switch case and call respective operation functions
// Display result

