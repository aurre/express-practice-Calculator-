'use strict'

const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const volleyball = require('volleyball')

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const PORT = 3000;

app.listen(PORT, function() {
    console.log(`Listening on port ${PORT}`)
})

app.get('/status', function (req, res, next) {
    res.send({'Status': 'Ok'})
})

app.get('/add/:param1/:param2', function (req, res, next) {
    let sum = +req.params.param1 + +req.params.param2
    res.send(`${sum}`)
})
