// Default Parameters
function registerUSer(user = 'Bots') {
    // if (!user) {
    //     user = 'Bots';
    // }
    return user + ` has been registered`;
};

console.log(registerUSer()); // Bots has been registered

registerUSer('John Doe'); // this will not work it needs to be wraped in a function like console.log

console.log(registerUSer('John Doe')); // John Doe has been registered

// Rest Parameters
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
};

console.log(sum(1, 2, 3, 4, 5, 100)); // 115
// console.log(sum(1, 2, 3, 4, 5, 100, 200)); // 315 

// Objects as Parameters

function user(userName = {
    name: 'Abel',
    id: 1
}) {
    return `The user ${userName.name} has the id of ${userName.id} is logged in.`;
};

console.log(user()); // The user Abel has the id of 1 is logged in
console.log(user({
    name: 'John Doe',
    id: 2
})); // The user John Doe has the id of 2 is logged in

// Arrays as Parameters

function getArry(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    console.log(item);
};

getArry(['apple', 'banana', 'orange', 'grape', 'mango']); // this will return a random fruit from the array

// If you call the function with a non-array value, it will throw an error because the `length` property and `Math.random()` logic depend on the input being an array.
// Example of incorrect usage:
try {
    getArry('notAnArray'); // This will throw an error
} catch (error) {
    console.error('Error:', error.message);
}

// To ensure the function works only with arrays, you can add a check:
function getArry(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    console.log(item);
}

// Correct usage:
getArry(['apple', 'banana', 'orange', 'grape', 'mango']); // This will work as expected

