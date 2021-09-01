const mongoose = require('mongoose')
// const { Schema } = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    recipe_id: {
      type:Schema.Types.ObjectId, ref: 'recipe_id'
    }
  },
  { timestamp: true }
)


module.exports = mongoose.model('Comments', Comment)