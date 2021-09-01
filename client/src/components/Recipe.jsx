import React from 'react'
import Comment from './Comment'

const Recipe= (props) => {
console.log(props)
  return (
    <div className='recipe'>
      <h2>{props.recipe.name}</h2>
      <h4>{props.recipe.category}</h4>
      <p>{props.recipe.content}</p>
      <Comment />
    </div>
  )
}

export default Recipe