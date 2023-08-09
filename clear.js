'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Book = require('./models/book.js');

Book.deleteMany({})
.then(() => {
  console.log('All Books deleted');
  mongoose.disconnect();
})
.catch((e) => {
  console.error('Error deleting books:', e);
});
