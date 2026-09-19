
const inputField = document.getElementById('currentNumber');
const negativeOperator = '-'
let otherValue = 0;

let rightNumber = 0;
let leftNumber = 0;


function disableDot() {
    document.getElementById('decimal-dot').disabled = true;
    populate('.');
}

function populate(toPopulate) {
    inputField.value += toPopulate;
    return inputField;

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

    const findOperation = inputField.value.substring(1);
    operationIndex = findOperation.indexOf('-');
    if (operationIndex > -1 && operationIndex !== findOperation.length-1) {
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
    } 
    if (count === 2) {
        if(inputField.value.startsWith('-')) {
            return inputField.value.lastIndexOf('-')
        }
        return inputField.value.indexOf('-');
    }
    return undefined;
}

function clearCalculation() {
    inputField.value = '';
    document.getElementById('decimal-dot').disabled = false;
}

function deleteLast() {
    inputField.value = inputField.value.slice(0, -1);
}

function adition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
    
}

function division(num1, num2) {
    if (num2 === 0) {
        alert("Error: Division by zero is not allowed.");
        num1 = 0;
        num2 = 0;
        inputField.value = '';
        return 0;
    }
    return num1 / num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
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
        if (num1 === '' || num1 === undefined) {
            num1 = 0;
        }
        const num2 = parseFloat(parts[1]);
        let result;

        switch (operation) {
            case '+':
                result = adition(num1, num2);
                break;
            case '-':
                result = subtraction(num1, num2);
                break;
            case '*':
                result = multiplication(num1, num2);
                break;
            case '/':
                result = division(num1, num2);
                break;
            default:
                alert("Error: Invalid operation.");
                return;
        }

        inputField.value = '';

        if(!Number.isInteger(result)){
            result = result.toFixed(2);
        }

        populate(result);
    }
}