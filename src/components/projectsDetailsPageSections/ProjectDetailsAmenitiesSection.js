import React from 'react'
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsAmenitiesSection.css'

const ProjectDetailsAmenitiesSection = ({ sectionData }) => {
    return (
        <>
            <div className='project-details-page-amenities-section-container'>
                <div className='project-details-page-amenities-section-title'>
                    <h3>{sectionData?.mainTitle}</h3>
                    <p>{sectionData?.content}</p>
                </div>
                <div className='project-details-page-amenities-section-content'>
                    {
                        sectionData?.contentData?.map((data, index) => (
                            <div className='project-details-page-amenities-section-content-box' key={index}>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                <p>{data?.title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='project-details-page-amenities-section-button'>
                    <button>Submit inquiry or request a call back</button>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsAmenitiesSection
