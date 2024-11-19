import React from 'react'
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsLocationSection.css'

const ProjectDetailsLocationSection = ({ sectionImg }) => {
    return (
        <>
            <div className='project-details-location-section-container'>
                <h2>prime location</h2>
                <img src={sectionImg} className='img-fluid' alt='section-img' />
            </div>
        </>
    )
}

export default ProjectDetailsLocationSection
