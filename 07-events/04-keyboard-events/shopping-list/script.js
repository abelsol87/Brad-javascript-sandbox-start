const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('Key press')
}

const onKyUp = (e) => {
    e.target.style.backgroundColor = 'blue';
    console.log(e.type)
}

const onKyDown = (e) => {
    // key
    // if (e.key === 'Enter') {
    //     alert('You pressed Enter');
    // };
    // document.querySelector('h1').innerText = e.key;

    // keyCode
    //  https://www.toptal.com/developers/keycode/table
    if (e.keyCode === 13) {
        alert('You pressed Enter')
    };

    // code
    if (e.code === 'Digit1') {
        console.log('You pressed 1')
    };

    if (e.repeat) {
        console.log('You are holding down ' + e.key)
    };

    console.log('shift ' + e.shiftKey);

    if (e.shiftKey && e.key === 'K') {
        console.log('You hit shift + K')
    }
};

// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKyUp);
itemInput.addEventListener('keydown', onKyDown);