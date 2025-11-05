// Create a new string called "myNewString" that holds the value of "Developer", using the value from "myString"
const myString = 'developer';

let myNewString;
// Soultion: 1
myNewString = myString.charAt(0).toUpperCase() + myString.slice(1);

// Solution: 2
myNewString = myString[0].toUpperCase() + myString.slice(1);

// Solution Template literal: 3
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;

console.log(myNewString);


