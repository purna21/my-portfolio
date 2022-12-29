import React from 'react'
import './Project.css'

function Project({ title, desc, imageUrl, projectUrl, order }) {
    return (
        <div className='project'>
            <div className="project_img_container" style={order && { order }}>
                <img className='project_img' src={imageUrl} alt="project" />
            </div>
            <div className="project_details">
                <h3 className="project_name"><a href={projectUrl} target='_blank'>{title}</a></h3>
                <p className="project_desc">{desc}</p>
            </div>
        </div>
    )
}

export default Project