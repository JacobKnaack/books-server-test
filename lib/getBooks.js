'use strict';

const bookModel = require('../models/book');

async function getBooks(request, response, next) {
  try {
    const books = await bookModel.find({});
    console.log('All books: ', books);
    response.status(200).send(books);

    // ERROR HANDLING TESTING PURPOSES ONLY: This shoud cause an error that'll end up in the catch() below and then sent to the middleware in the server.js
    // let dataThatDoesntExist = require('./this-data-does-not-exist.js');
    // response.send(dataThatDoesntExist);

  } catch (error) {
    console.error(error);

    // next can be used to pass an error to express for the error middleware to handle 
    next(error);

    // THIS is an anti-pattern. DO NOT handle errors inline, this is not the Express way
    // response.status(400).send('Could not find any books');
  }
}

module.exports = getBooks;