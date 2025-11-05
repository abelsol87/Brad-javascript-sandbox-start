let output;

// How to get child elements from parent 

const parent = document.querySelector('.parent');

output = parent.children;

output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child Two'
parent.children[1].style.fontSize = '25px'
parent.children[1].style.color = 'red'

parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText = 'Child Three'

const child = document.querySelector('.child');
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

// Sibling elements
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green'
secondItem.previousElementSibling.style.color = 'orange'




console.log(output)