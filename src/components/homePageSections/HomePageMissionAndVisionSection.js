import React from 'react'
import '../../assets/css/homePageSectionCSS/homePageMissionAndVisionSection.css'
import sectionImg1 from '../../assets/images/home/missionAndVisionSectionImgs/sectionImg1.jpg'
import sectionImg2 from '../../assets/images/home/missionAndVisionSectionImgs/sectionImg2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const HomePageMissionAndVisionSection = () => {
    return (
        <>
            <div className='home-page-mission-and-vision-section-container'>
                <div className='home-page-mission-and-vision-section-title'>
                    <small>Who we are</small>
                    <h2>Unlock the door to limitless investment possibilities in Dubai's thriving real estate market with Realtors DXB.</h2>
                </div>
                <div className='home-page-mission-and-vision-section-right-img'>
                    <img src={sectionImg1} className='img-fluid' alt='section-img' />
                </div>
                <div className='home-page-mission-and-vision-section-content'>
                    <div className='home-page-mission-and-vision-section-left-img'>
                        <img src={sectionImg2} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='home-page-mission-and-vision-section-inner-content'>
                        <h4>Our missions</h4>
                        <p>At Realtors DXB, our mission is to empower investors with the information and opportunities they need to make sound real estate investments in the dynamic Dubai market.</p>
                    </div>
                    <div className='home-page-mission-and-vision-section-inner-content'>
                        <h4>Our vision</h4>
                        <p>Our vision is to be the trusted partner for real estate investors, guiding them towards prosperity and success through strategic property investments in the heart of Dubai.</p>
                        <button><FontAwesomeIcon icon={faArrowRightLong} /> more about us</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageMissionAndVisionSection
