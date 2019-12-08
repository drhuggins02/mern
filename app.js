const express = require('express')
const app = express()
const morgan = require("morgan");

// BRING IN ROUTES
const { getPosts } = require('./routes/post');

// MIDDLEWARE
app.use(morgan('dev'));

app.get("/", getPosts);

const port = 8080;

app.listen(port, () => {
    console.log(`Node JS API is listening on port: ${port}`);
});