import React from 'react'
import Comment from './Comment'

const Category= (props) => {
console.log(props)
  return (
    <div className='category'>
      <h2>{props.name}</h2>
      <h4>{props.category}</h4>
      <p>{props.content}</p>
      <Comment />
    </div>
  )
}

export default Category