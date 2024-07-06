function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b === 0) return 'Error: Divisionby zero';
    return a / b;
}

function multiply(a, b) {
    return a * b;
}


let num1 = "";
let num2 = "";
let operator = "";
let displayValue = "";

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '/':
            return divide(num1, num2);
        case 'x':
            return multiply(num1, num2);
        default:
            return null;
    }
}
const display = document.querySelector('#expression');

function appendDisplay(input) {
    display.value += input
}

function resultDisplay(value){
    document.querySelector('#result').value = value;
}

function clearDisplay() {
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "";
    appendDisplay(" ");
    resultDisplay("0")
    display.value = " "
}

function calculate() {
    if (num1 !== "" && operator !== "" && num2 !== "") {
        const result = operate(operator, parseFloat(num1), parseFloat(num2));
        displayValue = result.toString();
        resultDisplay(displayValue);
        num1 = displayValue;
        operator = "";
        num2 = "";
    }
}

// numbers
document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', () => {
        if (operator === "") {
            num1 += button.innerText;
        } else {
            num2 += button.innerText;
        }
        displayValue = operator === "" ? num1 : num2;
        appendDisplay(displayValue);
    });
});

// operator
document.querySelectorAll('.operator').forEach(button => {
    button.addEventListener('click', () => {
        if (num1 !== "" && num2 === "") {
            operator = button.innerText;
            displayValue = operator;
            appendDisplay(displayValue)
        } else if (num1 !== "" && num2 !== "") {
            calculate();
            operator = button.innerText;
            displayValue = num1 + " " + operator + " ";
            appendDisplay(displayValue)

        }
    });
});

document.querySelector('.equals').addEventListener('click', calculate);
document.querySelector('.clear').addEventListener('click', clearDisplay);
