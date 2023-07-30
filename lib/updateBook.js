'use strict';

const bookModel = require('../models/book');

async function updateBook(request, response, next) {
  try {
    console.log('Book to be updated: ', request.body);
    // Model.findByIdAndUpdate(id, updatedData, options)
    const updatedBook = await bookModel.findByIdAndUpdate(request.params.id, request.body, { new: true });
    response.status(200).send(updatedBook);
  } catch (error) {
    error.customMessage = 'Something went wrong when updating your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}

module.exports = updateBook;
