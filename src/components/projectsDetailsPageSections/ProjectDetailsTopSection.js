import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsTopSection.css'
import { Link } from 'react-router-dom'

const ProjectDetailsTopSection = ({ title, bgImg }) => {
    return (
        <>
            <div className={`project-details-top-section-container ${bgImg ? 'bgimg-overlay' : ''}`}
                style={{
                    backgroundImage: bgImg ? `url(${bgImg})` : '',
                }}
            >
                <div className='project-details-top-section-content'>
                    <h1>{title}</h1>
                    <Link to='/' style={{ color: '#fff', textDecoration: 'none' }} target='_top'>
                        <p>Visit website <FontAwesomeIcon icon={faArrowRightLong} /></p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsTopSection
