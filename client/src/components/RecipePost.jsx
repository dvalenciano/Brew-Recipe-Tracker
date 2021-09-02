import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../globals'

const RecipePost = ({ category }) => {
  useEffect(() => {}, [category])

  async function postRecipe() {
    const res = await axios.get(`${BASE_URL}/recipes`)
  }

  return <div>My post is rendering</div>
}

export default RecipePost
