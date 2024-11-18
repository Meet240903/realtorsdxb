import React from 'react'
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsHeader.css'
import { Link } from 'react-router-dom'

const ProjectDetailsHeader = () => {
    const headerData = [
        { title: "Overview", id: 'overview' },
        { title: "Amenities", id: 'amenities' },
        { title: "Plans", id: 'plans' },
        { title: "Gallery", id: 'gallery' },
        { title: "Video", id: 'video' },
        { title: "Location", id: 'location' },
        { title: "Enquiry", id: 'enquiry' },
    ]
    return (
        <>
            <div className='project-details-page-header-section-container'>
                {
                    headerData?.map((data, index) => (
                        <>
                            <Link to={`#${data?.id}`} key={index} style={{ textDecoration: 'none' }}>
                                <h4>{data?.title}</h4>
                            </Link>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default ProjectDetailsHeader
