const Comment = require('../models/comments')
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

const createRecipe = async (req, res)=>{
  try {
    const recipe = await new Recipe(req.body)
    await recipe.save()
    return res.status(201).json({recipe})
  } catch (error) {
    return res.status(500).send(error.message)
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

const getRecipe = async (req, res)=>{
  try {
    const recipes = await Recipe.find()
    return res.status(200).json({recipes})
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getRecipeCategory = async (req, res)=>{
  try {
    const recipes = await Recipe.find({category:req.params.category})
    return res.status(200).json({recipes})
  } catch (error) {
    return res.status(500).send(error.message)
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

const deleteComment = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await Comment.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Comment deleted");
      }
      throw new Error("Comment not found");
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
      throw new Error("Recipe not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports = {
  createComment,
  createRecipe,
  getComment,
  getRecipe,
  getCommentById,
  getRecipeById,
  deleteComment,
  deleteRecipe,
  getRecipeCategory
}