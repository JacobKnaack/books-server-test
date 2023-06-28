'use strict';

const bookModel = require('../models/book');

async function createBook(request, response, next) {
  try {
    const book = await bookModel.create(request.body);
    // 201 status indicates that the request has succeeded and has led to the creation of a resource.
    response.status(201).send(book);

  } catch (error) {
    error.customMessage = 'Something went wrong when creating your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}

module.exports = createBook;
