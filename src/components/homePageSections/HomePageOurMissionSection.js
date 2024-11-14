import React from 'react'
import '../../assets/css/homePageSectionCSS/homePageOurMissionSection.css'
import sectionImg1 from '../../assets/images/home/ourMissionSectionImgs/sectionImg1.png'
import sectionImg2 from '../../assets/images/home/ourMissionSectionImgs/sectionImg2.png'
import sectionImg3 from '../../assets/images/home/ourMissionSectionImgs/sectionImg3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const HomePageOurMissionSection = () => {
    const sectionData = [
        {
            sectionImg: sectionImg1,
            title: "Transparency and Trust",
            content: "Trust is the cornerstone of our business. We prioritize transparency in all our dealings, providing you with peace of mind throughout your investment journey.",
        },
        {
            sectionImg: sectionImg2,
            title: "Tailored Solutions",
            content: "We understand that every investor has unique goals. Our team is dedicated to crafting personalized investment strategies to meet your needs.",
        },
        {
            sectionImg: sectionImg3,
            title: "Full-Service Support",
            content: "From property selection and negotiation to legal and financial guidance, we offer a comprehensive range of services to simplify your investment process.",
        },
    ]
    return (
        <>
            <div className='home-page-our-mission-section-container'>
                <div className='row mx-0 home-page-our-mission-section-title'>
                    <div className='col-md-6 home-page-our-mission-section-title-left-content'>
                        <small>our mission</small>
                        <h2>To be the most trusted name in real estate globally</h2>
                    </div>
                    <div className='col-md-6 home-page-our-mission-section-title-right-content'>
                        <p>Welcome to UAE Investors Hub, your trusted partner for real estate investment opportunities in Dubai. With a passion for real estate and a commitment to excellence, we’re here to guide you through the exciting journey of property investment in the UAE. Our extensive local knowledge and global expertise make us the go-to destination for investors seeking prime real estate opportunities in Dubai.</p>
                    </div>
                </div>
                <div className='home-page-our-mission-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='home-page-our-mission-section-inner-content' key={index}>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                <h4>{data?.title}</h4>
                                <p>{data?.content}</p>
                                <button>explore more <FontAwesomeIcon icon={faArrowRightLong} /></button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default HomePageOurMissionSection
