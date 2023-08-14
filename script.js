let currentInput = '';
let currentOperator = '';
let prevInput = '';
let isResultShown = false;

function calculate() {
    const num1 = parseFloat(prevInput);
    const num2 = parseFloat(currentInput);

    if (isNaN(num1) || isNaN(num2)) {
        return 'Error';
    }

    switch (currentOperator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return 'Error';
            }
            return num1 / num2;
        default:
            return 'Error';
    }
}

function onButtonClick(value) {
    if (value === '=') {
        const result = calculate();
        document.getElementById('result').value = result;
        isResultShown = true;
    } else if (value === 'C') {
        currentInput = '';
        currentOperator = '';
        prevInput = '';
        document.getElementById('result').value = '';
    } else if (['+', '-', '*', '/'].includes(value)) {
        if (currentInput !== '') {
            prevInput = currentInput;
            currentInput = '';
            currentOperator = value;
            isResultShown = false;
        }
    } else {
        if (isResultShown) {
            prevInput = document.getElementById('result').value;
            currentInput = '';
            isResultShown = false;
        }
        currentInput += value;
        document.getElementById('result').value = currentInput;
    }
}

const buttons = document.querySelectorAll('#buttons button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        onButtonClick(button.textContent);
    });
});
