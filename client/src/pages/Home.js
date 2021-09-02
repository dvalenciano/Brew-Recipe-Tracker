import React, { useState, useEffect } from 'react'
import Recipe from '../components/Category'
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
      `${BASE_URL}/recipes/:category`
    ) 
   setCategories(res.data.results)
    console.log(getCategories)
  }

  return (
    <div>
      <div className="recipes">
        <h2>Categories</h2>
        <section className="container-grid">
          {categories.map((category_result) => (
            <Recipe key={category_result.id} {...category_result}/>
          ))}
        </section>
      </div>
    </div>
  )






}