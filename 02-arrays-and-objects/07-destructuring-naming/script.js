// Destructuring and Naming         
// Destructuring is a syntax that allows unpacking values from arrays or properties from objects into distinct variables.
// It is a convenient way to extract values from arrays or objects and assign them to variables in a more readable and concise manner.

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age
};

console.log(person.age); // Output: 30

// Destructuring an object

const todo = {
    id: 1,
    title: 'Learn JavaScript',
    user: {
        name: 'Abel'
    }
};

const {
    id: todoId,
    title,
    user: { name }
} = todo;


// const { id, title, user: { name } } = todo; // Destructuring the object the out will be the same as the above in the console
console.log(todoId); // Output: 1


// desturacturing an array
const numbers = [1, 2, 3, 4, 5];

const [first, seconnd, ...rest] = numbers; // Destructuring the array

console.log(first, seconnd, rest); 
