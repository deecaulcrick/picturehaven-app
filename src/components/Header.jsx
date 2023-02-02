import React from 'react'
import '../css/Header.css'
import logo from '../images/PhotoHaven logo.svg'


function Header() {
  return (
    <div className='Header'>
      <img src={logo} className='logo' alt=''/>
    </div>
        
  )
}

export default Header