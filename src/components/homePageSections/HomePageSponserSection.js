import React from 'react'
import '../../assets/css/homePageSectionCSS/homePageSponserSection.css'
import sectionImg1 from '../../assets/images/home/sponserSectionImgs/sectionImg1.png'
import sectionImg2 from '../../assets/images/home/sponserSectionImgs/sectionImg2.png'
import sectionImg3 from '../../assets/images/home/sponserSectionImgs/sectionImg3.png'
import sectionImg4 from '../../assets/images/home/sponserSectionImgs/sectionImg4.png'
import sectionImg5 from '../../assets/images/home/sponserSectionImgs/sectionImg5.png'
import sectionImg6 from '../../assets/images/home/sponserSectionImgs/sectionImg6.png'

const HomePageSponserSection = () => {
    const sectionData = [
        { sectionImg: sectionImg1 },
        { sectionImg: sectionImg2 },
        { sectionImg: sectionImg3 },
        { sectionImg: sectionImg4 },
        { sectionImg: sectionImg5 },
        { sectionImg: sectionImg6 },
    ]
    return (
        <>
            <div className='home-page-sponser-section-container'>
                {
                    sectionData?.map((data, index) => (
                        <div className='home-page-sponser-section-sponser-boxs' key={index}>
                            <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HomePageSponserSection
