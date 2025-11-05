// Logical Operators
// Logical operators are used to combine two or more boolean expressions.
// The logical operators in JavaScript are:
// 1. AND (&&) every condition must be true
// 2. OR (||) at least one condition must be true
// 3. NOT (!) inverts the boolean value
// 4. XOR (exclusive OR) only one condition must be true

console.log(10 < 20 && 30 > 15 && 40 > 20); // evaluats to true
console.log(10 < 20 || 30 > 15 || 40 < 20); // evaluates to true
console.log(!(10 < 20)); // evaluates to false
console.log(!(10 > 20)); // evaluates to true

// && - Will return first falsy value or last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a); // evaluates to 20

const posts = ['Post one', 'Post two', 'Post three'];
console.log(posts[0]); // Post one
console.log(posts[2]); // Post three

//|| - Will return the first truthy value or the last value
let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b)

// ?? - Returns the right side operand when the left is
//  null or undefined

let c;

c = 10 ?? 20;
c = null ?? 30;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(`After '' ?? 30, cs is:  ${c}`);