// Values are stored on the stack
const name = 'John';
const age = 30;

// Reference values are stord on the heap
const person = {
  name: 'Brad',
  age: 40,
};

let newName = name;
newName = 'Solomon';

let newPerson = person;
newPerson.name = 'Smith';

console.log(name, newName);
console.log(person, newPerson);
