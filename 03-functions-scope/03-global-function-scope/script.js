// Global & Function Scope

// Global scope
const x = 100;

console.log(x, `in global`); // 100

function run() {
    // Function scope
    console.log(x, `in function`); // 100
};

run(); // 100

// Block scope
if (true) {
    console.log(x, `in block`); // 100
}

function add() {
    const y = 200;
    console.log(x + y, `in add`); // 300
}

add(); // 300

// Global variables are accessible anywhere in the code
// Function variables are only accessible within the function
// Block variables are only accessible within the block
// Global variables can be accessed from functions and blocks
// Function variables can be accessed from blocks but not from global scope