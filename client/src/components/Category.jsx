import React from 'react'
import Comment from './Comment'

const Category= (props) => {
console.log(props)
  return (
    <div className='category'>
      <h2>{props.category.name}</h2>
      <h4>{props.category.category}</h4>
      <p>{props.category.content}</p>
      <Comment />
    </div>
  )
}

export default Category