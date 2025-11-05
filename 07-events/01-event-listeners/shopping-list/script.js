const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');

    // itemList.innerHTML = '';

    // items.forEach((item) => item.remove());

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}

// Javascript Event Listener
// clearBtn.onclick = function () {
//     alert('Clear Item');
// };

// addEventListener()
// clearBtn.addEventListener('click', function () {
//     alert('Clear Mij');
// })

// Shorter
// clearBtn.addEventListener('click', () => alert('clear'));

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000)