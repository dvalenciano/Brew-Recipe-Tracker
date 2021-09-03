import React, { useState, useEffect } from 'react'
import RecipePost from '../components/RecipePost'
import RecipeList from '../components/RecipeList'

export default function Home() {
  const [category, setCategory] = useState('IPA')

  function chooseCategory(e) {
    setCategory(e.target.name)
  }

  return (
    <div>
      <button className="homebutton" onClick={chooseCategory} name="IPA">
        IPA
      </button>
      <button className="homebutton" onClick={chooseCategory} name="Pale Ale">
        Pale Ale
      </button>
      <button className="homebutton" onClick={chooseCategory} name="Stout">
        Stout
      </button>
      <button className="homebutton" onClick={chooseCategory} name="Other">
        Other
      </button>
      <RecipePost category={category} />
      <RecipeList category={category} />
    </div>
  )
}
