// ||= assign the right side value  only if the left side is a falsy value
let a = false;
// if (!a) {
//     a = 10;
// }

a = a || 10;

a ||= 10

console.log(a); // 10

// &&= assign the right side value  only if the left side is a truthy value
let b = 10;

if (b) {
    b = 20;
}

b = b && 20;

b &&= 20

console.log(b); // 20

// ??= assign the right side value  only if the left side is null or undefined

let c = undefined;

// if (c === null || c === undefined) {
//     c = 20;
// }

c ??= 40;

console.log(c);