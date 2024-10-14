import React from 'react'
import './header.css'
import logo from './../../images/logo.svg'
const Header = () => {
  return (
    <div className='header'>
            <img className="logo" alt="logo" src={logo} />
    </div>
  )
}

export default Header