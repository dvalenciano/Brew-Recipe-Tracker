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

const getComment = async (req, res)=>{
  try {
    const comments = await Comment.find()
    return res.status(200).json({comments})
  } catch (error) {
    return res.status(201).json({recipe})
  }
}

const getImage = async (req,res)=>{
  try {
    const images = await Image.find()
    return res.status(200).json({images})
  } catch (error) {
    
  }
}

const getRecipe = async (req, res)=>{
  try {
    const recipes = await Recipe.find()
    return res.status(200).json({recipes})
  } catch (error) {
    
  }
}

const getCommentById = async (req, res)=>{
  try {
    const { id } = req.params
    const comment = await Comment.findById(id)
    if (comment){
      return res.status(200).json({comment})
    }
    return res.status(404).send({plant})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getImageById = async (req, res)=>{
  try {
    const {id} = req.params
    const image = await Image.findById(id)
    if (image){
      return res.status(200).json({image})
    }
    return res.status(404).send({image})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRecipeById = async (req, res)=>{
  try {
    const {id} = req.params
    const recipe = await Recipe.findById(id)
    if (recipe){
      return res.status(200).json({recipe})
    }
    return res.status(404).send({recipe})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createComment,
  createImage,
  createRecipe,
  getImage,
  getComment,
  getRecipe,
  getCommentById,
  getImageById,
  getRecipeById
}