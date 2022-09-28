import React from 'react'
import "./Navbar.scss"

import logo from "../Assets/logo.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
    </div>
  )
}

export default Navbar