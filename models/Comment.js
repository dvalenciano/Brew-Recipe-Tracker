const mongoose = require('mongoose')
// const { Schema } = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    }
  },
  { timestamp: true }
)

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment
