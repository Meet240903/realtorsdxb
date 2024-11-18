import React from 'react'
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsOverviewSection.css'

const ProjectDetailsOverviewSection = ({ sectionData }) => {

    return (
        <>
            <div className='project-details-overview-section-container'>
                <div className='project-details-overview-section-title'>
                    <h1>Overview</h1>
                </div>
                <div className='row mx-0 project-details-overview-section-content'>
                    <div className='col-md-4 project-details-overview-section-left-content'>
                        <img src={sectionData?.sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-5 project-details-overview-section-middle-content'>
                        <p>{sectionData?.mainContent}</p>
                        <small>{sectionData?.smallContent}</small>
                    </div>
                    <div className='col-md-3 project-details-overview-section-right-content'>
                        <div className='project-details-overview-section-right-content-details'>
                            {
                                sectionData?.projectDetails?.map((data, index) => (
                                    <div className='project-details-overview-section-right-content-details-flex' key={index}>
                                        <p>{data?.title}</p>
                                        <small>{data?.value}</small>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectDetailsOverviewSection
