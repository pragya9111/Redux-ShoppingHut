import React from 'react'
import '../Navbar/Nav.css'

function Nav() {
  return (
    <div className='nav'>
      <div className='logo'>
        <h1>Shopping<span>Hut</span></h1>
      </div>
      <div className='menu'>
        <input type="text" placeholder='Search...' />
        <i class="ri-search-line"></i>
        <i class="ri-menu-line"></i>
      </div>
    </div>
  )
}

export default Nav