const db = require('../db').default
const { SoccerArticle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ipas = [
  
  {
      name: 'Hop Hunter',
      category: 'Imperial IPA',
      content: 'This was a first attempt at an imperial ipa. It came in around 6% ABV and had high hop flavor to it.'
  },
  {
    name: 'Flamingo Mingo',
    category: 'SMASH IPA',
    content: 'This was a single malt single hop IPA that had a fruit foward feel with a sweet finish. This beer ended up coming in at 6% ABV.'
  },
  {
    name: 'Grinder',
    category: 'IPA',
    content: 'this is another version of IPA built off of the SMASH method with the exception of 2 hops being used in the brewing process.'
  },
]

await SoccerArticle.insertMany(ipas)
console.log('ipas added to db')
}

const run = async () => {
await main()
db.close()
}

run()