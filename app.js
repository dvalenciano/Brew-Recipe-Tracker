const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const logger = require('morgan')
const db = require('./db')


const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger('dev'))
db.on('error', console.error.bind(console, 'MongoDB connection error:'))


app.get('/', (req, res) => {
  res.send({ msg: 'Server Running' })
})







app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
