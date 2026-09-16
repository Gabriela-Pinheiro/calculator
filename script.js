let result;
const inputField = document.getElementById('currentNumber');
let otherValue = 0;

let rightNumber = 0;
let leftNumber = 0;

function updateNumber(number) {
    populate(number);
    const operation = getOperationFromInputField();
    
    if(operation !== undefined && operation !== '-') {
        const parts = inputField.value.split(operation);
        rightNumber = parseFloat(parts[1]);
        leftNumber = parseFloat(parts[0]);
        console.log('rightNumber: ' + rightNumber);
        console.log('leftNumber: ' + leftNumber);
    }
}

function populate(toPopulate) {
    // console.log('populate ' + toPopulate);
    // if(inputField.value !== null) {
        inputField.value += toPopulate;
        console.log('new ' + inputField);
        return inputField;
    // }
    // inputField.value = toPopulate;
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
        // calculate();
    } 
    populate(operator);
}

function calculate() {

    if(inputField.value !== '') {
        const operation = getOperationFromInputField();
        if (operation === undefined) {
            return
        }

        const parts = inputField.value.split(operation);
        const num1 = parseFloat(parts[0]);
        const num2 = parseFloat(parts[1]);
        let result;

    // Perform the calculation based on the selected operation
    switch (operation) {
        case '+':
            result = num1 + num2
            alert(result);
            break;
        case '-':
            result = num1 - num2;
            alert(result);
            break;
        case '*':
            result = num1 * num2;
            alert(result);
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
                alert(result);
            } else {
                alert("Error: Division by zero is not allowed.");
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

    //calculate the result
    // document.getElementByClass('number-btn')
    //     .onclick = () => {
    //         populate();
    // };
    // // Display the result
    //     document.getElementById('result')
    //         .innerText =`nnnnnnnnnnnnnnnnnnnn ${result}`;
    // console.log('result3: ' + result);
    }