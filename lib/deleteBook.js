'use strict';

const bookModel = require('../models/book');

async function deleteBook(request, response, next) {
  try {
    console.log('Book ID to be deleted: ', request.params.id);
    await bookModel.findByIdAndDelete(request.params.id);
    // Express response objects will not forward a response body if the response status code is (204) "No Content".
    response.sendStatus(204);

  } catch (error) {
    error.customMessage = 'Something went wrong when deleting your book: ';
    console.error(error.customMessage + error);
    next(error);
  }
}

module.exports = deleteBook;
