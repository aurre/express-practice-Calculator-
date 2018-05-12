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

app.get('/add', function(req, res, next) {
    const sum = +req.query.param1 + +req.query.param2
    res.send(`${sum}`)
})

app.use('/substract/:param1/:param2', function(req, res, next) {
    let substraction = +req.params.param1 - +req.params.param2
    res.send(`${substraction}`)
})

app.use('/substract', function(req, res, next) {
    let substraction = +req.query.param1 - +req.query.param2
    res.send(`${substraction}`)
})

app.use('/multiply/:param1/:param2', function (req,res,next) {
    let multiplication = +req.params.param1 * +req.params.param2
    res.send(`${multiplication}`)
})

app.use('/multiply', function (req,res,next) { 
    let multiplication = +req.query.param1 * +req.query.param2
    res.send(`${multiplication}`)
})

app.use('/divide/:param1/:param2', function (req,res, next) {
    let division = +req.params.param1 / +req.params.param2
    res.send(`${division}`)
})

app.use('/divide', function (req, res, next) {
    let division = +req.query.param1 / +req.query.param2
    res.send(`${division}`)
})