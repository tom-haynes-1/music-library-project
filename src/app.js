const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.status(200).json('Hello world!')
});

module.exports = app;