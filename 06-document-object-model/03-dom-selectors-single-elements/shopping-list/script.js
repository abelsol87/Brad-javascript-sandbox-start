// Document.getElementById()
let ouput;

console.log(document.getElementById('app-title'))
console.log(document.getElementById('app-title').id)
console.log(document.getElementById('app-title').className)
console.log(document.getElementById('app-title').getAttribute('id'))

// Set attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');

console.log(title);

// Get or Change content
console.log(title.textContent);
title.textContent = 'Hello Abel'
title.innerText = 'Hello again Abel'
title.innerHTML = '<strong>Shopping List</strong>';

// change style
title.style.color = 'red'
title.style.backgroundColor = 'black'
title.style.padding = '10px'
title.style.borderRadius = '10px'

// documetn.querySelector()
console.log(document.querySelector('h1'))
console.log(document.querySelector('#app-title'))
console.log(document.querySelector('.container'))
console.log(document.querySelector('input[type="text"]'))
console.log(document.querySelector('li:nth-child(2)').innerText)

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerText = 'Apple Juice';
secondItem.style.color = 'green'

// Use these methods on other elements
const list = document.querySelector('ul');
console.log(list)

const firstItem = list.querySelector('li')
firstItem.style.color = 'blue';

const btn1 = document.querySelector('.btn');
btn1.style.backgroundColor = 'red'
btn1.style.color = 'yellow'

console.log(btn1)

const btnClear = document.querySelector('#clear')
btnClear.style.color = 'lightgreen'
btnClear.style.backgroundColor = 'red'

console.log(btnClear)
