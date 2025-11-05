//  Fucction Declaration 
function addDollarSign(value) {
    return '$' + value;
}

console.log(addDollarSign(100)); // $100

// Function Expression
const addEuroSign = function (value) {
    return '€' + value;
};

console.log(addEuroSign(200)); // €200

// Arrow Function Expression
const addPoundSign = (value) => {
    return '£' + value;
}

console.log(addPoundSign(300)); // £300

// Arrow Function Expression with Implicit Return
const addYenSign = value => '¥' + value;
console.log(addYenSign(400)); // ¥400 

// Function Declaration vs Function Expression
// Function Declaration
function greet(name) {
    return 'Hello, ' + name + '!';
}
console.log(greet('Abel'));

// Function Expression
const greetExpression = function (name) {
    return 'Hello, ' + name + '!';
};


// Arrow Function Expression
const greetArrow = (name) => {
    return 'Hello, ' + name + '!';
};


// The difference between function declaration and function expression is that function declarations are hoisted, while function expressions are not. This means that you can call a function declaration before it is defined in the code, but you cannot do the same with a function expression.
console.log(greetExpression('Abel')); // ReferenceError: Cannot access 'greetExpression' before initialization
console.log(greetArrow('Abel')); // ReferenceError: Cannot access 'greetArrow' before initialization
// Function expressions are not hoisted, so you cannot call them before they are defined in the code. This is because function expressions are treated as variables, and variables are not hoisted in JavaScript.

