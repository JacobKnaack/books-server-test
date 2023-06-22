// LAB 11 - FEATURED TASKS
// Seed your database. Create at least three Book objects with all available attributes.

require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);

const Book = require('./models/book.js');

async function seedBooks() {
  console.log('seeding books...');

  await Book.create({ title: 'The Silent Patient', description: 'a women may or may not have killed her husband and a theapist is determind to make her talk to discover her secrets.', status: 'LIFE-CHANGING' });

  await Book.create({ title: 'The Growth Mindset', description: 'Dweck coined the terms fixed mindset and growth mindset to describe the underlying beliefs people have about learning and intelligence. When students believe they can get smarter, they understand that effort makes them stronger. Therefore they put in extra time and effort, and that leads to higher achievement.', status: 'FAVORITE FIVE' });

  await Book.create({ title: 'The Blind Assassin', description: 'Margaret Atwood takes the art of storytelling to new heights in a dazzling novel that unfolds layer by astonishing layer and concludes in a brilliant and wonderfully satisfying twist. Told in a style that magnificently captures the colloquialisms and clichés of the 1930s and 1940s, The Blind Assassin is a richly layered and uniquely rewarding experience.', status: 'FAVORITE FIVE' });

  await Book.create({ title: 'The Fire Next Time', description: 'Described by The New York Times Book Review as “sermon, ultimatum, confession, deposition, testament, and chronicle…all presented in searing, brilliant prose,” The Fire Next Time stands as a classic of our literature.', status: 'LIFE-CHANGING' });

  console.log('done seeding!');

  mongoose.disconnect();
}

seedBooks();