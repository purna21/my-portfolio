import React from 'react'
import './Navbar.css'
// you can't load local img / relative path in react.
// so, we need to import and use like below.
import Logo from '../Logo.png'

function Navbar() {
    return (
        <div className='navbar'>
            <a href="/"><img className='navbar_logo' src={Logo} alt="logo" /></a>
            <nav className="navbar_links">
                <a href="/" className="navbar_link">Projects</a>
                <a href="/" className="navbar_link">About</a>
                <a href="/" className="navbar_link">Contact</a>
            </nav>
        </div>
    )
}

export default Navbar
