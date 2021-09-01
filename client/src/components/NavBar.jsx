import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = () => {
  
  return(
    <header>
      <nav className="nav-bar">

        <section className='left-nav'>
        <NavLink to='/'>BrewMe</NavLink>
        </section>

        <section className='right-nav'>
        <NavLink to='/soccer'>IPA</NavLink>
        <NavLink to='/soccer'>Pale Ale</NavLink>
        <NavLink to='/football'>Stout</NavLink>
        <NavLink to='/boxing'>Others</NavLink>
        </section>

      </nav>
    </header>
    
  )
}

export default NavBar