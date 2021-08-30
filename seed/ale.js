const db = require('../db').default
const { SoccerArticle } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const ales = [
  
  {
      name: 'First Flight',
      category: 'Pale Ale',
      content: 'This was the first beer I ever brewed. It was a pale ale that came in at 5% ABV.'
  },
  {
    name: 'Citra Session',
    category: 'Pale Ale',
    content: 'This pale ale came in light at 4.5% ABV and had rich fruit notes.'
  },
  {
    name: 'Creek Water',
    category: 'Pale Ale',
    content: 'This was the firat attempt at creating a recipe from random ingredients that rendered a beer that was earthy that it was undrinkable.'
  },
]

await SoccerArticle.insertMany(ales)
console.log('Ales added to db')
}

const run = async () => {
await main()
db.close()
}

run()