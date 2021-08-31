const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/recipes', controllers.createRecipe)

router.post('/images', controllers.creatImage)

router.post('/comments', controllers.createComment)

module.exports = router;
