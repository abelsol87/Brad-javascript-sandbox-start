function removeCleatButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
};

function removeFirstChild() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];

    ul.removeChild(li);
}

function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();

    console.log(li);
}

const removeItem4 = (itemNumber) =>
    document.querySelectorAll('li')[itemNumber - 1].remove();

removeCleatButton()
// removeFirstChild()
// removeItem(1)
// removeItem3(1)
removeItem4(2)