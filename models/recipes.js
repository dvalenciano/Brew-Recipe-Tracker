const mongoose = require('mongoose')
const { Schema } = require('mongoose')

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

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = {
  Recipe
}