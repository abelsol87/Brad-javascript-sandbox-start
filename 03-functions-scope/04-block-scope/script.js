// how block scope works
// var is function scoped
// let and const are block scoped

// Block scope with let and const

if (true) {
    let x = 100;
    const y = 200;
    // var z = 300;
    console.log(y)
}


function run() {
    // Function scope
    var m = 100;
    // let y = 500;
    // console.log(y);
    console.log(m); // 100
}
run(); // ReferenceError: y is not defined because y is block scoped


if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

// console.log(a); // ReferenceError: a is not defined because a is block scoped
// console.log(b); // ReferenceError: b is not defined because b is block scoped
console.log(c); // 700 because c is function scoped