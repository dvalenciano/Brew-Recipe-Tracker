import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  
  return(
   <header>
     <nav>
       <NavLink to='/'>Home</NavLink>
       <NavLink to='/recipes'>Beer Type</NavLink>
     </nav>
   </header>
    
  )
}

export default Header