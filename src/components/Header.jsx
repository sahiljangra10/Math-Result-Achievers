import React from 'react'
import './Header.css'
import logo from '../assets/MRE_logo.png';
function Header() {
  return (
      <div className='main'>
        <img className='logo' src={logo} alt="" />
        <p>Math Result Achievers</p>
      </div>
  )
}

export default Header