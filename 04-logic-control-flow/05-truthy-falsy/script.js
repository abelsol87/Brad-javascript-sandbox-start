// Falsy Values
// Falsy values are values that evaluate to false in a boolean context.
// The following values are considered falsy in JavaScript:
// 1. false
// 2. 0
// 3. -0
// 4. 0n (BigInt zero)
// 5. "", '', `` (empty string)
// 6. null
// 7. undefined
// 8. NaN (Not-a-Number)
// All other values are considered truthy.

// Examples of falsy values
console.log(false);       // false
console.log(0);           // false
console.log(-0);          // false
console.log(0n);          // false
console.log("");          // false
console.log(null);        // false
console.log(undefined);   // false
console.log(NaN);         // false

// Examples of truthy values
// Truthy values are values that evaluate to true in a boolean context.
// The following values are considered truthy in JavaScript:
// 1. true
// 2. '0' (0 in a string)
// 3. Any non-empty string (including strings with whitespace)
// 4. [] {}  Any object (including arrays and functions even if empty)
// 5. Any non-zero BigInt
// 6. Symbol (including Symbol() and Symbol('description'))
// 7. Any non-null value
// 8. Any non-undefined value
// All other values are considered falsy.


const x = '';

if (x) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

console.log(Boolean(x));       // false


// Truthy and Falsy caveats
// 1. The empty string is falsy
// 2. The string "0" is truthy
// 3. The number 0 is falsy
// 4. The number -0 is falsy
// 5. The number 1 is truthy
// 6. The number -1 is truthy
// 7. The string "false" is truthy
// 8. The boolean false is falsy
// 9. The boolean true is truthy
// 10. The null value is falsy
// 11. The undefined value is falsy
// 12. The NaN value is falsy
// 13. The empty array [] is truthy
// 14. The empty object {} is truthy
// 15. The function () => {} is truthy
// 16. The BigInt 0n is falsy
// 17. The BigInt 1n is truthy
// 18. The Symbol() is truthy
// 19. The Symbol('description') is truthy
// 20. The Symbol('') is truthy
// 21. The Symbol('0') is truthy
// 22. The Symbol('false') is truthy
// 23. The Symbol('null') is truthy
// 24. The Symbol('undefined') is truthy
// 25. The Symbol('NaN') is truthy
// 26. The Symbol('') is truthy
// 27. The Symbol('0') is truthy

const children = 0;

if (typeof children) {
    console.log(`You have ${children} children`);
} else {
    console.log('Please enter a number number of children?');
}

// Chaking for empty Arrays
const posts = ['Post 1', 'Post 2', 'Post 3'];
console.log(`The lenth of the Array is  ${posts.length}`); // 3

if (posts.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts to List');
}

// Chaking for empty Objects
const user = {}
const users = Object.keys(user).length; // Corrected syntax
console.log(users);

if (Object.keys(user).length > 0) {
    console.log('List User');
} else {
    console.log('No User to List');
}