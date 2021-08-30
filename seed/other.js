const db = require('../db')
const { Post } = require('../models/')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
  const others = [
  
  {
      name: 'Broken Wing',
      category: 'Fruit Ale',
      content: 'This beer was brewed using hops that have fruit and sweet flavor profiles. It was modeled after the Citra Session Ale containing most of the same malt and specilaty grain requirements.'
  }
]

await Post.insertMany(others)
console.log('others added to db')
}
const run = async () => {
await main()
db.close()
}

run()