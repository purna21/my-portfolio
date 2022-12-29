import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div className='skills' id='skills'>
            <h2>Skills</h2>
            <div className="skill_details">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png?20170517184425" alt="html-logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/640px-CSS3_logo_and_wordmark.svg.png" alt="css-logo" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png" alt="js-logo" />
                <img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="scss-logo" />
                <img src="https://ionicframework.com/docs/icons/logo-react-icon.png" alt="react-logo" />
                <img src="https://mui.com/static/logo.png" alt="materialUi-logo" />
                <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git-logo" />
            </div>
        </div>
    )
}

export default Skills