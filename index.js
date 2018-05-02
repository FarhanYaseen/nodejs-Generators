const fetch = require('node-fetch');
const co = require('co');


co (function *(){
    const url = "https://jsonplaceholder.typicode.com/posts/1";
    const response = yield fetch(url);
    const post = yield response.json();
    const title =  post.title;
    console.log(title);
})