import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="navLink">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/comments">Beer Thoughts</NavLink>
      </nav>
    </header>
  )
}

export default Header
