for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log('Breaking...')
        break;
    }
    console.log(i)
};

for (let j = 0; j < 20; j++) {
    if (j === 15) {
        console.log('Continue....');
        continue;
    }
    console.log(j)
}