import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CommentPost = () => {
  useEffect(() => {})

  const [newComment, setComment] = useState({
    content: ''
  })

  async function postComment(formdata) {
    const res = await axios.post(`${BASE_URL}/recipes`, formdata)
  }
  const handleChange = (e) => {
    setRecipe({ comment: e.target.value })
  }
  return (
    <div>
      <h3>New Recipe</h3>
      <input
        type="text"
        placeholder="name"
        name="name"
        onChange={(e) => {
          handleChange(e)
        }}
      />
      <input
        type="text"
        placeholder="category"
        name="category"
        onChange={(e) => {
          handleChange(e)
        }}
      />
      <input
        type="text"
        placeholder="content"
        name="content"
        onChange={(e) => {
          handleChange(e)
        }}
      />
      <button
        onClick={() => {
          postRecipe(newRecipe)
        }}
      >
        Post
      </button>
    </div>
  )
}

export default RecipePost
