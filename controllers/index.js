const Comment = require('../models/Comment')
const Recipe = require('../models/Recipe')

const createComment = async (req, res)=>{
  try {
    const newComment = await new Comment(req.body)
    await newComment.save()
    return res.status(201).json(newComment)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createRecipe = async (req, res)=>{
  try {
    const newRecipe = await new Recipe(req.body)
    await newRecipe.save()
    return res.status(201).json(newRecipe)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getComments = async (req, res)=>{
  try {
    const comments = await Comment.find()
    return res.status(200).json(comments)
  } catch (error) {
    return res.status(201).json({recipe})
  }
}

const getRecipes = async (req, res)=>{
  try {
    const recipes = await Recipe.find()
    return res.status(200).json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRecipeCategory = async (req, res)=>{
  try {
    const recipes = await Recipe.find({category:req.params.category})
    return res.status(200).json(recipes)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCommentById = async (req, res)=>{
  try {
    const { id } = req.params
    const comment = await Comment.findById(id)
    if (comment){
      return res.status(200).json(comment)
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRecipeById = async (req, res)=>{
  try {
    const {id} = req.params
    const recipe = await Recipe.findById(id)
    if (recipe){
      return res.status(200).json(recipe)
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Comment.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Comment deleted");
      }
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

const deleteRecipe = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Recipe.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Recipe deleted");
      }
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports = {
  createComment,
  createRecipe,
  getComments,
  getRecipes,
  getCommentById,
  getRecipeById,
  deleteComment,
  deleteRecipe,
  getRecipeCategory
}