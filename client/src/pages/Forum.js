import React, { useState, useEffect } from 'react'
import ForumList from '../components/ForumList'
import ForumPost from '../components/ForumPost'

export default function Forum() {
  const [category, setCategory] = useState('IPA')

  function chooseCategory(e) {
    setCategory(e.target.name)
  }

  return (
    <div className="forumHome">
      <ForumPost />
      <ForumList />
    </div>
  )
}
