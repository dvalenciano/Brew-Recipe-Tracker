const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/recipes', controllers.createRecipe)

router.post('/images', controllers.createImage)

router.post('/comments', controllers.createComment)

router.get('/recipes', controllers.getRecipe)

router.get('/images', controllers.getImage)

router.get('/comments', controllers.getComment)

router.get('/comments', controllers.getCommentById)

router.get('/images', controllers.getImageById)

router.get('/recipes', controllers.getRecipeById)

router.delete('/comments', controllers.deleteComment)

router.delete('/images', controllers.deleteImage)

router.delete('/recipes', controllers.deleteRecipe)

module.exports = router;
