let result;
const inputField = document.getElementById('currentNumber');
const negativeOperator = '-'
let otherValue = 0;

let rightNumber = 0;
let leftNumber = 0;

function isDecimal(input) {
    countCharInString(input, '.');
    return input.includes('.');
}

function disableDot() {
    document.getElementById('decimal-dot').disabled = true;
    populate('.');
}

function updateNumber(number) {
    populate(number);

    const operation = getOperationFromInputField();
    
    if(operation !== undefined && operation !== '-') {
        const parts = inputField.value.split(operation);
        rightNumber = parseFloat(parts[1]);
        leftNumber = parseFloat(parts[0]);
    }
}

function populate(toPopulate) {
    if(countCharInString(inputField.value, '.')>2) {
        return
    }

    if(inputField.value !== null) {
        inputField.value += toPopulate;
        return inputField;
    }
}

function getOperationFromInputField() {
    let operationIndex = inputField.value.indexOf('+');
    if (operationIndex > -1) {
        return '+';
    }
    operationIndex = inputField.value.indexOf('*');
    if (operationIndex > -1) {
        return '*';
    }
    operationIndex = inputField.value.indexOf('/');
    if (operationIndex > -1) {
        return '/';
    }
    operationIndex = inputField.value.indexOf('-');
    if (operationIndex > -1) {
        return '-';
    }
    return undefined;
}

function operate(operator) {
    if(getOperationFromInputField() !== undefined) {
        calculate();
    }
    populate(operator);
    document.getElementById('decimal-dot').disabled = false;
}

function countCharInString(string, char) {
    let countOfChar = 0;

    countOfChar = string.split(char).length - 1;

    return countOfChar;
}

function getIndexOfNegative() {
    let count = countCharInString(inputField.value, '-')
    
    if(count === 1) {
        return inputField.value.indexOf('-');
    }
    if(count === 3) {
        return inputField.value.lastIndexOf('-')-1;
    } if (count === 2) {
        if(inputField.value.startsWith('-')) {
            return inputField.value.lastIndexOf('-')
        }
        return inputField.value.indexOf('-');
    }

    return undefined;
}

function clearCalculation() {
    inputField.value = '';
}

function deleteLast() {
    inputField.value = inputField.value.slice(0, -1);
}

function calculate() {

    if(inputField.value !== '') {
        const operation = getOperationFromInputField();
        if (operation === undefined) {
            return
        }

        let indexOf = inputField.value.indexOf(operation);
        if(operation === '-') {
            indexOf = getIndexOfNegative();
        }

        const parts = [inputField.value.slice(0, indexOf), inputField.value.slice(indexOf+1)] 
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[1]);
        let result;

        // Perform the calculation based on the selected operation
        switch (operation) {
            case '+':
                result = num1 + num2
                break;
            case '-':
                result = num1 - num2
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    alert("Error: Division by zero is not allowed.");
                    inputField.value = '';
                    return;
                }
                break;
            default:
                alert("Error: Invalid operation.");
                return;
        }
        inputField.value = '';
        populate(result);
    }
}