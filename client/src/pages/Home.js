import React, { useState, useEffect } from 'react'
import Category from '../components/Category'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default function Home() {
  const [category, setCategories] = useState([])

  

  const getCategories = async () => {
    const res = await axios.get(
      `${BASE_URL}/recipes/:category`
    ) 
    console.log(res)
    setCategories(res.data.results)
    
  }

  useEffect (() => {
    async function getCategories() {}
  },[])
  

  return (
    <div>
      <div className="recipes">
        <h2>Categories</h2>
        <section className="container-grid">
          {categories.map((category_result) => (
            <Category key={category_result.id} {...category_result}/>
          ))}
        </section>
      </div>
    </div>
  )






}