// Loop through arrays
const items = ['apple', 'banana', 'cherry', 'elderberry'];
const users = [
    { name: 'Abel' },
    { name: 'Solomon' },
    { name: 'Tesfaye' }
];

// for (const item of items) {
//     console.log(item)
// }

for (const user of users) {
    console.log(user.name);
}

// Loop through strings
const str = 'Hello World!';

for (const letter of str) {
    console.log(letter);
}

// Loop through NodeLists
const listItems = document.querySelectorAll('li');
// console.log(listItems);
for (const item of listItems) {
    console.log(item.textContent);
}
// Loop through Maps
const map = new Map();
map.set('name', 'Abel');
map.set('age', 25);
map.set('country', 'Ethiopia');

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
