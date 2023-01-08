import React from 'react'
import './Header.css'
import myResume from '../purnachandra_resume.pdf'

function Header() {
    return (
        <div className="header_bg_gray_color">
            <div className="header_bg_white_color"></div>
            <div className='header'>
                <h2 className='header_title'>
                    Hello <br />
                    I'm Purnachandra <br />
                    Bandaru
                </h2>
                <a className='header_cta' href={myResume} download >Read My Resume</a>
                <div className="header_social_links">
                    <a className='header_social_link' href="https://www.linkedin.com/in/purnachandra-bandaru" target="_blank">.In</a>
                    <a className='header_social_link' href="https://medium.com/@mepurnachandra21" target="_blank">.Md</a>
                    <a className='header_social_link' href="/">.Ig</a>
                </div>
            </div>
        </div>
    )
}

export default Header