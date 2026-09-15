let result;
console.log('result1: ' + result);

// console.log('num1: ' + num1);
// console.log('num2: ' + num2);
// console.log('operation: ' + operation);

function calculate() {
    // Get the input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    console.log('num1: ' + num1);
    console.log('num2: ' + num2);
    console.log('operation: ' + operation);
    
    console.log(num1, num2, operation);

    // Perform the calculation based on the selected operation
    switch (operation) {
        case 'add':
            result = num1 + num2
            alert(result);
            break;
        case 'subtract':
            result = num1 - num2;
            alert(result);
            break;
        case 'multiply':
            result = num1 * num2;
            alert(result);
            break;
        case 'divide':
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

    //calculate the result
    document.getElementById('calculate-btn')
        .onclick = () => {
            calculate();
    };
    // Display the result
        document.getElementById('result')
            .innerText =`nnnnnnnnnnnnnnnnnnnn ${result}`;
    console.log('result3: ' + result);}