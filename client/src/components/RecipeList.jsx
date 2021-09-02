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

  return (
    <div className="recipelist">
      <h2>{category} Recipes</h2>

      {recipes.map((recipe) => {
        return (
          <div className="recipeItem" key={recipe._id}>
            <h4>{recipe.name}</h4>
            <p>{recipe.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
