//  you can access parent variables from a child function
//  but not the other way around
//  this is called nested scope

// Nested scope
function first() {
    const x = 100;

    function second() {
        const y = 200;
        console.log(x + y);
    }
    console.log(x); // 100  
    // console.log(y); // ReferenceError: y is not defined because y is block scoped and its a chile function

    second();
};

first(); // 300