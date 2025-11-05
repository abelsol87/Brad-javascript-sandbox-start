let x;

const fruits = ['apple', 'banana', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

// fruits.push(berries);

// x = fruits[3][1]; // Accessing the second element of the nested array

const allFruts = [fruits, berries]; // Creating a new array with the original arrays

x = allFruts[1][0]; // Accessing the third element of the second array

// concat() method
x = fruits.concat(berries); // Concatenating the two arrays

// spread operator (...)
x = [...fruits, berries]; // Using the spread operator to concatenate the two arrays
// console.log(x); // ['apple', 'banana', 'orange', 'strawberry', 'blueberry', 'raspberry']

// Flatten the array
const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat(); // Flattening the array by one level

// Static Method on Array Object
x = Array.isArray(fruits); // Checking if fruits is an array

x = Array.from('12345'); // Creating an array from a string

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // Creating an array from the variables

console.log(x); // ['apple', 'banana', 'orange', ['strawberry', 'blueberry', 'raspberry']]
