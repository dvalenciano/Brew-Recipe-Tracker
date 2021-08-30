const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  },
  { timestamp: true }
)

const Comment = mongoose.model('Comment', commentSchema)
module.exports = {
  Comment
}