const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/uccf_01');

// console.log(path.join(__dirname, 'client'));

mongoose.Promise = Promise;

const app = express(); // Self instantiating constructor

// Allow the front end/client side to access the files inside of ./client/build
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/notes', () => {
//   // check if they should have access to the database
//   // Authenticated?
// }),  (req, res) => {

// });

app.get('/notes', (req, res) => {
  res.send({message: 'Yep, worked!'});
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});


app.listen(port, () => console.log(`Listening on ${port}`));