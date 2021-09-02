const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/recipes', controllers.createRecipe)

router.post('/comments', controllers.createComment)

router.get('/recipes', controllers.getRecipes)

router.get('/comments', controllers.getComments)

router.get('/comments/:id', controllers.getCommentById)

router.get('/recipes/:id', controllers.getRecipeById)

router.delete('/comments/:id', controllers.deleteComment)

router.delete('/recipes/:id', controllers.deleteRecipe)

router.get('/recipes/categories/:category', controllers.getRecipeCategory)

module.exports = router;
