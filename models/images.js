const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const imageSchema = new Schema(
  {
    name: {
      type: String,
      required: false
    },
    image: {
      type: String,
      required: true
    }
  },
  { timestamp: true }
)

const Image = mongoose.model('Image', imageSchema)
module.exports = {
  Image
}