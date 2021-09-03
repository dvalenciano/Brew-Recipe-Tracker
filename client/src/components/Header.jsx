import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav className="navLink">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/comments">Beer Thoughts</NavLink>
      </nav>
    </header>
  )
}

export default Header
