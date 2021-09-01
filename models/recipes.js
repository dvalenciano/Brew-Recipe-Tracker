const mongoose = require('mongoose')
// const { Schema } = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
)


module.exports = mongoose.model('Recipe', recipeSchema)