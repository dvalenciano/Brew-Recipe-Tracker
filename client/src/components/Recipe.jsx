import React from 'react'
import Comment from './Comment'

const Recipe= (props) => {
console.log(props)
  return (
    <div className='recipe'>
      <h2>{props.recipe.title}</h2>
      <p>{props.recipe.content}</p>
      <Comment />
    </div>
  )
}

export default Article