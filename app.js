const express = require('express');
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// DATABASE CONNECTIONS
mongoose.connect(
    process.env.MONGO_URI, 
    { useUnifiedTopology: true, useNewUrlParser: true }
)
.then(() => console.log('Database Connected'))

mongoose.connection.on('error', err => {
    console.log(`Database connection error: ${err.message}`)
});

// BRING IN ROUTES
const postRoutes = require('./routes/post');

// MIDDLEWARE
app.use(morgan('dev'));
app.use("/", postRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Node JS API is listening on port: ${port}`);
});