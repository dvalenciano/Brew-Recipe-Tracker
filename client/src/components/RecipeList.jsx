import React from 'react'

const RecipeList = ({ category }) => {
  console.log(category)
  return (
    <div className="recipelist">
      <h2>{category} Recipes</h2>
    </div>
  )
}

export default RecipeList
