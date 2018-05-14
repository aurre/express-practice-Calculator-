'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const volleyball = require('volleyball');

app.use(volleyball);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const PORT = 3000;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});

app.get('/status', function(req, res, next) {
  res.send({ Status: 'Ok' });
});

app.get('/add/:num1/:num2', function(req, res, next) {
  let sum = +req.params.num1 + +req.params.num2;
  res.send(`${sum}`);
});

app.get('/add', function(req, res, next) {
  const sum = +req.query.num1 + +req.query.num2;
  res.send(`${sum}`);
});

app.use('/substract/:num1/:num2', function(req, res, next) {
  let substraction = +req.params.num1 - +req.params.num2;
  res.send(`${substraction}`);
});

app.use('/substract', function(req, res, next) {
  let substraction = +req.query.num1 - +req.query.num2;
  res.send(`${substraction}`);
});

app.use('/multiply/:num1/:num2', function(req, res, next) {
  let multiplication = +req.params.num1 * +req.params.num2;
  res.send(`${multiplication}`);
});

app.use('/multiply', function(req, res, next) {
  let multiplication = +req.query.num1 * +req.query.num2;
  res.send(`${multiplication}`);
});

app.use('/divide/:num1/:num2', function(req, res, next) {
  let division = +req.params.num1 / +req.params.num2;
  res.send(`${division}`);
});

app.use('/divide', function(req, res, next) {
  let division = +req.query.num1 / +req.query.num2;
  res.send(`${division}`);
});
