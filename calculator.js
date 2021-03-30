
// operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// Enter operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// Applying conditional statment 
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// Output result
document.write(`${number1} ${operator} ${number2} = ${result}`);