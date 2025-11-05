// Useful Arry Methods
let x;
const arr = [34, 55, 95, 20, 15];

// arr.push(100); // Add to the end of the array
// arr.unshift(200); // Add to the beginning of the array
// arr.pop(); // Remove from the end of the array
// arr.shift(); // Remove from the beginning of the array
// arr.reverse(); // Reverse the array
// arr.sort(); // Sort the array
// arr.splice(); // Remove from the middle of the array 
// arr.slice(); // Get a slice of the array

x = arr.includes(200); // Check if the array includes a value true/false

x = arr.indexOf(340); // Get the index of a value

x = arr.slice(1, 4); // Get a slice of the array from index 1 to 4

// x = arr.splice(3, 1); // Remove 4 elements from index 1

x = arr.splice(1, 4).reverse().toString().charAt(4); // Remove 2 elements from index 1 and add 100

console.log(x);