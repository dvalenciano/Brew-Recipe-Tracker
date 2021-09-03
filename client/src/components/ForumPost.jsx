import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const CommentPost = () => {
  useEffect(() => {})

  const [newComment, setComment] = useState({
    content: ''
  })

  async function postComment(formdata) {
    const res = await axios.post(`${BASE_URL}/comments`, formdata)
  }
  const handleChange = (e) => {
    setComment({ newComment: e.target.value })
  }
  return (
    <div>
      <h3>Your Thought</h3>
      <input
        type="text"
        placeholder="your thoughts here"
        name="name"
        onChange={(e) => {
          handleChange(e)
        }}
      />

      <button
        onClick={() => {
          postComment(newComment)
        }}
      >
        Add Thought
      </button>
    </div>
  )
}

export default CommentPost
