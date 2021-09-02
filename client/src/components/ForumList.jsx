import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const ForumList = () => {
  const [comments, setcomments] = useState([])
  useEffect(() => {
    getComments()
  }, [])

  async function getComments() {
    const res = await axios.get(`${BASE_URL}/comments`)
    setcomments(res.data)
  }
  console.log(comments)

  return (
    <div className="commentList">
      <h2>Beer Thoughts</h2>

      {comments.map((comment) => {
        return (
          <div className="commentItem" key={comment._id}>
            <p>{comment.content}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ForumList
