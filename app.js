// import express
const express = require('express');

// create a new express application object
const app = express();

// add the path module to dynamically read our file path
const path = require('path');

// sets the path for static assets to the public folder globally
app.use(express.static(path.join(__dirname, 'public')));

// create a callback function to send a Hello World response
let hello = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<link rel="stylesheet" href="css/app.css" />');
    res.write('<h3>Hello world</h3>');
    res.end();
}

// goodbye function
let goodbye = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<link rel="stylesheet" href="css/app.css" />');
    res.write('<h3>Goodbye world</h3>');
    res.end();
}

// index (home page) function
let index = (req, res) => {
    // show page if url is /
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<link rel="stylesheet" href="css/app.css" />');
        res.write('<h3>Lesson 3 - First Express Site</h3>');
        res.write('<img src="img/bills.png" alt="My Photo" />');
    }
    else {
        // show 404 if url is anything besides /
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.write('<link rel="stylesheet" href="css/app.css" />');
        res.write('<h3>Error - Page Not Found</h3>');      
    }
    res.end();
}

// greet function - show response using a url parameter value e.g. /greet/{name}
let greet = (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
    <link rel="stylesheet" href="css/app.css" />
    <h3>Greetings ${req.params.name}</h3>`);
    res.end();
}

// redirect
let redirect = (req, res) => {
    console.log('Redirecting to index');
    res.redirect('/');
}

// call each method at the corresponding request url
app.use('/hello', hello);
app.use('/goodbye', goodbye);
app.use('/greet/:name', greet);  // : character indicates a parameter not a literal string
app.use('/redirect', redirect);
app.use('/', index);  // must go last to avoid overriding all other routes

// start the express web server on port 3000
app.listen(3000);
console.log('Express running on port 3000');
