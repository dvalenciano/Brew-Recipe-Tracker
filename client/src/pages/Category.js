import React from 'react'

function Category(props) {
  return (
    <div className="category" onClick={props.onClick}>
      <div className="info-wrapper flex-col">
        <h3>{props.name}</h3>
        <h5>{props.category}</h5>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

export default Category