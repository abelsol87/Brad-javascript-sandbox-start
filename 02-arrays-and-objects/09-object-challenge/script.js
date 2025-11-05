const library = [
    {
        title: "The Road Ahead",
        author: "Bill Gates",
        statuses: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        statuses: {
            own: true,
            reading: false,
            read: false,
        }
    },
    {
        title: "Mockingjay",
        author: "Suzanne Collins",
        statuses: {
            own: true,
            reading: false,
            read: false,
        }
    },
];

// Step 1
library[0].statuses.read = true;
library[1].statuses.read = true;
library[2].statuses.read = true;

console.log(library);

// Step 2
// Destructure the first book's title
// const { title } = library[0]; // Destructuring the first book's title
const { title: firstBook } = library[0];
console.log(firstBook);

// Step 3 
// Convert the object to a JSON string
const laibrary2 = JSON.stringify(library);
console.log(laibrary2);

// Step 4
// Parse the JSON string back to an object
const parseLaibrary = JSON.parse(laibrary2);
console.log(parseLaibrary);