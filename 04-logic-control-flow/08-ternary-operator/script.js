const age = 18;

// Using an if statement
if (age >= 15) {
    console.log('You can vote!')
} else {
    console.log('You can not vote!')
}

// using a ternary operator
age >= 18 ? console.log('You can cote!') : console.log('You can not vote!')

// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'can vote' : 'can not vote';


console.log(canVote)
console.log(canVote2)



const auth = true;
// let redirect;

// if (auth) {
//     alert('Welcome to the dashboard')
//     redirect = '/dashboard';
// } else {
//     alert('Access Denied')
//     redirect = '/login'
// }


// const redirect = auth
//     ? (alert('Welcome to dashboard'), '/dashboard')
//     : (alert('Accass denied'), '/Login');

// console.log(redirect);

// auth ? console.log('Welcome to dashboard') : null;

auth && console.log('Welcome to dashboard');