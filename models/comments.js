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
    }
  },
  { timestamp: true }
)


module.exports = mongoose.model('Comments', Comment)