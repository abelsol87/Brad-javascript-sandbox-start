// querySelecorAll()

const listItems = document.querySelectorAll('.item');
console.log(listItems[1].innerText);

// listItems.style.color = 'red'; // This will not work as querySelectorAll returns a NodeList, not a single element
// To change the style of each item, we need to loop through the NodeList
// listItems[1].style.color = 'red'; this will work for a single item

// Change the style of each item in the NodeList
// listItems.forEach((items, index) => {
//     items.style.color = 'red'
//     if (index === 1) {
//         items.remove()
//     }

//     if (index === 0) {
//         items.innerHTML = ` Oranges
//           <button class="remove-item btn-link text-red">
//             <i class="fa-solid fa-xmark"></i>
//           </button>`
//     }
// });

const listItem2 = document.getElementsByClassName('item');
console.log(listItem2[2].innerText)

const listItemArray = Array.from(listItem2);

listItemArray.forEach((item) => {
    console.log(item.innerText)
})

const listItem3 = document.getElementsByTagName('li');
console.log(listItem3[0].innerText)

const listItemsArray = Array.from(listItem3)
console.log(listItemsArray[3].innerText)