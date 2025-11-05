const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
    heading.textContent = e.target.value;

    console.log(itemInput)
}

function onChecked(e) {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

function onFocus(e) {
    console.log('is Focused')
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'green';
}

function onBlur(e) {
    console.log('is Not focused')
    itemInput.style.outlineStyle = 'none';


}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('change', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
