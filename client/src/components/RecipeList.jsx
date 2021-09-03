import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const RecipeList = ({ category }) => {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    getRecipesByCategory()
  }, [category])

  async function getRecipesByCategory() {
    const res = await axios.get(`${BASE_URL}/recipes/categories/${category}`)
    setRecipes(res.data)
  }
  console.log(recipes)

  async function removeRecipe(id) {
    const res = await axios.delete(`${BASE_URL}/recipes/${id}`)
  }

  return (
    <div className="recipelist">
      <h2>{category} Recipes</h2>

      {recipes.map((recipe) => {
        return (
          <div className="recipeItem" key={recipe._id}>
            <h4>{recipe.name}</h4>
            <p>{recipe.content}</p>
            <button
              className="recipeButton"
              onClick={() => {
                removeRecipe(recipe._id)
              }}
            >
              Delete Recipe
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
