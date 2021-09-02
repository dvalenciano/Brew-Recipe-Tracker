import React, { useState, useEffect } from 'react'
import ForumList from '../components/ForumList'

export default function Forum() {
  const [category, setCategory] = useState('IPA')

  function chooseCategory(e) {
    setCategory(e.target.name)
  }

  return (
    <div>
      <ForumList />
    </div>
  )
}
