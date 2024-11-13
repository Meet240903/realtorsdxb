import React from 'react'
import '../../assets/css/aboutUsPageSectionCSS/aboutUsPageOurMissionSection.css'
import sectionImg from '../../assets/images/aboutus/ourMissionSectionImg.png'

const AboutUsPageOurMissionSection = () => {
    return (
        <>
            <div className='about-us-page-our-mission-section-container'>
                <div className='row mx-0 about-us-page-our-mission-section-content'>
                    <div className='col-md-6 about-us-page-our-mission-section-left-content'>
                        <img src={sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-6 about-us-page-our-mission-section-right-content'>
                        <span>our mission</span>
                        <h2>To be the most trusted name in real estate globally</h2>
                        <p>We’re here to guide you through the exciting journey of property investment in the UAE. Our extensive local knowledge and global expertise make us the go-to destination for investors seeking prime real estate opportunities in Dubai.</p>
                        <button>EXPLORE MORE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUsPageOurMissionSection
