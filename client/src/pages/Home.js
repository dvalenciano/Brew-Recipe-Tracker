import React, { useState, useEffect } from 'react'
import Category from '../components/Category'
import axios from 'axios'
import {BASE_URL} from '../globals'

export default function Home() {
  const [category, setCategories] = useState([])

  


  useEffect (() => {
    async function getCategories() {
      const res = await axios.get(`${BASE_URL}/recipes/:category`)
      console.log(res)
      setCategories(res.data.results)
    }
    getCategories()
  },[])
  

  return (
    <div>
      <div className="recipes">
        <h2>Categories</h2>
        <section className="container-grid">
          
          {category.map((category_result) => (
            <Category key={category_result.id} {...category_result}/>
          ))}
          <Category />
        </section>
      </div>
    </div>
  )






}