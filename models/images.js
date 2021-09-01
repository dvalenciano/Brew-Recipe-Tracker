const mongoose = require('mongoose')
// const { Schema } = require('mongoose')
const Schema = mongoose.Schema

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

module.exports = mongoose.model('Image', imageSchema)