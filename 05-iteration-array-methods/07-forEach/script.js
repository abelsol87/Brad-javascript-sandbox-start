
// const nums = [5, 10, 15, 20];

// nums.forEach(score => console.log(score * 2));

// nums.forEach((score) => {

// console.log('Double: ' + score * 2);
// })

// nums.forEach((score, index) => {
// console.log(`Index: ${index} Double ${score * 2}`)})

const socials = ['Facebook', 'Twitter', 'Instagram', 'Snapchat'];

// console.log(socials.__proto__);

// socials.forEach(function (items) {
//     console.log(items);
// });

// socials.forEach((item, index, arr) => {
//     console.log(`${index} - ${item}`, arr)
// })

function logSocials(social) {
    console.log(social)
}

socials.forEach(logSocials);

// const socialObj = [
//     { name: 'Facebook', url: 'http//facebook.com' },
//     { name: 'Twitter', url: 'http//twitter.com' },
//     { name: 'Instagram', url: 'http//instagram.com' },
//     { name: 'Snapchat', url: 'http//snapchat.com' }
// ];

// socialObj.forEach((item) => console.log(item.name));