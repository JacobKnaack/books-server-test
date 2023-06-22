'use strict';

const mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String, required: true
  },
  status: {
    type: String,
    uppercase: true,
    enum: ['LIFE-CHANGING', 'FAVORITE FIVE', 'RECOMMENDED TO ME']
  }
});

module.exports = mongoose.model('book', bookSchema);