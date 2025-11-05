const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum)

// using for loop
const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
}
// console.log(sum3())
const cart = [
    { id: 1, name: 'Product 1', Price: 130 },
    { id: 2, name: 'Product 2', Price: 150 },
    { id: 3, name: 'Product 3', Price: 175 }
];

const total = cart.reduce((acc, cur) => acc + cur.Price, 0)
console.log(total)