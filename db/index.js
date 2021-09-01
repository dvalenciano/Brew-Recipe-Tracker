const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/brewDB'

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db


// process.env.NODE_ENV === 'production'?process.env.MONGODB_URI: