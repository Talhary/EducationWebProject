const Route = require('express').Router();

Route.get('/', (req, res) => {
    res.send('Hello World');

})