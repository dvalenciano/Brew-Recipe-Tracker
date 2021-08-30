const db = require('../db').default
const { SoccerArticle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const stouts = [
  
  {
      name: 'Black Is Beautiful',
      category: 'Chocolate Stout',
      content: 'This was the first attempt at a stout. there was extra chocolate and pecan flavoring added at the bottling process.'
  }
]

await SoccerArticle.insertMany(stouts)
console.log('Stouts added to db')
}

const run = async () => {
await main()
db.close()
}

run()