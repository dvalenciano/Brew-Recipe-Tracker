import React, { useState, useEffect } from 'react'

import RecipeList from '../components/RecipeList'

export default function Home() {
  const [category, setCategory] = useState('IPA')

  function chooseCategory(e) {
    setCategory(e.target.name)
  }

  return (
    <div>
      <button onClick={chooseCategory} name="IPA">
        IPA
      </button>
      <button onClick={chooseCategory} name="Pale Ale">
        Pale Ale
      </button>
      <button onClick={chooseCategory} name="Stout">
        Stout
      </button>
      <button onClick={chooseCategory} name="Other">
        Other
      </button>
      {/* <RecipePost category={category} /> */}
      <RecipeList category={category} />
    </div>
  )
}
