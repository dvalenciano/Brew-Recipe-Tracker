import React, { useState, useEffect } from 'react'
import Recipe from '../components/Recipe'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default function Home() {
  const [category, setCategories] = useState([])

  useEffect (() => {
    if (!searched) {
      getCategories()
    }
  },[])

  const getCategories = async () => {
    const res = await axios.get(
      `${BASE_URL}/recipes`
    ) 
   setCategories(res.data.results)
    console.log(getCategories)
  }

  return (
    <div>
      <div className="recipes">
        <h2>Recipes</h2>
        <section className="container-grid">
          {recipes.map((recipe_result) => (
            <Recipe key={recipe_result.id} {...recipe_result}/>
          ))}
        </section>
      </div>
    </div>
  )






}