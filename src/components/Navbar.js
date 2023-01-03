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
                <a href="#about" className="navbar_link">About</a>
                <a href="#skills" className="navbar_link">Skills</a>
                <a href="#project" className="navbar_link">Projects</a>
                <a href="#contact" className="navbar_link">Contact</a>
            </nav>
            {/* Menu for smaller screens */}
            <div className="menu_container">
                <input type="checkbox" id='menu' />
                <label htmlFor="menu"><i class="fa-solid fa-circle-chevron-down menu"></i></label>
                <nav className="menu_links">
                    <a href="#about" className="menu_link">About</a>
                    <a href="#skills" className="menu_link">Skills</a>
                    <a href="#project" className="menu_link">Projects</a>
                    <a href="#contact" className="menu_link">Contact</a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
