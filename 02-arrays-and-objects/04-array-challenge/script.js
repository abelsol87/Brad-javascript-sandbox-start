let x;

const arr = [1, 2, 3, 4, 5];

x = arr.push(6); // add 6 to the end of the array
// x = arr.pop(); // remove the last element of the array
// x = arr.shift(); // remove the first element of the array
x = arr.unshift(0); // add 0 to the beginning of the array

x = arr.reverse(); // [6, 5, 4, 3, 2, 1, 0]

console.log(x); // [6, 5, 4, 3, 2, 1, 0]

// Combine arr1 and arr2 into a new array called arr3 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Solution 1
const arr3 = arr1.concat(arr2); // here the number 5 will be dubble
// arr3.splice(4, 1); // 
x = arr3;
console.log(x);

// Solution 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);// remove the 5th element 
console.log(arr4);

// Solution 3
const arr5 = arr1.slice(0, 4).concat(arr2);
console.log(arr5);