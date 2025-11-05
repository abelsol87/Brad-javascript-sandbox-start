function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = creatButton('remove-item btn-link text-red');


  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function creatButton(classes) {
  const button = document.createElement('button');
  button.className = classes;

  const icon = creatIcon('fa-solid fa-xmark');
  button.appendChild(icon);
  return button;
}

function creatIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;
  return icon;
}

createNewItem('Cheese');
createNewItem('Sauce');
