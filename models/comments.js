const mongoose = require('mongoose')
// const { Schema } = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    recipe_id: {
      type:Schema.Types.ObjectId, ref: 'recipe_id'
    }
  },
  { timestamp: true }
)

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment