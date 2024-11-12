import React from 'react'
import sectionImg1 from '../../assets/images/home/topSectionImgs/sliderImg1.jpg'

const HomePageTopSection = () => {
    return (
        <>
            <div className='home-page-top-section-container'>
                <img src={sectionImg1} className='img-fluid' alt='section-img' />
            </div>
        </>
    )
}

export default HomePageTopSection
