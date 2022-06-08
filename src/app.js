const express = require('express');

// imported artistRouter
const artistRouter = require('../src/routes/artists');

const app = express();

app.use(express.json());

// direct all artists to artistController
app.use('/artist', artistRouter)

// app.get('/', (request, response) => {
//     response.status(200).json('Hello world!')
// });

module.exports = app;