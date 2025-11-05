/**
 * Object literals are a way to create objects in JavaScript using a simple syntax.
 * 
 * Properties:
 * - Properties are key-value pairs that define the characteristics of an object.
 * - They represent the data or attributes associated with the object.
 * - Example: `name: "John"` where `name` is the property key and `"John"` is the value.
 * 
 * Methods:
 * - Methods are functions defined within an object.
 * - They represent the behavior or actions that the object can perform.
 * - Example: `greet: function() { console.log("Hello!"); }` where `greet` is the method name.
 * 
 * Object literals are often used to represent real-world entities or data structures.
 */
// OBJECT LITERALS
// Object literals are a way to create objects in JavaScript using a simple syntax.
// They allow you to define properties and methods directly within the object.
// Object literals are often used to represent real-world entities or data structures.

let x;

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
        zip: '02108',
    },
    hobbies: ['reading', 'traveling', 'coding'],
};

x = person.name; // Accessing a property
x = person.address.state; // Accessing a nested property
x = person.hobbies[1]; // Accessing an array element
// x = person['age']; // Accessing a property using bracket notation

person.name = 'Jane Doe'; // Updating a property

person.hasPet = true; // Adding a new property
//Complettly remoneing a proprty from an object
delete person.address.street; // Removing a property 

x = person; // Accessing the updated property

console.log(x); // { name: 'John Doe', age: 30 } 