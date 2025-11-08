const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const clearButton = document.getElementById('clear')
const itemFilter = document.getElementById('filter')
const items = itemList.querySelectorAll('li')

console.log(itemForm, itemInput, itemList, clearButton)

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value
    // Validate input
    if (newItem === '') {
        alert("Please add an item");
        return;
    }
    // Create List item
    const li = document.createElement('li')
    li.appendChild(document.createTextNode(newItem))

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button)

    // Add li to the DOM
    itemList.appendChild(li)
    checkUi()

    itemInput.value = ''

}

function createButton(classes) {
    const button = document.createElement('button')
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    // console.log(button)
    return button
}

function createIcon(classes) {
    const icon = document.createElement('i')
    icon.className = classes;
    return icon
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        e.target.parentElement.parentElement.remove()
        console.log('click')
    }
}

function clearItems() {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
}

function checkUi() {
    const items = itemList.querySelectorAll('li')
    if (items.length === 0) {
        clearButton.style.display = 'none'
        itemFilter.style.display = 'none'
    } else {
        clearButton.style.display = 'block'
        clearButton.style.display = 'block'
    }
}

// Event listeners
itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearButton.addEventListener('click', clearItems)


checkUi()