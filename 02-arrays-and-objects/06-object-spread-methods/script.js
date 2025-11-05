let x;

const toDo = {}; // Create an empty object

// Add a property to the object
toDo.id = 1;
toDo.title = 'Learn JavaScript';
toDo.completed = true;

x = toDo;

//Nesting objects 
const person = {
    address: {
        coords: {
            lat: 4245678,
            lng: 2345678
        }
    }
}

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const obj3 = { obj1, obj2 };// Nested objects
//const obj3 = { ...obj1, ...obj2 };// Merge objects using spread operator
const obj4 = Object.assign({}, obj1, obj2); // Merge objects using Object.assign

const todos = [
    { id: 1, title: 'Learn JavaScript', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn Node', completed: false }
];

x = todos[0].completed; // Accessing object property

x = Object.keys(toDo).length; // Get the number of properties in an object
x = Object.values(toDo); // Get the values of an object
x = Object.entries(toDo); // Get the entries of an object
x = toDo.hasOwnProperty('id'); // Check if an object has a property

console.log(x);