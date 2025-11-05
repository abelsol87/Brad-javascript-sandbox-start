const post = {
    id: 1,
    title: 'Post one',
    body: 'This is the body'
};

// Convert the object to a JSON string
const str = JSON.stringify(post);

// Parse the JSON string back to an object

const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Post one',
        body: 'This is the body'
    },
    {
        id: 2,
        title: 'Post two',
        body: 'This is the body'
    }
];

const str2 = JSON.stringify(posts);

// Parse the JSON string back to an object
const parsedPosts = JSON.parse(str2);

console.log(parsedPosts);


