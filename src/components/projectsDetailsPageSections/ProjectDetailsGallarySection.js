import React, { useState } from 'react'
import '../../assets/css/projectDetailsPageSectionCSS/projectDetailsGallerySection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ProjectDetailsGallarySection = ({ sectionData }) => {
    const [currentTab, setCurrentTab] = useState(sectionData[0])
    return (
        <>
            <div className='project-details-gallary-section-container'>
                <div className='project-details-gallary-section-title'>
                    <h2>Gallery</h2>
                </div>
                <div className='project-details-gallary-section-tab'>
                    {
                        sectionData?.map((data, index) => (
                            <p key={index} onClick={() => setCurrentTab(sectionData[index])}
                                style={{
                                    borderBottom: currentTab?.tabTitle === data?.tabTitle ? '2px solid #bda588' : ''
                                }}
                            >{data?.tabTitle}</p>
                        ))
                    }
                </div>
                <div className='project-details-gallary-section-content'>
                    {currentTab?.contentData?.map((data, index) => (
                        <div key={index} className='gallery-item'>
                            <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                            <div className='overlay'>
                                <FontAwesomeIcon className='gallery-search-icon' icon={faSearch} />
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </>
    )
}

export default ProjectDetailsGallarySection
