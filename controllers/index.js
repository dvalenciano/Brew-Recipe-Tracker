const Comment = require('../models/comments')
const Image = require('../models/images')
const Recipe = require('../models/recipes')

const createComment = async (req, res)=>{
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({comment,})
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createImage = async (req, res)=>{
  try {
    const image = await new Image(req.body)
    await image.save()
    return res.status(201).json({image,})
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createRecipe = async (req, res)=>{
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json({recipe})
  } catch (error) {
    
  }
}

module.exports = {
  createComment,
  createImage,
}