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

// console.log(divide(10, 3));