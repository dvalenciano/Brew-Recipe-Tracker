import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'
import RecipeList from '../components/RecipeList'

export default function Home() {
  const [category, setCategory] = useState('IPA')

  // useEffect (() => {
  //   async function getCategories() {
  //     const res = await axios.get(`${BASE_URL}/recipes`)
  //     console.log(res)
  //     setCategories(res.data.results)
  //   }
  //   getCategories()
  // },[])

  return (
    <div>
      <button>IPA</button>
      <button>Pale Ale</button>
      <button>Stout</button>
      <button>Other</button>

      <RecipeList category={category} />
    </div>
  )
}
