const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  genre: {
    type: String,
    required: [true, 'Genre is required']
  },
  authorId: {
    type: String,
    required: [true, 'Author ID is required']
  }
})

const Book = mongoose.model('book', bookSchema)
module.exports = Book