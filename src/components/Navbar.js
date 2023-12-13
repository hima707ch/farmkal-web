import React from 'react'
import logo from '../images/farmkal.png';
import './styles/navbar.css'

const Navbar = () => {
  return (
    <div className='nav-cont'>
        <img className='logo' src = {logo} />
        <input />
        
        <div className='nav-list'>
        
            <li> Home </li>
            <li> Products </li>
            <li> Login </li>
            <li> cart </li>

        </div>
    
    </div>
  )
}

export default Navbar