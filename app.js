// import express
const express = require('express');

// create a new express application object
const app = express();

// create a callback function to send a Hello World response
let hello = (req, res) => {
    res.writeHead(200);
    res.write('Hello world');
    res.end();
}

// call our hello method for each http request
app.use(hello);

// start the express web server on port 3000
app.listen(3000);
console.log('Express running on port 3000');
