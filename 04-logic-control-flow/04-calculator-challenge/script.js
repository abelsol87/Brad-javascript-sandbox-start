// function calculator(num1, num2, operator) {
//     let result;
//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             result = 'Invalid operator';
//     }
//     console.log(result);
//     return result;
// }

// calculator(5, 2, '+');


function calculator(num1, num2, operator) {
    console.log(`Received: num1 = ${num1}, num2 = ${num2}, operator = ${operator}`);
    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    } else {
        result = 'Invalid Operator'
    }
    console.log('Is', result);
    return result;
}

calculator(5, 2, '-')