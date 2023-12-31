'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const getBooks = require('./lib/getBooks');
const deleteBook = require('./lib/deleteBook');
const createBook = require('./lib/createBook');
const updateBook = require('./lib/updateBook');
const authorize = require('./lib/auth/authorize');

const app = express();
app.use(cors());
app.use(express.json());
app.use(authorize); // use auth0 authorization middleware

const PORT = process.env.PORT || 3001;

/**
 * Mongoose DB Connection
 */
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', _ => {
  console.log('We\'re connected!');
});

/**
 * Express routing to JS functions
 */
app.get('/test', (request, response) => {
  response.send('test request received');
});

app.get('/books', getBooks);
app.post('/books', createBook);
app.put('/books/:id', updateBook);
app.delete('/books/:id', deleteBook);

/**
 * Error Handling
 */

// Not Found
app.get('*', (request, response) => {
  response.status(404).send('Sorry, that page does not exist. Try again.');
});

// error handling middleware must be the last app.use()
app.use((error, request, response, next) => {
  response.status(500).send(`My Bad! Error occurred in the server! Someone call the developer... ${error.message}`);
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));
