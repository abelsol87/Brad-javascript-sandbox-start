// function add(a, b) {
//     return a + b;
// }

// console.log(add(2, 3)); // 5

// Arrow function Syntax
// Arrow functions are a more concise way to write function expressions in JavaScript. They are defined using the arrow syntax (=>) and can be used to create anonymous functions or to define functions that can be passed as arguments to other functions.
// Arrow functions can be used in the same way as function expressions, but they have some differences in syntax and behavior. For example, arrow functions do not have their own this context, which means that they inherit the this value from the surrounding code. This can be useful when you want to use the this value from the surrounding context in your function.
// Arrow functions can also be used to create concise one-liner functions. If the function body consists of a single expression, you can omit the curly braces and the return statement. This is called an implicit return.
// For example, the following arrow function takes a single argument and returns its square:
const add = (a, b) => {
    return a + b;
};

console.log(add(2, 3)); // 5

//Can leave off () if only one argument
const square = x => x * x;
console.log(square(5)); // 25

// You can also use parentheses to group multiple parameters in an arrow function. For example, the following arrow function takes two arguments and returns their product:
const multiply = (a, b) => a * b;
console.log(multiply(2, 3)); // 6

// Arrow functions can also be used to create higher-order functions, which are functions that take other functions as arguments or return functions as their result. For example, the following arrow function takes a function as an argument and returns a new function that applies the original function to its argument:
const applyFunction = (fn) => {
    return (x) => {
        return fn(x);
    };
}
const double = (x) => x * 2;
const applyDouble = applyFunction(double);
console.log(applyDouble(5)); // 10