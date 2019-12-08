const express = require('express')
const app = express()

// BRING IN ROUTES
const postRoutes = require('./routes/post');

app.get("/", postRoutes.getPosts);

const port = 8080;

app.listen(port, () => {
    console.log(`A Really Cool Node JS API is listening on port: ${port}`);
});