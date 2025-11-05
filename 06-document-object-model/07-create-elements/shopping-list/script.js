const div = document.createElement('div');
div.className = 'my-element';
div.id = 'my-element';
div.setAttribute('title', 'My element')

// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');
div.appendChild(text);


// document.body.appendChild(div);
// document.querySelector('ul').appendChild(div);

// console.log(div);

const addList = document.createElement('li');

const listItem = document.createTextNode('Bread');
addList.appendChild(listItem);

// document.querySelector('ul').appendChild(listItem)

// console.log(listItem)