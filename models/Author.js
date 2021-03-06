const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },

})

const Author = mongoose.model('author', authorSchema)
module.exports = Author