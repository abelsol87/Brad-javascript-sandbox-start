let d;
let x;


d = new Date(1987, 2, 4)
x = new Date();

const milliseconds = 1000 * 60 * 60 * 24 * 365.25;
let year = x.getFullYear() - d.getFullYear();


// const result = Math.floor(x - d) / milliseconds;
// console.log(`Age: ${result} years.`);

console.log(year);

// console.log(x.getFullYear); 